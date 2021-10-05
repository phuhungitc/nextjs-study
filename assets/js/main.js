var App = {
    fresaos: function () {
        jQuery('.nav-link').click(function () {
            setTimeout(function () {
                AOS.refresh();
            },1000)
        })
    },
    menumobile: function () {
        jQuery('.hamburger_btn').click(function(e){
            e.preventDefault();
            jQuery('.hamburger-icon').toggleClass('open');
            jQuery('#menu_mobile').toggleClass('open');
            jQuery('.overlay_menu').toggleClass('is-active');
        });
        jQuery('.overlay_menu').click(function () {
            jQuery('.hamburger-icon').removeClass('open');
            jQuery('#menu_mobile').removeClass('open');
            jQuery('.overlay_menu').removeClass('is-active');
        });
    },
    scrollmenu: function () {
        jQuery(".menu_site li a[href^='#']").click(function(e) {
            e.preventDefault();
            let $id = jQuery(this).attr('href');
            jQuery('html, body').animate({
                scrollTop: jQuery($id).offset().top - 75
            }, 100);
        });
    }
};

jQuery(document).ready(function () {
    App.fresaos();
    App.menumobile();
    App.scrollmenu();
    AOS.init({
        duration: 800
    });
});
