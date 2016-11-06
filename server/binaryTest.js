
	function accuracy(testWeight, constStr){	

		var constants = require(constStr)

		var D = constants.D;
		var K = constants.K;
		var data = 'DataFiles/';
		var testFeatures = data.concat(constants.testFeatures);
		var testLabels = data.concat(constants.testLabels);
		var N = constants.testN;
		var nh = 200;

		var correct = 0;
		var labels = require('fs').readFileSync(testLabels).toString().split('\n')
		var features = require('fs').readFileSync(testFeatures).toString().split('\n')

		for(i = 0; i < N; i++){
			line = labels[i];
			var label = parseFloat(line, 10);	
			line = features[i];
			var featureStr = line.split(" ");
			var featureArray = [];
			for(var j=0; j<featureStr.length; j++) { 
				featureArray[j] = parseFloat(featureStr[j], 10);}
			dot = 0;		
			for(j = 0; j < D; j++){
				dot += featureArray[j]*testWeight[j];}		
			var predict = 0;
			if(dot > 0){
				predict = 1;}
			if(predict == label){
				correct++;}
			
			if (i > N-5){
				console.log('results');
				console.log(dot);}
	
		}

		var accuracy = 100*correct/N;
		console.log('Accuracy: ', accuracy, '%')
	}

	exports.accuracy = accuracy;
