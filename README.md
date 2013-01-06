# node-temper1

A node module to measure temperatures with a temper1 usb thermometer from pcsensors.com. Supports multiple thermometers attached.

## Usage

```js
thermometers=require("..");

var devices=thermometers.getDevices();

console.log("Devices found:"+devices);

thermometers.readTemperature(devices[0], function(err, value) {
  console.log("Result:"+value);
});
```

## To Do
* read multiple thermometers simultanously
