var environmentMapURL ="https://rawcdn.githack.com/Spice9/Geofs-Multiliveries/ed96d029d2662779823bbc1775f2726ff78ce9bd/dependencies/sky.ktx2";
var L00 = new Cesium.Cartesian3( 0.329517096281052,  0.359502106904984,  0.418023347854614); // L00, irradiance, pre-scaled base
var L1_1 = new Cesium.Cartesian3(-0.087121389806271, -0.060096953064203, -0.016618076711893); // L1-1, irradiance, pre-scaled base
var L10 = new Cesium.Cartesian3( 0.075083822011948,  0.058968212455511,  0.037519007921219); // L10, irradiance, pre-scaled base
var L11 = new Cesium.Cartesian3(-0.007882126607001, -0.005107556469738, -0.002065080683678); // L11, irradiance, pre-scaled base
var L2_2 = new Cesium.Cartesian3(-0.001850351691246, -0.001553216134198, -0.001530350768007); // L2-2, irradiance, pre-scaled base
var L2_1 = new Cesium.Cartesian3( 0.012557381764054,  0.008679250255227,  0.004482549149543); // L2-1, irradiance, pre-scaled base
var L20 = new Cesium.Cartesian3( 0.014737385325134,  0.014183685183525,  0.012352111749351); // L20, irradiance, pre-scaled base
var L21 = new Cesium.Cartesian3( 0.002089402638376,  0.001930067897774,  0.001439320505597); // L21, irradiance, pre-scaled base
var L22 = new Cesium.Cartesian3( 0.020093787461519,  0.022515077143908,  0.023803558200598); // L22, irradiance, pre-scaled base

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
}, 100)
