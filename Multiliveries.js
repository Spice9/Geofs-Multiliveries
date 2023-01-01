//client side
let opened = false;
let livObj;
let updateMultiplayer = function() {};
let mlui = 0;
let buttonDiv = document.createElement("button");
let element = document.getElementById("mlBttn");
let message = ""
let contributors;

function changeLivery(livery) {
  if (livery.toString().includes("https://")) {
    geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0] ["3dmodel"]._model, livery, 0);
  } else {
    geofs.aircraft.instance.loadLivery(livery);
  }
}

window.addEventListener('message', function(e) {
  //console.log(e)
  if (e.origin !== "https://mlui2.ariakimtaiyo.repl.co") return;
	changeLivery(e.data);
} , false);

console.log("Loading...");


 await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/liveries.json")
 .then(res => res.json())
 .then(data => livObj = data) 


buttonDiv.innerHTML = 'Multiliveries<i class="material-icons">flight_land</i>'
buttonDiv.id = "mlBttn";
buttonDiv.addEventListener("click", function() {
  if (typeof mlui === "object") {if (mlui.closed) {opened = false;}}
  if (opened) { ui.notification.show("Panel Already Open"); return;}
   mlui = window.open("https://mlUI2.ariakimtaiyo.repl.co", "_blank", "height=1000,width=1500");
  opened = true;
});
document.body.appendChild(buttonDiv);
document.getElementsByClassName("geofs-ui-bottom")[0].appendChild(buttonDiv);

document.getElementsByClassName("geofs-ui-bottom")[0].insertBefore(element, buttonDiv);


function setupMP() {
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
  }
}

setupMP()
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

await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/contributors.txt")
.then(res => res.json())
 .then(data => contributors = data)

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
