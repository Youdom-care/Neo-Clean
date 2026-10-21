// Informations de l'entreprise, utilisées partout sur le site (en-tête, pied de page,
// données structurées, mentions légales). Une seule source de vérité : modifier ici.
//
// À compléter avant mise en ligne : les champs marqués TODO.

export const site = {
  name: "Neo Clean",
  // Variantes du nom, déclarées à Google pour qu'il reconnaisse la marque
  alternateNames: ["Neo-Clean", "NeoClean", "Neo Clean Paris", "neo-clean.fr"],
  url: "https://www.neo-clean.fr",
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
  // Coordonnées approximatives du siège (61 rue de Lyon, Paris 12e)
  geo: { latitude: 48.8497, longitude: 2.3713 },

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
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      url: "https://vercel.com",
    },
  },

  // Laisser vide tant que les comptes n'existent pas : aucune icône n'est affichée.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  // Lien de la fiche Google Business Profile (à renseigner dès sa création)
  googleBusinessUrl: "",

  // Point d'envoi du formulaire de devis (Formspree : formspree.io, compte contact@neo-clean.fr).
  formEndpoint: "https://formspree.io/f/maeqqged",

  // Vérification Google Search Console (propriété neo-clean.fr)
  googleSiteVerification: "FraZJ9t74zlE5kb4Em4MrqoNoa723ou3K5NOcMgKij0",
} as const;
