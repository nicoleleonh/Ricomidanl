
$(function(){

        $('[data-toggle="tooltip"]').tooltip()

        $('#enviarCorreo').click(function () {
        alert('El correo fue enviado correctamente...');
        })

        $('.underline').on("dblclick",function () {
        $(this).css("color","red");
        })

        $('.card-title').click(function () {
        $('.card-text').toggle();
        })

    
    });