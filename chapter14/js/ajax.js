$( document ).ready( function() {
    $( '<button>Ajax</button>' ).appendTo( '#buttonDIV' )
        .click( function( e ) {
            $.get( 'flower.html', function( data ) {
                var elem = $( data ).filter( 'div' ).addClass( 'dcell' );
                elem.slice( 0, 3).appendTo( '#row1' );
                elem.slice( 3 ).appendTo( '#row2' );
            })
            e.preventDefault();
        });
} )