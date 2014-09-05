(function(angular) {

  var
    definitions;

  definitions = [
    '$window',
    niBargraph
  ];

  angular.module('ni.Bargraph').directive('niBargraph', definitions);

  function niBargraph($window) {
    var w = angular.element($window);
    return {
      scope: {
        percent: '@niBargraph'
      },
      link: setSize
    };

    function setSize(scope, elm, attrs, ctrl) {
      var p = angular.element(elm.parent()[0]);

      elm.css({
        width: elm.parent()[0].offsetWidth * parseFloat(scope.percent)
      });
      w.bind('resize', function() {
        elm.css({
          width: elm.parent()[0].offsetWidth * parseFloat(scope.percent)
        });
        scope.$apply();
      });
    }
  }
})(angular);