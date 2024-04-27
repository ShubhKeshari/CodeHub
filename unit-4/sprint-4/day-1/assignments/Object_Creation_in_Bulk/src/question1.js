// **Problem 1:****************************************************
// write a "factory function iPhone1 to create iPhone objects in bulk quantity

function iPhone1(ASIN, color, display, camera) {
  // return object
  let obj = {};
  obj.ASIN = ASIN;
  obj.color = color;
  obj.display = display;
  obj.camera = camera;
  obj.dial = function () {
    return "tring.. tring...";
  };
  obj.sendMessage = function () {
    return "Sending message...";
  };
  obj.cameraClick = function () {
    return "Camera clicked";
  };
  return obj;
}

// // Example invocation:
// let i1 = iPhone1(
//   1,
//   "B09X67JBQV",
//   7.8,
//   "IOS",
//   "128mb",
//   "Gray",
//   "90mm",
//   "2.0 MP"
// );
// console.log(i1.ASIN); // 1
// console.log(i1.color); // "B09X67JBQV"
// console.log(i1.display); // 7.8
// console.log(i1.camera); // "IOS"

// console.log(i1.dial()); // "tring.. tring..."
// console.log(i1.sendMessage()); // "Sending message..."
// console.log(i1.cameraClick()); // "Camera clicked"

// **Problem 2:****************************************************
// write a "factory function iPhone2 to create iPhone objects in bulk quantity

function iPhone2(ASIN, color, display, camera, bluetooth) {
  // return object
  let obj = iPhone1(ASIN, color, display, camera);
  obj.bluetooth = bluetooth;
  obj.connectBluetooth = function () {
    return "Bluetooth connected successfully...";
  };
  return obj;
}

// // Example invocation:
// let i2 = iPhone2(
//   1,
//   "B09X67JBQV",
//   7.8,
//   "IOS",
//   "128mb",
//   "Gray",
//   "90mm",
//   "2.0 MP",
//   "5.1"
// );
// console.log(i2.ASIN); // 1
// console.log(i2.color); // "B09X67JBQV"
// console.log(i2.display); // 7.8
// console.log(i2.camera); // "IOS"
// console.log(i2.bluetooth); // "128GB"

// console.log(i2.dial()); // "tring.. tring..."
// console.log(i2.sendMessage()); // "Sending message..."
// console.log(i2.cameraClick()); // "Camera clicked"
// console.log(i2.connectBluetooth()); //"Bluetooth connected successfully..."

// **Problem 3:****************************************************
// Using Constructor Functions:

function iPhone3(ASIN, color, display, camera, bluetooth) {
  // return object
  this.ASIN = ASIN;
  this.color = color;
  this.display = display;
  this.camera = camera;
  this.bluetooth = bluetooth;
  this.dial = function () {
    return "tring.. tring...";
  };
  this.connectBluetooth = function () {
    return "Bluetooth connected successfully...";
  };
  this.sendMessage = function () {
    return "Sending message...";
  };
  this.cameraClick = function () {
    return "Camera clicked";
  };
}

// // Example invocation:
// let i3 = {};
// iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");

// console.log(i3.ASIN); // 1
// console.log(i3.color); // B09X67JBQV
// console.log(i3.display); // 7.8
// console.log(i3.camera); // IOS
// console.log(i3.bluetooth); // 128mb
// console.log(i3.dial()); // "tring.. tring..."
// console.log(i3.connectBluetooth()); // "Bluetooth connected successfully..."
// console.log(i3.sendMessage()); // "Sending message..."
// console.log(i3.cameraClick()); // "Camera clicked"

// **Problem 4:****************************************************
// Using ES6 classes:

class Iphone4 {
  constructor(ASIN, color, display, camera, bluetooth) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
    this.dial = function () {
      return "tring.. tring...";
    };
    this.connectBluetooth = function () {
      return "Bluetooth connected successfully...";
    };
    this.sendMessage = function () {
      return "Sending message...";
    };
    this.cameraClick = function () {
      return "Camera clicked";
    };
  }
}

// // Example invocation:
// let i4 = new Iphone4(
//   1,
//   "B09X67JBQV",
//   7.8,
//   "IOS",
//   "128mb",
//   "Gray",
//   "90mm",
//   "2.0 MP",
//   "5.1"
// );

// console.log(i4.ASIN); // 1
// console.log(i4.color); // B09X67JBQV
// console.log(i4.display); // 7.8
// console.log(i4.camera); // IOS
// console.log(i4.bluetooth); // 128mb

// console.log(i4.dial()); // "tring.. tring..."
// console.log(i4.sendMessage()); // "Sending message..."
// console.log(i4.cameraClick()); // "Camera clicked"
// console.log(i4.connectBluetooth()); // "Bluetooth connected successfully..."

//don't remove below export statement part
export { iPhone1, iPhone2, iPhone3, Iphone4 };
