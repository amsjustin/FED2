var app = {};

// self invoking..
(function(){
	// initialize alles
	app.init = function(){
		gps.start();
		gps.check_locations();
	}

	// gps object
	var gps = {
		start : function(){
			console.log('gps initialized.');
		},

		check_locations : function(){
			console.log('locating current position..')
		},

		start_interval : function(){
			console.log('staring interval..');
		},

		set_position : function(){
			console.log('setting position..');
		},

		update_position : function(){
			console.log('updating position..');
		},

		calculate_distance : function(){
			console.log('calculating distance..');
		}
	};

	// map object
	var map = {
		routelist : 'List with routes.',

		generate : function(myOptions, canvasID){
			console.log('generating map..');
		},

		update_position : function(){
			console.log('updating map position');
		},
	};

	// debug object
	var debug = {
		message : function(){
			console.log('debugging message..');
		},

		error_handler : function(){
			console.log('debug handler..');
		}
	};
	
	app.init();
	map.generate();
	console.log(map.routelist);
})();




