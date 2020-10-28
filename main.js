$(document).ready(function() {

    // intercetto il click sull'icona "next"
    $('.next i').click(function() {

        // recupero l'immagine corrente
        var img_corrente = $('img.active');
        // recupero il pallino corrente
        var pallino_corrente = $('span.active');

        // tolgo la classe active all'immagine corrente
        img_corrente.removeClass('active');
        // tolgo la classe active al pallino corrente
        pallino_corrente.removeClass('active');

        // verifico se esiste un'immagine successiva
        if(img_corrente.next('img').length) {
            // c'è un elemento successivo
            // assegno la classe active all'immagine successiva
            img_corrente.next('img').addClass('active');
            // assegno la classe active al pallino successivo
            pallino_corrente.next('span').addClass('active');
        } else {
            // non c'è un'immagine successiva
            // assegno la classe active alla prima immagine
            $('.slides img:first-child').addClass('active');
            // assegno la classe active al primo pallino
            $('.bullets span:first-child').addClass('active');
        }
    });

    // intercetto il click sull'icona "prev"
    $('.prev i').click(function() {
        // recupero l'immagine corrente
        var img_corrente = $('img.active');
        // recupero il pallino corrente
        var pallino_corrente = $('span.active');

        // tolgo la classe active all'immagine corrente
        img_corrente.removeClass('active');
        // tolgo la classe active al pallino corrente
        pallino_corrente.removeClass('active');

        // verifico se esiste un'immagine precedente
        if(img_corrente.prev('img').length) {
            // c'è un'immagine precedente
            // assegno la classe active all'immagine precedente
            img_corrente.prev('img').addClass('active');
            // assegno la classe active al pallino precendete
            pallino_corrente.prev('span').addClass('active');
        } else {
            // non c'è un elemento precedente
            // assegno la classe active all'ultima immagine
            $('.slides img:last-of-type').addClass('active');
            // assegno la classe active all'ultimo pallino
            $('.bullets span:last-child').addClass('active');
        }
    });

});
