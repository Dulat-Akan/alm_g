socket.on('connect', () => {
  //console.log(socket.connected); // true
  console.log("io connected to server");
  //check_ob_count();

});


socket.on('disconnect', () => {
  socket.open();
});
