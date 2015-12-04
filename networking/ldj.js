/**
 * Created by andras on 04.12.15.
 */
// This is the node.js core library inheritance style!
"use strict";


const   events = require('events'),
        util   = require('util'),

    // Client constructor
    LDJClient = function (stream) {
        // equivalent to super() in classical inheritance
        events.EventEmitter.call(this);
        let self = this,
            buffer = '';
        stream.on('data', function (data) {
            buffer += data;
            let boundary = buffer.indexOf('\n');
            while (boundary !== -1) {
                let input = buffer.substr(0, boundary);
                buffer = buffer.substr(boundary + 1);
                self.emit('message', JSON.parse(input));
                boundary = buffer.indexOf('\n');
            }
        })
    };
    // make LDJClient inherit EventEmitter
    util.inherits(LDJClient, events.EventEmitter);

    exports.LDJClient = LDJClient;
    exports.connect   = function (stream) {
        return new LDJClient(stream);
    }