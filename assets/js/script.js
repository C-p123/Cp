
 document.querySelector('.black-cir').addEventListener('click', function() {
     this.style.backgroundColor="black";
     this.style.color="white"
    document.body.style.backgroundColor = 'black'; // Change body bg to dark
    document.body.style.color = 'white !important'; // Change body text to white
});

document.querySelector('.white-cir').addEventListener('click', function() {
     this.style.backgroundColor="white";
     this.style.color="black"
    document.body.style.backgroundColor = 'white'; // Change body bg to white
    document.body.style.color = 'black !important'; // Change body text to black
});


function changeTextSize(grade) {
    switch (grade) {
        case 'A-':
            document.body.style.fontSize = '12px';
            break;
        case 'A':
            document.body.style.fontSize = '16px'; // Normal size
            break;
        case 'A+':
            document.body.style.fontSize = '22px';
            break;
        default:
            console.warn('Invalid grade provided.');
    }
    
}




function openTab(event, tabName) {
    // Hide all tab content
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove 'active' class from all tabs
    const tabButtons = document.querySelectorAll('.tabs');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add 'active' class to the clicked tab
    event.currentTarget.classList.add('active');
}


window.onscroll = function() {stickNavbar()};

const navbar = document.getElementById("navbar-fixed");
const sticky = navbar.offsetTop;

function stickNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.style.backgroundColor="white"
    } else {
        navbar.classList.remove("sticky");
    }
}



// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box'),
  searchIcon = document.querySelector('.search'),
  closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
  inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
  inputBox.classList.remove('open');
});




document.querySelectorAll('.tabnew').forEach(tab => {
  tab.addEventListener('click', function() {
      // Remove active class from all tabs and content
      document.querySelectorAll('.tabnew, .tab-pane').forEach(item => {
          item.classList.remove('active');
      });

      // Add active class to the clicked tab
      tab.classList.add('active');

      // Show the corresponding content
      const activeTabContent = document.getElementById(tab.getAttribute('data-tab'));
      activeTabContent.classList.add('active');
  });
});




