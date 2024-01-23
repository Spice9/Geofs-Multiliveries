//client side
let debug = false; //turn this to true if you are experiencing issues. This will help us fix the issue.

let opened = false;
let livObj;
let updateMultiplayer = function() {};
let mlui = 0;
let buttonDiv = document.createElement("button");
let message = ""
let contributors;
let overlayEnabled = false;
if (!geofs.api.hasOwnProperty("changeModelTexture")) {
	geofs.api.changeModelTexture = function(a, b, c) {
	    if (a)
	        if (a.customShader)
	            a.customShader.setUniform("u_diffuse", new Cesium.TextureUniform({
	                url: b,
	                minificationFilter: Cesium.TextureMinificationFilter.LINEAR_MIPMAP_LINEAR
	            }));
	        else {
	
	            //var d=a._nodesByName[""]._runtimeNode.runtimePrimitives[0].primitive.material.metallicRoughness.baseColorTexture.texture;
	            var d = a._rendererResources.textures[c || 0];
	
	            Cesium.Resource.fetchImage({
	                url: b
	            }).then(function(e) {
	                d.copyFrom({
	                    source: e
	                });
	                d.generateMipmap()
	            })
	        }
	};
}
function changeLivery(livery) {
  if (debug) console.log("Livery Change Request as " + "'" + livery + "'");
  if (livery === "inv") {
    console.log("Invalid client, please use the original code.");
    return;
  }
  if (livery.toString().includes("?custom")) {
    overlayEnabled = true;
    geofs.fx.expOverlay.update();
  } else {
    overlayEnabled = false;
    geofs.fx.expOverlay.update();
  }
  if (livery.toString().includes("https://")) {
    if (geofs.aircraft.instance.id == 4140) {
      if (livery.toString().includes("|")) {
        var sL = livery.split("|");
        var composite = sL[1];
        var normal = sL[2];
        geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0] ["3dmodel"]._model, composite, 2);
        geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0] ["3dmodel"]._model, normal, 0);
        livery = sL[0];
      }
      geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0] ["3dmodel"]._model, livery, 1);
      return;
    }
    geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0] ["3dmodel"]._model, livery, 0);
    if (debug) console.log("livery changed to " + livery);
  } else {
    geofs.aircraft.instance.loadLivery(livery);
    if (debug) console.log("livery changed to " + livery);
  }
}

window.addEventListener('message', function(e) {
  if (debug) console.log("Event Recieved: " + e);
  if (e.origin !== "https://7bf7b797-e8d4-42e2-8d74-2f7050eafd3d-00-2qccycf3xbv7i.picard.replit.dev") return;
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
  if (opened) { 
    ui.notification.show("Panel is open in another window"); 
    if (debug) console.log("Duplicate open attempt"); 
    return;
  }
   mlui = window.open("https://7bf7b797-e8d4-42e2-8d74-2f7050eafd3d-00-2qccycf3xbv7i.picard.replit.dev", "_blank", "height=1000,width=1500");
  opened = true;
  if(!mlui || mlui.closed || typeof mlui.closed=='undefined') 
{ 
    ui.notification.show("Please allow popups on GeoFS");
  if (debug) console.log("No Popup Permission");
    opened = false;
}
});
document.body.appendChild(buttonDiv);

let element = document.getElementById("mlBttn");
if (document.getElementsByClassName("fmc-btn").length == 0) {
document.getElementsByClassName("geofs-ui-bottom")[0].appendChild(buttonDiv);
document.getElementsByClassName("geofs-ui-bottom")[0].insertBefore(element, buttonDiv);
} else {
  document.getElementsByClassName("fmc-prog-info")[0].appendChild(buttonDiv);
}

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
  document.querySelectorAll('[data-aircraft]').forEach(function(e){
   var elemName = e.outerText;
    if (elemName.includes("Boeing 737-800 [Spice9] (by Spice_9)") || elemName.includes("Airbus a320neo (Iberia) (by Spice_9)") || elemName.includes("Boeing 737 Max 8 (TUI) (by Spice_9)") || elemName.includes("Boeing 787-10 Dreamliner (Etihad) (by Spice_9)") || elemName.includes("Airbus A319 (Finnair)  (by GT-VRA)")) {
       if (!e.innerHTML.includes("Multiliveries")) e.innerHTML = e.innerHTML + " [Multiliveries Frame]";
    }
});
}, 5000)

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
geofs["overlay.glsl"] = "" + `
uniform sampler2D colorTexture;
uniform sampler2D watermark;
uniform bool isEnabled;
varying vec2 v_textureCoordinates;
void main() {
vec4 color = texture2D(watermark, v_textureCoordinates);
  if (color.r > 0.0 && isEnabled) {
    gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), color, 0.5);
  } else {
  gl_FragColor = texture2D(colorTexture, v_textureCoordinates);
  }
}
`
geofs.fx.expOverlay = {
  create: function() {
    geofs.fx.expOverlay.shader =  new Cesium.PostProcessStage({
      fragmentShader : geofs["overlay.glsl"], 
      uniforms: {
        watermark: "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/overlay.png",
        isEnabled: false
      }
    })
    geofs.api.viewer.scene.postProcessStages.add(geofs.fx.expOverlay.shader);
  },
  update: function() {
    geofs.fx.expOverlay.shader.uniforms.isEnabled = overlayEnabled;
    if (overlayEnabled) mlui.postMessage("valid", "*");
  }
};
geofs.fx.expOverlay.create()

geofs.aircraft.Aircraft.prototype.change = function(a, b, c, d) {
    overlayEnabled = false;
    geofs.fx.expOverlay.update();
    var e = this;
    a = a || this.aircraftRecord.id;
    c = this.load(a, this.getCurrentCoordinates(), c, d);
    c.then(function() {
        e.loadLivery(b)
    });
    geofs.api.analytics.event("aircraft", geofs.aircraftList[a].name);
    return c
};
