export interface ShipInterface {
  name: string;
  fullName: string;
  modifier?: string;
  icon: string;
  height: number;
  width: number;
  length: number;
  sideLeftOffset: number;
  displayFactionSize: number;
  displayIconSize: number;
  displaySideFactionSize: number;
  displaySideIconSize: number;
  displayTopFactionSize: number;
  displayTopIconSize: number;
  factions: string[];
}

export const Ship = ({ ship }: { ship: ShipInterface }) => {

  const shipHeight = `${ship.height}mm`;
  const shipHeightPlus = `${ship.height + 2}mm`

  const shipWidth = `${ship.width}mm`;
  const shipWidthPlus = `${ship.width + 2}mm`;

  return <div id="ship-${id}" className="box">
	{/* <span className="removeButton no-print" onclick="remove(${id})">Remove</span> */}
	<table>
    {/* <tr className="top-flap">
        <td className="model-height" style={{ width: shipHeight, maxWidth: shipHeight }}></td>
        <td className="model-width render-flap cut-top cut-left cut-right" style={{width:shipWidth, maxWidth:shipWidth}}></td>
        <td colSpan={3}></td>
    </tr>
      <tr className="top model-height-height" style={{ height: shipHeightPlus, maxHeight: shipHeightPlus }}>
        <td className="model-height flap-left cut-left cut-right cut-top" style="width:${ship.height}mm; border-top-left-radius:${ship.height}mm; max-width:${ship.height}mm;"></td>
        <td className="model-width render cut-left cut-right" style={{width:shipWidth, maxWidth:shipWidth}}>
            <div className="upsideDown content">
            ${displayTop}
            </div>
        </td>
        <td className="model-height flap-right cut-left cut-right cut-top" style="width:${ship.height}mm; border-top-right-radius:${ship.height}mm; max-width:${ship.height}mm;"></td>
        <td colSpan={2}></td>
    </tr>
    <tr className="main model-length"  style="height:${ship.length}mm; max-height:${ship.length}mm;">
        <td className="model-height render cut-left" style={{ width: shipHeight, maxWidth: shipHeight }}>
            <div className="leftSide sideDisplay" style="left:${sideLeftOffset}mm;">
            	${displaySide}
            </div>
        </td>
        <td className="model-width render" style={{width:shipWidth, maxWidth:shipWidth}}>
            ${display}
        </td>
        <td className="model-height render" style={{ width: shipHeight, maxWidth: shipHeight }}>
            <div className="rightSide sideDisplay" style="left:${sideRightOffset}mm;">
            ${displaySide}
            </div>
        </td>
        <td className="model-width render cut-top" style={{width:shipWidth, maxWidth:shipWidth}}>
            ${display}
        </td>
        <td className="side-flap render cut-top cut-bottom cut-right glue"></td>
        <td></td>
    </tr>
    <tr className="model-height-height" style="height:${ship.height + 2}mm;">
        <td className="model-height render cut-left cut-bottom cut-right glue" style="width:${ship.height}mm; max-width:${ship.height}mm;">
        </td>
        <td className="model-width render cut-left cut-bottom cut-right" style="width:${ship.width}mm; max-width:${ship.width}mm;">
        <div className="content">
        ${displayTop}
        </div>
        </td>
        <td className="model-height render cut-left cut-bottom cut-right glue" style="width:${ship.height}mm; max-width:${ship.height}mm;">
        </td>
        <td className="model-width render cut-left cut-bottom cut-right glue" style="width:${ship.width}mm; max-width:${ship.width}mm;">
        </td>
        <td></td>
    </tr> */}
</table>
</div>
}
