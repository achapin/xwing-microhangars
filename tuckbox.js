var ships;
var factions;
var shipSelection;
var factionSelection;
var shipId = 0;

function getUrl(url){
	var req = new XMLHttpRequest();
	req.open("GET",url,true);
	return req;
}

function loadURL(url){
	var req = getUrl(url);
	req.send();
	return new Promise(function(resolve, reject) {
		req.onreadystatechange = function() {
			if(req.readyState === 4)
			{
				if(req.status === 200)
				{
					resolve(JSON.parse(req.response));
				}else{
					reject();
				}
			}
		};
	});
}

function dataLoaded(json){
	ships = json.ships;
    factions = json.factions;
    ships.sort(orderShipsByLocalizedName);
    populateDropdowns();
    populateFactionDropdown();
}

function orderShipsByLocalizedName(shipOne, shipTwo){
	return getFullShipName(shipOne).localeCompare(getFullShipName(shipTwo));
}

function getFullShipName(ship){
	var name = ship.name;
	if(ship.hasOwnProperty("modifier")){
		name += " " + ship.modifier;
	}
	return name;
}

function populateDropdowns(){
    factionSelection = document.getElementById("faction");
    Object.keys(factions).forEach(function(faction){
        var option = new Option( faction, factions[faction]);
        factionSelection.add(option);
    });
    factionSelection.onchange = populateFactionDropdown;
}

function populateFactionDropdown() {
	var optionIndex = factionSelection.options.selectedIndex;
	var faction = factionSelection.options[optionIndex].text;
	shipSelection = document.getElementById("ship");
	var length = shipSelection.options.length;
	for (i = length-1; i >= 0; i--) {
	  shipSelection.options[i] = null;
	}
    ships.forEach(function(ship){
    	if(!ship.factions.includes(faction)){
    		return;
    	}
        var option = new Option(getFullShipName(ship), JSON.stringify(ship));
        shipSelection.add(option);
    });
}

function remove(id){
	document.getElementById("ship-"+id).remove();
}

function addShip(){
	document.getElementById("ships").innerHTML += getShipTable(shipSelection.value, factionSelection.value, shipId);
	shipId++;
}

function getShipTable(shipToParse, faction, id){
	var ship = JSON.parse(shipToParse);

    var warning = "";
	
	var displayFactionSize = "";
	if(ship.hasOwnProperty("displayFactionSize"))
	{
		displayFactionSize = ` style="font-size:${ship.displayFactionSize}mm"`;
	}
	var displayIconSize = "";
	if(ship.hasOwnProperty("displayIconSize"))
	{
		displayIconSize = ` style="font-size:${ship.displayIconSize}mm"`;
	}
	var display = `<div class="icon shipFaction"${displayFactionSize}>${faction}</div>
                <div class="fancy">${ship.name}</div>
                <div class="ship"${displayIconSize}>${ship.icon}</div>`
    
    var displayTopFactionSize = "";
	if(ship.hasOwnProperty("displayTopFactionSize"))
	{
		displayTopFactionSize = ` style="font-size:${ship.displayTopFactionSize}mm"`;
	}
	var displayTopIconSize = "";
	if(ship.hasOwnProperty("displayTopIconSize"))
	{
		displayTopIconSize = ` style="font-size:${ship.displayTopIconSize}mm"`;
	}
    var displayTop = "";
    if(!ship.hasOwnProperty("displayTop") || ship.displayTop){
    	displayTop = `<div class="icon shipFaction"${displayTopFactionSize}>${faction}</div>
                <div class="fancy">${ship.name}</div>
                <div class="ship"${displayTopIconSize}>${ship.icon}</div>`;
    }

    var displaySideFactionSize = "";
	if(ship.hasOwnProperty("displaySideFactionSize"))
	{
		displaySideFactionSize = ` style="font-size:${ship.displaySideFactionSize}mm"`;
	}
	var displaySideIconSize = "";
	if(ship.hasOwnProperty("displaySideIconSize"))
	{
		displaySideIconSize = ` style="font-size:${ship.displaySideIconSize}mm"`;
	}
    var displaySide = "";
    if(!ship.hasOwnProperty("displaySide") || ship.displaySide){
     	displaySide = `<div class="icon shipFaction"${displaySideFactionSize}>${faction}</div>
                <div class="fancy" style="width=${ship.height}mm;">${ship.name}</div>
                <div class="ship"${displaySideIconSize}>${ship.icon}</div>`;
    }

    var sideLeftOffset = 0;
    if(ship.hasOwnProperty("sideLeftOffset") || ship.displaySide){
     	sideLeftOffset = ship.sideLeftOffset;
    }
    var sideRightOffset = sideLeftOffset;
    if(ship.hasOwnProperty("sideRightOffset") || ship.displaySide){
     	sideRightOffset = ship.sideRightOffset;
    }

    if(ship.size == "large")
    {
        if(ship.hasOwnProperty("orientation") && ship.orientation == "split")
        {
            return `<div id="ship-${id}" class="box">
            <span class="btn-remove no-print" onclick="remove(${id})">Remove</span> <span class="no-print">${warning}</span>
            <table>
                <tr class="large-left" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                    <td class="left-side render cut-left cut-top cut-right" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                        <div class="upsideDown content">
                        ${displaySide}
                        </div>
                    </td>
                </tr>
                <tr class="large-center" style="height:${ship.width}mm; max-height:${ship.width}mm;">
                    </td>
                    <td class="front render cut-left cut-right" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                        <div class="leftSide content">
                        ${display}
                        </div>
                    </td>
                </tr>
                <tr class="large-right" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                    <td class="right-side render cut-bottom cut-left cut-right" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                        <div class="content">
                        ${displaySide}
                        </div>
                    </td>
                </tr>
            </table>
            <br />
            <table>
                <tr class="large-left" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                    <td class="left-side-flap glue cut-top cut-right cut-left"></td>
                </tr>
                <tr class="large-center" style="height:${ship.width}mm; max-height:${ship.width}mm;">
                    <td class="back render cut-right cut-left" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                        <div class="leftSide content">
                        ${display}
                        </div>
                    </td>
                </tr>
                <tr class="large-left" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                    <td class="right-side-flap glue cut-left cut-right cut-bottom"></td>
                </tr>
            </table>
            <br />
            <table style="float:left; margin-right: 10mm">
                <tr class="large-left" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                    <td class="top" style="width:15mm; max-width:15mm;"> </td>
                    <td class="left-top-flap render cut-top cut-right" style="width:${ship.height}mm; max-width:${ship.height}mm; border-top-right-radius:${ship.height}mm;"></td>
                </tr>
                <tr class="large-center" style="height:${ship.width}mm; max-height:${ship.width}mm;">
                    <td class="top glue cut-top cut-left cut-bottom" style="width:15mm; max-width:15mm;"> </td>
                    <td class="top render" style="width:${ship.height}mm; max-width:${ship.height}mm;">
                        <div class="rightSide content">
                        ${displayTop}
                        </div>
                    </td>
                    <td class="top-flap render cut-top cut-right cut-bottom side-flap" style="border-top-right-radius:5mm; border-bottom-right-radius:5mm;"></td>
                </tr>
                <tr class="large-left" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                    <td class="top" style="width:15mm; max-width:15mm;"> </td>
                    <td class="right-top-flap render cut-bottom cut-right" style="width:${ship.height}mm; max-width:${ship.height}mm; border-bottom-right-radius:${ship.height}mm;"></td>
                </tr>
            </table>
             
            <table>
            <tr class="large-left" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                <td class="glue cut-left cut-top" style="width:10mm; max-width:10mm;"> </td>    
                <td class="left-bottom-flap render glue cut-top" style="width:${ship.height}mm; max-width:${ship.height}mm;"> </td>
                <td class="glue cut-right cut-top cut-bottom" style="width:10mm; max-width:10mm;"> </td>
            </tr>
            <tr class="large-center" style="height:${ship.width}mm; max-height:${ship.width}mm;">
                <td class="glue cut-left cut-top cut-bottom" style="width:10mm; max-width:10mm;"> </td>
                <td class="bottom render" style="width:${ship.height}mm; max-width:${ship.height}mm;">
                    <div class="leftSide content">
                    ${displayTop}
                    </div>
                </td>
                <td class="glue cut-right cut-top cut-bottom" style="width:10mm; max-width:10mm;"> </td>
            </tr>
            <tr class="large-right" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                <td class="glue cut-left cut-top cut-bottom" style="width:10mm; max-width:10mm;"> </td>
                <td class="right-bottom-flap render glue cut-bottom" style="width:${ship.height}mm; max-width:${ship.height}mm;"></td>
                <td class="glue cut-right cut-top cut-bottom" style="width:10mm; max-width:10mm;"> </td>
            </tr>
            </table>
            </div>`;
        }
        return `<div id="ship-${id}" class="box">
        <span class="btn-remove no-print" onclick="remove(${id})">Remove</span> <span class="no-print">${warning}</span>
        <table>
            <tr class="large-left" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                <td class="left-bottom-flap glue cut-left cut-top cut-right" style="width:${ship.height}mm; max-width:${ship.height}mm;"> </td>
                <td class="left-side render cut-top" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                    <div class="upsideDown content">
                    ${displaySide}
                    </div>
                </td>
                <td class="left-top-flap render cut-top cut-right" style="width:${ship.height}mm; max-width:${ship.height}mm; border-top-right-radius:${ship.height}mm;"></td>
                <!--Spacer here?-->
            </tr>
            <tr class="large-center" style="height:${ship.width}mm; max-height:${ship.width}mm;">
                <td class="bottom render cut-left cut-top cut-bottom" style="width:${ship.height}mm; max-width:${ship.height}mm;">
                    <div class="leftSide content">
                    ${displayTop}
                    </div>
                </td>
                <td class="front render" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                    <div class="leftSide content">
                    ${display}
                    </div>
                </td>
                <td class="top render cut-top cut-bottom" style="width:${ship.height}mm; max-width:${ship.height}mm;">
                    <div class="rightSide content">
                    ${displayTop}
                    </div>
                </td>
                <td class="top-flap render cut-top cut-right cut-bottom side-flap" style="border-top-right-radius:5mm; border-bottom-right-radius:5mm;"></td>
            </tr>
            <tr class="large-right" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                <td class="right-bottom-flap glue cut-top cut-left cut-bottom" style="width:${ship.height}mm; max-width:${ship.height}mm;"></td>
                <td class="right-side render cut-bottom" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                    <div class="content">
                    ${displaySide}
                    </div>
                </td>
                <td class="right-top-flap render cut-bottom cut-top cut-right" style="width:${ship.height}mm; max-width:${ship.height}mm; border-bottom-right-radius:${ship.height}mm;"></td>
                <!--Spacer here?-->
            </tr>
        </table>
        <br />
        <table>
            <tr class="large-left" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                <td class="bottom-spacer" style="width:${ship.height}mm; max-width:${ship.height}mm;"></td>
                <td class="left-side-flap glue cut-top cut-right cut-bottom cut-left"></td>
            </tr>
            <tr class="large-center" style="height:${ship.width}mm; max-height:${ship.width}mm;">
                <td class="bottom-flap glue cut-left cut-top cut-bottom" style="width:${ship.height}mm; max-width:${ship.height}mm;"></td>
                <td class="back render cut-top cut-right cut-bottom" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                    <div class="leftSide content">
                    ${display}
                    </div>
                </td>
            </tr>
            <tr class="large-left" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                <td class="bottom-spacer" style="width:${ship.height}mm; max-width:${ship.height}mm;"></td>
                <td class="right-side-flap glue cut-left cut-right cut-bottom"></td>
            </tr>
        </table>
        </div>`;
    }

    if(ship.hasOwnProperty("orientation") && ship.orientation == "side")
    {
        return `<div id="ship-${id}" class="box">
        <span class="btn-remove no-print" onclick="remove(${id})">Remove</span> <span class="no-print">${warning}</span>
        <table>
            <tr class="large-left" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                <td class="left-bottom-flap glue cut-left cut-top" style="width:${ship.height}mm; max-width:${ship.height}mm;"> </td>
                <td class="left-side render cut-top" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                    <div class="upsideDown content">
                    ${displaySide}
                    </div>
                </td>
                <td class="left-top-flap cut-top cut-right" style="width:${ship.height}mm; max-width:${ship.height}mm; border-top-right-radius:${ship.height}mm;"></td>
                <!--Spacer here?-->
            </tr>
            <tr class="large-center" style="height:${ship.width}mm; max-height:${ship.width}mm;">
                <td class="bottom render cut-left cut-top cut-bottom" style="width:${ship.height}mm; max-width:${ship.height}mm;">
                    <div class="leftSide content">
                    ${displayTop}
                    </div>
                </td>
                <td class="front render" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                    <div class="leftSide content">
                    ${display}
                    </div>
                </td>
                <td class="top render cut-top cut-bottom" style="width:${ship.height}mm; max-width:${ship.height}mm;">
                    <div class="rightSide content">
                    ${displayTop}
                    </div>
                </td>
                <td class="top-flap render cut-top cut-right cut-bottom side-flap" style="border-top-right-radius:5mm; border-bottom-right-radius:5mm;"></td>
            </tr>
            <tr class="large-right" style="height:${ship.height}mm; max-height:${ship.height}mm;">
                <td class="right-bottom-flap glue cut-top cut-left cut-bottom" style="width:${ship.height}mm; max-width:${ship.height}mm;"></td>
                <td class="right-side render" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                    <div class="content">
                    ${displaySide}
                    </div>
                </td>
                <td class="right-top-flap cut-bottom cut-top cut-right" style="width:${ship.height}mm; max-width:${ship.height}mm; border-bottom-right-radius:${ship.height}mm;"></td>
                <!--Spacer here?-->
            </tr>
            <tr class="large-center" style="height:${ship.width}mm; max-height:${ship.width}mm;">
                <td class="bottom glue cut-left cut-top cut-bottom" style="width:${ship.height}mm; max-width:${ship.height}mm;">
                </td>
                <td class="front render cut-right" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                    <div class="leftSide content">
                    ${display}
                    </div>
                </td>
            </tr>
            <tr class="large-center" style="height:10mm; max-height:10mm;">
                <td class="bottom" style="width:${ship.height}mm; max-width:${ship.height}mm;">
                </td>
                <td class="front glue render cut-left cut-bottom cut-right" style="width:${ship.length}mm; max-width:${ship.length}mm;">
                </td>
            </tr>
        </table>`;
    }

	return `<div id="ship-${id}" class="box">
	<span class="btn-remove no-print" onclick="remove(${id})">Remove</span> <span class="no-print">${warning}</span>
	<table>
    <tr class="top-flap">
        <td class="model-height" style="width:${ship.height}mm; max-width:${ship.height}mm;"></td>
        <td class="model-width render-flap cut-top cut-left cut-right" style="width:${ship.width}mm; max-width:${ship.width}mm;"></td>
        <td colspan="3"></td>
    </tr>
    <tr class="top model-height-height" style="height:${ship.height+2}mm; max-height:${ship.height+2}mm;">
        <td class="model-height flap-left cut-left cut-right cut-top" style="width:${ship.height}mm; border-top-left-radius:${ship.height}mm; max-width:${ship.height}mm;"></td>
        <td class="model-width render cut-left cut-right" style="width:${ship.width}mm; max-width:${ship.width}mm;">
            <div class="upsideDown content">
            ${displayTop}
            </div>
        </td>
        <td class="model-height flap-right cut-left cut-right cut-top" style="width:${ship.height}mm; border-top-right-radius:${ship.height}mm; max-width:${ship.height}mm;"></td>
        <td  colspan="2"></td>
    </tr>
    <tr class="main model-length"  style="height:${ship.length}mm; max-height:${ship.length}mm;">
        <td class="model-height render cut-left" style="width:${ship.height}mm; max-width:${ship.height}mm;">
            <div class="leftSide sideDisplay" style="left:${sideLeftOffset}mm;">
            	${displaySide}
            </div>
        </td>
        <td class="model-width render" style="width:${ship.width}mm; max-width:${ship.width}mm;">
            ${display}
        </td>
        <td class="model-height render" style="width:${ship.height}mm; max-width:${ship.height}mm;">
            <div class="rightSide sideDisplay" style="left:${sideRightOffset}mm;">
            ${displaySide}
            </div>
        </td>
        <td class="model-width render cut-top" style="width:${ship.width}mm; max-width:${ship.width}mm;">
            ${display}
        </td>
        <td class="side-flap render cut-top cut-bottom cut-right glue"></td>
        <td></td>
    </tr>
    <tr class="model-height-height" style="height:${ship.height+2}mm;">
        <td class="model-height render cut-left cut-bottom cut-right glue" style="width:${ship.height}mm; max-width:${ship.height}mm;">
        </td>
        <td class="model-width render cut-left cut-bottom cut-right" style="width:${ship.width}mm; max-width:${ship.width}mm;">
        <div class="content">
        ${displayTop}
        </div>
        </td>
        <td class="model-height render cut-left cut-bottom cut-right glue" style="width:${ship.height}mm; max-width:${ship.height}mm;">
        </td>
        <td class="model-width render cut-left cut-bottom cut-right glue" style="width:${ship.width}mm; max-width:${ship.width}mm;">
        </td>
        <td></td>
    </tr>
</table>
</div>`;
}

function addGearbox(){
    document.getElementById("ships").innerHTML += getGearTable(shipSelection.value, factionSelection.value, shipId);
    shipId++;
}

function getGearTable(shipToParse, faction, id){
    var ship = JSON.parse(shipToParse);

    var length = 52;
    var width = 52;
    var height = 17;
    var iconSize = 42;

    if(ship.size == "medium"){
        length = 66;
        width = 63;
        iconSize = 56;
    }

    if(ship.size == "large"){
        length = 85;
        width = 83;
        iconSize = 75;
    }

    var displayFactionSize = "";
    if(ship.hasOwnProperty("displayFactionSize"))
    {
        displayFactionSize = ` style="font-size:5mm"`;
    }
    var displayIconSize = "";
    if(ship.hasOwnProperty("displayIconSize"))
    {
        displayIconSize = ` style="font-size:${iconSize}mm"`;
    }
    var display = `<div class="icon shipFaction"${displayFactionSize}>${faction}</div>
                <div class="fancy">${ship.name}</div>
                <div class="ship"${displayIconSize}>${ship.icon}</div>`
    
    var displayTopFactionSize = "";
    if(ship.hasOwnProperty("displayTopFactionSize"))
    {
        displayTopFactionSize = ` style="font-size:4mm"`;
    }
    var displayTopIconSize = "";
    if(ship.hasOwnProperty("displayTopIconSize"))
    {
        displayTopIconSize = ` style="font-size:11mm"`;
    }
    var displayTop = `<div class="icon shipFaction"${displayTopFactionSize}>${faction}</div>
        <div class="fancy">${ship.name}</div>
        <div class="ship"${displayTopIconSize}>${ship.icon}</div>`;

    var displaySideFactionSize = "";
    if(ship.hasOwnProperty("displaySideFactionSize"))
    {
        displaySideFactionSize = ` style="font-size:4mm"`;
    }
    var displaySideIconSize = "";
    if(ship.hasOwnProperty("displaySideIconSize"))
    {
        displaySideIconSize = ` style="font-size:11mm"`;
    }
    var displaySide = `<div class="icon shipFaction"${displaySideFactionSize}>${faction}</div>
        <div class="fancy" style="width=${height}mm;">${ship.name}</div>
        <div class="ship"${displaySideIconSize}>${ship.icon}</div>`;

    var sideLeftOffset = 0;
    if(ship.hasOwnProperty("gearLeftSideOffset") || ship.displaySide){
        sideLeftOffset = ship.gearLeftSideOffset;
    }
    var sideRightOffset = sideLeftOffset;
    if(ship.hasOwnProperty("gearRightSideOffset") || ship.displaySide){
        sideRightOffset = ship.gearRightSideOffset;
    }

    return `<div id="ship-${id}" class="box">
    <span class="btn-remove no-print" onclick="remove(${id})">Remove</span>
    <table>
    <tr class="top-flap">
        <td class="model-height" style="width:${height}mm; max-width:${height}mm;"></td>
        <td class="model-width render-flap cut-top cut-left cut-right" style="width:${width}mm; max-width:${width}mm;"></td>
        <td colspan="3"></td>
    </tr>
    <tr class="top model-height-height" style="height:${height+2}mm; max-height:${height+2}mm;">
        <td class="model-height flap-left cut-left cut-right cut-top" style="width:${height}mm; border-top-left-radius:${height}mm; max-width:${height}mm;"></td>
        <td class="model-width render cut-left cut-right" style="width:${width}mm; max-width:${width}mm;">
            <div class="upsideDown content">
            ${displayTop}
            </div>
        </td>
        <td class="model-height flap-right cut-left cut-right cut-top" style="width:${height}mm; border-top-right-radius:${height}mm; max-width:${height}mm;"></td>
        <td  colspan="2"></td>
    </tr>
    <tr class="main model-length"  style="height:${length}mm; max-height:${length}mm;">
        <td class="model-height render cut-left" style="width:${height}mm; max-width:${height}mm;">
            <div class="leftSide sideDisplay" style="left:${sideLeftOffset}mm;">
                ${displaySide}
            </div>
        </td>
        <td class="model-width render" style="width:${width}mm; max-width:${width}mm;">
            ${display}
        </td>
        <td class="model-height render" style="width:${height}mm; max-width:${height}mm;">
            <div class="rightSide sideDisplay" style="left:${sideRightOffset}mm;">
            ${displaySide}
            </div>
        </td>
        <td class="model-width render cut-top" style="width:${width}mm; max-width:${width}mm;">
            ${display}
        </td>
        <td class="side-flap render cut-top cut-bottom cut-right glue"></td>
        <td></td>
    </tr>
    <tr class="model-height-height" style="height:${height+2}mm;">
        <td class="model-height render cut-left cut-bottom cut-right glue" style="width:${height}mm; max-width:${height}mm;">
        </td>
        <td class="model-width render cut-left cut-bottom cut-right" style="width:${width}mm; max-width:${width}mm;">
        <div class="content">
        ${displayTop}
        </div>
        </td>
        <td class="model-height render cut-left cut-bottom cut-right glue" style="width:${height}mm; max-width:${height}mm;">
        </td>
        <td class="model-width render cut-left cut-bottom cut-right glue" style="width:${width}mm; max-width:${width}mm;">
        </td>
        <td></td>
    </tr>
</table>
</div>`;
}

function initialize(){
	var upgradeLoadPromise = loadURL("data.json");
	upgradeLoadPromise.then(dataLoaded);
	upgradeLoadPromise.catch(function(){alert("data load failed");});
}