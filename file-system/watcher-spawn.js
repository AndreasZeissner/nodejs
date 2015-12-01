/**
 * Created by andras on 01.12.15.
 */
"use strict"; // needed for let!

    const fs    = require('fs'),

    // calling the child process module, and we only want the spawn method!
    // functions are first class citizens in Javascript -> can be assigned to variables
    spawn       = require('child_process').spawn,
    filename    = __dirname + "/" +process.argv[2];

if(!filename) {
    throw Error("Filename is not set, pleace specify a target file!");
}

fs.watch(filename, function () {
    // let declares a variable, like const, but mor than once [--harmony flag could be needed in older versions by older ECMAScript verisons]
    // spawn ist the name of the programm, we want to execute with array spawn('programm', ['flags', targetfile])
    // returns child process with stdin, stdout and stderr properties are Streams that can be used to read or write data
    // pipe to own standard output
    let ls = spawn('ls', ['-lh',filename]);
    ls.stdout.pipe(process.stdout);
    })
console.log("Now watching " + filename);
