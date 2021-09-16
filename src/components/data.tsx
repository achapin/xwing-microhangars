import data from "../data.json";

const byFullName = (a: any, b: any) => (a.fullName || a.name) > (b.fullName || b.name) ? 1 : -1;

export const factions = data.factions.sort(byFullName);
export const ships = data.ships
  .map(ship => {
    const fullName = ship.modifier ? `${ship.name} ${ship.modifier}` : ship.name
    return { ...ship, fullName }
  })
  .sort(byFullName);
