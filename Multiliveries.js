let debug = !1;
async function multiliveries() {
  console.log("loading...");
  let e, i, t = {
      window: void 0,
      opened: !1
    },
    o = !1,
    n = 0,
    s = !1;
  await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/liveries.json").then((e => e.json())).then((i => e = i));
  let r = document.createElement("div"),
    l = document.createElement("i");

  function c(e, i) {
    if (debug && console.log("Livery Change Request as '" + e + "'"), i) s = !0,
      function(e, i) {
        let t = new geofs.api.Canvas({
            width: 500
          }),
          o = t.context,
          n = new Image;
        n.src = i, n.crossOrigin = "anonymous", n.onload = function() {
          t.canvas.width = n.width, t.canvas.height = n.height, o.drawImage(n, 0, 0);
          let a = new Image;
          a.src = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/overlay__1_.png", a.crossOrigin = "anonymous", a.onload = function() {
            o.globalAlpha = .5;
            let n = .25 * a.width,
              s = .25 * a.height;
            for (let i = -Math.abs(e); i < t.canvas.height; i += s)
              for (let r = -Math.abs(e); r < t.canvas.width; r += n) o.drawImage(a, r, i, n, s);
            let r = t.canvas.toDataURL("image/png");
            if (debug && console.log(r), 4140 != geofs.aircraft.instance.id) geofs.api.setModelTextureFromCanvas(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, t, 0);
            else {
              if (i.toString().includes("|")) {
                var l = i.split("|"),
                  c = l[1],
                  d = l[2];
                geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, c, 2), geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, d, 0), i = l[0]
              }
              geofs.api.setModelTextureFromCanvas(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, t, 1)
            }
          }
        }
      }(n, e), debug && console.log("livery changed to " + e);
    else if (s = !1, e.toString().includes("https://")) {
      if (4140 == geofs.aircraft.instance.id) {
        if (e.toString().includes("|")) {
          var t = e.split("|"),
            o = t[1],
            a = t[2];
          geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, o, 2), geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, a, 0), e = t[0]
        }
        return void geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, e, 1)
      }
      geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, e, 0), debug && console.log("livery changed to " + e)
    } else geofs.aircraft.instance.loadLivery(e), debug && console.log("livery changed to " + e)
  }
  r.id = "mlButton", r.className = "mdl-button mdl-js-button", r.innerText = "Multiliveries ", l.className = "material-icons geofs-ui-bottom-icon", l.innerText = "flight_land", r.appendChild(l), r.addEventListener("click", (function() {
    if ("object" == typeof t.window && t.window.closed && (t.opened = !1), t.opened) return ui.notification.show("Panel is open in another window"), void(debug && console.log("Duplicate open attempt"));
    t.window = window.open("https://ariakim-taiyo.github.io/MLUI/", "_blank", "height=1000,width=1500"), t.opened = !0, t.window && !t.window.closed && void 0 !== t.window.closed || (ui.notification.show("Please allow popups on GeoFS"), debug && console.log("No Popup Permission"), t.opened = !1)
  })), 0 == document.getElementsByClassName("fmc-btn").length ? document.getElementsByClassName("geofs-ui-bottom")[0].appendChild(r) : document.getElementsByClassName("fmc-prog-info")[0].appendChild(r), document.querySelectorAll("[data-aircraft]").forEach((function(i) {
    e.ids.forEach((function(e) {
      i.dataset.aircraft.includes(e) && (i.style.background = "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 100%)", i.innerHTML.includes("Multiliveries") || (i.innerHTML = i.innerHTML + " [Multiliveries Frame]"))
    }))
  })), window.addEventListener("message", (e => {
    if (e = e.data, debug && console.log(e), "livery" === e.type && (e.custom ? c(e.livery, !0) : c(e.livery, !1)), "vehicle" === e.type && geofs.aircraft.instance.change(e.definition, null), "invalid" === e.type) return console.log("Invalid client, please use the original code."), void ui.notification.show("Invalid client, please use the original code.");
    "test" === e.type && t.window.postMessage({
      type: "answer",
      payload: btoa(multiliveries.toString())
    }, "*"), "offset" === e.type && (n = e.offset, s && c(e.livery, !0))
  })), geofs.aircraft.Aircraft.prototype.change = function(e, i, o, n) {
    var a = this;
    if (e = e || this.aircraftRecord.id, o = this.load(e, this.getCurrentCoordinates(), o, n), isNaN(parseInt(e)) ? a.loadLivery(i) : o.then((function() {
        a.loadLivery(i)
      })), void 0 !== t) return isNaN(parseInt(e)) ? (geofs.api.analytics.event("aircraft", "EXTERNAL AIRCRAFT"), o) : (geofs.api.analytics.event("aircraft", geofs.aircraftList[e].name), o)
  }, geofs.aircraft.Aircraft.prototype.load = function(i, t, n, a) {
    if (!isNaN(parseInt(i)) || void 0 === e) {
      o = !1;
      r = this;
      var s = geofs.aircraftList[i] && geofs.aircraftList[i].local ? geofs.aircraftList[i].path + "aircraft.json" : "/models/aircraft/load.php";
      if (void 0 === o) return;
      return new Promise((function(e, o) {
        r.id != i || n ? (geofs.doPause(1), r.unloadAircraft(), $.ajax(s, {
          data: {
            id: i,
            kc: geofs.killCache
          },
          dataType: "text",
          success: function(o, s, l) {
            if ("error" != s) {
              geofs.aircraftList[i] && geofs.aircraftList[i].local && (o = JSON.stringify({
                id: i,
                name: geofs.aircraftList[i].name,
                fullPath: geofs.aircraftList[i].path,
                isPremium: !1,
                isCommunity: !1,
                definition: btoa(o)
              }));
              var c = r.parseRecord(o)
            }
            c ? (geofs.aircraftList[i] && !geofs.aircraftList[i].local && (r.fullPath = r.aircraftRecord.fullPath), r.id = i, r.init(c, t, n, a)) : r.loadDefault("Could not load aircraft file"), e()
          },
          error: function(e, t, n) {
            i != geofs.aircraft.default && r.loadDefault("Could not load aircraft file" + n), o()
          }
        })) : e()
      }))
    }
    var r;
    o = !0, (r = this).unloadAircraft();
    var l = r.parseRecord(JSON.stringify({
      id: 42069,
      name: "EXTERNAL AIRCRAFT",
      fullPath: "EXTERNAL AIRCRAFT",
      isPremium: 1,
      isCommunity: !1,
      definition: i
    }));
    setTimeout((function() {
      r.init(l, t, n, a)
    }), 1e3)
  }, geofs.aircraft.Aircraft.prototype.addParts = function(e, i, t, a) {
    for (geofs.aircraft.instance.parts = {}, t = t || 1, a = 0; a < e.length; a++) {
      var s = e[a];
      if (s.include) {
        var r = geofs.includes[s.include];
        $.extend(!0, s, r[0]);
        for (var l = 1; l < r.length; l++) {
          var c = Object.assign({}, r[l], {
            parent: s.name
          });
          c.name = s.name + c.name, e.push(c)
        }
      }
      if (s.indices && 0 < s.indices) {
        for (l = 2; l <= s.indices; l++)(c = Object.assign({}, s, {
          indices: null
        })).name = s.name + l, c.node += l, e.push(c);
        s.name += "1", s.node += "1"
      }
    }
    if (void 0 !== n) {
      for (a = 0; a < e.length; a++) {
        for ((s = e[a]).points = s.points || {}, s.type = s.type || !1, s.brakesController = s.brakesController || !1, s.animations = s.animations || [], geofs.aircraft.instance.parts[s.name] = s, geofs.aircraft.instance.addOffsets(s, t), s.forceDirection && (s.forceDirection = AXIS_TO_INDEX[s.forceDirection]), s.rotation && (s.rotation = V3.toRadians(s.rotation)), s.modelOnlyRotation && (s.modelOnlyRotation = V3.toRadians(s.modelOnlyRotation)), s.scale = s.scale || [1, 1, 1], s.scale = V3.scale(s.scale, t), s.originalScale = s.scale, 4 > geofs.version && (s.gltf2model = null), (s.model || s.gltf2model) && (r = s.gltf2model ? s.gltf2model.url : s.model.url || s.model, i && "/" != r[0] && !s.include && (r = i + r), o && (r = s.model), l = {
            shadows: s.shadows ? window[s.shadows] : SHADOWS_ALL,
            incrementallyLoadTextures: !1
          }, s.gltf2model && s.gltf2model.shader && (l.customShader = geofs.api.generateShader(s.model.shader, i)), s["3dmodel"] = new geofs.api.Model(r, l), this.models.push(s["3dmodel"]._model), s.renderer && (s.rendererInstance = new instruments.Renderer(s.renderer))), s.light && (s.lightBillboard = new geofs.fx.light(null, s.light, {
            scale: .2
          }), geofs.aircraft.instance.lights.push(s)), s.object3d = new Object3D(s), s.suspension && (s.suspension.length ? (s.suspension.origin = [s.collisionPoints[0][0], s.collisionPoints[0][1], s.collisionPoints[0][2] + s.suspension.length], r = s.suspension.length) : (s.suspension.origin = [s.collisionPoints[0][0], s.collisionPoints[0][1], 0], r = -s.collisionPoints[0][2]), s.suspension.restLength = r, "rotation" == s.suspension.motion ? (r = V3.length(s.collisionPoints[0]), r = Math.atan2(s.collisionPoints[0][0] / r, s.collisionPoints[0][2] / r), r = {
            type: "rotate",
            axis: s.suspension.axis || "Y",
            value: s.name + "Suspension",
            ratio: (0 > r ? r + HALF_PI : r - HALF_PI) * RAD_TO_DEGREES * (s.suspension.ratio || 1)
          }) : r = {
            type: "translate",
            axis: s.suspension.axis || "Z",
            value: s.name + "Suspension",
            ratio: s.suspension.ratio || 1
          }, s.animations.push(r), s.suspension.hardPoint = s.suspension.hardPoint || .5, s.points.suspensionOrigin = V3.dup(s.suspension.origin), geofs.aircraft.instance.suspensions.push(s)), l = 0; l < s.animations.length; l++)(r = s.animations[l]).ratio = r.ratio || 1, r.offset = r.offset || 0, r.currentValue = null, r.delay && (r.ratio /= 1 - Math.abs(r.delay)), "rotate" == r.type && (c = r.method || "rotate", "parent" == r.frame && (c = "rotateParentFrame"), r.rotationMethod = s.object3d[c + r.axis]), "translate" == r.type && (geofs.isArray(r.axis) || (r.axis = AXIS_TO_VECTOR[r.axis]));
        if ("wheel" == s.type && (s.radius = s.radius || 1, s.arcDegree = s.radius * TWO_PI / 360, s.angularVelocity = 0, geofs.aircraft.instance.wheels.push(s)), "airfoil" == s.type && (s.lift = 0, geofs.aircraft.instance.airfoils.push(s), s.stalls = s.stalls || !1, s.stallIncidence = s.stallIncidence || 12, s.zeroLiftIncidence = s.zeroLiftIncidence || 16, s.aspectRatio = s.aspectRatio || DEFAULT_AIRFOIL_ASPECT_RATIO, s.aspectRatioCoefficient = s.aspectRatio / s.aspectRatio + 2), "engine" == s.type && (s.rpm = 0, geofs.aircraft.instance.definition.originalInertia = geofs.aircraft.instance.definition.engineInertia, geofs.aircraft.instance.engines.push(s), s.contrail && (s.contrailEmitter = new geofs.fx.ParticleEmitter({
            off: !0,
            anchor: s.points.contrailAnchor,
            duration: 1e10,
            rate: .05,
            life: 4e4,
            easing: "easeOutQuart",
            startScale: .01,
            endScale: .01,
            randomizeStartScale: .02,
            randomizeEndScale: .15,
            startOpacity: .1,
            endOpacity: 1e-5,
            startRotation: "random",
            texture: "whitesmoke"
          }))), "balloon" == s.type && (s.temperature = s.initialTemperature || 0, s.coolingSpeed = s.coolingSpeed || 0, geofs.aircraft.instance.balloons.push(s)), s.collisionPoints) {
          for (r = s.collisionPoints, l = geofs.aircraft.instance.definition.contactProperties[s.contactType || s.type], c = 0; c < r.length; c++) r[c].part = s, r[c].contactProperties = l, geofs.aircraft.instance.collisionPoints.push(r[c]);
          s.volume || s.buoyancy || (s.volume = "airfoil" == s.type ? this.definition.mass / (400 * r.length) : .1, s.area = s.area || 0), s.dragVector = s.dragVector || [1, 1, 1], s.dragVector = V3.scale(s.dragVector, 1 / r.length)
        }
        s.volume && (s.buoyancy = WATER_DENSITY * GRAVITY * s.volume), s.controller && (geofs.aircraft.instance.controllers[s.controller.name] = s.controller)
      }
      for (a = 0; a < e.length; a++) "root" != (s = e[a]).name && (s.parent || (s.parent = "root"), geofs.aircraft.instance.parts[s.parent].object3d.addChild(s.object3d)), s.node && (s.object3d.setModel(s.object3d.findModelInAncestry()), s.manipulator && ("string" == typeof(i = s.manipulator) && (i = geofs.aircraft.instance.aircraftRecord.isCommunity ? null : geofs.utils.getFunctionFromString(i)), i && (geofs.aircraft.instance.manipulators[s.node] = i, controls.addNodeClickHandler(s.node, (function(e) {
        controls.manipulator = geofs.aircraft.instance.manipulators[e], controls.mouse.down = 4
      })))))
    }
  };
  setInterval((function() {
    Object.values(multiplayer.visibleUsers).forEach((function(i) {
      a = i, e.aircraft.forEach((function(e) {
        a.currentLivery == parseInt(e.livery) && geofs.api.changeModelTexture(multiplayer.visibleUsers[a.id].model, e.mptx, 0)
      }))
    }))
  }), 1e3);
  console.log("Loaded!"), console.log("Version: Release 2.0"), await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/contributors.txt").then((e => e.json())).then((e => i = e)), setTimeout((function() {
    console.log("Code by Spice9 and AriakimTaiyo, livery contributions by:"), i.forEach((function(e) {
      "" === message ? message += e : i[i.length - 1] === e ? message = message + ", and " + e : message = message + ", " + e
    })), console.log(message)
  }), 1e3)
}
multiliveries();
