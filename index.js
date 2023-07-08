const projectsItem = document.getElementById("projects");
const subDropdownContent = document.querySelector(".sub-dropdown-content");

projectsItem.addEventListener("click", function() {
  subDropdownContent.style.display = subDropdownContent.style.display === "none" ? "block" : "none";
});
