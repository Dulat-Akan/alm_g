var globalUserid = 0;
myApp.onPageInit('table', function (page) {

  var phoneid = localStorage.getItem("phoneid");
  var usid = checkAuth();
  globalUserid = usid;
  var avatar = getImage();


  var toEmail = "almagamesdealer@gmail.com";
  var toId = 1119;


  $(".letter").click(function(){
    var t = $(this).text();

    addTexttoInput(t);
  });

  $(".symbol").click(function(){
    var t = $(this).find('span:first').text();
    console.log(t);
    addTexttoInput(t);
  });

  $(".delete").click(function(){
    var t = $("#write").text();
    var nt = t.slice(0, -1);
    $("#write").text(nt);
  });

  $(".tab").click(function(){
    var t = $("#write").text();
    var nt = t + "   ";
    $("#write").text(nt);
  });

  $(".space").click(function(){
    var t = $("#write").text();
    var nt = t + " ";
    $("#write").text(nt);
  });

var fixCap = 0;

  $(".capslock").click(function(){
    if(fixCap == 0){
      upper = 1;
      fixCap = 1;
    }else{
      upper = 0;
      fixCap = 0;
    }
  });
  $(".left-shift").click(function(){
    if(fixCap == 0){
      upper = 1;
      fixCap = 1;
    }else{
      upper = 0;
      fixCap = 0;
    }
  });
  $(".right-shift").click(function(){
    if(fixCap == 0){
      upper = 1;
      fixCap = 1;
    }else{
      upper = 0;
      fixCap = 0;
    }
  });



  $("#write").on('focus', function (e) {
     $(this).blur();
    e.preventDefault();

  });



  $(".chat_input").on('focus', function (e) {

      $(".chatstatic").hide();
      $(".chatstaticn").show();
      $(".changeChatbutton").show();

     $(this).blur();
    e.preventDefault();

  });

  $(".changeChatbutton").click(function(){

    $(".chatstatic").show();
    $(".chatstaticn").hide();
    $(".changeChatbutton").hide();

  });




  // $(this).find('a:first').attr('id')

  $(".enter").click(function(){

    var text_chat = cleanxss($("#write").text());

    if(text_chat.length < 1){
      return false;
    }
    if(text_chat.length == " "){
      return false;
    }
    //console.log(usid);
    $("#write").text("");
    socket.emit('serviceMessages', {action:"setMessages",usid:usid,toEmail:toEmail,toId:toId,text:text_chat,avatar:avatar,name:usid});

    //socket.emit('chat_service', {phoneid:phoneid,userid:usid,message:text_chat});


  });


  socket.emit('serviceMessages', {action:"checkMessages",usid:usid,toEmail:toEmail,toId:toId});




  //socket.emit('chat_service', {phoneid:phoneid,userid:usid,connect:1}); //read

});


socket.on('serviceMessages', function(data){

  //console.log(data);

  var myemail = checkAuth();

  //globalUserid
  // send_own_message("You",text_chat);
  // send_alien_messages("Dealer",text_chat);


          if(data.action == "checkMessages"){

            for(var i = 0;i < data.data.length;i++){

              //console.log(data.data);

              if(data.data[i].fromUser == globalUserid){
                // var object = {
                //   text: data.data[i].message,
                //   name: data.data[i].name,
                //   avatar: data.data[i].image_url
                // };
                send_own_message("You",data.data[i].message);
              }else{
                // var object = {
                //   text: data.data[i].message,
                //   type: 'received',
                //   name: data.data[i].name,
                //   avatar: data.data[i].image_url
                // };
                send_alien_messages("Dealer",data.data[i].message);
              }
            }

            //globalMessage.addMessages(commentArray);

          }else if(data.action == "newMessages"){

            if(data.data.fromUser != globalUserid){
              send_alien_messages("Dealer",data.data.message);
            }
            // var object = {
            //   text: data.data.message,
            //   type: 'received',
            //   name: data.data.name,
            //   avatar: data.data.image_url
            // };

            //globalMessage.addMessage(object);

            //var x = document.getElementById("voice");
            //x.play();


          }else if(data.action == "setMessages"){
              send_own_message("You",data.data.message);
          }

        });

function downScroll(){
  var objDiv = document.getElementById("down_scr");
  objDiv.scrollTop = objDiv.scrollHeight;
}

function send_own_message(name,message){

  var own_name = "you";
  own_name = name;
  var own_message = "";
  own_message = message;
  var own_messages = '<div class="own_insert_block"> <div class="first_block"> <div class="chat_author_own">' + own_name + '</div> </div> <div class="second_block"> <div class="chat_alien">' + own_message + '</div> </div> </div>';
  $(".collect_box").append(own_messages);
  downScroll();

}

function send_alien_messages(name,message){
  var alien_name = "dealer";
  alien_name = name;
  var alien_messages = "";
  alien_messages = message;
  var alien_messages = '<div class="insert_block"> <div class="first_block"> <div class="chat_author">' + alien_name + '</div> </div> <div class="second_block"> <div class="chat_alien">' + alien_messages + '</div> </div> </div>';
  $(".collect_box").append(alien_messages);
  downScroll();
}



// socket.on('chat_service', function(data){
//     //console.log(data);
//     if(data.status == "new_message"){
//       var usid = checkAuth();
//       if(data.id == usid){
//         myApp.alert(data.message,'Almagames');
//         getdata();
//       }
//
//
//     }
//
// });

var upper = 0;

function addTexttoInput(word){

    var t = $("#write").text();

    if(upper == 0){
      var nt = t + word;
      $("#write").text(nt);
    }else{
      var nt = t + word.toUpperCase();
      $("#write").text(nt);
    }



}
