jQuery(document).ready(function() {

    var contentHeight = jQuery('.docs-container .content').height();
    var sidemenuHeight = jQuery('#section-list').height();

    var SidemenuSize = function() {
        if (contentHeight < sidemenuHeight) {
            jQuery('.docs-container .content').css(
            {'min-height': sidemenuHeight + 20 + 'px'}
            );
        }
    };

    jQuery(document).ready(function() {SidemenuSize();});

    jQuery('#toggle-sidenav a').click(function(evt) {
        jQuery('#sidenav-icon').toggleClass('open');
        jQuery('#section-list').animate({height: 'toggle'},200);
        if ((jQuery('#sidenav-icon').attr('class')) == 'open') {
            jQuery('#toggle-sidenav a').attr('aria-expanded', 'true');
            jQuery('#exp-menu-header').html('Sections menu for module');
        } else {
            jQuery('#toggle-sidenav a').attr('aria-expanded', 'false');
            jQuery('#exp-menu-header').html('Toggle sections menu for module');
        }
        evt.stopPropagation();
        return false;
    });
    jQuery('body').click(function() {
        if ((jQuery('#module-name-toggle').is(':visible')) &&
            (jQuery('#section-list').is(':visible'))) {
            jQuery('#sidenav-icon').toggleClass('open');
            jQuery('#section-list').animate({height: 'toggle'},200);
            jQuery('#toggle-sidenav a').attr('aria-expanded', 'false');
        }
    });
});
