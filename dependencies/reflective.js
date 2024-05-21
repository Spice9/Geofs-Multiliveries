var environmentMapURL ="https://rawcdn.githack.com/Spice9/Geofs-Multiliveries/fe6865761126d59f197f95cdc1821a6893e458e6/dependencies/reflective.ktx2";
var L00 = new Cesium.Cartesian3(0.244824782013893, 0.255105584859848, 0.216100677847862); // L00, irradiance, pre-scaled base
var L1_1 = new Cesium.Cartesian3(0.065212175250053, 0.102498583495617, 0.154483020305634); // L1-1, irradiance, pre-scaled base
var L10 = new Cesium.Cartesian3(0.049292534589767, 0.047607049345970, 0.034937541931868); // L10, irradiance, pre-scaled base
var L11 = new Cesium.Cartesian3(-0.042591240257025, -0.033821858465672, -0.036208584904671); // L11, irradiance, pre-scaled base
var L2_2 = new Cesium.Cartesian3(-0.018695484846830, -0.024499369785190, -0.014183654449880); // L2-2, irradiance, pre-scaled base
var L2_1 = new Cesium.Cartesian3(0.056466709822416, 0.048134740442038, 0.035003177821636); // L2-1, irradiance, pre-scaled base
var L20 = new Cesium.Cartesian3(0.005812065675855, 0.006060967687517, 0.004052683711052); // L20, irradiance, pre-scaled base
var L21 = new Cesium.Cartesian3(-0.027778323739767, -0.023950269445777, -0.014710579067469); // L21, irradiance, pre-scaled base
var L22 = new Cesium.Cartesian3(0.010753160342574, 0.011846804060042, 0.007321635726839); // L22, irradiance, pre-scaled base

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
