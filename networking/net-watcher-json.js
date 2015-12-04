/**
 * Created by andras on 04.12.15.
 */
"use strict";
// connect: $ telnet localhost 5432
const fs = require('fs'),
    net  = require('net'), // requiring the net module
    filename = __dirname + "/" + process.argv[2],
    server   = net.createServer(function (connection) {
        // reporting
        console.log("Someone connected!");
        connection.write(JSON.stringify({
            type: 'watching',
            file: process.argv[2]
        }) + '\n'); // retruning to the client
        // setup watcher
        let watcher = fs.watch(filename, function () {
            connection.write(JSON.stringify({
                type: 'changed',
                file: process.argv[2],
                timestamp: Date.now()
            }) + '\n');
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

server.listen(5432, function () {
    console.log("Listening for connections");
});