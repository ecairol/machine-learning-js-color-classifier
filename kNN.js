if(typeof train_data == 'undefined'){
	console.log('Data is undefined');
}

// Algorithm
var kNN = function(k){
	var self = this;
	self.k = k || 3;

	this.fit = function(){
		console.log("Train data is already classified: ", train_data);
	};


	// Usage: this.predict([20, 204, 204]);
	this.predict = function(test_data){
		var distance = [];

		// Calculate distance between test_data and each trained data.
		Object.keys(train_data).forEach(function (key) {
			var label = key;
			var labelData = train_data[label];
			for (var i = labelData.length - 1; i >= 0; i--) {
				// console.log("Label: "+ label + " | Calculating distance between tuplas: ", test_data+" - "+labelData[i]);
				
				// avg(distance)
				var avgDistance = (
					Math.pow( labelData[i][0]-test_data[0] , 2 ) +
					Math.pow( labelData[i][1]-test_data[1] , 2) +
					Math.pow( labelData[i][2]-test_data[2] , 2)
				) / 3;

				distance.push( {"label":label, "value":avgDistance} );
			};
		});

		// Order distance DESC
		distance.sort(function(a,b) {
			if (a.value < b.value)
			    return -1;
			  if (a.value > b.value)
			    return 1;
			  return 0;
		});

		// console.log(distance);

		return nearstNeighbors(self.k, distance);
	}

	// Private functions
	function nearstNeighbors(k, arr){
		var votes = [];
		var counter = {};

		for (var i = 0; i < k; i++) {
			var label = arr[i].label;

			if( !counter[label] ){
				counter[label] = 0;
			}
			counter[label]++;

			votes.push({"label":label, "count":counter[label]});

		};
		console.log("counter", counter);

		// Order distance DESC
		votes.reverse(function(a,b) {
			if (a.count < b.count)
			    return -1;
			  if (a.count > b.count)
			    return 1;
			  return 0;
		});

		console.log("votes", votes);
		return votes[0]["label"];
	}

};