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
    populateDropdowns();
    populateFactionDropdown();
}

function populateDropdowns(){
    factionSelection = document.getElementById("faction");
    Object.keys(factions).forEach(function(faction){
        var option = new Option(faction, factions[faction]);
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
    	var name = ship.name;
    	if(!ship.factions.includes(faction)){
    		return;
    	}
    	if(ship.hasOwnProperty("modifier")){
    		name += " " + ship.modifier;
    	}
        var option = new Option(name, JSON.stringify(ship));
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
    
    var displayTop = "";
    if(!ship.hasOwnProperty("displayTop") || ship.displayTop){
    	displayTop = `<div class="icon shipFaction">${faction}</div>
                <div class="fancy">${ship.name}</div>
                <div class="ship">${ship.icon}</div>`;
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

	return `<div id="ship-${id}" class="box">
	<span class="removeButton no-print" onclick="remove(${id})">Remove</span>
	<table>
    <tr class="top-flap">
        <td class="model-height" style="width:${ship.height}mm; max-width:${ship.height}mm;"></td>
        <td class="model-width render-flap cut-top cut-left cut-right" style="width:${ship.width}mm; max-width:${ship.width}mm;"></td>
        <td colspan="3"></td>
    </tr>
    <tr class="top model-height-height" style="height:${ship.height}mm; max-height:${ship.height}mm;">
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
            <div class="rightSide sideDisplay" style="left:${sideLeftOffset}mm;">
            ${displaySide}
            </div>
        </td>
        <td class="model-width render cut-top" style="width:${ship.width}mm; max-width:${ship.width}mm;">
            ${display}
        </td>
        <td class="side-flap render cut-top cut-bottom cut-right"></td>
        <td></td>
    </tr>
    <tr class="model-height-height" style="height:${ship.height}mm;">
        <td class="model-height render cut-left cut-bottom cut-right" style="width:${ship.height}mm; max-width:${ship.height}mm;">
        </td>
        <td class="model-width render cut-left cut-bottom cut-right" style="width:${ship.width}mm; max-width:${ship.width}mm;">
        <div class="content">
        ${displayTop}
        </div>
        </td>
        <td class="model-height render cut-left cut-bottom cut-right" style="width:${ship.height}mm; max-width:${ship.height}mm;">
        </td>
        <td class="model-width render cut-left cut-bottom cut-right" style="width:${ship.width}mm; max-width:${ship.width}mm;">
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