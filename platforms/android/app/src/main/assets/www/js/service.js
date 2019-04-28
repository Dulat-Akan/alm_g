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



//vstavka platezhnoi informasii
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


};


function insertMoney(){

    var iddd = localStorage.getItem("id");

    if(iddd){
      $(".insuserid").val(iddd);
      $(".uswebm").val(iddd);
      //console.log("t1");
    }
};


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


socket.on('chat message', function(msg){
          console.log(msg);
        });

$(".cl").click(function(){

  socket.emit('chat message', $message);

});
//module check obyavlenie count


//check new ads
var fixcheck_ob = 0;
//check new ads
//service variable


var money = 0;
var gold_price = 450;
var premium_price = 200;
var classic_price = 150;
var quick_price = 100;
var easy_price = 40;


var enable_money = 0;
var blocked_user = 0;
var checkblock = 0;
var limit = 0;
var checklimit = 0;
var valyuta = "KZT";

var textpod = 'подано на проверку';
var status_cash_text_status = 'no';
var temp_status_text = "temp";

var automatic_publication_status = "send_automatic";
var doverie = 0;

var enable_gold_status = 0;
var enable_premium_status = 0;
var enable_classic_status = 0;
var enable_quick_status = 0;
var enable_easy_status = 0;

var count_gold_status = 0;
var count_premium_status = 0;
var count_classic_status = 0;
var count_quick_status = 0;
var count_easy_status = 0;
//service variable

setInterval(function(){
  if(fixcheck_ob == 1){  //vhod v podachu ob i proverka

      check_ob_count();

  }
},3000);



//load all module information

function load_all_info(){

    var device = localStorage.getItem("deviceid");

    if(device){

      //console.log(device);
      socket.emit('load_all_info', {device: device,valyuta:valyuta});

    }


}

var money_temp = 0;
var currency_ru = 0;

socket.on('load_all_info_action', function(data){

    console.log(data);

    //return false;
    money = data.empty_ob_price;
    money_temp = data.empty_ob_price;
    gold_price = data.gold_price;
    premium_price = premium_price;
    classic_price = data.classic_price;
    quick_price = data.quick_price;
    easy_price = data.easy_price;
    empty_pod_text = data.empty_pod_text;
    automatic_publication_status = data.automatic_publication_status;
    temp_status_text = data.temp_status_text;
    currency_ru = data.currency_ru;

    $(".sendob").attr("sum",data.empty_ob_price);
    $(".gold_button").text("GOLD - " + gold_price + " тг.");
    $(".gold_button").attr("sum",gold_price);
    $(".premium_button").text("Premium - " + premium_price + " тг.");
    $(".premium_button").attr("sum",premium_price);
    $(".classic_button").text("Classic - " + classic_price + " тг.");
    $(".classic_button").attr("sum",classic_price);
    $(".Quick_button").text("Quick - " + quick_price + " тг.");
    $(".Quick_button").attr("sum",quick_price);
    $(".Easy_button").text("Easy - " + easy_price + " тг.");
    $(".Easy_button").attr("sum",easy_price);

});

//load all module information






//проверка обьявления

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



//zagruzit tarifi sdelat check i sdelat fixgold i sdelat raskrasku changecolor
//proverit checklimit activasiya prostogo tarifa

var check_money = 0;

socket.on('check_ob_action', function(data){

      //data.findphone_datelimit = 0;
      console.log(data);
      if((data.check_cash == 1) || (data.check_limit == 1)){

          //return false;
          if(limit == 1){
            return false;
          }
          if(blocked_user == 1){
            return false;
          }

          console.log("1_1");

          if(check_money == 0){
            enable_money = 1;
            check_money = 1;

            //console.log(enable_money);
            //console.log(check_money);
          }

          $(".sendob").text("опубликовать за " + money + " тг");

      }


      if((data.doverie == 1) || (data.doverie == 0)){

        //doverie
        if(data.doverie == 1){
          textpod = automatic_publication_status;
        }else{
          textpod = status_cash_text_status;
        }


      }

      if(data.checkblockuser == 1){


          if(limit == 1){
            return false;
          }

          if(checkblock == 0){
            myApp.dialog.alert('Вы заблокированы за спам!','Сервис');
            checkblock = 1;
          }

          $(".sendob").css("display","none");
          blocked_user = 1;

      }

      if(data.datecheck_limit == 1){ //check_limit
        //datelimit
        //return false;
        console.log("1_2");
        if(blocked_user == 1){
          return false;
        }

          limit = 1;

          $(".sendob").css("display","none");
          //$(".limit").css("display","block");

          if(checklimit == 0){

            //myApp.dialog.alert('Превышен лимит дневного использования','Сервис');
            enable_money = 1;
            checklimit = 1;
          }

      }

      if(data.findphone_check_limit == 1){    //check_limit no date for phone

            console.log("1_3");
            if(limit == 1){
              return false;
            }
            if(blocked_user == 1){
              return false;
            }


//xx
            if(check_money == 0){
              enable_money = 1;
              check_money = 1;

            }

            $(".sendob").text("опубликовать за " + money + " тг");
            //console.log("Лимит обьявл в общем");

      }


      if(data.findphone_datelimit == 1){    //day limit for phone

        //return false;

        if(blocked_user == 1){
          return false;
        }

          limit = 1;

          $(".sendob").css("display","none");
          //$(".limit").css("display","block");

          if(checklimit == 0){

            //myApp.dialog.alert('Превышен лимит дневного использования','Сервис');
            checklimit = 1;
            enable_money = 1;

          }

      }

      //godelat statusi sdelat cards napisanie preemushestva napisat skolko daetsya obyavl dlya kazhdogo statusa
      if(data.enable_gold_status == 1){
        count_gold_status = data.count_gold_status;
      }
      if(data.enable_premium_status == 1){
        count_premium_status = data.count_premium_status;
      }
      if(data.enable_classic_status == 1){
        count_classic_status = data.count_classic_status;
      }
      if(data.enable_quick_status == 1){
        count_quick_status = data.count_quick_status;
      }
      if(data.enable_easy_status == 1){
        count_easy_status = data.count_easy_status;
      }


    });

    // import store from './controllers/reducers.js'
    //
    // store.dispatch({ type: 'INCREMENT' })

    //проверка обьявления


//module check obyavlenie count
