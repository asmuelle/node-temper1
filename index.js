var HID = require('node-hid');
var readCommand=[0x01, 0x80, 0x33, 0x01, 0x00, 0x00, 0x00, 0x00];
exports.readTemperatures=function(devices) {
};

exports.getDevices=function() {
 var devices=HID.devices();
 var list=[];
 devices.forEach(function(item) {
   if(item.product.match("TEMPer1V1") && 
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

exports.toDegreeCelcius=function(hiByte, loByte) {
 var sign = hiByte & (1 << 7);
 var temp = ((hiByte & 0x7F) << 8) | loByte;
 if (sign) {
    temp = -temp;
 }
 return temp * 125.0 / 32000.0;
}
