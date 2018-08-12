var fs = require('fs');

fs.writeFile('text.txt', 'Hello world', function (err) {
    if(err) throw new Error(err);

    fs.rename('text.txt', 'text2.txt', function (err) {
        if(err) throw new Error(err);
    });
    
    fs.readFile('text2.txt', function (err, data) {
        if(err) throw new Error();

        console.log(data.toString());
    });
});

console.log('ok');

//
// fs.writeFileSync('test.txt', 'Привет мир');
//
// var data = fs.readFileSync('test.txt', {encoding: 'utf-8'});
// console.log(data);