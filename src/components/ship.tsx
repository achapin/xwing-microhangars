import "./ship.css";
import { Ship as ShipData, Faction, Panel as PanelInterface } from "../data";

interface ShipProps {
  ship: ShipData;
  faction: Faction;
  useFactionColor: boolean;
}

interface PanelProps {
  ship: ShipData;
  faction: Faction;
  panel: PanelInterface;
  useFactionColor: boolean;
}

const PrimaryPanel = ({ ship, faction, useFactionColor }: ShipProps) => {
  const panel = ship.panels.primary;

  return (
    <span className="panel-wrapper">
      <Panel {...{ faction, ship, panel, useFactionColor }} />
    </span>
  );
};

const TopPanel = ({ ship, faction, useFactionColor }: ShipProps) => {
  const panel = ship.panels.topAndBottom;

  return panel ? (
    <span className="panel-wrapper upside-down">
      <Panel {...{ faction, ship, panel, useFactionColor }} />
    </span>
  ) : (
    <></>
  );
};

const BottomPanel = ({ ship, faction, useFactionColor }: ShipProps) => {
  const panel = ship.panels.topAndBottom;

  return panel ? (
    <span className="panel-wrapper bottom-panel">
      <Panel {...{ faction, ship, panel, useFactionColor }} />
    </span>
  ) : (
    <></>
  );
};

const LeftSidePanel = ({ ship, faction, useFactionColor }: ShipProps) => {
  const panel = ship.panels.sides;

  return panel ? (
    <span className="panel-wrapper rotate-left">
      <Panel {...{ faction, ship, panel, useFactionColor }} />
    </span>
  ) : (
    <></>
  );
};

const RightSidePanel = ({ ship, faction, useFactionColor }: ShipProps) => {
  const panel = ship.panels.sides;

  return panel ? (
    <span className="panel-wrapper rotate-right">
      <Panel {...{ faction, ship, panel, useFactionColor }} />
    </span>
  ) : (
    <></>
  );
};

const Panel = ({ ship, faction, panel, useFactionColor }: PanelProps) => {
  const factionIconSize = { fontSize: `${panel.factionIconSize}mm` };
  const factionColor = useFactionColor ? { color: faction.color } : {};
  const factionStyle = { ...factionIconSize, ...factionColor };

  const shipIconSize = { fontSize: `${panel.shipIconSize}mm` };
  const shipIconMargin = panel.shipIconMargin
    ? { margin: `${panel.shipIconMargin}%` }
    : ship.iconMargin
    ? { margin: `${ship.iconMargin}%` }
    : {};
  const iconStyle = { ...shipIconSize, ...shipIconMargin };

  return (
    <>
      <div className="faction" style={factionStyle}>
        {faction.icon}
      </div>
      <div className="ship-name">{ship.name}</div>
      <div className="ship" style={iconStyle}>
        {ship.icon}
      </div>
    </>
  );
};

export const Ship = ({ ship, faction, useFactionColor }: ShipProps) => {
  const {
    dimensions: { height, width, length },
  } = ship;
  const shipHeight = `${height}mm`;
  const shipHeightWithPadding = `${height + 2}mm`;
  const shipWidth = `${width}mm`;
  const shipLength = `${length}mm`;

  return (
    <>
      <table>
        <tbody>
          <tr className="flap-top">
            <td style={{ width: shipHeight, maxWidth: shipHeight }}></td>
            <td
              className="cut-top cut-left cut-right flap-fold"
              style={{ width: shipWidth, maxWidth: shipWidth }}
            ></td>
            <td colSpan={3}></td>
          </tr>

          <tr
            style={{
              height: shipHeightWithPadding,
              maxHeight: shipHeightWithPadding,
            }}
          >
            <td
              className="flap-left cut-left cut-top"
              style={{
                width: shipHeight,
                borderTopLeftRadius: shipHeight,
                maxWidth: shipHeight,
              }}
            ></td>
            <td
              className="cut-left cut-right fold-top"
              style={{ width: shipWidth, maxWidth: shipWidth }}
            >
              <TopPanel {...{ ship, faction, useFactionColor }} />
            </td>
            <td
              className="flap-right cut-right cut-top"
              style={{
                width: shipHeight,
                maxWidth: shipHeight,
                borderTopRightRadius: shipHeight,
              }}
            ></td>
            <td colSpan={2}></td>
          </tr>

          <tr style={{ height: shipLength, maxHeight: shipLength }}>
            <td
              className="fold-top fold-bottom cut-left"
              style={{ width: shipHeight, maxWidth: shipHeight }}
            >
              <LeftSidePanel {...{ ship, faction, useFactionColor }} />
            </td>
            <td
              className="fold-top fold-right fold-left fold-bottom"
              style={{ width: shipWidth, maxWidth: shipWidth }}
            >
              <PrimaryPanel {...{ ship, faction, useFactionColor }} />
            </td>
            <td
              className="fold-top fold-bottom fold-right"
              style={{ width: shipHeight, maxWidth: shipHeight }}
            >
              <RightSidePanel {...{ ship, faction, useFactionColor }} />
            </td>
            <td
              className="fold-right fold-bottom cut-top"
              style={{ width: shipWidth, maxWidth: shipWidth }}
            >
              <PrimaryPanel {...{ ship, faction, useFactionColor }} />
            </td>
            <td className="flap-side cut-top cut-bottom cut-right glue"></td>
            <td></td>
          </tr>

          <tr style={{ height: shipHeightWithPadding }}>
            <td
              className="cut-left cut-bottom glue"
              style={{ width: shipHeight, maxWidth: shipHeight }}
            ></td>
            <td
              className="cut-bottom cut-right cut-left"
              style={{ width: shipWidth, maxWidth: shipWidth }}
            >
              <BottomPanel {...{ ship, faction, useFactionColor }} />
            </td>
            <td
              className="cut-bottom cut-right glue"
              style={{ width: shipHeight, maxWidth: shipHeight }}
            ></td>
            <td
              className="cut-bottom cut-right glue"
              style={{ width: shipWidth, maxWidth: shipWidth }}
            ></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
