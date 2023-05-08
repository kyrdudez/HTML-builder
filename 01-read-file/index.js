const path = require('path');
const fs = require('fs');

const folderPath = path.join (__dirname,'text.txt');

let stream = new fs.ReadStream(folderPath,{encoding: 'utf-8'});

stream.on('readable', function(){
    let data = stream.read();
    console.log(data);
});

