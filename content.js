// Function to update the information section
function updateInformation(data) {
    // Function to update the information section
    
    var titleElement = document.getElementById('title');
    var descriptionElement = document.getElementById('description');
  
    var titles = data.information.title; // Get the titles array
    var currentIndex = 0; // Current index of the title to display
  
    // Function to update the title element
    function updateTitle() {
      titleElement.innerHTML = titles[currentIndex];
      currentIndex = (currentIndex + 1) % titles.length; // Increment the index, wrap around to 0 if exceeding the length
    }
  
    // Call the updateTitle function initially
    updateTitle();
  
    // Set interval to update the title every 3 seconds
    setInterval(updateTitle, 3000);
  
    // Set the description
    descriptionElement.innerHTML = data.information.description;
  }
  
  
/*   
  // Function to update the work experience section
  function updateWorkExperience(data) {
    var workTitleElement = document.getElementById('work-title');
    var jobsContainerElement = document.getElementById('jobs-container');
  
    workTitleElement.innerHTML = data.work.title;
  
    // Loop through each job and create HTML elements
    for (var i = 0; i < data.work.jobs.length; i++) {
      var job = data.work.jobs[i];
      var jobElement = document.createElement('div');
      jobElement.classList.add('job');
  
      var titleElement = document.createElement('h3');
      titleElement.innerHTML = job.title;
  
      var companyElement = document.createElement('p');
      companyElement.innerHTML = job.company;
  
      var locationElement = document.createElement('p');
      locationElement.innerHTML = job.location;
  
      var dateElement = document.createElement('p');
      dateElement.innerHTML = job.date;
  
      var descriptionElement = document.createElement('p');
      descriptionElement.innerHTML = job.description;
  
      jobElement.appendChild(titleElement);
      jobElement.appendChild(companyElement);
      jobElement.appendChild(locationElement);
      jobElement.appendChild(dateElement);
      jobElement.appendChild(descriptionElement);
  
      jobsContainerElement.appendChild(jobElement);
    }
  } */
  
  // Function to update the skills section
  function updateSkills(data) {
    var languagesElement = document.getElementById('languages');
    var frameworksElement = document.getElementById('frameworks');
    var systemsElement = document.getElementById('systems');
  
    languagesElement.innerHTML = data.skills.languages.join(', ');
    frameworksElement.innerHTML = data.skills.frameworks.join(', ');
    systemsElement.innerHTML = data.skills.systems.join(', ');
  }
  
  // Fetch the JSON data from the file
  fetch('content.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        // Add the fetched data to a global variable
        information = data.information;
        work = data.work;
        skills = data.skills;
        // Call the update functions with the fetched data
        updateInformation(data);
        //updateWorkExperience(data);
        updateSkills(data);
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
  