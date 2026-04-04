let skillsVal = false;
let experienceVal = false;
let educationVal = false;

let skills = document.getElementById("skills-container");
let education = document.getElementById("education-container");
let experience = document.getElementById("experience-container");

skills.style.display = 'flex';

function showSkills()
{
    skills.style.display = 'flex';
    education.style.display = 'none';
    experience.style.display = 'none';
}

function showEducation()
{
    skills.style.display = 'none';
    education.style.display = 'flex';
    experience.style.display = 'none';
}

function showExperience()
{
    skills.style.display = 'none';
    education.style.display = 'none';
    experience.style.display = 'flex';
}