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

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore();
   
async function getDataAndPopulateTable() {
    const url = 'https://script.google.com/macros/s/AKfycbxqBB1SPDUV3Cd-3_NuHvSUxIckB4wFvu0lQwFa0msXEdS5039BQ_yqI1HzKHCdne-hgA/exec';
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getDataAndPopulateTable();
  
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
    