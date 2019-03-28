$( document ).ready( function() {

Handlebars.registerHelper( 'list', function( data, options ) {
    var row1 = data.slice( 0, 3),
        row2 = data.slice( 3 );
    
    for ( var i of row1 ) {
        $( '#row1' ).append( options.fn( i ) );
    }
    for ( var i of row2 ) {
        $( '#row2' ).append( options.fn( i ) );
    }
});

//     $( '<button>Ajax</button>' ).appendTo( '#buttonDIV' )
//         .click( function( e ) {
//             $.get( 'json/mydata.json', requestData , function( data ) {
//                 // let row1 = jsonSlice( data, 'contents', 0, 3),
//                 //     row2 = jsonSlice( data, 'contents', 3);
//                 // addHandlebars( '#flowerTmpl', row1, '#row1');
//                 // addHandlebars( '#flowerTmpl', row2, '#row2');
//                 addHandlebars( '#flowerTmpl', data );
//             })
//             e.preventDefault();
//         });
// } )

$( 'button' ).get(0).disabled = true;

$.getJSON( 'json/mydata.json', function( data ) {
    addHandlebars( '#flowerTmpl', data );
    $( addHandlebars( '#totalTmpl', data ) ).insertAfter( 'h1' );
    $( 'button' ).get(0).disabled = false;
    $( 'input' ).change( function( e ) {
        let num = 0;
        $( 'input' ).each( function( index, elem) {
            $( '#total' ).text( ( num += Number( $(elem).val()) ) );
        });
    });
})

var toggle = true;

$( 'button' ).click( function( e ) {
    // let formData = $( 'form' ).serialize(),
    //     requestData = {
    //         apples: 2,
    //         oranges: 10
    //     };

    // console.log( formData );

    // $.post( 'http://127.0.0.1:8000', formData, function( data ) {
    //     processServerResponse( data );
    //     console.log( data );
    // })

    if ( toggle ) {
        $ ( '#row1' ).remove();
        $( '#row2' ).remove();
        toggle = false;
    }

    $.getScript( 'js/myscript.js' );
    e.preventDefault();

})

function processServerResponse( data ) {
    let inputElems = $( 'div.dcell' ).hide();
    console.log( data );
    for ( var prop in data ) {
        let filtered = inputElems.has( 'input[name=' + prop + ']')
            .appendTo( '#row1' ).show();
    }

    $( '#buttonDiv, #totalDiv' ).remove();
    $( addHandlebars( '#totalTmpl', data ) ).appendTo( 'body' );

}

function addHandlebars( tmplID, data ) {
    let source = $( tmplID ).html(),
        tmpl = Handlebars.compile( source ),
        html = tmpl( data );

    return html;
}

function jsonSlice( data, name, startNum, endNum ) {
    let newObj = {};
    newObj[ name ] = Array.prototype.slice.call( data[ name ], startNum, endNum );
    return newObj;
}
});