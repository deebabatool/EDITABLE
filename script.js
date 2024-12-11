"use strict";
//Get References to the form and Display Area
const form = document.getElementById('resume-form');
const resemeDisplayElement = document.getElementById('resume-display');
//Handle Form Submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    //collect input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    //Generate the resume
    const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3>personal Information </h3>
<p><b>Name:</b> <span contenteditable='true'>${name}</span></p>
<p><b>Email:</b> <span contenteditable='true'>${email}</span></p>
<p><b>Phone:</b><span contenteditable='true'>${phone}</span></p>
<h3>Education</h3>
<p contenteditable='true'>${education}</p>

<h3>Experience</h3>
<p contenteditable='true'>${experience}</p>

<h3>Skills</h3>
<p contenteditable='true'>${skills}</p>

`;
    //Display the Generated Resume
    if (resemeDisplayElement) {
        resemeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume Display element is missing');
    }
});
