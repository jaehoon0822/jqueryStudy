$( document ).ready(function( e ) {

    // let fNames = [ 'Carnation', 'Lily', 'Orchid' ],
    //     fRow = $( '<div id="row3" class="drow" />')
    //         .appendTo( 'div.dtable' );
    //     fTemplate = $( '<div class="dcell"><img/><label/><input/></div>');

    // for ( var i = 0; i < fNames.length; i += 1 ) {
    //     fTemplate.clone()
    //         .appendTo( fRow )
    //         .children()
    //         .filter( 'img' )
    //         .attr( 'src', 'image/' + fNames[ i ].toLowerCase() + '.png' )
    //         .end()
    //         .filter( 'label' )
    //         .attr( 'for', fNames[ i ].toLowerCase() )
    //         .text( fNames[ i ])
    //         .end()
    //         .filter( 'input' )
    //         .attr( {
    //             name: fNames[ i ].toLowerCase(),
    //             value: 0,
    //             required: 'required'
    //         } )
    // }


    /** 리펙터링 2 ------------------------------------------------- */
    $( '<div id=row3 class=drow />' ).appendTo( '.dtable' );
    
    $( '#row2, #row3' ).hide();

    $.ajaxSetup({
        timeout: 5000,
        converters: {
            'text html': function( data ) {
                return $( data );
            }
        }
    })

    $.get( 'flowers.html', function( data, status, jqxhr ) {
        let elem = data.filter( 'div' ).addClass( 'dcell');
        elem.slice( 0, 3 ).appendTo( '#row1' );
        elem.slice( 3 ).appendTo( '#row2' );

        /** 리펙터링 1의 inputchange 를 ajax 통신이후에 동작하도록 ajax 내부에 추가 */
        // 여기서 재미있는상황이 발생한다.
        // 아래의 $.JSONget 을 통해 json 을 가져오고 row3 에 element 를
        // 생성하게 만든 코드에서는 이 change event 가 발생하지 않는다.
        // 이유는 지금 현재의 get 을 통해 생성한 코드 이후에
        // 작성되었기 때문이다.
        // ( 이부분은 더 공부해야 할것이 예전에 보았던 책에서
        //  비동기 코드가 처리되는 과정이 순서대로 실행되지 않는다는 내용을 본것 같다.
        //  이는 확실한 것이 아니니 나중에 더 알아봐야 겠다.)
        // 실제로 row3 의 input 은 total 에 등록되지 않는다.
        // 만약 전부 이벤트가 등록되게 하려면 마지막 ajax 를 부른 
        // $.JSONget 부분에 추가하면 될것이다.
        
        // $( 'input' ).change( function( e ){
        //     let total = 0,
        //         len = $( 'input' ).length,
        //         i,
        //         num;
        //     console.log( 'change' );

        //     // ** 내가 짠 코드 **
        //     //
        //     for ( i = 0; i < len; i += 1 ) {
        //         // get() 은 해당하는 HTMLElement 를 반환한다.
        //         // 이 말은 jQuery 객체가 아니며,  순수 DOM element 이다.
        //         // 그래서 val() 을 사용하지 않고 value 로 값을 불러온다.
        //         num = $( 'input' ).get( i ).value;

        //         // 이렇게 불러온 값은 number 가 아니다.
        //         // string 이므로,  Number 를 사용하여
        //         // 해당 값을 숫자로 변환한다.
        //         total += Number( num );
        //     }

        //     // ** 책의 code 
        //     // 더 간결하네..
        //     // 적응하려면 멀었다.
        //     //
        //     // $( 'input' ).each( function( index, elem ) {
        //     //     total += Number( elem.val() );
        //     // });

        //     $( '#total' ).text( total );
        // } )
        // ----------------------------------------------------------------------------------
    });

    $.getJSON( 'json/Additionalflowers.json', function( data ) {
        console.log( data );
        addEach( '#flowerTmpl', data, '#row3' );

        /** 리팩토링 1 의 change 코드이다 */
        // 위의 설명과 같이 마지막 통신이 이루어지는 부분에
        // 추가했다. 보면 알겠지만 target 이 잘 작동하는 것을 볼수 있다.
        $( 'input' ).change( function( e ){
            let total = 0,
                len = $( 'input' ).length,
                i,
                num;
            console.log( 'change' );

            // ** 내가 짠 코드 **
            //
            for ( i = 0; i < len; i += 1 ) {
                // get() 은 해당하는 HTMLElement 를 반환한다.
                // 이 말은 jQuery 객체가 아니며,  순수 DOM element 이다.
                // 그래서 val() 을 사용하지 않고 value 로 값을 불러온다.
                num = $( 'input' ).get( i ).value;

                // 이렇게 불러온 값은 number 가 아니다.
                // string 이므로,  Number 를 사용하여
                // 해당 값을 숫자로 변환한다.
                total += Number( num );
            }

            // ** 책의 code 
            // 더 간결하네..
            // 적응하려면 멀었다.
            //
            // $( 'input' ).each( function( index, elem ) {
            //     total += Number( elem.val() );
            // });

            $( '#total' ).text( total );
        } )
    });


    $( '<a id=left></a><a id=right></a>' ).prependTo( 'form' )
        .addClass( 'arrowButton' )
        .click( handleArrowPress )
        .hover( handleArrowMouse );

    $( '#right' ).appendTo( 'form' );

    /** 리펙터링 2 end ------------------------------------------------- */

    let total = $( '#buttonDIV' )
        .prepend( '<div>Total Items: <span id=total>0</span></div>')
        .css( {
            clear: 'both',
            padding: '5px'
        } );

    $( '<div id=bbox />')
        .appendTo( 'body' )
        .append( total );
    
    /** 리펙터링 1 의  input change -------------------------- */
    // 리펙터링 1 의 input change 이다.
    // 이는 기존의 리펙터링 1 에서 작동했지만,
    // 리펙터링 2 에서 ajax 로 데이터를 불러오게 되면서
    // 작동하지 않게 된다.
    // 이유는 ajax 를 통해 해당 데이터를 불러오는 과정이
    // 비동기적으로 이루어지기때문이다.
    // 이러한 비동기로 인해 data 처리과정이 event queue 에 
    // 저장되고 호출스택에서의 과정이 전부 처리이후에
    // event queue 에 있는 작업을 하나씩 실행한다.
    // 여기서 아래의 input change 는 event queue 가 아닌
    // 호출스택의 코드로써,
    // data 가 불러와지지 않은 상태의 input 에 event 를 
    // 처리하는 꼴이 되어 버린다.
    // 즉, input 이 없는 상태에서 input 이벤트를 작성한 것이다.
    // 호출스택에서 처리될때는 input element 가 존재하지 않다.
    // 하지만 ajax 에서 data 를 불러온후 처리된 이후에는
    // input 이 존재한다.
    // 명심하자. ajax 를 통해 만들어지는 element 는
    // ajax 에서 처리가 이루어진후 event 등록해야 한다.

    // $( 'input' ).change( function( e ){
    //     let total = 0,
    //         len = $( 'input' ).length,
    //         i,
    //         num;
    //     console.log( 'change' );

    //     // ** 내가 짠 코드 **
    //     //
    //     for ( i = 0; i < len; i += 1 ) {
    //         // get() 은 해당하는 HTMLElement 를 반환한다.
    //         // 이 말은 jQuery 객체가 아니며,  순수 DOM element 이다.
    //         // 그래서 val() 을 사용하지 않고 value 로 값을 불러온다.
    //         num = $( 'input' ).get( i ).value;

    //         // 이렇게 불러온 값은 number 가 아니다.
    //         // string 이므로,  Number 를 사용하여
    //         // 해당 값을 숫자로 변환한다.
    //         total += Number( num );
    //     }

    //     // ** 책의 code 
    //     // 더 간결하네..
    //     // 적응하려면 멀었다.
    //     //
    //     // $( 'input' ).each( function( index, elem ) {
    //     //     total += Number( elem.val() );
    //     // });

    //     $( '#total' ).text( total );
    // } )

$( document ).ajaxError( function( e, jqxhr, settings, errMsg ) {
    $( '#error' ).remove();
    let msg = '에러가 발생했습니다. 다시 시도해주세요.';

    if ( errMsg == 'timeout' ) {
        msg = '요청 시간이 경과됐습니다. 다시 시도해주세요.'
    } else if ( jqxhr.status == 404 ) {
        msg = '파일을 찾을 수 없습니다.';
    }

    $( '<div id=error/>' ).text( msg )
        .insertAfter( 'h1' );
} ).ajaxSuccess( function() {
    $( '#error' ).remove();
} ); 


function handleArrowMouse( e ) {
    let propValue = e.type == 'mouseenter' ?
        '-50px 0px' : '0px 0px';
    $( this ).css( 'background-position', propValue );
}

function handleArrowPress( e ) {
    let elemSequence = [ 'row1', 'row2', 'row3' ],
        visibleRow = $( 'div.drow:visible' ),
        visibleRowIndex = $.inArray( visibleRow.attr( 'id' ), elemSequence ),
        targetRowIndex;

    if ( e.target == 'left' ) {
        targetRowIndex =  visibleRowIndex - 1;
        if ( targetRowIndex < 0 ) {
            targetRowIndex = elemSequence.length - 1;
        }
    } else {
        targetRowIndex = ( visibleRowIndex + 1 ) % elemSequence.length;
    }
    visibleRow.fadeOut( 'fast', function() {
        $( '#' + elemSequence[ targetRowIndex ] ).fadeIn( 'fast' ) ;
    } );
}

function addHandlebar( addHTML, data ) {
    let source = $( addHTML ).html(),
        template = Handlebars.compile( source ),
        html = template( data );
        return html;
}

function addEach( addHTML, data, target ) {
    let i,
        len;
    
        console.log( 'dataLength: ' + data.length );
    for ( i = 0, len = data.length ; i < len; i += 1) {
        console.log( data [ i ] );
        $( addHandlebar( addHTML, data[ i ] ) ).appendTo( target );
    }
}

})