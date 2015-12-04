/**
 * Created by andras on 04.12.15.
 */
"use strict";

const fs = require("fs");

fs.readFile(__dirname + '/target.txt', function (err, data) {
    if (err) {
        throw err
    } else {
        console.log(data.toString());
    }

})