const events=require("events");
const event=new events.EventEmitter();
const first_event=function(n1,n2){
    console.log(n1*n2);
    event.emit('click2');
    event.emit('click3');
}
const second_event=function(){
    console.log("Second event triggered");
    event.emit('click2');
}
const third_event=function(){
    console.log("Third event triggered");

}
event.on('click3',third_event);
event.on('click2',second_event);
event.on('click',first_event);
event.emit('click',2,4);