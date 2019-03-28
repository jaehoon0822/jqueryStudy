let http = require('http'),
    url = require('url'),
    querystring = require('querystring');

http.createServer( function( req, res ) {
    console.log( '[200 Ok] ' + req.method + ' to ' + req.url );

    if ( req.method == 'OPTIONS' ) {
        res.writeHead(200, 'OK', {
            'Access-Control-Allow-Headers': 'Content-type',
            'Access-Control-Allow-Method': '*',
            'Access-Control-Allow-Origin': '*'
        });
        res.end()

    } else if ( req.method == 'POST' ) {
        let dataObj = new Object(),
            contentType = req.headers[ 'content-type' ],
            fullBody = "";
            console.log( contentType );
        if ( contentType ) {
            if ( contentType.indexOf( 'application/x-www-form-urlencoded') > -1 ) {
                req.on( 'data', function( chunk ) {
                    fullBody += chunk.toString();
                });
                req.on( 'end', function() {
                    var dBody = querystring.parse( fullBody );
                    console.log( 'fullBody: ', fullBody, 'dbody: ', dBody);
                    writeResponse( req, res, dBody,
                        url.parse( req.url, true).query[ 'callback' ] )
                });
            } else {
                req.on( 'data', function( chunk ) {
                    fullBody += chunk.toString();
                });
                req.on( 'end', function() {
                    dataObj = JSON.parse( fullBody );
                    let dprops = new Object();
                    for ( var i = 0; i < dataObj.length; i+=1 ) {
                        dprops[ dataObj[ i ].name ] = dataObj[ i ].value;
                    }
                    writeResponse( req, res, dprops );
                });
            }
        }
    } else if ( req.method == 'GET' ) {
        let data = url.parse( req.url, true ).query;
        writeResponse( req, res, data, data[ 'callback' ] );
    }
    console.log( 'Ready on port 8000');
}).listen( 8000 );

function writeResponse( req, res, data, jsonp ) {
    let total = 0;
    console.log( 'jsonp: ', jsonp );
    console.log( 'data: ', data );
    for ( item in data ) {
        if ( item != '_' && data[ item ] > 0 ) {
            total += Number( data[ item ] );
        } else {
            delete data[ item ];
        }
    }
    data.total = total;
    jsonData = JSON.stringify( data );
    console.log( 'jsonData: ', jsonData )
    if ( jsonp ) {
        jsonData = jsonp + '(' + jsonData + ')';
    }
     console.log( 'jsonData: ', jsonData )

    res.writeHead( 200, 'OK', {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    res.write( jsonData );
    res.end(); 
}