(function(angular) {

  var
    dependencies;

  dependencies = [
    'ni.States',
    'ni.Validator',
    'ni.Templates',
    'ni.Bargraph',
    'ni.Resume',
    'ni.NiValidator'
  ];

  angular.module('ni.Main', dependencies);

})(angular);
