import React, { useState } from "react";
import { factions, ships } from './data';
import { Ship } from "./ship";

export const Ships = () => {

  const defaultFaction = factions[0];
  const defaultShip = ships.find(ship => ship.factions.includes(defaultFaction.name));

  const [selectedFaction, setSelectedFaction] = useState(defaultFaction);
  const [selectedShip, setSelectedShip] = useState(defaultShip);
  const [addedShips, setAddedShips] = useState([]);

  const selectFaction = (event: any) => setSelectedFaction(factions.find(faction => faction.name === event.target.value));
  const selectShip = (event: any) => setSelectedShip(event.target.value);
  const addShip = () => setAddedShips([...addedShips, ships.find(ship => ship.name === selectedShip.name)]);
  const removeShip = (index: number) => setAddedShips([...addedShips.slice(0, index), ...addedShips.slice(index + 1)]);

  return <div>
    <div className="no-print">
      <input id="useFactionColor" type="checkbox" />
      <label htmlFor="useFactionColor">Use faction colors</label>
      <select onChange={selectFaction} defaultValue={defaultFaction.name}>
        {factions.map(faction =>
          <option value={faction.name}>{faction.name}</option>
        )}
      </select>
      <select onChange={selectShip} defaultValue={defaultShip.name}>
        {ships
          .filter(ship => ship.factions.includes(selectedFaction.name))
          .map(ship => <option value={ship.name}>{ship.fullName}</option>)
        }
      </select>
      <button onClick={addShip}>Add ship</button>
      {addedShips.map((ship, index) =>
        <div>
          <span className="removeButton no-print" onClick={() => removeShip(index)}>Remove {ship.fullName}</span>
          <Ship ship={ship} faction={selectedFaction} useFactionColor={true} />
        </div>
      )}
    </div>
  </div>
}
