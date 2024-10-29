const submitButton = document.getElementById(`submit`)
const skills=document.getElementById(`skills`) as HTMLElement

submitButton?.addEventListener(`click` , ()=> {
    if(skills.style.display === `none`){
    skills.style.display =`block`
    }else {
    skills.style.display = `none`
    }
    });