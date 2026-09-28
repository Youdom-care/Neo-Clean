// Pages locales : une page par département d'Île-de-France, à l'adresse /<slug>/.
// Chaque texte est propre au territoire pour éviter le contenu dupliqué.

export interface Zone {
  slug: string;
  name: string; // « Paris », « Hauts-de-Seine »…
  code: string; // numéro de département
  in: string; // « à Paris », « dans les Hauts-de-Seine »
  intro: string[];
  areas: string[]; // quartiers d'affaires / pôles cités dans le texte
  cities: string[];
}

export const zones: Zone[] = [
  {
    slug: "nettoyage-bureaux-paris",
    name: "Paris",
    code: "75",
    in: "à Paris",
    intro: [
      "Notre siège est rue de Lyon, dans le 12e arrondissement. Nos agents interviennent dans les 20 arrondissements, du quartier central des affaires (8e, 9e, 2e) aux immeubles de bureaux de l'Est parisien autour de Bercy et de la gare de Lyon.",
      "À Paris, les contraintes sont concrètes : accès par badge, horaires de gardiennage, ascenseurs partagés, stationnement impossible. Nos agents se déplacent en transports en commun et s'adaptent au règlement de chaque immeuble.",
    ],
    areas: ["Quartier central des affaires", "Bercy et gare de Lyon", "Paris Rive Gauche", "Le Marais"],
    cities: Array.from({ length: 20 }, (_, i) => `Paris ${i + 1}${i === 0 ? "er" : "e"}`),
  },
  {
    slug: "nettoyage-bureaux-hauts-de-seine",
    name: "Hauts-de-Seine",
    code: "92",
    in: "dans les Hauts-de-Seine",
    intro: [
      "Les Hauts-de-Seine concentrent le premier quartier d'affaires d'Europe, La Défense, et de nombreux sièges sociaux à Boulogne-Billancourt, Issy-les-Moulineaux ou Levallois-Perret.",
      "Nous entretenons aussi bien des plateaux de bureaux en tour que des cabinets et agences de taille plus modeste, avec des horaires adaptés aux immeubles de grande hauteur.",
    ],
    areas: ["La Défense", "Boulogne-Billancourt", "Issy-les-Moulineaux", "Neuilly-sur-Seine"],
    cities: ["Nanterre", "Courbevoie", "Puteaux", "Boulogne-Billancourt", "Issy-les-Moulineaux", "Levallois-Perret", "Neuilly-sur-Seine", "Rueil-Malmaison", "Clichy", "Montrouge", "Colombes", "Asnières-sur-Seine"],
  },
  {
    slug: "nettoyage-bureaux-seine-saint-denis",
    name: "Seine-Saint-Denis",
    code: "93",
    in: "en Seine-Saint-Denis",
    intro: [
      "La Plaine Saint-Denis, Saint-Ouen et Montreuil accueillent depuis vingt ans de nombreux sièges, studios et plateaux tertiaires. Le département compte aussi beaucoup d'entrepôts et de locaux d'activité autour de Roissy et du Blanc-Mesnil.",
      "Nous y assurons l'entretien de bureaux, de locaux industriels et de parties communes de copropriétés.",
    ],
    areas: ["La Plaine Saint-Denis", "Saint-Ouen", "Montreuil", "Roissy – Paris Nord 2"],
    cities: ["Saint-Denis", "Saint-Ouen-sur-Seine", "Aubervilliers", "Montreuil", "Pantin", "Bobigny", "Noisy-le-Grand", "Bagnolet", "Le Blanc-Mesnil", "Aulnay-sous-Bois", "Rosny-sous-Bois", "Villepinte"],
  },
  {
    slug: "nettoyage-bureaux-val-de-marne",
    name: "Val-de-Marne",
    code: "94",
    in: "dans le Val-de-Marne",
    intro: [
      "Voisin direct de notre siège du 12e, le Val-de-Marne est l'un de nos secteurs les plus proches. Nous intervenons à Ivry, Charenton et Vincennes, dans les zones d'activité de Créteil et de Rungis, et autour d'Orly.",
      "Cabinets médicaux, commerces, bureaux et copropriétés : nos équipes du secteur Est couvrent l'ensemble du département.",
    ],
    areas: ["Créteil", "Ivry-sur-Seine", "Rungis", "Vincennes et Charenton"],
    cities: ["Créteil", "Vitry-sur-Seine", "Ivry-sur-Seine", "Charenton-le-Pont", "Vincennes", "Saint-Maur-des-Fossés", "Maisons-Alfort", "Nogent-sur-Marne", "Villejuif", "Rungis", "Fontenay-sous-Bois", "Champigny-sur-Marne"],
  },
  {
    slug: "nettoyage-bureaux-yvelines",
    name: "Yvelines",
    code: "78",
    in: "dans les Yvelines",
    intro: [
      "Des bureaux de Saint-Quentin-en-Yvelines aux cabinets de Versailles et Saint-Germain-en-Laye, les Yvelines mêlent grands sites tertiaires et activités de proximité.",
      "Nous y proposons des contrats d'entretien réguliers, avec des passages regroupés pour garantir la ponctualité malgré les distances.",
    ],
    areas: ["Saint-Quentin-en-Yvelines", "Versailles", "Vélizy-Villacoublay", "Saint-Germain-en-Laye"],
    cities: ["Versailles", "Saint-Quentin-en-Yvelines", "Vélizy-Villacoublay", "Saint-Germain-en-Laye", "Le Chesnay-Rocquencourt", "Poissy", "Guyancourt", "Montigny-le-Bretonneux", "Plaisir", "Sartrouville"],
  },
  {
    slug: "nettoyage-bureaux-essonne",
    name: "Essonne",
    code: "91",
    in: "en Essonne",
    intro: [
      "L'Essonne compte de grands pôles d'activité : Massy, le plateau de Saclay, Évry-Courcouronnes et Courtabœuf. Laboratoires, bureaux d'études et sièges régionaux y côtoient commerces et cabinets.",
      "Nous adaptons nos protocoles aux locaux techniques et aux laboratoires, en plus de l'entretien classique des bureaux.",
    ],
    areas: ["Massy", "Plateau de Saclay", "Évry-Courcouronnes", "Courtabœuf"],
    cities: ["Massy", "Évry-Courcouronnes", "Palaiseau", "Les Ulis", "Orsay", "Corbeil-Essonnes", "Savigny-sur-Orge", "Longjumeau", "Juvisy-sur-Orge", "Brétigny-sur-Orge"],
  },
  {
    slug: "nettoyage-bureaux-val-d-oise",
    name: "Val-d'Oise",
    code: "95",
    in: "dans le Val-d'Oise",
    intro: [
      "De Cergy-Pontoise à Roissy, le Val-d'Oise réunit une préfecture tertiaire, des zones logistiques et de nombreux commerces.",
      "Nous y entretenons bureaux, entrepôts et parties communes, avec des horaires décalés pour les sites qui fonctionnent en continu.",
    ],
    areas: ["Cergy-Pontoise", "Roissy", "Argenteuil", "Sarcelles"],
    cities: ["Cergy", "Pontoise", "Argenteuil", "Sarcelles", "Gonesse", "Garges-lès-Gonesse", "Franconville", "Ermont", "Bezons", "Roissy-en-France"],
  },
  {
    slug: "nettoyage-bureaux-seine-et-marne",
    name: "Seine-et-Marne",
    code: "77",
    in: "en Seine-et-Marne",
    intro: [
      "Marne-la-Vallée, Chessy et Serris concentrent l'essentiel de l'activité tertiaire et hôtelière de la Seine-et-Marne, autour de Val d'Europe. Melun et Meaux accueillent administrations et commerces.",
      "Nous y intervenons notamment pour l'hôtellerie, les bureaux et les copropriétés récentes.",
    ],
    areas: ["Marne-la-Vallée", "Val d'Europe", "Melun", "Meaux"],
    cities: ["Chessy", "Serris", "Champs-sur-Marne", "Noisiel", "Torcy", "Melun", "Meaux", "Chelles", "Pontault-Combault", "Lognes"],
  },
];
