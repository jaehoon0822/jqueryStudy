/** 이벤트 처리 */
/** bind method */
/*
$( function() {
    $( 'img').bind( 'mouseenter', handleMouseEnter )
             .bind( 'mouseout', handleMouseOut );

    function handleMouseEnter( e ) {
        $( this ).css( { 
            "border": 'thick solid red',
            'opacity': '0.5'
        } );
    }

    function handleMouseOut( e ) {
        $( this ).css( {
            'border': '',
            'opacity': ''
        });
    }
} )
*/
//
/** 여러 이벤트 타입을 처리하는 핸들러함수의 등록 */
/*
$( function() {
    $( 'img' ).bind( 'mouseenter mouseout', handleMouse );
//  $( 'img' ).bind( 'mouseenter', handleMouse ).bind('mouseout', handlemouse );
// 이처럼 method chaining 을 통해 나타낼수도  있다.
    function handleMouse( e ) {
        var cssData = {
            'border': 'thick solid red';
            'opacity': '0.5'
        }
        if ( e.type === 'mouseout' ) {
            cssData.border = '';
            cssData.opacity = '';
        }
        $( this ).css( cssData );
    }
} );
*/
//
//
/*
$( function() {
    $( 'img' ).bind( {
        'mouseenter': function() {
            $( this ).css( 'border', 'thick solid red' );
        },
        'mouseout': function() {
            $( this ).css( 'border', '');
        }
    } );
} )
*/
//
//
/** 이벤트 핸들러 함수로의 데이터 전달 */
//
/*
$( function() {
    $( 'img:odd' ).bind( 'mouseenter mouseout', 'blue', handleMouse );
    $( 'img:even' ).bind( 'mouseenter mouseout', 'red', handleMouse );

    function handleMouse( e ) {
        var cssData = {
            'border': 'thick solid ' + e.data
        }
        if ( event.type == 'mouseout' ) {
            cssData.border = '';
        }
        $( this ).css( cssData );
    }
} )
*/
// bind method 에 추가 객체를 넘겨주면 제이쿼리는 이벤트 핸들러 함수에서
// Event.data 속성을 통해 이 객체에 접근할 수 있게 해준다.
// 이 기능은 한 함수로 각기 다른 엘리먼트를 처리할 때 유용하다.
// ( 이벤트 핼들러에서 공통 처리를 수행하고 이벤트 데이터에 따라
//   별도의 함수로 코드를 분기하는 경우가 이에 해당할 수 있다. )
// 위의 예제는 data 를 추가한 bind method 를 말한다.

/** 기본 동작 차단 */
//
// 2장에서 설명한 것 처럼 event 중에서 특정 엘리먼트에서 일어날 때
// 기본 동작을 수행하는 이벤트가 있다.
// type 어트리뷰트 값이 submit 인 버튼을 사용자가 클릭할때
// 일어나는 이벤트는 이를 잘 보여준다.
// 버튼이 form 엘리먼트에 들어 있다면, 클릭 이벤트의 기본 동작은
// 브라우저가 폼을 전송하게 하는 것이다.
// 이러한 기본 동작이 일어나지 않게 하려면 preventDefaut()
// 를 사용해야 한다.
/*
$( function() {
    $( 'button:submit' ).bind( 'click', function( e ) {
        e.preventDefault();
    } )
} );
*/
// 이런식으로 차단하는 이유는 이 버튼이 다른동작을 하게 만들기
// 위해서이다. 브라우저가 폼을 전송하지 못하게 막고
// Ajax 로 폼을 전송할 수 있다.
// 위 예제처럼 한줄로된 bind method 를 사용하는 대신
// 아래처럼 사용 가능하다.
/*
$( function() {
    $( 'button:submit' ).bind( 'click', false );
} );
*/
// preventDefault() 를 사용한 듯 동일한 효과를 갖고 있다.
//
/** event handler 함수의 제거 */
//
/*
$( function() {
    $( 'img' ).bind( 'mouseenter mouseout', handlerMouse );
    $( 'img[src*=rose]' ).unbind(); // unbind 를 통해 eventHandler 를 제거

    function handlerMouse( e ) {
        var cssData = { 
            'border': 'blue solid thick',
            'opacity': '0.5'
        }
        if ( e.type == 'mouseout' ) {
            cssData.border = '';
            cssData.opacity = '';
        }

        $( this ).css( cssData );
    }
} );
*/
//
/*
$( function() {
    $( 'img' ).bind( 'mouseenter mouseout', handlerMouse );
    $( 'img[src*=rose]' ).unbind( 'mouseout' ); // unbind 를 통해 mouseout event handler 만 제거

    function handlerMouse( e ) {
        var cssData = { 
            'border': 'blue solid thick',
            'opacity': '0.5'
        }
        if ( e.type == 'mouseout' ) {
            cssData.border = '';
            cssData.opacity = '';
        }

        $( this ).css( cssData );
    }
} );
*/
//
//
/** event handler 함수 내에서의 등록 해제 */
//
/*
$( function() {
    $( 'img' ).bind( 'mouseenter', enterMouse ).bind( 'mouseout', exitMouse );

    var handleCounter = 0;

    function enterMouse( e ) {
        var cssData = {
            'opacity': '0.5'
        }
        
        $( this ).css( cssData );
    }

    function exitMouse( e ) {
        var cssData = {
            'opacity': ''
        };

        $( this ).css( cssData );

        handleCounter++;
        console.log( handleCounter );
        if ( handleCounter == 2 ) {
            $( this ).unbind( e );
        }

    }
} );
*/
//
//
/** handler function 1회 실행 */
// one method 
$( function() {
    $( 'img' ).one( 'mouseenter', mouseEnter ).one( 'mouseout', mouseExit );

    function mouseEnter( e ) {
        $( this ).css( 'opacity', '0.5');
    }

    function mouseExit( e ) {
        $( this ).css( 'opacity', '' );
    }
} )