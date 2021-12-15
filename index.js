const zip = new require('node-zip')();

zip.file('test.file', '{"key":"value"}');
const data = zip.generate({base64:true,compression:'DEFLATE'});

console.log(data);