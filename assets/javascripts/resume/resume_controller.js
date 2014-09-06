(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    resumeController
  ];

  angular.module('ni.Resume')
    .controller('resumeController', definitions);

  function resumeController($scope) {

    $scope.nichlos = {
      'name': 'Nick Incardone',
      'email': 'nickincardone@gmail.com',
      'phone': '770-401-0916',
      'linkedin': "https://www.linkedin.com/pub/nick-incardone/47/583/662",
      'github': 'http://github.com/nickincardone',
      'avatar': 'dist/images/profile.jpg',
      'description': 'I am a multi-talented developer, full stack programmer, and data scientist living in Atlanta, GA. I am graduating in December and seeking a web development position.',
      'languages': [{
        'name': 'Python',
        'percent': 0.85
      }, {
        'name': 'Javascript',
        'percent': 0.75
      }, {
        'name': 'Java',
        'percent': 0.7
      }, {
        'name': 'PHP',
        'percent': 0.6
      }, {
        'name': 'R',
        'percent': 0.4
      }, {
        'name': 'C/C++',
        'percent': 0.2
      }, {
        'name': 'Ruby',
        'percent': 0.175
      }],
      'otherSkills': [{
        'name': 'HTML5/CSS3',
        'percent': 0.85
      }, {
        'name': 'Mobile Web Design',
        'percent': 0.73
      }, {
        'name': 'Bootstrap.js',
        'percent': 0.7
      }, {
        'name': 'Angular.js',
        'percent': 0.65
      }, {
        'name': 'JQuery',
        'percent': 0.6
      }, {
        'name': 'Grunt.js',
        'percent': 0.6
      }, {
        'name': 'd3.js',
        'percent': 0.5
      }],
      'frameworks': [{
        'name': 'Node.js',
        'percent': 0.85
      }, {
        'name': 'PHP (LAMP)',
        'percent': 0.68
      }, {
        'name': 'Python (Google App Engine)',
        'percent': 0.55
      }],
      'education': {
        'time': '12/2014',
        'school': 'Georgia Institute of Technology',
        'description1': 'Bachelor of Science, Computer Science',
        'description2' : 'Focus in Data Science and Artificial Intelligence'
      },
      'experiences': [{
        'place': 'Procur',
        'location': 'Atlanta, GA',
        'time': '07/2014-present',
        'title': 'Web Development Intern',
        'description': 'Developing a large scale web application. Working on the back end utilizing node.js on the sails framework, with a MongoDB database, and on the front end using angular.js, sass, and jade. Using python to extract, clean, and transform data from large structured Excel spreadsheets. Working in a medium size team utilizing agile development principles.'
      }, {
        'place': 'QuantiSense',
        'location': 'Atlanta, GA',
        'time': '05/2014-08/2014',
        'title': 'Data Processing Intern',
        'description': "Working remotely to transform data from structured .csv files to stylized Excel sheets using Java and Groovy (using the APACHE POI library). Creating client facing GUI's using VBA in Excel for large scale data inputs."
      }, {
        'place': 'Ivan Allen College',
        'location': 'Atlanta, GA',
        'time': '09/2012-05/2013',
        'title': 'Information Technology Assistant',
        'description': 'Helped identify and repair network issues. Managed moves, adds, and changes of network computers. Troubleshot desktop hardware/software problems. Assited with oversight on about 100 classroom machines and 25 faculty computers unsupervised, during a period of two months when full time IT engineer was on leave.'
      }, {
        'place': 'Heartbyte',
        'location': 'Atlanta, GA',
        'time': '05/2012-08/2012',
        'title': 'Junior Engineer',
        'description': 'Created mobile widgets utilizing HTML5, CSS3, and Javascript in a small startup. Created examples for mobile applications for conferences.'
      }, {
        'place': 'Publix',
        'location': 'Atlanta, GA',
        'time': '08/2006-present',
        'title': 'Customer Service Staff',
        'description': 'Manage front end associates and their schedules. Open and close the store. Oversee and create dynamic sales oppurtunites. Handle money services, keep cash accountability of cashiers, and handle accounting paperwork at the store level. Manage and order inventory and supplies. Lead staff memeber when it comes to cash accountability, supply ordering, and customer assistance. Yes I have worked there for eight years.'
      }],
      'activities': [{
        'place': '',
        'time': '10/2012-present',
        'title': "Atlanta Hawk's Sixth Man",
        'description': "Attend every Atlanta Hawk's home game and lead cheers. Create a fan friendly atmosphere and encourage fan participation."
      }, {
        'place': '',
        'time': '2010-2013',
        'title': 'Music Production',
        'description': "Produced, mixed, and mastered music for local acts. Produced album that generated over a thousand downloads in the first day. Worked in home and professional studios. Assisted with design of artwork and logos in Photoshop and Illustrator."
      }]
    };







  }

})(angular);