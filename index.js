const menuOption = document.getElementById("menu-icon");
const dropdownContent = document.querySelector(".ofMenu");
const projectsItem = document.getElementById("projects");
const subDropdownContent = document.querySelector(".sub-dropdown-content");



menuOption.addEventListener("click", function() {
  dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";
});

projectsItem.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the menuOption click event

  subDropdownContent.style.display = subDropdownContent.style.display === "none" ? "block" : "none";
});

// Close the dropdown when clicking outside of it
document.addEventListener("click", function(event) {
  if (!menuOption.contains(event.target)) {
    dropdownContent.style.display = "none";
    subDropdownContent.style.display = "none";
  }
});

