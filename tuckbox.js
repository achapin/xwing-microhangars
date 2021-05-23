var ships;
var factions;
var shipSelection;
var factionSelection;

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
    alert("data loaded");
	ships = json.ships;
    factions = json.factions;
    populateDropdowns();
}

function populateDropdowns(){
    shipSelection = document.getElementById("ship").value = language;
    ships.forEach(function(ship){
        var option = new Option(ship.name, ship);
        shipSelection.add(option);
        alert("add ship" + ship.name);
    });
    factionSelection = document.getElementById("faction").value = language;
    factions.forEach(function(faction){
        var option = new Option(faction);
        factionSelection.add(option);
        alert("add faction" + faction);
    });
    document.getElementById("addShip").addEventListener("click", addShip);
}

function addShip(){

}

function initialize(){
	var upgradeLoadPromise = loadURL("data.json");
	upgradeLoadPromise.then(dataLoaded);
	upgradeLoadPromise.catch(function(){alert("data load failed");});
}