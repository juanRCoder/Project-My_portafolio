$(document).ready(function() {
    
    $(document).on('click', function(event) {
        // Verifica si el clic ocurrió fuera de la caja y si la caja está girada
        if (!$(event.target).closest('.caja').length && $('.caja').hasClass('girada')) {
            $('.caja').removeClass('girada');
        }
    });

    // cambio de tarjeta (frontal/trasera)
    $('.caja').on('click', function() {
        $(this).toggleClass("girada");
    })
});
