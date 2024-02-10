async function multiliveries() {
  let e = "https://7bf7b797-e8d4-42e2-8d74-2f7050eafd3d-00-2qccycf3xbv7i.picard.replit.dev",
      i = !1,
      t, n = function() {},
      r = 0,
      o = document.createElement("button"),
      s = "",
      l, c = !1;
  geofs.api.hasOwnProperty("changeModelTexture") || (geofs.api.changeModelTexture = function(e, i, t) {
      if (e) {
          if (e.customShader) e.customShader.setUniform("u_diffuse", new Cesium.TextureUniform({
              url: i,
              minificationFilter: Cesium.TextureMinificationFilter.LINEAR_MIPMAP_LINEAR
          }));
          else {
              var n = e._rendererResources.textures[t || 0];
              Cesium.Resource.fetchImage({
                  url: i
              }).then(function(e) {
                  n.copyFrom({
                      source: e
                  }), n.generateMipmap()
              })
          }
      }
  }), window.addEventListener("message", function(i) {
      if (i.origin === e) {
          if ("test" === i.data) {
              r.postMessage(btoa(multiliveries.toString()), "*");
              return
          }! function e(i) {
              if ("inv" === i) {
                  console.log("Invalid client, please use the original code."), ui.notification.show("Invalid client, please use the original code.");
                  return
              }
              if (i.toString().includes("?custom") ? (c = !0, geofs.fx.expOverlay.update()) : (c = !1, geofs.fx.expOverlay.update()), i.toString().includes("https://")) {
                  if (4140 == geofs.aircraft.instance.id) {
                      if (i.toString().includes("|")) {
                          var t = i.split("|"),
                              n = t[1],
                              r = t[2];
                          geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, n, 2), geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, r, 0), i = t[0]
                      }
                      geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, i, 1);
                      return
                  }
                  geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, i, 0)
              } else geofs.aircraft.instance.loadLivery(i)
          }(i.data)
      }
  }, !1), console.log("Loading..."), await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/liveries.json").then(e => e.json()).then(e => t = e), o.innerHTML = 'Multiliveries<i class="material-icons">flight_land</i>', o.id = "mlBttn", o.addEventListener("click", function() {
      if ("object" == typeof r && r.closed && (i = !1), i) {
          ui.notification.show("Panel is open in another window");
          return
      }
      r = window.open(e, "_blank", "height=1000,width=1500"), i = !0, (!r || r.closed || void 0 === r.closed) && (ui.notification.show("Please allow popups on GeoFS"), i = !1)
  }), document.body.appendChild(o);
  let d = document.getElementById("mlBttn");
  0 == document.getElementsByClassName("fmc-btn").length ? (document.getElementsByClassName("geofs-ui-bottom")[0].appendChild(o), document.getElementsByClassName("geofs-ui-bottom")[0].insertBefore(d, o)) : document.getElementsByClassName("fmc-prog-info")[0].appendChild(o), n = 2.9 == geofs.version ? function() {
      Object.values(multiplayer.visibleUsers).forEach(function(e) {
          a = e, t.aircraft.forEach(function(e) {
              a.currentLivery == parseInt(e.livery) && geofs.api.Model.prototype.changeTexture(e.mptx, 0, multiplayer.visibleUsers[a.id].model)
          })
      })
  } : function() {
      Object.values(multiplayer.visibleUsers).forEach(function(e) {
          a = e, t.aircraft.forEach(function(e) {
              a.currentLivery == parseInt(e.livery) && geofs.api.changeModelTexture(multiplayer.visibleUsers[a.id].model, e.mptx, 0)
          })
      })
  }, mpRefresh = setInterval(function() {
      n(), document.querySelectorAll("[data-aircraft]").forEach(function(e) {
          var i = e.outerText;
          (i.includes("Boeing 737-800 [Spice9] (by Spice_9)") || i.includes("Airbus a320neo (Iberia) (by Spice_9)") || i.includes("Boeing 737 Max 8 (TUI) (by Spice_9)") || i.includes("Boeing 787-10 Dreamliner (Etihad) (by Spice_9)") || i.includes("Airbus A319 (Finnair)  (by GT-VRA)")) && !e.innerHTML.includes("Multiliveries") && (e.innerHTML = e.innerHTML + " [Multiliveries Frame]")
      })
  }, 5e3), console.log("Loaded!"), await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/contributors.txt").then(e => e.json()).then(e => l = e), setTimeout(function() {
      console.log("Code by Spice9 and AriakimTaiyo, livery contributions by:"), l.forEach(function(e) {
          "" === s ? s += e : s = l[l.length - 1] === e ? s + ", and " + e : s + ", " + e
      }), console.log(s)
  }, 1e3), geofs["overlay.glsl"] = `
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
`, geofs.fx.expOverlay = {
      create: function() {
          geofs.fx.expOverlay.shader = new Cesium.PostProcessStage({
              fragmentShader: geofs["overlay.glsl"],
              uniforms: {
                  watermark: "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/overlay.png",
                  isEnabled: !1
              }
          }), geofs.api.viewer.scene.postProcessStages.add(geofs.fx.expOverlay.shader)
      },
      update: function() {
          geofs.fx.expOverlay.shader.uniforms.isEnabled = c
      }
  }, geofs.fx.expOverlay.create(), geofs.aircraft.Aircraft.prototype.change = function(e, i, t, n) {
      c = !1, geofs.fx.expOverlay.update();
      var r = this;
      return e = e || this.aircraftRecord.id, (t = this.load(e, this.getCurrentCoordinates(), t, n)).then(function() {
          r.loadLivery(i)
      }), geofs.api.analytics.event("aircraft", geofs.aircraftList[e].name), t
  }
}
multiliveries();
