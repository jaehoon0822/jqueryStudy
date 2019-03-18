/** jQuery function  */
/*
jQuery( document ).ready(function(e) {
    jQuery( "img:odd" ).mouseenter(function(e) {
        jQuery( this ).css( "opacity", 0.5 );
    }).mouseout(function(e) {
        jQuery( this ).css( "opacity", 1 );
    });
});
*/
/** jQuery === $ */
/*
$( document ).ready(function() {
    $( "src:odd" ).mouseenter(function(e) {
        $( this ).css( "opacity", 0.5 );
    }).mouseout(function(e) {
        $( this ).css( "opacity", 1 );
    });
});
*/

/** Other library = $ */
/*
jQuery.noConflict();
jQuery( document ).ready( function() {
    jQuery( "src:odd" ).mouseenter( function(e) {
        jQuery( this ).css( "opacity", 0.5 );
    }).mouseout( function(e) {
        jQuery( this ).css( "opacity", 1 );
    });
});
*/
/** Other library = $ | OtherStyle */
/*
var jq = jQuery.noConflict();
jq( document ).ready( function() {
    jq( "src:odd" ).mouseenter( function(e) {
        jq( this ).css( "opacity", 0.5 );
    }).mouseout( function(e) {
        jq( this ).css( "opacity", 1 );
    });
});
*/
/** Other library = $ | OtherStyle */
/*
(function($) {
    function countImgElements() {
        return $( 'img' ).length;
    }

    $( document ).ready(function() {
        console.log(
            '1.Ready function invoked. IMG count: '
            + countImgElements()
        );
        });

    $( document ).ready(
        console.log(
            '2.Ready function invoked. IMG count: '
            + countImgElements()
        )
    );
        $( "img:odd" ).mouseenter(function(e) {
            $( this ).css( "opacity", 0.5 );
        }).mouseout(function(e) {
            $( this ).css( "opacity", 1 );
        });
    })(jQuery);
*/
/** 대체 표기법 활용 */
// 아래는 ready method 를 사용한것과 같은
// 효과를 가진다.
/*
    $( function() {
        $( 'img:odd' ).mouseenter( function(e) {
            $( this ).css( 'opacity', 0.5 )
        }).mouseout( function(e) {
            $( this ).css( 'opacity', 1 )
        });
    } );
*/
// ready event 지연

/*
$.holdReady( true ); // readyEvent 작동을
//                      고정 (중지) 시킨다.

$( document ).ready( function() {
    console.log( "Ready event triggered" );
    $( "img:odd" ).mouseenter( function(e) {
        $( this ).css( 'opacity', 0.5 ); 
    }).mouseout( function( e ) {
        $( this ).css( 'opacity', 1 );
    });
});

setTimeout( function() {
    console.log("Releasing hold");
    $.holdReady( false );
}, 5000); // 5000ms 이후에 function 을 실행시키며
//          $.holdReady 를 false 시킨다.
//          즉 멈추어 있던 ready event 가 실행되며
//          안쪽의 contents 들을 읽어들여
//          작동시킨다.
*/

/** context 를 활용한 선택영역 축소 */
// 기본적으로 해당 element 를 탐색할때 DOM tree 의 처음부터
// 끝까지 search 한다.
// 이는 매우 비효율적으로 탐색범위를 좁힌다면,
// 더욱 빠른 검색이 가능하다.
// 이때 사용하는 방법은 $( selectElem, searchElem ) 으로
// 2번째 인자에 search 범위지정이 가능하다.
/*
$( document ).ready(function() {
   $( "img:odd", ".drow")
   .mouseenter( function(e) {
        $( this ).css( 'opacity', 0.5 );
   } ).mouseout( function(e) {
       $( this ).css( 'opacity', 1 );
   } );
});

*/

/** selector */
/*
$( document ).ready( function() {
    var selector = $( "img:odd").selector; // String 으로 반환
    console.log( "Selector: " + selector ); // img:odd
} );
*/
/** context */
// context attributte 는 jQuery 를 생성할 때
// 사용한 context 의 상세정보를 제공한다.
// if: HTMLElement 하나를 사용했다면 해당 HTMLElement 를 반환한다.
// if: context 를 사용하지 않았거나, HTMLElement 가 여러개라면
//     undefined 값을 반환한다.

$( document ).ready( function() {
    var jq1 = $( 'img:odd' );
    console.log( "No context: " + jq1.context.tagName );
    var jq2 = $( 'img:odd', '.drow');
    console.log( 'Multiple context elements: ' + jq2.context.tagName );
    var jq3 = $( 'img:odd', document.getElementById( 'oblock' ));

    // 중요한건 jquery 선택자를 document.getElementById 로 불러냈다는
    // 것이다. 이는 개별적인 객체 ( 여기서는 #oblock )를 선택하여
    // context 를 지정했다. 이것 말고 다른 context 범위를 정하는 것처럼
    // 문자열로 남겨보았는데, 이는 undefined 가 나왔다.
    // 즉 정확학게 DOM 을 사용하여 select 해야 하는것 같다.

    console.log( 'Single context elements: ' + jq3.context.tagName );
});

/** DOM Object 를 통한 jQuery object 생성 */

// 이 기능은 간단하게 DOM 의 HTMLElement object 또는 HTMLElement object
// 배열을 $ 함수의 인자로 넘겨주면 jQuery 객체를 생성할 수 있다는것이다.
// 이는 매우 유용하며, 비 jQuery library 에서 사용한 HTMLElement object
// 역시 jQuery 객체로 변경 가능하다. ( thirdParty library 를 말한다.)
/*
$( document ).ready( function() {
    var elems = document.getElementsByTagName( 'img' );

    $( elems ).mouseenter( function( e ) {
        $( this ).css( 'opacity', 0.5 );
    } ).mouseout( function( e ) {
        $( this ).css( 'opacity', 1 );
    } );
} ); 
*/
// 모든 이미지에 적용된것을 알수 있다.
// 이는 HTMLElement 객체로 부터 jQuery 객체를 만들수 있다는 것이다.

/** toArray = jQuery 객체의 배열 처리  */
// jQuery 객체는 HTMLElement Object 객체의 배열처럼 처리 가능하다.
// 이 말은 jQuery 가 제공하는 기능을 사용하면
// DOM 에 접근할 수 있다는 뜻이다.
// 
/*
$( document ).ready( function() {
    var elems = $( 'img:odd' ),
        i;

    for ( i = 0, len = elems.length; i < len; i += 1 ) {
        console.log( "Element: " + elems[ i ].tagName + " " + elems[ i ].src );
    }
} );
*/
// jQuery index 및 특정 element 검색

// index method 는 jQuery 객체에서 HTMLElement 의 index 를 찾아준다.
// 
/*
$( document ).ready( function() {
    var elems = $( 'body *' );
    for ( var i = 0; i < elems.length; i += 1 ) {
       if ( elems[ i ].className )
       console.log( 'Elemet:',i ," ", elems[ i ].tagName, elems[ i ].className );
       else if ( elems[ i ].id)
       console.log( 'Elemet:',i ," ", elems[ i ].tagName, elems[ i ].id );
       else
       console.log( 'Elemet:',i ," ", elems[ i ].tagName );
    }
*/
    // DOM API 를 활용한 index 찾기
/*
    var index = elems.index( document.getElementById( "oblock" ) );
    console.log( "Index using DOM element is " + index );

    // jQuery Object 를 활용한 Object
    index = elems.index( $( '#oblock' ) );
    console.log( "Index using jQuery object is " + index );
} );
*/
// index 를 사용하여 해당 값의 index 를 가져올 수 있다.
// get 은 index 의 반대라고 생각하는게 편할것 같다.
// 말 그대로 get 에 들어가는 arguments 는 index number 이다.
/*
$( document ).ready( function() {
    var imgElem = $( 'img:odd' ).get( 1 );
    console.log( 'Element: ', imgElem.tagName, " ", imgElem.src );
} );
*/
// get ( index number ) 를 사용하여 해당 element 를 반환한다.

/** 다중 element 의 수정 및 method 호출 체인 */

// jQuery 를 사용하여 color  를 blue 로 바꾼 예
/*
$( 'label' ).css('color', 'blue');
*/

// DOM API 를 사용하여 color 를 blue 로 바꾼 예
/*
var labelElems = document.getElementsByTagName( 'label' ),
    i;

for ( i = 0, len = labelElems.length; i < len; i += 1) {
    labelElems[ i ].style.color = "blue";
}
*/
// 작업 명령이 jQuery library 로 인해
// 간편해 진다.
// (하지만 사실 이는 jQuery library 의 내장된 코드로 인해
// 작동되므로, 실상 DOM API 를 사용하는것이
// 성능상에 이점이 있다고 한다.
// 그래서 요새는 jQuery 인기가 가라앉은 분위기이지만
// 여전히 cross browser issue 가 존재한다.
// 알고 사용할줄 알아야만 한다. 그러니 DOM 에 대해서도
// 잘 알고 있어야만 한다.)

// jQuery 객체의 좋은 점 중 하나는 API가 부드럽게 이어진다는 점이다.
// 이 말은 객체의 내용을 수정하는 method 를 호출한 후
// 결과 또헌 jQuery 객체라는 뜻이다.
// ( 흔히 이러한 방법을 method chaining 이라 하더라... ) 
/*
$( document ).ready( function() {
    $( 'label' ).css( 'color', 'blue' ).css( 'font-size', '.75em');

    var lableElems = document.getElementsByTagName( 'lable' ),
        i;

        for ( i = 0, len = labelElems.length; i < len; i += 1 ) {
            labelElems[ i ].style.color = 'blue';
            labelElems[ i ].style.fontSize = '.75em';
        }
} );
*/
// method chaining 을 매우 편린한 방법이다.
// 하지만 위의 예제는 for 문을 사용해 쉽게 구현 가능하다.
// 더 복잡한 작업을 살펴보자.

$( document ).ready( function() {
    $( 'label' ).css( 'color', 'blue' )
                .add( 'input[ name!="rose" ]' )
                // add 는 해당 표현식에 해당하는 element 를
                //  jquery object 에 추가한다.
                .filter ( '[ for!="sonwdrop" ]' )
                // filter 는 해당 표현식에 해당하는 element 를
                // jquery object 에서 제거한다.
                .css( 'font-size', '.75em' );

// 위의 jQuery 를 DOM API 로 만든경우

    var elems = document.getElementsByTagName( 'label' ),
        i;

    for ( i = 0, len = elems.length; i < len; i += 1 ) {
        if ( elems[ i ].getAttribute( 'for' ) !=  'snowdrop' ) {
            elems[ i ].style.color = 'blue';
            elems[ i ].style.fontSize  = '1.5em';
        }
    }
    // snowdrap 을 제외한 나머지 fontSize 를 1.5em 으로 만든다.

    elems = document.getElementsByTagName( 'input' );

    for ( i = 0, len = elems.length; i < len; i += 1 ) {
        if ( elems[ i ].getAttribute( 'name' ) != 'rose' ) {
            elems[ i ].style.fontSize  = '1.5em';
        }
    }
    // input name = rose 를 제외한 나머지 fontSize 를 1.5em 으로 만든다.
} );

/** Event 처리 */ 

// 이장을 시작하면서 살펴본 script 를 살펴보면 두개의 method 체인을
// 사용한것을 볼 수 있다.

$( document ).ready( function() {
    $( 'img:odd' ).mouseenter( function( e ) {
        $( this ).css( 'opacity', '0.5' );
    } ).mouseout( function( e ) {
        $( this ).css( 'opacity', '1' );
    } );
} );

// method chain 으로 연결한 두개의 event 가 존재한다.
// mouseenter 와  mouseout 이다.
// 이들 method 는 event 의 handler 를 정의해준다.
// 현재 위의 상황을 보면 이러한 상황이다.

// " img tag 의 홀수인 tag 는 mouseenter 와 mouseout
// event 가 실행되어라. "

// 이는 jQuery 객체의 기능을 활용해
// 선택한 element 모두를 단일 handler method 를 지정하는
// 방법을 보여준다.