let http = require( 'http' ),
    querystring = require( 'querystring' );

http.createServer( function ( req, res ) {
    console.log( '[200 OK]' + req.method + ' to ' + req.url );

    if ( req.method == 'POST' ) {
        var dataObj = new Object();
        var contentsType = req.headers['content-type'];
        console.log( 'contentsType: ', contentsType );
        var fullBody = '';

        if (contentsType) {
            if ( contentsType.indexOf( 'application/x-www-form-urlencoded' ) > -1 ) {
                req.on( 'data', function(chunck) {fullBody += chunck.toString(); } )
                req.on( 'end', function() {
                    res.writeHead( 200, 'OK', { 'Content-Type': 'text/html' });
                    res.write('<html><head><title>Post data</title></head><body>');
                    res.write('<style>th, td {text-align:left; padding: 5px; color: black;}\n');
                    res.write('th {background-color: grey; color:white; min-width:10em;}\n');
                    res.write('td {background-color: lightgrey;}\n'); res.write('caption {font-weight: bold;}</style>'); 
                    res.write('<table border="1"><caption>From Data</cation>');
                    res.write('<tr><th>Name</th><th>Value</th>');
                    var dBody = querystring.parse( fullBody );
                    console.log('fullBody: ' + fullBody );
                    console.log( 'dBody: ', dBody );
                    for ( var prop in dBody ) {
                        res.write('<tr><td>' + prop + '</td><td>' + dBody[prop] + '</td></tr>');
                    }
                    res.write('</table></body></html>');
                    res.end();
                } )
            }
        }
    }
}).listen( 8000 );
console.log( 'Ready on port 8000');