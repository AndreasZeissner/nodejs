/**
 * Created by andras on 04.12.15.
 */
"use strict";
// connect: $ nc -U /tmp/watcher.sock
const fs = require('fs'),
    net  = require('net'),
    filename = __dirname + "/" + process.argv[2],
    server   = net.createServer(function (connection) {
        // reporting
        console.log("Someone connected!");
        connection.write("Now watching: " + process.argv[2] + " for changes ... \n");
        // setup watcher
        let watcher = fs.watch(filename, function () {
            console.log("File changed!");
            connection.write("File " + process.argv[2] + " changed: " + Date.now() + "\n");
        });
        // cleanup
        connection.on('close', function () {
            console.log('Subscriber disconnected.');
            watcher.close();
        });
    });
if (!process.argv[2]) {
    throw Error('No filename given!');
}

server.listen('/tmp/watcher.sock', function () {
    console.log("Listening for connections");
});