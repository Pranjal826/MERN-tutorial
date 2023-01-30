var express = require("express");

var mongoose = require('mongoose');

mongoose.set('strictQuery',false);
var url = "mongodb://127.0.0.1:27017/mydb";



var server = express();

mongoose.connect(url, function (err, db) {

    if (err) throw err;

    console.log("Database created!");

});
const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    active:Boolean,
    data:{
        type:Date,
        default:Date.now
    }
})
const Playlist=new mongoose.model("Playlist",playlistSchema);
const createDocument=async()=>{
    try{
        const reactPlaylist=new Playlist({
            name:"Node Js",
            ctype:"Back end",
            videos:50,
            author: "Pranjal Shukla",
            active:true
        })
        const result =await reactPlaylist.save();
        console.log(result);
        }catch(err){
            console.log(err);

        }
}
createDocument();