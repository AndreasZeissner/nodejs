/**
 * Created by andras on 04.12.15.
 */
"use strict";

const fs    = require("fs");

fs.writeFile(__dirname + '/target.txt', 'Write my Message!', function (err) {
        if(err) {
            throw err;
        } else {
            console.log("File Saved")
        }
    })