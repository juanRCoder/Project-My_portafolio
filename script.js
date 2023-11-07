$(document).ready(function() {
    const boxAbout = $('.skills_about_box');
    const boxSkills = $('.skills_about_contenedor');
    const project = $('.click_project');
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

    $(window).scroll(function() {
        let scrollY = $(this).scrollTop();
            if (scrollY > 400 && scrollY < 1130) {
                boxAbout.addClass('skills_about_box_change');
                boxSkills.addClass('skills_about_contenedor_change');
            }
            else {
                boxAbout.removeClass('skills_about_box_change');
                boxSkills.removeClass('skills_about_contenedor_change');
            }
    });
});