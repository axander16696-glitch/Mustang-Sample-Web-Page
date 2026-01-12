const file = require('fs');
// const path = require('path');

function createfile(){
    file.writeFile('note.txt', 'Hello Backend', ()=>{
        console.log('File Created'); });     
}
function ReadFile(){
    file.readFile('note.txt', 'utf-8', (err, value)=>{
        console.log(value);
    });
}

function updatefile(){
    file.appendFile('note.txt', '\n New Value Added',()=>{
        console.log('File Updated');
    });

}
function deletefile(){
    file.unlink('note.txt', (err)=>{
        console.log('File Deleted');
    });
}
deletefile();
// ReadFile();
// updatefile();
// createfile();
// ReadFile();