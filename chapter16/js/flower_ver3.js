$( document ).ready( function() {
    
    $.ajaxSetup( {
        timeout: 5000,
        converters: {
            'text html': function( data ) {
                return $( data );
            }
        }
    } );

    $( document ).ajaxError( function( e, jqxhr, settings, errMsg ) {
        $( '#error' ).remove();

        if ( errMsg == 'timeout' ) {
            msg = '요청시간이 경과되었습니다. 다시 시도해 주세요.'
        } else  if ( jqxhr.status == '404' ) {
            msg = '찾을수 없는 문서, 다시 시도해 주세요.'
        }

        $( '<div id=error/>' ).text( msg ).insertAfter( 'h1' );
    });

    $( '<div id=row3 class=drow/>' ).appendTo( '.dtable' );
    $( '#row2, #row3' ).hide();

    let flowerReq = $.get( 'flowers.html', function( data ) {
        let elem = data.filter( 'div' ).addClass( 'dcell' );
        elem.slice( 0, 3 ).appendTo( '#row1' );
        elem.slice( 3 ).appendTo( '#row2' );
    });

    let jsonReq = $.getJSON( 'json/Additionalflowers.json', function( data ) {
        addEach( '#flowerTmpl', data, '#row3' );
    });

    $( '<div id=errorSummary>Please correct the following errors: </div>' )
        .append( '<ul id=errorList></ul>' )
        .insertAfter( 'h1' );

    $( 'form' ).validate({
        heighlight: function( elem, errClass ) {
            $( elem ).addClass( 'invalidElem' );
        },
        unhighlight: function( elem, errClass ) {
            $( elem ).removeClass( 'invalidElem' );
        },
        errorContainer: '#errorSummary',
        errorLabelContainer: '#errorsList',
        wrapper: 'li',
        errorElement: 'div'
    });

    let plurals = {
        astor: 'Astors',
        daffodil: 'Daffodils',
        rose: 'roses',
        peony: 'Peonies',
        primula: 'Primulas',
        snowdrop: 'Snowdrops',
        carnation: 'Carnation',
        lily: 'Lillies',
        orchid: 'Orchids'
    };

    $.when( flowerReq, jsonReq ).then( function() {
        $( 'input' ).each( function( index, elem ) {
            $( elem ).rules( 'add', {
                required: true,
                min: 0,
                digits: true,

                message: {
                    required: plurals[ elem.name ] + '에 숫자를 입력해 주세요.',
                    digits: plurals[ elem.name ] + '에 숫자를 입력해 주세요.',
                    min: plurals[ elem.name ] + '정수를 입력해 주세요.'
                }
            })
        }).change( function( e ) {
            let total = 0;

            $( 'input' ).each( function( index, elem) {
                total += Number( $( elem ).val() );
            })

           $( '#total' ).text( total );
        })
    });

    $( '<a id=left></a><a id=right></a>' ).prependTo( 'form' )
        .addClass( 'arrowButton' )
        .click( handleArrowPress )
        .hover( handleArrowMouse );

    $( '#right' ).appendTo( 'form' );

    let total = $( '#buttonDIV' )
        .prepend( '<div> Total Items: <span id=total>0</span></div>')
        .css( {
            clear: "both",
            padding: "5px"
        } );

        $( '<div id=bbox />').appendTo( 'body' ).append( total );
    
    function handleArrowMouse( e ) {
        let position = e.type == 'mouseenter' ?
            '0px -50px' : '0px 0px';
        
        $( this ).css( {
            'bakcground-position': position,
        } )
    }

    function handleArrowPress( e ) {
        let elemSequence = [ 'row1', 'row2', 'row3' ],
            visibleRow = $( 'div.drow:visible' ),
            // visibleRowIndex = $.inArray( visibleRow.attr( 'id' ), elemSequence ),
            visibleRowIndex = inArray( visibleRow.attr( 'id' ), elemSequence ),
            targetRowIndex;
        
            console.log( visibleRowIndex )
        if ( e.target.id == 'left' ) {
            targetRowIndex = visibleRowIndex - 1;
            if ( targetRowIndex < 0 ) {
                targetRowIndex = elemSequence.length - 1;
            }
        } else if ( e.target.id == 'right' ) {
            targetRowIndex = ( visibleRowIndex + 1 ) % elemSequence.length;
        }

        visibleRow.fadeOut( 'fast', function() {
            $( '#' + elemSequence[ targetRowIndex ] ).fadeIn( 'fast' );
        });
    }


    function inArray( id ,arr ) {
        var result;
        arr.map( function( val, index, arr ) {
            if ( val  ==  id  ) {
                result = index;
            }
        })
        return result;
    }

    function addHandlebars( addHtml, data ) {
        let source = $( addHtml ).html(),
            template = Handlebars.compile( source ),
            html = template( data );
        return html;
    }

    function addEach( addHtml, data, target ) {
        let len,
            i;
        
        for ( i = 0, len = data.length; i < len; i += 1 ) {
            $( addHandlebars( addHtml, data[ i ] ) ).appendTo( target );
        }
    }
});