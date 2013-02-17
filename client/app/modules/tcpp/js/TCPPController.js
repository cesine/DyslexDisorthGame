console.log("Loading the TCPPController.");

'use strict';
define([ "angular" ], function() {
  var TCPPController = function($scope, $rootScope) {
    $scope.stimuli = [ "Loading" ];
    $scope.experiment = "tcpp";

    $rootScope.title = 'TCPP';
    $scope.startExperiment = function() {
      alert("ready?");
    };
  };
  window.TCPPController = TCPPController;
  return TCPPController;
});
