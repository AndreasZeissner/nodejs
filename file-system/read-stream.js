/**
 * Created by andras on 04.12.15.
 */
"use strict";

const fs     = require('fs'),

stream = fs.createReadStream(__dirname + "/" + process.argv[2]);

stream.on('data', function (chunk) {
    process.stdout.write(chunk);
});
stream.on('error', function (err) {
    process.stderr.write("ERROR" + err.message + "\n");
});