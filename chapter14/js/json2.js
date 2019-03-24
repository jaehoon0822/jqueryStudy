
var data = { 
    contents: [
    { name: 'Astor', product: 'astor', stocklevel: '10', price: 2.99 },
    { name: 'Daffodil', product: 'daffodil', stocklevel: '12', price: 1.99 },
    { name: 'Rose', product: 'rose', stocklevel: '2', price: 4.99 },
    { name: 'Peony', product: 'peony', stocklevel: '0', price: 1.50 },
    { name: 'Primula', product: 'primula', stocklevel: '1', price: 3.12 },
    { name: 'Snowdrop', product: 'snowdrop', stocklevel: '15', price: 0.99 }
    ]
};

var plurals = {
    astor: 'Astors',
    daffodil: 'Daffodil',
    rose: 'Roses',
    peony: 'Peonies',
    primula: 'Primulas',
    snowdrop: 'snowdrops',
};

addHandlebars( '#flowerTmpl', dataSlice( data, 'contents', 0, 3), '#row1' );
addHandlebars( '#flowerTmpl', dataSlice( data, 'contents', 3 ), '#row2' );

$( '<div id="errorSummary">Please correct the following errors: </div>' )
    .append( '<ul id="errorsList"></ul>')
    .hide()
    .insertAfter( 'h1' );

$( 'form' ).validate( {
    highlight: function( element, errorClass ) {
        $( element ).addClass( 'invalidElem' );
    },
    unhighlight: function( element, errorClass ) {
        $( element ).removeClass( 'invalidElem' );
    },
    errorContainer: '#errorSummary',
    errorLabelContainer: '#errorsList',
    wrapper: 'li',
    errorElement: 'div'
} );

$.validator.addMethod( 'stock', function( value, elem, args ) {
    return Number( value ) <= Number( args.data.sotcklevel );
}, function( args ) {
    return '요청한 품목은 ' + $( args.element ).val() + ' 개의 ' + plurals[ args.data.product ] + ' 이며, ' +
           '현재 재고는 ' +  args.data.stocklevel + ' 개 입니다. '
})

$( 'input' ).each( function( index, elem ) {
    $( elem ).rules( 'add', {
        min: 0,
        stock: {
            element: elem,
            data: data.contents[ index ],
            index: index
        }
    } );
}).change( function( e ) {
    $( 'form' ).validate().element( $( e.target ) );
})

function addHandlebars( source, data, appendID ) {
    var template,
        html;
    
    source = $( source ).html();
    template = Handlebars.compile( source );
    html = template( data );
    $( appendID ).append( html );
    
}

function dataSlice( data, name, startNum, endNum ){
   var newObj = new Object();
   newObj[ name ] = Array.prototype.slice.call( data[ name ], startNum, endNum ); 
   return newObj;
}