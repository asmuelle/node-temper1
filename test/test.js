thermometers=require("..");

var devices=thermometers.getDevices();

console.log("Devices found:"+devices[0]);

thermometers.readTemperature(devices[0], function(err, value) {
  console.log("Result:"+value);
});
