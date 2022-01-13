var bleno = require('@abandonware/bleno');
var util = require('util');

// var LoadAverageCharacteristic = require('./characteristics/loadaverage');
//var UptimeCharacteristic = require('./characteristics/uptime');
// var MemoryCharacteristic = require('./characteristics/memory');

export default class extends bleno.PrimaryService {

    constructor() {
        super({
            uuid: 'ff51b30e-d7e2-4d93-8842-a7c4a57dfb07',
            characteristics: [
                // new LoadAverageCharacteristic(),
                //new UptimeCharacteristic(),
               // new MemoryCharacteristic()
            ]
        });

    }
};

// util.inherits(SystemInformationService, bleno.PrimaryService);
