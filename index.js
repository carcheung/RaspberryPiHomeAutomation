var express = require("express");
var path = require("path");
var exec = require("child_process").exec;

// path directories
//var index = require('./routes/index');

var app = express();
var port = 8000;
var http = require("http").Server(app);
var io = require("socket.io")(http);

var serverName = "Waffles";

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", function(socket) {
    // todo: add timestamps and which user has connected, merge and then add which users
    // are calling which commands
    console.log("a user connected");
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

io.on('connection', function(socket) {
    // test function, 2 seconds on, then off for 0 - 7
    socket.on("test-gpio", function(msg) {
        var cmd = "bash shell_scripts/light.sh";
        message(serverName, msg);
        exec(cmd, function(error, stdout, stderr) {
        });
    });
    
    // individual PIN access on/off
    socket.on("GPIO_WRITE", function(pin) {
        var cmd = "bash shell_scripts/GPIO_pin_control.sh " + pin;
        exec(cmd, function(error, stdout, stderr) {
            stdout = stdout.replace(/\n$/, "");
            message(serverName, stdout);
        });
    });
    
    // turn all pins off immediately
    socket.on("GPIO_ALL_OFF", function() {
        var cmd = "bash shell_scripts/GPIO_all_off.sh";
        exec(cmd, function(error, stdout, stderr) {
            message(serverName, "GPIO KILL SWITCH");
        });
    });

});

http.listen(port, function() {
    console.log(__dirname);
    console.log("Listening on port " + port);
});

// helper functions

// message function
function message(sender, message) {
    var timeStamp = new Date().toISOString().replace(/T/, " ").replace(/\..+/,  "");
    console.log("[" + timeStamp + "] [" + sender + "]: " + message);
};