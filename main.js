$(document).ready(function() {

    // intercetto il click sull'icona "next"
    $('.next i').click(function() {
        // recupero l'immagine corrente
        var img_corrente = $('img.active');

        // tolgo la classe active all'immagine corrente
        img_corrente.removeClass('active');

        // verifico se esiste un'immagine successiva
        if(img_corrente.next('img').length) {
            // c'è un elemento successivo
            // assegno la classe active all'immagine successiva
            img_corrente.next('img').addClass('active');
        } else {
            // non c'è un elemento successivo
            // assegno la classe active alla prima immagine
            $('.slides :first-child').addClass('active');
        }
    });

    // intercetto il click sull'icona "prev"
    $('.prev i').click(function() {
        // recupero l'immagine corrente
        var img_corrente = $('img.active');

        // tolgo la classe active all'immagine corrente
        img_corrente.removeClass('active');

        // verifico se esiste un'immagine precedente
        if(img_corrente.prev('img').length) {
            // c'è un elemento precedente
            // assegno la classe active all'immagine precedente
            img_corrente.prev('img').addClass('active');
        } else {
            // non c'è un elemento precedente
            // assegno la classe active all'ultima immagine
            $('.slides img:last-of-type').addClass('active');
        }
    });

});
