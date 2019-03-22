
console.log( pugCompile({
    name: 'jaehoon'
}) )


$( document ).ready( function() {


    var fNames = [ 'Carnation', 'Lily', 'Orchid' ],
        fRow = $( '<div id=row3 class=drow/>').appendTo( 'div.dtable' ),
        fTemplate = $( '<div class=dcell><img/><label/><input/></div>' );

    for ( var i = 0, len = fNames.length; i < len; i += 1 ) {
        fTemplate.clone().appendTo( fRow ).children()
            .filter( 'img' ).attr( 'src', './image/' + ( fNames[ i ].toLowerCase() ) + '.png' ).end()
            .filter( 'label' ).attr( 'for', fNames[i].toLowerCase() )
                .text( fNames[ i ] ).end()
            .filter( 'input' ).attr( {
                name: fNames[ i ].toLowerCase(),
                value: 0,
                required: 'required'
            } );
    }

    $( '<a id=left></a><a id=right></a>' ).prependTo( 'form' )
        .css( {
            'background-image': 'url( ./image/leftarrows.png )',
            'float': 'left',
            'margin-left': '15px',
            display: 'block',
            width: 50,
            height: 50
        } ).click( handleArrowPress ).hover( handleArrowMouse );

       $( '#right' ).css( {
           'background-image': 'url( ./image/rightarrows.png )',
       } ).appendTo( 'form' );

       $( 'h1' ).css( {
           'min-width': 0,
           width: '95%'
       } );

       $( '#row2, #row3' ).hide();

       $( '#oblock' ).css( {
           'float': 'left',
           'display': 'inline',
           border: 'thin black solid'
       } );

       $( 'form' ).css( {
           'margin-left': 'auto',
           'margin-right': 'auto',
           width: 885 
       } );

       var total = $( '#buttonDIV' )
            .prepend( '<div>Total Items: <span id="total">0</span></div>' )
            .css( {
                clear: 'both',
                padding: '5px'
            } );

       $( '<div id=bbox />' ).appendTo( 'body' ).append( total ).css( 'clear: left' );

       $( 'input' ).change( function( e ) {
           var total = 0;
           $( 'input' ).each( function( index, elem ) {
               total += Number( $( elem ).val() );
           } );

           $( '#total' ).text( total );
       } )

       function handleArrowMouse( e ) {
            var propValue = e.type == 'mouseenter' ? '-50px 0px' : '0px 0px';
            $( this ).css( 'background-position', propValue );
       }

       function handleArrowPress( e ) {
            var elemSequence = [ 'row1', 'row2', 'row3' ];
            var visibleRow = $( 'div.drow:visible' );
            var visibleRowIndex = jQuery.inArray( visibleRow.attr( 'id' ), elemSequence )

            var targetRowIndex;
            if ( e.target.id == 'left' ) {
                targetRowIndex = visibleRowIndex - 1;
                if ( targetRowIndex < 0 )
                    targetRowIndex = elemSequence.length - 1
            } else {
                targetRowIndex = ( visibleRowIndex + 1 ) % elemSequence.length; 
            }

            visibleRow.fadeOut( 'fast', function() {
                $( '#' + elemSequence[ targetRowIndex ] ).fadeIn( 'fest' );
            } );
       }
} );


