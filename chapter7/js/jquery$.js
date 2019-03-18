/** add */
// add method 는 jquery 객체에
// 객체를 추가해준다.
// 즉 jQuery 객체의 확장이다.

// add ( HTMLElement ) 
// add ( HTMLElement[ index ])
// add ( jQuery )
// add ( selector )
// add ( selector, context )

/*
$( document ).ready( function() {

    var labelElems = document.getElementsByTagName( 'label' );
    var jq = $( 'img[ src*=daffodil ]' );

    $( 'img:even' ).add( 'img[src*=primula]' )
                   .add( jq )
                   .add( labelElems )
                   .css( 'border', 'thick double red' );

    $( 'img:even' ).css( 'opacity', '0.5');
} );
*/
//

/** first, last, eq */

// first () = 첫번째 element 를 제외한 나머지 제거
// last () = 마지막 element 를 제외한 나머지 제거
// eq ( index ) = 지정한 index element 를
//                제외한 나머지 제거

/*
$( document ).ready( function() {
    
    var jq = $( 'label' );

    // 첫번째 element 선택해 작업
    jq.first().css( 'border', 'thick double red' );

    // 마지막 element 선택해 작업
    jq.last().css( 'border', 'thick double green' );

    // 인덱스를 활용해 element 를 선택해 작업
    jq.eq( 2 ).css( 'border', 'thick double black' );
    jq.eq( -2 ).css( 'border', 'thick double black')
} );
*/

/** slice method */
/*
$( document ).ready( function() {

    var jq = $( 'label' );

    jq.slice( 0, 2 ).css( "border", "thick double black" );
    jq.slice( 4 ).css( 'border', 'thick double red' );

} );
*/
/** filtering method */

// filter( selector ) = 선택자에 부합하지 않는 element 제거
// filter( HTMLElement ) = 지정 엘리먼트를 제외한 element 제거
// filter( jQuery ) = 지정한 jQuery 를 제외한 element 제거
// filter( function( index ) ) = element 별로 해당 함수를 호출
                            //   함수에서 flase 를 반환하는
                            //   element 를 모두 제거
/*
$( document ).ready( function() {
    // selector 
    $( 'img' ).filter( '[src*=s]' )
              .css( 'border', 'thick double red' );

    // jQuery
    var jq = $( '[for*=p]' );
    $( 'label' ).filter( jq ).css( 'color', 'blue' );

    // function( index )
    $( 'img' ).filter( function( index ) {
        return this.getAttribute( 'src' ) === 'peony.png' 
               || index == 4;
    }).css( 'border', 'thick solid red' );

} );
*/

/** has method */
/*
$( 'document' ).ready( function() {

    $( 'div .dcell' ).has( 'img[ src*=astor ]' )
                     .css( 'border', 'thick solid red' );

    var jq = $( '[for*=p]' );
    $( 'div .dcell' ).has( jq )
                     .css( 'border', 'thick solid blue' );

} );
*/

/** map method */
/*
$( 'document' ).ready( function() {

    $( 'div.dcell' ).map( function(index, elem) {
        console.log( elem );
        console.log( elem.getElementsByTagName('img'));
        return elem.getElementsByTagName( 'img' )[0];
    } ).css( 'border', 'thick solid red' );

    $( 'div.dcell' ).map( function( index, elem ) {
        return $( elem ).children()[ 1 ];
    }).css( 'border', 'thick solid blue' );

} );
*/
/** is method */
// is method 는 jQuery 객체에서 하나 이상의 element 가 특정조건을
// 충족하는지 판단할 수 있다.

// is( selector ) = jQuery 객체가 선택자에 부합하는 하나 이상의
//                  엘리먼트를 포함할때 true 를 반환
// is( HTMLElement ) = jQuery 객체가 특정 엘리먼트 또는 지정한 배열내의
//                     엘리먼트 중 하나 이상을 포함할때 true 를 반환
// is( HTMLElement[ ]) = 위와 동일
// is( jQuery ) = jQuery 객체가 인자 객체에 포함된 엘리먼트 중 하나 이상을
//                포함할 때 true 를 반환
// is( function(index) } = 함수가 한 번 이상 true 를 반환하면 true 를 반환
/*
$( document ).ready( function() {
    var isResult = $( 'img' ).is( function( index ) {
        return this.getAttribute( 'src' ) == './image/rose.png';
    } );
    
    console.log( 'Result: ' + isResult );
} );
*/

/** 선택 항목 수정 및 복원 */
//
// jQuery 는 method chain 을 통해 선택 항목을 수정할때
// history 스텍을 보관한다.

// 선택 스택 복원 method
// end() = 스택에서 현재 선택 항복을 꺼내고 이전 선택 항목을 반환
// andSelf() = 이전 선택 항목을 현재 선택 항목에 추가

// end method 는 이전 선택 항목으로 돌아갈때 사용하면 된다.
// 이 method 를 활용하면 element 선택한 후, 선택 element 를 확장
// 축소하고,  특정 작업을 수행한 다음 본래 선택항목으로 되돌아 갈 수 있다.
/*
$( document ).ready( function() {

    $( 'label').first().css( 'border', 'thick solid red' )
               .end().css( 'font-size', '1.5em' )
               .css( 'color', 'red' );
} );

$( document ).ready( function() {

    $( 'div.dcell' ).children( 'img' )
                    .andSelf()
                    .css( 'border', 'thick solid blue' );
} );
*/
//
/** DOM 이동 */

/** DOM 하위 계층구조로의 이동 */

// DOM 하위 계층 구조로 이동할때 jQuery 객체에 포함된 엘리머느의 자식 및 자손을
// 선택한다.

// children() = jQuery 객체에 포함된 모든 element 자식을 선택
// children( selector ) = 선택자에 부합하고 jQuery 객체의 자식 엘리먼트인 모든 엘리먼트를 선택
// contents() = jQuery 객체의 자식 및 모든 element text 내용을 반환
// find() = jQuery 객체의 element 자손을 선정 


// find( selector ) = 선택자에 부합하고 jQuery 객체의 자손 엘리먼트인 엘리먼트를 선택
// ----------------------
// find( jQuery )       |
// find( HTMLElement )  | = jQuery 객체의 엘리먼트의 자식과 인자 객체 사이의 교집합을 선택
// find( HTMLElement()) |
// --------------------- 
/*
$( document ).ready( function() {

    var childCount = $( 'div.drow' ).children()
                                    .each( function( index, elem ) {
                                        console.log( 'Child: ' + elem.tagName + " " + elem.className );
                                    } ).length;
    console.log( "There are " + childCount + " childern" );

    var descCount = $( 'div.drow' ).find( 'img' )
                                   .each( function( index, elem ) {
                                       console.log( 'Descendant: ' + elem.tagName + " " + elem.src );
                                   } ).length;
    console.log( 'There are ' + descCount + ' img descendants');
} );
*/
// find method 를 활용한 교집한 생성
/*
$( document ).ready( function() {

    var jq = $( 'label' ).filter( '[for*=p]' )
                         .not( '[for=peony]' );

    $( 'div.drow' ).find( jq )
                   .css( 'border', 'thick solid blue' );
    
} );
*/
/** 상위 계층구조로의 이동 */
//
// DOM 상위 계층구조로 이동할때 jQuery 객체에 포함된
// element 의 부모 및 조상 노드에 접근해야 한다.
/*
$( document ).ready( function() {

    $( 'div.dcell' ).parent().each( function(index, elem ) {
        console.log( 'Element: ' + elem.tagName + " " + elem.className );
    } );

    $( 'div.dcell' ).parent( '#row1' ).each( function(index, elem) {
        console.log( 'Filtered Element: ' + elem.tagName + " " + elem.id );
    } );

} );
*/

/** 조상의 선택 */
//
// 부모가 아닌 조상을 선택하기 위해 사용하는 method 들이다.

/** parents */
/*
$( document ).ready( function() {

    $( 'img[src*=peony], img[src*=rose]' ).parents()
        .each( function( index, elem ) {
            console.log( "Element: " + elem.tagName + " " + elem.className + " " + elem.id );
        } );

} );
*/
/** parentsUntil */
// parentsUntil 은 jQuery 객체 내의 엘리먼트별로 DOM 계층구조를
// 타고 위로 올라가면서 선택자에 부합하는 element 가 나올때 까지 
// 조상 엘리먼트를 찾는다.
// parentsUntil( elem, filter )
/*
$( document ).ready( function() {

    $( 'img[src*=peony], img[src*=rose]' )
        .parentsUntil( 'form' )
        .each( function( index, elem ) {
            console.log( "Element: " + elem.tagName + " " + elem.className + " " + elem.id );
        } );
} );
*/

// 위 예제는 form element 가 나올때 까지 각 element 의 조상 element 를 찾는다.

// 2 번째 인자에 선택자를 지정하면 조상 엘리먼트를 필터링 할 수 있다.
/*
$( document ).ready( function() {
    
    console.log(' --------------------------------------------- ');
    $( 'img[src*=peony], img[src*=rose]' )
    .parentsUntil( 'form', ':not( .dcell )' ) // .dcell 을 필터링 나머지를 선택 
    .each( function( index, elem ) {
        console.log( "Element: " + elem.tagName + " " + elem.className + " " + elem.id );
    } );

} );
*/
/** closest method  */
// 가장 가까운 조상을 찾는 method 이다.

/*
$( document ).ready( function() {

    $( 'img' ).closest( '.drow' ).each( function( index, elem ) {
        console.log( "Element: " + elem.tagName + " Class: " + elem.className + " id: " + elem.id );
    } );

    var contextElem = document.getElementById( 'row1' );
    $( 'img' ).closest( '.drow', contextElem ).each( function( index, elem ) {
        console.log( '----------------------' );
        console.log( "Element: " + elem.tagName + " Class: " + elem.className + " id: " + elem.id );
        
    } )

} )
*/
// closet method 의 인자로 사용한 참조 객체
// 만약 이러한 상황은 어떨까?
// 아래의 상황은 jQuery 객체에 총 3개의 엘리먼트가 있을때
// closest 는 어떻게 해결하는가를 보는 예제이다.
//
/*
$( document ).ready( function() {

    var jq = $( '#row1, #row2, form');
    $('img[ src*=rose ]').closest( jq )
                         .each( function( index, elem ) {
                             console.log( '-------------------------------' );
                             console.log( 'Element: ' + elem.tagName + ' className: ' + elem.className +
                              '  idName: ' + elem.id )
                         } )
} );
*/
// 결과는 #row1 을 출력한다.
// 단 1개만 말이다.
// 이는 해당 elements 중 가장 가까운 조상을 찾는다.
// 이때 img[ src*=rose ] 는 #row1 의 자식이며, form 의 자손이며, #row2 는 #row1 의 형제이다.
// 즉 여기서 가장 가까운 요소는 #row1 이므로 #row1 을 선택한다.

/** offsetParent  */
// offsetParent 는 가장 가까운 조상을 찾는 method 를 조금 수정한 것이다.
// CSS Position 속성 값이 relative, absolute, fixed 중 하나인 첫 번째 조상 엘리먼트를 찾는다.
// 이런 엘리먼트는 위치 지정 조상이라 부르며, 애니메이션을 활용하려고 할때 주로 찾는다.
//
/*
$( document ).ready( function() {
    $( 'img[ src*=rose ]' ).offsetParent()
                           .css( 'background-color', 'lightgrey' );
} );
*/
/** 계층구조 수평 이동 */
// 마지막 살펴볼 DOM 이동 방식은 형제 node 이동이다.
// 이는 DOM 의 method 와 비슷하다.

/** 모든 형제의 선택 */
// siblings()            | => 선택적으로 선택자를 통한 필터를 적용해 jQuery 객체 내의 각 엘리먼트
// siblings( selelctor ) |    별로 모든 형제 엘리먼트를 선택한다.
//
/*
$( document ).ready( function() {

    $( 'img[src*=astor], img[src*=primula]' )
        .parent().siblings().css( 'border', 'thick solid blue' );

} );
*/
// 위의 예제는 선택된 엘리먼트의 부모 형제에 값을 적용한다.
// 이 말은 선택된 엘리먼트는 적용되지 않는다는 얘기이다.

// 하지만 아래 예제는 달라진다.
//
/*
$( document ).ready( function() {

    $( '#row1 div.dcell' ).siblings().css( 'border', 'thick solid blue' );

} );
*/
// 위 예제는 전부 값이 적용된다.
// 왜 이렇게 되는 것일까?
// 간단히 생각해보자. 
// 책에서는 이렇게 정의한다.

// " 이 스크립트에서 row1 element 의 자식인 div element 를 모두 선택한후
//   siblings method 를 호출한다. 이렇게 하면 선택에 포함된 각 엘리먼트는
//   최소한 다른 엘리먼트 중 한 형제 엘리먼트가 된다. "

// 뭐..  맞는 말인데..  영어 번역이라 그런지..  설명이 낮설다..
// 이는 간단히 얘기하면, #row1 의 자식인 div.dcell 의 형제는
// 여러개의 element 이다.
// element 가 4개이면 각자 siblings() 가 적용된다.
// 선택된 element 역시 다른 element 의 형제이므로,
// 전부 값이 적용된다는 얘기이다.

/** 다음 형제 및 이전 형제의 선택 */
//
// 다음 형제 및 이전 형제를 선택하는 method 는 다른 DOM 이동 method 와
// 작업방식이 동일하므로 여기서는 모두 살펴보지 않는다.
/*
$( document ).ready( function() {
    $( 'img[src*=astor]' ).parent()
                         .nextAll()
                         .css( 'border', 'thick solid blue' );
    $( 'img[src*=primula]' ).parent()
                            .prevAll()
                            .css( 'border', 'thick solid red' );
} );
*/



