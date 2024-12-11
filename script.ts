//Get References to the form and Display Area
const form= document.getElementById('resume-form') as HTMLFormElement
const resemeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

//Handle Form Submission
form.addEventListener('submit', (event :Event)=>{
    event.preventDefault();
    //collect input values

const name = (document.getElementById('name')as HTMLInputElement).value
const email = (document.getElementById('email')as HTMLInputElement).value
const phone = (document.getElementById('phone')as HTMLInputElement).value
const education = (document.getElementById('education')as HTMLInputElement).value
const experience = (document.getElementById('experience')as HTMLInputElement).value
const skills = (document.getElementById('skills')as HTMLInputElement).value
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
if(resemeDisplayElement){
    resemeDisplayElement.innerHTML=resumeHTML;

}
else{
    console.error('The resume Display element is missing')
}
})