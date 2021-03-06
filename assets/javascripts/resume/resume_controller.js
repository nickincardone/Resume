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
      'linkedin': "https://www.linkedin.com/pub/nick-incardone/47/583/662",
      'github': 'http://github.com/nickincardone',
      'avatar': 'dist/images/profile.jpg',
      'description': 'I am a multi-talented developer, full stack programmer, and data scientist living in Atlanta, GA. I currently work for Home Depot.',
      'languages': [{
        'name': 'Python',
        'percent': 0.85
      }, {
        'name': 'Javascript',
        'percent': 0.75
      }, {
        'name': 'Java',
        'percent': 0.7
      }],
      'otherSkills': [{
        'name': 'HTML5/CSS3',
        'percent': 0.9
      }, {
        'name': 'Angular.js',
        'percent': 0.8
      }, {
        'name': 'Mobile Web Design',
        'percent': 0.73
      }, {
        'name': 'd3.js',
        'percent': 0.5
      }],
      'frameworks': [{
        'name': 'Django',
        'percent': 0.85
      },{
        'name': 'Express',
        'percent': 0.65
      }, {
        'name': 'Spring Boot',
        'percent': 0.5
      }, {
        'name': 'Google App Engine (Python)',
        'percent': 0.3
      }],
      'education': {
        'time': '12/2014',
        'school': 'Georgia Institute of Technology',
        'description1': 'Bachelor of Science, Computer Science',
        'description2' : 'Focus in Data Science and Artificial Intelligence'
      },
      'experiences': [
      {
        'place': 'Home Depot',
        'location': 'Atlanta, GA',
        'time': '08/2015-present',
        'title': 'Senior Software Engineer',
        'description': "2016 Employee of the Year for Store Operations Software (~200 employees). Led team of three developers to create Store Supervisor tablet application. Designed and built hybrid application with Cordova, Angular.js, and Sinatra backend. Took over Tomcat Java project with weekly war room calls and architected and implemented safeguards to prevent system failures. Led development for labeling system upgrade. Upgrade was a centralized application that provided logging, alerts, and improved performance over previously in store solutions. Reduced software footprint from installations on ~2000 stores to four centralized instances. Produced applications on store side to interact with proof of concept projects, including digital labels, online pickup lockers, smart home experience, and faucet finder application. Worked with several vendors to adapt their technologies to Home Depot infrastructure and practices"
      },{
        'place': 'MNN',
        'location': 'Atlanta, GA',
        'time': '09/2014-08/2015',
        'title': 'Web Developer',
        'description': "Developed analytics tool for conglomerate of sites that have 30 million hits a month. Creating in-house tools to identify problems and performance bottlenecks. Moved largest site from Drupal to Django and led front end development for redesign."
      },{
        'place': 'Procur',
        'location': 'Atlanta, GA',
        'time': '07/2014-09/2014',
        'title': 'Web Development Intern',
        'description': 'Developed a large scale web application. Worked on the back end utilizing node.js on the sails framework, with a MongoDB database, and on the front end using angular.js, sass, and jade. Used python to extract, clean, and transform data from large structured Excel spreadsheets. Worked in a medium size team utilizing agile development principles.'
      }, {
        'place': 'Quanti Sense',
        'location': 'Atlanta, GA',
        'time': '05/2014-08/2014',
        'title': 'Data Processing Intern',
        'description': "Worked remotely to transform data from structured .csv files to stylized Excel sheets using Java and Groovy (using the APACHE POI library). Created client facing GUI's using VBA in Excel for large scale data inputs."
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