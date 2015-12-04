/**
 * Created by andras on 01.12.15.
 */
"use strict";
const fs    = require('fs'),
    spawn   = require('child_process').spawn,
    filename= __dirname + "/" + process.argv[2];

if(!filename) {
    throw Error("Filename not set!");
}

fs.watch(filename, function () {
    let ls = spawn('ls', ['-lh', filename]);
    var output = "";
    ls.stdout.on('data', function (chunk) { // File is touched
        console.log(chunk) // <Buffer 2d 72 77 2d 72 77 2d 72 2d 2d 20 31 20 61 6e 64 72 61 73 20 61 6e 64 72 61 73 20 30 20 44 65 7a 20 20 34 20 30 39 3a 33 37 20 2f 68 6f 6d 65 2f 61 6e ... >
        output += chunk.toString(); // returns binary => toStirng
    })
    ls.on('close', function () { // done touching the file :D
        let parts = output.split(/([-rw]+)/);
        console.dir(parts[1]);
    })
})

console.log(filename + " is watched!")