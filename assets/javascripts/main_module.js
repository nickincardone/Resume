(function(angular) {

  var
    dependencies;

  dependencies = [
    'ni.States',
    'ni.Validator',
    'ni.Templates',
    'ni.Bargraph',
    'ni.Resume',
    'ni.Shotchart',
    'ni.NiValidator',
    'ni.Quiz'
  ];

  angular.module('ni.Main', dependencies);

})(angular);
