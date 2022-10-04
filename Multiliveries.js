console.log("Loading...");
let livObj;
 await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/liveries.json")
 .then(res => res.json())
 .then(data => livObj = data) 

let liveryPanelML = document.createElement("div");
let updateMultiplayer = function() {};
function resetPanel() {
  liveryPanelML.innerHTML = `
  <li class = "geofs-list-collapsible-item geofs-notstudent-role">
    Multiliveries
    <ul class = "geofs-collapsible geofs-list geofs-toggle-panel geofs-preferences geofs-stopMousePropagation geofs-stopKeyupPropagation geofs-stopKeyboardPropagation" data-onshow="{geofs.initializePreferencesPanel()}" data-onhide="{geofs.savePreferencesPanel()}" data-noblur="true"">
      <div id="innerLiveryPanel">
        <p id="title">Multiliveries Menu</p>
        <input id="searchquery", class = "mdl-textfield__input geofs-stopKeyboardPropagation"></input>
        <button onclick="sBa()", id="search">Search</button>
        <div id="selectionPanel"></div>
      </div>
    </ul>
  </li>
  `
}
resetPanel()
document.getElementsByClassName("geofs-aircraft-list")[0].prepend(liveryPanelML);

let searchResults = [];

const ld = (str1 = '', str2 = '') => {
   const track = Array(str2.length + 1).fill(null).map(() =>
   Array(str1.length + 1).fill(null));
   for (let i = 0; i <= str1.length; i += 1) {
      track[0][i] = i;
   }
   for (let j = 0; j <= str2.length; j += 1) {
      track[j][0] = j;
   }
   for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
         const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
         track[j][i] = Math.min(
            track[j][i - 1] + 1,
            track[j - 1][i] + 1,
            track[j - 1][i - 1] + indicator,
         );
      }
   }
   return track[str2.length][str1.length];
};

function search(query) {
  livObj.aircraft.forEach(function(e) {
    var compare = e.name.split('(')[1].replace(')', '')
    var result = ld(query, compare);
    e.index = result;
    searchResults.push(e);
    searchResults.sort(function(a, b){return a.index - b.index});
  })
}


function displayLiveries(isSearch) {
  if (geofs.version == 2.9) {
    updateMultiplayer = function(){
  Object.values(multiplayer.visibleUsers).forEach(function(e){
    a = e;
      livObj.aircraft.forEach(function(e){
        if (a.currentLivery == parseInt(e.livery)) {   geofs.api.Model.prototype.changeTexture(e.mptx, 0, multiplayer.visibleUsers[a.id].model);
        }
      })
    })
  }
   if (!isSearch) {
    livObj.aircraft.forEach(function(e){
      var target = document.getElementById("selectionPanel");
      var buttonDiv = document.createElement('li');
      buttonDiv.innerHTML = e.name;
      target.appendChild(buttonDiv);
      if (e.livery.includes("https://")) {
        buttonDiv.setAttribute("onclick", 'geofs.api.Model.prototype.changeTexture(' + `"` + e.livery + `"` + ', 0, geofs.aircraft.instance.definition.parts[0]["3dmodel"])');
        } else {
            buttonDiv.setAttribute("onclick", 'geofs.aircraft.instance.loadLivery(' + e.livery + ')');
        }
    }) 
  } else {
    searchResults.forEach(function(e){
      var target = document.getElementById("selectionPanel");
      var buttonDiv = document.createElement('li');
      buttonDiv.innerHTML = e.name;
      target.appendChild(buttonDiv);
      if (e.livery.includes("https://")) {
        buttonDiv.setAttribute("onclick", 'geofs.api.Model.prototype.changeTexture(' + `"` + e.livery + `"` + ', 0, geofs.aircraft.instance.definition.parts[0]["3dmodel"])');
        } else {
            buttonDiv.setAttribute("onclick", 'geofs.aircraft.instance.loadLivery(' + e.livery + ')');
        }
    })
  }   
  } else {
     updateMultiplayer = function(){
      Object.values(multiplayer.visibleUsers).forEach(function(e){
        a = e;
        livObj.aircraft.forEach(function(e){
          if (a.currentLivery == parseInt(e.livery)) {   geofs.api.changeModelTexture(multiplayer.visibleUsers[a.id].model, e.mptx, 0);
          }
        })
      })
    }
  if (!isSearch) {
    livObj.aircraft.forEach(function(e){
      var target = document.getElementById("selectionPanel");
      var buttonDiv = document.createElement('li');
      buttonDiv.innerHTML = e.name;
      target.appendChild(buttonDiv);
      if (e.livery.includes("https://")) {
        buttonDiv.setAttribute("onclick", 'geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0] ["3dmodel"]._model, ' + `"` + e.livery + `"` + ', 0)');
        } else {
            buttonDiv.setAttribute("onclick", 'geofs.aircraft.instance.loadLivery(' + e.livery + ')');
        }
    }) 
  } else {
    searchResults.forEach(function(e){
      var target = document.getElementById("selectionPanel");
      var buttonDiv = document.createElement('li');
      buttonDiv.innerHTML = e.name;
      target.appendChild(buttonDiv);
      if (e.livery.includes("https://")) {
        buttonDiv.setAttribute("onclick", 'geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0] ["3dmodel"]._model, ' + `"` + e.livery + `"` + ', 0)');
        } else {
            buttonDiv.setAttribute("onclick", 'geofs.aircraft.instance.loadLivery(' + e.livery + ')');
        }
    })
  }
  }
}

function sBa() {
  searchResults = [];
  var a = document.getElementById("selectionPanel");
  a.innerHTML = "";
  var q = document.getElementById("searchquery").value;
  if (q === '') {
    displayLiveries(false);
    return;
  }
  search(q)
  displayLiveries(true);
}

displayLiveries(false);
mpRefresh = setInterval(function(){  
updateMultiplayer();
}, 5000)
document.querySelectorAll('[data-aircraft]').forEach(function(e){
   var elemName = e.outerText;
    if (elemName.includes("Boeing 737-800 [Spice9] (by Spice_9)") || elemName.includes("Airbus a320neo (Iberia) (by Spice_9)") || elemName.includes("Boeing 737 Max 8 (TUI) (by Spice_9)") || elemName.includes("Boeing 787-10 Dreamliner (Etihad) (by Spice_9)") || elemName.includes("Airbus A319 (Finnair)  (by GT-VRA)")) {
       e.innerHTML = e.innerHTML + " [Multiliveries Frame]" 
    }
});
console.log("Loaded!");
let contributors;
await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/contributors.txt")
.then(res => res.json())
 .then(data => contributors = data)
let message = ""
setTimeout(function(){
  console.log("Code by Spice9 and AriakimTaiyo, livery contributions by:");
contributors.forEach(function(e){
  if (message === "") {
    message = message + e
  } else {
    if (contributors[contributors.length - 1] === e) {
      message = message + ", and " + e;
    } else {
      message = message + ", " + e
    }
  }
})
console.log(message)
}, 1000)
