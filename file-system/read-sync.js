/**
 * Created by andras on 04.12.15.
 */
"use strict";

const fs = require('fs'),
    data = fs.readFileSync(__dirname + '/target.txt');

process.stdout.write(data.toString());