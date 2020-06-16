$(document).ready(function(){
    var ancho_ventana = $(window).width();
    var alto_cabecera = $('.cabecera').outerHeight(true);
    var alto_banner = $('.banner_superior').outerHeight(true);
    posicion_paralax(alto_cabecera, alto_banner);

    altos_bloques();

    $('.menu_cabecera .opcion').click(function(){
        id = $(this).attr('id');
        destino = id.substr(3);
        scroll = $('#'+destino).position().top - alto_cabecera + 1;
        $("html").scrollTop(scroll);

        $('.menu_cabecera .opcion').removeClass('activa');
        $(this).addClass('activa');
    });

});

$(window).on('load', function(){   
    // $('.loader').fadeOut('slow');
});

$(window).scroll(function (event) {

    var alto_cabecera = $('.cabecera').outerHeight(true);
    var scroll = $(window).scrollTop() + alto_cabecera;
    var opcion = '';
    
    // Posiciones de los contenidos
    inicio = 0;
    sobre_mi = $('#sobre_mi').position().top;
    tecnologias = $('#tecnologias').position().top;
    proyectos = $('#proyectos').position().top;
    // Esta referencia es para activar la opción de los proyectos
    bloques_tecnologias = tecnologias + $('.bloques').position().top;

    if( scroll < sobre_mi )
        opcion = 'go_inicio';
    else if( scroll >= sobre_mi && scroll < tecnologias )
        opcion = 'go_sobre_mi';
    else if( scroll >= tecnologias && scroll < bloques_tecnologias )
        opcion = 'go_tecnologias';
    else
        opcion = 'go_proyectos';

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
    var alto_banner = $('.banner_superior').outerHeight(true);
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