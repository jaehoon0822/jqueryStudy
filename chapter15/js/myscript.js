var flowers = [
    ['Astor', 'Daffodil', 'rose'],
    ['Peony', 'Primula', 'Snowdrop'],
    ['Carnation', 'Lily', 'Orchid']
];

$( '<div id="row1"></div>' ).appendTo( 'div.dtable' );
$( '<div id="row3"></div>' ).appendTo( 'div.dtable' );

var template = $( '<div class="dcell"><img/><label/><input/></div>' );

for ( var i = 0; i < flowers.length; i += 1 ) {
    var flowerCell = flowers[ i ];
    console.log( flowerCell)
    for ( var j = 0; j < flowerCell.length; j += 1 ) {
        template.clone().appendTo( '#row' + ( i + 1 ) ).children()
            .filter( 'img' ).attr( 'src', 'image/' + flowerCell[ j ].toLowerCase() + '.png' ).end()
            .filter( 'label' ).attr( 'for', flowerCell[ j ] ).text( flowerCell[ j ] ).end()
            .filter( 'input' ).attr( { name: flowerCell[ j ], value: 0 } )
    }
}