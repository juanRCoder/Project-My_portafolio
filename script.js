$(document).ready(function() {
    const boxAbout = $('.skills_about_box');
    const boxSkills = $('.skills_about_contenedor');
    const project = $('.md');
    const projectExit = $('.project_modal_content_exit');
    const modal = $('.project_modal');

    $('.project_modal').hide();
    project.on('click', () => {
        $('.project_modal').show();
    });

    projectExit.on('click', () => {
        $('.project_modal').hide();
    })

    modal.click((event) => {
        if (event.target === modal[0]) modal.hide();
    })  
});
