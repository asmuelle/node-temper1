thermometers=require("..");
/* commented out for travisCI

var devices=thermometers.getDevices();

console.log("Devices found:"+devices[0]);

devices.forEach(function(device) {
    console.log(device);
    thermometers.readTemperature(device, function(err, intTemp, extTemp) {
        if(err) {
          console.log(err)

        } else {
         if (extTemp) {
            console.log('  external temp: ' + extTemp.toFixed(2) + ' C');
        }
         if(intTemp) {
            console.log('  internal temp: ' + intTemp.toFixed(2) + ' C');
        }
        }
    });

});
*/
