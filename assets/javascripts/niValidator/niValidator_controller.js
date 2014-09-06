(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    niValidatorController
  ];

  angular.module('ni.NiValidator')
    .controller('niValidatorController', definitions);

  function niValidatorController($scope) {
  }

})(angular);