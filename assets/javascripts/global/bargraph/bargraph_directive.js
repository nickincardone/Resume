(function(angular) {

  var
    definitions;

  definitions = [
    niBarGraph
  ];

  angular.module('ni.Bargraph').directive('niBargraph', definitions);

  function niBargraph() {

    return {
      scope: {
        validationType: '@niBargraph'
      },
      link: setSize
    };

    function setSize(scope, elm, attrs, ctrl) {

    }
  }
})(angular);