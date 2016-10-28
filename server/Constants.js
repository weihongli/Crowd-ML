
var paramIter = 0;
var serviceAccount = 'Crowd-ML-e591994762fe.json';
var databaseURL = 'https://crowd-ml-6228f.firebaseio.com/';
var D = 50;
var maxWeightBatchSize = 1;
var localUpdateNum = 0;
var maxGradBatchSize = 1;
var naughtRate = 10;
var eps = 0.00000001;
var K = 10;
var descentAlg = 'sqrt'; //simple, sqrt, adagrad, rmsProp
var testFeatures = 'binaryTestImages.dat';
var testLabels = 'binaryTestLabels.dat';
var testN = 220;
var testType = 'NNTest'; //none, binary, multitest
var testFrequency = 1;

var L = 1e-6;
var noiseScale = 1;
var noiseDistribution = 'NoNoise';
var lossFunction = 'SoftmaxNN';
var featureSource = 'binaryTrainImages.dat';
var labelSource = 'binaryTrainLabels.dat';
var N = 12665;
var clientBatchSize = 50;
var nh = 75;
var maxIter = 100;

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
exports.L = L;
exports.noiseScale = noiseScale;
exports.noiseDistribution = noiseDistribution;
exports.lossFunction = lossFunction;
exports.labelSource = labelSource;
exports.featureSource = featureSource;
exports.N = N;
exports.clientBatchSize = clientBatchSize;
exports.nh = nh;
exports.maxIter = maxIter;
