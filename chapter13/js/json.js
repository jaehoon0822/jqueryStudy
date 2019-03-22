var data = { 
    contents: [
    { name: 'Astor', product: 'astor', stocklevel: '10', price: 2.99 },
    { name: 'Daffodil', product: 'daffodil', stocklevel: '12', price: 1.99 },
    { name: 'Rose', product: 'rose', stocklevel: '2', price: 4.99 },
    { name: 'Peony', product: 'peony', stocklevel: '0', price: 1.50 },
    { name: 'Primula', product: 'primula', stocklevel: '1', price: 3.12 },
    { name: 'Snowdrop', product: 'snowdrop', stocklevel: '15', price: 0.99 }
    ]
};

var row1Data = makeSliceJson( data, 'contents', 0, 3) 
var row2Data = makeSliceJson( data, 'contents', 3) 

handlebarsAdd( '#flowerTmpl', row1Data, '#row1')
handlebarsAdd( '#flowerTmpl', row2Data, '#row2')

function handlebarsAdd( addId, data, appendId) {
    var source = $( addId ).html();
    template = Handlebars.compile( source );
    html = template( data );
    $(html).appendTo( appendId )
}

function makeSliceJson(jsonObj, name, startNum, endNum) {
    var obj = {};
    obj[ name ] = Array.prototype.slice.call( jsonObj[ name ], startNum, endNum);
    return obj;
}

Handlebars.registerHelper('stockvalue', function() {
    console.log( this );
    return Handlebars.SafeString( this.stocklevel > 0 ? 1 : 0 );
})