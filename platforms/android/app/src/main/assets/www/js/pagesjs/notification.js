
var fixmessage = 0;

function checkNotification(){

  var email = getEmail();
  if(email != false){
    socket.emit('getNotification', {email:email});
  }

}

var fixupdateicon = 0;

socket.on('getNotification', function(data){

            if(data.data > 0){

              if(fixmessage == 0){
                sendNotification("You have " + data.data + " new Messages");
                fixmessage = 1;
              }

              $(".notifIcon").show();
              $(".notifIcon").text(data.data);
              $(".hidecontactsIcon").hide();

              fixupdateicon = 0;

            }else{

              if(fixupdateicon == 0){
                $(".notifIcon").hide();
                $(".hidecontactsIcon").show();
                fixupdateicon = 1;
              }

            }

        });



setInterval(function(){
  checkNotification();
},10000);


setInterval(function(){
  fixmessage = 0;
},60000);
