//From here for navbar (Line no : 1 - 16)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

  //this code for proper functioning of navbar
$('.nav-link').click(function() {
    $('.active').removeClass('active');
});





//For image menu
// Add click event listener to menu nav items
$('.menu-nav-item').click(function() {
    // Remove active class from all menu nav items
    $('.menu-nav-item').removeClass('active');
    // Add active class to clicked menu nav item
    $(this).addClass('active');
    // Get the data-menu attribute value of clicked menu nav item
    var menu = $(this).attr('data-menu');
    // Hide all menu lists
    $('.menu-list').hide();
    // Show the menu list with the matching data-menu attribute value
    $('.menu-list[data-menu="' + menu + '"]').show();
});