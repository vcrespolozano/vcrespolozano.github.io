const year = new Date().getFullYear();

$(document).ready(function(){
    var alto_cabecera = $('.cabecera').outerHeight(true);
    var alto_banner   = $('.banner_superior').outerHeight(true);
    posicion_paralax(alto_cabecera, alto_banner);

    altos_bloques();

    // Fijamos el año
    $('#year').html(year);

    $('.menu_cabecera .opcion').click(function(){
        id      = $(this).attr('id');
        destino = id.substr(3);

        if( destino == 'inicio' )
            scroll = 0;
        else
            scroll  = $('#'+destino).offset().top - alto_cabecera + 1;

        $("html").scrollTop(scroll);

        $('.menu_cabecera .opcion').removeClass('activa');
        $(this).addClass('activa');
    });

});

$(window).on('load', function(){   
    var alto_cabecera = $('.cabecera').outerHeight(true);
    var alto_banner = $('.banner_superior').outerHeight(true);
    posicion_paralax(alto_cabecera, alto_banner);

    altos_bloques();
});

$(window).scroll(function (event) {

    var alto_cabecera = $('.cabecera').outerHeight(true);
    var scroll        = $(window).scrollTop() + alto_cabecera;
    var opcion        = '';
    
    // Posiciones de los contenidos
    inicio      = 0;
    sobre_mi    = $('#sobre_mi').offset().top;
    tecnologias = $('#tecnologias').offset().top;
    proyectos   = $('#proyectos').offset().top;
    plantillas  = $('#plantillas').offset().top;
    // Esta referencia es para activar la opción de las plantillas
    alto_ventana   = $(window).outerHeight(true);
    alto_documento = $(document).outerHeight(true);
    offset_bottom  = alto_documento - alto_ventana;

    if( scroll < sobre_mi )
        opcion = 'go_inicio';
    else if( scroll >= sobre_mi && scroll < tecnologias )
        opcion = 'go_sobre_mi';
    else if( scroll >= tecnologias && scroll < proyectos )
        opcion = 'go_tecnologias';
    else if( scroll >= proyectos && scroll < plantillas && scroll < offset_bottom )
        opcion = 'go_proyectos';
    else
        opcion = 'go_plantillas';

    $('.menu_cabecera .opcion').removeClass('activa');
    $('#'+opcion).addClass('activa');
});

$(window).on('orientationchange', function(){
    var alto_cabecera = $('.cabecera').outerHeight(true);
    var alto_banner = $('.banner_superior').outerHeight(true);
    posicion_paralax(alto_cabecera, alto_banner);

    altos_bloques();
});

$(window).on('resize', function(){
    var alto_cabecera = $('.cabecera').outerHeight(true);
    var alto_banner   = $('.banner_superior').outerHeight(true);
    posicion_paralax(alto_cabecera, alto_banner);

    altos_bloques();
});

function posicion_paralax(alto_cabecera, alto_banner) {

    var top_contenido = alto_cabecera + alto_banner;

    $('body').css('padding-top', top_contenido+'px');
}

// Para que todos los bloques tengan el mismo alto y el efecto de hover se vea bien
function altos_bloques() {

    var alto_bloque = 0;

    $('.bloques .bloque .descripcion_bloque').each(function( index ) {
        if( $(this).outerHeight() > alto_bloque )
            alto_bloque = $(this).outerHeight();
    });

    $('.bloques .bloque .descripcion_bloque').css('min-height', alto_bloque+'px');
}