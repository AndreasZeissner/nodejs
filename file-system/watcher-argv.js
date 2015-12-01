/**
 * Created by andras on 01.12.15.
 */
const fs    = require('fs');

// node[0] [--options] nodeprogramm.js[1] [2] argv...[x]
filename    = __dirname + "/" +process.argv[2];

if (!filename) {
    throw Error("No target file selected!");
}

fs.watch(filename, function () {
    console.log("touched!");
})

console.log("Watching " + filename);