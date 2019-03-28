/** 어트리뷰트 및 속성 활용 */
//
//
// attr( name )
// attr( name, value )
// attr( map ) 
// attr( name, function ) 
// removeAttr( name )
// removeAttr( name[] )
// prop( name )
// prop( name, value )
// prop( map )
// prop( name, function )
// removeProp( name )
/*
// attr( name )
$( function() {
    var srcValue = $( 'img' ).attr( 'src' );
    console.log( srcValue ); // ./image/astor.png
} );

// each & attr

$( function() {
    $( 'img' ).each( function( index, elem ) {
        var srcValue = $( elem ).attr( 'src' );
        console.log( 'attributeSRC: ', srcValue );
    } );
} );
*/
/** attr( name, value ) */
/*
$( function() {

//  $( 'img' ).attr( 'src', './image/lily.png' ); => 모든 img 가 변경된다.
    $( 'img' ).first().attr( 'src', './image/lily.png' );

} );
*/
//
/** 여러 어트리뷰트의 설정 */
//
// attr method 인자로 객체를 넘겨주면 한 메소드에서
// 여러 어트리뷰트를 설정할 수 있다.
/*
$( function() {
    var attrValues = {
        src: './image/lily.png',
        style: 'border: thick solid red'
    };

    $( 'img' ).attr( attrValues );
} )
*/
/** 어트리뷰트 값의 동적 설정 */
//
// attr method 의 인자로 함수를 넘겨서 attr 값을 마음대로
// 제어 가능하다.
/*
$( function() {
    $( 'img' ).attr( 'src', function( index, oldVal ) {
        if ( oldVal.indexOf( 'rose' ) > -1 ) {
            return './image/lily.png';
        } else if ( $( this ).closest( '#row2' ).length > 0 ) {
            return './image/carnation.png';
        }
    });
} );
*/
// 인자로 정의한 함수는 처리중인 엘리먼트의 인덱스와 기존 어트리뷰트 값을
// 인자로 전달 받는다.
// 이 함수내에서 this 변수는 현재 처리중인 HTMLElement 로 설정된다.
// 
/** 어트리뷰트의 제거 */
//
/*
$(function() {

    $( 'img' ).attr( 'style', 'border: thick solid red');
    $( 'img:odd' ).removeAttr( 'style' );
})
*/
//
/** 속성 활용 */
//
//
/*
$( function() {
    $(' *[class] ').each( function( index, elem ) {
        console.log( 
            'Element: ' + elem.tagName + " " 
            + $( elem ).prop( 'className' ) );
    } );
} );
*/
//
//
/** class의 활용  */
//
// addClass
// removeClass
// hasCalss
/* 
$( function() {
    $( 'img' ).addClass( 'redBorder' );
    $( 'img[src*=rose], img[src*=primula]' ).removeClass( 'redBorder' )
                                            .addClass( 'blueBorder' );

   console.log( 'All elements: ' + $( 'img' ).hasClass( 'redBorder' ) );
   $( 'img' ).each( function( index, elem ) {
       console.log( 'Element: ' + $(elem).hasClass( 'redBorder') + " " + elem.src );
   } )
} )
*/
//
//
/** 함수를 활용한 클래스 추가 및 제거 */
//
/*
$( function() {
    $( 'img' ).addClass( function(index, currentClass) {
        if ( index % 2 === 0) {
            return "blueBorder";
        } else {
            return "redBorder"
        }
    } )
} );

$( function() {
    $( 'img' ).removeClass( function( index, currentClasses ) {
        if ($( this ).closest( '#row2' ).length > 0
            && currentClasses.indexOf( 'redBorder' ) > -1 ) {
                return 'redBorder';
            } else {
                return "";
                // 빈 문자열을 반환한다는 것에 주의하자.
                // 제이쿼리는 아무것도 반환하지 않을때
                // class 를 초기화해버린다.
                // 초기화하고 싶지 않다면 빈문자열을 반환해야 한다.
            }
    });
} );
*/
//
/** classToggle */
// 가장 기본적인 형태의 클래스 토글은 클래스에 속하지 않는
// element 를 클래스의 맴버로 추가하거나, 엘리먼트에서 클래스를
// 제거하는 것이다.
/*
$( function() {
    $( 'img' ).filter( ':odd' ).addClass( 'redBorder' ).end()
              .filter( ':even' ).addClass( 'blueBorder' );

    $( '<button>Toggle</button>' ).appendTo( "#buttonDIV" )   
                                  .click( doToggle );

    function doToggle( e ) {
        $( 'img' ).toggleClass( 'redBorder' );
        e.preventDefault();
    };
} );
*/
$( function() {
    $('img').addClass('blueBorder' );
    $('img:even').addClass('redBorder');

    $('<button>Button</button>').appendTo('#buttonDIV').click(doToggle);

    function doToggle( e ) {
        $('img').toggleClass( function(index, currentClasses) {
            if ( index % 2 === 0 ) {
                return 'redBorder';
            } else {
                return "";
            }
        })
        e.preventDefault();
    }
} )