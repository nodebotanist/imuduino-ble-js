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
						console.log(state);
					});
					chars[1].notify(true);
				})
			})
		})
	}
});

console.log(service_info.peripheralUUID);

noble.startScanning();