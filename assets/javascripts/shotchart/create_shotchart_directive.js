(function(angular) {

  var
    definitions;

  definitions = [
    createShotchart
  ];

  angular.module('ni.Shotchart').directive('createShotchart', definitions);

  function createShotchart() {

    return {
      restrict: 'A',
      scope: {
        'drawChart': '@drawChart'
      } 
    }

  }

})(angular);