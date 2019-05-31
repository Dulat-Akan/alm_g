$$(document).on('page:beforein', '.page[data-name="subscribe"]', function (e) {


      var email = getEmail();
      if(email != false){
        socket.emit('getSubscribers', {email:email});
      }

  });

    socket.on('getSubscribers', function(data){

              console.log(data);

          });
