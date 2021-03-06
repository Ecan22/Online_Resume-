var bio = {
  "name":"Erik Cannon",
  "role":"Web Developer",
  "contacts":{
    "mobile":"570-xxx-xxxx",
    "email":"ec@gmail.com",
    "github":"Ecan22",
    "location": "New York, NY",
  },
  "welcomeMessage":"Hello and welcome",
  "skills":["energy","class","positivity"],
  "biopic":"images/me.jpg",
  "display": function(){
    // Header and Role
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    // Contacts
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#footerContacts,#topContacts").append(formattedEmail);
    var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#footerContacts,#topContacts").append(formattedmobile);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#footerContacts,#topContacts").append(formattedGithub);
    var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#footerContacts,#topContacts").append(formattedlocation);


    // Welcome Statement
    var formattedwelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedwelcome);

    var formattedpic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedpic);

    // skills
    if (bio.skills.length > 0){

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    } 
  }
};

bio.display();

// Work Experience
var work ={
  "jobs":[
    {
    "employer":"HH",
    "title":"Account Executive",
    "location":"New York, NY",
    "dates":"2014 - 2015",
    "description":"At this job I had a lot of fun."
    },
    {
    "employer":"Athletes",
    "title":"Board Member",
    "location":"Easton, PA",
    "dates":"2012 - 2016",
    "description":"At this job I did this."
    }
  ]
};

work.display = function() {
  for (var job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

work.display();

// Work Locations
function locationizer(work_obj) {
  var locationArray = [];

  for(var job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}


// Projects
var projects ={
  "projects":[
    {
      "title":"Sample Project 1",
      "dates": "2016",
      "description": "For this project I did this",
      "images":[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ice_Cross_Island_Nygren.jpg/200px-Ice_Cross_Island_Nygren.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ice_Cross_Island_Nygren.jpg/150px-Ice_Cross_Island_Nygren.jpg"
      ]
    }
  ]
};

  projects.display = function(){
  for (var project in projects.projects) {
  $("#projects").append(HTMLprojectStart);

  var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
  $(".project-entry:last").append(formattedTitle);

  var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
  $(".project-entry:last").append(formattedDates);

  var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
  $(".project-entry:last").append(formattedDescription);

  if (projects.projects[project].images.length >0) {
    for (var image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

projects.display();
 

// Education
var education = {
  "schools":[
  {
    "name": "Laf College",
    "location":"Easton, PA",
    "degree":"BS",
    "majors": ["XXX", "YYY"],
    "dates":"2010-2014",
    "url":"http://example.com",
  }
  ],
  "onlineCourses":[
    {
     "title":"HBX CORE",
     "school": "HBS",
     "date": "2015",
     "url":"http://example.com",
    },
    {
      "title":"Front-end Web Developer Nanodegree",
     "school": "Udacity",
     "date": "2016",
     "url":"http://example.com",
    }
  ]
};

education.display = function(){
  for (var school in education.schools){
  $("#education").append(HTMLschoolStart);

  var formattedname = HTMLschoolName.replace("%data%",education.schools[school].name);
  var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
  $(".education-entry:last").append(formattedname + formattedDegree);

  var formattedlocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
  $(".education-entry:last").append(formattedlocation);

  var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
  $(".education-entry:last").append(formattedDates);

  var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
  $(".education-entry:last").append(formattedMajor);
  };

  $(".education-entry:last").append(HTMLonlineClasses);

  for (var school in education.onlineCourses){
  var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[school].title);
  var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[school].school);
  $(".education-entry:last").append(formattedTitle + formattedSchool);

  var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[school].date);
  $(".education-entry:last").append(formattedDates);
  }
};


education.display();

// Map
$("#mapDiv").append(googleMap);  

// Metrics
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

