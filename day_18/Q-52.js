"use strict";
//making a object that contains another object inside in it
let mobileInfo = {
    make: "Infinix",
    model: "Hot 8",
    otherFeatures: {
        Storage: "60GB",
        screenSize: "6inch",
        battery: "4000mh"
    }
};
console.log(mobileInfo);
console.log(mobileInfo.otherFeatures);
console.log(mobileInfo.otherFeatures.battery);
