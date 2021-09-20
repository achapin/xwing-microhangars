import './ships.css';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Badge, Box, Button, Checkbox, Close, Flex, Label, Select, Switch } from 'theme-ui';
import { factions, ships, defaultFactionName, defaultShips, shipsByFaction } from './data';
import { Ship } from "./ship";

interface AddedShip {
  ship;
  faction;
}

interface ShipForm {
  shipName: string;
  factionName: string;
}

export const Ships = () => {

  const { handleSubmit, register, reset } = useForm<ShipForm>();

  const [useFactionColor, setUseFactionColor] = useState(true);
  const checkUseFactionColor = ({ target: { checked: useFactionColor } }) => setUseFactionColor(useFactionColor);

  const [availableShips, setAvailableShips] = useState(defaultShips);
  const selectFaction = ({ target: { value: factionName } }) => {
    const availableShips = shipsByFaction[factionName];
    setAvailableShips(availableShips);
    reset({ factionName: factionName, shipName: availableShips[0].name });
  };

  const [addedShips, setAddedShips] = useState<AddedShip[]>([]);
  const addShip = ({ shipName, factionName }: ShipForm) => {
    const addedShip = {
      ship: ships.find(ship => ship.fullName === shipName),
      faction: factions.find(faction => faction.name === factionName)
    }
    setAddedShips([...addedShips, addedShip])
  };
  const removeShip = (index: number) => setAddedShips([...addedShips.slice(0, index), ...addedShips.slice(index + 1)]);

  return <>

    <Flex className="no-print" as="form" onSubmit={handleSubmit(addShip)} sx={{ mt: 2 }}>
      
      <Box sx={{ mx: 2, pt: 2 }}>
        <Switch label="Use faction colors?" onChange={checkUseFactionColor} defaultChecked={true}/>
      </Box>
      
      <Select {...register("factionName")} onChange={selectFaction} defaultValue={defaultFactionName} sx={{ px: 2 }}>
        {factions.map(faction =>
          <option value={faction.name}>{faction.name}</option>
        )}
      </Select>
      <Select {...register("shipName")} sx={{ mx: 2 }}>
        {availableShips
          .map(ship => <option value={ship.fullName}>{ship.fullName}</option>)
        }
      </Select>
      <Button type="submit" sx={{ mx: 2 }}>Add ship</Button>
    </Flex>
      
    {addedShips.map(({ ship, faction }, index) =>
      <Box className="box">
        <Badge className="no-print" variant="outline" sx={{ color: "secondary", bg: "transparent", boxShadow: "inset 0 0 0 1px", position: "relative", top: 40, left: 10}} onClick={() => removeShip(index)}>
          <Close/>
        </Badge>
        <Ship  {...{ ship, faction, useFactionColor }} />
      </Box>
    )}
  </>
}
