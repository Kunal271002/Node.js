
const fs = require('fs');
fs.writeFileSync("./reqirement.txt",'MY name is Kunal');    //Sync //Blocking
fs.writeFile("./reqirement.txt",'MY name is Kunal',(err)=>{}); //Async //Blocking

const Name = fs.readFileSync("./reqirement.txt",'utf-8');
console.log(Name);

// const os = require('os');
// console.log(os.cpus().length);