export interface ShipInterface {
  name: string;
  fullName: string;
  modifier?: string;
  icon: string;
  height: number;
  width: number;
  length: number;
  sideLeftOffset: number;
  sideRightOffset: number;
  displaySide: boolean;
  displayTop: boolean;
  displayFactionSize: number;
  displayIconSize: number;
  displaySideFactionSize: number;
  displaySideIconSize: number;
  displayTopFactionSize: number;
  displayTopIconSize: number;
  factions: string[];
}

export interface FactionInterface {
  name: string;
  icon: string;
  color: string;
}

export const Ship = ({ ship, faction, useFactionColor }: { ship: ShipInterface, faction: FactionInterface, useFactionColor: boolean }) => {

  const shipHeight = `${ship.height}mm`;
  const shipHeightPlus = `${ship.height + 2}mm`

  const shipWidth = `${ship.width}mm`;
  const shipWidthPlus = `${ship.width + 2}mm`;

  const shipLength = `${ship.length}mm`;

  var displayFactionSize = "";
  if (ship.hasOwnProperty("displayFactionSize")) {
    //   displayFactionSize = `style="font-size:${ship.displayFactionSize}mm"`;
    displayFactionSize = `font-size:${ship.displayFactionSize}mm;`;
  }
  var displayIconSize = "";
  if (ship.hasOwnProperty("displayIconSize")) {
    displayIconSize = ` style="font-size:${ship.displayIconSize}mm"`;
  }

  var factionColor = "";
  if (useFactionColor) {
    factionColor = `color:${faction.color}`;
  }

  var display = `<div class="icon shipFaction" style="${displayFactionSize} ${factionColor}">${faction.icon}</div>
                <div class="fancy">${ship.name}</div>
                <div class="ship"${displayIconSize}>${ship.icon}</div>`;

  var displayTopFactionSize = "";
  if (ship.hasOwnProperty("displayTopFactionSize")) {
    displayTopFactionSize = `font-size:${ship.displayTopFactionSize}mm;`;
  }

  var displayTopIconSize = "";
  if (ship.hasOwnProperty("displayTopIconSize")) {
    displayTopIconSize = ` style="font-size:${ship.displayTopIconSize}mm"`;
  }

  var displayTop = "";
  if (!ship.hasOwnProperty("displayTop") || ship.displayTop) {
    displayTop = `<div class="icon shipFaction" style="${displayTopFactionSize} ${factionColor}">${faction.icon}</div>
              <div class="fancy">${ship.name}</div>
              <div class="ship"${displayTopIconSize}>${ship.icon}</div>`;
  }

  var displaySideFactionSize = "";
  if (ship.hasOwnProperty("displaySideFactionSize")) {
    displaySideFactionSize = `font-size:${ship.displaySideFactionSize}mm;`;
  }

  var displaySideIconSize = "";
  if (ship.hasOwnProperty("displaySideIconSize")) {
    displaySideIconSize = ` style="font-size:${ship.displaySideIconSize}mm"`;
  }

  var displaySide = "";
  if (!ship.hasOwnProperty("displaySide") || ship.displaySide) {
    displaySide = `<div class="icon shipFaction" style="${displaySideFactionSize} ${factionColor}">${faction.icon}</div>
              <div class="fancy" style="width=${ship.height}mm;">${ship.name}</div>
              <div class="ship"${displaySideIconSize}>${ship.icon}</div>`;
  }

  let sideLeftOffset = 0;
  if (ship.sideLeftOffset || ship.displaySide) {
    sideLeftOffset = ship.sideLeftOffset;
  }
  let sideRightOffset = sideLeftOffset;
  if (ship.sideRightOffset || ship.displaySide) {
    sideRightOffset = ship.sideRightOffset;
  }

  return <div id="ship-${id}" className="box">
    {/* <span className="removeButton no-print" onclick="remove(${id})">Remove</span> */}
    <table>
      <tr className="top-flap">
          <td className="model-height" style={{ width: shipHeight, maxWidth: shipHeight }}></td>
          <td className="model-width render-flap cut-top cut-left cut-right" style={{width:shipWidth, maxWidth:shipWidth}}></td>
          <td colSpan={3}></td>
      </tr>
        <tr className="top model-height-height" style={{ height: shipHeightPlus, maxHeight: shipHeightPlus }}>
          <td className="model-height flap-left cut-left cut-right cut-top" style={{width:shipHeight, borderTopLeftRadius:shipHeight, maxWidth:shipHeight}}></td>
          <td className="model-width render cut-left cut-right" style={{width:shipWidth, maxWidth:shipWidth}}>
              <div className="upsideDown content">
              ${displayTop}
              </div>
          </td>
          <td className="model-height flap-right cut-left cut-right cut-top" style={{width:shipHeight, borderTopRightRadius:shipHeight, maxWidth:shipHeight}}></td>
          <td colSpan={2}></td>
      </tr>
      <tr className="main model-length"  style={{height:shipLength, maxHeight:shipLength}}>
          <td className="model-height render cut-left" style={{ width: shipHeight, maxWidth: shipHeight }}>
              <div className="leftSide sideDisplay" style={{left:`${sideLeftOffset}mm`}}>
                ${displaySide}
              </div>
          </td>
          <td className="model-width render" style={{width:shipWidth, maxWidth:shipWidth}}>
              ${display}
          </td>
          <td className="model-height render" style={{ width: shipHeight, maxWidth: shipHeight }}>
              <div className="rightSide sideDisplay" style={{left:`${sideRightOffset}mm`}}>
              ${displaySide}
              </div>
          </td>
          <td className="model-width render cut-top" style={{width:shipWidth, maxWidth:shipWidth}}>
              ${display}
          </td>
          <td className="side-flap render cut-top cut-bottom cut-right glue"></td>
          <td></td>
      </tr>
      <tr className="model-height-height" style={{height:shipHeightPlus}}>
          <td className="model-height render cut-left cut-bottom cut-right glue" style={{ width: shipHeight, maxWidth: shipHeight }}>
          </td>
          <td className="model-width render cut-left cut-bottom cut-right" style={{width:shipWidth, maxWidth:shipWidth}}>
          <div className="content">
          ${displayTop}
          </div>
          </td>
          <td className="model-height render cut-left cut-bottom cut-right glue" style={{width:shipHeight, maxWidth:shipHeight}}>
          </td>
          <td className="model-width render cut-left cut-bottom cut-right glue" style={{width:shipWidth, maxWidth:shipWidth}}>
          </td>
          <td></td>
      </tr>
    </table>
  </div>
}
