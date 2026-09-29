import type { ImageMetadata } from "astro";

// Photos reprises de l'ancien site, dans src/assets/photos/.
// On y fait référence par leur nom sans extension : photo("bureau-1").
const files = import.meta.glob<{ default: ImageMetadata }>("../assets/photos/*.{jpg,jpeg,png,webp}", { eager: true });

const byName = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const name = path.split("/").pop()!.replace(/\.\w+$/, "");
  byName.set(name, mod.default);
}

export function photo(name: string): ImageMetadata {
  const img = byName.get(name);
  if (!img) throw new Error(`Photo introuvable : ${name} (src/assets/photos/)`);
  return img;
}

// Textes alternatifs, décrivant ce que montre chaque photo.
export const alts: Record<string, string> = {
  "accueil-1": "Agente d'entretien Neo Clean avec son seau de produits",
  "accueil-2": "Agent d'entretien nettoyant une vitre dans des bureaux",
  "accueil-3": "Deux agents en tenue de protection lors d'une désinfection",
  "aines-1": "Aide ménagère chez une personne âgée",
  "airbnb-1": "Aspiration d'une chambre de location meublée",
  "airbnb-2": "Ménage d'un salon avant l'arrivée de voyageurs",
  "bureau-1": "Nettoyage d'un poste de travail dans des bureaux",
  "bureau-2": "Dépoussiérage d'un bureau et de ses accessoires",
  "chantier-1": "Appartement en fin de travaux avant nettoyage",
  "chantier-2": "Balayage des gravats et poussières de chantier",
  "commerce-2": "Nettoyage d'une vitrine réfrigérée de commerce",
  "copro-1": "Aspiration d'un appartement par une agente d'entretien",
  "copro-2": "Équipe d'entretien dans une cage d'escalier",
  "coworking-1": "Espace de coworking avec postes partagés",
  "coworking-2": "Équipe de nettoyage dans un open space",
  "debarras-1": "Pièce encombrée avant débarras",
  "debarras-2": "Évacuation de mobilier lors d'un débarras",
  "desinfection-1": "Désinfection d'une cuisine par un agent équipé",
  "domicile-1": "Deux intervenants lors d'un ménage à domicile",
  "equipe-1": "Équipe d'agents d'entretien Neo Clean",
  "equipe-2": "Agents d'entretien réunis avec leur matériel",
  "hotel-1": "Préparation d'un lit dans une chambre d'hôtel",
  "industriel-1": "Nettoyage d'un atelier de production",
  "industriel-2": "Agents d'entretien en intervention sur un site industriel",
  "medical-1": "Lavage d'un sol carrelé au balai à plat",
  "medical-2": "Agente d'entretien en tenue professionnelle",
  "ponctuel-1": "Nettoyage des plinthes lors d'un grand ménage",
  "ponctuel-2": "Dépoussiérage d'un écran d'ordinateur à domicile",
  "regulier-1": "Ménage régulier dans un salon",
  "regulier-2": "Aide ménagère chez une cliente âgée",
  "repassage-1": "Repassage d'une chemise à domicile",
  "repassage-2": "Repassage d'une pile de linge",
  "restaurant-1": "Nettoyage d'une table de restaurant",
  "sols-1": "Shampooing d'une moquette par injection-extraction",
  "sols-2": "Entretien d'un parquet",
  "sols-3": "Autolaveuse sur un sol carrelé",
  "sols-4": "Nettoyage haute pression d'un mur en brique",
  "tags-1": "Lessivage d'un mur intérieur",
  "tags-2": "Retrait de graffitis sur une façade",
  "vitres-1": "Nettoyage d'une vitre à la raclette",
};

export const alt = (name: string) => alts[name] ?? "";

// Cadrage par défaut. Certaines photos viennent d'anciennes bannières dont la moitié
// est délavée pour y poser du texte : on cadre sur la partie nette.
const focus: Record<string, string> = {
  "accueil-3": "80% 50%",
  "bureau-1": "18% 50%",
  "vitres-1": "80% 50%",
  "tags-1": "78% 50%",
  "medical-1": "75% 50%",
  "ponctuel-1": "80% 50%",
};
export const focusFor = (name: string) => focus[name] ?? "50% 50%";
