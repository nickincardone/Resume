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
    'ni.NiValidator'
  ];

  angular.module('ni.Main', dependencies);

})(angular);
