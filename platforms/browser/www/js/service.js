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

                        }

                        function errorfuncrestore(){


                        }
            }
        }



}




}
