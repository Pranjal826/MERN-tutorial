nd event triggered");
event.emit('click1');
}
event.on('click1',second_event);
event.on('click2',4,5);