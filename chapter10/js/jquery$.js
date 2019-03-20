/** hide, show */

/** 기본 효과의 활용 */
/*
$( function() {

    $( '<button>Hide</button><button>Show</button>' ).appendTo( '#buttonDIV' )
        .click( function( e ) {
            if ( $( e.target ).text() == 'Hide' ) {
                $( '#row1 div.dcell' ).hide();
            } else {
                $( '#row1 div.dcell' ).show();
            }
            e.preventDefault();
        } );

} );
*/
//
/*
$( function() {
    var row1 = document.getElementById( 'row1' ),
        child = row1.children,
        htmlElem = {
            button: String() + '<button id="hide" >Hide</button>'
                             + '<button id="show" >Show</button>' 
        },
        buttondiv,
        hide,
        show;

    buttondiv = document.getElementById( 'buttonDIV' );

    buttondiv.innerHTML = htmlElem.button;
    // hide = document.getElementById( 'hide' );
    // show = document.getElementById( 'show' );

    // hide.addEventListener( 'click', function( e ) {

    //     for ( var i = 0, len = child.length; i < len; i += 1 ) {
    //         child[ i ].style.display = 'none';
    //     }
    //         e.preventDefault()
    // });
        
    // show.addEventListener( 'click', function( e ) {
            
    //     for ( var i = 0, len = child.length; i < len; i += 1 ) {
    //         child[ i ].style.display = 'table-cell';
    //     }
    //         e.preventDefault();

    //     });
    //
    // 위는 내가 생각한 방법이지만..
    // 아래는 다른 방법대로 만들어 보았다.
    // 아래가 더 code 도 적고 편리한 방법인것 같다.

    buttondiv.addEventListener( 'click', function( e ) {

        if ( e.target.textContent == 'Hide' ) {

            for ( var i = 0, len = child.length; i < len; i += 1 ) {
                child[ i ].style.display = 'none';       
            }
        
        } else if ( e.target.textContent == 'Show') {

            for ( var i = 0, len = child.length; i < len; i += 1 ) {
                child[ i ].style.display = 'table-cell';       
            }

        }

        e.preventDefault();
    } )

} );
*/
//
// 뭐 순수 DOM 의 코드를 상당히 줄여준다는점이 매력적이기는 하다.
//
/** element toggle */
//
// toggle method 를 사용하면 element 가 보이거나 안보이는 상태를
// 토글할 수 있다.
//
/*
$( function() {

    $( '<button>Toggle</buttom>' ).appendTo( '#buttonDIV' )
        .click( function( e ) {

            $( 'div.dcell:first-child' ).toggle();
            e.preventDefault();

        } );
} )
*/
/*
$( function() {

    var buttondiv = document.querySelector( '#buttonDIV' ),
        htmlElem = {
            button: String() + '<button id="toggle" >Toggle</button>'
        },
        row1 = document.getElementById( 'row1' ),
        row2 = document.getElementById( 'row2' ),
        toggle = false;
    
    buttondiv.innerHTML = htmlElem.button;
    buttondiv.addEventListener( 'click', function( e ) {
        if ( e.target.textContent == 'Toggle' && !toggle ) {
           for ( var i = 0, len = row1.children.length; i < len; i += 1 ) {
               if ( i == 0 ) {
                    row1.children[ i ].style.display = 'none';
                    row2.children[ i ].style.display = 'none';
                    toggle = true; 
                    e.preventDefault();
                    break;
               }
           }
        } else if ( e.target.textContent == 'Toggle' && toggle ) {
           for ( var i = 0, len = row1.children.length; i < len; i += 1 ) {
               if ( i == 0 ) {
                    row1.children[ i ].style.display = 'table-cell';
                    row2.children[ i ].style.display = 'table-cell';
                    toggle = false; 
                    e.preventDefault();
                    break;
               }
           }
        }
    } );

} );
*/
//
//
/** 단방향 toggle */
//
// toggle method 로 boolean 인자를 넘겨주면 가시성 토글하는 방향을
// 제한할 수 있다.
// 인자로 true 를 넘겨주면 숨겨진 엘리먼트만 표시
// ( 보이는 엘리먼트는 사라짐 ) 된다.
// false 를 넘겨주면 반대로 보이는 엘리먼트만 사라지고,
// 숨겨진 엘리먼트는 영향을 받지 않는다.
// 저자는 이 메소드의 유용함을 잘 모르겠다고 한다.
// 책의 완성도를 위해 추가했다고 하니
// 그냥 알아두도록 하자.
// 
/*
$( function() {

$( '<button>Toggle</button>' ).appendTo( '#buttonDIV' )

    .click( function( e ) {
        $( 'div.dcell:first-child' ).toggle( true );
        e.preventDefault();
    } )

} ) 
*/
//
/** 엘리먼트 가시성 애니메이션 */
//
// show, hide, toggle method 로 시간을 넘겨주면 element 를 보여주고
// 숨기는 과정에서 애니메이션을 적용할 수 있다.
// 엘리먼트를 일정 시간 동안 서서히 보여주거나 숨긴다.
//
// ----------------------------------------
//  밀리초 | 시간을 밀리초로 지정한다 .   |
// ----------------------------------------
//  show   | 600 밀리초에 해당하는 상수값 |
// ----------------------------------------
//  fast   | 200 밀리초에 해당하는 상수값 |
// ----------------------------------------
//
//
/*
$( function() {
    $( '<button>Toggle</button>' ).appendTo( '#buttonDIV' )
        .click( function( e ) {
            $( 'img' ).toggle( 'fast', 'linear' );
            e.preventDefault();
        } );
} );
*/
//
// 예제에서는 fast 값을 상요해 문서에 있는 img 엘리먼트의
// 가시성을 200밀리초 동안 전환하게 한다.
//
// 이 예제에서는 추가 인자도 사용해 easing 방식이라
// 부르는 애니메이션 방식을 지정했다.

//  easing 함수로는 swing 과 linear 를 사용할 수 있다.
// ----------------------------------------------------------------
// . swing 방식을 상요하면 애니메이션이 느리게 시작했다가 빨라지고
//   끝날 시점이 다가오면 다시 느려진다.
// ----------------------------------------------------------------
// . linear 방식은 애니메이션이 일어나는 동안 계속 같은 속도를
//   유지한다.
// ----------------------------------------------------------------
//
//
/** 효과 콜백의 허용 */
//
// show, hide, toggle method 의 인자로 함수를 지정해
// 이들 method 가 효과를 마친 후 함수를 호출할 수 있다.
// 
/*
$( function() {
    var hiddenRow = '#row2',
        visibleRow = '#row1';
    
    $( hiddenRow ).hide();
    
    $( "<button>Switch</button>" ).insertAfter( '#buttonDIV' )
        .click( function( e ) {
            hideVisibleElement();
            e.preventDefault();
        } );
    
    function hideVisibleElement() {
        $( visibleRow ).hide( 'fast', showHiddenElement );
    }

    function showHiddenElement() {
        $( hiddenRow ).show( 'fast', switchRowVariables );
    }

    function switchRowVariables() {
        var temp = hiddenRow;
        hiddenRow = visibleRow;
        visibleRow = temp;
    }

} );
*/
//
/*
$( function() {
    var visibleRow = '#row1',
        hiddenRow = '#row2';

    $( hiddenRow ).hide();

    $( '<button>Switch</button>').appendTo( '#buttonDIV' )
        .click( function( e ) {
            $( visibleRow ).hide( 'fast', function() {
                $( hiddenRow ).show( 'fast', function() {

                    var temp = visibleRow;
                    visibleRow = hiddenRow;
                    hiddenRow = temp;

                } );
            } );
 
            e.preventDefault();
 
        } );
});
*/
//
//

/** 반복 효과의 생성 */
//
//
/*
$( function() {

    $('<button>Toggle</button>').insertAfter( '#buttonDIV button' )
        .click( function( e ) {
            preformEffect();
            e.preventDefault();
        } );

    // function preformEffect() {
    //     $( 'h1' ).toggle( 'slow', preformEffect );
    // }    
//  ==> 이러한 방식으로 콜백 함수를 지정할때는 주의해야 한다.
//      이렇게 하면 결국 자바스크립트 호출 스택이 모두 채워져
//      스트립트가 실행을 중단하는 문제가 생길 수 있다.
//      ( 호출스택이 전부 채워지려면 정말 많은 작업들이 있어야 한다. 
//        이 좀처럼 일어나기 어렵다. )
//      하지만, 이러한 점에 대해서 주의할 필요가 있으므로
//      다음과 같이 변경한다.
     function preformEffect() {
         setTimeout( function() { 
             $( 'h1' ).toggle( 5000,  preformEffect ) 
         }, 1);
     }
} );
*/
//
//
/** slide effect 의 활용 */
//
// 제이쿼리는 화면에서 엘리먼트를 슬라이드하는 효과를
// 몇가지 제공한다.

// ----------------------------------------------------------------------
// slideDown()                          | 아래로 슬라이드해 엘리먼트를
// slideDown( time, function )          | 보여준다.
// slideDown( time, easing, function)   |
//------------------------------------------------------------------------
// slideUp()                            | 위로 슬라이드해 엘리먼트를
// slideUp( time, function )            | 숨긴다.
// slideUp( time, easing, function )    |
//------------------------------------------------------------------------
// slideToggle()                        | 위, 아래로 슬라이드해 엘리먼트
// slideToggle( time, function )        | 가시성을 토글한다.
// slideToggle( time, easing, function )|
// -----------------------------------------------------------------------

// 이들 method 는 element 에 세로방향으로 슬라이드 애니메이션을
// 적용한다.
/*
$( function() {
    $( '<button>Toggle</button>').insertAfter( '#buttonDIV button' )
        .click( function( e ) {

            $( 'h1' ).slideToggle( 'fast' );
            e.preventDefault();

        } );
} );
*/
/** fadeOut 효과의 활용 */
//
// fadeOut()
// fadeOut( timespan )
// fadeOut( timespan, function )
// fadeOut( timespan, easing, function )
// fadein()
// fadein( timespan )
// fadein( timespan, function )
// fadein( timespan, easing, function )
// fadeTo( timespan, opacity )
// fadeTo( timespan, opacity, easing, fucntion )
// fadeToggle()
// fadeToggle( timespan )
// fadeToggle( timespan, function )
// fadtToggle( timespan, easing, function )
//
//
/*
$( function() {

$( '<button>Toggle</button>' ).insertAfter( '#buttonDIV button' )
    .click( function( e ) {
        $( 'img' ).fadeToggle();
        e.preventDefault();
    } )

} )
*/
//
// 
/** 특정 불투명도 값으로의 페이드 */
//
// fadeTo method 를 사용해 특정 불투명도 값으로 엘리먼트가
// 페이드되게 할수 있다.
// 이때 레이아웃 가시성은 변경되지 않으므로
// 앞에서 본것과 같이 페이지 레이아웃이 부자연스럽게
// 변경되지는 않는다.
/*
$( function() {
    $( '<button>Fade</button>').insertAfter( '#buttonDIV button' )
        .click( function( e ) {
            $( 'img' ).fadeTo( 'fast', 0 );
            e.preventDefault();
        } )
} )
*/
//
//
/** custom 효과 */