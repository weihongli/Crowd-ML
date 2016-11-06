
	var paramIter = 0;
	
	var serviceAccount = 'GD-Prototype-Server.json';	
	var databaseURL = 'https://gd-prototype.firebaseio.com';
	var D = 50;
	var maxWeightBatchSize = 1;
	var localUpdateNum = 0; //set to 0 to disable
	var maxGradBatchSize = 1;
	var naughtRate = 10;
	var eps = 0.00000001;
	var K = 10;
	var descentAlg = 'adagrad'; //simple, sqrt, adagrad, rmsProp
	var testFeatures = 'MNISTTestImages-small.dat';
	var testLabels = 'MNISTTestLabels.dat';
	var testN = 1000;
	var testType = 'multiTest'; //none, binaryTest, multiTest, NNTest
	var testFrequency = 1;
	var maxIter = 50;

	var L = 1e-6;
    	var noiseScale = 0;
    	var noiseDistribution = 'NoNoise';
    	var lossFunction = 'Softmax';
    	var labelSource = 'MNISTTrainLabels.dat';
    	var featureSource = 'MNISTTrainImages-small.dat';
	var N = 60000;
	var clientBatchSize = 100;
	var nh = 100;

	if(descentAlg != 'simple' && descentAlg != 'sqrt' && descentAlg != 'adagrad' && descentAlg != 'rmsProp')
	{
		throw new Error("Invalid descent Algorithm");
		}

	if(testType != 'None' && testType != 'binary' && testType != 'multiTest' && testType != 'NNTest')
	{
		throw new Error("Invalid test Type");
		}

	if(noiseDistribution != 'NoNoise' && noiseDistribution != 'Gaussian' && noiseDistribution != 'Laplace')
	{
		throw new Error("Invalid Noise Type");
		}

	if(lossFunction != 'LogReg' && lossFunction != 'Hinge' && lossFunction != 'Softmax' && lossFunction != 'SoftmaxNN')
	{
		throw new Error("Invalid Loss Type");
		}
	exports.paramIter = paramIter;
	exports.serviceAccount = serviceAccount;
	exports.databaseURL = databaseURL;
	exports.D = D;
	exports.maxWeightBatchSize = maxWeightBatchSize;
	exports.localUpdateNum = localUpdateNum;
	exports.maxGradBatchSize = maxGradBatchSize;
	exports.naughtRate = naughtRate;
	exports.eps = eps;
	exports.K = K;
	exports.descentAlg = descentAlg;
	exports.testFeatures = testFeatures;
	exports.testLabels = testLabels;
	exports.testN = testN;
	exports.testType = testType;
	exports.testFrequency = testFrequency;
	exports.maxIter = maxIter;
	exports.L = L;
	exports.noiseScale = noiseScale;
	exports.noiseDistribution = noiseDistribution;
	exports.lossFunction = lossFunction;
	exports.labelSource = labelSource;
	exports.featureSource = featureSource;
	exports.N = N;
	exports.clientBatchSize = clientBatchSize;
	exports.nh = nh;

