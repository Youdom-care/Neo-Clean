<?php
// Réception du formulaire de devis. Hébergement PHP requis (Hostinger le fournit).
// Envoie la demande par e-mail à NEO_DEST et répond en JSON.

declare(strict_types=1);

const NEO_DEST = 'contact@neo-clean.fr';      // adresse qui reçoit les demandes
const NEO_FROM = 'no-reply@neo-clean.fr';      // doit être une adresse du domaine (SPF)
const MAX_PER_HOUR = 5;                        // limite par adresse IP

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function reply(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reply(405, ['ok' => false, 'error' => 'method']);
}

// Même origine uniquement
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !preg_match('#^https://(www\.)?neo-clean\.fr$#', $origin)) {
    reply(403, ['ok' => false, 'error' => 'origin']);
}

// Piège à robots : on répond « ok » sans rien envoyer
if (!empty($_POST['website'])) {
    reply(200, ['ok' => true]);
}

// Limite simple par IP (fichier temporaire)
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$bucket = sys_get_temp_dir() . '/neo_devis_' . hash('sha256', $ip);
$hits = array_filter(
    is_file($bucket) ? (array) json_decode((string) file_get_contents($bucket), true) : [],
    fn($t) => is_int($t) && $t > time() - 3600
);
if (count($hits) >= MAX_PER_HOUR) {
    reply(429, ['ok' => false, 'error' => 'rate']);
}

function field(string $name, int $max = 200): string {
    $v = trim((string) ($_POST[$name] ?? ''));
    $v = str_replace(["\r", "\0"], '', $v);
    return mb_substr($v, 0, $max);
}
function oneLine(string $v): string {
    return preg_replace('/\s+/', ' ', $v) ?? '';
}

$data = [
    'Profil'        => oneLine(field('profil', 40)),
    'Prestation'    => oneLine(field('service', 120)),
    'Surface (m²)'  => oneLine(field('surface', 12)),
    'Fréquence'     => oneLine(field('frequence', 60)),
    'Code postal'   => oneLine(field('code_postal', 5)),
    'Démarrage'     => oneLine(field('demarrage', 60)),
    'Nom'           => oneLine(field('nom', 120)),
    'Société'       => oneLine(field('societe', 160)),
    'E-mail'        => oneLine(field('email', 160)),
    'Téléphone'     => oneLine(field('telephone', 30)),
];
$message = field('message', 3000);

$errors = [];
if ($data['Nom'] === '') $errors[] = 'nom';
if (!filter_var($data['E-mail'], FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if (!preg_match('/^[0-9+().\s-]{8,30}$/', $data['Téléphone'])) $errors[] = 'telephone';
if (!preg_match('/^[0-9]{5}$/', $data['Code postal'])) $errors[] = 'code_postal';
if (($_POST['consentement'] ?? '') !== 'oui') $errors[] = 'consentement';
if ($errors) {
    reply(422, ['ok' => false, 'error' => 'validation', 'fields' => $errors]);
}

$lines = [];
foreach ($data as $k => $v) {
    if ($v !== '') $lines[] = str_pad($k, 14) . ' : ' . $v;
}
$body = "Nouvelle demande de devis depuis neo-clean.fr\n\n" . implode("\n", $lines)
      . "\n\nPrécisions :\n" . ($message !== '' ? $message : '—')
      . "\n\n— Envoyé le " . date('d/m/Y à H:i') . "\n";

$subject = 'Demande de devis : ' . ($data['Prestation'] ?: 'non précisée') . ' (' . $data['Code postal'] . ')';
$headers = [
    'From: Neo Clean <' . NEO_FROM . '>',
    'Reply-To: ' . $data['E-mail'],
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: neo-clean.fr',
];

$sent = mail(NEO_DEST, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));
if (!$sent) {
    reply(500, ['ok' => false, 'error' => 'mail']);
}

$hits[] = time();
@file_put_contents($bucket, json_encode(array_values($hits)));

reply(200, ['ok' => true]);
