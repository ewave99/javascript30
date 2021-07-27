window.addEventListener ( "keydown", event => {
    const audio = document.querySelector ( `audio[data-key="${event.keyCode}"]` );
    
    if ( ! audio ) {
        return;
    }

    audio.currentTime = 0;
    audio.play ();

    const key = document.querySelector ( `.key[data-key="${event.keyCode}"` );

    if ( ! key ) {
        return;
    }

    key.classList.add ( "playing" );
} );

window.addEventListener ( "keyup", event => {
    const key = document.querySelector ( `.key.playing[data-key="${event.keyCode}"` );

    if ( ! key ) {
        return;
    }

    key.classList.remove ( "playing" );
} );

const sequence = "ASSASAJS";

function playSequence ( sequence, index = 0 ) {
    if ( index < sequence.length ) {
        var e = document.createEvent ( "HTMLEvents" );

        e.keyCode = sequence [ index ].charCodeAt ();

        e.initEvent ( "keydown", false, true );
        
        window.dispatchEvent ( e );

        e = document.createEvent ( "HTMLEvents" );

        e.keyCode = sequence [ index ].charCodeAt ();

        e.initEvent ( "keyup", false, true );
        
        window.dispatchEvent ( e );
    }

    if ( index < sequence.length - 1 ) {
        setTimeout ( () => playSequence ( sequence, index + 1 ), 200 );
    }
}
