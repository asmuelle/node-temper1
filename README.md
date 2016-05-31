# node-temper1
 
##About

A node module to measure temperatures with a temper1 usb thermometer from http://pcsensor.com. Supports multiple thermometers attached.
## Installation
### Prerequisites:

* Mac OS  or Linux (kernel 2.6+) or Windows XP+
* node.js >=v0.8
* libudev-dev (Linux only)
* libusb-1.0-0-dev
* git (needed by hid-api)

### Install module
* sudo apt-get install libudev-dev libusb-1.0-0-dev (Linux only)
* npm install temper1

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
var thermometers=require("temper1");

var devices=thermometers.getDevices();

console.log("Devices found:"+devices);

thermometers.readTemperature(devices[0], function(err, value) {
  console.log("Result:"+value);
});
```

## To Do
* read multiple thermometers simultanously
* add Fahrenheit and Kelvin output
* add correction function

## Applications that use node-temper1
* http://nodejsrocks.blogspot.de/2013/01/measure-temperatures-with-usb.html

## Sponsors
  - node-temper1 is sponsored by http://kwiqly.com

## Credits

  - [Andreas Müller](http://asmuelle.de)

## License

(The MIT License)

Copyright (c) 2011 Andreas Müller

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 
