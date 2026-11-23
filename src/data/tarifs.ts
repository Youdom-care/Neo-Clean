// Grille tarifaire Neo Clean 2027, validée le 23/11/2026.
// Une seule source de vérité : tous les prix affichés sur le site viennent d'ici.
// Particuliers : prix TTC. Entreprises : prix HT (TVA 20 % en sus).

/** 32.9 → « 32,90 € » */
export const euro = (n: number, decimals = 2) =>
  n.toLocaleString("fr-FR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + " €";

/** Moitié après crédit d'impôt de 50 % */
export const net = (n: number) => Math.round(n * 50) / 100;

// ——— Particuliers (TTC) ———

export const particuliers = {
  regulier: 32.9, // ménage régulier, repassage, aide aux seniors
  ponctuel: 36.9, // ménage ponctuel / grand ménage
  majorationDimanche: 25, // % dimanche et jours fériés
  minimumRegulier: "2 h",
  minimumPonctuel: "3 h",
  minimumSeniors: "1 h 30",
};

export const horaires = [
  { slug: "menage-regulier", t: "Ménage régulier", c: "Chaque semaine ou tous les 15 jours, 2 h minimum, même intervenante", prix: particuliers.regulier },
  { slug: "service-de-repassage", t: "Repassage à domicile", c: "Seul (2 h minimum) ou ajouté au ménage régulier", prix: particuliers.regulier },
  { slug: "menage-pour-les-aines", t: "Aide ménagère seniors et handicap", c: "1 h 30 minimum par passage ; compatible APA selon le plan d'aide", prix: particuliers.regulier },
  { slug: "menage-ponctuel", t: "Ménage ponctuel / grand ménage", c: "Sans abonnement, 3 h minimum", prix: particuliers.ponctuel },
];

export const finDeBail = [
  { t: "Jusqu'à 40 m²", prix: 140 },
  { t: "De 40 à 70 m²", prix: 190 },
  { t: "De 70 à 100 m²", prix: 260 },
];

// Location courte durée : pas de crédit d'impôt (activité de location)
export const airbnb = [
  { t: "Studio / T1", prix: 35 },
  { t: "T2", prix: 50 },
  { t: "T3", prix: 60 },
];

// ——— Entreprises (HT) ———

export const frequences = ["1 passage/sem.", "2 passages/sem.", "3 passages/sem.", "5 passages/sem."];

// € HT par m² et par mois, selon la surface et la fréquence
export const bureaux = [
  { surface: "Jusqu'à 100 m²", prix: [1.6, 2.7, 3.8, 5.9] },
  { surface: "100 à 200 m²", prix: [1.4, 2.5, 3.5, 5.5] },
  { surface: "200 à 400 m²", prix: [1.2, 2.2, 3.1, 4.9] },
  { surface: "400 à 800 m²", prix: [1.0, 1.85, 2.6, 4.2] },
];
export const bureauxMinimum = 150; // € HT/mois

export const tauxPro = {
  regulier: 29, // € HT/h
  ponctuel: 34, // € HT/h, 3 h minimum
  nuit: 10, // % (21 h – 6 h)
  samedi: 15, // %
  dimanche: 50, // % dimanche et jours fériés
};

// Prix « à partir de » affichés par secteur
export const secteurs = [
  { t: "Bureaux et coworkings", prix: "dès 1,00 € HT/m²/mois", base: "Grille ci-dessus, minimum 150 € HT/mois" },
  { t: "Commerces et restaurants", prix: "dès 2,20 € HT/m²/mois", base: "Passage avant l'ouverture, minimum 120 € HT/mois" },
  { t: "Cabinets médicaux et pharmacies", prix: "dès 3,20 € HT/m²/mois", base: "Passage quotidien, protocole de désinfection" },
  { t: "Hôtels", prix: "sur devis", base: "À la chambre (recouche, départ) et parties communes" },
  { t: "Copropriétés", prix: "sur devis", base: "Forfait mensuel selon le nombre de lots et de passages" },
  { t: "Entrepôts, ateliers, parkings", prix: "sur devis", base: "Matériel mécanisé, après visite" },
];

// Prestations ponctuelles : € HT, avec minimum de facturation
export const ponctuelles = [
  { t: "Vitres et vitrines plain-pied (intérieur ou extérieur)", prix: "4,00 € HT/m²", min: 120, service: "nettoyage-des-vitres" },
  { t: "Vitres en hauteur à la perche à eau pure (jusqu'au 4e étage)", prix: "7,00 € HT/m²", min: 180, service: "nettoyage-des-vitres" },
  { t: "Vitrine de commerce, contrat hebdomadaire", prix: "dès 25 € HT/passage", min: null, service: "nettoyage-des-vitres" },
  { t: "Nettoyage de fin de chantier, standard", prix: "6,00 € HT/m²", min: 350, service: "nettoyage-fin-de-chantier-remise-en-etat" },
  { t: "Remise en état lourde (après gros œuvre)", prix: "8,00 € HT/m²", min: 350, service: "nettoyage-fin-de-chantier-remise-en-etat" },
  { t: "Shampooing moquette (injection-extraction et détachage)", prix: "7,00 € HT/m²", min: 150, service: "entretien-des-sols" },
  { t: "Parquet : nettoyage en profondeur et lustrage", prix: "6,00 € HT/m²", min: 150, service: "entretien-des-sols" },
  { t: "Parquet : application de vitrificateur (sans ponçage)", prix: "18,00 € HT/m²", min: 300, service: "entretien-des-sols" },
  { t: "Marbre et pierre : cristallisation", prix: "22,00 € HT/m²", min: 300, service: "entretien-des-sols" },
  { t: "Sols thermoplastiques : décapage et émulsion", prix: "5,00 € HT/m²", min: 200, service: "entretien-des-sols" },
  { t: "Lessivage des murs et plafonds", prix: "4,50 € HT/m²", min: 200, service: "entretien-des-sols" },
  { t: "Désinfection des surfaces et points de contact", prix: "3,00 € HT/m²", min: 290, service: "desinfection" },
  { t: "Enlèvement de tags (décapage chimique)", prix: "15,00 € HT/m²", min: 180, service: "nettoyage-tags" },
  { t: "Protection anti-graffiti", prix: "25,00 € HT/m²", min: null, service: "nettoyage-tags" },
  { t: "Débarras (rez-de-chaussée ou ascenseur)", prix: "55 € HT/m³", min: 250, service: "debarras" },
  { t: "Supplément débarras sans ascenseur, au-delà du 2e étage", prix: "+ 10 € HT/m³", min: null, service: "debarras" },
  { t: "Nettoyage des lieux après débarras", prix: "4,00 € HT/m²", min: null, service: "debarras" },
];

// Prix « à partir de » affiché sur chaque page de service
export const prixParService: Record<string, string> = {
  "nettoyage-bureau": "dès 1,00 € HT/m²/mois",
  "nettoyage-espace-coworking": "dès 1,00 € HT/m²/mois",
  "nettoyage-fin-de-chantier-remise-en-etat": "dès 6,00 € HT/m²",
  "nettoyage-des-vitres": "dès 4,00 € HT/m²",
  "nettoyage-petite-copropriete": "sur devis",
  "nettoyage-commerce": "dès 2,20 € HT/m²/mois",
  "nettoyage-hotel": "sur devis",
  "nettoyage-et-entretien-cabinet-medical-clinique-pharmacie": "dès 3,20 € HT/m²/mois",
  "nettoyage-industriel": "sur devis",
  desinfection: "dès 3,00 € HT/m²",
  "entretien-des-sols": "dès 4,50 € HT/m²",
  "nettoyage-tags": "dès 15,00 € HT/m²",
  debarras: "dès 55 € HT/m³",
  "menage-regulier": `${euro(particuliers.regulier)} TTC/h`,
  "menage-ponctuel": `${euro(particuliers.ponctuel)} TTC/h`,
  "service-de-repassage": `${euro(particuliers.regulier)} TTC/h`,
  "menage-airbnb": `dès ${euro(airbnb[0].prix, 0)} TTC`,
  "menage-pour-les-aines": `${euro(particuliers.regulier)} TTC/h`,
};

// Prix après crédit d'impôt, pour les services qui y ouvrent droit
export const netParService: Record<string, string> = {
  "menage-regulier": `${euro(net(particuliers.regulier))}/h après crédit d'impôt`,
  "menage-ponctuel": `${euro(net(particuliers.ponctuel))}/h après crédit d'impôt`,
  "service-de-repassage": `${euro(net(particuliers.regulier))}/h après crédit d'impôt`,
  "menage-pour-les-aines": `${euro(net(particuliers.regulier))}/h après crédit d'impôt`,
};

export const remises = [
  { t: "Engagement 12 mois", d: "− 5 % sur l'entretien régulier des locaux professionnels." },
  { t: "Plusieurs sites", d: "− 5 à − 10 % selon le nombre de sites confiés." },
  { t: "Parrainage", d: "3 heures offertes au parrain et 2 heures au filleul (particuliers)." },
  { t: "Voisinage", d: "− 5 % pour chaque client lorsque deux clients ou plus sont servis dans le même immeuble (particuliers)." },
];
