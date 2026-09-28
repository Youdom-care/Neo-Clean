// Catalogue des prestations. Chaque entrée génère une page à l'adresse /<slug>/.
// Les slugs reprennent ceux de l'ancien site pour conserver le référencement ;
// les anciennes pages fusionnées sont redirigées dans public/.htaccess.

export type Audience = "pro" | "particulier";

export interface Service {
  slug: string;
  audience: Audience;
  icon: string;
  title: string; // nom court, utilisé dans les cartes et le menu
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string; // une phrase pour les cartes
  intro: string[];
  included: string[];
  forWho: string[];
  frequency: string;
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  // ——— Entreprises ———
  {
    slug: "nettoyage-bureau",
    audience: "pro",
    icon: "desk",
    title: "Nettoyage de bureaux",
    h1: "Nettoyage de bureaux à Paris et en Île-de-France",
    metaTitle: "Nettoyage de bureaux à Paris et en Île-de-France | Neo Clean",
    metaDescription:
      "Entretien régulier de vos bureaux par une équipe dédiée : sols, postes de travail, sanitaires, cuisine. Passage tôt le matin ou en soirée. Devis gratuit sous 24 h.",
    summary: "Entretien quotidien ou hebdomadaire de vos espaces de travail, en dehors de vos heures d'activité.",
    intro: [
      "Des bureaux propres, ce sont des équipes qui travaillent dans de bonnes conditions et des visiteurs qui gardent une bonne image de votre entreprise. Neo Clean assure l'entretien de vos locaux avec un agent attitré, qui connaît vos lieux et vos habitudes.",
      "Nous intervenons tôt le matin, le soir ou pendant la journée selon votre organisation, avec un cahier des charges écrit que nous établissons ensemble lors de la visite.",
    ],
    included: [
      "Aspiration et lavage des sols",
      "Dépoussiérage des bureaux, écrans et claviers",
      "Nettoyage et désinfection des sanitaires, réapprovisionnement des consommables",
      "Entretien de la cuisine et de l'espace pause",
      "Vidage des corbeilles et tri des déchets",
      "Désinfection des points de contact : poignées, interrupteurs, boutons d'ascenseur",
    ],
    forWho: ["PME et TPE", "Sièges sociaux", "Cabinets d'avocats et d'expertise comptable", "Agences et start-up"],
    frequency: "De 1 à 5 passages par semaine, ou quotidien",
    faq: [
      {
        q: "Faut-il être présent pendant le nettoyage ?",
        a: "Non. La plupart de nos clients nous confient un badge ou une clé. L'agent intervient en dehors de vos horaires et signale tout incident par écrit.",
      },
      {
        q: "Qui fournit les produits et le matériel ?",
        a: "Nous apportons le matériel et les produits d'entretien. Les consommables (papier, savon, sacs) peuvent être fournis par nous ou par vous, au choix.",
      },
      {
        q: "Que se passe-t-il quand l'agent est absent ?",
        a: "Un remplaçant formé sur votre site assure le passage. Vous êtes prévenu à l'avance et le service n'est pas interrompu.",
      },
    ],
  },
  {
    slug: "nettoyage-espace-coworking",
    audience: "pro",
    icon: "people",
    title: "Espaces de coworking",
    h1: "Nettoyage d'espaces de coworking",
    metaTitle: "Nettoyage d'espaces de coworking à Paris | Neo Clean",
    metaDescription:
      "Entretien des espaces partagés, salles de réunion et cuisines de coworking. Passages adaptés à la fréquentation, désinfection des postes partagés.",
    summary: "Postes partagés, salles de réunion et cuisines entretenus au rythme de la fréquentation.",
    intro: [
      "Dans un coworking, des dizaines de personnes partagent les mêmes bureaux, la même cuisine et les mêmes sanitaires. La propreté y est un argument commercial : c'est l'une des premières choses que remarquent vos membres.",
      "Nous adaptons le nombre et l'horaire des passages à votre fréquentation, avec des remises en ordre rapides en milieu de journée si besoin.",
    ],
    included: [
      "Désinfection des postes en libre accès",
      "Remise en ordre des salles de réunion",
      "Entretien de la cuisine, du lave-vaisselle et du réfrigérateur",
      "Nettoyage des sanitaires et des douches",
      "Entretien des espaces détente et phone-box",
    ],
    forWho: ["Coworkings", "Centres d'affaires", "Tiers-lieux", "Incubateurs"],
    frequency: "Quotidien, avec passage de mi-journée en option",
    faq: [
      {
        q: "Pouvez-vous intervenir pendant les heures d'ouverture ?",
        a: "Oui. Nos agents travaillent discrètement en présence des membres et se concentrent sur les zones communes aux heures d'affluence.",
      },
    ],
  },
  {
    slug: "nettoyage-fin-de-chantier-remise-en-etat",
    audience: "pro",
    icon: "helmet",
    title: "Fin de chantier",
    h1: "Nettoyage de fin de chantier et remise en état",
    metaTitle: "Nettoyage de fin de chantier à Paris | Neo Clean",
    metaDescription:
      "Remise en état après travaux : poussières, traces de peinture et de plâtre, vitres, sols. Locaux prêts à être livrés ou occupés.",
    summary: "Élimination des poussières et résidus de travaux avant la livraison ou l'emménagement.",
    intro: [
      "Après des travaux, la poussière de plâtre se dépose partout, les vitres portent des traces de peinture et les sols des résidus de colle ou de ciment. Ce nettoyage demande du matériel et des produits spécifiques.",
      "Nous intervenons après le départ des corps de métier pour livrer des locaux prêts à être occupés, dans le délai prévu par votre planning.",
    ],
    included: [
      "Évacuation des petits déchets et emballages",
      "Aspiration des poussières fines, y compris en hauteur",
      "Décapage des traces de peinture, plâtre et colle",
      "Nettoyage des vitres, menuiseries et rails",
      "Lavage des sols adapté au revêtement",
      "Nettoyage des sanitaires et équipements neufs",
    ],
    forWho: ["Entreprises du bâtiment", "Promoteurs", "Architectes et maîtres d'œuvre", "Particuliers après rénovation"],
    frequency: "Intervention ponctuelle, sur devis après visite",
    faq: [
      {
        q: "Intervenez-vous dans des logements ?",
        a: "Oui, pour les particuliers comme pour les promoteurs. Le devis est établi après une visite ou sur photos.",
      },
    ],
  },
  {
    slug: "nettoyage-des-vitres",
    audience: "pro",
    icon: "window",
    title: "Nettoyage des vitres",
    h1: "Nettoyage de vitres et de vitrines",
    metaTitle: "Nettoyage de vitres et vitrines à Paris | Neo Clean",
    metaDescription:
      "Vitres, baies vitrées, vitrines et verrières nettoyées à l'intérieur et à l'extérieur, y compris en hauteur grâce à la perche à eau pure.",
    summary: "Vitres, vitrines et verrières, intérieur et extérieur, y compris les accès difficiles.",
    intro: [
      "Des vitres propres laissent entrer la lumière et donnent une image soignée de vos locaux, surtout pour une vitrine de commerce.",
      "Nous utilisons une perche télescopique à eau pure pour les surfaces en hauteur : elle ne laisse aucune trace et évite la nacelle dans la plupart des cas.",
    ],
    included: [
      "Nettoyage des vitres intérieures et extérieures",
      "Encadrements, joints et rebords",
      "Traitement anti-calcaire",
      "Retrait d'autocollants et de graffitis",
      "Vitrines de commerce et verrières",
    ],
    forWho: ["Bureaux", "Commerces", "Copropriétés", "Particuliers"],
    frequency: "Mensuel, trimestriel ou ponctuel",
    faq: [
      {
        q: "Jusqu'à quelle hauteur intervenez-vous ?",
        a: "La perche à eau pure permet de travailler jusqu'au 3e ou 4e étage depuis le sol. Au-delà, nous étudions la solution adaptée lors de la visite.",
      },
    ],
  },
  {
    slug: "nettoyage-petite-copropriete",
    audience: "pro",
    icon: "building",
    title: "Copropriétés",
    h1: "Entretien des parties communes de copropriété",
    metaTitle: "Nettoyage de copropriété et parties communes à Paris | Neo Clean",
    metaDescription:
      "Entretien des halls, escaliers et paliers, sortie des poubelles, distribution du courrier, remplacement de gardien. Pour syndics et conseils syndicaux.",
    summary: "Halls, escaliers, sortie des poubelles, courrier et remplacement de gardien.",
    intro: [
      "Les parties communes sont la première chose que voient les résidents et leurs visiteurs. Nous assurons leur entretien régulier et les tâches qu'effectuait traditionnellement le gardien.",
      "Chaque passage est tracé : le syndic et le conseil syndical savent ce qui a été fait, et quand.",
    ],
    included: [
      "Hall d'entrée, escaliers, paliers et ascenseur",
      "Vitres du hall et boîtes aux lettres",
      "Entrée et sortie des conteneurs selon le calendrier de collecte",
      "Nettoyage du local poubelles",
      "Distribution du courrier",
      "Remplacement de gardien pendant les congés",
      "Entretien des cours et espaces verts",
    ],
    forWho: ["Syndics professionnels", "Syndics bénévoles", "Conseils syndicaux", "Bailleurs"],
    frequency: "De 1 à 6 passages par semaine",
    faq: [
      {
        q: "Travaillez-vous avec les petites copropriétés ?",
        a: "Oui, à partir d'un passage par semaine. Beaucoup de nos immeubles comptent moins de 20 lots.",
      },
      {
        q: "Pouvez-vous remplacer notre gardien pendant ses vacances ?",
        a: "Oui. Nous reprenons ses tâches (entretien, poubelles, courrier) pendant toute la durée de son absence.",
      },
    ],
  },
  {
    slug: "nettoyage-commerce",
    audience: "pro",
    icon: "store",
    title: "Commerces et restaurants",
    h1: "Nettoyage de commerces et de restaurants",
    metaTitle: "Nettoyage de commerces et restaurants à Paris | Neo Clean",
    metaDescription:
      "Entretien de boutiques, restaurants et cuisines professionnelles avant l'ouverture ou après la fermeture. Vitrines, sols, sanitaires, dégraissage.",
    summary: "Boutiques, salles et cuisines prêtes avant l'ouverture, entretenues après la fermeture.",
    intro: [
      "Un client juge un commerce dès la vitrine. En restauration, la propreté est aussi une obligation d'hygiène contrôlée.",
      "Nos agents interviennent avant l'ouverture ou après la fermeture pour que votre surface de vente soit prête sans gêner votre activité.",
    ],
    included: [
      "Vitrines et portes d'entrée",
      "Sols de la surface de vente et de la réserve",
      "Cabines d'essayage et comptoirs",
      "Salle de restaurant et sanitaires clients",
      "Dégraissage des cuisines, hottes et plans de travail",
    ],
    forWho: ["Boutiques", "Restaurants et cafés", "Boulangeries", "Showrooms"],
    frequency: "Quotidien ou plusieurs fois par semaine",
    faq: [
      {
        q: "Intervenez-vous tard le soir ?",
        a: "Oui. Nous adaptons l'horaire de passage à l'heure de fermeture de votre établissement.",
      },
    ],
  },
  {
    slug: "nettoyage-hotel",
    audience: "pro",
    icon: "bed",
    title: "Hôtels",
    h1: "Nettoyage d'hôtels et de résidences hôtelières",
    metaTitle: "Nettoyage d'hôtel à Paris | Neo Clean",
    metaDescription:
      "Renfort ou externalisation du nettoyage des chambres et des parties communes d'hôtels et de résidences hôtelières à Paris.",
    summary: "Chambres, parties communes et renfort en haute saison.",
    intro: [
      "Dans l'hôtellerie, la propreté des chambres se lit directement dans les avis clients. Nous assurons l'entretien de vos chambres et parties communes, en externalisation complète ou en renfort lors des pics d'activité.",
    ],
    included: [
      "Recouche et départ des chambres",
      "Salles de bain et sanitaires",
      "Hall, couloirs et ascenseurs",
      "Salle de petit-déjeuner",
      "Vitres et espaces extérieurs",
    ],
    forWho: ["Hôtels indépendants", "Résidences hôtelières", "Apparthotels"],
    frequency: "Quotidien, selon le taux d'occupation",
    faq: [
      {
        q: "Pouvez-vous intervenir seulement en renfort ?",
        a: "Oui, pour les week-ends, les salons ou la haute saison, en complément de votre équipe.",
      },
    ],
  },
  {
    slug: "nettoyage-et-entretien-cabinet-medical-clinique-pharmacie",
    audience: "pro",
    icon: "medical",
    title: "Cabinets médicaux",
    h1: "Nettoyage de cabinets médicaux, cliniques et pharmacies",
    metaTitle: "Nettoyage de cabinet médical et pharmacie à Paris | Neo Clean",
    metaDescription:
      "Entretien et désinfection des cabinets médicaux, centres de santé, cliniques et pharmacies selon un protocole adapté aux établissements de santé.",
    summary: "Protocole de désinfection adapté aux salles d'attente, de soins et aux officines.",
    intro: [
      "Un cabinet médical reçoit chaque jour des patients fragiles. Son entretien suit un protocole précis : produits virucides et bactéricides, ordre de nettoyage du plus propre au plus sale, gestion des déchets.",
      "Nos agents sont formés à ces règles et interviennent en dehors des consultations.",
    ],
    included: [
      "Désinfection des salles de soins et de consultation",
      "Salle d'attente, accueil et sanitaires",
      "Points de contact et surfaces à risque",
      "Sols avec produits adaptés",
      "Pharmacies : surface de vente, comptoirs, réserve",
    ],
    forWho: ["Cabinets médicaux et dentaires", "Centres de santé", "Cliniques", "Pharmacies", "Laboratoires"],
    frequency: "Quotidien ou plusieurs fois par semaine",
    faq: [
      {
        q: "Gérez-vous les déchets médicaux (DASRI) ?",
        a: "Non. Les déchets d'activités de soins à risques infectieux relèvent d'une filière spécialisée. Nous nous occupons des déchets ménagers et assimilés.",
      },
    ],
  },
  {
    slug: "nettoyage-industriel",
    audience: "pro",
    icon: "factory",
    title: "Locaux industriels",
    h1: "Nettoyage industriel : entrepôts, ateliers et parkings",
    metaTitle: "Nettoyage industriel d'entrepôts et parkings en Île-de-France | Neo Clean",
    metaDescription:
      "Nettoyage d'entrepôts, ateliers, locaux techniques et parkings : autolaveuse, dégraissage, dépoussiérage en hauteur.",
    summary: "Entrepôts, ateliers, locaux techniques et parkings, avec matériel mécanisé.",
    intro: [
      "Les grandes surfaces demandent du matériel adapté. Nous utilisons autolaveuses et aspirateurs industriels pour traiter rapidement entrepôts, ateliers et parkings.",
    ],
    included: [
      "Lavage mécanisé des sols",
      "Dégraissage des zones de production",
      "Dépoussiérage des racks et structures",
      "Nettoyage de parkings souterrains",
      "Vestiaires et sanitaires du personnel",
    ],
    forWho: ["Entrepôts et plateformes logistiques", "Ateliers", "Parkings", "Locaux techniques"],
    frequency: "Régulier ou ponctuel",
    faq: [
      {
        q: "Travaillez-vous le week-end ?",
        a: "Oui, pour éviter d'interrompre votre activité. Le devis précise les créneaux d'intervention.",
      },
    ],
  },
  {
    slug: "desinfection",
    audience: "pro",
    icon: "spray",
    title: "Désinfection",
    h1: "Désinfection de locaux professionnels",
    metaTitle: "Désinfection de locaux à Paris | Neo Clean",
    metaDescription:
      "Désinfection ponctuelle ou régulière des locaux avec des produits virucides et bactéricides normés. Après un cas contagieux ou en prévention.",
    summary: "Désinfection ponctuelle ou régulière avec produits virucides normés.",
    intro: [
      "Après un épisode de gastro-entérite ou de grippe dans vos équipes, ou en prévention dans un lieu très fréquenté, nous désinfectons vos locaux avec des produits conformes aux normes EN 14476 (virucide) et EN 1276 (bactéricide).",
    ],
    included: [
      "Désinfection des surfaces et points de contact",
      "Sanitaires et espaces de restauration",
      "Traitement des sols",
      "Rapport d'intervention",
    ],
    forWho: ["Bureaux", "Commerces", "Crèches et écoles privées", "Salles de sport"],
    frequency: "Ponctuel ou en complément d'un contrat d'entretien",
    faq: [
      {
        q: "Pouvez-vous intervenir rapidement ?",
        a: "Nous faisons notre possible pour intervenir sous 48 h ouvrées après validation du devis.",
      },
    ],
  },
  {
    slug: "entretien-des-sols",
    audience: "pro",
    icon: "floor",
    title: "Sols et surfaces",
    h1: "Entretien des sols : moquette, parquet, marbre et murs",
    metaTitle: "Nettoyage de moquette, parquet et marbre à Paris | Neo Clean",
    metaDescription:
      "Shampooing de moquette, entretien et vitrification de parquet, cristallisation du marbre, lessivage des murs et plafonds.",
    summary: "Shampooing de moquette, parquet, cristallisation du marbre, lessivage des murs.",
    intro: [
      "Chaque revêtement a son traitement. Un bon entretien prolonge la durée de vie d'une moquette ou d'un parquet et évite un remplacement coûteux.",
    ],
    included: [
      "Moquette : aspiration en profondeur, détachage, shampooing par injection-extraction",
      "Parquet : dépoussiérage, lustrage, cirage ou vitrification",
      "Marbre : nettoyage, polissage et cristallisation",
      "Carrelage : décrassage et nettoyage des joints",
      "Lessivage des murs et plafonds",
    ],
    forWho: ["Bureaux", "Hôtels", "Copropriétés", "Particuliers"],
    frequency: "Ponctuel, en général une à deux fois par an",
    faq: [
      {
        q: "Combien de temps faut-il attendre avant de marcher sur une moquette shampouinée ?",
        a: "Comptez quelques heures de séchage. Nous intervenons souvent le vendredi soir pour une reprise le lundi.",
      },
    ],
  },
  {
    slug: "nettoyage-tags",
    audience: "pro",
    icon: "brush",
    title: "Enlèvement de tags",
    h1: "Enlèvement de tags et graffitis",
    metaTitle: "Enlèvement de tags et graffitis à Paris | Neo Clean",
    metaDescription:
      "Effacement de tags et graffitis sur façades, rideaux métalliques, portes et vitrines, avec une méthode adaptée au support.",
    summary: "Façades, rideaux métalliques et vitrines, méthode adaptée au support.",
    intro: [
      "Un tag laissé en place en attire d'autres. Nous l'effaçons avec une méthode choisie selon le support (pierre, brique, métal, verre, peinture) pour ne pas l'abîmer.",
    ],
    included: [
      "Diagnostic du support",
      "Décapage chimique ou nettoyage haute pression",
      "Rideaux métalliques, portes et boîtes aux lettres",
      "Vitres et vitrines",
    ],
    forWho: ["Commerces", "Copropriétés", "Entreprises"],
    frequency: "Ponctuel",
    faq: [
      {
        q: "Le tag peut-il laisser une trace ?",
        a: "Sur les supports poreux, une ombre peut subsister. Nous vous le signalons dans le devis quand c'est le cas.",
      },
    ],
  },
  {
    slug: "debarras",
    audience: "pro",
    icon: "box",
    title: "Débarras",
    h1: "Débarras de caves, bureaux et logements",
    metaTitle: "Débarras de cave, bureau et appartement à Paris | Neo Clean",
    metaDescription:
      "Débarras de caves, greniers, bureaux et logements, évacuation en déchetterie et nettoyage des lieux une fois vidés.",
    summary: "Caves, bureaux et logements vidés, évacués et nettoyés.",
    intro: [
      "Déménagement de bureaux, succession, cave encombrée : nous vidons les lieux, évacuons ce qui doit l'être vers les filières adaptées et nettoyons l'espace libéré.",
    ],
    included: [
      "Tri sur place avec vous",
      "Démontage de mobilier",
      "Évacuation et dépôt en déchetterie",
      "Nettoyage complet après débarras",
    ],
    forWho: ["Entreprises", "Particuliers", "Syndics", "Agences immobilières"],
    frequency: "Ponctuel, sur devis après visite",
    faq: [
      {
        q: "Le devis est-il gratuit ?",
        a: "Oui. Il est établi après une visite ou sur la base de photos.",
      },
    ],
  },

  // ——— Particuliers ———
  {
    slug: "menage-regulier",
    audience: "particulier",
    icon: "calendar",
    title: "Ménage régulier",
    h1: "Ménage régulier à domicile",
    metaTitle: "Femme de ménage à domicile à Paris | Neo Clean",
    metaDescription:
      "Une aide ménagère attitrée, chaque semaine ou tous les quinze jours, à Paris et en Île-de-France. Remplacement en cas d'absence, sans engagement de durée.",
    summary: "La même intervenante chaque semaine ou tous les quinze jours.",
    intro: [
      "Vous retrouvez la même intervenante à chaque passage : elle connaît votre logement, vos habitudes et vos consignes.",
      "Nous nous occupons de tout : recrutement, déclaration, remplacement pendant ses congés. Vous n'avez aucune démarche d'employeur.",
    ],
    included: [
      "Dépoussiérage et aspiration",
      "Lavage des sols",
      "Cuisine : plans de travail, électroménager, vaisselle",
      "Salle de bain et toilettes",
      "Changement des draps",
      "Repassage en option",
    ],
    forWho: ["Actifs", "Familles", "Retraités"],
    frequency: "Hebdomadaire ou tous les quinze jours, 2 h minimum",
    faq: [
      {
        q: "Est-ce que je garde la même intervenante ?",
        a: "Oui, c'est le principe du ménage régulier. En cas d'absence, nous vous proposons un remplaçant.",
      },
      {
        q: "Dois-je fournir les produits ?",
        a: "Oui, l'intervenante utilise vos produits et votre matériel, ce qui vous permet de choisir ce qui entre chez vous.",
      },
    ],
  },
  {
    slug: "menage-ponctuel",
    audience: "particulier",
    icon: "sparkle",
    title: "Ménage ponctuel",
    h1: "Ménage ponctuel à domicile",
    metaTitle: "Ménage ponctuel et grand ménage à domicile à Paris | Neo Clean",
    metaDescription:
      "Un grand ménage avant une réception, après un déménagement ou au changement de saison. Dès 3 heures, sans abonnement.",
    summary: "Un grand ménage quand vous en avez besoin, dès 3 heures.",
    intro: [
      "Avant de recevoir, après un déménagement, au printemps : réservez un ménage à la carte, sans abonnement.",
    ],
    included: [
      "Nettoyage complet des pièces",
      "Intérieur des placards et de l'électroménager sur demande",
      "Vitres accessibles",
      "Détartrage de la salle de bain",
    ],
    forWho: ["Emménagement ou départ d'un logement", "Avant ou après une réception", "Grand ménage de saison"],
    frequency: "Ponctuel, 3 h minimum",
    faq: [
      {
        q: "Combien de temps à l'avance faut-il réserver ?",
        a: "Idéalement une semaine. Nous faisons notre possible pour les demandes plus urgentes.",
      },
    ],
  },
  {
    slug: "service-de-repassage",
    audience: "particulier",
    icon: "iron",
    title: "Repassage",
    h1: "Repassage à domicile",
    metaTitle: "Repassage à domicile à Paris | Neo Clean",
    metaDescription:
      "Votre linge repassé et rangé chez vous, seul ou en complément du ménage. Chemises, draps, linge de maison.",
    summary: "Votre linge repassé et rangé chez vous, seul ou avec le ménage.",
    intro: [
      "Le repassage se fait chez vous, avec votre fer, pendant le passage de ménage ou lors d'un créneau dédié. Votre linge est plié et rangé.",
    ],
    included: ["Chemises et vêtements", "Draps et linge de maison", "Pliage et rangement"],
    forWho: ["Familles", "Actifs"],
    frequency: "Hebdomadaire ou ponctuel",
    faq: [
      {
        q: "Peut-on combiner ménage et repassage ?",
        a: "Oui, c'est la formule la plus demandée. Le temps de repassage s'ajoute au temps de ménage.",
      },
    ],
  },
  {
    slug: "menage-airbnb",
    audience: "particulier",
    icon: "key",
    title: "Ménage Airbnb",
    h1: "Ménage de locations courte durée (Airbnb)",
    metaTitle: "Ménage Airbnb et location courte durée à Paris | Neo Clean",
    metaDescription:
      "Ménage entre deux voyageurs, changement du linge et contrôle du logement pour vos locations Airbnb, Booking ou Abritel à Paris.",
    summary: "Logement remis en état entre deux voyageurs, linge changé.",
    intro: [
      "Entre le départ d'un voyageur et l'arrivée du suivant, le logement doit être impeccable. Nous intervenons sur ce créneau, changeons le linge et vous signalons tout problème avec photos.",
    ],
    included: [
      "Ménage complet entre deux séjours",
      "Changement des draps et serviettes",
      "Réassort des consommables d'accueil",
      "Photos de contrôle après chaque passage",
      "Signalement des dégâts ou objets oubliés",
    ],
    forWho: ["Propriétaires loueurs", "Conciergeries"],
    frequency: "À chaque rotation de voyageurs",
    faq: [
      {
        q: "Gérez-vous le linge ?",
        a: "Nous changeons le linge sur place. La blanchisserie peut être organisée en option : précisez-le dans votre demande.",
      },
    ],
  },
  {
    slug: "menage-pour-les-aines",
    audience: "particulier",
    icon: "heart",
    title: "Aide aux seniors",
    h1: "Ménage pour les personnes âgées et en situation de handicap",
    metaTitle: "Aide ménagère pour personnes âgées à Paris | Neo Clean",
    metaDescription:
      "Aide ménagère régulière pour les personnes âgées ou en situation de handicap : entretien du logement, linge, présence rassurante.",
    summary: "Entretien du logement et présence régulière pour rester chez soi.",
    intro: [
      "Rester chez soi le plus longtemps possible passe par un logement entretenu. Nos intervenantes assurent le ménage et le linge, avec une présence régulière et bienveillante.",
      "Les familles sont tenues informées et peuvent être le contact principal pour l'organisation.",
    ],
    included: ["Entretien courant du logement", "Linge et repassage", "Changement des draps", "Petites courses sur demande"],
    forWho: ["Personnes âgées", "Personnes en situation de handicap", "Familles aidantes"],
    frequency: "Une ou plusieurs fois par semaine",
    faq: [
      {
        q: "Un proche peut-il organiser le service à distance ?",
        a: "Oui. Le contrat, les plannings et les factures peuvent être gérés par un membre de la famille.",
      },
    ],
  },
];

export const proServices = services.filter((s) => s.audience === "pro");
export const homeServices = services.filter((s) => s.audience === "particulier");
