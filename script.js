// Option 5: Welcome message
window.onload = function () {
  alert("Welcome to my CV page!");
};

// Option 2: Show/Hide Skills
function toggleSkills() {
  var skills = document.getElementById("skills");
  if (skills.style.display === "none") {
    skills.style.display = "block";
  } else {
    skills.style.display = "none";
  }
}

// Option 3: Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Option 4: Add Skill
function addSkill() {
  var input = document.getElementById("newSkill");
  var skill = input.value;

  if (skill !== "") {
    var p = document.createElement("p");
    p.textContent = skill;
    document.getElementById("skills").appendChild(p);
    input.value = "";
  }
}
