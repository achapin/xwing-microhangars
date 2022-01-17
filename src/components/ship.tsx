import './ship.css';
import { Ship as ShipData, Faction, Panel as PanelInterface } from '../data';

interface ShipProps {
  ship: ShipData;
  faction: Faction;
  useFactionColor: boolean;
}

interface PanelProps {
  ship: ShipData;
  faction: Faction;
  panel: PanelInterface
  useFactionColor: boolean;
}

const PrimaryPanel = ({ ship, faction, useFactionColor }: ShipProps) => {
  const panel = ship.panels.primary;

  return <Panel {...{ faction, ship, panel, useFactionColor }}/>;
}

const TopPanel = ({ ship, faction, useFactionColor }: ShipProps) => {
  const panel = ship.panels.top;

  return panel ? <Panel {...{ faction, ship, panel, useFactionColor }}/> : <></>;
}

const SidePanel = ({ ship, faction, useFactionColor }: ShipProps) => {
  const panel = ship.panels.sides;

  return panel ? <Panel {...{ faction, ship, panel, useFactionColor }}/> : <></>;
}

const Panel = ({ ship, faction, panel, useFactionColor }: PanelProps) => {
  const factionIconSize = { fontSize: `${panel.factionIconSize}mm` };
  const shipIconSize = { fontSize: `${panel.shipIconSize}mm` };
  const factionColor = useFactionColor ? { color: faction.color } : {};
  
  return <>
    <div className="faction-icon" style={{ ...factionIconSize, ...factionColor }}>{faction.icon}</div>
    <div className="ship-name">{ship.name}</div>
    <div className="ship-icon" style={shipIconSize}>{ship.icon}</div>
  </>;
}

export const Ship = ({ ship, faction, useFactionColor }: ShipProps) => {

  const { dimensions: { height, width, length } } = ship;
  const shipHeight = `${height}mm`;
  const shipHeightWithPadding = `${height + 2}mm`
  const shipWidth = `${width}mm`;
  const shipLength = `${length}mm`;

  let sideLeftOffset = ship.panels.sides?.leftOffset || 0;
  let sideRightOffset = ship.panels.sides?.rightOffset || 0;

  return <>
    <table>
      <tbody>

        <tr className="top-flap">
          <td style={{ width: shipHeight, maxWidth: shipHeight }}></td>
          <td className="model-width render-flap cut-top cut-left cut-right" style={{ width: shipWidth, maxWidth: shipWidth }}></td>
          <td colSpan={3}></td>
        </tr>

        <tr className="top" style={{ height: shipHeightWithPadding, maxHeight: shipHeightWithPadding }}>
          <td className="flap-left cut-left cut-right cut-top" style={{ width: shipHeight, borderTopLeftRadius: shipHeight, maxWidth: shipHeight }}></td>
          <td className="render cut-left cut-right" style={{ width: shipWidth, maxWidth: shipWidth }}>
            <div className="upsideDown content">
              <TopPanel {...{ship, faction, useFactionColor}} />
            </div>
          </td>
          <td className="flap-right cut-left cut-right cut-top" style={{ width: shipHeight, borderTopRightRadius: shipHeight, maxWidth: shipHeight }}></td>
          <td colSpan={2}></td>
        </tr>

        <tr className="main" style={{ height: shipLength, maxHeight: shipLength }}>
          <td className="render cut-left" style={{ width: shipHeight, maxWidth: shipHeight }}>
            <div className="leftSide sideDisplay" style={{ left: `${sideLeftOffset}mm` }}>
              <SidePanel {...{ship, faction, useFactionColor}}  />
            </div>
          </td>
          <td className="render" style={{ width: shipWidth, maxWidth: shipWidth }}>
            <PrimaryPanel {...{ship, faction, useFactionColor}}  />
          </td>
          <td className="render" style={{ width: shipHeight, maxWidth: shipHeight }}>
            <div className="rightSide sideDisplay" style={{ left: `${sideRightOffset}mm` }}>
              <SidePanel  {...{ship, faction, useFactionColor}}  />
            </div>
          </td>
          <td className="ender cut-top" style={{ width: shipWidth, maxWidth: shipWidth }}>
            <PrimaryPanel  {...{ship, faction, useFactionColor}}  />
          </td>
          <td className="side-flap render cut-top cut-bottom cut-right glue"></td>
          <td></td>
        </tr>

        <tr style={{ height: shipHeightWithPadding }}>
          <td className="render cut-left cut-bottom cut-right glue" style={{ width: shipHeight, maxWidth: shipHeight }}>
          </td>
          <td className="render cut-left cut-bottom cut-right" style={{ width: shipWidth, maxWidth: shipWidth }}>
            <div className="content">
              <TopPanel  {...{ship, faction, useFactionColor}}  />
            </div>
          </td>
          <td className="render cut-left cut-bottom cut-right glue" style={{ width: shipHeight, maxWidth: shipHeight }}>
          </td>
          <td className="render cut-left cut-bottom cut-right glue" style={{ width: shipWidth, maxWidth: shipWidth }}>
          </td>
          <td></td>
        </tr>
        
      </tbody>
    </table>
  </>
}
