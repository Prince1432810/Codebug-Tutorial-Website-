var colorCheckbox = document.getElementById("changeColorCheckbox");

// Function to apply styles based on checkbox state
function applyStyles() {
    var body = document.body;
    if (localStorage.getItem("backgroundColor") === "#2b3035") {
        body.style.backgroundColor = "#2b3035";
        body.style.color = "white";
        colorCheckbox.checked = true;
    } else {
        body.style.backgroundColor = ""; // Set background color to initial
        body.style.color = ""; // Set text color to initial
        colorCheckbox.checked = false;
    }
}

// Function to handle checkbox change event
function handleCheckboxChange() {
    var body = document.body;
    if (colorCheckbox.checked) {
        localStorage.setItem("backgroundColor", "#2b3035");
        body.style.backgroundColor = "#2b3035";
        body.style.color = "white";
    } else {
        localStorage.removeItem("backgroundColor");
        body.style.backgroundColor = ""; // Set background color to initial
        body.style.color = ""; // Set text color to initial
    }
}

// Apply styles when the page loads
window.onload = function() {
    applyStyles();
};

// Listen for checkbox change event
colorCheckbox.addEventListener("change", handleCheckboxChange);
  

    $(document).ready(function() {
      var selectedTop = $('.cur-page').position().top;
      var sidebar = $('.sidebar');
  
      sidebar.scroll(function() {
          $('.selected').css('top', selectedTop + sidebar.scrollTop());
      });
  });