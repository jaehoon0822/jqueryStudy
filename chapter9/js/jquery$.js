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
/*
$( function() {
    $( 'img' ).one( 'mouseenter', mouseEnter ).one( 'mouseout', mouseExit );

    function mouseEnter( e ) {
        $( this ).css( 'opacity', '0.5');
    }

    function mouseExit( e ) {
        $( this ).css( 'opacity', '' );
    }
} )
*/
//
/** live method 를 통한 이벤트 핸들러 자동 등록 */
//
// bind method 의 한가지 단점은 DOM 에 새로 추가하는
// 새 element 에는 관련 event handler 함수가 지정되지 않는다는 점이다.
// < 이벤트 핸들러의 설정후 엘리먼트 추가 >
/*
$( function() {
    $( 'img' ).bind( {
        mosueenter: function( e ) {
            $( this ).css( 'opacity', '0.5' );
        },
        mouseout: function( e ) {
            $( this ).css( 'opacity', '' );
        }
    } );

    $( '#row1' ).append( $("<div class='dcell'/>") );

    $( '#row1' ).children( ':last-child' )
                .append( '<img src="./image/lily.png"/>' )
                .append( '<label for="lily">Lily:</label>' )
                .append( '<input name="lily" value="0" required b>');
} );
*/
// 위의 script 에서는 bind method 를 사용해 전체 img 에 event handler
// 를 추가했다. 하지만 새로 append 한 element 에서는
// 해당 event handler 가 작동하지 않는다.
// 이는 당연할 결과이다. 왜냐하면 append 하기전 element 
// 들만 event handler 를 추가하였기 때문이다.
// 이를 변경하려만 다음과 같이 다시 bind 해주어야 한다.

/*
$( function() {
    $( 'img' ).bind( {
        mouseenter: function( e ) {
            $( this ).css( 'opacity', '0.5' );
        },
        mouseout: function( e ) {
            $( this ).css( 'opacity', '' );
        }
    } );

    $( '#row1' ).append( $("<div class='dcell'/>") );

    $( '#row1' ).children( ':last-child' )
                .append( '<img src="./image/lily.png"/>' )
                .append( '<label for="lily">Lily:</label>' )
                .append( '<input name="lily" value="0" required b>');

    // 추가 안된 element 를 다시 bind 한다.

    $( '#row1>.dcell:last-child>img' ).bind( {
        mouseenter: function( e ) {
            $( this ).css( 'opacity', '0.5' );
        },
        mouseout: function( e ) {
            $( this ).css( 'opacity', '' );
        }
    } )
        
} );
*/
//
// 하지만 제이쿼리는 이런 작업을 쉽게 할 수 있는 선택자에
// 부합하는 새로운 엘리먼트가 DOM 에 추가할때
// 자동으로 이벤트를 등록해주는 method 가 있다. 
//
// live( eventType, data, function )
// live( eventType, function )
// live( map )
//
// die()
// die( eventType )
//
// delegate( selector, eventType, function )
// delegate( selector, eventType, data, function )
// delegate( selector, map )
//
// undelegate()
// undelegate( selector, eventType )
//

// live method 는 엘리먼트에 직접 핸들러 함수를 추가하지 
// 않는다. 실제로 live method 는 document 객체에 이벤트 핸들러를
// 생성하고 선택자에 부합하는 element 가 일으키는 event 가 있는지
// 검사한다. live method 는 이런 event 를 찾아내고
// event handler 함수를 호출한다.
// 하지만 평상시 사용할 때는 live method 가 열심히
// 새 엘리먼트를 추가한다는 생각하는게 더 편하다. 
//
// 책에서는 live method 를 이야기했지만..
// 이는 1.7 이하의 jquery 에서만 통용된다.
// bind 와 live, delegate 를 한번에 사용할 수 있는
// method 가 추가되었다.
// 1.7 이상부터는 on method 를 쓰기 권한다.
/*
$( function() {
    $( '.drow' ).on( {
        mouseenter: function( e ) {
            $( this ).css( 'opacity', '0.5' );
        },
        mouseout: function( e ) {
            $( this ).css( 'opacity', '' );
        }
    }, 'img' );

    $( '#row1' ).append( $("<div class='dcell'/>") );

    $( '#row1' ).children( ':last-child' )
                .append( '<img src="./image/lily.png"/>' )
                .append( '<label for="lily">Lily:</label>' )
                .append( '<input name="lily" value="0" required b>');

} )
*/
// 위의 on method 를 사용하여 나중에 row 에 추가된 element 도
// event 가 작동되는 것을 보았을 것이다.
// live method 와 같이 작동하는 die 역시 존재하지만,
// 이는 1.7 이후부터 off 로 대체된다.
//
// off( eventType, selector, handler)
// off( eventType, selector ),
// off( event ),
// off()
/*
$( function() {
    var mouseEnter = function( e ) {
            $( this ).css( 'opacity', '0.5' );
    },
        mouseExit = function( e ) {
            $( this ).css( 'opacity', '' );
    };
 

    $( '.drow' ).on( {
        'mouseenter': mouseEnter, 
        'mouseout': mouseExit 
    }, 'img' );

    $( '#row1' ).append( $("<div class='dcell'/>") );

    $( '#row1' ).children( ':last-child' )
                .append( '<img src="./image/lily.png"/>' )
                .append( '<label for="lily">Lily:</label>' )
                .append( '<input name="lily" value="0" required b>');

    $( '.drow' ).off( {
        'mouseenter': mouseEnter, 
        'mouseout': mouseExit 
    }, 'img');

} );
*/
// off 를 사용하면 매우 편리하게 사용가능하다.

/** delegate */
// live method 의 문제점 중 하나는 핸들러 함수가 호출되기전에
// event 가 DOM 계층구조를 타고 document 까지 전파되야 한다는 점이다.
// delegate method 를 사용하면 문서에서 이벤트리스너가
// 위치를 장소를 지정해 이벤트 전파를 좀 더 직접적으로 제어할 수 
// 있다.
/*
$( function() {
    $( '#row1' ).delegate( 'img', {
        mouseenter: function( e ) {
            $( this ).css( 'opacity', '0.5' );
        },
        mouseout: function( e ) {
            $( this ).css( 'opacity', '' );
        }
    }) ;

    $( '#row1' ).append( $("<div class='dcell'/>") );

    $( '#row1' ).children( ':last-child' )
                .append( '<img src="./image/lily.png"/>' )
                .append( '<label for="lily">Lily:</label>' )
                .append( '<input name="lily" value="0" required b>');

    $( '#row2' ).append( $("<div class='dcell'/>") );

    $( '#row2' ).children( ':last-child' )
                .append( '<img src="./image/carnation.png"/>' )
                .append( '<label for="carnation">Carnation:</label>' )
                .append( '<input name="carnation" value="0" required b>');
} )
*/
// 이는 매우 유용하다.
// DOM 의 영역을 지정하고, 지정된 영역내의 element 를
// 선택하는것은 document 로 bubbling 되는 것보다
// 속도가 빨라지며, element 선택도 영역별로 쉽게 가능하다.
// 보면 알겠지만 이역시 on method 와 비슷한 구석이 많다.
// on method 는 bind, live, delegate 3가지의 방법을
// 하나로 합친 method 라고 생각하는 것 이 좋을것 같다.
// ( delegate method 를 제거하려면 undelegate method 를 사용해야 한다.
//   만약 die 를 사용하면 제거되지 않는다. die 는 오직 live 만 제거한다.)

/** event handler 의 수동호출 */
// event handler 를 직접 호출할 수 있는 method 가 존재한다.
//
// trigger( eventType )
// trigger( Event )
// triggerHandler( eventType )
//
/*
$( function() {

    $( 'img' ).on( {
        mouseenter: function( e ) {
            $( this ).css( 'opacity', '0.5' );
        },
        mouseout: function( e ) {
            $( this ).css( 'opacity', '' );
        }
    } );

    $( '<button>Trigger</button>' ).appendTo( '#buttonDIV' )
        .on( 'click', function( e ) {
        $( '#row1 img' ).trigger( 'mouseenter' );
            e.preventDefault()
        } )

} );
*/
//
//
/** event 객체의 활용 */
//
// event 객체를 사용해 다른 엘리먼트의 이벤트 핸들러를
// 호출할 수도 있다.
/*
$( function() {

    $( '#row1 img' ).bind( 'mouseenter', function( e ) {
        $( this ).css( 'border', 'thick solid red' );
        console.log( 'mouseenter' );
    });

    $( '#row2 img' ).bind( 'mouseenter', function( e ) {
        $( this ).css( 'border', 'thick solid blue' );
        $( '#row1 img' ).trigger( e );
    } );

    //$( '#row2 img' ).trigger( 'mouseenter' );
} );
*/
// bind method 를 사용해 mouseenter event 에 반응해
// row1 element 의 img 자손에 빨간색 border 를 추가하게 했다.
// 마찬가지로 row2 의 img element 도 파란색 border 를
// 적용하는데 이 handler 에서는 다음 명령을 추가했다.
// $( '#row1 img' ).trigger( e );
// 이렇게 하면 mouse 가 row2 img element 위로 올라올때
// row1 img elemnt 에도 같은 이벤트 타입의 핸들러가 실행된다.
// 이 방식은 현재 처리중인 event 와 같은 타입의 event hendler 를
// 호출할때 편리하지만 evnet type 을 지정하더라도 이와 같은
// 효과를 누릴 수 있다.

/** triggerHandler method 의 활용  */
//
// triggerhandler method 는 event 의 기본 동작을 수행하지 않고
// DOM 을 통한 event bubbling 도 일으키지 않은 채
// handler 함수를 호출한다.
// 더불어 trigger method 와 달리 triggerHandler 는 jQuery 객체의
// 첫번째 element 의 handler 함수만 호출한다.
// triggerhandler 가 다른 method 와 구별되는 또 다른 차이점은
// handler 함수가 반환하는 결과를 그대로 반환한다는 것이다.
// ( 이 말은 method chaining 형태로 사용할 수 없다는 뜻이다.)
//
/*
$( function() {
    $( '#row1 img' ).on( 'mouseenter', function( e ) {
        $( this ).css( 'opacity', '0.5' );
    });
    $( '#row2 img' ).on( 'mouseenter', function( e ) {
        $( this ).css( 'opacity', 'o.5' );
        $( '#row1 img' ).triggerHandler( 'mouseenter' ); // Astor 만 적용
    });
} );
*/
//
/** event 단축 method 활용 */
//
// 제이쿼리는 자주 사용하는 event 의 event handler 를 등록하는데
// 사용할 수 있는 편의 method 를 제공한다.
// 이 절에는 fucntion 인자를 사용하는 이들 단축 method 를 
// 정리했다.
/*
$( function() {

    $( 'img' ).mouseenter( function( e )  {
        $( this ).css( 'border', 'thick solid red' );
    } );

} );
*/
// 위의 예제는 밑의 예제와 같다.
/*
$( function() {

    $( 'img' ).bind( 'mouseenter', function( e ) {
        $( this ).css( 'border', 'thick solid red' );
    } );

} );
*/
// bind 와 다른 단축 method 는 trigger 대신 사용가능하다.
// 이때 단축 method 에 인자 없이 호출하면 trigger 와 같은
// 효과가 난다.
//
/*
$( function() {

    $( 'img' ).mouseenter();

} )

$( function() {
    
    var toggle = false;

    $( 'img' ).mouseenter( function( e ) {
        $( this ).css( 'opacity', '0.5' );
    } )

    $( '<button>Trigger</button>').appendTo( '#buttonDIV' )
                                  .click( function( e ) {
                                      if ( !toggle ) {
                                        $( 'img' ).trigger( 'mouseenter' );
                                        toggle = true;
                                      }
                                      else if ( toggle ) {
                                        $( 'img' ).css( 'opacity', '' );
                                        toggle = false;
                                      }
                                      e.preventDefault();
                                  } );
} );
*/
/** 문서 event  */
// document 객체에 적용할 수 있는 jquery 단축 method
//
// load( function ) => load event 문서의 하위 엘리먼트
//                     리소스가 로드될때 실행
//
// ready( function ) => 문서의 엘리먼트를 처리하고 DOM 을
//                      을 사용할 준비가 끝나는 시점에 실행
//
// unload( function ) => unload evnet 에 해당하며,
//                       사용자가 page 를 떠날때 발생
//
// ready method 는 주의 깊게 살펴봐야 한다.
// 이 method 는 DOM Event 에 속하지는 않지만 
// jQuery 를 사용할때 더 할 나위 없이 유용하다.

/** browser event 단축 method 활용 */
//
// window 객체를 대상으로 하는 브라우저 event 들이다.
//
// error( function ) => error event 이며 이미지 같은 외부 리소스를
//                      불러오다가 문제가 생길때 발생
//
// resize( function ) => resize event 에 해당하며, 브라우저
//                       창 크기가 바뀔때 발생
//
// scroll( function ) => scroll event 에 해당하며,
//                       스크롤바를 사용할때 실행된다.
// 

/** mouse evnet 단축 method 활용 */
//
// mouse event 처리 할 수 있게 jQuery 가 제공하는 단축 method 이다.
//
// click( function ) => click event 에 해당하며,
//                      mouse button 을 누르고 손을 뗄때 발생
// dbclick( function ) => dbclick event 에 해당하며 사용자가 
//                        두번 연속으로 빠르게 마우스를 누르고 손을
//                        뗄때 발생
//
// focusin( function ) => focusin event 에 해당하며,
//                        element 에 focus 가 위치할때 발생
//
// focusout( function ) => focusout event 에 해당하며,
//                         포커스를 잃을때 발생
//
// hover( function )           | => 마우스가 엘리먼트 위로 올라오거나
// hover( function, function)  |    벗어날때 실행
//                             |    한 함수만 지정하면 마우스가 올라오는
//                             |    이벤트와 벗어나는 이벤트 모두에
//                             |    해당 함수가 핸들러로 사용
//
// mousedown( function ) => mousedown event 에 해당,
//                          element 위에서 마우스 버튼을 누를때
//                          실행
// -----------------------------------------------------------------
// mouseenter( function ) => mouseenter event 에 해당,
//                           엘리먼트가 차지하는 영역안으로 마우스가
//                           들어올때 실행
//
// mousemove( function ) => mousemove event 에 해당하며 엘리먼트가
//                          차지하는 화면 영역 내에서 마우스가
//                          움직일때 실행
//
// mouseleave( function ) => mouseleave event 에 해당,
//                           엘리먼트가 차지하는 영역을 마우스가
//                           벗어날때 실행
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// mouseout( function ) => mouseout event 에 해당,
//                         엘리먼트가 차지하는 영역을 마우스가
//                         벗어날때 실행
//
// mouseover( function ) => mouseover event 에 해당,
//                          엘리먼트가 차지하는 영역에 마우스가
//                          들어올때 실행            
//-----------------------------------------------------------------
// mouseup( function ) => mouseup event 에 해당,
//                        엘리먼트 위에서 마우스 버튼의 손을
//                        뗄때 발생
//
//
// hover 의 예제를 보자.
/*
$( function() {

    $( 'img' ).hover( handlerMouseEnter, handlerMouseLeave );

    function handlerMouseEnter( e ) {
        $( this ).css( 'border', 'thick solid red' );
    };

    function handlerMouseLeave( e ) {
        $( this ).css( 'border', '' );
    };
    
} );
*/
// 이는 마치 아래와 같이 움직인다.
//
/*
$( function() {

    var hover = function( jObj, enter, leave ) {
        jObj.mouseenter( enter ).mouseleave( leave );
    };

    function handlerMouseEnter( e ) {
        $( this ).css( 'border', 'thick solid red' );
    };

    function handlerMouseLeave( e ) {
        $( this ).css( 'border', '' );
    };

    hover( $( 'img' ), handlerMouseEnter, handlerMouseLeave);

} );
*/
// 즉 hover 는 mouseenter 와 mouseleave 에 handler 를 등록하는
// 편의 method 이다.
//
/** form event 단축 method */
//
// blur( function ) => blur event 에 해당,
//                     element 가 focus 를 잃을때 실행
//
// change( function ) => change event 에 해당,
//                       element 의 값이 바뀔때 실행
//  
// focus( function ) => focus event 에 해당,
//                      element 에 focus 가 생길때 발생
//
// select( function ) => select event 에 해당,
//                       element 값을 선택할때 실행
//
// submit( function ) => submit event 에 해당,
//                       사용자가 폼을 전송할때 실행 
//

/** keybord event 단축 메소드의 활용 */
//
// keydown( function ) => keydown event 에 해당,
//                        사용자가 키를 누를때 실행
// 
// keypress( function ) => keypress event 에 해당,
//                         사용자가 키를 누르고 손을 뗄 때 실행
//
// keyup( function ) => keyup event 에 해당,
//                      사용자가 키를 뗄때 실행