export interface ArtifactData {
  id: string;
  name: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  historicalPeriod: string;
  significance: string;
}

export interface LocationData {
  id: string;
  name: string;
  description: string;
  historicalContext: string;
  artifacts: ArtifactData[];
}

export interface RegionData {
  id: string;
  name: string;
  description: string;
  position: [number, number, number];
  color: string;
  locations: LocationData[];
}

export interface GameData {
  regions: RegionData[];
}

export const gameData: GameData = {
  regions: [
    {
      id: "ancient-egypt",
      name: "Ancient Egypt",
      description: "Land of the Pharaohs and eternal mysteries",
      position: [0, 0, -10],
      color: "#DAA520",
      locations: [
        {
          id: "great-pyramid",
          name: "Great Pyramid of Giza",
          description: "The last remaining wonder of the ancient world",
          historicalContext: "Built around 2580-2560 BCE for Pharaoh Khufu",
          artifacts: [
            {
              id: "golden-scarab",
              name: "Golden Scarab Amulet",
              description: "A mystical scarab that glows with inner light",
              rarity: "epic",
              historicalPeriod: "Old Kingdom (2686-2181 BCE)",
              significance: "Scarabs were symbols of rebirth and protection in ancient Egypt"
            },
            {
              id: "pharaoh-seal",
              name: "Pharaoh's Seal",
              description: "An enchanted seal bearing the cartouche of Khufu",
              rarity: "legendary",
              historicalPeriod: "Old Kingdom (2686-2181 BCE)",
              significance: "Royal seals were used to authenticate official documents"
            }
          ]
        },
        {
          id: "valley-of-kings",
          name: "Valley of the Kings",
          description: "Sacred burial ground of the pharaohs",
          historicalContext: "Used for royal burials from 1550-1077 BCE",
          artifacts: [
            {
              id: "canopic-jar",
              name: "Magical Canopic Jar",
              description: "A jar that whispers ancient secrets",
              rarity: "rare",
              historicalPeriod: "New Kingdom (1550-1077 BCE)",
              significance: "Used to store organs during mummification"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-greece",
      name: "Ancient Greece",
      description: "Birthplace of democracy and philosophy",
      position: [10, 0, 0],
      color: "#4169E1",
      locations: [
        {
          id: "parthenon",
          name: "The Parthenon",
          description: "Temple dedicated to Athena, goddess of wisdom",
          historicalContext: "Built 447-438 BCE during the height of the Athenian Empire",
          artifacts: [
            {
              id: "athena-owl",
              name: "Athena's Owl Figurine",
              description: "A wise owl statue that seems to watch everything",
              rarity: "rare",
              historicalPeriod: "Classical Period (480-323 BCE)",
              significance: "The owl was sacred to Athena and symbolized wisdom"
            },
            {
              id: "philosopher-stone",
              name: "Philosopher's Stone Fragment",
              description: "A crystal that enhances intellectual abilities",
              rarity: "epic",
              historicalPeriod: "Classical Period (480-323 BCE)",
              significance: "Represents the Greek pursuit of knowledge and truth"
            }
          ]
        },
        {
          id: "oracle-delphi",
          name: "Oracle of Delphi",
          description: "Sacred site where the Pythia delivered prophecies",
          historicalContext: "Active from 8th century BCE to 4th century CE",
          artifacts: [
            {
              id: "pythia-crystal",
              name: "Pythia's Crystal",
              description: "A mystical crystal that reveals glimpses of the future",
              rarity: "legendary",
              historicalPeriod: "Archaic Period (800-480 BCE)",
              significance: "The Oracle of Delphi was consulted on important decisions"
            }
          ]
        }
      ]
    },
    {
      id: "medieval-europe",
      name: "Medieval Europe",
      description: "Age of knights, castles, and chivalry",
      position: [-10, 0, 0],
      color: "#8B4513",
      locations: [
        {
          id: "camelot",
          name: "Camelot",
          description: "Legendary castle of King Arthur",
          historicalContext: "Medieval legends from 12th century literature",
          artifacts: [
            {
              id: "excalibur-fragment",
              name: "Excalibur Fragment",
              description: "A shard of the legendary sword that still glows",
              rarity: "legendary",
              historicalPeriod: "High Middle Ages (1000-1300 CE)",
              significance: "Excalibur was the sword of King Arthur, symbolizing rightful sovereignty"
            },
            {
              id: "round-table-piece",
              name: "Round Table Piece",
              description: "A piece of wood from the famous Round Table",
              rarity: "epic",
              historicalPeriod: "High Middle Ages (1000-1300 CE)",
              significance: "The Round Table represented equality among knights"
            }
          ]
        },
        {
          id: "notre-dame",
          name: "Notre-Dame Cathedral",
          description: "Gothic masterpiece of medieval architecture",
          historicalContext: "Construction began in 1163 and completed in 1345",
          artifacts: [
            {
              id: "gargoyle-stone",
              name: "Gargoyle Stone",
              description: "A stone gargoyle that comes to life at night",
              rarity: "rare",
              historicalPeriod: "High Middle Ages (1000-1300 CE)",
              significance: "Gargoyles were believed to ward off evil spirits"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-rome",
      name: "Ancient Rome",
      description: "The eternal city and center of a vast empire",
      position: [0, 0, 10],
      color: "#DC143C",
      locations: [
        {
          id: "colosseum",
          name: "The Colosseum",
          description: "Grand amphitheater where gladiators fought",
          historicalContext: "Built 70-80 CE under the Flavian dynasty",
          artifacts: [
            {
              id: "gladiator-helmet",
              name: "Enchanted Gladiator Helmet",
              description: "A helmet that grants courage to its wearer",
              rarity: "epic",
              historicalPeriod: "Imperial Period (27 BCE - 476 CE)",
              significance: "Gladiators were both slaves and celebrities in Roman society"
            },
            {
              id: "roman-coin",
              name: "Caesar's Gold Coin",
              description: "A coin that always lands on the favorable side",
              rarity: "rare",
              historicalPeriod: "Imperial Period (27 BCE - 476 CE)",
              significance: "Roman currency spread throughout the empire"
            }
          ]
        },
        {
          id: "pantheon",
          name: "The Pantheon",
          description: "Temple to all Roman gods",
          historicalContext: "Built 118-128 CE by Emperor Hadrian",
          artifacts: [
            {
              id: "jupiter-staff",
              name: "Staff of Jupiter",
              description: "A miniature staff that crackles with divine energy",
              rarity: "legendary",
              historicalPeriod: "Imperial Period (27 BCE - 476 CE)",
              significance: "Jupiter was the king of the Roman gods"
            }
          ]
        }
      ]
    }
  ]
};
