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

$( document ).ready( function() {

    var jq = $( 'label' );

    jq.slice( 0, 2 ).css( "border", "thick double black" );
    jq.slice( 4 ).css( 'border', 'thick double red' );

} );

/** filtering method */

// filter( selector ) = 선택자에 부합하지 않는 element 제거
// filter( HTMLElement ) = 지정 엘리먼트를 제외한 element 제거
// filter( jQuery ) = 지정한 jQuery 를 제외한 element 제거
// filter( function( index ) ) = element 별로 해당 함수를 호출
                            //   함수에서 flase 를 반환하는
                            //   element 를 모두 제거

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

