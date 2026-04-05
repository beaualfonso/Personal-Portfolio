let skills = document.getElementById("skills-container");
let education = document.getElementById("education-container");
let experience = document.getElementById("experience-container");

let skillsTab =document.getElementById("skills-tab");
let experienceTab = document.getElementById("experience-tab");
let educationTab = document.getElementById("education-tab");

skills.style.display = 'flex';
skillsTab.classList.add('active-tab');

function clearActiveTab(){
    skillsTab.classList.remove('active-tab');
    educationTab.classList.remove('active-tab');
    experienceTab.classList.remove('active-tab');
}

function showSkills()
{
    skills.style.display = 'flex';
    education.style.display = 'none';
    experience.style.display = 'none';
    clearActiveTab();
    skillsTab.classList.add('active-tab');
}

function showEducation()
{
    skills.style.display = 'none';
    education.style.display = 'flex';
    experience.style.display = 'none';
    clearActiveTab();
    educationTab.classList.add('active-tab');
}

function showExperience()
{
    skills.style.display = 'none';
    education.style.display = 'none';
    experience.style.display = 'flex';
    clearActiveTab();
    experienceTab.classList.add('active-tab');
}