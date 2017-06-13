/* 
 Author: Carolyn Cheung
 Version: 0.01 
 Date: 2017/6/10
 
 Summary: SocketIO emit functions for controlling GPIO 0 - 7. Refer wiringpi.com 
 correct corresponding GPIO pins on the Pi board

 */

var socket = io();

// test function for all lights ON 2 seconds, all lights OFF
function testGPIO() {
    var msg = "Testing GPIO (WiringPi) 0 - 7";
    socket.emit("test-gpio", msg);
    console.log(msg);                       // browser console logging
    return false;
};

// on/off for all GPIO
function GPIO_WRITE(pin) {
    var msg = "GPIO_WRITE";
    socket.emit("GPIO_WRITE", pin);
    console.log(msg + " " + pin);
    return false;
};

// EMERGENCY POWER OFF ALL GPIO
function GPIO_ALL_OFF() {
    var msg = "GPIO_ALL_OFF";
    socket.emit("GPIO_ALL_OFF");
    console.log(msg);
    return false;
}

// todo: keyboard press to manage 0123456 and kill