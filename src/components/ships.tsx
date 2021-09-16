import React, { useState } from "react";
import { factions, ships } from './data';
import { Ship, ShipInterface } from "./ship";

export const Ships = () => {

  const defaultFaction = factions[0].name;
  const defaultShip = ships.find(ship => ship.factions.includes(defaultFaction))?.name;

  const [selectedFaction, setSelectedFaction] = useState(defaultFaction);
  const [selectedShip, setSelectedShip] = useState(defaultShip);
  const [addedShips, setAddedShips] = useState<ShipInterface[]>([]);

  const selectFaction = (event: any) => {
    setSelectedFaction(event.target.value);
  }

  const selectShip = (event: any) => {
    setSelectedShip(event.target.value);
  }

  const addShip = () => {
    const shipToAdd = ships.find(ship => ship.name === selectedShip);
    if (shipToAdd) {
      // @ts-ignore
      setAddedShips([...addedShips, shipToAdd]);
    }
  }

  const removeShip = (index: number) => {
    const updatedShips = addedShips.splice(index, 1);
    setAddedShips(updatedShips);
  }

  return <div>
    <div className="no-print">
      <input id="useFactionColor" type="checkbox" />
      <label htmlFor="useFactionColor">Use faction colors</label>
      <select onChange={selectFaction} defaultValue={defaultFaction}>
        {factions.map(faction =>
          <option value={faction.name}>{faction.name}</option>
        )}
      </select>
      <select onChange={selectShip} defaultValue={defaultShip}>
        {ships
          .filter(ship => ship.factions.includes(selectedFaction))
          .map(ship => <option value={ship.name}>{ship.fullName}</option>)
        }
      </select>
      <button onClick={addShip}>Add ship</button>
      {addedShips.map((ship, index) =>
        <div>
          <span className="removeButton no-print" onClick={() => removeShip(index)}>Remove {ship.fullName}</span>
          <Ship ship={ship} />
        </div>
      )}
    </div>
  </div>
}
