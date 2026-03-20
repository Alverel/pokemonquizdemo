/**
 * Données des 151 premiers Pokémon.
 * Chaque Pokémon a un profil de dimensions (types + traits de personnalité).
 * Ces profils sont utilisés par l'algorithme de scoring pour déterminer
 * le Pokémon le plus proche du profil de l'utilisateur.
 *
 * Dimensions types : fire, water, grass, electric, psychic, fighting,
 *   normal, poison, ground, rock, ice, ghost, dragon, bug, flying
 * Dimensions traits : brave, calm, energetic, mysterious, fierce, wise, playful, solitary
 */
const pokemonData = [
  // ─── Famille Bulbizarre ─── Grass/Poison ─── calme, sage
  { id: 1,   name: "Bulbasaur",   nameFr: "Bulbizarre",   profile: { grass: 4, poison: 2, calm: 3, wise: 2 } },
  { id: 2,   name: "Ivysaur",     nameFr: "Herbizarre",   profile: { grass: 4, poison: 2, calm: 2, wise: 2, brave: 1 } },
  { id: 3,   name: "Venusaur",    nameFr: "Florizarre",   profile: { grass: 4, poison: 2, calm: 2, wise: 3, fierce: 1 } },

  // ─── Famille Salamèche ─── Fire ─── courageux, énergique, fougueux
  { id: 4,   name: "Charmander",  nameFr: "Salamèche",    profile: { fire: 4, brave: 3, energetic: 2 } },
  { id: 5,   name: "Charmeleon",  nameFr: "Reptincel",    profile: { fire: 4, fierce: 3, brave: 2 } },
  { id: 6,   name: "Charizard",   nameFr: "Dracaufeu",    profile: { fire: 4, flying: 2, fierce: 3, brave: 3 } },

  // ─── Famille Carapuce ─── Water ─── joueur, calme
  { id: 7,   name: "Squirtle",    nameFr: "Carapuce",     profile: { water: 4, playful: 3, calm: 2 } },
  { id: 8,   name: "Wartortle",   nameFr: "Carabaffe",    profile: { water: 4, calm: 3, brave: 1 } },
  { id: 9,   name: "Blastoise",   nameFr: "Tortank",      profile: { water: 4, calm: 2, brave: 3, fierce: 1 } },

  // ─── Famille Chenipan ─── Bug ─── calme, solitaire
  { id: 10,  name: "Caterpie",    nameFr: "Chenipan",     profile: { bug: 4, calm: 3, playful: 1 } },
  { id: 11,  name: "Metapod",     nameFr: "Chrysacier",   profile: { bug: 4, calm: 3, solitary: 2 } },
  { id: 12,  name: "Butterfree",  nameFr: "Papilusion",   profile: { bug: 3, flying: 2, playful: 3, calm: 1 } },

  // ─── Famille Aspicot ─── Bug/Poison ─── énergique, mystérieux
  { id: 13,  name: "Weedle",      nameFr: "Aspicot",      profile: { bug: 3, poison: 2, energetic: 2, mysterious: 1 } },
  { id: 14,  name: "Kakuna",      nameFr: "Coconfort",    profile: { bug: 3, poison: 2, calm: 2, solitary: 2 } },
  { id: 15,  name: "Beedrill",    nameFr: "Dardargnan",   profile: { bug: 3, poison: 2, fierce: 3, energetic: 2 } },

  // ─── Famille Roucool ─── Normal/Flying ─── calme, joueur
  { id: 16,  name: "Pidgey",      nameFr: "Roucool",      profile: { normal: 3, flying: 3, calm: 3, playful: 1 } },
  { id: 17,  name: "Pidgeotto",   nameFr: "Roucoups",     profile: { normal: 2, flying: 4, calm: 2, brave: 2 } },
  { id: 18,  name: "Pidgeot",     nameFr: "Roucarnage",   profile: { normal: 2, flying: 4, brave: 3, energetic: 2 } },

  // ─── Rattata / Raticate ─── Normal ─── énergique, courageux
  { id: 19,  name: "Rattata",     nameFr: "Rattatac",     profile: { normal: 4, energetic: 3, brave: 1 } },
  { id: 20,  name: "Raticate",    nameFr: "Raticate",     profile: { normal: 4, fierce: 3, brave: 2 } },

  // ─── Famille Piafabec ─── Normal/Flying ─── fougueux, courageux
  { id: 21,  name: "Spearow",     nameFr: "Piafabec",     profile: { normal: 2, flying: 3, fierce: 3, energetic: 2 } },
  { id: 22,  name: "Fearow",      nameFr: "Rapasdepic",   profile: { normal: 2, flying: 4, fierce: 3, brave: 2 } },

  // ─── Abo / Arbok ─── Poison ─── mystérieux, fougueux
  { id: 23,  name: "Ekans",       nameFr: "Abo",          profile: { poison: 4, mysterious: 3, solitary: 2 } },
  { id: 24,  name: "Arbok",       nameFr: "Arbok",        profile: { poison: 4, fierce: 3, mysterious: 3 } },

  // ─── Pikachu / Raichu ─── Electric ─── énergique, joueur / fougueux
  { id: 25,  name: "Pikachu",     nameFr: "Pikachu",      profile: { electric: 4, energetic: 3, playful: 3 } },
  { id: 26,  name: "Raichu",      nameFr: "Raichu",       profile: { electric: 4, fierce: 3, energetic: 3 } },

  // ─── Sabelette / Sablaireau ─── Ground ─── courageux, solitaire
  { id: 27,  name: "Sandshrew",   nameFr: "Sabelette",    profile: { ground: 4, brave: 2, solitary: 3 } },
  { id: 28,  name: "Sandslash",   nameFr: "Sablaireau",   profile: { ground: 4, brave: 3, fierce: 2 } },

  // ─── Famille Nidoran ─── Poison ─── divers
  { id: 29,  name: "Nidoran-F",   nameFr: "Nidoran♀",     profile: { poison: 4, calm: 3, brave: 1 } },
  { id: 30,  name: "Nidorina",    nameFr: "Nidorina",     profile: { poison: 4, calm: 2, brave: 2 } },
  { id: 31,  name: "Nidoqueen",   nameFr: "Nidoqueen",    profile: { poison: 3, ground: 2, brave: 3, fierce: 2 } },
  { id: 32,  name: "Nidoran-M",   nameFr: "Nidoran♂",     profile: { poison: 4, energetic: 2, brave: 2 } },
  { id: 33,  name: "Nidorino",    nameFr: "Nidorino",     profile: { poison: 4, fierce: 2, energetic: 2 } },
  { id: 34,  name: "Nidoking",    nameFr: "Nidoking",     profile: { poison: 3, ground: 2, fierce: 3, brave: 3 } },

  // ─── Mélofée / Mélodelfe ─── Normal ─── joueur, mystérieux / sage
  { id: 35,  name: "Clefairy",    nameFr: "Mélofée",      profile: { normal: 4, playful: 3, mysterious: 2 } },
  { id: 36,  name: "Clefable",    nameFr: "Mélodelfe",    profile: { normal: 4, wise: 3, playful: 2 } },

  // ─── Goupix / Feunard ─── Fire ─── mystérieux, sage
  { id: 37,  name: "Vulpix",      nameFr: "Goupix",       profile: { fire: 4, mysterious: 3, wise: 2 } },
  { id: 38,  name: "Ninetales",   nameFr: "Feunard",      profile: { fire: 4, mysterious: 3, wise: 3 } },

  // ─── Rondoudou / Grodoudou ─── Normal ─── joueur, calme
  { id: 39,  name: "Jigglypuff",  nameFr: "Rondoudou",    profile: { normal: 4, playful: 4, calm: 2 } },
  { id: 40,  name: "Wigglytuff",  nameFr: "Grodoudou",    profile: { normal: 4, playful: 3, calm: 3 } },

  // ─── Nosferapti / Nosféralto ─── Poison/Flying ─── mystérieux
  { id: 41,  name: "Zubat",       nameFr: "Nosferapti",   profile: { poison: 3, flying: 3, mysterious: 4, solitary: 1 } },
  { id: 42,  name: "Golbat",      nameFr: "Nosféralto",   profile: { poison: 3, flying: 3, fierce: 3, mysterious: 2 } },

  // ─── Famille Mystherbe ─── Grass/Poison ─── joueur, mystérieux
  { id: 43,  name: "Oddish",      nameFr: "Mystherbe",    profile: { grass: 3, poison: 2, playful: 2, calm: 2 } },
  { id: 44,  name: "Gloom",       nameFr: "Ortide",       profile: { grass: 3, poison: 2, mysterious: 3, calm: 2 } },
  { id: 45,  name: "Vileplume",   nameFr: "Rafflesia",    profile: { grass: 3, poison: 2, mysterious: 3, wise: 2 } },

  // ─── Paras / Parasect ─── Bug/Grass ─── solitaire, mystérieux
  { id: 46,  name: "Paras",       nameFr: "Paras",        profile: { bug: 3, grass: 2, solitary: 3, calm: 1 } },
  { id: 47,  name: "Parasect",    nameFr: "Parasect",     profile: { bug: 3, grass: 2, solitary: 3, mysterious: 2 } },

  // ─── Mimitoss / Aéromite ─── Bug/Poison ─── mystérieux, calme
  { id: 48,  name: "Venonat",     nameFr: "Mimitoss",     profile: { bug: 3, poison: 2, mysterious: 2, calm: 2 } },
  { id: 49,  name: "Venomoth",    nameFr: "Aéromite",     profile: { bug: 3, poison: 2, mysterious: 2, playful: 2 } },

  // ─── Taupiqueur / Triopikeur ─── Ground ─── énergique, mystérieux
  { id: 50,  name: "Diglett",     nameFr: "Taupiqueur",   profile: { ground: 4, energetic: 3, mysterious: 2 } },
  { id: 51,  name: "Dugtrio",     nameFr: "Triopikeur",   profile: { ground: 4, mysterious: 3, wise: 2 } },

  // ─── Miaouss / Persian ─── Normal ─── joueur, mystérieux / sage
  { id: 52,  name: "Meowth",      nameFr: "Miaouss",      profile: { normal: 4, mysterious: 3, playful: 2 } },
  { id: 53,  name: "Persian",     nameFr: "Persian",      profile: { normal: 4, wise: 3, mysterious: 2 } },

  // ─── Psykokwak / Akwakwak ─── Water ─── mystérieux, calme / sage
  { id: 54,  name: "Psyduck",     nameFr: "Psykokwak",    profile: { water: 3, psychic: 2, mysterious: 3, calm: 1 } },
  { id: 55,  name: "Golduck",     nameFr: "Akwakwak",     profile: { water: 3, psychic: 2, calm: 3, wise: 2 } },

  // ─── Férosinge / Colossinge ─── Fighting ─── fougueux, énergique
  { id: 56,  name: "Mankey",      nameFr: "Férosinge",    profile: { fighting: 4, fierce: 3, energetic: 2 } },
  { id: 57,  name: "Primeape",    nameFr: "Colossinge",   profile: { fighting: 4, fierce: 4, energetic: 2 } },

  // ─── Caninos / Arcanin ─── Fire ─── joueur, énergique / courageux
  { id: 58,  name: "Growlithe",   nameFr: "Caninos",      profile: { fire: 4, playful: 3, energetic: 2 } },
  { id: 59,  name: "Arcanine",    nameFr: "Arcanin",      profile: { fire: 4, brave: 3, energetic: 2 } },

  // ─── Famille Ptitard ─── Water / Water+Fighting ─── énergique, fougueux
  { id: 60,  name: "Poliwag",     nameFr: "Ptitard",      profile: { water: 4, playful: 3, energetic: 2 } },
  { id: 61,  name: "Poliwhirl",   nameFr: "Têtarte",      profile: { water: 4, energetic: 3, brave: 1 } },
  { id: 62,  name: "Poliwrath",   nameFr: "Tartard",      profile: { water: 3, fighting: 3, fierce: 3, brave: 2 } },

  // ─── Famille Abra ─── Psychic ─── sage, solitaire
  { id: 63,  name: "Abra",        nameFr: "Abra",         profile: { psychic: 4, wise: 3, solitary: 3 } },
  { id: 64,  name: "Kadabra",     nameFr: "Kadabra",      profile: { psychic: 4, wise: 3, mysterious: 2 } },
  { id: 65,  name: "Alakazam",    nameFr: "Alakazam",     profile: { psychic: 4, wise: 4, mysterious: 1 } },

  // ─── Famille Machoc ─── Fighting ─── courageux, fougueux
  { id: 66,  name: "Machop",      nameFr: "Machoc",       profile: { fighting: 4, energetic: 3, brave: 2 } },
  { id: 67,  name: "Machoke",     nameFr: "Machopeur",    profile: { fighting: 4, brave: 3, fierce: 2 } },
  { id: 68,  name: "Machamp",     nameFr: "Mackogneur",   profile: { fighting: 4, brave: 3, fierce: 3 } },

  // ─── Famille Chetiflor ─── Grass/Poison ─── énergique, fougueux
  { id: 69,  name: "Bellsprout",  nameFr: "Chetiflor",    profile: { grass: 3, poison: 2, energetic: 3, calm: 1 } },
  { id: 70,  name: "Weepinbell",  nameFr: "Boustiflor",   profile: { grass: 3, poison: 2, fierce: 3, energetic: 1 } },
  { id: 71,  name: "Victreebel",  nameFr: "Empiflor",     profile: { grass: 3, poison: 2, fierce: 3, mysterious: 2 } },

  // ─── Tentacool / Tentacruel ─── Water/Poison ─── mystérieux, solitaire / fougueux
  { id: 72,  name: "Tentacool",   nameFr: "Tentacool",    profile: { water: 3, poison: 3, mysterious: 3, solitary: 2 } },
  { id: 73,  name: "Tentacruel",  nameFr: "Tentacruel",   profile: { water: 3, poison: 3, fierce: 3, mysterious: 2 } },

  // ─── Famille Racaillou ─── Rock/Ground ─── courageux, fougueux
  { id: 74,  name: "Geodude",     nameFr: "Racaillou",    profile: { rock: 3, ground: 3, energetic: 2, brave: 2 } },
  { id: 75,  name: "Graveler",    nameFr: "Gravalanch",   profile: { rock: 3, ground: 3, brave: 3, fierce: 1 } },
  { id: 76,  name: "Golem",       nameFr: "Grolem",       profile: { rock: 3, ground: 3, fierce: 2, calm: 2 } },

  // ─── Ponyta / Galopa ─── Fire ─── calme, énergique
  { id: 77,  name: "Ponyta",      nameFr: "Ponyta",       profile: { fire: 4, calm: 2, energetic: 3 } },
  { id: 78,  name: "Rapidash",    nameFr: "Galopa",       profile: { fire: 4, energetic: 4, fierce: 2 } },

  // ─── Ramoloss / Flagadoss ─── Water/Psychic ─── calme, joueur / sage
  { id: 79,  name: "Slowpoke",    nameFr: "Ramoloss",     profile: { water: 3, psychic: 2, calm: 4, playful: 1 } },
  { id: 80,  name: "Slowbro",     nameFr: "Flagadoss",    profile: { water: 3, psychic: 2, calm: 3, wise: 2 } },

  // ─── Magnéti / Magnéton ─── Electric ─── sage, solitaire / fougueux
  { id: 81,  name: "Magnemite",   nameFr: "Magnéti",      profile: { electric: 4, wise: 3, solitary: 2 } },
  { id: 82,  name: "Magneton",    nameFr: "Magnéton",     profile: { electric: 4, wise: 2, fierce: 2, solitary: 1 } },

  // ─── Canarticho ─── Normal/Flying ─── courageux, solitaire
  { id: 83,  name: "Farfetchd",   nameFr: "Canarticho",   profile: { normal: 3, flying: 3, brave: 3, solitary: 2 } },

  // ─── Doduo / Dodrio ─── Normal/Flying ─── énergique, joueur
  { id: 84,  name: "Doduo",       nameFr: "Doduo",        profile: { normal: 3, flying: 2, energetic: 3, playful: 2 } },
  { id: 85,  name: "Dodrio",      nameFr: "Dodrio",       profile: { normal: 2, flying: 3, energetic: 3, brave: 2 } },

  // ─── Otaria / Lamantine ─── Water / Water+Ice ─── joueur, calme
  { id: 86,  name: "Seel",        nameFr: "Otaria",       profile: { water: 4, playful: 3, calm: 2 } },
  { id: 87,  name: "Dewgong",     nameFr: "Lamantine",    profile: { water: 3, ice: 2, calm: 4 } },

  // ─── Tadmorv / Grotadmorv ─── Poison ─── joueur, mystérieux
  { id: 88,  name: "Grimer",      nameFr: "Tadmorv",      profile: { poison: 4, playful: 2, mysterious: 2 } },
  { id: 89,  name: "Muk",         nameFr: "Grotadmorv",   profile: { poison: 4, mysterious: 3, calm: 2 } },

  // ─── Kokiyas / Crustabri ─── Water / Water+Ice ─── solitaire, fougueux
  { id: 90,  name: "Shellder",    nameFr: "Kokiyas",      profile: { water: 4, solitary: 3, calm: 2 } },
  { id: 91,  name: "Cloyster",    nameFr: "Crustabri",    profile: { water: 3, ice: 2, solitary: 3, fierce: 2 } },

  // ─── Famille Fantominus ─── Ghost/Poison ─── mystérieux, joueur / fougueux
  { id: 92,  name: "Gastly",      nameFr: "Fantominus",   profile: { ghost: 4, poison: 2, mysterious: 3, playful: 2 } },
  { id: 93,  name: "Haunter",     nameFr: "Spectrum",     profile: { ghost: 4, poison: 2, mysterious: 3, playful: 2 } },
  { id: 94,  name: "Gengar",      nameFr: "Ectoplasma",   profile: { ghost: 4, poison: 2, mysterious: 3, fierce: 2 } },

  // ─── Onix ─── Rock/Ground ─── courageux, solitaire
  { id: 95,  name: "Onix",        nameFr: "Onix",         profile: { rock: 3, ground: 3, brave: 3, solitary: 3 } },

  // ─── Soporifik / Hypnomade ─── Psychic ─── mystérieux, sage
  { id: 96,  name: "Drowzee",     nameFr: "Soporifik",    profile: { psychic: 4, mysterious: 3, wise: 2 } },
  { id: 97,  name: "Hypno",       nameFr: "Hypnomade",    profile: { psychic: 4, mysterious: 3, wise: 3 } },

  // ─── Krabby / Krabboss ─── Water ─── fougueux, courageux
  { id: 98,  name: "Krabby",      nameFr: "Krabby",       profile: { water: 4, fierce: 2, brave: 2 } },
  { id: 99,  name: "Kingler",     nameFr: "Krabboss",     profile: { water: 4, fierce: 3, brave: 3 } },

  // ─── Voltorbe / Électrode ─── Electric ─── mystérieux, fougueux / énergique
  { id: 100, name: "Voltorb",     nameFr: "Voltorbe",     profile: { electric: 4, mysterious: 3, fierce: 2 } },
  { id: 101, name: "Electrode",   nameFr: "Électrode",    profile: { electric: 4, energetic: 3, fierce: 2 } },

  // ─── Nœunœuf / Noadkoko ─── Grass/Psychic ─── sage, mystérieux
  { id: 102, name: "Exeggcute",   nameFr: "Nœunœuf",      profile: { grass: 3, psychic: 3, wise: 2, playful: 2 } },
  { id: 103, name: "Exeggutor",   nameFr: "Noadkoko",     profile: { grass: 3, psychic: 3, wise: 3, mysterious: 1 } },

  // ─── Osselait / Ossatueur ─── Ground ─── solitaire, mystérieux / courageux
  { id: 104, name: "Cubone",      nameFr: "Osselait",     profile: { ground: 4, solitary: 4, mysterious: 3 } },
  { id: 105, name: "Marowak",     nameFr: "Ossatueur",    profile: { ground: 4, brave: 3, mysterious: 2 } },

  // ─── Kicklee / Tygnon ─── Fighting ─── énergique, courageux
  { id: 106, name: "Hitmonlee",   nameFr: "Kicklee",      profile: { fighting: 4, energetic: 3, fierce: 2 } },
  { id: 107, name: "Hitmonchan",  nameFr: "Tygnon",       profile: { fighting: 4, brave: 3, energetic: 2 } },

  // ─── Excelangue ─── Normal ─── joueur, calme
  { id: 108, name: "Lickitung",   nameFr: "Excelangue",   profile: { normal: 4, playful: 3, calm: 2 } },

  // ─── Smogo / Smogogo ─── Poison ─── mystérieux, joueur / fougueux
  { id: 109, name: "Koffing",     nameFr: "Smogo",        profile: { poison: 4, mysterious: 2, playful: 2 } },
  { id: 110, name: "Weezing",     nameFr: "Smogogo",      profile: { poison: 4, fierce: 2, mysterious: 2 } },

  // ─── Rhinocorne / Rhinoféros ─── Ground/Rock ─── courageux, fougueux
  { id: 111, name: "Rhyhorn",     nameFr: "Rhinocorne",   profile: { ground: 3, rock: 3, brave: 3, fierce: 2 } },
  { id: 112, name: "Rhydon",      nameFr: "Rhinoféros",   profile: { ground: 3, rock: 3, fierce: 3, brave: 3 } },

  // ─── Leveinard ─── Normal ─── calme, joueur
  { id: 113, name: "Chansey",     nameFr: "Leveinard",    profile: { normal: 4, calm: 4, playful: 2 } },

  // ─── Saquedeneu ─── Grass ─── mystérieux, calme
  { id: 114, name: "Tangela",     nameFr: "Saquedeneu",   profile: { grass: 4, mysterious: 3, calm: 2 } },

  // ─── Kangourex ─── Normal ─── courageux, calme
  { id: 115, name: "Kangaskhan",  nameFr: "Kangourex",    profile: { normal: 4, brave: 3, calm: 2 } },

  // ─── Hypotrempe / Hypocéan ─── Water ─── calme, mystérieux / sage
  { id: 116, name: "Horsea",      nameFr: "Hypotrempe",   profile: { water: 4, calm: 2, mysterious: 2 } },
  { id: 117, name: "Seadra",      nameFr: "Hypocéan",     profile: { water: 4, calm: 2, wise: 2 } },

  // ─── Poissirène / Poissoroy ─── Water ─── joueur, énergique
  { id: 118, name: "Goldeen",     nameFr: "Poissirène",   profile: { water: 4, playful: 3, calm: 1 } },
  { id: 119, name: "Seaking",     nameFr: "Poissoroy",    profile: { water: 4, energetic: 3, brave: 1 } },

  // ─── Étoilessable / Staross ─── Water / Water+Psychic ─── mystérieux, sage
  { id: 120, name: "Staryu",      nameFr: "Étoilessable", profile: { water: 4, mysterious: 3, wise: 1 } },
  { id: 121, name: "Starmie",     nameFr: "Staross",      profile: { water: 3, psychic: 3, wise: 3, mysterious: 2 } },

  // ─── M. Mime ─── Psychic ─── joueur, sage
  { id: 122, name: "Mr-Mime",     nameFr: "M. Mime",      profile: { psychic: 4, playful: 3, wise: 2 } },

  // ─── Insécateur ─── Bug/Flying ─── fougueux, courageux
  { id: 123, name: "Scyther",     nameFr: "Insécateur",   profile: { bug: 3, flying: 3, fierce: 3, brave: 3 } },

  // ─── Lippoutou ─── Ice/Psychic ─── mystérieux, joueur
  { id: 124, name: "Jynx",        nameFr: "Lippoutou",    profile: { ice: 3, psychic: 3, mysterious: 3, playful: 2 } },

  // ─── Élektek ─── Electric ─── fougueux, énergique
  { id: 125, name: "Electabuzz",  nameFr: "Élektek",      profile: { electric: 4, fierce: 3, energetic: 3 } },

  // ─── Magmar ─── Fire ─── fougueux, énergique
  { id: 126, name: "Magmar",      nameFr: "Magmar",       profile: { fire: 4, fierce: 3, energetic: 2 } },

  // ─── Scarabrute ─── Bug ─── fougueux, courageux
  { id: 127, name: "Pinsir",      nameFr: "Scarabrute",   profile: { bug: 4, fierce: 4, brave: 2 } },

  // ─── Tauros ─── Normal ─── fougueux, courageux
  { id: 128, name: "Tauros",      nameFr: "Tauros",       profile: { normal: 4, fierce: 3, brave: 3 } },

  // ─── Magicarpe / Léviator ─── Water / Water+Flying ─── joueur / fougueux
  { id: 129, name: "Magikarp",    nameFr: "Magicarpe",    profile: { water: 4, playful: 4, calm: 2 } },
  { id: 130, name: "Gyarados",    nameFr: "Léviator",     profile: { water: 3, flying: 2, fierce: 4, brave: 2 } },

  // ─── Lokhlass ─── Water/Ice ─── calme, sage
  { id: 131, name: "Lapras",      nameFr: "Lokhlass",     profile: { water: 3, ice: 3, calm: 4, wise: 2 } },

  // ─── Métamorph ─── Normal ─── mystérieux, joueur
  { id: 132, name: "Ditto",       nameFr: "Métamorph",    profile: { normal: 4, mysterious: 4, playful: 2 } },

  // ─── Évoli ─── Normal ─── courageux, joueur
  { id: 133, name: "Eevee",       nameFr: "Évoli",        profile: { normal: 4, playful: 3, brave: 2 } },

  // ─── Évolutions Évoli
  { id: 134, name: "Vaporeon",    nameFr: "Aquali",       profile: { water: 4, calm: 3, playful: 2 } },
  { id: 135, name: "Jolteon",     nameFr: "Voltali",      profile: { electric: 4, energetic: 3, fierce: 2 } },
  { id: 136, name: "Flareon",     nameFr: "Pyroli",       profile: { fire: 4, fierce: 3, energetic: 2 } },

  // ─── Porygon ─── Normal ─── sage, mystérieux
  { id: 137, name: "Porygon",     nameFr: "Porygon",      profile: { normal: 4, wise: 3, mysterious: 3 } },

  // ─── Famille Amonita ─── Rock/Water ─── sage, courageux
  { id: 138, name: "Omanyte",     nameFr: "Amonita",      profile: { rock: 3, water: 3, wise: 3, solitary: 2 } },
  { id: 139, name: "Omastar",     nameFr: "Amonistar",    profile: { rock: 3, water: 3, wise: 3, solitary: 2, fierce: 1 } },

  // ─── Famille Kabuto ─── Rock/Water ─── courageux, solitaire / fougueux
  { id: 140, name: "Kabuto",      nameFr: "Kabuto",       profile: { rock: 3, water: 3, brave: 3, solitary: 2 } },
  { id: 141, name: "Kabutops",    nameFr: "Kabutops",     profile: { rock: 3, water: 2, fierce: 3, brave: 3 } },

  // ─── Ptéra ─── Rock/Flying ─── fougueux, énergique
  { id: 142, name: "Aerodactyl",  nameFr: "Ptéra",        profile: { rock: 3, flying: 3, fierce: 3, energetic: 3 } },

  // ─── Ronflex ─── Normal ─── calme (très)
  { id: 143, name: "Snorlax",     nameFr: "Ronflex",      profile: { normal: 4, calm: 5, playful: 1 } },

  // ─── Légendaires oiseaux
  { id: 144, name: "Articuno",    nameFr: "Artikodin",    profile: { ice: 4, flying: 2, mysterious: 3, calm: 3 } },
  { id: 145, name: "Zapdos",      nameFr: "Électhor",     profile: { electric: 4, flying: 2, fierce: 3, mysterious: 2 } },
  { id: 146, name: "Moltres",     nameFr: "Sulfura",      profile: { fire: 4, flying: 2, fierce: 3, mysterious: 2 } },

  // ─── Famille Minidraco ─── Dragon / Dragon+Flying ─── calme, mystérieux / courageux, sage
  { id: 147, name: "Dratini",     nameFr: "Minidraco",    profile: { dragon: 4, calm: 3, brave: 2 } },
  { id: 148, name: "Dragonair",   nameFr: "Draco",        profile: { dragon: 4, mysterious: 3, calm: 2 } },
  { id: 149, name: "Dragonite",   nameFr: "Dracolosse",   profile: { dragon: 3, flying: 2, brave: 3, wise: 2 } },

  // ─── Légendaires psychiques
  { id: 150, name: "Mewtwo",      nameFr: "Mewtwo",       profile: { psychic: 4, fierce: 3, wise: 3, solitary: 3 } },
  { id: 151, name: "Mew",         nameFr: "Mew",          profile: { psychic: 4, playful: 4, mysterious: 3, wise: 2 } },
];

module.exports = { pokemonData };
