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


    // animacion en formulario de solicitud
    $('.input_container').on('mousedown', function() {
        $(this).toggleClass('input_container_change');
    });


    // contando la cantidad de caracteres en el textarea
    $('#textarea').on('input', function() {
        const maxLength = parseInt($(this).attr('maxlength'));
        const currentLength = $(this).val().length;
        const charactersLeft = maxLength - currentLength;
        const contador = $('#contadorCaracteres');

        contador.text((maxLength - charactersLeft) + '/' + maxLength);

        if (charactersLeft < 0) {
            contador.css('color', 'red');
        } else {
            contador.css('color', ''); // Restablecer el color predeterminado
        }
    });
});

