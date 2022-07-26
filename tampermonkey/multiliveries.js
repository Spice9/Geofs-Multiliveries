// ==UserScript==
// @name         GeoFS Multiliveries
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds more liveries to GeoFS
// @author       Spice9
// @match http://*/geofs.php*
// @match https://*/geofs.php*
// @run-at document-end
// @grant        none
// ==/UserScript==

let itv = setInterval(
    function(){
        try{
            if(window.ui && window.flight){
                main();
                clearInterval(itv);}

        }catch(err){}
    }
    ,500);

async function main(){
    console.log("Loading...");

    //for 737max8 TUI, a320neo Iberia,a319 Finnair 787-10 etihad. These are the liveries that needs to be used respectively to make this addon work
    let livObj;
    await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/new-code/Liveries/liveries.json")
        .then(res => res.json())
        .then(data => livObj = data)



    //should work with URLs and livery IDs now
    livObj.aircraft.forEach(function(e){
        var dropdown = document.createElement('li');
        dropdown.innerHTML = e.name;
        document.getElementsByClassName("geofs-aircraft-list")[0].appendChild(dropdown);
        if (e.livery.includes("https://")) {
            dropdown.setAttribute("onclick", 'geofs.api.Model.prototype.changeTexture(' + e.livery + ', 0, geofs.aircraft.instance.definition.parts[0]["3dmodel"])');
        }
        else {
            dropdown.setAttribute("onclick", 'geofs.aircraft.instance.loadLivery(' + e.livery + ')');
        }
    })

    function updateMultiplayer(){
        Object.values(multiplayer.visibleUsers).forEach(function(e){
            a = e;
            livObj.aircraft.forEach(function(e){
                if (a.currentLivery == parseInt(e.livery)) {   geofs.api.Model.prototype.changeTexture(e.mptx, 0, multiplayer.visibleUsers[a.id].model);
                                                           }
            })
        })
    }

    mpRefresh = setInterval(function(){

        updateMultiplayer();
    }, 5000)

    //add helper tags to compatible aircraft
    document.querySelectorAll('[data-aircraft]').forEach(function(e){
        var elemName = e.outerText;
        if (elemName.includes("Airbus a320neo (Iberia) (by Spice_9)") || elemName.includes("Boeing 737 Max 8 (TUI) (by Spice_9)") || elemName.includes("Boeing 787-10 Dreamliner (Etihad) (by Spice_9)") || elemName.includes("Airbus A319 (Finnair)  (by GT-VRA)")) {
            e.innerHTML = e.innerHTML + " [Multiliveries Frame]"
        }
    });

    console.log("Loaded!");


    //Add contributors here:
    let contributors;
    await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/new-code/Liveries/contribs.json")
        .then(res => res.json())
        .then(data => contributors = data)
    let message = ""
    setTimeout(function(){
        console.log("Code by Spice9 and AriakimTaiyo, livery contributions by:");
        contributors.forEach(function(e){
            if (message === "") {
                message = message + e
            }
            else {
                if (contributors[contributors.length - 1] === e) {
                    message = message + ", and " + e;
                }
                else {
                    message = message + ", " + e
                }
            }
        })


        console.log(message)
    }, 1000)
}
