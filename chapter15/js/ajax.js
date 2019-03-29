
$( document ).ready( function() {
    /** $.ajax  */
    // $.ajax('json/mydata.json', {
    //     success: function(data) {
    //         let row1 = data.slice( 0, 3 ),
    //             row2 = data.slice( 3 );

    //         addEach( '#flowerTmpl', row1, '#row1' );
    //         addEach( '#flowerTmpl', row2, '#row2' );
    //     }
    // })

    /** jqXHR */
    // status
    // statusText
    // readyStatus
    // responseXML
    // responseText
    // setRequestHeader( name. value )
    // getAllResponseHeaders()
    // getResponseHeader( name )
    // abort()

    // var jqxhr = $.ajax('json/mydata.json', {

    //     success: function( data ) {
    //         let row1 = data.slice( 0, 3 ),
    //             row2 = data.slice( 3 );
            
    //         addEach( '#flowerTmpl', row1, '#row1');
    //         addEach( '#flowerTmpl', row2, '#row2');

    //     }
    // })

    // let timerID = setInterval( function() {
    //     console.log( 'Status: ' + jqxhr.status + " " + jqxhr.statusText );
    //     if (jqxhr.readyState == 4 ) {
    //         console.log( 'Request complated: ' + jqxhr.responseText );
    //         clearInterval( timerID );
    //     }
    // })

    /** POST request transmission */
    
    // $.ajax({
    //     url: 'json/mydata.json',
    //     success: function(data) {
    //         let row1 = data.slice( 0, 3 ),
    //             row2 = data.slice( 3 );
    //         addEach( '#flowerTmpl', row1, '#row1' );
    //         addEach( '#flowerTmpl', row2, '#row2' );
    //     }
    // });

    // $( 'button' ).click( function(e) {

    // $.ajax({
    //     url: $('form').attr('action'),
    //     type: 'post',
    //     data: $( 'form' ).serialize(),
    //     success: proccessServerResponse
    // })
    // e.preventDefault();

    // })

    /** Ajax event */
    //
    // beforeSend
    // complate
    // error
    // success

    // 성공 요청의 처리
    //
    // $.ajax( 'json/mydata.json', {
    //     success: function( data, status, jqxhr ) {
    //         console.log( 'Status: ' + status );

    //         console.log( 
    //             'jqXHR Status: ' + jqxhr.status + " " + jqxhr.statusText 
    //         );

    //         console.log( jqxhr.getAllResponseHeaders() );
    //         let row1 = data.slice( 0, 3 ),
    //             row2 = data.slice( 3 );
            
    //         addEach( '#flowerTmpl', row1, '#row1' );
    //         addEach( '#flowerTmpl', row2, '#row2' );
    //     }
    
    // })
    //

    /** error 처리 */
    //
    // $.ajax( 'NoSuchFile.json', {
    //     success: function( data, status, jqxhr ) {
    //         let row1 = data.slice( 0, 3 ),
    //             row2 = data.slice( 3 );

    //         addEach( '#flowerTmpl', row1, '#row1' );
    //         addEach( '#flowerTmpl', row2, '#row2' );

    //     },
    //     error: function( jqxhr, status, errorMsg ) {
    //         $('<div class="error"/>')
    //             .text( 'Status: ' + status + ' Error: ' + errorMsg )
    //             .insertAfter( 'h1' );
    //     }
    // })

    /** 완료 요청 처리 */
    //
    // $.ajax({
    //     url: 'json/mydata.json',
    //     success: function( data ) {
    //         let row1 = data.slice( 0, 3 ),
    //             row2 = data.slice( 3 );
           
    //         addEach( '#flowerTmpl', row1, '#row1' );
    //         addEach( '#flowerTmpl', row2, '#row2' );
            
    //     },
    //     error: function( jqxhr, status, errorMsg ) {
    //         $( '<div class="error"/>' )
    //             .insertAfter( 'h1' )
    //             .append( $ ( '<span> <strong> Status: </strong>' + status + '<br>' +  '<strong> ErrorMessage: </strong>' + errorMsg + '</span>' ) );
    //     },
    //     complete: function( jxhr, status ) {
    //         console.log( 'Completed: ' + status );
    //     }
        //
        // status 인자를 통해 받는 값은 다양하다.
        // abort
        // error
        // success
        // parsererror : 서버에서 반환한 data를 parsing 할수 없음을 나타냄
        // notmodified : 마지막 요청이후 수정되지않은것임을 나타냄
        // timeout
        //

   
    // complate 설정을 사용해 모든 요청 결과를 처리하는
    // 범용함수를 하나만 지정하는게 좋다고 생각할 수 있는데,
    // 이렇게 하면 제이쿼리가 데이터와 에러를 처리하는 기능을
    // 제대로 활용할 수 없다.
    // 이보다 다음과 같이 공통 함수에 대한 인자를 잘 정리해서
    // 넘겨주는 방식이 좋다.
    // 

    
    // $.ajax({
    //         url: 'json/smydata.json',
    //         success: function( data, status, jqxhr ) {
    //             handleResponse( data, status, jqxhr, null );
    //         },
    //         error: function( jqxhr, status, errorMsg ) {
    //             handleResponse( null, status, jqxhr, errorMsg );
    //         }
    // });
    

    // $.ajax({
    //     success: function( data, status, jqxhr ) {
    //        handleResponse( data, status, jqxhr, null );
    //     },
    //     error: function( jqxhr, status, errorMsg ) {
    //         handleResponse( null, status, jqxhr, errorMsg );
    //     },

    //     // beforeSend 설정은 요청을 시작하기 전에 호출할 함수를 지정한다.
    //     // 이 설정은 ajax method 로 넘겨준 설정을 보완 또는
    //     // 대체할 최종 설정을 지정할 수 있게 해준다.

    //     beforeSend: function( jqxhr, setting ) {
    //         setting.url = 'json/mydata.json';
    //     }
    // })

    /** 다중 이벤트 핸들러 함수의 지정  */
    //
    // $.ajax({
    //     url: 'json/mydata.json',
    //     success: [ processData, reportStatus ]
    // });

    // 
    /** event 컨텍스트의 설정 */
    //
    // context 설정은 event 함수를 사용할 수 있을때,
    // this 변수에 대입할 엘리먼트를 지정할 수 있다.

    // $.ajax({

    //     url: 'json/mydata.json',
    //     // htmlElement 를 사용했을때 
    //     // context: document.getElementsByTagName( 'h1' )[0],

    //     // jquery 객체를 사용했을때
    //     context: $( 'h1' ),

    //     success: function( data, status, jqxhr ) {
    //         let row1 = data.slice( 0, 3 ),
    //             row2 = data.slice( 3 );
            
    //         addEach( '#flowerTmpl', row1, '#row1' );
    //         addEach( '#flowerTmpl', row2, '#row2' );
    //     },
    //     complete: function( jqxhr, status ) {
    //         let color = status == 'success' ? 'green' : 'red';
    //         $( this ).css( 'border','thick solid ' +  color );
    //     }

    // })

    //
    //

    /** 전역 ajax event 활용 */
    //

    // ajaxComplate( function ); => 요청이 완료될때( 성공여부와 상관없이)
    // ajaxError( function ); => 요청이 에러를 만날때
    // ajaxSend( function ); => 요청이 시작하기전
    // ajaxStart( function ); => 요청이 시작할때
    // ajaxStop( function );   => 모든 요청이 완료될때
    // ajaxSuccess( function ); => 요청이 성공했을때

    // $( '<div class="ajaxinfo">' + 
    //     '<label for="globalevents">Events:' +
    //         '<input type="checkbox" id="globalevents"' + 
    //         'name="globalevents" checked/>' + 
    //     '</label>' + 
    // '</div>' )
    //     .insertAfter( 'h1' );

    // $( '<div id="info" class="ajaxinfo"/>' )
    //     .text( 'Ready' )
    //     .insertAfter( 'h1' );

    // $( document )
    //     .ajaxStart( function() {
    //         displayMessage( 'Ajax Start' );
    //     })
    //     .ajaxSend( function( event, jqxhr, settings) {
    //         displayMessage( 'Ajax Send: ' + settings.url );
    //     })
    //     .ajaxSuccess( function( event, jqxhr, settings) {
    //         displayMessage( 'Ajax success: ' + settings.url );
    //     })
    //     .ajaxError( function( event, jqxhr, settings, errorMsg ) {
    //         displayMessage( 'Ajax Error: ' + settings.url );
    //     })
    //     .ajaxComplete( function( event, jqxhr, settings) {
    //         displayMessage( 'Ajax Compete: ' + settings.url)
    //     })
    //     .ajaxStop( function( event, jqxhr, settings) {
    //         displayMessage( 'Ajax Stop' );
    //     });

    // $( 'button' ).click( function( e ) {
    //     $( '#row1, #row2' ).children().remove();
    //     $.ajax({
    //         url: 'json/mydata.json',
    //         global: $( '#globalevents:checked' ).length > 0,
    //         success: function( data, status, jqxhr ) {
    //             let row1 = data.slice( 0, 3 ),
    //                 row2 = data.slice( 3 );

    //             addEach( '#flowerTmpl', row1, '#row1' );
    //             addEach( '#flowerTmpl', row2, '#row2' );

    //         }
    //     })
    //     e.preventDefault();
    // })

    /** Ajax 요청에 대한 기본 설정 지정 */
    //
    //
    /** 타임아웃 및 헤더의 설정 */
    //
    // $.ajax({
    //     url: 'json/mydata.json',
    //     timeout: 1000,// ms 동안 다운받지 못한다면
    //                    // error status 값을 가진다.
    //     headers: {
    //         'X-HTTP-Method-Override': 'PUT'
    //     },
    //     success: function( data, status, jqxhr) {
    //         let row1 = data.slice( 0, 3 ),
    //             row2 = data.slice( 3 );
            
    //         addEach( '#flowerTmpl', row1, '#row1' );
    //         addEach( '#flowerTmpl', row2, '#row2' );
    //         console.log( 'Success: ', jqxhr.status, ' ', jqxhr.statusText );
    //         // Success: 200 OK
    //     },
    //     error: function( jqxhr, status, errorMsg ) {
    //         console.log( 'Error: ', status );
    //         // Error : timeout 
    //     },
    //     complete: function(jqxhr, status ) {
    //         console.log( 'Status: ' + status + ' StatusText: ' + jqxhr.statusText )
    //     }
    // });

    /** JSON 데이터의 서버 전송 */
    //
    // $.ajax({
    //     url: 'json/mydata.json',
    //     success: function( data, status, jqxhr ) {
    //         let row1 = data.slice( 0, 3 ),
    //             row2 = data.slice( 3 );
            
    //         addEach( '#flowerTmpl', row1, '#row1' );
    //         addEach( '#flowerTmpl', row2, '#row2' );

    //         console.log( 'Status: ' + jqxhr.status 
    //             + ' StatusText: '  + jqxhr.statusText );
    //     }
    // })

    // $( 'button' ).click( function( e ) {
    //     $.ajax({
    //         url: $( 'form' ).attr( 'action' ),
    //         contentsType: 'application/json',
    //         data:  $( 'form' ).serializeArray() ,
    //         type: 'post',
    //         success: proccessServerResponse,
    //     });
    //     e.preventDefault();
    //     console.log( JSON.stringify( $( 'form' ).serializeArray() ));
    // } );

    // var elem;

    // $.ajax( {
    //     async: false,
    //     url: 'flower.html',
    //     success: function( data, status, jqxhr ) {
    //        elem = $( data ).filter( 'div' ).addClass( 'dcell');
    //        elem.slice( 0, 3 ).appendTo( '#row1' );
    //        elem.slice( 3 ).appendTo( '#row2' );
    //     }
    // } )

    // $( 'button' ).click( function( e ) {
    //     $.ajax( {
    //         url: 'json/mydata.json',
    //         ifModified: true,
    //         success: function( data, status ) {

    //             if ( status == 'success' ) {
    //                 let row1 = data.slice( 0, 3 ),
    //                     row2 = data.slice( 3 );
    //                 $( '#row, #row2' ).children().remove();
    //                 addEach( '#flowerTmpl', row1, '#row1' );
    //                 addEach( '#flowerTmpl', row2, '#row2' );
    //             } else if ( status == 'notmodified' ) {
    //                 $( 'img' ).css( 'border', 'thick solid green' );
    //             }
    //         }
    //     } );
    //     e.preventDefault();
    // } )

    /** 응답 상태의 코드의 처리 */
    //

    // $.ajax({
    //     url: 'json/mydata.json',
    //     statusCode: {
    //         200: handleSuccessfulRequest,
    //         404: handleFailedRequest,
    //         302: handleRedirect
    //     }
    // });

    /** dataFilter */
    // $.ajax({
    //     url: 'json/mydata.json',
    //     success: function( data, status, jqxhr ) {
    //         let row1 = data.slice( 0, 3 ),
    //             row2 = data.slice( 3 );
    //         $( '#row1, #row2' ).children().remove();
    //         addEach( '#flowerTmpl', row1, '#row1' );
    //         addEach( '#flowerTmpl', row2, '#row2' );
    //     },
    //     dataType: 'json',
    //     dataFilter: function( data, dataType ) {
    //         if ( dataType == 'json' ) {
    //             let filteredData = $.parseJSON( data );
    //             filteredData.shift();
    //             return JSON.stringify( filteredData.reverse() );
    //         } else {
    //             return data;
    //         } 
    //     }
    // })

    /** 데이터 변환의 관리 */
    //
    // jquery 는 JOSN data 를 받으면, row JSON 문자열이 아닌,
    // javascript 객체를 success 함수에 넘겨준다.
    // 이런 데이터 변환 작업은 converters 설정을 통해 제어할 수 있다.
    //

    // $.ajax({
    //     url: 'flower.html',
    //     success: function( data, status, jqxhr ) {
    //         let elem = data.filter( 'div' ).addClass( 'dcell' );
    //         elem.slice( 0, 3 ).appendTo( '#row1' );
    //         elem.slice( 3 ).appendTo( '#row2' );
    //     },
    //     converters: {
    //         'text html': function( data ) {
    //             return $( data );
    //         }
    //     }
    // });


    /** Ajax 요청의 설정 및 필터링 */
    //
    // 이제 ajax method 와 사용할 수 있는 설정을 살펴봤으니
    // 설정 요청을 간편하게 할 수 있게 제이쿼리가 제공하는 추가 메소드를 
    // 알아보자.

    /** 기본 설정의 정의 */
    //
    // ajaxSetup method 는 모든 ajax 요청에 사용할 설정을 지정하게 해준다.
    // 이 메소드를 사용하면 각 요청마다 같은 설정을 정의하지 않아도 된다.
    //

    // $.ajaxSetup({
    //     timeout: 15000,
    //     global: false,
    //     error: function( jqxhr, status, errMsg ) {
    //         $( '<div class="error"> Status: ' + jqxhr.status + '<br/>errorMessage: ' + errMsg )
    //             .insertAfter( 'h1' );
    //     },
    //     converters: {
    //         'text html': function( data, dataType ) {
    //             return $( data );
    //         }
    //     }
    // });

    // $.ajax({
    //     url: 'flower.html',
    //     success: function( data, status, jqxhr ) {
    //         let elem =  data .filter( 'div' ).addClass( 'dcell' );
    //             elem.slice( 0, 3 ).appendTo( '#row1' ),
    //             elem.slice( 3 ).appendTo( '#row2' );
    //     }
    // });
    //

    /** 요청 필터링 */
    // ajaxPrefilter 를 이용하여 ajax 요청에 적용할 기본 설정을 정의한다.

    $.ajaxSetup({
       timeout: 15000,
       global: false,
       error: function( jqxhr, status, errMsg ) {
           $( '<div class="error">')
                .text( 'status: ' + status + ' Error: ' + errMsg );
       },
       converters: {
           'text html': function( data ) {
               return $( data );
           }
       }
    });

    $.ajaxPrefilter( 'json html', function( settings, originalSettings, jqxhr ) {
        if ( originalSettings.dataType == 'html' ) {
            settings.timeout = 2000;
        } else {
            jqxhr.abort();
        }
    } );

    $.ajax({
        url: 'flower.html',
        success: function( data, status, jqxhr ) {
            let elem = data.filter( 'div' ).addClass( 'dcell' );
            elem.slice( 0, 3 ).appendTo( '#row1' );
            elem.slice( 3 ).appendTo( '#row2' );
        }
    });


    function handleSuccessfulRequest( data, status, jqxhr ) { 
        let row1 = data.slice( 0, 3 ),
            row2 = data.slice( 3 );

        $( '#row1, #row2' ).children().remove();
        addEach( '#flowerTmpl', row1, '#row1' );
        addEach( '#flowerTmpl', row2, '#row2' );
        
    }

    function handleFailedRequest( jqxhr, status, errorMsg ) {
        $( '<div class="error"> Code: ' + jqxhr.status + '<br>' + 'Message: ' + errorMsg )
            .insertAfter( 'h1' );
    }

    function handleRedirect( jqxhr, status ) {
        console.log( 'Recirect :' + jqxhr.status );
    }

    function displayMessage( msg ) {
        $( '#info' )
            .queue( function () {
                $( this )
                    .fadeTo( 'slow', 0 )
                    .queue( function () {
                        $( this ).text( msg ).dequeue()
                    })
                    .fadeTo( 'slow', 1 )
                    .dequeue();
            } )
    };
    
    function processData ( data, status, jqxhr ) {
        let row1 = data.slice( 0, 3 ),
            row2 = data.slice( 3 );

        addEach( '#flowerTmpl', row1, '#row1' );
        addEach( '#flowerTmpl', row2, '#row2' );

    }

    function reportStatus( data, status, jqxhr ) {
        console.log( 'Complete: ' + status );
    }

    function handleResponse( data, status, jqxhr, errorMsg ) {
        if ( status === 'success') {
            let row1 = data.slice( 0, 3 ),
                row2 = data.slice( 3 );

            addEach( '#flowerTmpl', row1, '#row1' );
            addEach( '#flowerTmpl', row2, '#row2' );

            console.log( 'Complete: ', status );
            
        } else if ( status === 'error' ) {
            $( '<div class="error"/>')
            .insertAfter( 'h1' )
            .append( '<spen> Status: ' 
                + status + '<br/> ErrorMessage: ' + errorMsg + '</span>' );
            console.log( 'complete: ', status );
        }
    }

    function handleResponse( data, status, jqxhr, errorMsg ) {
        if ( status === 'success') {
            let row1 = data.slice( 0, 3 ),
                row2 = data.slice( 3 );

            addEach( '#flowerTmpl', row1, '#row1' );
            addEach( '#flowerTmpl', row2, '#row2' );

            console.log( 'Complete: ', status );
            
        } else if ( status === 'error' ) {
            $( '<div class="error"/>')
            .insertAfter( 'h1' )
            .append( '<spen> Status: ' 
                + status + '<br/> ErrorMessage: ' + errorMsg + '</span>' );
            console.log( 'complete: ', status );
        }
    }
    function proccessServerResponse(data) {
        let inputElem = $('div.dcell').hide();
        for(let prop in data) {
            var filtered = inputElem.has('input[name=' + prop + ']')
                .appendTo('#row1').show();
        }
        $('#buttonDIV, #totalDiv').remove();
        $( addHandlebars('#totalTmpl') ).appendTo( 'body' );
    };

    function addHandlebars( add, data ) {
        let source = $( add ).html(),
            template = Handlebars.compile( source ),
            html = template( data );
        return html;
    };

    function addEach( add, data, addToTarget ) {
        for ( let i = 0; i < data.length; i += 1 ) {
            console.log( data[ i ] );
            $( addHandlebars( add, data[ i ]) ).appendTo( addToTarget );
        }
    };

});