# node-temper1

A node module to measure temperatures with a temper1 usb thermometer from http://pcsensors.com. Supports multiple thermometers attached.
## Installation
### Prerequisites:

* Mac OS  or Linux (kernel 2.6+) or Windows XP+
* node.js v0.8
* libudev-dev (Linux only)
* git
### Install module
npm install node-temper1

### Accessing thermometers as non-root

1. Add the udev rule set in /etc/udev/rules.d/ using the 60-temper.rules 
2. Add a 'temper' group (using groupadd or edit the /etc/group file)
3. Add users to the 'temper' group
4. Reload the udev rules:
    udevcontrol reload_rules
    (if that command doesn't exists then you will need to restart
     udev using the supported method for your distribution, or
     simply reboot)
5. Unplug and replug the TEMPer1 device

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
