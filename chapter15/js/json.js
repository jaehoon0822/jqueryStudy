
var row1 = sliceData( data, 'contents', 0, 3 );
var row2 = sliceData( data, 'contents', 3 );

handlebarsTmpl( '#flowerTmpl', row1, '#row1' );
handlebarsTmpl( '#flowerTmpl', row2, '#row2' );

$( 'input' ).focus( handleFormFocus ).blur( handleFormFocus );

var total = $( '#buttonDIV' )
    .prepend( '<div>Total Items: <span id="total">0</span></div>')
    .css( {clear: 'both', padding: '5px'} );

var rulesList = new Object();

for ( var i = 0, len = data.contents.length; i < len; i++ ) {
    rulesList[ data.contents[ i ].product ] = {
        min: 0,
        max: data.contents[ i ].stocklevel
    }
}

// var customMessages = new Object();

// for ( var i = 0, len = data.contents.length; i < len; i += 1) {
//     customMessages[ data.contents[ i ].product ] = {
//         max: '본 제품은 제고가 ' + data.contents[ i ].stocklevel + '개 있습니다. ',
//         min: '주문 개수는 1개 이상입니다.'
//     } 
// }

$( '<div id=bbox/>' ).appendTo('form').append(total).css( 'clear', 'left' );

$( 'input' ).change( function( e ) {
    var total = 0;
    $( 'input' ).each( function( index, elem ) {
        total += Number( $(elem).val());
    });
    $( '#total' ).text(total);
});

$( 'form' ).validate({
    highlight: function( element, errorClass ) {
        $( element ).add( $( element ).parent() )
            .addClass('invalidElem');
    },

    unhighlight: function( element, errorClass ) {
        $( element ).add( $( element ).parent() ).
            removeClass('invalidElem');
    },
    errorElement: 'div',
    errorClass: 'errorMsg',
    // rules: rulesList,
    // messages: customMessages
});

// $.validator.addMethod('stock', function( value, elem, args) {
//     return Number(value) <= Number(args);
// }, '현재 재고가 없습니다.');

$.validator.addMethod( 'stock', function( value, elem, args) {
    return Number( value ) <= Number( args );
}, function( args ) {
    return '현재 ' + args + '개 만큼 재고가 있습니다.';
})

$( 'input' ).each( function( index, elem) {
    $( elem ).rules( 'add', {
        min: 0,
        stock: data.contents[ index ].stocklevel
    })
}).change( function( e ) {
    $( 'form' ).validate().element( $( e.target ) );
})

// $( 'input' ).each( function( index, elem) {
//     $( elem ).rules( 'add', {
//         min: 10,
//         max: 20,
//         messages: {
//             min: '최소주문은 10개부터 가능합니다.',
//             max: '주문 가능량은' + data.contents[index].stocklevel + '입니다.'
//         }
//     });
// });

$.validator.addClassRules({
    flowerValidation: {
        min: 0,
        max: 100,
        required: true,
        digits: true,
    }
});

// $( 'input' ).addClass( 'flowerValidation' )
//     .change( function( e ) {
//         $( 'form' ).validate().element( $( e.target ) );
//     })

// $( '#row1 input' ).each( function( index, elem ) {
//     $( elem ).rules( 'add', {
//         min: 10,
//         max: 20
//     })
// })

// $( 'input' ).each( function( index, elem ) {
//     var rules = {
//         required: true,
//         min: 0,
//         max: data.contents[ index ].stocklevel,
//         digits: true
//     }
//     if ( Number( data.contents[index].price ) > 3.00 ) {
//         rules.max--;
//     }
//     $( elem ).rules( 'add', rules );
// });

$( 'input' ).change( function( e ) {
    $( 'form' ).validate().element( $( e.target ));
    console.log( e.target.getAttribute( 'data-stock' ));
})

function handleFormFocus( e ) {
    var borderVal = e.type === 'focus' ? 'medium solid green' : "";
    $( this ).css( 'border', borderVal );
}

function sliceData( data, dataName, startNum, endNum) {
    var newData = new Object();
    newData[ dataName ] = Array.prototype.slice.call( data[ dataName ], startNum, endNum );
    return newData;
}

function handlebarsTmpl( sourceID, data, addHtml ) {
    var source = $( sourceID ).html();
    var tamplate = Handlebars.compile( source );
    var html = tamplate( data );
    $( html ).appendTo( addHtml );
}