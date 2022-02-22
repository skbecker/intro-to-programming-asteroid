const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer'); 
const copyright = document.createElement('p');
copyright.textContent = `Summer Becker ${thisYear}`;
footer.appendChild(copyright);
let skills = ["BPMN 2.0", "PHP", "Javascript", "HTML", "CSS"];
const skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');
let skill = '';
for (let i = 0; i < skills.length; i++) {
    skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}
