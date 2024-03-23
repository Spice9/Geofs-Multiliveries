//Do not change code without consulting Ariakim. It WILL break otherwise.
async function multiliveries() {
	let e, i, t = "https://ariakim-taiyo.github.io/MLUI/",
		o = !1,
		n = function() {},
		r = 0,
		s = document.createElement("button"),
		l = "",
		c = !1;
	geofs.api.hasOwnProperty("changeModelTexture") || (geofs.api.changeModelTexture = function(e, i, t) {
		if (e)
			if (e.customShader) e.customShader.setUniform("u_diffuse", new Cesium.TextureUniform({
				url: i,
				minificationFilter: Cesium.TextureMinificationFilter.LINEAR_MIPMAP_LINEAR
			}));
			else {
				var o = e._rendererResources.textures[t || 0];
				Cesium.Resource.fetchImage({
					url: i
				}).then((function(e) {
					o.copyFrom({
						source: e
					}), o.generateMipmap()
				}))
			}
	}), window.addEventListener("message", (function(e) {
		"https://ariakim-taiyo.github.io" !== e.origin & e.origin !== t || ("test" !== e.data ? function(e) {
			if ("inv" === e) return console.log("Invalid client, please use the original code."), void ui.notification.show("Invalid client, please use the original code.");
			if (e.toString().includes("?custom") ? (c = !0, geofs.fx.expOverlay.update()) : (c = !1, geofs.fx.expOverlay.update()), e.toString().includes("https://")) {
				if (4140 == geofs.aircraft.instance.id) {
					if (e.toString().includes("|")) {
						var i = e.split("|"),
							t = i[1],
							o = i[2];
						geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, t, 2), geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, o, 0), e = i[0]
					}
					return void geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, e, 1)
				}
				geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, e, 0)
			} else geofs.aircraft.instance.loadLivery(e)
		}(e.data) : r.postMessage(btoa(multiliveries.toString()), "*"))
	}), !1), console.log("Loading..."), await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/liveries.json").then((e => e.json())).then((i => e = i)), s.innerHTML = 'Multiliveries<i class="material-icons">flight_land</i>', s.id = "mlBttn", s.addEventListener("click", (function() {
		"object" == typeof r && r.closed && (o = !1), o ? ui.notification.show("Panel is open in another window") : (r = window.open(t, "_blank", "height=1000,width=1500"), o = !0, r && !r.closed && void 0 !== r.closed || (ui.notification.show("Please allow popups on GeoFS"), o = !1))
	})), document.body.appendChild(s);
	let u = document.getElementById("mlBttn");
	0 == document.getElementsByClassName("fmc-btn").length ? (document.getElementsByClassName("geofs-ui-bottom")[0].appendChild(s), document.getElementsByClassName("geofs-ui-bottom")[0].insertBefore(u, s)) : document.getElementsByClassName("fmc-prog-info")[0].appendChild(s), n = 2.9 == geofs.version ? function() {
		Object.values(multiplayer.visibleUsers).forEach((function(i) {
			a = i, e.aircraft.forEach((function(e) {
				a.currentLivery == parseInt(e.livery) && geofs.api.Model.prototype.changeTexture(e.mptx, 0, multiplayer.visibleUsers[a.id].model)
			}))
		}))
	} : function() {
		Object.values(multiplayer.visibleUsers).forEach((function(i) {
			a = i, e.aircraft.forEach((function(e) {
				a.currentLivery == parseInt(e.livery) && geofs.api.changeModelTexture(multiplayer.visibleUsers[a.id].model, e.mptx, 0)
			}))
		}))
	}, mpRefresh = setInterval((function() {
		n(), document.querySelectorAll("[data-aircraft]").forEach((function(e) {
			var i = e.outerText;
			(i.includes("Boeing 737-800 [Spice9] (by Spice_9)") || i.includes("Airbus a320neo (Iberia) (by Spice_9)") || i.includes("Boeing 737 Max 8 (TUI) (by Spice_9)") || i.includes("Boeing 787-10 Dreamliner (Etihad) (by Spice_9)") || i.includes("Airbus A319 (Finnair)  (by GT-VRA)")) && (e.innerHTML.includes("Multiliveries") || (e.innerHTML = e.innerHTML + " [Multiliveries Frame]"))
		}))
	}), 5e3), console.log("Loaded!"), await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/contributors.txt").then((e => e.json())).then((e => i = e)), setTimeout((function() {
		console.log("Code by Spice9 and AriakimTaiyo, livery contributions by:"), i.forEach((function(e) {
			"" === l ? l += e : l = i[i.length - 1] === e ? l + ", and " + e : l + ", " + e
		})), console.log(l)
	}), 1e3), geofs["overlay.glsl"] = "\n  uniform sampler2D colorTexture;\n  uniform sampler2D watermark;\n  uniform bool isEnabled;\n  varying vec2 v_textureCoordinates;\n  void main() {\n  vec4 color = texture2D(watermark, v_textureCoordinates);\n    if (color.r > 0.0 && isEnabled) {\n      gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), color, 0.5);\n    } else {\n    gl_FragColor = texture2D(colorTexture, v_textureCoordinates);\n    }\n  }\n  ", geofs.fx.expOverlay = {
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
	}, geofs.fx.expOverlay.create(), geofs.aircraft.Aircraft.prototype.change = function(e, i, t, o) {
		c = !1, geofs.fx.expOverlay.update();
		var n = this;
		return e = e || this.aircraftRecord.id, (t = this.load(e, this.getCurrentCoordinates(), t, o)).then((function() {
			n.loadLivery(i)
		})), geofs.api.analytics.event("aircraft", geofs.aircraftList[e].name), t
	}
}
multiliveries();
