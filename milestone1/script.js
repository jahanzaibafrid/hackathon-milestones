var toogleButton = document.getElementById("toggle-skills\"");
var skills = document.getElementById("skills");
toogleButton === null || toogleButton === void 0 ? void 0 : toogleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
