const database = {
  fishies: [
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Aulonocara_hansbaenschi.jpg/175px-Aulonocara_hansbaenschi.jpg",
      family: "Cichlidae",
      length: "15 cm",
      name: "Sunny",
      found: "Lake Malawi near Tanzania",
      food: "algae and biofilm",
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tigerbarbe_Puntius_tetrazona.jpg/175px-Tigerbarbe_Puntius_tetrazona.jpg",
      family: "Cyprinidae",
      length: "7.5 cm",
      name: "Tigger",
      found: "Indonesia",
      food: "invertebrates and vegetation",
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/2015-09-13-223-Tiger-loach.jpg/175px-2015-09-13-223-Tiger-loach.jpg",
      family: "Cobitoidea",
      length: "20 cm",
      name: "Pagliacci",
      found: "Morocco",
      food: "invertebrates and vegetation",
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Colisa_lalia.jpg/175px-Colisa_lalia.jpg",
      family: "Osphronemidae",
      length: "5cm",
      name: "Gimli",
      found: "Sumatra",
      food: "small aquatic organisms and carrion",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Melanotaenia_lacustris_thomnight_001.jpg/175px-Melanotaenia_lacustris_thomnight_001.jpg",
      family: "Melanotaeniidae",
      length: "12 cm",
      name: "Melanie",
      found: "Lake Kutubu of Papau New Guinea",
      food: "small crustaceans, insect larvae, and algae",
    },
  ],

  locations: [
    {
      id: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Clouds_over_Lake_Kutubu.jpg/264px-Clouds_over_Lake_Kutubu.jpg",
      place-name: "Lake Kutubu of Papau New Guinea",
      fish-found: "Melanie of family Melanotaeniidae",
    }
    ,{
      id: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ampera_Bridge_at_Noon%2C_Palembang.jpg/200px-Ampera_Bridge_at_Noon%2C_Palembang.jpg",
      place-name: "Musi River of Sumatra, Indonesia",
      fish-found: "Gimli of family Osphronemidae",
    }
    ,{
      id: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Moulouya_Marocco.jpg/250px-Moulouya_Marocco.jpg",
      place-name: "Moulouya River of Morocco"
      fish-found: "Pagliacci of family Cobitoidea"
    }
    ,{
      id: 4,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/COLLECTIE_TROPENMUSEUM_Samenvloeiing_van_de_Tembesirivier_en_de_Batang_Hari_in_het_district_Rawas_Sumatra_TMnr_60002829.jpg/250px-COLLECTIE_TROPENMUSEUM_Samenvloeiing_van_de_Tembesirivier_en_de_Batang_Hari_in_het_district_Rawas_Sumatra_TMnr_60002829.jpg",
      place-name: "Batan Hari River of Sumatra, Indonesia"
      fish-found: 
    }
    ,{
      id: 5,
      image:
      place-name:
      fish-found:
    }
  ]
};

export const getFishies = () => {
  return database.fishies.map((fish) => ({ ...fish }));
};

