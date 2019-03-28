/** 새 엘리먼트 생성 */

// DOM element 를 insert 하기 전에
// new Element 를 생성해야 할때가 종종 있다.

/** $ 함수를 활용한 element 생성 */
/*
$( document ).ready( function() {
    
    var newEleme = $( '<div class="dcell"><img src="lily.png"/></div>');

    newEleme.each( function( index, elem ) {
        console.log( 'New element: ' + elem.tagName + ' ' + elem.className + ' cildernElem: ' + elem.firstChild.tagName )
    } );

    newEleme.children().each( function( index, elem ) {
        console.log( 'Child: ' + elem.tagName + " " + elem.src );
    } )
} )
*/
/** 기존 element 의 복제를 통한 new Element 생성 */
//
// clone method 를 사용하려면 기존 element 로 부터 새 element 를 생성할 수 있다.
// clone method 를 사용하면 모든 자손 element 를 포함해
// jQuery 객체의 모든 element 가 그대로 복제된다.
/*
$( document ).ready( function() {

    var newElem = $( 'div.dcell' ).clone();

    newElem.each( function( index, elem ) {
        console.log( 'New element: ' + elem.tagName + " " + elem.className );
    } );

    newElem.children().each( function( index, elem ) {
        console.log( 'New Children: ' + elem.tagName + " " + elem.className );
    } );
} );
*/

/** DOM API 를 활용한 element 생성 */
//
// DOM API 를 직접 사용해 새로운 HTMLElement 객체를 생성할 수 있다.
// 다른 element 생성 기법을 사용할 때 jQuery 는 내부적으로 이 작업을 수행한다.
/*
$( document ).ready( function() {

    var divElem = document.createElement( 'div' );
    divElem.classList.add( 'dcell' );

    var imgElem = document.createElement( 'img' );
    imgElem.src = "./image/lily.png";

    divElem.appendChild( imgElem );

    var newElems = $( divElem );
    newElems.each( function( index, elem ) {

        console.log( 'New element: ' + elem.tagName + " " + 
           elem.className );

    } );

    newElems.children( 'img' ).each( function( index, elem ) {

        console.log( 'Child: ' + elem.tagName + " " + elem.src );

    } );

} );
*/

/** append method  */
//
/*
$( document ).ready( function() {
    var newElems = $( '<div class="dcell"></div>' )
        .append('<img src="./image/lily.png"/>')
        .append('<label for="lily">Lily</label>')
        .append('<input name="lily" value="0" required />');
    
    newElems.css( "border", "thick solid red" );
    $( '#row1' ).append( newElems );
} );
*/
// 여기서 중요한 점은 .append 를 mathod chain 형식으로
// 연결했다는 것이다.
// 이는 약간 혼란스러울 수도 있으니 정리해 두어야 겠다.
// 마치 위의 코드만 보자면 div 안에 img 를 넣고 img 안에
// label 를 넣고 label 안에 input 을 넣은 형태처럼 보일 수 있다.
// 하지만 append 같은경우는 div 를 계속 사용한다.
// 좀더 자세히 말하자면..
// ------------------------------------------------
// div 안에 img 를 append 하고,                     |
// img 를 가진 div 안에 label 을 append 하고,        |
// img, lable 을 가진 div 안에 input 을 append 한다. |
// ------------------------------------------------
// 
// 이말은 append method 호출 체인을 통해 처음 선택한 element 를
// 여러번 추가할 수 있다는 뜻이다.

/** prepend method */
//
// append method 를 보완하는 method 로
// prepend method 가 존재한다.
/*
$( document ).ready( function() {

    var orchildelems = $( '<div class="dcell"/>' )
        .append( '<img src="./image/orchid.png"/>' )
        .append( '<label for="orchid">Orchid</label>' )
        .append( '<input name="orchid" value="0" required />' );

    var newElems = $( '<div class="dcell"/>')
        .append( '<img src="./image/lily.png"/>' )
        .append( '<label for="lily">Lily</label>' )
        .append( '<input name="lily" value="0" required />' )
        .add( orchildelems );
    
    newElems.css( 'border', 'thick solid red' );

    $( '#row1, #row2' ).prepend( newElems )
} );
*/
//
/** 각기 다른 위치에 같은 element 삽입 */
// 
// 아래 처럼 각기 다른 위치에 같은 element 를 삽입해보자.
/*
$( document ).ready( function() {
    var innerElem = $( '<div class="dcell"/>' )
        .append( '<img src="./image/orchid.png"/>')
        .append( '<label for="orchid">Orchid</label>' )
        .append( '<input name="orchid" value="0" required/>' ),

        Elems = $( '<div class="dcell"/>' )
        .append( '<img src="./image/lily.png"/>')
        .append( '<label for="lily">Lily</label>' )
        .append( '<input name="lily" value="0" required/>' )
        .add( innerElem );

    Elems.css( 'border', 'thick solid blue' );

    $( '#row1' ).append( Elems );
    $( '#row2' ).prepend( Elems );

} );
*/
// 결과를 확인해 보면 알겠지만, 
// 이는 우리가 예상했던 결과가 아니다.
// #row1 에 append 되고 #row2 에 prepend 되어야
// 하지만, 단지 prepend 만 되었다.
// 책에서 말하기를

// " 한번 삽인한 후 DOM 삽입 method 에 같은 element 를 인자로
//   사용하면 element 가 복제되는것이 아니라 위치만 바뀌게 된다. " 

// 명심해야할 구문이다.
// append 와 prepend 의 특성으로 바라보아야 한다.
// 그렇다면 우리가 원하는대로 만들기 위해서는 어떻게 해야 할까?
// 우리에게는 복사가 가능한 clone 이 존재한다.
/*
$( document ).ready( function() {
    var innerElem = $( '<div class="dcell"/>' )
        .append( '<img src="./image/orchid.png"/>')
        .append( '<label for="orchid">Orchid</label>' )
        .append( '<input name="orchid" value="0" required/>' ),

        Elems = $( '<div class="dcell"/>' )
        .append( '<img src="./image/lily.png"/>')
        .append( '<label for="lily">Lily</label>' )
        .append( '<input name="lily" value="0" required/>' )
        .add( innerElem );

    Elems.css( 'border', 'thick solid blue' );

    $( '#row1' ).append( Elems );
    $( '#row2' ).prepend( Elems.clone() );

} );
*/
// 값을 복사하여 prepend 하였다.

/** jQuery 객체를 통한 삽입 */
//
// appendTo 와 prependTo method 를 사용해
// 관계를 바꿀수도 있다.
// jQuery 객체 내의 엘리먼트는 인자로 지정된 element 자식으로
// 삽입된다.
/*
$( document ).ready( function() {

    var newElems = $( '<div class="dcell"/>' );

    $( 'img' ).appendTo( newElems );
    $( '#row1' ).appendTo( newElems );

} );
*/

/** 함수를 활용한 엘리먼트 삽입 */
//
// append 와 prepend method 에 function을 인자로 넘겨줄 수도 있다.
// 이렇게 하면 jQuery 객체가 선택한 element 에 대해 
// 동적으로 자식을 삽입할 수 있다.
/*
$( document ).ready( function() {

    var orchidElems = $( '<div class="dcell"/>' )
        .append( '<img src="./image/orchid.png"/>' )
        .append( '<label for="orchid">Orchid:</label>' )
        .append( '<input name="orchid" value="0" required />' ),

        lilyElems = $( '<div class="dcell"/>' )
        .append( '<img src="./image/lily.png"/>' )
        .append( '<label for="lily">Lily:</label>' )
        .append( '<input name="lily" value="0" required />' );

    $( orchidElems ).add( lilyElems ).css( 'border', 'thick solid red' );

    $( 'div.drow' ).append( function( index, html ) {
        if ( this.id == 'row1' ) {
            return orchidElems;
        } else {
            return lilyElems;
        }
    } );
} );
*/
/** 부모 및 조상 엘리먼트 삽입 */
//
// 제이쿼리는 다른 엘리먼트의 부모나 조상을 삽입할 수 있는
// 메소드도 제공한다.
// 이를 래핑이라고 부른다.
// ( 한 엘리먼트를 다른 엘리먼트로 감싸므로.. )
/*
$( document ).ready( function() {

    var newElem = $( '<div/>' ).css( 'border', 'thick solid red' );
    $( 'div.drow' ).wrap( newElem );

} );
/*

// 래핑을 수행할 때는 여러 개의 element 를 인자로 넘겨줄 수 있지만,
// 내부 엘리먼트는 항상 하나만 존재하게 해야 한다.
// 이렇게 하지 않으면 제이쿼리는 무슨 일을 해야 하는 알 수 없다.

/** element 모두 감싸기 */
//
// wrap method 를 사용할 때는 새 엘리먼트가 복제되고
// jQuery 객체 내의 각 엘리먼트가 새로운 부모 엘리먼트를 부여받는다.
// wrapAll method 를 사용하면 여러 엘리먼트에 대한
// 한 부모를 삽입할 수 있다.
/*
$( document ).ready( function() {

    var newElem = $( '<div/>' ).css( 'border', 'thick solid red' );
    $( 'div.drow' ).wrapAll( newElem );

} );
*/
// 공통 부모를 삽입하기 위해 새 엘리먼트를 사용했으므로 
// HTML 은 div.drow 들을 감싼다.

// 이렇게 편한 wrapAll 을 사용할때 주의할 점이 존재한다.
// 아래를 보자.
/*
$( document ).ready( function() {

    var newElem = $( '<div/>' ).css( 'border', 'thick solid red' );
    $( 'img' ).wrapAll( newElem );

} );
*/
// wrapAll 을 img 에 사용했다.
// img 는 공통부모를 가지고 있지 않기에,
// wrapAll 은 어느 img 를 기준으로 감싸야 하는지 정해야 한다.
// 이러한 동작으로 인해 
// wrapAll 은 처음 나오는 element 의 부모로 삽입된다.
// 이는 우리가 의도하지 않은 결과를 나타낸다.

/** element 내용 감싸기 */
//
// wrapInner method 는 jQuery 객체 내의 엘리먼트 내용 주변
// ( 엘리먼트 자체가 아니라 ) 을 엘리먼트로 감싸게 해준다.
/*
$( document ).ready( function() {

    var newElem = $( '<div/>' ).css( 'border', 'thick solid red' );
    $( '.dcell' ).wrapInner( newElem );

} );
*/
// 이는 html 을 보자 글로만 보자면, 내용이 이상해질 수 있다.
// 여기서 말하는 주변이란 선택된 element 의 내부 element 를
// 감싼다고 하는게 맞는거 같다.
// 말그대로 wrapInner 이다.
// 이 책에서 append 를 사용하여 비슷한 효과를 내도록 구현한 
// code 가 있다.
/*
$( document ).ready( function() {
    var newElem = $('<div/>').css( 'border', 'thick solid red' );

    $( '.dcell' ).each( function( index, elem ) {
       $( elem ).append( newElem.clone().append( $( elem ).children() ));
    } );

} );
*/
// 여기서는 이방식을 권장하기 위해서가 아니라
// ( wrapInner method 가 읽기도 더 쉽고 훨씬 편리하다.)
// 같은 문제를 다양한 방식으로 접근할 수 있는 jQuery 의 접근법을
// 잘 보여주는 예이다.

/** 함수를 활용한 element 감싸기 */
//
// wrap 와 wrapInner method 의 인자로 함수를 넘겨
// 동적으로 element 를 생성할 수 있다.
// 이 함수의 단일 인자로는 선택된 엘리먼트의 인덱스가 전달된다.
// 또 특수 변수 this 는 처리 중인 엘리먼트로 설정된다.
/*
$( function() {

    $( '.drow' ).wrap( function( index ) { 
        if ( $( this ).has( 'img[ src*=rose ]' ).length > 0 ) {
            return $( '<div/>' ).css( 'border', 'thick solid blue' );
        } else {
            return $( '<div/>' ).css( 'border', 'thick solid red' );
        }
    } )
} );
*/
// wrap method 에 함수를 사용해 선택된
// element 의 각각의 자손을 기반으로 
// element 를 감쌀 새로운 부모를 지정했다.
//
/** 형제 엘리먼트의 삽입 */
//
// jQuery 는 기존 엘리먼트의 형제를 문서에 삽입해 주는
// method 도 제공한다.
//
// -----------------------
// after(HTML)           |
// after(jQuery)         | =>  지정한 element 를 jQuery 객체 내의
// after(HTMLElment[])   |     각 element 의 다음 형제로 삽입
// -----------------------
// -----------------------
// before(HTML)          |
// before(jQuery)        | =>  지정한 element 를 jQuery 객체 내의
// before(HTMLElment[])  |     각 element 의 이전 형제로 삽입
// -----------------------
// -----------------------------
// insertAfter(HTML)          |
// insertAfter(jQuery)        | =>  jQuery 객체 내의 element 를 인자에 
// insertAfter(HTMLElment[])  |     지정한 각 element 의 다음 형제로 삽입
// -----------------------------
// -----------------------------
// insertBefore(HTML)          |
// insertBefore(jQuery)        | =>  jQuery 객체 내의 elemnt 를 인자에
// insertBefore(HTMLElment[])  |     지정한 각 element 의 이전 형제로 삽입
// -----------------------------
// -----------------------
// after( function )     | => 함수를 사용해 동적으로 형제를 삽입
// before( function )    |
// -----------------------
// 
/*
$( function() {

    var orchidElems = $( '<div class="dcell"/>' )
        .append( '<img src="./image/orchid.png"/>' )
        .append( '<label for="orchid">Orchid:</label>' )
        .append( '<input name="orchid" value="0" required />' ),

        lilyElems = $( '<div class="dcell"/>' )
        .append( '<img src="./image/lily.png"/>' )
        .append( '<label for="lily">Lily:</label>' )
        .append( '<input name="lily" value="0" required />' );

        $( orchidElems ).add( lilyElems )
                        .css( 'border', 'thick solid red' );
        
        $( '#row1 div.dcell' ).after( orchidElems );
        $( '#row2 div.dcell' ).before( lilyElems );
} );
*/
/** jQuery 객체를 통한 형제 삽입 */

// insertAfter 와 insertBefore method 는 jQuery 객체 내의
// element를 method 인자로 지정한 element 의 다음 현제 또는
// 이전형제로 삽입한다.
// 이는 after, before 와 비슷하지만
// jQuery 객체와 인자 사이의 관계만 반대로 되어 있다.

/*
$( function() {

    var orchidElems = $( '<div class="dcell"/>' )
        .append( '<img src="./image/orchid.png"/>' )
        .append( '<label for="orchid">Orchid:</label>' )
        .append( '<input name="orchid" value="0" required />' ),

        lilyElems = $( '<div class="dcell"/>' )
        .append( '<img src="./image/lily.png"/>' )
        .append( '<label for="lily">Lily:</label>' )
        .append( '<input name="lily" value="0" required />' );

        $( orchidElems ).add( lilyElems )
                        .css( 'border', 'thick solid blue' );
        
        orchidElems.insertBefore( $( '#row1 div.dcell' ) );
        lilyElems.insertAfter( $( '#row2 div.dcell' ) );

} );
*/

/** 함수를 활용한 형제 삽입 */
/*
$( function() {

    $( '.drow div.dcell' ).after( function( index, html ) {
        if (index == 0 ) {
            return $( '<div class="dcell"/>' )
                .append( '<img src="./image/orchid.png"/>' )
                .append( '<label for="orchid">Orchid:</label>' )
                .append( '<input name="orchid" value="0" required />' )
                .css( 'border', 'thick solid red' );
        } else if ( index == 1 ) {
            return $( '<div class="dcell"/>' )
                .append( '<img src="./image/lily.png"/>' )
                .append( '<label for="lily">Lily:</label>' )
                .append( '<input name="lily" value="0" required />' )
                .css( 'border', 'thick solid red' );
        } else if ( $( this ).find( 'label' ).attr( 'for' ) === 'snowdrop' ) {
            return $( '<div class="dcell"/>' )
                .append( '<img src="./image/lily.png"/>' )
                .append( '<label for="lily">Lily:</label>' )
                .append( '<input name="lily" value="0" required />' )
                .css( 'border', 'thick solid red' );
        }
    } );
} );
*/

/** element 대체 */
//
// replaceWith( HTML )
// replaceWith( jQuery )
// replaceWith( HTMLElement[] )
// replaceAll( jQuery )
// replaceAll( HTMLElement[] )
// replaceWith( function )
//
// replaceWith 와 replaceAll 은 비슷하지만
// 인자 역할은 정반대이다.
/*
$( function() {

    var newElem = $( '<div class="dcell"/>' )
                    .append( '<img src="./image/orchid.png"/>' )
                    .append( '<label for="orchid">Orchid:</label>' )
                    .append( '<input name="orchid" value="0" required />' )
                    .css( 'border', 'thick solid red' );

    $( '#row1 img' ).replaceWith( '<img src="./image/carnation.png"/>' );

    $( '<img src="./image/carnation.png"/>' ).replaceAll( '#row2 img' )
        .css( 'border', 'thick solid red' );
} );
*/

$( function() {
    $( 'div.drow img' ).replaceWith( function() {
        if ( this.src.indexOf( 'rose' ) > -1 ) {
            return $( '<img src="./image/carnation.png"/>');
        } else if ( this.src.indexOf( 'peony' ) > -1 ) {
            return $('<img src="./image/lily.png"/>' )
        } else {
            return $( this ).clone();
            // 엘리먼트를 대체하고 싶지 않다면 복제본을 반환한다.
            // 복제하지 않으면 
            // 제이쿼리는 해당 엘리먼트를 완전히 제거하게 된다.
        }
    })
} );

/** element 제거 */
//
// detach()
// detach( selector )
// empty()
// remove()
// remove( selector )
// unwrap()
//
/*
$( function() {

    $( 'img[src*=daffodil], img[src*=snow]').parent().remove();

} );
*/
// src daffodil 과 snow 가 포함된 img 의 부모 element 를 
// 삭제한다. 삭제하면서 자식 element 들도 같이 삭제한다.
// 필요하다면 remove method 의 인자로 선택자를 넘겨 
// 제거할 엘리먼트를 필터링 할 수 있다.
/*
$( function() {

    $( 'div.dcell' ).remove( ':has(img[src*=snow], img[src*=daffodil])' );

} );
*/

/** element 떼어내기 */
//
// detach method 는 remvoe method 와 동일하게 동작하지만
// element 와 관련된 데이터를 보존한다는 점에서 다르다.
// ( remove 는 관련된 데이터 및 이벤트 핸들러가 모두 제거된다. 
// detach 는 관련된 데이터 및 이벤트 핸들러가 모두 보존된다. )
//
/*
$( function() {
    $( '#row2' ).append( $( 'img[src*=astor]' ).parent().detach() );
} );
*/
// 이 스크립트는 src attribute 가 astor 를 포함하는 img element 의
// 부모 element 를 문서에서 제거한다.
// 이렇게 분리된 엘리먼트는 append 메소드를 사용해
// 문서에 다시 삽입할 수 있다.
// detach 없이 append 만으로 위와 같은 상황을 구현가능하다.
/*
$( function() {
    $( '#row2' ).append( $( 'img[src*=astor]' ).parent() );
} )
*/
// 이책의 저자는 이러한 방식으로 구현 가능하기에
// detach 를 좀 처럼 사용하지 않는다고 한다.
//
/** element 비우기 */
//
// empty method 는 jQuery 객체 내의 모든 자손 및 텍스트를 제거한다.
/*
$( function() {
    $( '#row1' ).children().eq(1).empty().css( 'border', 'thick solid red');
} );
*/
/** element unwrap */
// 
/*
$( function() {
    $( '#row1 div' ).unwrap();
} )
*/
// unwrap 은 jQuery 객체내의 element 의 부모를 제거한다.
// wrap 되어 있는것을 unwrap 한다고 생각하면 편하다.
