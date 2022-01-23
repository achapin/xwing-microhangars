export enum Factions {
  REBEL_ALLIANCE = "Rebel Alliance",
  GALACTIC_EMPIRE = "Galactic Empire",
  SCUM_AND_VILLAINY = "Scum and Villainy",
  RESISTANCE = "Resistance",
  FIRST_ORDER = "First Order",
  GALACTIC_REPUBLIC = "Galactic Republic",
  SEPARATIST_ALLIANCE = "Separatist Alliance",
}

export interface Faction {
  name: Factions;
  icon: string;
  color: string;
}

export const factions: Faction[] = [
  {
    name: Factions.FIRST_ORDER,
    icon: "+",
    color: "#000000",
  },
  {
    name: Factions.GALACTIC_EMPIRE,
    icon: "@",
    color: "#567086",
  },
  {
    name: Factions.GALACTIC_REPUBLIC,
    icon: "/",
    color: "#651616",
  },
  {
    name: Factions.REBEL_ALLIANCE,
    icon: "!",
    color: "#CD3E43",
  },
  {
    name: Factions.RESISTANCE,
    icon: "-",
    color: "#E55B05",
  },
  {
    name: Factions.SEPARATIST_ALLIANCE,
    icon: ".",
    color: "#15155F",
  },
  {
    name: Factions.SCUM_AND_VILLAINY,
    icon: "#",
    color: "#C26422",
  },
];

export interface Panel {
  factionIconSize: number;
  shipIconSize: number;
  shipIconMargin?: number;
  leftOffset?: number;
  rightOffset?: number;
}

export enum ShipSizes {
  SMALL,
  MEDIUM,
  LARGE,
}

export interface Ship {
  name: string;
  icon: string;
  iconMargin?: number;
  factions: string[];
  fullName?: string;
  modifier?: string;

  dimensions: {
    size: ShipSizes;
    height: number;
    width: number;
    length: number;
  };

  panels: {
    primary: Panel;
    sides?: Panel;
    topAndBottom?: Panel;
  };
}

export const ships: Ship[] = [
  {
    name: "A/SF-01 B-Wing",
    modifier: "(Fixed Wings)",
    icon: "b",
    iconMargin: -20,
    factions: [Factions.REBEL_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 32,
      width: 38,
      length: 58,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 52,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 28,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 28,
      },
    },
  },
  {
    name: "A/SF-01 B-Wing",
    modifier: "(Folding Wings)",
    icon: "b",
    iconMargin: -10,
    factions: [Factions.REBEL_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 15,
      width: 32,
      length: 65,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 52,
      },
      sides: {
        factionIconSize: 3,
        shipIconSize: 8,
      },
      topAndBottom: {
        factionIconSize: 3,
        shipIconSize: 8,
      },
    },
  },
  {
    name: "Alpha-class Star Wing",
    icon: "&",
    iconMargin: -20,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 34,
      width: 36,
      length: 65,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 26,
        shipIconMargin: -10,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 28,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 32,
      },
    },
  },
  {
    name: "Aggressor Assault Fighter",
    icon: "i",
    iconMargin: -10,
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.MEDIUM,
      height: 19,
      width: 60,
      length: 77,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 67,
        shipIconMargin: -25,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 12,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 12,
      },
    },
  },
  {
    name: "ARC-170 Starfighter",
    icon: "c",
    iconMargin: -25,
    factions: [Factions.REBEL_ALLIANCE, Factions.GALACTIC_REPUBLIC],
    dimensions: {
      size: ShipSizes.MEDIUM,
      height: 21,
      width: 54,
      length: 83,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 52,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 18,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 18,
      },
    },
  },
  {
    name: "Attack Shuttle",
    icon: "g",
    iconMargin: -10,
    factions: [Factions.REBEL_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 18,
      width: 29,
      length: 46,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 37,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 13,
        leftOffset: -1,
        rightOffset: 1,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 10,
      },
    },
  },
  {
    name: "Auzituck Gunship",
    icon: "@",
    iconMargin: -12,
    factions: [Factions.REBEL_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 25,
      width: 32,
      length: 57,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 37,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 20,
        leftOffset: 2,
        rightOffset: 4,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 17,
      },
    },
  },
  {
    name: "B/SF-17 Bomber",
    icon: "Z",
    factions: [Factions.RESISTANCE],
    dimensions: {
      size: ShipSizes.LARGE,
      height: 58,
      width: 81,
      length: 112,
    },
    panels: {
      primary: {
        factionIconSize: 4,
        shipIconSize: 70,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 30,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 15,
      },
    },
  },
  {
    name: "Belbullab-22 Starfighter",
    icon: "[",
    factions: [Factions.SEPARATIST_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 14,
      width: 22,
      length: 33,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 21,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 7,
        leftOffset: -7,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 4,
      },
    },
  },
  {
    name: "BTA-NR2 Y-Wing",
    icon: "{",
    factions: [Factions.RESISTANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 17,
      width: 35,
      length: 69,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 38,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 12,
        leftOffset: -3,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 10,
      },
    },
  },
  {
    name: "BTL-A4 Y-Wing",
    modifier: "(1.0 Sculpt)",
    icon: "y",
    iconMargin: -5,
    factions: [Factions.REBEL_ALLIANCE, Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 14,
      width: 32,
      length: 63,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 47,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 9,
        shipIconMargin: -10,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 7,
      },
    },
  },
  {
    name: "BTL-A4 Y-Wing",
    modifier: "(2.0 Sculpt)",
    icon: "y",
    iconMargin: -5,
    factions: [Factions.REBEL_ALLIANCE, Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 17,
      width: 33,
      length: 63,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 47,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 9,
        shipIconMargin: -10,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 7,
      },
    },
  },
  {
    name: "BTL-B Y-Wing",
    icon: ":",
    factions: [Factions.GALACTIC_REPUBLIC],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 16,
      width: 34,
      length: 72,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 52,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 6,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 4,
      },
    },
  },
  // {
  //   name: "Customized YT-1300 Light Freighter",
  //   icon: "W",
  //   factions: [Factions.SCUM_AND_VILLAINY],
  //   dimensions: {
  //     size: ShipSizes.LARGE,
  //     height: 30,
  //     width: 148,
  //     length: 100,
  //   },
  //   panels: {
  //     primary: {
  //       factionIconSize: 4,
  //       shipIconSize: 82,
  //     },
  //     sides: {
  //       factionIconSize: 2,
  //       shipIconSize: 20,
  //     },
  //     topAndBottom: {
  //       factionIconSize: 4,
  //       shipIconSize: 18,
  //     },
  //   },
  // },
  {
    name: "Delta-7 Aethersprite",
    icon: "\\",
    factions: [Factions.GALACTIC_REPUBLIC],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 14,
      width: 26,
      length: 36,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 30,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 9,
        leftOffset: -6,
        rightOffset: -4,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 8,
      },
    },
  },
  {
    name: "Droid Tri-Fighter",
    icon: "+",
    factions: [Factions.SEPARATIST_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 21,
      width: 19,
      length: 29,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 19,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 16,
        rightOffset: 2,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 13,
      },
    },
  },
  {
    name: "Eta-2 Actis",
    icon: "-",
    factions: [Factions.GALACTIC_REPUBLIC],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 15,
      width: 24,
      length: 27,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 18,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 8,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 7,
      },
    },
  },
  {
    name: "Eta-2 Actis",
    modifier: "in Syliure-class Hyperspace Ring",
    icon: "-*",
    factions: [Factions.GALACTIC_REPUBLIC],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 25,
      width: 38,
      length: 36,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 21,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 16,
        rightOffset: 2,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 19,
      },
    },
  },
  {
    name: "Fang Fighter",
    modifier: "(1.0 Sculpt)",
    icon: "M",
    iconMargin: -15,
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 15,
      width: 44,
      length: 46,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 37,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 9,
        rightOffset: 1,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 7,
      },
    },
  },
  {
    name: "Fireball",
    icon: "0",
    factions: [Factions.RESISTANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 16,
      width: 50,
      length: 49,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 38,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 6,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 7,
      },
    },
  },
  {
    name: "Firespray-class Patrol Craft",
    icon: "f",
    iconMargin: -10,
    factions: [Factions.SCUM_AND_VILLAINY, Factions.SEPARATIST_ALLIANCE],
    dimensions: {
      size: ShipSizes.MEDIUM,
      height: 35,
      width: 78,
      length: 78,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 69,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 25,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 25,
      },
    },
    // orientation: "side",
  },
  {
    name: "G-1A Starfighter",
    icon: "n",
    iconMargin: -20,
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 35,
      width: 44,
      length: 68,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 57,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 29,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 26,
      },
    },
  },
  {
    name: "HMP Droid Gunship",
    icon: ".",
    factions: [Factions.SEPARATIST_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 13,
      width: 43,
      length: 55,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 46,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 7,
        leftOffset: -4.5,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 5,
      },
    },
  },
  {
    name: "Hyena-Class Droid Bomber",
    icon: "=",
    factions: [Factions.SEPARATIST_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 13,
      width: 33,
      length: 47,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 38,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 7,
        leftOffset: -8.5,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 5,
      },
    },
  },
  {
    name: "HWK-290 Light Freighter",
    icon: "h",
    iconMargin: -20,
    factions: [Factions.REBEL_ALLIANCE, Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 18,
      width: 52,
      length: 66,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 54,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 15,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 12,
        shipIconMargin: -10,
      },
    },
  },
  {
    name: "Jumpmaster 5000",
    icon: "p",
    iconMargin: -20,
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.LARGE,
      height: 24,
      width: 80,
      length: 77,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 75,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 20,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 20,
      },
    },
  },
  {
    name: "Kihraxz Fighter",
    icon: "r",
    iconMargin: -10,
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 13,
      width: 38,
      length: 46,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 36,
        shipIconMargin: -15,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 6,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 7,
      },
    },
  },
  {
    name: "LAAT/i Gunship",
    icon: "/",
    factions: [Factions.GALACTIC_REPUBLIC],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 34,
      width: 62,
      length: 64,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 50,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 20,
        leftOffset: 6,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 22,
      },
    },
  },
  // {
  //   name: "Lambda-Class T-4A Shuttle",
  //   icon: "l",
  //   factions: [Factions.GALACTIC_EMPIRE],
  //   dimensions: {
  //     size: ShipSizes.LARGE,
  //     height: 46,
  //     width: 70,
  //     length: 75,
  //   },
  //   panels: {
  //     primary: {
  //       factionIconSize: 4,
  //       shipIconSize: 62,
  //     },
  //     sides: {
  //       factionIconSize: 2,
  //       shipIconSize: 20,
  //     },
  //     topAndBottom: {
  //       factionIconSize: 4,
  //       shipIconSize: 35,
  //     },
  //   },
  // },
  {
    name: "Lancer-Class Pursuit Craft",
    icon: "L",
    iconMargin: -15,
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.LARGE,
      height: 34,
      width: 120,
      length: 122,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 82,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 20,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 26,
      },
    },
  },
  {
    name: "M12-L Kimogila Fighter",
    icon: "K",
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.MEDIUM,
      height: 23,
      width: 58,
      length: 55,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 47,
        shipIconMargin: -15,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 10,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 10,
      },
    },
  },
  {
    name: "M3-A Interceptor",
    icon: "s",
    iconMargin: -10,
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 13,
      width: 33,
      length: 37,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 27,
        shipIconMargin: -15,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 9,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 7,
      },
    },
  },
  {
    name: "Mining Guild TIE Fighter",
    icon: "C",
    iconMargin: -10,
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 28,
      width: 36,
      length: 43,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 33,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 20,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 20,
      },
    },
  },
  // {
  //   name: "Modified YT-1300 Freighter",
  //   icon: "m",
  //   factions: [Factions.REBEL_ALLIANCE],
  //   dimensions: {
  //     size: ShipSizes.LARGE,
  //     height: 34,
  //     width: 98,
  //     length: 126,
  //   },
  //   panels: {
  //     primary: {
  //       factionIconSize: 4,
  //       shipIconSize: 90,
  //     },
  //     sides: {
  //       factionIconSize: 2,
  //       shipIconSize: 20,
  //     },
  //     topAndBottom: {
  //       factionIconSize: 4,
  //       shipIconSize: 25,
  //     },
  //   },
  // },
  {
    name: "Naboo Royal N-1 Starfighter",
    icon: "<",
    factions: [Factions.GALACTIC_REPUBLIC],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 14,
      width: 30,
      length: 53,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 38,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 8,
        leftOffset: -10,
        rightOffset: -8,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 4,
      },
    },
  },
  {
    name: "Nantex-Class Starfighter",
    icon: ";",
    factions: [Factions.SEPARATIST_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 10,
      width: 20,
      length: 42,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 29,
      },
    },
  },
  {
    name: "Nimbus-class V-Wing",
    icon: ",",
    factions: [Factions.GALACTIC_REPUBLIC],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 19,
      width: 33,
      length: 28,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 18,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 16,
        leftOffset: -3,
        rightOffset: 2,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 12,
      },
    },
  },
  {
    name: "Quadrijet Transfer Spacetug",
    icon: "q",
    iconMargin: -10,
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 26,
      width: 49,
      length: 40,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 30,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 20,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 20,
      },
    },
  },
  {
    name: "Resistance Transport",
    icon: ">",
    factions: [Factions.RESISTANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 23,
      width: 37,
      length: 68,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 38,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 20,
        leftOffset: -3,
        rightOffset: 2,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 12,
      },
    },
  },
  {
    name: "Resistance Transport Pod",
    icon: "?",
    factions: [Factions.RESISTANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 14,
      width: 21,
      length: 23,
    },
    panels: {
      primary: {
        factionIconSize: 4,
        shipIconSize: 12,
      },
      sides: {
        factionIconSize: 2,
        shipIconSize: 20,
        leftOffset: 666,
        rightOffset: 666,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 0,
      },
    },
    // displaySide: false,
  },
  {
    name: "RZ-1 A-Wing",
    icon: "a",
    iconMargin: -5,
    factions: [Factions.REBEL_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 15,
      width: 27,
      length: 39,
    },
    panels: {
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 4,
      },
      primary: {
        factionIconSize: 5,
        shipIconSize: 27,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 6,
      },
    },
  },
  {
    name: "RZ-2 A-Wing",
    icon: "E",
    factions: [Factions.RESISTANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 16,
      width: 23,
      length: 38,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 28,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 9,
        rightOffset: 2,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 8,
      },
    },
  },
  {
    name: "Scavenged YT-1300 Freighter",
    icon: "Y",
    factions: [Factions.RESISTANCE],
    dimensions: {
      size: ShipSizes.LARGE,
      height: 34,
      width: 98,
      length: 126,
    },
    panels: {
      primary: {
        factionIconSize: 4,
        shipIconSize: 90,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 20,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 25,
      },
    },
  },
  {
    name: "Scurrg H-6 Bomber",
    icon: "H",
    iconMargin: -10,
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 21,
      width: 52,
      length: 77,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 40,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 16,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 12,
      },
    },
  },
  {
    name: "Sheathipede-class Shuttle",
    icon: "%",
    iconMargin: -10,
    factions: [Factions.REBEL_ALLIANCE, Factions.SEPARATIST_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 20,
      width: 24,
      length: 43,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 31,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 10,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 4,
      },
    },
  },
  {
    name: "StarViper-class Attack Platform",
    icon: "v",
    iconMargin: -10,
    factions: [Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 27,
      width: 39,
      length: 69,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 58,
        shipIconMargin: -20,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 19,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 17,
      },
    },
  },
  {
    name: "Syliure-class Hyperspace Ring",
    icon: "*",
    factions: [Factions.GALACTIC_REPUBLIC],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 22,
      width: 38,
      length: 43,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 34,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 16,
        leftOffset: -7,
        rightOffset: -5,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 14,
      },
    },
  },
  {
    name: "T-65 X-Wing",
    modifier: "(Fixed Wings)",
    icon: "x",
    iconMargin: -15,
    factions: [Factions.REBEL_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 18,
      width: 41,
      length: 49,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 40,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 14,
        shipIconMargin: -20,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 14,
        shipIconMargin: -25,
      },
    },
  },
  {
    name: "T-65 X-Wing",
    modifier: "(Folding Wings)",
    icon: "x",
    iconMargin: -10,
    factions: [Factions.REBEL_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 14,
      width: 40,
      length: 49,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 40,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 6,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 10,
        shipIconMargin: -20,
      },
    },
  },
  {
    name: "T-70 X-Wing",
    modifier: "(Fixed Wings)",
    icon: "w",
    factions: [Factions.RESISTANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 17,
      width: 44,
      length: 48,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 37,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 10,
        rightOffset: 2,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 7,
      },
    },
  },
  {
    name: "T-70 X-Wing",
    modifier: "(Folding Wings)",
    icon: "w",
    factions: [Factions.RESISTANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 15,
      width: 44,
      length: 48,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 37,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 8,
        rightOffset: 1,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 4,
      },
    },
  },
  {
    name: "TIE Advanced v1",
    icon: "R",
    iconMargin: -10,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 19,
      width: 34,
      length: 31,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 20,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 11,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 10,
      },
    },
  },
  {
    name: "TIE Advanced x1",
    icon: "A",
    iconMargin: -15,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 21,
      width: 34,
      length: 32,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 23,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 18,
        shipIconMargin: -20,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 12,
      },
    },
  },
  {
    name: "TIE Interceptor",
    icon: "I",
    iconMargin: -20,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 25,
      width: 32,
      length: 40,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 28,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 16,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 15,
      },
    },
  },
  {
    name: "TIE Reaper",
    icon: "V",
    iconMargin: -20,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.MEDIUM,
      height: 22,
      width: 56,
      length: 90,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 76,
        shipIconMargin: -30,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 10,
        leftOffset: 5,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 12,
      },
    },
  },
  {
    name: "TIE/ag Aggressor",
    icon: "`",
    iconMargin: -10,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 24,
      width: 32,
      length: 35,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 25,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 16,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 15,
      },
    },
  },
  {
    name: "TIE/Ba Interceptor",
    icon: "j",
    factions: [Factions.FIRST_ORDER],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 26,
      width: 34,
      length: 41,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 32,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 22,
        rightOffset: 4,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 18,
      },
    },
  },
  {
    name: "TIE/ca Punisher",
    icon: "N",
    iconMargin: -10,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.MEDIUM,
      height: 30,
      width: 56,
      length: 47,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 32,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 28,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 22,
        shipIconMargin: -5,
      },
    },
  },
  {
    name: "TIE/D Defender",
    icon: "D",
    iconMargin: -10,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 42,
      width: 42,
      length: 38,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 26,
        shipIconMargin: -5,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 28,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 32,
      },
    },
  },
  {
    name: "TIE/FO Fighter",
    icon: "O",
    factions: [Factions.FIRST_ORDER],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 33,
      width: 35,
      length: 39,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 28,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 26,
        leftOffset: 8,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 22,
      },
    },
  },
  {
    name: "TIE/ln Fighter",
    icon: "F",
    iconMargin: -20,
    factions: [Factions.GALACTIC_EMPIRE, Factions.REBEL_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 34,
      width: 36,
      length: 44,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 26,
        shipIconMargin: -10,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 28,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 22,
      },
    },
  },
  {
    name: "TIE/ph Phantom",
    icon: "P",
    iconMargin: -10,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 25,
      width: 30,
      length: 43,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 26,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 22,
        shipIconMargin: -20,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 12,
      },
    },
  },
  {
    name: "TIE/rb Heavy",
    icon: "J",
    iconMargin: -10,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.MEDIUM,
      height: 42,
      width: 62,
      length: 56,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 47,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 35,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 35,
      },
    },
  },
  {
    name: "TIE/sa Bomber",
    icon: "B",
    iconMargin: -20,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 24,
      width: 45,
      length: 40,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 26,
        shipIconMargin: -10,
      },
      sides: {
        factionIconSize: 5,
        shipIconSize: 16,
      },
      topAndBottom: {
        factionIconSize: 5,
        shipIconSize: 16,
      },
    },
  },
  {
    name: "TIE/se Bomber",
    icon: "!",
    factions: [Factions.FIRST_ORDER],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 24,
      width: 63,
      length: 65,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 52,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 15,
        leftOffset: 2,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 18,
      },
    },
    // orientation: "side",
  },
  {
    name: "TIE/SF Fighter",
    icon: "S",
    factions: [Factions.FIRST_ORDER],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 33,
      width: 35,
      length: 39,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 29,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 26,
        leftOffset: 8,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 24,
      },
    },
  },
  {
    name: "TIE/sk Striker",
    icon: "T",
    iconMargin: -10,
    factions: [Factions.GALACTIC_EMPIRE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 18,
      width: 38,
      length: 64,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 32,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 12,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 10,
      },
    },
  },
  {
    name: "TIE/vn Silencer",
    icon: "$",
    factions: [Factions.FIRST_ORDER],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 24,
      width: 43,
      length: 80,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 58,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 16,
        leftOffset: 3,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 16,
      },
    },
  },
  {
    name: "TIE/wi Whisper Modified Interceptor",
    icon: "#",
    factions: [Factions.FIRST_ORDER],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 23,
      width: 34,
      length: 75,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 49,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 20,
        leftOffset: -11,
        rightOffset: -7,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 12,
      },
    },
  },
  {
    name: "Upsilon-Class Shuttle",
    icon: "U",
    factions: [Factions.FIRST_ORDER],
    dimensions: {
      size: ShipSizes.LARGE,
      height: 53,
      width: 134,
      length: 65,
    },
    panels: {
      primary: {
        factionIconSize: 4,
        shipIconSize: 56,
      },
      sides: {
        factionIconSize: 2,
        shipIconSize: 20,
      },
      topAndBottom: {
        factionIconSize: 6,
        shipIconSize: 40,
      },
    },
  },
  {
    name: "UT-60D U-Wing",
    icon: "u",
    iconMargin: -20,
    factions: [Factions.REBEL_ALLIANCE],
    dimensions: {
      size: ShipSizes.MEDIUM,
      height: 23,
      width: 35,
      length: 91,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 42,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 16,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 14,
      },
    },
  },
  {
    name: "V-19 Torrent",
    icon: "^",
    factions: [Factions.GALACTIC_REPUBLIC],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 27,
      width: 32,
      length: 58,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 48,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 16,
        leftOffset: 6,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 18,
      },
    },
  },
  // {
  //   name: "VCX-100 Light Freighter",
  //   icon: "G",
  //   factions: [Factions.REBEL_ALLIANCE],
  //   dimensions: {
  //     size: ShipSizes.LARGE,
  //     height: 55,
  //     width: 155,
  //     length: 120,
  //   },
  //   panels: {
  //     primary: {
  //       factionIconSize: 5,
  //       shipIconSize: 108,
  //     },
  //     sides: {
  //       factionIconSize: 4,
  //       shipIconSize: 42,
  //       leftOffset: -3,
  //       rightOffset: 2,
  //     },
  //     topAndBottom: {
  //       factionIconSize: 4,
  //       shipIconSize: 42,
  //     },
  //   },
  // },
  // {
  //   name: "VT-49 Decimator",
  //   icon: "d",
  //   factions: [Factions.GALACTIC_EMPIRE],
  //   dimensions: {
  //     size: ShipSizes.LARGE,
  //     height: 37,
  //     width: 97,
  //     length: 143,
  //   },
  //   panels: {
  //     primary: {
  //       factionIconSize: 4,
  //       shipIconSize: 52,
  //     },
  //     sides: {
  //       factionIconSize: 2,
  //       shipIconSize: 20,
  //     },
  //     topAndBottom: {
  //       factionIconSize: 4,
  //       shipIconSize: 15,
  //     },
  //   },
  // },
  {
    name: "Vulture-class Droid Fighter",
    icon: "_",
    factions: [Factions.SEPARATIST_ALLIANCE],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 16,
      width: 24,
      length: 34,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 22,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 9,
        leftOffset: -7,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 5,
      },
    },
  },
  {
    name: "Xi-class Light Shuttle",
    icon: "Q",
    factions: [Factions.FIRST_ORDER],
    dimensions: {
      size: ShipSizes.MEDIUM,
      height: 43,
      width: 74,
      length: 65,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 52,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 35,
        leftOffset: 5,
        rightOffset: 10,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 34,
      },
    },
  },
  // {
  //   name: "YT-2400",
  //   icon: "o",
  //   factions: [Factions.REBEL_ALLIANCE],
  //   dimensions: {
  //     size: ShipSizes.LARGE,
  //     height: 34,
  //     width: 68,
  //     length: 102,
  //   },
  //   panels: {
  //     primary: {
  //       factionIconSize: 4,
  //       shipIconSize: 60,
  //     },
  //     sides: {
  //       factionIconSize: 2,
  //       shipIconSize: 25,
  //     },
  //     topAndBottom: {
  //       factionIconSize: 4,
  //       shipIconSize: 25,
  //     },
  //   },
  // },
  {
    name: "Z-95-AF4 Headhunter",
    icon: "z",
    iconMargin: -10,
    factions: [Factions.REBEL_ALLIANCE, Factions.SCUM_AND_VILLAINY],
    dimensions: {
      size: ShipSizes.SMALL,
      height: 16,
      width: 35,
      length: 46,
    },
    panels: {
      primary: {
        factionIconSize: 5,
        shipIconSize: 37,
        shipIconMargin: -20,
      },
      sides: {
        factionIconSize: 4,
        shipIconSize: 9,
      },
      topAndBottom: {
        factionIconSize: 4,
        shipIconSize: 10,
      },
    },
  },
];
