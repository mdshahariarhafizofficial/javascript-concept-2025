const mobile = {
    brand: "Nokia",
    model: "x2",
    otherModel: ["x33", "x56", "j7", "s20"],
    color: "black",
    ram: "512 gb",

    specialFeature: {
        call: true,
        camera: "2mp",

        batteryVariant: {
            cap1: "2000mph",
            cap2: "3000mph",
            cap3: "4000mph",
            cap4: "7000mph",
            
        }
    }

}

// console.log(mobile);
let keys = Object.keys(mobile);
console.log("Keys = ", keys);

let value = Object.values(mobile);
console.log("Values  = ", value);

let nested = mobile.specialFeature.batteryVariant.cap3 = "5000mph";
console.log(nested);
console.log(mobile);

delete mobile.specialFeature.batteryVariant.cap4;
console.log(mobile);
