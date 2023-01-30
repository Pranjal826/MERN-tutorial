const fs=require("fs");
const data={
    name:"Pranjal Shukla",
    age:20,
    course:"Btech",
    channel:"none",
};
/*const jsondata=JSON.stringify(data);
console.log(jsondata);
const objdata=JSON.parse(jsondata);
console.log(objdata);*/
const jsondata=JSON.stringify(data);

fs.writeFile("json1.json",jsondata,(err)=>{
    console.log("done");
});
fs.readFile("json1.json",'utf-8',(err,data)=>{
    const orgdata=JSON.parse(data);
console.log(data);
console.log(orgdata);
});