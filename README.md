# node-temper1

A node module to measure temperatures with a temper1 usb thermometer from pcsensors.com. Supports multiple thermometers attached.
## Prerequisites:

* Mac OS  or Linux (kernel 2.6+) or Windows XP+
* node.js v0.8
* libudev-dev (Linux only)
* git

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

## Sponsors
node-temper1 is sponsored by http://kwiqly.com
