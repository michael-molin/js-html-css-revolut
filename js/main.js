$(document).ready(function() {

    //  ESERCIZIO CREATO CON AGGIUNTA CLASSE ACITVE (DISPLAY: NONE/BLOCK)
    // $('.menu-item').click(function() {
    //     if ($(this).children('.dropdown-menu').is(':visible')) {
    //             $('.dropdown-menu').removeClass('active');
    //         }  else {
    //             $('.dropdown-menu').removeClass('active');
    //             $(this).children('.dropdown-menu').addClass('active');
    //         }
    // });




    // ESERCIZIO CREATO CON SLIDEUP SLIDEDOWN
    $('.menu-item').click(function() {
        if ($(this).children('.dropdown-menu').is(':visible')) {
                $('.dropdown-menu').slideUp(300);
            } else {
                $('.dropdown-menu').slideUp(300);
                $(this).children('.dropdown-menu').slideDown(300);
            }
    });






});
