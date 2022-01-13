var bleno = require('@abandonware/bleno');

import SystemInformationService from './SystemInformation/systeminformationservice'

console.log(SystemInformationService)
const systemInformationService = new SystemInformationService();

bleno.on('stateChange', function(state) {
    console.log('on -> stateChange: ' + state);

    if (state === 'poweredOn') {

        bleno.startAdvertising(bleno.name, [systemInformationService.uuid]);
    }
    else {

        bleno.stopAdvertising();
    }
});

bleno.on('advertisingStart', function(error) {

    console.log('on -> advertisingStart: ' +
        (error ? 'error ' + error : 'success')
    );

    if (!error) {

        bleno.setServices([
            systemInformationService
        ]);
    }
});
