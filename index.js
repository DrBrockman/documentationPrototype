if (!localStorage.getItem('pt'))
{
    localStorage.setItem("pt", "[]")
   
}

let ws;
        
function connectWebSocket() {
const serverUrl = 'wss://socketsender.onrender.com';
const clientName = 'AppleWatch';
ws = new WebSocket(serverUrl);
   
ws.addEventListener('open', function (event) {
        ws.send((JSON.stringify({ type: 'name', data: clientName })))
try {        
document.getElementById('final').textContent = 'Connection established';
}
    catch {
    console.log('not correct page')
    }

});
ws.addEventListener('close', function (event) {
    try {
        document.getElementById('final').textContent = 'Connection closed';
    }
    catch {
    console.log('nah')
    }
      });

// listen for messages from the server
ws.addEventListener('message', (event) => {
  console.log('got milk')
});}
connectWebSocket();
function makeSimplePostRequest(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Adjust the content type if sending a different data format
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    throw new Error(`POST request failed: ${error.message}`);
  });
}

const url = 'https://socketsender.onrender.com';
// send a message to the server
function reconnectWebSocket() {
    if (document.visibilityState === 'visible') {
        if (!ws || ws.readyState === WebSocket.CLOSED) {
            connectWebSocket();
        }
    }
}

// Page Visibility API to check page focus and reconnect WebSocket
document.addEventListener('visibilitychange', () => {
    reconnectWebSocket();
});
window.addEventListener('focus', () => {
    reconnectWebSocket();
});
var personsArray = JSON.parse(localStorage.getItem('pt'))
class Exercise {
    constructor(name, type, duration, weight, color, sets, reps, bouts, seconds) {
      this.name = name;
      this.type = type;
      this.duration = duration;
      this.weight = weight;
      this.color = color;
      this.sets = sets;
      this.reps = reps;
      this.bouts = bouts;
      this.seconds = seconds;
    }
  }
const firebaseConfig = {
    apiKey: "AIzaSyBk2Uc6NfC9itI5eUMN7xdMyFkkdVb5VxU",
    authDomain: "documentation-assistant.firebaseapp.com",
    databaseURL: "https://documentation-assistant-default-rtdb.firebaseio.com",
    projectId: "documentation-assistant",
    storageBucket: "documentation-assistant.appspot.com",
    messagingSenderId: "683953454833",
    appId: "1:683953454833:web:3dbf0d3c740690e13af350",
    measurementId: "G-G9XERCCSJ2"
  };
var data;
var newArray;
var clickedExercise;
let checkedCount = 0;
var checkedElementsArray = [];
var exercises = [];
let currentExerciseIndex = 0;
let totalExercises = $('.mobileExerciseLayout').length;
//var personsArray = [];
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig); 
   const db = firebase.firestore();



async function getDataAndPopulateTable() {
    const url = 'https://script.google.com/macros/s/AKfycbxaj9HjCA16hkxqjt5Fc1Z146mS_gLE6EKLPBIhDLIEBU1sliXRBjh-GfpLQpPVoASS2A/exec';
  
    try {
      const response = await fetch(url);
       data = await response.json();
       poptable();
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getDataAndPopulateTable();


  function updateTable() {
    // Clear the existing table rows
    var personTableBody = document.getElementById('personTableBody');
    try {
      personTableBody.innerHTML = '';
  
    } catch (error) {
      
    }
    
  
    // Repopulate the table rows
    personsArray.forEach((person, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${person.name}</td>
        <td>${person.date}</td>
        
      `;
  
      // Attach a click event listener to each row
      row.addEventListener('click', () => openEditModal(index));
  
      personTableBody.appendChild(row);
    });
  }
  
  function poptable() {
    // Get the tbody element by its class name
    var tbody = document.querySelector('.bod');
    
  
    // Clear existing rows from tbody
    tbody.innerHTML = '';
  
    // Loop through the data and create rows
    data.exercises.forEach(item => {
      var tr = document.createElement('tr');
      tr.classList.add('exerciseList');
      tr.dataset.category = item.category; // Replace with the appropriate property name
      tr.dataset.difficulty = item.difficulty; // Replace with the appropriate property name  
      tr.innerHTML = `
        <td>
          <div class="form-check">
            <input type="checkbox" class="form-check-input exerciseListBox">
          </div>
        </td>
        <td id= "nameExercise" >${item.name}</td>
        
      `;
  
      // Append the created row to the tbody
      tbody.appendChild(tr);
  
      
    });
  
    
  }
 
  // Call the function to initialize the table and badge
  
  

function updatePersonInLocalStorage(updatedPerson) {
    // Retrieve existing data from localStorage
    var existingData = localStorage.getItem("pt");
    var people = JSON.parse(existingData);
  
    // Find the index of the person to be updated
    var personIndex = people.findIndex(function(person) {
      return person.name === updatedPerson.name;
    });
    var existingPerson = people[personIndex];
    for (var key in updatedPerson) {
      if (existingPerson.hasOwnProperty(key) && existingPerson[key] !== updatedPerson[key]) {
        existingPerson[key] = updatedPerson[key];
      }
    }
  
    // Save the modified data back to localStorage
    localStorage.setItem("pt", JSON.stringify(people));
  }
  
  function openEditModal(index) {
    const person = personsArray[index];
     exercises = [];
    

    if (!person) {
        console.error("No person found for the given index:", index);
        return;
    }

    const editForm = document.getElementById('editForm');
    
    if (!editForm) {
        console.error("Edit form not found!");
        return;
    }
    var listExercises = document.getElementById('listExercises');
    while (listExercises.firstChild) {
    listExercises.removeChild(listExercises.firstChild);
    }
    // Check for each input before setting its value
    if (editForm.name) editForm.name.value = person.name || "";
    if (editForm.start) editForm.start.value = person.start || "";
    if (editForm.end) editForm.end.value = person.end || "";
    if (editForm.subjective) editForm.subjective.value = person.subjective || "";
    if (editForm.soft) editForm.soft.value = person.soft || "";
    if (editForm.dryn) editForm.dryn.value = person.dryn || "";
    if (editForm.mobbin) editForm.mobbin.value = person.mobbin || "";
    if (editForm.assessment) editForm.assessment.value = person.assessment || "";
    if (editForm.plan) editForm.plan.value = person.plan || "";
    exercises = person.exercises || [];
    console.log(person.exercises)
    console.log(  "after retrieving from local storage")
    // Check if the container has no child elements
    if (document.getElementById('container').childElementCount === 0) {
    // Create the "Add Exercises" button
    var addButton = document.createElement('button');
    addButton.textContent = 'Add Exercises';
    addButton.type = 'button';
    addButton.classList.add('btn', 'btn-primary', 'btn-sm', 'mt-3');
    addButton.setAttribute('data-toggle', 'modal');
    addButton.setAttribute('data-target', '#myModal');
    // Add an event listener to the button
    // Append the button to the container
    document.getElementById('container').appendChild(addButton);
    }
    if (exercises.length > 0) {
        populateExistingExercises(exercises);
         
    }
    // Show the modal
    $('#editModal').modal('show');

    // Save the index of the person being edited
    editForm.setAttribute('data-person-index', index);
}
function removePersonByIndex(index) {
  if (index >= 0 && index < personsArray.length) {
    personsArray.splice(index, 1); // Remove one element at the specified index
    localStorage.setItem('pt', JSON.stringify(personsArray)); // Update local storage
    updateTable(); // Update the table to reflect the changes
  }
}
       
async function getit() {
  var url = `https://script.google.com/macros/s/AKfycbyduPifAtND8lwhJXW1RC_HZnOBJggZJ6qc4nfVldzVqylq-9mZgjxLGBujcktwrjgcLg/exec?action=fetchSpreadsheetData`;
  try {
    const response = await fetch(url);
    const newArray = await response.json();

    newArray.people.forEach((newObject) => {
      // Convert the "date" field to a string
      const newDateString = newObject.date.toString();

      // Check if an object with the same name and date already exists in personsArray
      const existingObjectIndex = personsArray.findIndex((person) => {
        // Convert the "date" field in personsArray to a string for comparison
        const personDateString = person.date.toString();

        return person.name === newObject.name && personDateString === newDateString;
      });

      if (existingObjectIndex === -1) {
        // If not found, add the new object to personsArray
        personsArray.push(newObject);
      } else {
       
      }
    });

    console.log(newArray);
    localStorage.setItem("pt", JSON.stringify(personsArray));

    // Update the table to reflect the changes
    updateTable();
  } catch (error) {
    console.error(error); // Handle any errors
  }
}

$(document).ready(function() {
    // Load default content
    loadContent('dictate');

    // Handle navigation clicks
    $('.icon, .icon-center').click(function(e) {
        e.preventDefault();
        const targetPage = $(this).data('page');
        loadContent(targetPage);
        updateActiveIcon(this);
    });
});

function loadContent(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            $('#content').html(data);
        })
        .catch(error => {
            $('#content').html('<p>Error loading content.</p>');
        });
}

function updateActiveIcon(clickedIcon) {
    $('.icon, .icon-center').removeClass('active-indicator'); // Remove active class from all icons
    $(clickedIcon).addClass('active-indicator'); // Add active class to the clicked icon
}

 function populateExercises (exercises) {
    for (const exercise of exercises) {
        // Create a container div for each exercise
        const exerciseDiv = document.createElement('div');
        exerciseDiv.classList.add('mobileExerciseLayout', 'd-flex', 'flex-row', 'mt-1', 'mb-2', 'align-items-center');
      
        if (exercise.type === 'warmup') {
          // Create the warm-up HTML structure
          exerciseDiv.id = 'warmup';
          exerciseDiv.innerHTML = `
            <div class="flex-grow-1 col-8">
                <div class="d-flex flex-column flex-nowrap ps-1">
                    <div class='h6 m-0' id='exerName'>${exercise.name}</div>
                    <span id="typePill" class="align-self-start badge bg-pill bg-primary ">Warm Up</span>
                </div>
            </div>
            <div class="col-4 d-flex align-items-center">
                <span id= 'durationName' class="text-primary h3 m-0 pe-2">5</span>
                <span style="color: #656565;" class="h5 m-0 ">MINUTES</span>
            </div>
          `;
        } else if (exercise.type === 'resistance') {
          // Create the resistance HTML structure
          exerciseDiv.id = 'resistance';
          exerciseDiv.innerHTML = `
            <div class="flex-grow-1">
                <div class="d-flex flex-column flex-nowrap ps-1">
                    <div class='h6 m-0' id='exerName'>${exercise.name}</div>
                    <span id="typePill" class="align-self-start badge bg-pill bg-primary ">Machine</span>
                </div>
            </div>
      
            <div class="col-3 d-inline-flex align-items-center">
                <div>
                    <div class="ex-data">
                        <span id="intenseName" class="afta text-primary h1 m-0 float-start"> - </span>
                    </div>
                </div>
            </div>
      
            <div class="d-inline-flex align-items-center">
                <div class="float-end pe-2">
                    <div class="ex-data">
                        <span id='setName' class="text-primary h5 m-0 float-end">3</span>
                        <p style="color: #656565;" class="m-0">SETS</p>
                    </div>
                </div>
        
                <div class="float-end pe-2">
                    <div class="ex-data">
                        <span id='repName' class="text-primary h5 m-0 float-end">8</span>
                        <p style="color: #656565;" class="m-0">REPS</p>
                    </div>
                </div>
            </div>
          `;
        } else if (exercise.type === 'stretch') {
          // Create the stretch HTML structure
          exerciseDiv.id = 'stretch';
          exerciseDiv.innerHTML = `
            <div class="flex-grow-1 col-8">
                <div class="d-flex flex-column flex-nowrap ps-1">
                    <div id='exerName' class='h6 m-0'>${exercise.name}</div>
                    <span id="typePill" class="align-self-start badge bg-pill bg-primary ">Stretch</span>
                </div>
            </div>
            <div class="d-inline-flex align-items-center">
        <div  class="float-end  pe-2 ">
        <div class="ex-data ">
            <span id='boutName' class="text-primary h5 m-0 float-end">3</span>
            <p style="color: #656565;" class="m-0">BOUTS</p>
        </div>
    
        </div>

    <div  class="float-end pe-2">
        <div class="ex-data ">
            <span id='secondsName' class="text-primary h5 m-0 float-end">25</span>
            <p style="color: #656565;" class="m-0">SECS</p>
        </div>
    
    </div>
          `;
        }
      
        // Append the created exerciseDiv to the appropriate div based on type
        const listDiv = document.getElementById('listExercises');
        listDiv.appendChild(exerciseDiv);
      }
      
      $('.mobileExerciseLayout').click(function() {
        totalExercises = $('.mobileExerciseLayout').length;
        currentExerciseIndex = $(this).index('.mobileExerciseLayout');
        populateModal(currentExerciseIndex);
        $('#exerciseEditModal').modal('show');
      }); 
      
 }  
 function populateExistingExercises (exercises) {
    for (const exercise of exercises) {
        // Create a container div for each exercise
        const exerciseDiv = document.createElement('div');
        exerciseDiv.classList.add('mobileExerciseLayout', 'd-flex', 'flex-row', 'mt-1', 'mb-2', 'align-items-center');
      
        if (exercise.type === 'warmup') {
          // Create the warm-up HTML structure
          exerciseDiv.id = 'warmup';
          exerciseDiv.innerHTML = `
            <div class="flex-grow-1 col-8">
                <div class="d-flex flex-column flex-nowrap ps-1">
                    <div class='h6 m-0' id='exerName'>${exercise.name}</div>
                    <span id="typePill" class="align-self-start badge bg-pill bg-primary ">Warm Up</span>
                </div>
            </div>
            <div class="col-4 d-flex align-items-center">
                <span id= 'durationName' class="text-primary h3 m-0 pe-2">${exercise.duration}</span>
                <span style="color: #656565;" class="h5 m-0 ">MINUTES</span>
            </div>
          `;
        } else if (exercise.type === 'resistance') {
          // Create the resistance HTML structure
          exerciseDiv.id = 'resistance';
          exerciseDiv.innerHTML = `
            <div class="flex-grow-1">
                <div class="d-flex flex-column flex-nowrap ps-1">
                    <div class='h6 m-0' id='exerName'>${exercise.name}</div>
                    <span id="typePill" class="align-self-start badge bg-pill bg-primary ">${exercise.type}</span>
                </div>
            </div>
      
            <div class="col-3 d-inline-flex align-items-center">
                <div>
                    <div class="ex-data">
                        <span id="intenseName" class="afta text-primary h1 m-0 float-start">${exercise.weight}</span>
                    </div>
                </div>
            </div>
      
            <div class="d-inline-flex align-items-center">
                <div class="float-end pe-2">
                    <div class="ex-data">
                        <span id='setName' class="text-primary h5 m-0 float-end">${exercise.sets}</span>
                        <p style="color: #656565;" class="m-0">SETS</p>
                    </div>
                </div>
        
                <div class="float-end pe-2">
                    <div class="ex-data">
                        <span id='repName' class="text-primary h5 m-0 float-end">${exercise.reps}</span>
                        <p style="color: #656565;" class="m-0">REPS</p>
                    </div>
                </div>
            </div>
          `;
        } else if (exercise.type === 'stretch') {
          // Create the stretch HTML structure
          exerciseDiv.id = 'stretch';
          exerciseDiv.innerHTML = `
            <div class="flex-grow-1 col-8">
                <div class="d-flex flex-column flex-nowrap ps-1">
                    <div id='exerName' class='h6 m-0'>${exercise.name}</div>
                    <span id="typePill" class="align-self-start badge bg-pill bg-primary ">${exercise.type}</span>
                </div>
            </div>
            <div class="d-inline-flex align-items-center">
        <div  class="float-end  pe-2 ">
        <div class="ex-data ">
            <span id='boutName' class="text-primary h5 m-0 float-end">${exercise.bouts}</span>
            <p style="color: #656565;" class="m-0">BOUTS</p>
        </div>
    
        </div>

    <div  class="float-end pe-2">
        <div class="ex-data ">
            <span id='secondsName' class="text-primary h5 m-0 float-end">${exercise.seconds}</span>
            <p style="color: #656565;" class="m-0">SECS</p>
        </div>
    
    </div>
          `;
        }
      
        // Append the created exerciseDiv to the appropriate div based on type
        const listDiv = document.getElementById('listExercises');
        listDiv.appendChild(exerciseDiv);
      }
      
      $('.mobileExerciseLayout').click(function() {
        totalExercises = $('.mobileExerciseLayout').length;
        currentExerciseIndex = $(this).index('.mobileExerciseLayout');
        populateModal(currentExerciseIndex);
        $('#exerciseEditModal').modal('show');
      }); 
      
 }  
 function populateModal(index) {
        
    clickedExercise = $('.mobileExerciseLayout').eq(index);
    const exerName = clickedExercise.find('#exerName').text();
    const setName = clickedExercise.find('#setName').text();
    const repName = clickedExercise.find('#repName').text();
    const typePill = clickedExercise.find('#typePill').text();
    const durationName = clickedExercise.find('#durationName').text();
    const weightName = clickedExercise.find('#intenseName').text();
    const colorName = clickedExercise.find('#colorName').text();
    const boutsName = clickedExercise.find('#boutName').text();
    const secondsName = clickedExercise.find('#secondsName').text();

    
    $('#modalExerName').val(exerName);
    $('#modalSetName').val(setName);
    $('#modalRepName').val(repName);
    $('#modalDurationName').val(durationName);
    $('#modalWeightName').val(weightName);
    $('#modalColorName').val(colorName);
    $('#modalBoutName').val(boutsName);
    $('#modalSecondsName').val(secondsName);
  
    // Show or hide resistanceTypesGroup based on typePill
    // if (typePill === "Stretch" || typePill === "Warm Up") {
    //   $('#resistanceTypesGroup').hide();
    //   if (typePill === "Stretch") {
    //     $('#modalWeightName').hide();
    //     $('#modalRepName').hide();
    //     $('#modalSetName').hide();
    //     $('#modalDurationName').hide();
    //     $('#modalColorName').hide();
    //   }
    //   if (typePill === "Warm Up") {
    //     $('#modalWeightName').hide();
    //     $('#modalRepName').hide();
    //     $('#modalSetName').hide();
    //     $('#modalDurationName').show();
    //     $('#modalSecondsName').hide();
    //     $('#modalColorName').hide();
    //   }
    // } else {
    //   $('#resistanceTypesGroup').show();
    //   $('#modalDurationName').hide();
    //     $('#modalColorName').hide();
    //     $('#modalSecondsName').hide();
    //     $('#modalBoutName').hide();
    // }
    
    // Set the radio button based on typePill
    $(`input[type=radio][name=btnradio]`).each(function() {
      if ($(this).next('label').text() === typePill) {
        $(this).prop('checked', true);
      }
    });
  }   

 
  
         
 function autoSaveExercises () { 
    const editForm = document.getElementById('editForm');
 const index = editForm.getAttribute('data-person-index');
       const newExerName = $('#modalExerName').val();
       const newSetName = $('#modalSetName').val();
       const newRepName = $('#modalRepName').val();
       const newDurationName = $('#modalDurationName').val();
       const newWeightName = $('#modalWeightName').val();
        const newColorName = $('#modalColorName').val();
        const newBoutsName = $('#modalBoutName').val();
        const newSecondsName = $('#modalSecondsName').val();
       
       // Get the selected radio button label
       const selectedType = $(`input[type=radio][name=btnradio]:checked`).next('label').text();
       
       clickedExercise.find('#exerName').text(newExerName);
       clickedExercise.find('#setName').text(newSetName);
       clickedExercise.find('#repName').text(newRepName);
       clickedExercise.find('#typePill').text(selectedType); // Assuming typePill is the text inside the badge
         clickedExercise.find('#durationName').text(newDurationName);
            clickedExercise.find('#intenseName').text(newWeightName);
            clickedExercise.find('#colorName').text(newColorName);
            clickedExercise.find('#boutName').text(newBoutsName);
            clickedExercise.find('#secondsName').text(newSecondsName);

       const savedexercise = personsArray[index].exercises.find(exercise => exercise.name === clickedExercise.find('#exerName').text());
       if (savedexercise) {
        // savedexercise.type = selectedType || null;
         savedexercise.sets = newSetName || '';
         savedexercise.reps = newRepName || '';
         savedexercise.duration = newDurationName || '';
         savedexercise.weight = newWeightName || '';
         savedexercise.color = newColorName || '';
         savedexercise.bouts = newBoutsName || '';
         savedexercise.seconds = newSecondsName || '';
       }
       localStorage.setItem('pt', JSON.stringify(personsArray));
    }   
