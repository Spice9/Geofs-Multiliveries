/* ----------------------------------------------------------------------------------------
INITIAL SETUP INSTRUCTIONS:
Graphics: 
Maximum !PER SLIDER!
FXAA, Drop Shadows, Smooth Shadows, Globe Lighting !ALL ON!
Color Enhancement to taste.
Advanced Atmosphere, Vol. Clouds ON or OFF
All other options are untested. 
!ENVIRONMENT SETTINGS AUTOMATIC! - This is important.

When taking screenshots, make sure the window is maximized, and all UI panels are hidden.
Before taking screenshots, call screenshot("test") and check the file that is downloaded 
to ensure nothing is broken.

If you would like to generate thumbnails for all liveries, set "regenerateAll" to true.
Regenerating all liveries takes ~5 minutes for ~800 liveries.

While generating liveries, GeoFS must remain in focus.
Once you are ready, call "fetchLiv()".
-----------------------------------------------------------------------------------------*/


let livObj;
let lastPlane = geofs.aircraft.instance.id;
let liveryDone = false;
let regenerateAll = false; //Don't touch unless you want to fill up your hard drive.
let brokenObj = {
  "mismatches": [],
  "broken": []
};
var setCam = geofs.camera;
let indexSearch = 0;
let originalDims = [geofs.api.viewer.canvas.height, geofs.api.viewer.canvas.width]

geofs.api.analytics = { //Ad blockers break this.
    init: function() {},
    event: function(a, b, c, d) {
        window.gtag && window.gtag("event", b, {
            event_category: a,
            event_label: c,
            value: d
        })
    }
};

function cropImage(imgUri, width = 400, height = 300, xstart = 0, ystart = 0, callback) {
  try {

    //console.log("Values in crop", width, height);
    let resize_canvas = document.createElement('canvas');
    let orig_src = new Image();
    orig_src.src = imgUri;
    orig_src.onload = function() {
      resize_canvas.width = width;
      resize_canvas.height = height;
      let cnv = resize_canvas.getContext('2d');
      cnv.drawImage(orig_src, xstart, ystart, width, height, 0, 0, width, height);
      let newimgUri = resize_canvas.toDataURL("image/png").toString();
      callback(newimgUri);
    }
  }
  catch (e) {
    console.log("Couldn't crop image due to", e);
    window.alert("Couldn't crop image due to", e);
    callback(imgUri);
  }
}

function downloadURI(uri, name) {

  var link = document.createElement("a");

  link.download = name;

  link.href = uri;

  // mimic click on "download button"

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  delete link;

}

geofs.api.changeModelTexture = function(a, b, c) {
  try {
    if (a)
      if (a.customShader)
        a.customShader.setUniform("u_diffuse", new Cesium.TextureUniform({
          url: b,
          minificationFilter: Cesium.TextureMinificationFilter.LINEAR_MIPMAP_LINEAR
        }));
      else {
        var d = a._rendererResources.textures[c || 0];
        Cesium.Resource.fetchImage({
          url: b
        }).then(function(e) {
          d.copyFrom({
            source: e
          });
          d.generateMipmap();
          liveryDone = true;
        })
      }
  } catch (e) {
    liveryDone = true;
  }
}
  ;

function screenshot(name) {
  geofs.api.viewer.canvas.height = originalDims[0] / 2;
  geofs.api.viewer.canvas.width = originalDims[1] / 2;
  geofs.api.viewer.scene.render()
  var screenshotDataURL = geofs.api.viewer.canvas.toDataURL("image/jpg");
  cropImage(screenshotDataURL, 512, 512, 150, 0, function(url) {
    downloadURI(url, name);
  });
}

function changeLivery(livery) {
  try {
    if (livery.toString().includes("https://")) {
      if (geofs.aircraft.instance.id == 4140) {
        if (livery.toString().includes("|")) {
          var sL = livery.split("|");
          var composite = sL[1];
          var normal = sL[2];
          geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, composite, 2);
          geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, normal, 0);
          livery = sL[0];
        }
        geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, livery, 1);
        return;
      }
      geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, livery, 0);
    } else {
      geofs.aircraft.instance.loadLivery(livery);
    }
  } catch (e) {
    liveryDone = true;
  }
}


function doLiveryScreenshot(index) {
  try {
    if (index == livObj.aircraft.length) {
      if (brokenObj.mismatches.length > 0) {
        console.log("Potential mismatches found: ", brokenObj.mismatches);
      } else {
        console.log("No potential mismatches detected.");
      }
      if (brokenObj.broken.length > 0) {
        console.log("Potential broken images found: ", brokenObj.broken);
      } else {
        console.log("No potential broken images detected.");
      }
      console.log("New Livery Object: ", livObj);
      return;
    }
    var e = livObj.aircraft[index];
    if (typeof e.thumb === "undefined") {
      e.thumb = "";
      //console.log("generated")
    }
    if (regenerateAll) e.thumb = "";
    if (e.thumb.includes("png") || e.thumb.includes("jpg")) {
      indexSearch++
      doLiveryScreenshot(indexSearch);
      return
    }
      //console.log("empty");
    var aircraftName = e.name;
    var aircraft;
    var timedOut = false;
    setTimeout(function() { timedOut = true; }, 2000)
    if (aircraftName.toLowerCase().includes("boeing 737 max 8")) {
      aircraft = "2769";
    }
    if (aircraftName.toLowerCase().includes("boeing 737-800")) {
      aircraft = "3054";
    }
    if (aircraftName.toLowerCase().includes("boeing 737-200")) {
      aircraft = "4140";
    }
    if (aircraftName.toLowerCase().includes("boeing p8")) {
      aircraft = "3292";
    }
    if (aircraftName.toLowerCase().includes("airbus a320neo")) {
      aircraft = "2871";
    }
    if (aircraftName.toLowerCase().includes("airbus a321neo")) {
      aircraft = "4646";
    }
    if (aircraftName.toLowerCase().includes("e145")) {
      aircraft = "4017";
    }
    if (aircraftName.toLowerCase().includes("boeing 767-400")) {
      aircraft = "4764";
    }
    if (aircraftName.toLowerCase().includes("airbus a220")) {
      aircraft = "2899";
    }
    if (aircraftName.toLowerCase().includes("a319")) {
      aircraft = "2879";
    }
    if (aircraftName.toLowerCase().includes("saab 340")) {
      aircraft = "2892";
    }
    if (aircraftName.toLowerCase().includes("dornier")) {
      aircraft = "3289";
    }
    if (aircraftName.toLowerCase().includes("boeing 787-10")) {
      aircraft = "3180";
    }
    if (aircraftName.toLowerCase().includes("boeing 787-9")) {
      aircraft = "3575";
    }
    if (lastPlane !== aircraft) {
      //console.log("changed to" + aircraft + "from " + lastPlane);
      lastPlane = aircraft;
      geofs.aircraft.instance.change(aircraft);
    }
    var checkInt = setInterval(function() {
      if ((!geofs.aircraft.instance.object3d.model._model.ready)) {
        //console.log("Aircraft not loaded yet");
      } else {
        if ((geofs.aircraft.instance.object3d.model._model._resource.url.includes(geofs.aircraft.instance.id))) {
          //console.log("Aircraft loaded");
          clearInterval(checkInt);
          changeLivery(e.livery);
          var liveryCheckInt = setInterval(function() {
            if (liveryDone || timedOut) {
              liveryDone = false;
              clearInterval(liveryCheckInt);
              geofs.camera.setRotation(300, 20, 0);
              geofs.camera.setFOV(1.6);
              if (!timedOut) {
                var screenshotName = aircraftName + "_thumbnail";
                var screenshotObj = {
                  name: screenshotName,
                  plane: geofs.aircraft.instance.aircraftRecord.name,
                  idCurrent: geofs.aircraft.instance.id,
                  idIdeal: aircraft
                }
                if (screenshotObj.idCurrent !== screenshotObj.idIdeal) brokenObj.mismatches.push(screenshotObj);
                //console.log(screenshotObj)
                screenshot(screenshotName)
                e.thumb = "https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/thumbnails/" + encodeURIComponent(screenshotName + ".png");
              } else {
                var screenshotName = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                var screenshotObj = {
                  name: "No Image",
                  plane: geofs.aircraft.instance.aircraftRecord.name,
                  idCurrent: geofs.aircraft.instance.id,
                  idIdeal: aircraft
                }
                brokenObj.broken.push(screenshotObj);
                //console.log(screenshotObj)
                e.thumb = screenshotName;
              }

              indexSearch++
              doLiveryScreenshot(indexSearch);
            }
          })
        }
      }
    }, 10)
  } catch (e) {
    console.log(e);
    if (!e.toString().includes("event")){
      indexSearch++
      if (indexSearch >= livObj.aircraft.length) {
        return;
      } else { doLiveryScreenshot(indexSearch); }
    }; //geofs analytics
  }
}



async function fetchLiv() {
  await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/liveries.json")
    .then(res => res.json())
    .then(data => livObj = data).then(function() {
      //--
      doLiveryScreenshot(0);
      //--
    })
}
