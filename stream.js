const fs = require('fs');

const readSteram = fs.createReadStream('./blog.txt', {encoding : 'utf8'});
const writeStream = fs.createWriteStream('./blog4.txt');



// readSteram.on('data', (chunk) => {
//     console.log('----new chunk-----')
//     console.log(chunk);
//     writeStream.write('\n new chunk line\n');
//     writeStream.write(chunk);
    
// })


//piping

readSteram.pipe(writeStream);