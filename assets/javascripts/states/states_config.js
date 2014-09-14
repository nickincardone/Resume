(function (angular) {
  var
  definition;

  definition = [
  '$stateProvider',
  '$urlRouterProvider',
  statesConfig
  ];

  angular.module('ni.States')
  .config(definition);

  function statesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
    .otherwise('/resume');

    $stateProvider
    .state('resume',  {
      url: '/resume',
      views: {
        '': { 
          templateUrl: 'resume.html',
          controller: 'resumeController'
        },
        'header': {
          templateUrl: 'header.html'
        }
      }
    })
    .state('shotchart',  {
      url: '/shotchart',
      views: {
        '': { 
          templateUrl: 'shotchart.html',
          controller: 'shotchartController'
        },
        'header': {
          templateUrl: 'header.html'
        }
      }
    })
    .state('quiz',  {
      url: '/quiz',
      views: {
        '': { 
          templateUrl: 'quizApp.html',
          controller: 'quizController'
        },
        'header': {
          templateUrl: 'header.html'
        }
      }
    })
    .state('niValidator',  {
      url: '/niValidator',
      views: {
        '': { 
          templateUrl: 'niValidator.html',
          controller: 'niValidatorController'
        },
        'header': {
          templateUrl: 'header.html'
        }
      }
    });


    
  }


})(angular);
