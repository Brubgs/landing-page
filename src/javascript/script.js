$(document).ready(function () {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    })

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activesSectionIndex = 0

        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i){
            const section = $(this)
            const sectionTop = section.offset().top - 96
            const sectionBottom = sectionTop + section.outerHeight()

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activesSectionIndex = i
                return false
            }
        })

        navItems.removeClass('active')
        $(navItems[activesSectionIndex]).addClass('active')
    })

    ScrollReveal().reveal('#cta', {
        origin: 'right',
        duration: 1500,
        distance: '40%'
    })

    ScrollReveal().reveal('#banner', {
        delay: 500
    })

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '30%',
        delay: 100
    })

    ScrollReveal().reveal('#testimonials_chef', {
        delay: 400
    })

    ScrollReveal().reveal('#testimonials_content', {
        origin: 'left',
        duration: 1500,
        distance: '40%'
    })
    
})