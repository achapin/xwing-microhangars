import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { factions, ships } from './data';
import { Ship } from "./ship";

interface AddedShip {
  ship;
  faction;
}

export const Ships = () => {

  const { handleSubmit, register } = useForm<AddedShip>();

  const [selectedFaction,setSelectedFaction] = useState(factions[0].name);
  const [addedShips, setAddedShips] = useState<AddedShip[]>([]);

  const selectFaction = (event) => setSelectedFaction(event.target.value);
  const addShip = ({ ship, faction}: AddedShip) => setAddedShips([...addedShips, { ship, faction }]);
  const removeShip = (index: number) => setAddedShips([...addedShips.slice(0, index), ...addedShips.slice(index + 1)]);

  return <>
    <div className="no-print">
      <input id="useFactionColor" type="checkbox" />
      <label htmlFor="useFactionColor">Use faction colors</label>

      <form onSubmit={handleSubmit(addShip)}>
        <select {...register("faction")} onChange={selectFaction}>
          {factions.map(faction =>
            <option value={faction.name}>{faction.name}</option>
          )}
        </select>
        <select {...register("ship")}>
          {ships
            .filter(ship => ship.factions.includes(selectedFaction))
            .map(ship => <option value={ship.name}>{ship.fullName}</option>)
          }
        </select>
        <button type="submit">Add ship</button>
      </form>
    </div>
      
    {addedShips.map(({ ship, faction }, index) =>
      <div>
        <span className="removeButton no-print" onClick={() => removeShip(index)}>Remove {ship.fullName}</span>
        <Ship ship={ship} faction={faction} useFactionColor={true} />
      </div>
    )}
  </>
}
