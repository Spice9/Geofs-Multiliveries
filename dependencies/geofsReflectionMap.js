var environmentMapURL = "https://rawcdn.githack.com/Spice9/Geofs-Multiliveries/be6e76d6b2ea4a282b7fb90bd7494769746a2b5c/dependencies/geofsReflection.ktx2";
var L00 = new Cesium.Cartesian3(0.136601150035858, 0.174612954258919, 0.210195764899254); // L00, irradiance, pre-scaled base
var L1_1 = new Cesium.Cartesian3(0.031010340899229, 0.031199775636196, 0.068603038787842); // L1-1, irradiance, pre-scaled base
var L10 = new Cesium.Cartesian3(-0.021945768967271, -0.016913520172238, -0.014117771759629); // L10, irradiance, pre-scaled base
var L11 = new Cesium.Cartesian3(0.024123758077621, 0.038696449249983, 0.050967626273632); // L11, irradiance, pre-scaled base
var L2_2 = new Cesium.Cartesian3(-0.012578369118273, -0.017456803470850, -0.018899304792285); // L2-2, irradiance, pre-scaled base
var L2_1 = new Cesium.Cartesian3(-0.033340256661177, -0.043094877153635, -0.045561701059341); // L2-1, irradiance, pre-scaled base
var L20 = new Cesium.Cartesian3(0.005168804433197, 0.005357268266380, 0.007065385114402); // L20, irradiance, pre-scaled base
var L21 = new Cesium.Cartesian3(0.012425755150616, 0.015337374992669, 0.017619283869863); // L21, irradiance, pre-scaled base
var L22 = new Cesium.Cartesian3(0.002277358202264, 0.006476081442088, 0.016652975231409); // L22, irradiance, pre-scaled base

var coefficients = [L00, L1_1, L10, L11, L2_2, L2_1, L20, L21, L22];
geofs.aircraft.instance.object3d.model._model.imageBasedLighting.specularEnvironmentMaps = environmentMapURL;

var brightnessInterval = setInterval(function(){
    var L00Scaled = new Cesium.Cartesian3();
    var L1_1Scaled = new Cesium.Cartesian3();
    var L10Scaled = new Cesium.Cartesian3();
    var L11Scaled = new Cesium.Cartesian3();
    var L2_2Scaled = new Cesium.Cartesian3();
    var L2_1Scaled = new Cesium.Cartesian3();
    var L20Scaled = new Cesium.Cartesian3();
    var L21Scaled = new Cesium.Cartesian3();
    var L22Scaled = new Cesium.Cartesian3();
    var coefficientsScaled = [L00Scaled, L1_1Scaled, L10Scaled, L11Scaled, L2_2Scaled, L2_1Scaled, L20Scaled, L21Scaled, L22Scaled];
    for (var index = 0; index < coefficientsScaled.length; index++) {
        var coefficient = coefficients[index];
        Cesium.Cartesian3.multiplyByScalar(coefficient, geofs.fx.dayNightManager.sunIntensity, coefficientsScaled[index]);
    }
    geofs.aircraft.instance.object3d.model._model.imageBasedLighting.sphericalHarmonicCoefficients = coefficientsScaled;
}, 100);
