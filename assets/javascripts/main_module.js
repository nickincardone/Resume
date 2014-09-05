(function(angular) {

  var
    dependencies;

  dependencies = [
    'ni.States',
    'ni.Templates',
    'ni.Bargraph',
    'ni.Resume',
    'ni.Validator'
  ];

  angular.module('ni.Main', dependencies);

})(angular);
