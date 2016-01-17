var HID = require('node-hid');
var readCommand=[0x01, 0x80, 0x33, 0x01, 0x00, 0x00, 0x00, 0x00];
exports.readTemperatures=function(devices) {
 // not implemented
};

exports.getDevices=function() {
 var devices=HID.devices();
 var list=[];
 devices.forEach(function(item) {
   if( // item.product.match("TEMPer1V1") && // match any TEMPer products by vendorId
      item.vendorId===3141 && 
      item.interface===1){  list.push(item.path);
  }
 });
 return list;
}

exports.readTemperature=function(path, callback, converter){
 if(!converter) {
  converter=exports.toDegreeCelcius;
 }
 var device = new HID.HID(path);
 device.write(readCommand);
 device.read(function(err,response){
   if(err) {
    callback.call(this,err,null); 
   } else {
    callback.call(this,null, converter(response[2],response[3]));
   }
 });
}

exports.toDegreeCelsius = function(hiByte, loByte) {
    if ((hiByte & 128) == 128) {
        return -((256-hiByte) + (1 + ~(loByte >> 4)) / 16.0);
    }
    return hiByte + ((loByte >> 4) / 16.0);
}

// 'Celsius' is misspelled, but left here so as not to break existing code
exports.toDegreeCelcius = function(hiByte, loByte) {
    return exports.toDegreeCelsius(hiByte, loByte);
}

exports.toDegreeFahrenheit = function(hiByte, loByte) {
    return exports.celsiusToFahrenheit(exports.toDegreeCelcius(hiByte, loByte));
}

exports.celsiusToFahrenheit = function(c) {
    return (c * 1.8) + 32.0;
}
