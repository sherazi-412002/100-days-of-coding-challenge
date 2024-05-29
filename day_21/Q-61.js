"use strict";
var vehicleTypes;
(function (vehicleTypes) {
    vehicleTypes[vehicleTypes["car"] = 0] = "car";
    vehicleTypes[vehicleTypes["truck"] = 1] = "truck";
    vehicleTypes[vehicleTypes["motorcycle"] = 2] = "motorcycle";
    vehicleTypes[vehicleTypes["jeep"] = 3] = "jeep";
    vehicleTypes[vehicleTypes["train"] = 4] = "train";
})(vehicleTypes || (vehicleTypes = {}));
console.log(vehicleTypes.jeep);
