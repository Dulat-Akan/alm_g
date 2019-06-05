var page = 1;
$$(document).on('page:beforein', '.page[data-name="contact"]', function (e){


      var email = getEmail();
      if(email != false){
        console.log("send");
        socket.emit('getContacts', {email:email});
      }

      page = 1;

  });





    socket.on('getContacts', function(data){

              //console.log(data);
              RenderContactList(data.data);

          });
