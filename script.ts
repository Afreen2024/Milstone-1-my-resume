const toggle=document.getElementById('toggle') as HTMLButtonElement
const skill=document.getElementById('skill') as HTMLElement


toggle.addEventListener('click',()=>{
    if(skill.style.display === 'none'){
        skill.style.display='block'
    }
    else{
        skill.style.display='none'
    }
});