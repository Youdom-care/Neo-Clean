// Informations de l'entreprise, utilisées partout sur le site (en-tête, pied de page,
// données structurées, mentions légales). Une seule source de vérité : modifier ici.
//
// À compléter avant mise en ligne : les champs marqués TODO.

export const site = {
  name: "Neo Clean",
  url: "https://neo-clean.fr",
  tagline: "Entreprise de nettoyage à Paris et en Île-de-France",

  phone: "06 67 22 45 27",
  phoneHref: "tel:+33667224527",
  email: "contact@neo-clean.fr",

  hours: "Du lundi au vendredi, 9h – 19h",
  hoursSchema: ["Mo-Fr 09:00-19:00"],

  address: {
    street: "61 rue de Lyon",
    postalCode: "75012",
    city: "Paris",
    region: "Île-de-France",
    country: "FR",
  },

  legal: {
    company: "YOUDOM-SERVICES",
    legalForm: "", // TODO: forme juridique (SAS, SARL…) et capital social
    capital: "",
    siret: "918 366 600 00016",
    rcs: "", // TODO: ville et numéro RCS
    vat: "FR82918366600",
    director: "", // TODO: nom du directeur de la publication
    sapNumber: "", // TODO: numéro de déclaration SAP (obligatoire pour annoncer le crédit d'impôt)
    host: {
      name: "Hostinger International Ltd",
      address: "61 Lordou Vironos Street, 6023 Larnaca, Chypre",
      url: "https://www.hostinger.fr",
    },
  },

  // Laisser vide tant que les comptes n'existent pas : aucune icône n'est affichée.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  // Point d'envoi du formulaire de devis (voir public/api/devis.php).
  formEndpoint: "/api/devis.php",
} as const;
