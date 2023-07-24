const database = {
  fishies: [
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Aulonocara_hansbaenschi.jpg/175px-Aulonocara_hansbaenschi.jpg",
      family: "Cichlidae",
      length: 15,
      name: "Sunny",
      found: "Tanzania",
      food: "algae and biofilm",
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tigerbarbe_Puntius_tetrazona.jpg/175px-Tigerbarbe_Puntius_tetrazona.jpg",
      family: "Cyprinidae",
      length: 8,
      name: "Tigger",
      found: "Indonesia",
      food: "invertebrates and vegetation",
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/2015-09-13-223-Tiger-loach.jpg/175px-2015-09-13-223-Tiger-loach.jpg",
      family: "Cobitoidea",
      length: 20,
      name: "Pagliacci",
      found: "Morocco",
      food: "invertebrates and vegetation",
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Colisa_lalia.jpg/175px-Colisa_lalia.jpg",
      family: "Osphronemidae",
      length: 5,
      name: "Gimli",
      found: "Sumatra",
      food: "small aquatic organisms and carrion",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Melanotaenia_lacustris_thomnight_001.jpg/175px-Melanotaenia_lacustris_thomnight_001.jpg",
      family: "Melanotaeniidae",
      length: 3,
      name: "Melanie",
      found: "Papau New Guinea",
      food: "small crustaceans, insect larvae, and algae",
    },
  ],

  locations: [
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Clouds_over_Lake_Kutubu.jpg/264px-Clouds_over_Lake_Kutubu.jpg",
      place: "Lake Kutubu of Papau New Guinea",
      fishFound: "Melanie of family Melanotaeniidae",
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ampera_Bridge_at_Noon%2C_Palembang.jpg/200px-Ampera_Bridge_at_Noon%2C_Palembang.jpg",
      place: "Musi River of Sumatra, Indonesia",
      fishFound: "Gimli of family Osphronemidae",
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Moulouya_Marocco.jpg/250px-Moulouya_Marocco.jpg",
      place: "Moulouya River of Morocco",
      fishFound: "Pagliacci of family Cobitoidea",
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/COLLECTIE_TROPENMUSEUM_Samenvloeiing_van_de_Tembesirivier_en_de_Batang_Hari_in_het_district_Rawas_Sumatra_TMnr_60002829.jpg/250px-COLLECTIE_TROPENMUSEUM_Samenvloeiing_van_de_Tembesirivier_en_de_Batang_Hari_in_het_district_Rawas_Sumatra_TMnr_60002829.jpg",
      place: "Batan Hari River of Sumatra, Indonesia",
      fishFound: "Tigger of family Cyprinidae",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lake_Malawi_seen_from_orbit.jpg/264px-Lake_Malawi_seen_from_orbit.jpg",
      place: "Lake Malawi or Lake Nyasa of Tanzania",
      fishFound: "Sunny of family Cichlidae",
    },
  ],

  quotes: [
    { id: 1, quote: "Aquariums are the source of life in a lifeless world." },
    { id: 2, quote: "Aquarium fish make us realize how beautiful silence is." },
    {
      id: 3,
      quote: "If there is magic on this planet, it’s contained in water.",
    },
    {
      id: 4,
      quote:
        "A stagnant life is just like an aquarium; you are confined in a specific area.",
    },
    {
      id: 5,
      quote: "The ocean is a never-ending source of beauty and inspiration.",
    },
  ],

  careTips: [
    {
      id: 1,
      tip: "Ensure all pumps, filters, and lights are working properly.",
    },
    {
      id: 2,
      tip: "Observe fish for negative side effects.",
    },
    {
      id: 3,
      tip: "Remove excess food from the tank.",
    },
    { id: 4, tip: "Top off the tank with treated water." },
    { id: 5, tip: "Check the water's temperature." },
  ],
};

export const getFishies = () => {
  return database.fishies.map((fish) => ({ ...fish }));
};

export const getLocations = () => {
  return database.locations.map((locale) => ({ ...locale }));
};

export const getQuotes = () => {
  return database.quotes.map((quote) => ({ ...quote }));
};

export const getCareTips = () => {
  return database.careTips.map((tip) => ({ ...tip }));
};
