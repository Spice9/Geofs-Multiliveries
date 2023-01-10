// ==UserScript==
// @name         GeoFS Multiliveries
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds more liveries to GeoFS
// @author       Spice9 & AriakimTaiyo
// @match http://*/geofs.php*
// @match https://*/geofs.php*
// @run-at document-end
// @grant        none
// ==/UserScript==

let itv=setInterval(function(){try{window.ui&&window.flight&&geofs.fx.atmosphere.atmospherePostProcessStage._ready&&(main(),clearInterval(itv))}catch(e){}},500);async function main(){let e=!1,i,t=function(){},n=0,r=document.createElement("button"),o=document.getElementById("mlBttn"),s="",l,c=!1;geofs["overlay.glsl"]=`
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
`,geofs.fx.expOverlay={create:function(){geofs.fx.expOverlay.shader=new Cesium.PostProcessStage({fragmentShader:geofs["overlay.glsl"],uniforms:{watermark:"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/overlay.png",isEnabled:!1}}),geofs.api.viewer.scene.postProcessStages.add(geofs.fx.expOverlay.shader)},update:function(){geofs.fx.expOverlay.shader.uniforms.isEnabled=c,c&&n.postMessage("valid","*")}},geofs.fx.expOverlay.create(),window.addEventListener("message",function(e){"https://mlui2.ariakimtaiyo.repl.co"===e.origin&&function e(i){if("inv"===i){console.log("Invalid client, please use the original code.");return}i.toString().includes("?custom")?(c=!0,geofs.fx.expOverlay.update()):(c=!1,geofs.fx.expOverlay.update()),i.toString().includes("https://")?geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model,i,0):geofs.aircraft.instance.loadLivery(i)}(e.data)},!1),console.log("Loading..."),await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/liveries.json").then(e=>e.json()).then(e=>i=e),r.innerHTML='Multiliveries<i class="material-icons">flight_land</i>',r.id="mlBttn",r.addEventListener("click",function(){if("object"==typeof n&&n.closed&&(e=!1),e){ui.notification.show("Panel is open in another window");return}n=window.open("https://mlUI2.ariakimtaiyo.repl.co","_blank","height=1000,width=1500"),e=!0,(!n||n.closed||void 0===n.closed)&&(ui.notification.show("Please allow popups on GeoFS"),e=!1)}),document.body.appendChild(r),0==document.getElementsByClassName("fmc-btn").length?(document.getElementsByClassName("geofs-ui-bottom")[0].appendChild(r),document.getElementsByClassName("geofs-ui-bottom")[0].insertBefore(o,r)):document.getElementsByClassName("fmc-prog-info")[0].appendChild(r),t=2.9==geofs.version?function(){Object.values(multiplayer.visibleUsers).forEach(function(e){a=e,i.aircraft.forEach(function(e){a.currentLivery==parseInt(e.livery)&&geofs.api.Model.prototype.changeTexture(e.mptx,0,multiplayer.visibleUsers[a.id].model)})})}:function(){Object.values(multiplayer.visibleUsers).forEach(function(e){a=e,i.aircraft.forEach(function(e){a.currentLivery==parseInt(e.livery)&&geofs.api.changeModelTexture(multiplayer.visibleUsers[a.id].model,e.mptx,0)})})},mpRefresh=setInterval(function(){t()},5e3),console.log("Loaded!"),await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/contributors.txt").then(e=>e.json()).then(e=>l=e),setTimeout(function(){console.log("Code by Spice9 and AriakimTaiyo, livery contributions by:"),l.forEach(function(e){""===s?s+=e:s=l[l.length-1]===e?s+", and "+e:s+", "+e}),console.log(s)},1e3),geofs.aircraft.Aircraft.prototype.change=function(e,i,t,n){c=!1,geofs.fx.expOverlay.update();var r=this;return e=e||this.aircraftRecord.id,(t=this.load(e,this.getCurrentCoordinates(),t,n)).then(function(){r.loadLivery(i)}),geofs.api.analytics.event("aircraft",geofs.aircraftList[e].name),t},setTimeout(function(){document.querySelectorAll("[data-aircraft]").forEach(function(e){var i=e.outerText;(i.includes("Boeing 737-800 [Spice9] (by Spice_9)")||i.includes("Airbus a320neo (Iberia) (by Spice_9)")||i.includes("Boeing 737 Max 8 (TUI) (by Spice_9)")||i.includes("Boeing 787-10 Dreamliner (Etihad) (by Spice_9)")||i.includes("Airbus A319 (Finnair)  (by GT-VRA)"))&&(e.innerHTML=e.innerHTML+" [Multiliveries Frame]")})},1e3)}
