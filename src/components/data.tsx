import { data } from "../data";

interface FactionOrShip {
  name: string;
  fullName?: string;
}

const byFullName = (a: FactionOrShip, b: FactionOrShip) => (a.fullName || a.name) > (b.fullName || b.name) ? 1 : -1;

export const factions = data.factions.sort(byFullName);
export const ships = data.ships
  .map(ship => {
    const fullName = ship.modifier ? `${ship.name} ${ship.modifier}` : ship.name
    return { ...ship, fullName }
  })
  .sort(byFullName);

export const defaultFactionName = "Rebel Alliance";

let shipsByFactionObject = {};
for (const faction of factions) {
  shipsByFactionObject[faction.name] = ships.filter(ship => ship.factions.includes(faction.name))
}
export const shipsByFaction = shipsByFactionObject;

export const defaultShips = shipsByFaction[defaultFactionName];
