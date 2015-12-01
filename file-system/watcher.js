/**
 * Created by andras on 01.12.15.
 */
    // This programm watches files for change (target.txt)

const fs    = require('fs'); // require the Filesytem module


fs.watch(__dirname + '/target.txt', function (data) {
    console.log("File Changed! "+ data);
})

console.log("Now watching the target");