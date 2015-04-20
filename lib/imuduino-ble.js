var noble = require('noble');
var service_info = require('./service-info');




noble.on('discover', function(peripheral){
	// console.log(peripheral);
	if(peripheral.uuid == service_info.peripheralUUID){
		peripheral.connect(function(){
			console.log('connected!');
			peripheral.discoverServices([], function(error, services){
				// console.log(services);
				services[0].discoverCharacteristics([], function(error, chars){
					// console.log(chars);
					chars[1].on('read', function(state){
						console.log(state.toString());
						//state is 20 bytes- each 2 bytes represents an int value
						//for gyro motion, and temp and pressure
						//TODO: parse that out, log it.
						//Order: Accel x, y, z; gyro x, y, z; mag x, y, z
						//
					});
					chars[1].notify(true);
				})
			})
		})
	}
});

console.log(service_info.peripheralUUID);

noble.startScanning();