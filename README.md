# Neo Clean — site vitrine

Site statique de [neo-clean.fr](https://neo-clean.fr), construit avec [Astro](https://astro.build).
Il remplace l'ancien site WordPress/Elementor (voir `audit/audit-neo-clean.html`).

## Démarrer

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère le site dans dist/
npm run preview   # sert dist/ en local
```

## Où modifier quoi

| Quoi | Fichier |
| --- | --- |
| Téléphone, e-mail, adresse, mentions légales, zones | `src/data/site.ts` |
| Services (textes, prestations, FAQ) — une entrée = une page | `src/data/services.ts` |
| Pages fixes (accueil, tarifs, contact…) | `src/pages/*.astro` |
| Couleurs, typographie, composants communs | `src/styles/global.css` |
| Réception du formulaire de devis | `public/api/devis.php` |
| Redirections des anciennes URL, en-têtes de sécurité | `public/.htaccess` |

## Mise en ligne sur Hostinger

1. `npm run build`
2. Envoyer le **contenu** du dossier `dist/` dans `public_html/` (gestionnaire de fichiers ou FTP),
   après avoir sauvegardé puis supprimé l'ancien WordPress.
3. Vérifier que le formulaire de devis envoie bien un e-mail (PHP `mail()` doit être actif).
4. Dans Google Search Console : soumettre `https://neo-clean.fr/sitemap-index.xml`.

## À compléter avant la mise en ligne

Les champs marqués `TODO` dans `src/data/site.ts`, `public/api/devis.php` et `src/pages/tarifs.astro` :

- numéro de téléphone principal et e-mail de contact définitifs ;
- forme juridique, capital, RCS, directeur de la publication ;
- numéro de déclaration de services à la personne (obligatoire pour annoncer le crédit d'impôt) ;
- confirmation des tarifs particuliers (17,65 €/h après crédit d'impôt, repris de l'ancien site) ;
- adresse qui reçoit les demandes de devis.
