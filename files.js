const fs = require('fs');

//reding files
// fs.readFile('./blog.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

//writing files

// fs.writeFile('./blog.txt', 'hello again', () => {
//     console.log('file was write');
// })


// fs.writeFile('./blog1.txt', 'hello again', () => {
//     console.log('file was write');
// })

//directories
// if(!fs.existsSync('./assest')){

//     fs.mkdir('./assest', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         else{
//             console.log('folder is created')
//         }
//     })
// }
// else{
//     fs.rmdir('./assest', (err) => {
//        if(err){
//         console.log(err);
//        }
//        else{
//         console.log('flder deleted');
//        }
//     })
// }

//deleting files

if(fs.existsSync('./deleteeme.txt'))
{
    fs.unlink('./deleteeme.txt', (err) => {

        if(err) {
            console.log(err)
        }
        else{
            console.log('file deleted!');
        }
    })
}