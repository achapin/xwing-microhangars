import {
  Factions,
  factions as unsortedFactions,
  ships as unsortedShips,
} from "../data";

interface FactionOrShip {
  name: string;
  fullName?: string;
}

const byFullName = (a: FactionOrShip, b: FactionOrShip) =>
  (a.fullName || a.name) > (b.fullName || b.name) ? 1 : -1;

export const factions = unsortedFactions.sort(byFullName);

export const ships = unsortedShips
  .map((ship) => {
    const fullName = ship.modifier
      ? `${ship.name} ${ship.modifier}`
      : ship.name;
    return { ...ship, fullName };
  })
  .sort(byFullName);

let shipsByFactionObject = {};
for (const faction of factions) {
  shipsByFactionObject[faction.name] = ships.filter((ship) =>
    ship.factions.includes(faction.name)
  );
}
export const shipsByFaction = shipsByFactionObject;

export const defaultFactionName = Factions.REBEL_ALLIANCE;

export const defaultShips = shipsByFaction[defaultFactionName];
