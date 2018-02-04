var l = require("./log");

setTimeout(function() {l.log('timeup');}, 3000);
l.log(process.pid);
