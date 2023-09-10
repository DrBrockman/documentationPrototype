if (!localStorage.getItem('pt'))
{
    localStorage.setItem("pt", "[]")
    
    
}
var personsArray = JSON.parse(localStorage.getItem('pt'))

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
//var personsArray = [];
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore();



async function getDataAndPopulateTable() {
    const url = 'https://script.google.com/macros/s/AKfycbyduPifAtND8lwhJXW1RC_HZnOBJggZJ6qc4nfVldzVqylq-9mZgjxLGBujcktwrjgcLg/exec';
  
    try {
      const response = await fetch(url);
       data = await response.json();
  
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getDataAndPopulateTable();


  function updateTable() {
    // Clear the existing table rows
    var personTableBody = document.getElementById('personTableBody');
  
    personTableBody.innerHTML = '';
  
    // Repopulate the table rows
    personsArray.forEach((person, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${person.name}</td>
        <td>${person.date}</td>
        <td>${person.start}</td>
        <td>${person.end}</td>
      `;
  
      // Attach a click event listener to each row
      row.addEventListener('click', () => openEditModal(index));
  
      personTableBody.appendChild(row);
    });
  }
  
  function poptable () {
  // Get the tbody element by its class name
  const tbody = document.querySelector('.bod');

// Clear existing rows from tbody
tbody.innerHTML = '';

// Loop through the data and create rows
data.exercises.forEach(item => {
  const tr = document.createElement('tr');
  tr.classList.add('exerciseList');
  tr.dataset.category = item.category; // Replace with the appropriate property name

  tr.innerHTML = `
    <td>
      <div class="form-check">
        <input type="checkbox" class="form-check-input">
      </div>
    </td>
    <td>${item.name}</td>
    <td class="text-right">
      <span>
        <em class="fa fa-edit mr-2"></em>
        <em class="fa fa-trash"></em>
      </span>
    </td>
  `;

  // Append the created row to the tbody
  tbody.appendChild(tr);
  $(tr).on("click", function(event) {
if (!$(event.target).hasClass("fa")) { // Exclude clicks on the span element
  var checkbox = $(this).find(".form-check-input");
  checkbox.prop("checked", !checkbox.prop("checked"));
}
});
});
}

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
  

 
       
  async function getit() {
    var url = `https://script.google.com/macros/s/AKfycbyduPifAtND8lwhJXW1RC_HZnOBJggZJ6qc4nfVldzVqylq-9mZgjxLGBujcktwrjgcLg/exec?action=fetchSpreadsheetData`;
    try {
      const response = await fetch(url);
      newArray = await response.json();
  newArray.people.forEach((Object => {  personsArray.push(Object);  } ))
     
        console.log(newArray);
  
   
       
  
        // Update the table to reflect the changes
        //updateTable();
     
    } catch (error) {
      console.error(error); // Handle any errors
    }
  }
getit();
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
const checkboxes = document.querySelectorAll('input[name="options"]');
        const badge = document.getElementById('badge');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateBadge);
        });

        function updateBadge() {
            const checkedCheckboxes = document.querySelectorAll('input[name="options"]:checked');
            if (checkedCheckboxes.length > 0) {
                badge.textContent = checkedCheckboxes.length;
                badge.style.display = 'inline';
            } else {
                badge.style.display = 'none';
            }
           
            
             


        }
    
