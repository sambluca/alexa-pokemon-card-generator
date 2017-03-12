function listOfPokemon() {
  var pokemon = [{
      name: "Charmander",
      health: 70,
      ability: {
        moveName: "ember",
        damage: 20
      }
    },
    {
      name: "Charmeleon",
      health: 120,
      ability: {
        moveName: "flamethrower",
        damage: 40
      }
    },
    {
      name: "Charizard",
      health: 120,
      ability: {
        moveName: "inferno",
        damage: 100
      }
    },
    {
      name: "Bulbasaur",
      health: 40,
      ability: {
        moveName: "leach",
        damage: 20
      }
    },
    {
      name: "Ivysaur",
      health: 70,
      ability: {
        moveName: "vine whip",
        damage: 60
      }
    },
    {
      name: "Venusaur",
      health: 120,
      ability: {
        moveName: "mega absorb",
        damage: 40
      }
    },
    {
      name: "Squirtle",
      health: 50,
      ability: {
        moveName: "bubble",
        damage: 20
      }
    },
    {
      name: "Wartortle",
      health: 80,
      ability: {
        moveName: "waterfall",
        damage: 50
      }
    },
    {
      name: "Blastoise",
      health: 120,
      ability: {
        moveName: "hyrdo pump",
        damage: 90
      }
    },
    {
      name: "Pikachu",
      health: 50,
      ability: {
        moveName: "spark",
        damage: 40
      }
    }
  ];
  return pokemon;
}

function onePokemon() {
  var pokemon = listOfPokemon();
  var randomNumber = function () {
    return Math.floor(Math.random() * pokemon.length);
  }
  console.log("pasta: ", randomNumber())
return pokemon[randomNumber()]
}

function pg() {
  var pokanCard = onePokemon();
  console.log(`Created a pokan card for ${pokanCard.name}`)
  return pokanCard;
}

module.exports = pg;
