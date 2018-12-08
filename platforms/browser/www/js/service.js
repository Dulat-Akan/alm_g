function checkOsenka(){

  var checkosenka = localStorage.getItem("osenka");

  if(checkosenka){

      if(checkosenka == "1"){

        var platform_name = platform.toLowerCase();

        //if(platform_name.indexOf("browser") >= 0){
        if(platform_name.indexOf("browser") < 0){

              myApp.dialog.confirm('Пожалуйста оцените приложение и оставьте отзыв! " ','KAZPOISK', function () {


                var platform_name = platform.toLowerCase();

                if(platform_name.indexOf("android") >= 0){
                      window.location = "https://play.google.com/store/apps/details?id=kz.kazpoisk.kz";
                }

                if(platform_name.indexOf("ios") >= 0){
                      window.location = "https://itunes.apple.com/us/app/kazpoisk/id1282461018?l=ru&ls=1&mt=8";
                }

                  //dialog.alert('Ok, your name is ' + name);
              });



        }


        localStorage.setItem("osenka","2");//osenka sdelana



      }
  }

};


function restorepassword(){

    myApp.dialog.prompt('Введите телефон для восстановления?','Kazpoisk', function (phone) {

                            var newphone = "";


                            if(phone.length <= 0){

                              myApp.dialog.alert('Поле ввода не должно быть пустым','Kazpoisk');

                              setTimeout(function(){

                                  myApp.dialog.close();

                                  restorepassword();

                              },2000);

                            }else{

                                  for(var g = 0;g < phone.length;g++){

                                      if(g == 1){
                                        newphone += "(" + phone[g];
                                      }else if(g == 4){
                                        newphone += ")" + phone[g];
                                      }else{

                                        if(g == 0){
                                            if(phone[g] == "7"){
                                                newphone += "8";
                                            }else{
                                                newphone += phone[g];
                                            }
                                        }else{
                                          newphone += phone[g];
                                        }

                                      }

                                  }

                                  //console.log(newphone);

                                  var sendrestorepass = {

                                                          "phone":newphone,

                                                      }

                                      //console.log(useridentificator4);

                                         var urlrestore = localStorage.getItem("baseurl");

                                        $.ajax({
                                              "type":"GET",
                                              "url": urlrestore + "restoreemailpassword/",    /*random restourants menu zakaZ*/

                                              dataType: "jsonp",
                                              crossDomain: true,
                                              "data": sendrestorepass,

                                              "success":kxrestore,
                                              "error":errorfuncrestore

                                              });


                                        function kxrestore(result){

                                                console.log(result);

                                                if(result[1] == "ok"){
                                                    myApp.dialog.alert('новый пароль выслан на email: ' + result[0],'Kazpoisk');
                                                }else{
                                                    myApp.dialog.alert('Номер абонента не найден! проверьте телефон ','Kazpoisk');
                                                }





                                        }

                                        function errorfuncrestore(){


                                        }

                                  //

                                  }

                        });

};




function searchContacts(){



        function onSuccess(contacts) {
            console.log(contacts);
        };

        function onError(contactError) {
            console.log('onError!');
        };

        // find all contacts with 'Bob' in any name field
        var options = new ContactFindOptions();
        //options.filter="Bob";
        options.filter = "";
        options.multiple=true;
        var fields = ["displayName", "name"];
        navigator.contacts.find(fields, onSuccess, onError, options);



}



function checkuserid(){

  var usem = localStorage.getItem("useremail");

  var uscheckedid = localStorage.getItem("id");


  if(!uscheckedid){


        if(usem){
            if(usem != null){
                                var send = {

                                          "email":usem,

                                      }



                         var urlr = localStorage.getItem("baseurl");

                        $.ajax({
                              "type":"GET",
                              "url": urlr + "getuserid/",    /*random restourants menu zakaZ*/

                              dataType: "jsonp",
                              crossDomain: true,
                              "data": send,

                              "success":kxrestore,
                              "error":errorfuncrestore

                              });


                        function kxrestore(result){

                                //console.log(result);
                                localStorage.setItem("id",result[1]);

                                insertMoney();

                        }

                        function errorfuncrestore(){


                        }
            }
        }



}


}


function insertMoney(){

    var iddd = localStorage.getItem("id");

    if(iddd){
      $(".insuserid").val(iddd);
      $(".uswebm").val(iddd);
      //console.log("t1");
    }
}


socket.on('connect', () => {
  //console.log(socket.connected); // true
  console.log("io connected to server");

  //check_ob_count();
});


socket.on('disconnect', () => {
  socket.open();
});


socket.on('error', function(){
  socket.socket.reconnect();
  console.log("reconnect..");
});

//module check obyavlenie count


//check new ads
var fixcheck_ob = 0;
//check new ads

setInterval(function(){
  if(fixcheck_ob == 1){

      check_ob_count();

  }
},3000);


function check_ob_count(){
  var sendemail = localStorage.getItem("useremail");

  var phone = $(".myphone").val();
  var checkphone = 0;
  //console.log(phone);

  if(phone){
    if(phone.length == 14){

        if(phone.indexOf("_") < 0){
          checkphone = 1;
        }

    }
  }


  if(sendemail){

    var checkdeviceid = localStorage.getItem("deviceid");

    if(!checkdeviceid){
      checkdeviceid = "";
    }

    if(checkphone == 0){
      phone = "";
    }
    socket.emit('check_ob', {email: sendemail,phone:phone,deviceid:checkdeviceid});
    //console.log(sendemail);
  }
}


socket.on('check_ob_action', function(data){
      console.log(data);
      if(data.msg == "false"){
        
      }
    });


//module check obyavlenie count
