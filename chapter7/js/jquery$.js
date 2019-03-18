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

// 값을 복사하여 prepend 하였다.

