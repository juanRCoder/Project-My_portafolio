const boxAbout = document.querySelector('.skills_about_box');
const boxSkills = document.querySelector('.skills_about_contenedor');

window.addEventListener('scroll', ()=>{
    let scrollY = window.scrollY;
    // console.log(scrollY);
    setTimeout(() => {

        // section: ABOUT * SKILLS
        if (scrollY >  400 && scrollY <  1130) {
            boxAbout.classList.add('skills_about_box_change');
            boxSkills.classList.add('skills_about_contenedor_change');
        } else {
            boxAbout.classList.remove('skills_about_box_change');
            boxSkills.classList.remove('skills_about_contenedor_change');
        }

        // section: PROJECTS
    }, 100);
});

// skills_about_contenedor