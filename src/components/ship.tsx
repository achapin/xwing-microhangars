import './ship.css';
import { Ship as ShipInterface, Faction } from '../data';

interface AllProps {
  ship: ShipInterface;
  faction: Faction;
  useFactionColor: boolean;
}

const Display = ({ ship, faction, useFactionColor }: AllProps) => {
  const factionColor = useFactionColor ? { color: faction.color } : {};
  const displayFactionSize = ship.displayFactionSize ? { fontSize: `${ship.displayFactionSize}mm`} : {};
  const displayIconSize = ship.displayIconSize ? { fontSize: `${ship.displayIconSize}mm` } : {};

  return <>
    <div className="icon shipFaction" style={{ ...displayFactionSize, ...factionColor }}>{faction.icon}</div>
    <div className="fancy">{ship.name}</div>
    <div className="ship" style={displayIconSize}>{ship.icon}</div>
  </>;
}

const DisplayTop = ({ ship, faction, useFactionColor }: AllProps) => {
  const factionColor = useFactionColor ? { color: faction.color } : {};
  const displayTopFactionSize = ship.displayTopFactionSize ? { fontSize: `${ship.displayTopFactionSize}mm`} : {};
  const displayTopIconSize = ship.displayTopIconSize ? { fontSize: `${ship.displayTopIconSize}mm` } : {};

  return ship.displayTop ? <>
    <div className="icon shipFaction" style={{ ...displayTopFactionSize, ...factionColor }}>{faction.icon}</div>
    <div className="fancy">{ship.name}</div>
    <div className="ship" style={displayTopIconSize}>{ship.icon}</div>
  </> : <></>;
}

const DisplaySide = ({ ship, faction, useFactionColor }: AllProps) => {
  const factionColor = useFactionColor ? { color: faction.color } : {};
  const displaySideFactionSize = ship.displaySideFactionSize ? { fontSize: `${ship.displaySideFactionSize}mm`} : {};
  const displaySideIconSize = ship.displaySideIconSize ? { fontSize: `${ship.displaySideIconSize}mm` } : {};

  return ship.displaySide ? <>
    <div className="icon shipFaction" style={{ ...displaySideFactionSize, ...factionColor }}>{faction.icon}</div>
    <div className="fancy">{ship.name}</div>
    <div className="ship" style={displaySideIconSize}>{ship.icon}</div>
  </> : <></>;
}

export const Ship = ({ ship, faction, useFactionColor }: AllProps) => {

  const shipHeight = `${ship.height}mm`;
  const shipHeightPlus = `${ship.height + 2}mm`

  const shipWidth = `${ship.width}mm`;

  const shipLength = `${ship.length}mm`;

  let sideLeftOffset = 0;
  if (ship.sideLeftOffset || ship.displaySide) {
    sideLeftOffset = ship.sideLeftOffset;
  }
  let sideRightOffset = sideLeftOffset;
  if (ship.sideRightOffset || ship.displaySide) {
    sideRightOffset = ship.sideRightOffset;
  }

  return <>
    <table>
      <tbody>
        <tr className="top-flap">
            <td className="model-height" style={{ width: shipHeight, maxWidth: shipHeight }}></td>
            <td className="model-width render-flap cut-top cut-left cut-right" style={{width:shipWidth, maxWidth:shipWidth}}></td>
            <td colSpan={3}></td>
        </tr>
          <tr className="top model-height-height" style={{ height: shipHeightPlus, maxHeight: shipHeightPlus }}>
            <td className="model-height flap-left cut-left cut-right cut-top" style={{width:shipHeight, borderTopLeftRadius:shipHeight, maxWidth:shipHeight}}></td>
            <td className="model-width render cut-left cut-right" style={{width:shipWidth, maxWidth:shipWidth}}>
                <div className="upsideDown content">
                <Display ship={ship} faction={faction} useFactionColor={useFactionColor}/>
                </div>
            </td>
            <td className="model-height flap-right cut-left cut-right cut-top" style={{width:shipHeight, borderTopRightRadius:shipHeight, maxWidth:shipHeight}}></td>
            <td colSpan={2}></td>
        </tr>
        <tr className="main model-length"  style={{height:shipLength, maxHeight:shipLength}}>
            <td className="model-height render cut-left" style={{ width: shipHeight, maxWidth: shipHeight }}>
                <div className="leftSide sideDisplay" style={{left:`${sideLeftOffset}mm`}}>
                <DisplaySide ship={ship} faction={faction} useFactionColor={useFactionColor}/>
                </div>
            </td>
            <td className="model-width render" style={{width:shipWidth, maxWidth:shipWidth}}>
              <Display ship={ship} faction={faction} useFactionColor={useFactionColor}/>
            </td>
            <td className="model-height render" style={{ width: shipHeight, maxWidth: shipHeight }}>
                <div className="rightSide sideDisplay" style={{left:`${sideRightOffset}mm`}}>
                <DisplaySide ship={ship} faction={faction} useFactionColor={useFactionColor}/>
                </div>
            </td>
            <td className="model-width render cut-top" style={{width:shipWidth, maxWidth:shipWidth}}>
                <Display ship={ship} faction={faction} useFactionColor={useFactionColor}/>
            </td>
            <td className="side-flap render cut-top cut-bottom cut-right glue"></td>
            <td></td>
        </tr>
        <tr className="model-height-height" style={{height:shipHeightPlus}}>
            <td className="model-height render cut-left cut-bottom cut-right glue" style={{ width: shipHeight, maxWidth: shipHeight }}>
            </td>
            <td className="model-width render cut-left cut-bottom cut-right" style={{width:shipWidth, maxWidth:shipWidth}}>
            <div className="content">
                <DisplayTop ship={ship} faction={faction} useFactionColor={useFactionColor}/>
            </div>
            </td>
            <td className="model-height render cut-left cut-bottom cut-right glue" style={{width:shipHeight, maxWidth:shipHeight}}>
            </td>
            <td className="model-width render cut-left cut-bottom cut-right glue" style={{width:shipWidth, maxWidth:shipWidth}}>
            </td>
            <td></td>
        </tr>
      </tbody>
    </table>
  </>
}
