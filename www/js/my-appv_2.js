//ostanovilsya zdes

//localStorage.setItem("category1",categoryname);

//lovel1
//lovel2
//lovel3

// localStorage.setItem("role",result[3]);    //1,2
// localStorage.setItem("useridentificator",result[1]); phone
// localStorage.setItem("useremail",result[2]);       //email
//localStorage.setItem("deviceid",window.device.uuid);
   //console.log(window.device.uuid);


   //plugins

   //cordova-plugin-image-picker
   //device

   //plugins

   //checkuserauth
   //localStorage.setItem("role","1");

var myApp = new Framework7();

var globaltime = 0;

var appversion = 3;

var migrateitem = new Array();


// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    domCache: true //enable inline pages

});


var globalvalue = 0;
var globalvaluegetlocalob = 0;
var globalfixcabinet = 0;
var globalfixcodecabinet = 0;
var globalfixobupload = 0;
var upevent = 0;
var phoneid = 0;




// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    return;
}


//hide splashscrin
function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide();

    }
}
document.addEventListener("app.Ready", onAppReady, false) ;
//hide splashscrin

//function cordova file

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log("ready_app");
        //setdeviceinfo
                console.log(window.location.href);
                phoneid = window.device.uuid;

                console.log(phoneid);

                localStorage.setItem("deviceid",phoneid);

                //setdeviceinfo
                //readFile();


                var useridentificator = localStorage.getItem("useridentificator");

                //console.log(useridentificator);

                if(!useridentificator){
                    localStorage.setItem("useridentificator","0");
                }

                var useridentificator6 = localStorage.getItem("useridentificator");



                if(useridentificator6 != 0){
                    $(".hide_reg").hide();
                    $(".hide_login").hide();
                    $(".hide_cabinet").show();

                }
//lll
                if(useridentificator6 == 0){
                    $(".show_vihod").hide();
                    $(".hide_cabinet").hide();
                }

                var role = localStorage.getItem("role");

                // if(role == 2){
                //
                // }else{
                //
                // }
                //
                // if(role == 1){
                //
                // }else{
                //
                // }

                //console.log(useridentificator6);




                $(".cabinetclick").click(function(){

                    var useridentificator = localStorage.getItem("useridentificator");

                    if(useridentificator == 0){
                        mainView.router.loadPage("login.html");
                    }else{
                        mainView.router.loadPage("cabinet.html");
                    }

                });



                $(".vhod").click(function(){
                      mainView.router.loadPage("login.html");
                });

                $(".registration").click(function(){
                      mainView.router.loadPage("registration.html");
                });




//module start view obyav



     //index





                      //insertob

                      firstviewob();

//module view obyav



            //rabb

            //contacts


            //cordova plugin contacts

            //  var contactFindOptions = new ContactFindOptions();
            // contactFindOptions.filter = "";
            // contactFindOptions.multiple = true;
            // contactFindOptions.hasPhoneNumber = true;
            // navigator.contacts.find(
            //         ["phoneNumbers"],
            //         function (contacts) {



            //           if(contacts){
            //               for(var i = 0;i < contacts.length;i++){

            //                 console.log(contacts[i]);

            //                   if(contacts[i].displayName){
            //                       console.log(contacts[i].displayName);
            //                   }

            //                   if(contacts[i].phoneNumbers){
            //                       for(var j = 0;j < contacts[i].phoneNumbers.length;j++){
            //                         console.log(contacts[i].phoneNumbers[j].value);
            //                       }
            //                   }




            //               }
            //           }


            //         },
            //         function (e) {
            //             if (e.code === ContactError.NOT_SUPPORTED_ERROR) {
            //                console.log("Searching for contacts is not supported.");

            //             } else {
            //                 console.log("Search failed: error " + e.code);

            //             }
            //         },
            //         contactFindOptions);





           //new contacts




           //new contacts
            //contacts


            //send sms

            //cordova sms plugin

            // function sendsms(number,message){

            //       var number = number;
            //       var message = message;

            //       console.log("number=" + number + ", message= " + message);

            //       //CONFIGURATION
            //       var options = {
            //           replaceLineBreaks: false, // true to replace \n by a new line, false by default
            //           android: {
            //               //intent: 'INTENT'  // send SMS with the native android SMS messaging
            //               intent: '' // send SMS without open any other app
            //           }
            //       };

            //       var success = function () { console.log('Message sent successfully'); };
            //       var error = function (e) { console.log('Message Failed:' + e); };

            //        //sms.send(number, message, options, success, error);



            // }


              //sendsms("87005550138","kuat eto proverka otvet mne na watsapp");


            //send sms


// function getWebRoot() {
//     "use strict" ;
//     var path = window.location.href ;
//     path = path.substring( 0, path.lastIndexOf('/') ) ;
//     return path ;
// }






             // console.log(phoneid);

             //test websocket


    }
};



$("#opensearch").click(function(){

    $("#searchbutton").toggle(800);

});

$(".top_input").focus(function(){

    var height = $(window).height();

    if(height > '570'){
        $(".opensearch").css("top","19%");
        $(".searchbutton").css("top","19%");
    }else{
        $(".opensearch").css("top","19%");
        $(".searchbutton").css("top","19%");
    }

    $(".searchbutton").css("height","11%");


});

$(".top_input").blur(function(){

  var height = $(window).height();

  if(height > '570'){
      $(".opensearch").css("top","8%");
      $(".searchbutton").css("top","8%");
  }else{
    $(".opensearch").css("top","9%");
    $(".searchbutton").css("top","9%");
  }

  $(".searchbutton").css("height","6%");


});


// document.addEventListener("deviceready", onDeviceReady, false);
//             function onDeviceReady() {




//             }//kones ondevice ready

function savefinding(){

    if(checkuserauth() == false){
        myApp.prompt('Для продолжения работы введите ваш "EMAIL" ','KAZPOISK', function (email) {

            if(checkemail(email) == true){
              myApp.alert('Большое спасибо ваш EMAIL ' + email + ' зарегистрирован в нашей системе и будет использоваться для оповещений о новых результатах по вашим запросам','KAZPOISK');
              auto_registration(email);
            }else{
              myApp.alert(' пожалуйста введите правильный EMAIL ','KAZPOISK');
              savefinding();
            }

        });
      }

}

function auto_registration(email){


              var newdeviceid = localStorage.getItem("deviceid");


                      var sendnewregistration = {

                                "deviceid":newdeviceid,
                                "email":email

                            }

                          //  console.log(userid);


                               var burl = localStorage.getItem("baseurl");

                              $.ajax({

                                    "type":"GET",
                                    "url": burl + "auto_auth_deviceid/",    /*random obyav*/

                                    dataType: "jsonp",
                                    crossDomain: true,
                                    "data": sendnewregistration,

                                    "success":successautoreg,
                                    "error":errorregistration

                                    });


                              function successautoreg(result){


                                //console.log(result);
                                auto_auth(result);




                              }

                              function errorregistration(){


                              }

}


function auto_auth(result){

    console.log(result);
    if(result[0] == false){

        //zapis v telefon
        //new registration
        savefinding();

    }else if(result[0] == true){


        $(".hide_reg").hide();
        $(".hide_login").hide();
        $(".show_vihod").show();
        $(".hide_cabinet").show();

        localStorage.setItem("role",result[3]);
        localStorage.setItem("useridentificator",result[2]);//phone
        localStorage.setItem("useremail",result[1]);

    }else if(result[1] == "successupdate"){

        $(".hide_reg").hide();
        $(".hide_login").hide();
        $(".show_vihod").show();
        $(".hide_cabinet").show();

        localStorage.setItem("role",result[3]);
        localStorage.setItem("useridentificator",result[3]);//phone
        localStorage.setItem("useremail",result[2]);

    }else if(result[1] == "complit_registration"){

        $(".hide_reg").hide();
        $(".hide_login").hide();
        $(".show_vihod").show();
        $(".hide_cabinet").show();

        localStorage.setItem("role",result[3]);
        localStorage.setItem("useridentificator",result[3]);//phone
        localStorage.setItem("useremail",result[2]);

    }else if(result[1] == "deviceid_not_inserted"){

        //zaprosit parol
        autocheckpassword(result[2]);

    }else if(result[0] == "checking_email"){

        $(".hide_reg").hide();
        $(".hide_login").hide();
        $(".show_vihod").show();
        $(".hide_cabinet").show();

        localStorage.setItem("role",result[3]);
        localStorage.setItem("useridentificator",result[3]);//phone
        localStorage.setItem("useremail",result[2]);

    }

}

function newrequest(array,path){

      var burl = localStorage.getItem("baseurl");

          $.ajax({

                "type":"GET",
                "url": burl + path + "/",    /*random obyav*/

                dataType: "jsonp",
                crossDomain: true,
                "data": array,

                "success":success,
                "error":errorreg

                });


          function success(result){

            //console.log(result);
            if(result[0] == "checking_email"){
                if(result[1] == 5){

                    //console.log(result);
                    //vse ok
                    auto_auth(result);
                    myApp.alert('Благодарю за авторизацию )) .. теперь вы можете продолжить работу ','Kazpoisk');
                }else{

                    myApp.alert('введенный пароль неправильный .. повторите пожалуйста ввод ','Kazpoisk');
                    autocheckpassword(result[2]);
                }
            }

          }

          function errorreg(){

              return false;

          }

}

function autocheckpassword(email){

      var ndeviceid = localStorage.getItem("deviceid");

      if(checkuserauth() == false){
        myApp.prompt('Введите пароль от вашей почты ' + email + ' ( проверка подлинности владельца почтового ящика)','KAZPOISK', function (password) {

            var sendrequest = {
                "email":email,
                "password":password,
                "deviceid":ndeviceid,
            }

            var result = newrequest(sendrequest,"autocheckpasswordapp");





        });
      }

}


function firstviewob(){

  console.log("firstviewob");

              var userid = localStorage.getItem("useridentificator");
              var phid = localStorage.getItem("deviceid");

              $(".gifloader").show();

                      var sendview = {

                                "useridentificator":userid,
                                "deviceid":phid

                            }

                          //  console.log(userid);

                            $('.loader-hide').css("display","block");

                               var urlm = localStorage.getItem("baseurl");

                              $.ajax({

                                    "type":"GET",
                                    "url": urlm + "viewobapp/",    /*random obyav*/

                                    dataType: "jsonp",
                                    crossDomain: true,
                                    "data": sendview,

                                    "success":kxg,
                                    "error":errorfuncg

                                    });


                              function kxg(result){

                                //console.log(result[3]); //auth data
                                auto_auth(result[4]);
                                //$('.loader-hide').css("display","none");
                                $(".gifloader").hide();
                                insertviewob(result);

                                pageindex = result[3];
                                //pageindex = 40;

                                //xx
                                console.log(pageindex);

                                console.log(result[5]['appversion']);

                                var dbappversion = result[5]['appversion'];

                                console.log(navigator.userAgent);
                                if(appversion != dbappversion){
                                    myApp.alert('приложение нуждается в обновлении! Пожалуйста обновите приложение. после перенаправления нажмите обновить(UPDATE)','Kazpoisk');

                                    if(navigator.userAgent.lastIndexOf("iPhone") > 0){
                                        var iphone = "https://itunes.apple.com/us/app/kazpoisk-%D0%BE%D0%B1%D1%8A%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BA%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%D0%B0/id1282461018?ls=1&mt=8";

                                        setTimeout(function(){
                                            window.location.href = iphone;
                                        },4000);
                                    }else{
                                        var android = "https://play.google.com/store/apps/details?id=kz.kazpoisk.kz";
                                        setTimeout(function(){
                                            window.location.href = android;
                                        },4000);
                                    }

                                }




                              }

                              function errorfuncg(){

                                $('.loader-hide').css("display","none");
                                firstviewob();
                              }


}


//check user

function checkuserauth(){

    var useridentificatorvalue = localStorage.getItem("useridentificator");

    var checkuser = false;

    if(useridentificatorvalue != 0){
        checkuser = true;
    }

    return checkuser;

}

function checkemail(email){
    //
    var validemail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/gi;

    if(email.match(validemail)){
        return true;
    }else{
        return false;
    }


}
//check user

//function check userrequest for save finding




//function check userrequest for save finding



        var pageindex = 0;
        var pagefixed = 0;
        var startcount = 40;
        var pagescroll = screen.height * 2;
        var defaultpagescroll = screen.height * 2;
        var summingpagescroll = 916;

        var sumplus = (screen.height / 5) - 80;
        //var sumplus = (screen.height / 5) - 100;
//jjj

        //console.log(sumplus);





            $(".page-content").scroll(function(){

                var scrolltop = $(this).scrollTop();

                //console.log(scrolltop);
                //console.log(pagescroll);

                if(scrolltop > pagescroll){

                    //var startcountsum = pageindex - startcount;
                    var startcountsum = pageindex;

                    console.log(startcountsum);

                    if(pagefixed == 0){
                        getviewobs(startcountsum,10);

                        //startcount += 10;
                        pagefixed = 1;


                        //91.6px odna zapis
                        //916 px na 10 zapisei
                    }

                }
                //console.log(scrolltop);

              });



//function insert scrolling

function getviewobs(startcount,pagesum){

                //console.log("startcount: " + startcount);

                var sendviewob = {

                                "useridentificator":"dd",
                                "startcount":startcount,
                                "pagesum":pagesum,

                            }

                            //console.log(useridentificator4);

                            //$('.loader-hide').css("display","block");

                               var urlmm = localStorage.getItem("baseurl");

                              $.ajax({

                                    "type":"GET",
                                    "url": urlmm + "viewcountobapp/",    /*random obyav*/

                                    dataType: "jsonp",
                                    crossDomain: true,
                                    "data": sendviewob,

                                    "success":kxgs,
                                    "error":errorfuncgs

                                    });


                              function kxgs(result){


                                console.log(result);

                                if(result[0] != "no"){
                                  insertviewobaddmincount(result);

                                  //summingpagescroll = result[0].length * 91.6;
                                  summingpagescroll = result[0].length * sumplus;

                                  pagescroll += summingpagescroll;

                                  pageindex = result[3];

                                  pagefixed = 0;

                                  //647 stolbsov 5

                                }else{
                                  summingpagescroll = 0;
                                }

                                //console.log(pagescroll);



                                //insertviewob(result);



                              }

                              function errorfuncgs(){

                                $('.loader-hide').css("display","none");
                              }


}
//function insert scrolling





//cleanxss


function cleanxss(formData){

  var validate = ["script","alert","php","xss","*","-- -","--","<",">","concat","=","<script>","</script>","</"];

    //validate function

    for (key in formData) {

        for(var i = 0;i < validate.length;i++){

          var tt = formData[key];
          ttxt = tt.toString();
          var xt = ttxt.indexOf(validate[i]);

          //console.log(xt);

          if(xt >= 0){

              formData[key] = ".";
              //console.log("заменена");

          }


          var t = formData[key].length;

          for(var j = 0;j < t;j++){

            var y = formData[key][j];

            if(y == validate[i]){
              formData[key][j] = ".";
              //console.log("заменена");
            }

          }

        }

        //console.log(key);

    }

    return formData;

}
//cleanxss
//service function

//rabb

//x11
//xxx

function insertviewob(result){

      var role = localStorage.getItem("role");

      if(result[0] != "false"){

        $(".insertob").empty();

                                  var countfindobjects = result[0].length;

                                  $(".searchkvbutton").text("найдено " + countfindobjects + " объявлений");

                                  setTimeout(function () {
                                      myApp.hidePreloader();
                                  }, 1000);
                                  //searchkvbutton

                                  for(var i = 0;i < result[0].length;i++){

                                    var statusid = result[0][i].id;
                                    var status = result[0][i].status;
                                    //console.log(status);
                                    var r_alm = result[0][i].r_alm;
                                    var city_alm = result[0][i].city_alm;
                                    var r_astana = result[0][i].r_astana;
                                    var city_ast = result[0][i].city_ast;
                                    var vremya_nachala_auxion = result[0][i].vremya_nachala_auxion;
                                    var vremya_okonch_auxion = result[0][i].vremya_okonch_auxion;

                                    var vremya_okonch_auxion = result[0][i].vremya_okonch_auxion;

                                    var photo = "n.jpg";
                                    var baseurlimg2 = localStorage.getItem("baseurlimg4");

                                    var year_build_car = result[0][i].year_build_car;
                                    var obem40x = result[0][i].obem40x;

                                    var opisanie = result[0][i].opisanie;

                                    var array = [" ","ЖК: "," ","ЖК: ","время начала аукциона: ","время окончания аукциона: "];
                                    var array2 = [r_alm,city_alm,r_astana,city_ast,vremya_nachala_auxion,vremya_okonch_auxion];


                                    if(result[1][i] != "n.jpg"){

                                        photo = result[1][i].photo_path[0];

                                    }

                                    var photourl = baseurlimg2 + photo;


                                    var op = "";


                                    for(var j = 0; j < array2.length; j++) {




                                                if(array2[j] == "нет"){

                                                  array[j] = "";
                                                  array2[j] = "";


                                                }else if(array2[j] == "0"){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == ""){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == "-1"){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == "нет"){
                                                  array[j] = "";
                                                  array2[j] = "";
                                                }else if(array2[j] == null){
                                                  array[j] = "";
                                                  array2[j] = "";
                                                }else{/*zakritie if*/


                                                  array[j];
                                                  array2[j];



                                                }

                                                var fixz = 0;

                                                if(array2[j] == ""){
                                                    if(year_build_car != "0"){

                                                        var array3 = ["г.","л."];
                                                        var array4 = [year_build_car,"объем:" + obem40x];

                                                        fixz = 1;



                                                        array2[0] = array4[0] + array3[0];

                                                        if(array4[1] != "0"){
                                                            array[1] = array4[1] + array3[1];
                                                        }

                                                    }
                                                 }

                                                 if(fixz == 0){



                                                        op = opisanie;





                                                 }

                                     } /*zakritie for*/







                                    var cityview = "";

                                    var city = result[0][i].city;

                                    if(city != "0"){
                                      cityview = city;
                                    }
   //x10
//#ffd6d6 -- svet
//module podsvetki

//status promo == 1

var newstatus = 0;

if(status == "promo"){
  newstatus = 1;
}else if(status == "top"){
  newstatus = 2;
}else if(status == "g"){
  newstatus = 3;
}else if(status == "sr"){
  newstatus = 4;
}else if(status == "pod"){
  newstatus = 5;
}

//module podsvetki

//console.log(newstatus + " | " + statusid + " | ");

// var templateobyav = '<li status="'+ newstatus + '" listid="'+ newstatus + " | " + statusid +'" class="exmachange" > <a href="#" style="" ident="'+ i +'" cashid="' + result[3] + '" class="viewob item-link item-content"> <div class="item-media"><img src="' + photourl + '" '+
// ' width="80" height="80" style="background-size:cover;"></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">'+ result[0][i].zagolovok +'</div>'+
// ' <div class="item-after">'+ result[0][i].sena + 'тг.' +'</div> </div> <div class="item-subtitle">'+ cityview +'</div>'+
// ' <div class="item-text">' + array[0] + array2[0]+' '+array[1]+array2[1]+array[2]+array2[2]+' '+array[3]+array2[3] + ' ' + op + '</div> </div> </a> </li>';


var templateobyav = '<li status="'+ newstatus + '" listid="'+ newstatus + " | " + statusid
+'" class="li_img_styling exmachange"> <div ident="'+ i +'" cashid="' + result[3] + '" class="viewob imgheight" style="background: url(' + photourl
+ ') no-repeat center/cover;"> <div class="imgheight_div"> <div class="imgheight_title" >' + result[0][i].zagolovok
+ '</div> <div class="imgheight_text" >'+ cityview +'</div> <div class="imgheight_text" >'
+ array[0] + array2[0]+' '+array[1]+array2[1]+array[2]+array2[2]+' '+array[3]+array2[3] + ' ' + op
+ '</div> <div class="imgheight_text" >'+ result[0][i].sena + 'тг.' +'</div> </div> </div> </li>';

var admin_template = '<li> <a href="#" style="" ident="'+ statusid +'" cashid="' +
 result[3] + '" class="item-link item-content"> <div class="item-media"><img src="' + photourl + '" '+
' width="80" height="80" style="background-size:cover;"></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">'+ result[0][i].zagolovok +'</div>'+
' <div class="item-after">'+ result[0][i].sena + 'тг.' +'</div> </div> <div class="item-subtitle">'+ cityview +'</div>'+
' <div class="item-text">' +

'<div class="row"><button ident="'+ i
+'" " class="button color-green viewob" v="1"><i class="material-icons">&#xE869;</i></button><button upob="'+ '' +
'" " class="button color-blue upob"><i class="material-icons">&#xE8E5;</i></button><button retimeid="'+ statusid +
'" " class="button color-orange retimeob" ><i class="material-icons">&#xE192;</i></button><button rmid="'+ statusid +
'" " class="button color-red deleteob"><i class="material-icons">&#xE92B;</i></button></div>'

 + '</div> </div> </a> </li>';

//lll
if(role == "1"){
  $(".insertob").append(admin_template);
}else{
  $(".insertob").append(templateobyav);
}





                                  }

                                  //console.log(role + "role");

//xxx first
                                  // var delete_item = localStorage.getItem("delete");
                                  //
                                  // localStorage.removeItem(delete_item);
                                  //
                                  // localStorage.setItem("delete",JSON.stringify("ob" + result[3]));

                                  var mitem = localStorage.getItem("migrateitem");

                                  if(mitem){
                                    var migrItem = JSON.parse(mitem);

                                    for(var x = 0;x < migrItem.length;x++){

                                        localStorage.removeItem(migrItem[x]);
                                        console.log(migrItem[x]);

                                    }
                                  }



                                  localStorage.setItem("ob" + result[3],JSON.stringify(result));

                                  migrateitem.push("ob" + result[3]);
                                  console.log(migrateitem);

                                  //console.log("ob" + result[3]);

                                  //console.log(localStorage.getItem("ob" + result[3]));

                                  if(role == "1"){
                                    $(".deleteob").click(function(){

                                        var v = $(this).attr("rmid");
                                        console.log(v);

                                        var senddelete = {

                                                            "rem_id":v,

                                                        }

                                                           var update_url = localStorage.getItem("baseurl");

                                                          $.ajax({
                                                                "type":"GET",
                                                                "url": update_url + "update_users_ob/",    /*random restourants menu zakaZ*/

                                                                dataType: "jsonp",
                                                                crossDomain: true,
                                                                "data": senddelete,

                                                                "success":kx2881,
                                                                "error":errorfunc

                                                                });


                                                          function kx2881(result){

                                                                  console.log(result);

                                                                  if(result[0] == "ok"){
                                                                    myApp.alert('Объявление удалено в архив!','Kazpoisk');
                                                                  }else{
                                                                    myApp.alert('Действие не удалось!','Kazpoisk');
                                                                  }

                                                          }

                                                          function errorfunc(){


                                                          }


                                    });



                                    $(".retimeob").click(function(){

                                        var v = $(this).attr("retimeid");
                                        console.log(v);

                                        var senddelete = {

                                                            "rem_id":v,

                                                        }

                                                           var update_url = localStorage.getItem("baseurl");

                                                          $.ajax({
                                                                "type":"GET",
                                                                "url": update_url + "update_users_retime_ob/",    /*random restourants menu zakaZ*/

                                                                dataType: "jsonp",
                                                                crossDomain: true,
                                                                "data": senddelete,

                                                                "success":kx2881,
                                                                "error":errorfunc

                                                                });


                                                          function kx2881(result){

                                                                  console.log(result);

                                                                  if(result[0] == "ok"){
                                                                    myApp.alert('Объявление восстановлено!','Kazpoisk');
                                                                  }else{
                                                                    myApp.alert('Действие не удалось!','Kazpoisk');
                                                                  }

                                                          }

                                                          function errorfunc(){


                                                          }


                                    });


                                  }else{
                                    $(".viewob").click(function(){

                                        var ident = $(this).attr("ident");
                                        var ncashid = $(this).attr("cashid");

                                        console.log(ncashid);

                                        mainView.router.loadPage("#n1");

                                        globalvalue = ident;

                                        globalvaluegetlocalob = ncashid;

                                        console.log("first_param" + globalvaluegetlocalob);




                                    });
                                  }






                              }



  }       //kones function


  function insertviewobaddmincount(result){

      if(result[0] != "false"){

        //$(".insertob").empty();

                                  var countfindobjects = result[0].length;

                                  $(".searchkvbutton").text("найдено " + countfindobjects + " объявлений");

                                  setTimeout(function () {
                                      myApp.hidePreloader();
                                  }, 1000);
                                  //searchkvbutton

                                  for(var i = 0;i < result[0].length;i++){

                                    var statusid = result[0][i].id;
                                    var status = result[0][i].status;
                                    //console.log(status);
                                    var r_alm = result[0][i].r_alm;
                                    var city_alm = result[0][i].city_alm;
                                    var r_astana = result[0][i].r_astana;
                                    var city_ast = result[0][i].city_ast;
                                    var vremya_nachala_auxion = result[0][i].vremya_nachala_auxion;
                                    var vremya_okonch_auxion = result[0][i].vremya_okonch_auxion;

                                    var vremya_okonch_auxion = result[0][i].vremya_okonch_auxion;

                                    var photo = "n.jpg";
                                    var baseurlimg2 = localStorage.getItem("baseurlimg4");

                                    var year_build_car = result[0][i].year_build_car;
                                    var obem40x = result[0][i].obem40x;

                                    var opisanie = result[0][i].opisanie;

                                    var array = [" ","ЖК: "," ","ЖК: ","время начала аукциона: ","время окончания аукциона: "];
                                    var array2 = [r_alm,city_alm,r_astana,city_ast,vremya_nachala_auxion,vremya_okonch_auxion];


                                    if(result[1][i] != "n.jpg"){

                                        photo = result[1][i].photo_path[0];

                                    }

                                    var photourl = baseurlimg2 + photo;


                                    var op = "";


                                    for(var j = 0; j < array2.length; j++) {




                                                if(array2[j] == "нет"){

                                                  array[j] = "";
                                                  array2[j] = "";


                                                }else if(array2[j] == "0"){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == ""){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == "-1"){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == "нет"){
                                                  array[j] = "";
                                                  array2[j] = "";
                                                }else if(array2[j] == null){
                                                  array[j] = "";
                                                  array2[j] = "";
                                                }else{/*zakritie if*/


                                                  array[j];
                                                  array2[j];



                                                }

                                                var fixz = 0;

                                                if(array2[j] == ""){
                                                    if(year_build_car != "0"){

                                                        var array3 = ["г.","л."];
                                                        var array4 = [year_build_car,"объем:" + obem40x];

                                                        fixz = 1;



                                                        array2[0] = array4[0] + array3[0];

                                                        if(array4[1] != "0"){
                                                            array[1] = array4[1] + array3[1];
                                                        }

                                                    }
                                                 }

                                                 if(fixz == 0){



                                                        op = opisanie;





                                                 }

                                     } /*zakritie for*/







                                    var cityview = "";

                                    var city = result[0][i].city;

                                    if(city != "0"){
                                      cityview = city;
                                    }
   //x10
//#ffd6d6 -- svet
//module podsvetki

//status promo == 1

var newstatus = 0;

if(status == "promo"){
  newstatus = 1;
}else if(status == "top"){
  newstatus = 2;
}else if(status == "g"){
  newstatus = 3;
}else if(status == "sr"){
  newstatus = 4;
}else if(status == "pod"){
  newstatus = 5;
}

//module podsvetki

//console.log(newstatus + " | " + statusid + " | ");

// var templateobyav = '<li status="'+ newstatus + '" listid="'+ newstatus + " | " + statusid +'" class="exmachange" > <a href="#" style="" ident="'+ i +'" cashid="' + result[3] + '" class="viewob item-link item-content"> <div class="item-media"><img src="' + photourl + '" '+
// ' width="80" height="80" style="background-size:cover;"></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">'+ result[0][i].zagolovok +'</div>'+
// ' <div class="item-after">'+ result[0][i].sena + 'тг.' +'</div> </div> <div class="item-subtitle">'+ cityview +'</div>'+
// ' <div class="item-text">' + array[0] + array2[0]+' '+array[1]+array2[1]+array[2]+array2[2]+' '+array[3]+array2[3] + ' ' + op + '</div> </div> </a> </li>';

var templateobyav = '<li status="'+ newstatus + '" listid="'+ newstatus + " | " + statusid
+'" class="li_img_styling exmachange"> <div ident="'+ i +'" cashid="' + result[3] + '" class="viewob imgheight" style="background: url(' + photourl
+ ') no-repeat center/cover;"> <div class="imgheight_div"> <div class="imgheight_title" >' + result[0][i].zagolovok
+ '</div> <div class="imgheight_text" >'+ cityview +'</div> <div class="imgheight_text" >'
+ array[0] + array2[0]+' '+array[1]+array2[1]+array[2]+array2[2]+' '+array[3]+array2[3] + ' ' + op
+ '</div> <div class="imgheight_text" >'+ result[0][i].sena + 'тг.' +'</div> </div> </div> </li>';





$(".insertob").append(templateobyav);


                                  }


//xxx
                                    //console.log(result[3]);


                                  localStorage.setItem("ob" + result[3],JSON.stringify(result));

                                  migrateitem.push("ob" + result[3]);
                                  //console.log(migrateitem);
                                  localStorage.removeItem("migrateitem");
                                  localStorage.setItem("migrateitem",JSON.stringify(migrateitem));

                                  //console.log(localStorage.getItem("ob" + result[3]));

                                  $(".viewob").click(function(){

                                      var ident = $(this).attr("ident");

                                      var cashid = $(this).attr("cashid");

                                      mainView.router.loadPage("#n1");

                                      globalvalue = ident;
                                      globalvaluegetlocalob = cashid;    //identificator latest id

                                      console.log(cashid);




                                  });




                              }



  }       //kones function






//service function







//routing

localStorage.setItem("baseurl","http://ls2.kz/public_control/");
localStorage.setItem("baseurlimg","http://ls2_mobile.kz/assets/img/");
localStorage.setItem("baseurlimg2","http://ls2_mobile.kz/assets/entry/uploads/");
localStorage.setItem("baseurlimg3","http://ls2_mobile.kz/assets/entry/uploadsv/");
localStorage.setItem("baseurlimg4","http://ls2.kz/assets/entry/uploads/");


// localStorage.setItem("baseurl","http://www.kazpoisk.kz/public_control/");
// localStorage.setItem("baseurlimg","http://www.kazpoisk.kz/assets/img/");
// localStorage.setItem("baseurlimg2","http://www.kazpoisk.kz/assets/entry/uploads/");
// localStorage.setItem("baseurlimg3","http://www.kazpoisk.kz/assets/entry/uploadsv/");
// localStorage.setItem("baseurlimg4","http://www.kazpoisk.kz/assets/entry/uploads/");


//opredelenie avtorizovan li polzovatel


//opredelenie avtorizovan li polzovatel

//console.log(useridentificator);

//baseUrl localstorage








//https://www.tutorialspoint.com/cordova/cordova_file_system.htm   -- site cordova

myApp.onPageInit('about', function (page) {






});


// myApp.onPageInit('index', function (page) {



//     console.log("index");


// });





myApp.onPageInit('registration', function (page) {

                var clienturl = localStorage.getItem("clienturl");

                if(!clienturl){
                    var clienturl = "index.html";
                }

            //registration

                    //validation form registration

                    $('[name = "phone"]').mask("9(999)9999999");

                    $$('.form-to-register').on('click', function(){


                      $(".gifloader").show();

                        var validation = 0;

                      var formData = myApp.formToData('#form-registration');

                      //console.log(formData);

                      for(var key in formData){

                            $('[name = "'+ key +'"]').each(function(){

                                if(this.checkValidity()){

                                    $(this).css("border","0px");

                                }else{
                                    validation = 1;

                                    $(this).css("border","1px solid red");
                                    $(this).css("border-radius","10px");

                                }

                            });
                      }

                      //ajax send RX.js

                      if(validation == 0){

                        $(".progressbar-infinite").show();


                        var urlregistration = localStorage.getItem("baseurl");

                      $.ajax({
                            "type":"GET",
                            "url":urlregistration + "newuserapp/",    /*random restourants menu zakaZ*/

                            dataType: "jsonp",
                            crossDomain: true,
                            "data":formData,

                            "success":kx22,
                            "error":errorfunc22

                            });

                    function kx22(result){

                            //console.log(result);

                            $(".gifloader").hide();


                            if(result[0] == "ok"){
                                localStorage.setItem("role",result[3]);
                                localStorage.setItem("useridentificator",result[1]);
                                localStorage.setItem("useremail",result[2]);

                                $(".progressbar-infinite").hide();

                                //createFile();
                               // writeFile();

                                $(".hide_reg").hide();
                                $(".hide_login").hide();
                                $(".show_vihod").show();
                                $(".hide_cabinet").show();

                                    mainView.router.back();
                                    myApp.alert('спасибо что уделили время!','kazpoisk');

                            }else if((result[0] == "oshibka_db_isset_user") || (result[0] == "issetuser")){
                                myApp.alert('данный пользователь уже существует!','Сервис');
                                $(".progressbar-infinite").hide();
                            }else if(result[0] == "check_encorrect"){
                                myApp.alert('вводите коррестные данные!','Сервис');
                                $(".progressbar-infinite").hide();
                            }else if(result[0] == "registration_false"){
                                myApp.alert('ошибка системы извините за учтенные недостатки!','Сервис');
                                $(".progressbar-infinite").hide();
                            }


                    }

                    function errorfunc22(){
                        console.log("oshibka registration send");
                        $(".gifloader").hide();
                    }

                     //ajax send

                      }

                      //validation form registration




                    });



                    $(".log").click(function(){

                      mainView.router.back();

                      setTimeout(function(){

                        mainView.router.loadPage("login.html");
                      },1000);


                     });


            //registration

            $(".restorepass").click(function(){


                          restorepassword();


                    });

});






myApp.onPageInit('login', function (page) {

    //login

    var clienturl = localStorage.getItem("clienturl");

                if(!clienturl){
                    var clienturl = "index.html";
                }

            //registration

                    //validation form registration

                    $('[name = "phone"]').mask("9(999)9999999");

                    $$('.form-to-login').on('click', function(){


                      $(".gifloader").show();

                        var validation = 0;

                      var formData = myApp.formToData('#form-login');

                      for(var key in formData){

                            $('[name = "'+ key +'"]').each(function(){

                                if(this.checkValidity()){

                                    $(this).css("border","0px");

                                }else{
                                    validation = 1;

                                    $(this).css("border","1px solid red");
                                    $(this).css("border-radius","10px");

                                }

                            });
                      }

                      //ajax send

                      if(validation == 0){

                        $(".progressbar-infinite").show();


                        var urllogin = localStorage.getItem("baseurl");

                      $.ajax({
                            "type":"GET",
                            "url": urllogin + "getuserapp/",    /*random restourants menu zakaZ*/

                            dataType: "jsonp",
                            crossDomain: true,
                            "data":formData,

                            "success":kx25,
                            "error":errorfunc25

                            });

                    function kx25(result){

                          //console.log(result);

                          $(".gifloader").hide();



                            if(result[0] == "5"){

                                $(".hide_reg").hide();
                                $(".hide_login").hide();
                                $(".show_vihod").show();
                                $(".hide_cabinet").show();

                                localStorage.setItem("role",result[1]);
                                localStorage.setItem("useridentificator",result[2]);//phone
                                localStorage.setItem("useremail",result[3]);

                                $(".progressbar-infinite").hide();

                                //createFile();
                                //writeFile();

                                if(result[1] == 1){

                                     //mainView.router.loadPage("cabinet.html");
                                     //$(".restourantsorder").show();
                                     mainView.router.back();

                                     myApp.alert('Вы вошли как ' + result[3],'Kazpoisk');

                                     $(".progressbar-infinite").hide();
                                     $(".hide_cabinet").show();

                                }else if(result[1] == 2){

                                     //mainView.router.loadPage("main.html");
                                     mainView.router.back();
                                     var usid =  localStorage.getItem("useridentificator");

                                     myApp.alert('Вы вошли как ' + result[3],'Kazpoisk');
                                     $(".progressbar-infinite").hide();


                                    //console.log(usid);
                                }


                            }else if(result[0] == "0"){
                                myApp.alert('данного пользователя не существует!','Сервис');
                                $(".progressbar-infinite").hide();
                            }else if(result[0] == "1"){
                                myApp.alert('неправильный пароль!','Сервис');
                                $(".progressbar-infinite").hide();
                            }


                    }

                    function errorfunc25(){
                        console.log("oshibka registration send");
                        $(".gifloader").hide();
                    }

                     //ajax send

                      }

                      //validation form registration




                    });


                    $(".registr").click(function(){

                      mainView.router.back();

                      setTimeout(function(){

                        mainView.router.loadPage("registration.html");
                      },1000);


                     });


                    $(".restorepass").click(function(){


                          restorepassword();


                    });


    //login




    });

//fa


function restorepassword(){

    myApp.prompt('Введите телефон для восстановления?','Kazpoisk', function (phone) {

                            var newphone = "";

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
                                              myApp.alert('новый пароль выслан на email: ' + result[0],'Kazpoisk');
                                          }else{
                                              myApp.alert('Номер абонента не найден! проверьте телефон ','Kazpoisk');
                                          }





                                  }

                                  function errorfuncrestore(){


                                  }

                            //

                        });

}





var angularApp = angular.module('angularApp', []);


// angularApp.controller('phoneController', function($scope) {

//   $scope.phones = [{
//         name: 'Nokia Lumia 630',
//         year: 2014,
//         price: 200,
//         company: 'Nokia'
//     },{
//         name: 'Samsung Galaxy S 4',
//         year: 2014,
//         price: 400,
//         company: 'Samsung'
//     },{
//         name: 'Mi 5',
//         year: 2015,
//         price: 300,
//         company: 'Xiaomi'
//     }];
//     $scope.tablets = [{
//         name: 'Samsung Galaxy Tab S4',
//         year: 2014,
//         price: 300,
//         company: 'Samsung'
//     },{
//         name: 'LG G PAD 8.3',
//         year: 2013,
//         price: 180,
//         company: 'LG'
//     },{
//         name: 'IdeaTab A8',
//         year: 2014,
//         price: 220,
//         company: 'Lenovo'
//     }];
//   $scope.data = {};
//   $scope.setFile = function () {
//     if($scope.data.mode=='Tablets')
//         return 'js/addcategory/subcategory/avto.html';
//     else if($scope.data.mode=='Phones')
//         return 'js/addcategory/subcategory/nedvizh.html';
// };
//   $scope.modes = [{
//       value: 'Tablets',
//       label: 'Планшеты'
//   },{
//       value: 'Phones',
//       label: 'Смартфоны'
//   }];
// });










$('[name = "kategory"] option').click(function(){

      var children = $(this).val();

      console.log(children);


});










//module category



var img = localStorage.getItem("baseurlimg");



  angular.
  module('angularApp').
  component('addCategory', {
    templateUrl:'js/addcategory/addcategorytemplate.html',
    controller: function AngularListController($scope) {
      this.obs = [
        {
          name: 'Недвижимость',
          src: img + 'nedv.jpg',
        }, {
          name: 'Авто и мото',
          src:img + 'cars.jpg',
        }, {
          name: 'Работа',
          src:img + 'job.jpg',
        }, {
          name: 'Электроника',
          src:img + 'electronic.jpg',
        },{
          name: 'Медицина',
          src:img + 'medical.jpg',
        }, {
          name: 'Салоны красоты',
          src:img + 'salon_krasoti.jpg',
        }, {
          name: 'Мода',
          src:img + 'moda.jpg',
        }, {
          name: 'кафе,караоке,ночные клубы',
          src:img + 'otdih.jpg',
        }, {
          name: 'Услуги и обслуживание',
          src:img + 'obsluzh.jpeg',
        }, {
          name: 'Банки Коммерческие организации',
          src:img + 'bank.jpg',
        }, {
          name: 'Компании,бизнес',
          src:img + 'biznes.jpg',
        },{
          name: 'Личные вещи',
          src:img + 'clothes.jpg',
        }, {
          name: 'Спортивные товары',
          src:img + 'sports.jpg',
        }, {
          name: 'Для детей',
          src:img + 'dlyadetei.jpg',
        }, {
          name: 'Животным',
          src:img + 'zhivotnie.jpg',
        }, {
          name: 'Для дома и дачи',
          src:img + 'domsad.jpg',
        }, {
          name: 'Хобби и игрушки',
          src:img + 'hobby.jpeg',
        }, {
          name: 'Изделия выполненные вручную',
          src:img + 'ruchnie_izdel.jpg',
        },
      ];

      $scope.myclick = function(categoryname){


        var formData2 = myApp.formToData('#form_to_submit');

        for (newkey in formData2) {

                                $('[name = '+ newkey +']').val("");

                            }

        //default
        defaultobs = [
        {
          name: 'Недвижимость',
          src: img + 'nedv.jpg',
        }, {
          name: 'Авто и мото',
          src:img + 'cars.jpg',
        }, {
          name: 'Работа',
          src:img + 'job.jpg',
        }, {
          name: 'Электроника',
          src:img + 'electronic.jpg',
        },{
          name: 'Медицина',
          src:img + 'medical.jpg',
        }, {
          name: 'Салоны красоты',
          src:img + 'salon_krasoti.jpg',
        }, {
          name: 'Мода',
          src:img + 'moda.jpg',
        }, {
          name: 'кафе,караоке,ночные клубы',
          src:img + 'otdih.jpg',
        }, {
          name: 'Услуги и обслуживание',
          src:img + 'obsluzh.jpeg',
        }, {
          name: 'Банки Коммерческие организации',
          src:img + 'bank.jpg',
        }, {
          name: 'Компании,бизнес',
          src:img + 'biznes.jpg',
        },{
          name: 'Личные вещи',
          src:img + 'clothes.jpg',
        }, {
          name: 'Спортивные товары',
          src:img + 'sports.jpg',
        }, {
          name: 'Для детей',
          src:img + 'dlyadetei.jpg',
        }, {
          name: 'Животным',
          src:img + 'zhivotnie.jpg',
        }, {
          name: 'Для дома и дачи',
          src:img + 'domsad.jpg',
        }, {
          name: 'Хобби и игрушки',
          src:img + 'hobby.jpeg',
        }, {
          name: 'Изделия выполненные вручную',
          src:img + 'ruchnie_izdel.jpg',
        },
      ];
        //default

        //arrays
                    newobs = [
                          {
                            name: 'Продать',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сдать',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Купить',
                            src:img + 'strelka.png',
                          },{
                            name: 'Снять',
                            src:img + 'strelka.png',
                          },{
                            name: 'Обменять',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs2 = [
                          {
                            name: 'квартиру',
                            src: img + 'strelka.png',
                          }, {
                            name: 'общежитие',
                            src:img + 'strelka.png',
                          }, {
                            name: 'комнату',
                            src:img + 'strelka.png',
                          },{
                            name: 'времянку',
                            src:img + 'strelka.png',
                          },{
                            name: 'место в подселение',
                            src:img + 'strelka.png',
                          },{
                            name: 'дом',
                            src:img + 'strelka.png',
                          },{
                            name: 'дачу',
                            src: img + 'strelka.png',
                          }, {
                            name: 'участок',
                            src:img + 'strelka.png',
                          }, {
                            name: 'офис',
                            src:img + 'strelka.png',
                          },{
                            name: 'помещение',
                            src:img + 'strelka.png',
                          },{
                            name: 'здание',
                            src:img + 'strelka.png',
                          },{
                            name: 'магазин',
                            src: img + 'strelka.png',
                          }, {
                            name: 'бутик',
                            src:img + 'strelka.png',
                          }, {
                            name: 'промбазу',
                            src:img + 'strelka.png',
                          },{
                            name: 'склад',
                            src:img + 'strelka.png',
                          },{
                            name: 'прочую недвижимость',
                            src:img + 'strelka.png',
                          },
                        ];
        //arrays



        //1 level nedvizhimost

        switch (categoryname) {
            case 'Недвижимость':

                        $scope.$ctrl.obs = newobs;

                        localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
//level2
              break;
//level3
          }


          for(var ii = 0;ii < newobs.length;ii++){

              if(categoryname == newobs[ii].name){
                  localStorage.setItem("level2",categoryname);
                  $scope.$ctrl.obs = newobs2;
              }
          }

          for(var j = 0;j < newobs2.length;j++){

              if(categoryname == newobs2[j].name){
                  localStorage.setItem("level3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  mainView.router.loadPage("#add");
              }

          }
          //level3
          //1 level nedvizhimost

            //arrays avto i moto

                    newobs3 = [
                          {
                            name: 'продать машину',
                            src: img + 'strelka.png',
                          }, {
                            name: 'спецтехника',
                            src:img + 'strelka.png',
                          }, {
                            name: 'запчасти',
                            src:img + 'strelka.png',
                          },{
                            name: 'услуги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочее',
                            src:img + 'strelka.png',
                          }
                        ];

                        newobs4 = [
                          {
                            name: 'легковая с пробегом',
                            src: img + 'strelka.png',
                          }, {
                            name: 'легковая новая',
                            src:img + 'strelka.png',
                          }, {
                            name: 'легковая с автосалона',
                            src:img + 'strelka.png',
                          },{
                            name: 'легковая из зарубежа',
                            src:img + 'strelka.png',
                          },{
                            name: 'легковая на заказ',
                            src:img + 'strelka.png',
                          },{
                            name: 'мотоциклы',
                            src:img + 'strelka.png',
                          },{
                            name: 'квадроциклы',
                            src:img + 'strelka.png',
                          },{
                            name: 'катера и лодки',
                            src:img + 'strelka.png',
                          },{
                            name: 'другие машины',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs5 = [
                          {
                            name: 'Спецтехника,Автобусы и др.',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аренда',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Продавцы спецтехники',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs6 = [
                          {
                            name: 'Продажа запчастей',
                            src: img + 'strelka.png',
                          }, {
                            name: 'ищу запчасть',
                            src:img + 'strelka.png',
                          }, {
                            name: 'авторазбор',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Магазины запчастей',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Шины',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Диски',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Аксессуары и мультимедиа',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Расходники',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Авто на запчасти',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs7 = [
                          {
                            name: 'Автозвук',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Автомойки',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Автострахование',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Автошколы',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Автоэлектрики',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Аэрография',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Вскрытие авто, изготовление ключей',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Грузоперевозки',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Замена масел, жидкостей',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ксенон',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Перетяжка салона, пошив чехлов',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Прокат, аренда',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт бамперов, автопластика',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт двигателя',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт КПП',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт кузова',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт радиаторов, кондиционеров',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ремонт ходовой',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт топливной системы',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Сигнализации',
                            src:img + 'strelka.png',
                          }, {
                            name: 'СТО, автосервисы',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Такси',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Тех. осмотр',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Тонировка',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Тюнинг',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Установка автостёкол',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Химчистка, полировка',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Хранение шин',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Чип-тюнинг',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Шумоизоляция',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Шиномонтаж',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Эвакуатор',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Другие',
                            src:img + 'strelka.png',
                          },
                        ];
        //arrays avto i moto

          //level2 Авто и мото
          switch (categoryname) {
            case 'Авто и мото':

                        $scope.$ctrl.obs = newobs3;

                        localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
//level2
              break;
            case 'продать машину':
              localStorage.setItem("level2",categoryname);
              $scope.$ctrl.obs = newobs4;
              break;
            case 'спецтехника':
              localStorage.setItem("level2",categoryname);
              $scope.$ctrl.obs = newobs5;
              break;
            case 'запчасти':
              $scope.$ctrl.obs = newobs6;
              localStorage.setItem("level2",categoryname);
              break;
            case 'услуги':
              $scope.$ctrl.obs = newobs7;
              localStorage.setItem("level2",categoryname);
              break;
            case 'Прочее':
              localStorage.setItem("level2",categoryname);
              $scope.$ctrl.obs = defaultobs;
              mainView.router.loadPage("#add");
              break;
//level2


          }
          //level3 Авто и мото
          for (var i = 0;i < newobs4.length;i++) {

              if(categoryname == newobs4[i].name){
                  localStorage.setItem("level3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  mainView.router.loadPage("#add");
              }
          }

          //level3 Авто и мото
          for(var t = 0;t < newobs5.length;t++){
              if(categoryname == newobs5[t].name){
                  localStorage.setItem("level3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  mainView.router.loadPage("#add");
              }
          }

          for(var tt = 0;tt < newobs6.length;tt++){
              if(categoryname == newobs6[tt].name){
                  localStorage.setItem("level3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  mainView.router.loadPage("#add");
              }
          }

          for(var ttt = 0;ttt < newobs7.length;ttt++){
              if(categoryname == newobs7[ttt].name){
                  localStorage.setItem("level3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  mainView.router.loadPage("#add");
              }
          }

          //level3 Авто и мото

          //job arrays
          newobs8 = [
                          {
                            name: 'Торговля, продажи -',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Финансы, банки, инвестиции -',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Транспорт, логистика - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Строительство, недвижимость - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Юриспруденция и бухгалтерия',
                            src:img + 'strelka.png',
                          },{
                            name: 'Охрана и безопасность - ',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Домашний персонал',
                            src:img + 'strelka.png',
                          },{
                            name: 'Красота, фитнес, спорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Туризм, гостиницы, рестораны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Образование, наука',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Культура, искусство, развлечения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Медицина, фармацевтика',
                            src:img + 'strelka.png',
                          },{
                            name: 'IT, компьютеры, связь',
                            src:img + 'strelka.png',
                          },{
                            name: 'Маркетинг и реклама',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Производство, энергетика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Административный персонал',
                            src:img + 'strelka.png',
                          },{
                            name: 'Начало карьеры, студенты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рабочий персонал',
                            src:img + 'strelka.png',
                          },{
                            name: 'Автомобильный бизнес',
                            src:img + 'strelka.png',
                          },{
                            name: 'Добыча сырья',
                            src:img + 'strelka.png',
                          },{
                            name: 'Страхование',
                            src:img + 'strelka.png',
                          },{
                            name: 'Другие сферы деятельности',
                            src:img + 'strelka.png',
                          },
                        ];



                        newobsp0 = [
                          {
                            name: 'Вакансии. Торговля, продажи',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Торговля, продажи',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp1 = [
                          {
                            name: 'Вакансии. Финансы, банки, инвестиции',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Финансы, банки, инвестиции',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp2 = [
                          {
                            name: 'Вакансии. Транспорт, логистика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Транспорт, логистика',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp3 = [
                          {
                            name: 'Вакансии. Строительство, недвижимость',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Строительство, недвижимость',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp4 = [
                          {
                            name: 'Вакансии. Юриспруденция и бухгалтерия',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Юриспруденция и бухгалтерия',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp5 = [
                          {
                            name: 'Вакансии. Охрана и безопасность',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Охрана и безопасность',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp6 = [
                          {
                            name: 'Вакансии. Домашний персонал',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Домашний персонал',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp7 = [
                          {
                            name: 'Вакансии. Красота, фитнес, спорт',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Красота, фитнес, спорт',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp8 = [
                          {
                            name: 'Вакансии. Туризм, гостиницы, рестораны',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Туризм, гостиницы, рестораны',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp9 = [
                          {
                            name: 'Вакансии. Образование, наука',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Образование, наука',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp10 = [
                          {
                            name: 'Вакансии. Культура, искусство, развлечения',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Культура, искусство, развлечения',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp11 = [
                          {
                            name: 'Вакансии. Медицина, фармацевтика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Медицина, фармацевтика',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp12 = [
                          {
                            name: 'Вакансии. IT, компьютеры, связь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. IT, компьютеры, связь',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp13 = [
                          {
                            name: 'Вакансии. Маркетинг и реклама',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Маркетинг и реклама',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp14 = [
                          {
                            name: 'Вакансии. Производство, энергетика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Производство, энергетика',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp15 = [
                          {
                            name: 'Вакансии. Административный персонал',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Административный персонал',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp16 = [
                          {
                            name: 'Вакансии. Начало карьеры, студенты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Начало карьеры, студенты',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp17 = [
                          {
                            name: 'Вакансии. Рабочий персонал',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Рабочий персонал',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp18 = [
                          {
                            name: 'Вакансии. Автомобильный бизнес',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Автомобильный бизнес',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp19 = [
                          {
                            name: 'Вакансии. Добыча сырья',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Добыча сырья',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp20 = [
                          {
                            name: 'Вакансии. Страхование',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Страхование',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp21 = [
                          {
                            name: 'Вакансии. Другие сферы деятельности',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Другие сферы деятельности',
                            src:img + 'strelka.png',
                          },
                        ];

                        var arraypodcategory = [newobsp0,newobsp1,newobsp2,newobsp3,
                        newobsp4,newobsp5,newobsp6,newobsp7,newobsp8,newobsp9,newobsp10,newobsp11,
                        newobsp12,newobsp13,newobsp14,newobsp15,newobsp16,newobsp17,newobsp18,newobsp19,
                        newobsp20,newobsp21];

          //job arrays

          //job

          switch (categoryname) {
            case 'Работа':

                        $scope.$ctrl.obs = newobs8;

                        localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");

              break;

          }

          //job

          for(var p = 0;p < newobs8.length;p++){
              if(categoryname == newobs8[p].name){
                  $scope.$ctrl.obs = arraypodcategory[p];
                  localStorage.setItem("level2",categoryname);
              }
          }


          for(var o = 0;o < arraypodcategory.length;o++){
              for(var jj = 0;jj < arraypodcategory[o].length;jj++){
                  if(categoryname == arraypodcategory[o][jj].name){
                      localStorage.setItem("level3",categoryname);
                      $scope.$ctrl.obs = defaultobs;
                      mainView.router.loadPage("#add");
                 }
              }

          }


           //electronika

           //arrays electronic
           newobs22 = [
                          {
                            name: 'компьютеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'бытовая техника',
                            src:img + 'strelka.png',
                          },{
                            name: 'фототехника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'телефоны',
                            src:img + 'strelka.png',
                          },{
                            name: 'ТВ и видео, аудио',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игровые приставки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электроника для Arduino',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Индивидуальный уход',
                            src:img + 'strelka.png',
                          },{
                            name: 'Оргтехника',
                            src:img + 'strelka.png',
                          },{
                            name: 'Климатическая техника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'GPS навигация',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электроника для авто',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Оптические приборы',
                            src:img + 'strelka.png',
                          },{
                            name: 'охранные системы - ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары и комплектующие',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электронные книги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая электроника',
                            src:img + 'strelka.png',
                          },
                        ];




                        newobs23 = [
                          {
                            name: 'веб камеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'внешние жесткие диски',
                            src:img + 'strelka.png',
                          },{
                            name: 'источники бесперебойного питания',
                            src: img + 'strelka.png',
                          }, {
                            name: 'карты памяти',
                            src:img + 'strelka.png',
                          },{
                            name: 'комплектующие для ноутбуков',
                            src: img + 'strelka.png',
                          }, {
                            name: 'комплектующие для пк',
                            src:img + 'strelka.png',
                          },{
                            name: 'манипуляторы и клавиатуры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Мониторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Настольные компьютеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ноутбуки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Програмное обеспечение',
                            src:img + 'strelka.png',
                          },{
                            name: 'Планшеты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сетевое оборудование',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сумки и чехлы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Флешки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие компьютерные товары',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs24 = [
                          {
                            name: 'вытяжки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'духовки',
                            src:img + 'strelka.png',
                          },{
                            name: 'кофеварки и кофемашины',
                            src: img + 'strelka.png',
                          }, {
                            name: 'мелкая кухонная техника',
                            src:img + 'strelka.png',
                          },{
                            name: 'микроволновые печи',
                            src: img + 'strelka.png',
                          }, {
                            name: 'плиты',
                            src:img + 'strelka.png',
                          },{
                            name: 'посудомоечные машины',
                            src: img + 'strelka.png',
                          }, {
                            name: 'пылесосы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Стиральные машины',
                            src:img + 'strelka.png',
                          },{
                            name: 'утюги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фильтры и умягчители для воды',
                            src:img + 'strelka.png',
                          },{
                            name: 'Холодильники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Швейное оборудование',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрочайники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая бытовая техника',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs25 = [
                          {
                            name: 'Объективы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фотоаксессуары',
                            src:img + 'strelka.png',
                          },{
                            name: 'Фотоаппараты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фотовспышки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Студийное оборудование',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Цифровые фоторамки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Штативы и моноподы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая фототехника',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs26 = [
                          {
                            name: 'Аксессуары для телефонов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Гарнитуры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Запасные части для телефонов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Карты оплаты и номера',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мобильные телефоны',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Радиотелефоны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рации',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Спортивные браслеты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Android(watch)',
                            src:img + 'strelka.png',
                          },{
                            name: 'ios(watch)',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие телефоны',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs27 = [
                          {
                            name: 'Домашние кинотеатры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аудио',
                            src:img + 'strelka.png',
                          },{
                            name: 'DVD и Blu-ray плееры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для видеокамер',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аксессуары для ТВ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для экшн-камер',
                            src:img + 'strelka.png',
                          },{
                            name: 'Видеокамеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Медиаплееры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Спутниковое и кабельное ТВ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Телевизоры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая ТВ и видеотехника',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs28 = [
                          {
                            name: 'Аксессуары для игровых приставок',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игровые приставки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Игры для приставок',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт приставок',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рули, джойстики, геймпады',
                            src: img + 'strelka.png',
                          },{
                            name: 'прошивка,unlock',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs29 = [
                          {
                            name: 'Электронные платы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'электродвигатели',
                            src:img + 'strelka.png',
                          },{
                            name: 'прочая электроника',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs30 = [
                          {
                            name: 'Бритвы и триммеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бытовые медицинские приборы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Массажеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Напольные весы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фены и приборы для укладки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрические зубные щетки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Эпиляторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочее для индивидуального ухода',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs31 = [
                          {
                            name: 'Копиры и МФУ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ламинаторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мини АТС',
                            src: img + 'strelka.png',
                          },{
                            name: 'Принтеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Проекторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Проекционные экраны',
                            src: img + 'strelka.png',
                          },{
                            name: 'Расходные материалы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сканеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочая офисная техника',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs32 = [
                          {
                            name: 'Вентиляторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Водонагреватели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ионизаторы воздуха',
                            src: img + 'strelka.png',
                          },{
                            name: 'Кондиционеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Обогреватели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Осушители воздуха',
                            src: img + 'strelka.png',
                          },{
                            name: 'Очистители и увлажнители воздуха',
                            src:img + 'strelka.png',
                          },{
                            name: 'Тепловые пушки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Электрокамины',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочее климатическое оборудование',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs33 = [
                          {
                            name: 'GPS-навигаторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'GPS-трекеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Карты и программы для GPS',
                            src: img + 'strelka.png',
                          },{
                            name: 'другие приборы GPS',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs34 = [
                          {
                            name: 'Автоакустика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Автомагнитолы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Автоусилители',
                            src: img + 'strelka.png',
                          },{
                            name: 'Автомобильные телевизоры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Видеорегистраторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бортовые компьютеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Камеры заднего вида',
                            src: img + 'strelka.png',
                          },{
                            name: 'Радар-детекторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Универсальные зарядные устройства',
                            src: img + 'strelka.png',
                          },{
                            name: 'Устройства громкой связи',
                            src: img + 'strelka.png',
                          }, {
                            name: 'FM-трансмиттеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая электроника для авто',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs35 = [
                          {
                            name: 'Бинокли и зрительные трубы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Микроскопы и лупы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Приборы ночного видения',
                            src: img + 'strelka.png',
                          },{
                            name: 'Телескопы',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs36 = [
                          {
                            name: 'Датчики, извещатели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Домофоны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Камеры видеонаблюдения',
                            src: img + 'strelka.png',
                          },{
                            name: 'Охранные системы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сигнализации',
                            src: img + 'strelka.png',
                          },
                        ];




           //arrays electronic
            var podcategoryar = [newobs23,newobs24,newobs25,newobs26,newobs27,newobs28,newobs29,newobs30,newobs31,
            newobs32,newobs33,newobs34,newobs35,newobs36];
           //

           switch (categoryname) {
            case 'Электроника':

                        $scope.$ctrl.obs = newobs22;

                        localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");

              break;

          }

          for(var u = 0;u < newobs22.length;u++){
              if(categoryname == newobs22[u].name){
                  $scope.$ctrl.obs = podcategoryar[u];
                  localStorage.setItem("level2",categoryname);
              }
          }

          for(var y = 0;y < podcategoryar.length;y++){
              for(var yy = 0;yy < podcategoryar[y].length;yy++){
                  if(categoryname == podcategoryar[y][yy].name){
                      localStorage.setItem("level3",categoryname);
                      $scope.$ctrl.obs = defaultobs;
                      mainView.router.loadPage("#add");
                  }
              }
          }


           //electronika
                //medical



                switch (categoryname) {
                case 'Медицина':


                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");



                  break;

                }

                //medical


                //salon


                switch (categoryname) {
                case 'Салоны красоты':

                            //$scope.$ctrl.obs = newobs22;
                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");



                  break;

                }

                //salon


                //moda


                switch (categoryname) {
                case 'Мода':

                            //$scope.$ctrl.obs = newobs22;
                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");



                  break;

                }

                //moda

                //moda


                switch (categoryname) {
                case 'кафе,караоке,ночные клубы':

                            //$scope.$ctrl.obs = newobs22;
                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");



                  break;

                }

                //moda

                //kafe




                //kafe


                //uslugi

                //arrays

                newobs39 = [
                          {
                            name: 'Строительство и ремонт',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Образование, курсы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ремонт и обслуживание техники',
                            src: img + 'strelka.png',
                          },{
                            name: 'Юридические услуги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат товаров',
                            src:img + 'strelka.png',
                          },{
                            name: 'Спорт',
                            src: img + 'strelka.png',
                          },{
                            name: 'Красота и здоровье',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Информационные технологии - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аренда оборудования',
                            src: img + 'strelka.png',
                          },{
                            name: 'Безопасность, детективы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бухгалтерские и аудиторские услуги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Риэлторские услуги',
                            src: img + 'strelka.png',
                          },{
                            name: 'Уборка, химчистка, стирка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дизайн, архитектура, ландшафт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Грузоперевозки, вывоз мусора',
                            src: img + 'strelka.png',
                          },{
                            name: 'Изготовление, сборка, ремонт мебели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Набор текста',
                            src:img + 'strelka.png',
                          },{
                            name: 'Няни',
                            src: img + 'strelka.png',
                          },{
                            name: 'Перевод',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Пошив и ремонт одежды',
                            src:img + 'strelka.png',
                          },{
                            name: 'Праздники и мероприятия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Редактирование, вычитка текстов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Реклама и полиграфия',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сиделки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сопровождение иностранцев',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Транспорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Уборка',
                            src: img + 'strelka.png',
                          },{
                            name: 'Фото и видео-съемка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие услуги',
                            src:img + 'strelka.png',
                          },
                        ];

                //arrays

                //podcategory arrays
                newobs40 = [
                          {
                            name: 'Вентиляция, кондиционирование',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дизайн, архитектура',
                            src:img + 'strelka.png',
                          },{
                            name: 'Готовые конструкции',
                            src: img + 'strelka.png',
                          },{
                            name: 'Изготовление мебели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Монтажные работы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Окна, двери, балконы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Отделка, ремонт',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт помещений',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сантехника',
                            src: img + 'strelka.png',
                          },{
                            name: 'Столярные работы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Строительные услуги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрика',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие строительные услуги',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs41 = [
                          {
                            name: 'Вождение',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дошкольное обучение',
                            src:img + 'strelka.png',
                          },{
                            name: 'Иностранные языки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Искусство',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Курсы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Образование за рубежом',
                            src: img + 'strelka.png',
                          },{
                            name: 'Репетиторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Семинары, тренинги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Уроки музыки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие образовательные услуги',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs42 = [
                          {
                            name: 'Ремонт и установка бытовой техники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт компьютерной техники',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ремонт и установка прочей техники',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs43 = [
                          {
                            name: 'Адвокаты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Нотариусы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Юридические консультации',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие юридические услуги',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs44 = [
                          {
                            name: 'Прокат велосипедов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат кальянов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прокат музыкального оборудования',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат оборудования',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат платьев и костюмов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат свадебных товаров',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прокат спортивных товаров',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат строительных инструментов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат туристического снаряжения',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат электроники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат прочих товаров',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs45 = [
                          {
                            name: 'Спортивные залы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Спортивные секции',
                            src:img + 'strelka.png',
                          },{
                            name: 'Тренеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие спортивные услуги',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs46 = [
                          {
                            name: 'Косметология',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Макияж, визаж',
                            src:img + 'strelka.png',
                          },{
                            name: 'Маникюр, педикюр',
                            src: img + 'strelka.png',
                          },{
                            name: 'Массаж',
                            src: img + 'strelka.png',
                          },{
                            name: 'Медицинские услуги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Наращивание ногтей',
                            src:img + 'strelka.png',
                          },{
                            name: 'Парикмахерские услуги',
                            src: img + 'strelka.png',
                          },{
                            name: 'Психология',
                            src: img + 'strelka.png',
                          },{
                            name: 'Тату, боди-арт, пирсинг',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Эпиляция и депиляция',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие услуги для красоты и здоровья',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs47 = [
                          {
                            name: 'Компьютерная помощь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Продвижение в социальных сетях',
                            src:img + 'strelka.png',
                          },{
                            name: 'Услуги разработчиков',
                            src:img + 'strelka.png',
                          },{
                            name: 'Продвижение сайтов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Создание сайтов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Телефония, связь, интернет',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие ИТ услуги',
                            src:img + 'strelka.png',
                          },
                        ];


                        var uslugiarr = [newobs40,newobs41,newobs42,newobs43,newobs44,newobs45,newobs46,newobs47];

                //podcategory arrays


                switch (categoryname) {
                case 'Услуги и обслуживание':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs39;

                  break;

                }

                for(var ph = 0;ph < newobs39.length;ph++){
                    if(categoryname == newobs39[ph].name){

                        if(ph <= 7){
                          $scope.$ctrl.obs = uslugiarr[ph];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          mainView.router.loadPage("#add");
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var oh = 0;oh < uslugiarr.length;oh++){
                    for(var jjh = 0;jjh < uslugiarr[oh].length;jjh++){
                        if(categoryname == uslugiarr[oh][jjh].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");
                       }
                    }

                }

                //uslugi
           //

           //bank and commerce


           switch (categoryname) {
                case 'Банки Коммерческие организации':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");

                  break;

                }
           //bank and commerce

           //company and biziness


           switch (categoryname) {
                case 'Компании,бизнес':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");

                  break;

                }
           //company and biziness


           ///company and biziness

           //veshi arrays

           newobs48 = [
                          {
                            name: 'Одежда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Обувь',
                            src:img + 'strelka.png',
                          },{
                            name: 'Для свадьбы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аксессуары',
                            src: img + 'strelka.png',
                          },{
                            name: 'Подарки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Товары для красоты и здоровья',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Часы - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Другие личные вещи',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs49 = [
                          {
                            name: 'Головные уборы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Женское белье и купальники',
                            src:img + 'strelka.png',
                          },{
                            name: 'Женская одежда',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мужская одежда',
                            src: img + 'strelka.png',
                          },{
                            name: 'Одежда для беременных',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs50 = [
                          {
                            name: 'Женская обувь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Мужская обувь',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs51 = [
                          {
                            name: 'Свадебные аксессуары',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Свадебные платья',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs52 = [
                          {
                            name: 'Бижутерия',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сумки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ювелирные украшения',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие аксессуары',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs53 = [
                          {
                            name: 'Подарочные сертификаты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сувениры, подарки',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs54 = [
                          {
                            name: 'Косметика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Парфюмерия',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs55 = [
                          {
                            name: 'Карманные часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Командирские часы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сувенирные часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Наручные женские часы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Наручные мужские часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Настенные часы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Настольные часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Напольные часы',
                            src:img + 'strelka.png',
                          },
                        ];

                        var veshiarr = [newobs49,newobs50,newobs51,newobs52,newobs53,newobs54,newobs55];
           //veshi arrays


           switch (categoryname) {
                case 'Личные вещи':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs48;

                  break;

                }

           for(var phd = 0;phd < newobs48.length;phd++){
                    if(categoryname == newobs48[phd].name){

                        if(phd <= 6){
                          $scope.$ctrl.obs = veshiarr[phd];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          mainView.router.loadPage("#add");
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohd = 0;ohd < veshiarr.length;ohd++){
                    for(var jjhd = 0;jjhd < veshiarr[ohd].length;jjhd++){
                        if(categoryname == veshiarr[ohd][jjhd].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");
                       }
                    }

                }
           //company and biziness

           //sport tovari
           switch (categoryname) {
                case 'Спортивные товары':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");

                  break;

                }
           //sport tovari

           //dlya detei

           //arrays

           newobs56 = [
                          {
                            name: 'Детская одежда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Детская обувь',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детская мебель - ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Автокресла',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детские велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Детский транспорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детская литература',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игрушки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Коляски',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Товары для новорожденных',
                            src:img + 'strelka.png',
                          },{
                            name: 'Школьные товары',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие детские товары',
                            src:img + 'strelka.png',
                          },
                        ];

                        //arrays

                newobs37 = [
                          {
                            name: 'Одежда для девочек',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Одежда для мальчиков',
                            src:img + 'strelka.png',
                          },{
                            name: 'Одежда для новорожденных',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs38 = [
                          {
                            name: 'Обувь для девочек',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Обувь для мальчиков',
                            src:img + 'strelka.png',
                          },
                        ];

                //arrays

                        newobs57 = [
                          {
                            name: 'Бескаркасная мебель',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Детские гарнитуры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Колыбели и люльки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Комоды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Кроватки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Пеленальные столики',
                            src: img + 'strelka.png',
                          },{
                            name: 'Столы и стульчики для кормления',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ходунки и прыгунки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Шведские стенки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другая детская мебель',
                            src: img + 'strelka.png',
                          },
                        ];




           var childrenarrays = [newobs37,newobs38,newobs57];

           switch (categoryname) {
                case 'Для детей':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs56;


                  break;

                }

                for(var phdd = 0;phdd < newobs56.length;phdd++){
                    if(categoryname == newobs56[phdd].name){

                        if(phdd <= 2){
                          $scope.$ctrl.obs = childrenarrays[phdd];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          mainView.router.loadPage("#add");
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohdd = 0;ohdd < childrenarrays.length;ohdd++){
                    for(var jjhdd = 0;jjhdd < childrenarrays[ohdd].length;jjhdd++){
                        if(categoryname == childrenarrays[ohdd][jjhdd].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");
                       }
                    }

                }
           //dlya detei

           //arrays

           newobs58 = [
                          {
                            name: 'Услуги для животных',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бюро находок - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аквариумные рыбки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Грызуны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Кошки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Птицы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рептилии',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сельхоз животные',
                            src:img + 'strelka.png',
                          },{
                            name: 'Собаки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Товары для животных',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Экзотические животные',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs59 = [
                          {
                            name: 'Ветеринария',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Выгул',
                            src:img + 'strelka.png',
                          },{
                            name: 'Дрессировка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Зоогостиницы, передержка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Стрижка',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие услуги для животных',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs60 = [
                          {
                            name: 'Найдены',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Утеряны',
                            src:img + 'strelka.png',
                          },
                        ];
           //arrays

           var arraysanimals = [newobs59,newobs60];

           switch (categoryname) {
                case 'Животным':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs58;


                  break;

                }


                for(var phddd = 0;phddd < newobs58.length;phddd++){
                    if(categoryname == newobs58[phddd].name){

                        if(phddd <= 1){
                          $scope.$ctrl.obs = arraysanimals[phddd];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          mainView.router.loadPage("#add");
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohddd = 0;ohddd < arraysanimals.length;ohddd++){
                    for(var jjhddd = 0;jjhddd < arraysanimals[ohddd].length;jjhddd++){
                        if(categoryname == arraysanimals[ohddd][jjhddd].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");
                       }
                    }

                }

                //dlya doma i dachi
                //arrays
                newobs61 = [
                          {
                            name: 'Мебель и интерьер',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт и строительство',
                            src:img + 'strelka.png',
                          },{
                            name: 'Инструменты и инвентарь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Растения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Домашний текстиль',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бытовая химия - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Посуда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие товары для дома и дачи',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs62 = [
                          {
                            name: 'Диваны и кресла',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Компьютерные кресла',
                            src:img + 'strelka.png',
                          },{
                            name: 'Компьютерные столы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Кровати и матрасы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Кухонные гарнитуры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Мебель для ванной',
                            src:img + 'strelka.png',
                          },{
                            name: 'Освещение',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Подставки и тумбы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Предметы интерьера',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Спальные гарнитуры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Столы и стулья',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Текстиль и ковры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Шкафы и комоды',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочая мебель и предметы интерьера',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs63 = [
                          {
                            name: 'Двери',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Окна и балконы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Камины и обогреватели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Потолки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сауна и баня',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сантехника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Стройматериалы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие товары для строительства',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs64 = [
                          {
                            name: 'Садовая техника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Садовые инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие инструменты и инвентарь',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs65 = [
                          {
                            name: 'Комнатные растения',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Садовые растения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Удобрения и грунт',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs66 = [
                          {
                            name: 'Комплекты постельного белья',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Матрасы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Наволочки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Одеяла',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Подушки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Полотенца',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Пледы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Простыни',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs67 = [
                          {
                            name: 'Все для стирки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Все для уборки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Моющие средства',
                            src: img + 'strelka.png',
                          },{
                            name: 'Чистящие средства',
                            src: img + 'strelka.png',
                          },
                        ];


                        var domisadarrays = [newobs62,newobs63,newobs64,newobs65,newobs66,newobs67];
                //arrays

                switch (categoryname) {
                case 'Для дома и дачи':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs61;


                  break;

                }



                for(var phdddd = 0;phdddd < newobs61.length;phdddd++){
                    if(categoryname == newobs61[phdddd].name){

                        if(phdddd <= 5){
                          $scope.$ctrl.obs = domisadarrays[phdddd];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          mainView.router.loadPage("#add");
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohdddd = 0;ohdddd < domisadarrays.length;ohdddd++){
                    for(var jjhdddd = 0;jjhdddd < domisadarrays[ohdddd].length;jjhdddd++){
                        if(categoryname == domisadarrays[ohdddd][jjhdddd].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");
                       }
                    }

                }

                //Хобби и игрушки

                //arrays hobby
                newobs68 = [
                          {
                            name: 'Коллекционирование',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Музыкальные инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Спорт и отдых',
                            src: img + 'strelka.png',
                          },{
                            name: 'Книги, журналы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Билеты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Путешествия',
                            src: img + 'strelka.png',
                          },{
                            name: 'USB, CD, DVD, пластинки -',
                            src: img + 'strelka.png',
                          },{
                            name: 'Настольные игры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Развивающие игрушки, игры',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs69 = [
                          {
                            name: 'Антиквариат',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бонистика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Искусство',
                            src: img + 'strelka.png',
                          },{
                            name: 'Модели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Нумизматика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Филокартия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Фарфор, Керамика, Стекло, Хрусталь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фалеристика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Филателия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие предметы для коллекционирования',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs70 = [
                          {
                            name: 'Аккордеоны, гармони, баяны',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для музыкальных инструментов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Гитары и другие струнные',
                            src: img + 'strelka.png',
                          },{
                            name: 'Духовые инструменты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Оборудование для студии и концертов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Пианино и другие клавишные',
                            src: img + 'strelka.png',
                          },{
                            name: 'Скрипки и другие смычковые',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ударные инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Этнические (национальные) инструменты',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs71 = [
                          {
                            name: 'Альпинизм',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бильярд',
                            src:img + 'strelka.png',
                          },{
                            name: 'Боулинг',
                            src: img + 'strelka.png',
                          },{
                            name: 'Водный спорт',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дайвинг',
                            src:img + 'strelka.png',
                          },{
                            name: 'Игры с мячом',
                            src: img + 'strelka.png',
                          },{
                            name: 'Единоборства',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Лыжный / горнолыжный спорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Охота и рыбалка',
                            src: img + 'strelka.png',
                          },{
                            name: 'Пейнтбол',
                            src: img + 'strelka.png',
                          },{
                            name: 'Ролики',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сноубординг',
                            src:img + 'strelka.png',
                          },{
                            name: 'Скейтборды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Страйкбол',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Теннис, бадминтон, пинг-понг',
                            src:img + 'strelka.png',
                          },{
                            name: 'Туризм',
                            src: img + 'strelka.png',
                          },{
                            name: 'Фитнес и тренажеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Хоккей',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочее для спорта и отдыха',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs72 = [
                          {
                            name: 'Журналы, газеты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Календари, постеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Книги',
                            src: img + 'strelka.png',
                          },{
                            name: 'Учебная литература',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs73 = [
                          {
                            name: 'BMX велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для велосипедов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Двухподвесные велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Горные велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Городские велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Запчасти для велосипедов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Трековые велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Шоссейные велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Электровелосипеды',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs74 = [
                          {
                            name: 'Спортивные мероприятия',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Купоны и абонементы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детские мероприятия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Концерты',
                            src: img + 'strelka.png',
                          },{
                            name: 'Бизнес',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Путешествия',
                            src:img + 'strelka.png',
                          },{
                            name: 'Театр, опера, балет',
                            src: img + 'strelka.png',
                          },{
                            name: 'Цирк, кино',
                            src: img + 'strelka.png',
                          },{
                            name: 'Выставки, фестивали',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие билеты',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs75 = [
                          {
                            name: 'Поиск попутчиков',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Товары для кемпинга',
                            src:img + 'strelka.png',
                          },{
                            name: 'Туры и путевки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Услуги для туристов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Эмиграция',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs76 = [
                          {
                            name: 'Аудиокниги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Видео',
                            src:img + 'strelka.png',
                          },{
                            name: 'Музыка',
                            src: img + 'strelka.png',
                          },{
                            name: 'USB накопители',
                            src: img + 'strelka.png',
                          },
                        ];

                      var arrayshobby = [newobs69,newobs70,newobs71,newobs72,newobs73,newobs74,newobs75,newobs76];

                switch (categoryname) {
                case 'Хобби и игрушки':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs68;


                  break;

                }


                for(var phddddd = 0;phddddd < newobs68.length;phddddd++){
                    if(categoryname == newobs68[phddddd].name){

                        if(phddddd <= 7){
                          $scope.$ctrl.obs = arrayshobby[phddddd];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          mainView.router.loadPage("#add");
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohddddd = 0;ohddddd < arrayshobby.length;ohddddd++){
                    for(var jjhddddd = 0;jjhddddd < arrayshobby[ohddddd].length;jjhddddd++){
                        if(categoryname == arrayshobby[ohddddd][jjhddddd].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");
                       }
                    }

                }
                //Хобби и игрушки

                //arrays

                newobs77 = [
                          {
                            name: 'Украшения',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игрушки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Дом, интерьер',
                            src: img + 'strelka.png',
                          },{
                            name: 'Одежда, обувь',
                            src: img + 'strelka.png',
                          },{
                            name: 'Казахские национальные изделия - ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Для домашних животных',
                            src:img + 'strelka.png',
                          },{
                            name: 'Живопись',
                            src: img + 'strelka.png',
                          },{
                            name: 'Косметика, мыло',
                            src: img + 'strelka.png',
                          },{
                            name: 'Мастер-классы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Материалы для творчества',
                            src:img + 'strelka.png',
                          },{
                            name: 'Открытки, канцтовары',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сувениры ручной работы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сумки, аксессуары',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Цветы, флористика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Другие товары ручной работы',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs78 = [
                          {
                            name: 'Браслеты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Броши',
                            src:img + 'strelka.png',
                          },{
                            name: 'Заколки, обручи',
                            src: img + 'strelka.png',
                          },{
                            name: 'Колье, бусы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Серьги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие украшения',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs79 = [
                          {
                            name: 'Деревянные игрушки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Куклы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мягкие игрушки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие игрушки',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs80 = [
                          {
                            name: 'Кухня и посуда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Предметы мебели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Элементы интерьера и декор',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие предметы интерьера',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs81 = [
                          {
                            name: 'Детская одежда и обувь ручной работы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Женская одежда и обувь ручной работы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мужская одежда и обувь ручной работы',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs82 = [
                          {
                            name: 'Головные уборы и шарфы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Изделия из войлока',
                            src:img + 'strelka.png',
                          },{
                            name: 'Изделия из дерева',
                            src: img + 'strelka.png',
                          },{
                            name: 'Изделия из кожи',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Изделия из металла',
                            src:img + 'strelka.png',
                          },{
                            name: 'Казахская национальная одежда и обувь',
                            src: img + 'strelka.png',
                          },{
                            name: 'Казахские музыкальные инструменты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Казахские национальные украшения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Национальная посуда',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сувениры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сумки, ремни, аксессуары',
                            src:img + 'strelka.png',
                          },{
                            name: 'Тойбастар, коржын, приданое',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие национальные изделия',
                            src: img + 'strelka.png',
                          },
                        ];

                //arrays

                  var arraysruch = [newobs78,newobs79,newobs80,newobs81,newobs82];

                switch (categoryname) {
                case 'Изделия выполненные вручную':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs77;


                  break;

                }

                for(var phddddda = 0;phddddda < newobs77.length;phddddda++){
                    if(categoryname == newobs77[phddddda].name){

                        if(phddddda <= 4){
                          $scope.$ctrl.obs = arraysruch[phddddda];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          mainView.router.loadPage("#add");
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohddddda = 0;ohddddda < arraysruch.length;ohddddda++){
                    for(var jjhddddda = 0;jjhddddda < arraysruch[ohddddda].length;jjhddddda++){
                        if(categoryname == arraysruch[ohddddda][jjhddddda].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            mainView.router.loadPage("#add");
                       }
                    }

                }




      };




    }


  });


//module category



//module prodolzheniya


//module validation


// setInterval(function(){

//   $('[name = "addform"] .ng-invalid').each(function(index,element){

//                 $(element).parent().css("border-bottom","0.1px solid red");


//   });

//   $('[name = "addform"] .ng-valid').each(function(index,element){

//                 $(element).parent().css("border-bottom","0.1px solid #5ac8fa");

//   });





// },2000);

//changecolor
var fixedtime = 0;
var changetime; //metka kazhdie 5 sec
var changecolorvariable = 0;
var changecolorvariabletwo = 0;
var changecolorvariablethree = 0;
var changecolorvariablefour = 0;
var changecolorvariablefive = 0;

function changecolor(){


        if(fixedtime == 0){
          changetime = globaltime;
          fixedtime = 1;
        }


        if(globaltime == changetime + 2){
            changetime = globaltime;
            //console.log("changetime");
            var themecolor = $(".insertob").children("li");

            themecolor.each(function(index,element){

                var thiscolor = $(this).attr("status");
                //return false;
                //console.log(thiscolor);
                if(thiscolor == "1"){

                    if(changecolorvariable == 0){
                        $(this).css("background","#ffd6d6");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_title").css("color","#ffd6d6");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_text").css("color","#ffd6d6");
                        changecolorvariable = 1;
                    }else{
                        $(this).css("background","white");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_title").css("color","#fff");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_text").css("color","#fff");
                        changecolorvariable = 0;
                    }

                }else if(thiscolor == "2"){

                    if(changecolorvariabletwo == 0){
                        $(this).css("background","#fbff8c");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_title").css("color","#fbff8c");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_text").css("color","#fbff8c");
                        changecolorvariabletwo = 1;
                    }else{
                        $(this).css("background","white");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_title").css("color","#fff");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_text").css("color","#fff");
                        changecolorvariabletwo = 0;
                    }

                }else if(thiscolor == "3"){

                    if(changecolorvariablethree == 0){
                        $(this).css("background","#ffb665");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_title").css("color","#ffb665");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_text").css("color","#ffb665");
                        changecolorvariablethree = 1;
                    }else{
                        $(this).css("background","white");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_title").css("color","#fff");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_text").css("color","#fff");
                        changecolorvariablethree = 0;
                    }

                }else if(thiscolor == "4"){

                    if(changecolorvariablefour == 0){
                        $(this).css("background","#ff7094");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_title").css("color","#ff7094");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_text").css("color","#ff7094");
                        changecolorvariablefour = 1;
                    }else{
                        $(this).css("background","white");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_title").css("color","#fff");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_text").css("color","#fff");
                        changecolorvariablefour = 0;
                    }
                  //console.log(1);
                }else if(thiscolor == "5"){

                    if(changecolorvariablefive == 0){
                        $(this).css("background","#cdfffe");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_title").css("color","#cdfffe");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_text").css("color","#cdfffe");
                        changecolorvariablefive = 1;
                    }else{
                        $(this).css("background","white");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_title").css("color","#fff");
                        $(this).children(".viewob").children(".imgheight_div").children(".imgheight_text").css("color","#fff");
                        changecolorvariablefive = 0;
                    }

                }

            });


        }

        //console.log("changetimetest " + globaltime + " | " + changetime);
}

//x11

//changecolor


setInterval(function(){

        var checkforms = 0;

        $('[name = "addform"] > ul > li').each(function(index,element){

                var displaynone = $(element).css("display");

                //console.log(displaynone);

                if(displaynone != "none"){

                     // var valueattribute = $(element).children("div").children("div").children("div").children("input").attr("name");

                     // if(valueattribute){
                     //        console.log(valueattribute);
                     // }

                     var valueattribute = $(element).children("div").children("div").children("div").children("input");

                     var valueattribute2 = $(element).children("div").children("div").children("div").children("textarea");

                     valueattribute.each(function(){

                          if(this.checkValidity()){
                                  $(this).parent().css("border-bottom","2px solid #5ac8fa");
                           }else{
                                  $(this).parent().css("border-bottom","2px solid red");
                                  checkforms = 1;
                           }


                     });

                     valueattribute2.each(function(){

                          if(this.checkValidity()){
                                  $(this).parent().css("border-bottom","2px solid #5ac8fa");
                           }else{
                                  $(this).parent().css("border-bottom","2px solid red");
                                  checkforms = 1;
                           }


                     });



                     //sendob


                }

        });

                     if(checkforms == 0){
                          //$(".sendob").prop("disabled",false);
                          $(".sendob").removeAttr("disabled");

                     }else{
                          //$(".sendob").prop('disabled',true);
                          $(".sendob").attr('disabled','disabled');
                     }

    globaltime += 1;

    changecolor();
    //console.log(globaltime);

},1000);


//module validation

$(".myphone").mask("+7(999)9999999");
$(".yearmask").mask("9999");
//validate angular
//http://jsfiddle.net/2G8gA/1/

myApp.onPageBeforeAnimation('add', function (page) {

  $(".allhide").hide();


  localStorage.setItem("typezapchasti","0");

 // myApp.formDeleteData('form_to_submit');


var level1 = localStorage.getItem("level1");
var level2 = localStorage.getItem("level2");
var level3 = localStorage.getItem("level3");

console.log(level1 + " | " + level2 + " | " + level3);

switch (level3) {
  //nedvizhimost
  case 'квартиру':

    $(".nedvhide").show(3000);

    break;

    case 'общежитие':

    $(".nedvhide").show(3000);

    break;

    case 'комнату':

    $(".nedvhide").show(3000);

    break;

    case 'времянку':

    $(".nedvhide").show(3000);

    break;

    case 'место в подселение':

    $(".nedvhide").show(3000);

    break;
    //nedvizhimost
    //dom
    case 'дом':

    $(".domhide").show(3000);

    break;

    case 'дачу':

    $(".dachahide").show(3000);

    break;

    case 'участок':

    $(".uchastokhide").show(3000);

    break;

    case 'офис':

    $(".ofishide").show(3000);

    break;


    case 'помещение':

    $(".pomeshhide").show(3000);

    break;

    case 'здание':

    $(".zdaniehide").show(3000);

    break;

    case 'магазин':

    $(".maghide").show(3000);

    break;

    case 'бутик':

    $(".maghide").show(3000);

    break;

    case 'промбазу':

    $(".maghide").show(3000);

    break;

    case 'склад':

    $(".maghide").show(3000);

    break;

    case 'прочую недвижимость':

    $(".maghide").show(3000);

    break;




    case 'Продажа запчастей':

     $(".zapchbuttons").show(3000);

    break;

    case 'ищу запчасть':

    $(".zapchbuttons").show(3000);

    $(".senaot").show(3000);

    break;

    case 'авторазбор':

     $(".zapchbuttons").show(3000);

    break;

    case 'Магазины запчастей':

     $(".zapchbuttons").show(3000);

    break;

    case 'Авто на запчасти':

     $(".zapchbuttons").show(3000);

    break;

    case 'Расходники':

     $(".zapchbuttons").show(3000);

    break;

    case 'Аксессуары и мультимедиа':

     $(".zapchbuttons").show(3000);

    break;

    case 'Шины':

    $(".shinahide").show(3000);

    break;

    case 'Диски':

    $(".diskhide").show(3000);

    break;


    //dom

  case 4:

    break;
  case 5:

    break;

    default:
    //$(".allhide").hide();


}



switch (level2) {
  //nedvizhimost

    case 'продать машину':

    $(".avtohide").show(3000);

    break;


    case 'спецтехника':

    $(".speshide").show(3000);

    break;


    case 'Сдать':

    $(".sroksdachi").show(3000);

    break;

    case 'Купить':

    $(".senaot").show(3000);

    break;



    //dom

  case 4:

    break;
  case 5:

    break;

    default:
    //$(".allhide").hide();


}








//podgruzka modulya nedvizhimosti


var pickerDevice = myApp.picker({
    input: '.picker-sten',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['кирпичный', 'панельный', 'монолитный', 'блочный', 'деревянный', 'шлакоблочный', 'железобетонный', 'другое']
        }
    ]
});

var pickerDevice6 = myApp.picker({
    input: '.picker-sten2',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['кирпичный', 'панельный', 'монолитный', 'блочный', 'деревянный', 'шлакоблочный', 'железобетонный', 'другое']
        }
    ]
});


var pickerDevice2 = myApp.picker({
    input: '#picker-type',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['коттедж', 'времянка', '1 этажный дом', 'барачного типа', 'другое']
        }
    ]
});

var pickerDevice3 = myApp.picker({
    input: '#picker-type2',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['коттедж', 'времянка', 'небольшой стандартный дачный домик', 'другое']

        }
    ]
});

var pickerDevice4 = myApp.picker({
    input: '#picker-type3',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['в бизнес центре', 'в торговом центре', 'в административном здании', 'в жилом доме','в коттедже','другое']

        }
    ]
});


var pickerDevice5 = myApp.picker({
    input: '#picker-type4',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['улучшенное', 'старого типа', 'новое', 'барачный','бизнес центр','хрущевка','другое']

        }
    ]
});

var pickerDevice7 = myApp.picker({
    input: '#picker-type7',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['в бизнес центре', 'в торговом центре', 'в административном здании', 'в жилом доме','в коттедже','отдельно стоящее','другое']

        }
    ]
});


var pickerDevice8 = myApp.picker({
    input: '#picker-type8',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['белый','черный','серый','серебристый','серебристый','синий','голубой','зеленый','красный','бордовый','оранжевый','розовый','бежевый','желтый','золотистый','коричневый','фиолетовый']

        }
    ]
});


var pickerDevice9 = myApp.picker({
    input: '#picker-type9',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['хорошее','отличное','новое']

        }
    ]
});



$(".obem").mask("9.9");


var carVendors = {
    Toyota : ['4Runner','Allex','Allion','Alphard','Altezza','Aristo','Aurion','Auris','Avalon','Avensis','Avensis-Verso','Aygo','bB','Blizzard','Brevis','Caldina',
    'Cami','Camry','Camry-Gracia','Camry-Lumiere','Carib','Carina-E','Carina-ED','Carina-2','Cavalier','Celica','Celsior','Century','Ceres','Chaser','Corolla','Corolla-Verso',
    'Corona','Corona-Exiv','Corona-Mark-II','Corona-Premio','Corsa','Cressida','Cresta','Crown','Crown-Majesta','Curren','Cynos','Duet','Echo','Emina','Estima','FJ-Cruiser','Fortuner',
    'Funcargo','Gaia','Granvia','GT86','Harrier','Hiace','Hiace-Regius','Highlander','Hilux','Hilux-Surf','Innova','Ipsum','IQ','Isis','Ist','Kluger','Land-Cruiser','Land-Cruiser-Prado',
    'Levin','Lite-Ace','Lucida','Marino','Mark-II','Mark-X','Master','Master-Ace','Master-Ace-Surf','Master-Surf','Matrix','Mega-Cruiser','Model-F','MR-2','Nadia','Noah','Opa','Paseo','Passo-Sette',
    'Picnic','Platz','Porte','Previa','Prius','Probox','Progres','Pronard','Ractis','Raum','RAV','Regius','Scepter','Sequoia','Sera','Sienna','Sienta','Soarer','Solara','Soluna','Spacio',
    'Sprinter','Sprinter-Carib','Sprinter-Marino','Sprinter<-Trueno','Starlet','Supra','Tacoma','Tercel','Town-Ace','Town-Ace-Noah','Townace','Regius','Tundra','Urban-Cruiser',
    'Venza','Verossa','Verso','Verso','Vibe','Vista','Vista-Ardeo','Vitz','Voltz','Voxy','Will','Windom','Wish','Xa','Yaris'],
    Lexus : ['CT-300','CT-300h','CT-200h','ES','ES-300','ES','200','ES-250','ES-300h','ES-330','ES-350','GS','GS-250','GS','300-GS','300h',
    'GS-350','GS','400-GS','430-GS','450h-GS','460-GX','GX-400','GX-460','GX-470','HS-250h','IS','IS-200','IS-220','IS-250','IS-300','IS-350','IS','LFA-LS','LS-400',
    'LS-430','LS-460','LS-500h','LS-600h','LX','LX-450','LX-470','LX-570','NX','NX-200','NX-200t','NX-300h','RC','RC-300h','RC-350','RX','RX-200t','RX-270','RX-300','RX-330',
    'RX-350','RX-400h','RX-450h','SC','SC-300','SC-400','SC-430'],
    Nissan : ['100NX','100SX','180SX','200SX','240SX','280ZX','300ZX','350Z','370Z','Almera','Altima','Armada','Auster','Avenir',
    'Bassara','Bluebird','Bluebird','Sylphy','Caravan','Cedric','Cefiro','Cherry','Cima','Cube','Elgrand','Expert','Fairlady','Frontier','Fuga','Gloria',
    'GT','Homy','Interstar','Juke','Kubistar','Largo','Laurel','Leaf(electric)','Leopard','Liberty','Lucino','March','Maxima','Micra','Mistral','Moco','Murano','Navara',
    'Note','NP300','NV200','Otti','Paladin','Pathfinder','Patrol','Pick','Up','Pixo','Prairie','Prairie-Joy','Presage','Presea','President','Primastar','Primera','Primera-Camino',
    'Pulsar','Qashqai','Qashqai-Quest','nessa','Rasheen','Rogue','Safari','Sentra','Serena','Silvia','Skyline','Skyline-GT','Stagea','Stanza','Sunny','Teana','Terrano','Terrano-II',
    'Tiida','Tino','Titan','Urvan','Vanette','Versa','Wingroad','X-Trail','Xterra'],
    Honda : ['Accord','Airwave','Ascot','Ascot Innova','Asty','Avancier','Beat','Capa','City','Civic','Civic Ballade','Civic Shuttle','Civic Si','Civic Type R','Concerto',
    'CR V','CR Z','Crossroad','Crosstour','CRX','Domani','Element','Elision','FCX','Clarity','Fit','FR V','Freed','Horizon','HR V','Insight','Inspire','Integra','Jazz','Lagreat',
    'Legend','Life','Logo','Mobilio','NSX','Odyssey','Orthia','Partner','Passport','Pilot','Prelude','Quintet','Rafaga','Ridgeline','S2000','Saber','Shuttle','SM-X','Spike','Stepwgn',
    'Stream','Today','Torneo','Vamos','Vezel','Vigor'],
    Hyundai : ['Accent','Atos','Avanta','Touring','Avante','Azera','Centennial','Chorus','Click','Coupe','Dynasty','Elantra','Equus','Excel','Galloper','Genesis','Genesis','Coupe',
    'Getz','Grace','Grand','Starex','Grandeur','100','200','i10','i20','i30','i40','i50','ix20','ix35','ix55','Lantra','Lavita','Marcia','Matrix','Maxcruz','Pony','Porter','Coupe',
    'SantaFe','Santamo','Solaris','Sonata','Starex','Stellar','Terracan','Tiburon','Trajet','Tucson','Tuscani','Veloster','Veracruz','Verna','XG','XG','30','XG','350'],
    Kia : ['Avella','Delta','Besta','Bongo','Borrego','Cadenza','Capital','Carens','Carnival','Cee','Cee','SW','Cerato','Cerato','Koup','Clarus','Concord',
    'Credos','Credos','II','Elan','Enterprise','Joice','K3','Forte','K5','K7','Lotze','Magentis','Mentor','Mohave','Morning','Opirus','Optima','Picanto','Potencia','Pregio','Pride','Pro','Cee','Quoris',
    'Ray','Regal','Retona','Rio','Roadster','Rocsta','Sephia','Shuma','Sorento','Soul','Spectra','Sportage','Grand','Topic','Venga','Visto'],
    Acura : ['CL','CSX','EL','ILX','Integra','MDX','NSX','RDX','RL','RLX','RSX','SLX','TL','TLX','TSX','ZDX'],
    Audi : ['100','200','80','90','A1','A2','A3','A4','A4-allroad','A5','A6','A6-allroad','A7','A8','A8-Allroad','Cabriolet-Coupe','Q3','Q5','Q7','R8',
    'RS','Q3','RS2','RS3','RS4','RS5','RS6','RS7','Q3','Q5','S1','S2','S3','S4','S5','S6','S7','S8','TT','TTS','V8'],
    Volkswagen : ['Amarok','Beetle','Bora','Caddy','California','Campers','Caravelle','Corrado','Crafter','Derby','Eos','Eurovan','Fox','Gol','Golf','Golf',
    'Country','Golf','Plus','Golf','Sportsvan','Jetta','Kaefer','LT','Lupo','Multivan','Passat','Passat-CC','Phaeton','Pointer','Polo','Polo-Classic','Routan','Santana',
    'Scirocco','Sharan','Taro','Tiguan','Touareg','Touran','Transporter','up','Vento'],
    BMW : ['1-series','114','116','118','120','125','128','130i','135i','2-series','218','220','225','228i','Series','Active','Tourer','3-Series','315','316','318','318i',
    '320','320i','323','324d','325','328','330','335','4-Series','418','420','425','428','430','435','5-Series','518','520','523','524','525','528','530','530','ActiveHybrid',
    '535','540','545','550','6-Series','628','630','633','635','640','645','650','7-Series','725','728','730','732','735','740','745','750','760','8-Series','840','850','i3',
    'i8','GT-Series','Gran-Turismo Series','M1','Coupe','M135i','M235i','M3','M4','M5','M550d','M6','Coupe','Roadster','X5','X6','X-Series','X1','X3','X4','X5','X6','Z-Series',
    'Z3','Z4','Z8'],
    Mercedes_Benz : ['190','AMG-GT','A-Класс','A-140','A-150','A-160','A-170','A-180','A-190','A-200','A-210','A-220','A-250','A-45-AMG','B-Класс','B-150','B-160','B-170','B-180','B-200','B-220',
    'B-250','C-Класс','C-160','C-180','C-200','C-220','C-230','C-240','C-250','C-270','C-280','C-30AMG','C-300','C-32AMG','C-320','C-350','C-400','C-36AMG','C-43AMG','C-450AMG','C-55AMG','C-63AMG',
    'Citan','CE-class','CE-200','CE-220','CE-230','CE-300','CL-class','CL-180','CL-200','CL-220','CL-230','CL-420','CL-500','CL-550','CL-45AMG','CL-55AMG','CL-600','CL-63AMG','CL-65AMG','CLA-class',
    'CLA-180','CLA-200','CLA-220','CLA-250','CLA45-AMG','CLC-160','CLC-180','CLC-200','CLC-220','CLC-230','CLC-350','CLK-class','CLK-200','CLK-220','CLK-230','CLK-240','CLK-270','CLK-280','CLK-320',
    'CLK-350','CLK-430','CLK-500','CLK-55AMG','CLK-63AMG','CLS-class','CLS-250','CLS-280','CLS-320','CLS-350','CLS-400','CLS-500','CLS-550','CLS-55AMG','CLS-63AMG','E-class','E-200','E-220','E-230',
    'E-240','E-250','E-260','E-270','E-280','E-290','E-300','E-320','E-350','E-36AMG','E-400','E-420','E-430','E-50','E-500','E-55','E-60AMG','63AMG','G-class','G-230','G-240','G-250','G-270','G-280',
    'G-290','G-300','G-320','G-350','G-400','G-500','G-55AMG','G-63>AMG','G-65AMG','GL-class','GL-320','GL->350','GL-400','GL-420','GL-450','GL-500','GL-550','GL-55AMG','GL-63AMG','GLA-class',
    'GLA-200','GLA-220','GLA-250','GLA-45AMG','GLC-class','GLC-220','GLC-250','GLC-350','GLE-class','Coupe-GLE','350-GLE','400-GLE','GLE450-AMG','Sport-Coupe-AMG','63-GLE-Coupe','GLK-class','GLK-200',
    'GLK-220','GLK-250','GLK-280','GLK-300','GLK-320','GLK-350','GLS-class','GLS-350d','GLS-400','GLS-500MB','ML-class','100ML','230ML','250ML','270ML','280ML','300ML','320ML','350ML','400>ML',
    '420ML','430ML','450ML','500ML','550ML','55AMG','ML63AMG','R-class','R-280','R-300','R-320','R-350','R-500','R-63AMG','S-class','S-220','S-260','S-280','S-300','S-320','S-350','S-380','S-400',
    'S-420','S-430','S-450','S-500','S-55','S-550','S-600','S-63AMG','S-65AMG','SL-class','SL-280','SL-300','SL-320','SL-350','SL->380','SL-400','SL-420','SL-450','SL-500','SL-55AMG','SL-560',
    'SL60AMG','SL-600','SL-63AMG','SL-65AMG','SL-70AMG','SL-73AMG','SLK-class','SLK-200','SLK-230','SLK-250','SLK-280','SLK-300','SLK-32AMG','SLK-320','SLK-350','SLK-55AMG','SEC-500AMG','SLR',
    'SLS-AMG','Sprinter','V-class','V-200','V-220','V-230','V-250','V-280','Vaneo','Vario','Viano','Vito'],
    Mitsubishi : ['3000GT','Airtrek','ASX','Carisma','Challenger','Chariot','Colt','Cordia','Debonair','Delica','Diamante','Dingo','Dion','Eclipse','Emeraude','Endeavor','Eterna',
    'Eterna','Sava','FTO','Galant','Grandis','GTO','L200','L300','L400','Lancer','Lancer','Evolution','Legnum','Libero','Cargo','Magna','Minica','Mirage','Montero','Montero','Sport',
    'Nativa','Outlander','Pajero','Pajero','Evolution','Pajero','IO','Pajero','Junior','Pajero','Mini','Pajero','Pinin','Pajero','Sport','Proton','RVR','RVR','Open','Gear','RVR','Sport',
    'Gear','Sapporo','Sigma','Space','Gear','Space','Runner','Space','Star','Space','Wagon','Starion','Toppo','Bj','Wide','Tredia','Zinger'],
    Opel : ['Adam','Agila','Ampera','Antara','Arena','Ascona','Astra','Calibra','Campo','Cascada','Cavalier','Combo','Commodore','Corsa','Diplomat','Frontera','GT','Insignia',
    'Kadett','Manta','Meriva','Mokka','Monterey','Monza','Movano','Nova','Omega','Pick-Up','Sportscap','Rekord','Senator','Signum','Sintra','Speedster','Tigra','Vectra','Vita','Vivaro','Zafira'],
    Skoda : ['120','1203','130','135','Citigo','Estela','Fabia','Favorit','Felicia','Felicia-Combi','Forman','Octavia','Pick-up','Rapid','Roomster','Superb','Yeti'],
    Alfa_Romeo : ['145','146','147','155','156','159','164','166','33','4C','75','8C','Competizione','90','Alfasud','Alfetta','Brera','Crosswagon','Sportwagon','Q4','Giulia',
    'Giulietta','GT','GTV','MiTo','RZ','SZ','Spider','Sprint'],
    Aston_Martin : ['DB7','DB9','DBS','V12','Lagonda','One','77','Rapide','V12','Vanquish','V12','Vantage','V8','V8','Vantage','Vanquish','Vanquish','Vantage','Virage'],
    BYD_elect : ['E6','F0','F3','F6','F7','Flyer','G3','G6','i6','L3','M6','S6'],
    Bentley : ['Arnage','Azure','Bentayga','Brooklands','Continental','Flying','Spur','Continental','GT','Continental','Continental','Eight','Flying','Spur','Mulsanne','Turbo','Turbo','RT','Turbo'],
    Bugatti : ['EB','110','Veyron'],
    Cadillac : ['Coupe','De','Ville','Allante','ATS','BLS','Brougham','Catera','CTS','DeVille','DTS','Eldorado','Escalade','Evoq','Fleetwood','LSE','Sedan','de','Ville','Seville','SRX','STS','XLR','XTS'],
    Chery : ['Amulet','A15','Arrizo','Bonus','A13','Bonus','E3','Cowin','CrossEastar','E5','Fora','A21','IndiS','Kimo','A1','M11','QQ6','S21','Sweet','QQ','Tiggo','Very'],
    Chevrolet : ['Alero','Astra','Astro','Avalanche','Aveo','Beretta','Blazer','Camaro','Caprice','Captiva','Cavalier','Celebrity','Celta','Chevelle','Chevy','Van','Citation','Cobalt',
    'Colorado','Corsica','Corvette','Cruze','El','Camino','Epica','Equinox','Evanda','Express','Series','HHR','Impala','K1500','K30','Kalos','Lacetti','Lanos','Lumina','Malibu','Matiz',
    'Monte','Carlo','Monza','Nexia','Niva','Nubira','Orlando','Prizm','Rezzo','10','Sail','Silverado','Sonic','Spark','Sprint','SSR','Starcraft','Suburban','Tacuma','Tahoe','Tavera','Tracker',
    'TrailBlazer','Trans','Sport','Traverse','Uplander','Van','Venture','Viva','Volt'],
    Chrysler : ['200','300C','300M','Aspen','Cirrus','Concorde','Crossfire','Daytona','ES','Grand','Voyager','GS','GTS','Imperial','Intrepid','Le','Baron','LHS','Nassau',
    'Neon','New','Yorker','Pacifica','Prowler','PT','Cruiser','Saratoga','Sebring','Stratus','Town','Country','Valiant','Viper','Vision','Voyager'],
    Citroen : ['CV','AX','Berlingo','BX','Crosser','Elysee','C1','C15','C2','C3','C3','Picasso','C4','C4','Aircross','C4','Cactus','C4','Picasso','C5','C6','C8','CX','DS3','DS4',
    'DS5','Evasion','Grand','C4','Picasso','GSA','Jumper','Jumpy','Nemo','SAXO','SM','Visa','Xantia','XM','Xsara','Xsara','Picasso','ZX'],
    Daewoo : ['Brougham','Cielo','Damas','Espero','Evanda','Gentra','Kalos','Korando','Lacetti','Lanos','Leganza','Lemance','Lublin','Magnus','Matiz','Matiz','Creative','Musso',
    'Nexia','Nubira','Prince','Racer','Rezzo','Tacuma','Tico','Tosca','Winstorm'],
    Daihatsu : ['Altis','Applause','Boon','Charada','Charmant','Copen','Cuore','Esse','Feroza','Grand','Move',
    'Leeza','Materia','Max','Mira','Move','Naked','Pyzar','Re','Go','Rocky','Rugger','Sirion','Storia','Tanto',
    'Terios','Trevis','Wildcat','YRV'],
    Dodge : ['Avenger','Caliber','Caravan','Challenger','Charger','Dakota','Dart','Daytona','Durango','Dynasty','Grand',
    'Caravan','Intrepid','Journey','Magnum','Monaco','Neon','Nitro','RAM','Shadow','Spirit','Sprinter','Stealth','Stratus','Viper'],
    DongFeng : ['A30','A60','AX7','EQ6380','H30','Cross','L60','MPV','S30','S60','ZNA'],
    FAW : ['6390E','A6','Audi100','Besturn','B50','Besturn','B70','Besturn','X80','Bora','CA1021u2','CA6350','CA6371A4','CA6390B5',
    'CargoVan','City','Golf','Jetta','Jinn','Landmark','Oley','S80','V2','V5','V80','Vita','6371'],
    Ferrari : ['208','246','250','275','288','308','328','330','348','360','365','400','412','456','458','Italia','512','550','575','599','GTB','612','750','California','Daytona','Dino','GT4','Enzo',
    'Ferrari','F355','F40','F430','F50','FF','Mondial','Superamerica','Testarossa'],
    Fiat : ['124','126','127','130','131','500','500L','Albea','Barchetta','Brava','Bravo','Cinquecento','Coupe','Croma',
    'Dino','Doblo','Ducato','Fiorino','Freemont','Grande','Punto','Idea','Kartal','Linea','Marea','Marengo','Multipla','Palio',
    'Panda','Punto','Qubo','Regata','Ritmo','Scudo','Sedici','Seicento','Siena','Spider','Europa','Stilo','Strada','Tempra','Tipo',
    'Ulysse','UNO'],
    Ford : ['Aerostar','Aspire','Max','Bronco','Max','Capri','Contour','Cougar','Courier','Crown','Crown','Victoria','350',
    'Econoline','Econovan','EcoSport','Edge','Escape','Escort','Excursion','Expedition','Explorer','Express','150','250','350',
    '450','650','Fairlane','Falcon','Festiva','Fiesta','Five','Hundred','Flex','Focus','Focus','Max','Freda','Freestyle','Fusion',
    'Galaxy','Granada','Grand','Marquis','GT','KA','Kuga','Lazer','LTD','Maverick','Mercury','Mondeo','Mustang','Orion','Probe',
    'Puma','Ranger','Max','Scorpio','Shelby','Sierra','Taunus','Taurus','Telstar','Tempo','Thunderbird','Tourneo','Transit','Transit',
    'Connect','Windstar'],
    GMC : ['Acadia','Conoma','Denali','Envoy','Jimmy','Safari','Savana','Sierra','Sonoma','Suburban','Syclone','Terrain','Typhoon',
    'Vandura','Yukon'],
    Geely : ['Beauty','Leopard','CK','CK1','Emgrand','EC7','Emgrand','EC8','Emgrand','X7','FC','GC6','GC7','Haoquing','Haoquing','300','LC','LC','Cross',
    'Maple','Meirie','MK','MK-Cross','Otaka','SC7','Uliou','Vision'],
    Hummer : ['H1','H2','H3'],
    Infiniti : ['EX','EX25','EX35','EX37','FX','FX35','FX37','FX30d','FX45','FX50','G20','G25','G35','G37','I30','I35','J30','JX35','M25','M35','M37',
    'M45','M56','Q30','Q45','Q50','Q60','Q70','QX','QX4','QX30','QX50','QX56','QX60','QX70','QX80'],
    Isuzu : ['Amigo','Ascender','Aska','Axiom','Bighorn','Campo','Max','Gemini','Hi','Lander','Midi','Mu','Pa','Nero','Piazza',
    'Pick','Up','Rodeo','Trooper','VehiCross','Wizard'],
    ИЖ : ['2125','2125','2126','2715','2716','2717'],
    JMC : ['Baodian','Landwind','X6'],
    Jaguar : ['I Type','Pace','Type','MK','II Type','Sovereign','Type','XE','XF','XFR','XJ','XJ12','XJ40','XJ6','XJ8','XJR','XJS','XJSC','XK','XKR'],
    Jeep : ['Cherokee CJ','Comanche','Commander','Compass','Grand Cherokee','Liberty','Patriot','Renegade','Wagoneer','Willys','Wrangler'],
    Lamborghini : ['Aventador','Countach','Diablo','Espada','Gallardo','Huracan','Jalpa','LM002','Miura','Murcielago','Reventon','Urraco'],
    LandRover : ['Defender','Discovery','Discovery-Sport','Evoque','Freelander','LR2','LR4','RangeRoverSport'],
    Lifan : ['620','Breez','Cebrium','Celliya','Smily','Solano','X50','X60'],
    Lincoln : ['Aviator','Continental','LS','Mark','Mark VIII','MKS','MKX','MKZ','Navigator','Town','Car','Zephyr'],
    Lotus : ['340','Cortina','Elan','Elise','Elite','Esprit','Europa','Evora','Excel','Exige','Super','Seven','V8'],
    ЛУАЗ : ['967','969'],
    Maybach : ['57','62'],
    Santana : ['Anibal'],
    Saturn : ['Astra','Aura','Ion','LS','LW','Outlook','Relay','SC','Sky','SL','SW','Vue'],
    Seat : ['Alhambra','Altea','Arosa','Cordoba','Exeo','Fura','Ibiza','Inka','Leon','Malaga','Marbella','Rondo','Terra','Toledo'],
    Smart : ['City','Crossblade','ForFour','ForTwo','Roadster'],
    SsangYong : ['Actyon','Actyon-Sports','Chairman','Estano','Istana','Korando','Korando-Family','Kyron','Musso','Musso-Sport',
    'Nomad','Rexton','Rodius','Stavic'],
    Subaru : ['Alcyone','Baja','BRZ','Domingo','Exiga','Forester','Fuji','Impreza','Impreza-XV','Justy','Legacy','Legacy-Grand','Wagon',
    'Legacy-Lancaster','Leone','Libero','Lucra','Outback','Pleo','Rex','Sambar','SVX','Trezia','Tribeca','Vivio','WRX','XT','XV'],
    Suzuki : ['Aerio','Alto','Baleno','Cappuccino','Carry','Celerio','Cervo','Cultus','Ertiga','Escudo','Esteem','Every','Forenza','Fronte',
    'Grand','Vitara','Ignis','Jimny','Kei','Kizashi','Landy','Liana','MR','Wagon','Reno','Samurai','Sidekick','Solio','Spacia','Splash','Swift',
    'SX4','SX4-cross','Vitara','Wagon','Wagon-90','XL7'],
    Tesla_elect : ['Model-S','Model-X','Roadster'],
    Vortex : ['Corda','Estina','Tingo'],
    Volvo : ['240-Series','260-Series','300-Series','440','460','480','740','760','850','850T5','940','960','C30','C70',
    'S40','S60','S70','S80','S90','V40','V50','V60','V70','V70-XC','V80','V90','XC60','XC70','XC90'],
    Газ : ['2310','2401','24011','2402','2403','2407','2410','2411','2412','2413','2414','2417','2477','2705','2752','3101','3102','31022',
    '310221','31029','3110','31105','32213','32215','3302','33023','Siber','21R32','10','NEXT','22R32','20','NEXT'],
    ВАЗ : ['2101','2102','2103','2104','2105','2106','2107','2108','2109','21099','2113','2114','2115LADA','110','2110','2111','2112LADA-Priora',
    '2170','2171','2172','2172-LADA-Kalina','1117','1118','1119-LADA-Kalina','2192','2194-LADA-Granta','2190','2191-LADA-Largus',
    'Largus-R90','Largus-F90','1111','11113','1922','2121','2123','2129','2131','2329','2120','Vesta'],
    ВИС : ['LADA-4x4','234600','234610','234500','234700-LADA-Samara','234900-LADA-Granta'],
    Mazda : ['121','323','616','626','929','Atenza','Axela','AZ','AZ-Offroad','AZ-Wagon','AZ1','AZ3','series','Biante','Bongo',
    'BT','50','Capella','Carol','Cosmo','Cronos','CX','Demio','Efini','MS8','Efini','MS9','Etude','Eunos','500','Eunos','800','Eunos',
    '900','Eunos','Presso','Eunos','Roadster','Familia','Lantis','Levante','Luce','Marvi','Millenia','MPV','MS3','MS6','MS8','MS9','MX3',
    'MX5','MX6','MX8','Navajo','Persona','Premacy','Proceed','Protege','Roadster','RX6','RX7','RX8','Sentia','Speed6','Tribute','Verisa',
    'Xedos','Xedos6','Xedos9'],
    Mini : ['Cabrio','Clubman','Clubvan','Countryman','Coupe','Hatch','Paceman','Roadster'],
    Peugeot : ['1007','106','107','2008','204','205','206','207','208','3008','301','304','305','306','307','308','309','4007',
    '4008','405','406','406-Coupe','407','408','5008','505','508','604','605','607','806','807','Bipper','Tepee','Boxer','Expert','Partner','RCZ'],
    Plymouth : ['Acclaim','Breeze','Grand','Voyager','Laser','Neon','Prowler','Sundance','Voyager'],
    Pontiac : ['6000','Aztec','Bonneville','Fairfly','Fiero','Firebird','G6','Grand-AM','Grand-Prix','GTO','LE','Mans','Montana',
    'Phoenix','Solstige','Sunbird','Sunfire','Targa','Torrent','Trans','Sport','Vibe'],
    Porsche : ['911-Carrera','918','924','928','944','968','Boxster','Cayenne','Cayman','Macan','Panamera'],
    Renault : ['11','12','14','16','18','19','20','21','25','30','Alpine','A110','Alpine','A310','Alpine','V6','Avantime',
    'Boxer','Captur','Clio','Duster','Espace','Express','Fluence','Fuego','Kangoo','Koleos','Laguna','Latitude','Logan',
    'Lutecia','Mascott','Master','Megane','Modus','Rapid','Safrane','Sandero','Sandero','Stepway','Scenic','Symbol','Trafic',
    'Twingo','Twizy','Vel','Satis','ZOE'],
    Rover : ['200','213','214','216','220','400','416','420','45','600','618','620','623','75','800','820','825','827','Austin','Maestro','MGF','Mini','Montego','200','213','214','216','220','400',
    '416','420','45','600','618','620','623','75','800','820','825','827','Austin','Maestro','MGF','Mini','Montego'],
    Rolls_Royce : ['Corniche','Ghost','Park','Ward','Phantom','Silver','Cloud','Silver','Dawn','Silver','Seraph','Silver','Shadow',
    'Silver','Spirit','Silver','Spur','Wraith'],
    Saab : ['2X','7X','90','900','9000','96','99'],
    Samsung : ['QM5','SM3','SM5','SM7'],
    УАЗ : ['967','969'],
    ЗАЗ : ['1102','1103','1105','1125','1140','968','Chance','Forza','Sens','Vida'],
    Retro_Машины : ['Austin-10','Austin-FX4','Barkas','B1000','BMW-321','Buick-Special','Buick-Super','Convertible','Cadillac-DeVille',
    'Cadillac-Eldorado','Chevrolet-Bel-Air','Chrysler-Imperial','DeSoto','Custom','Ford-Model','Ford-Taunus','Ford-Tudor','Lincoln-Continental',
    'Mazda-1300','Mercedes-Benz-220SE-W111','Packard-120-Custom','Packard-180-Super-Eight','Packard-300-Packard-Custom','Clipper','Plymouth-Fury',
    'Rolls-Royce','Silver-Shadow','Simca-Horison','Skoda-1201','Steyr-50','Willys','Skoda-Octavia-Super','12','13','14',
    '20','21','22','24','67','69','965','966','111','114','117','110','400','401','402','403','407','408','423','434'],



};
var pickerDependent = myApp.picker({
    input: '#picker-dependent',
    toolbarCloseText:'закрыть',
    rotateEffect: true,
    formatValue: function (picker, values) {
        return values[0] + ":" + values[1];
    },
    cols: [
        {
            textAlign: 'left',
            values: ['Toyota', 'Lexus','Nissan', 'Honda', 'Hyundai', 'Kia' ,'Acura' ,'Audi', 'Volkswagen', 'BMW' ,'Mercedes_Benz' ,
            'Mitsubishi', 'Opel' ,'Skoda' ,'Alfa_Romeo', 'Aston_Martin', 'BYD_elect', 'Bentley', 'Bugatti' ,'Cadillac', 'Chery', 'Chevrolet',
            'Chrysler', 'Citroen','Daewoo', 'Daihatsu', 'Dodge', 'DongFeng', 'FAW', 'Ferrari', 'Fiat', 'Ford', 'GMC', 'Geely', 'Hummer',
             'Infiniti', 'Isuzu', 'ИЖ', 'JMC', 'Jaguar', 'Jeep', 'Lamborghini', 'LandRover', 'Lifan', 'Lincoln', 'Lotus', 'ЛУАЗ', 'Maybach',
              'Santana', 'Saturn', 'Seat', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Tesla_elect', 'Vortex', 'Volvo', 'Газ', 'ВАЗ', 'ВИС',
              'Mazda', 'Mini', 'Peugeot', 'Plymouth', 'Pontiac', 'Porsche', 'Renault', 'Rover', 'Rolls_Royce', 'Saab', 'Samsung',
              'УАЗ', 'ЗАЗ', 'Retro_Машины'],
            onChange: function (picker, country) {
                if(picker.cols[1].replaceValues){
                    picker.cols[1].replaceValues(carVendors[country]);
                }
            }
        },
        {
            values: carVendors.Toyota,
            width: 160,
        },
    ]
});


var pickerDependent25 = myApp.picker({
    input: '#picker-dependentzapch',
    toolbarCloseText:'закрыть',
    rotateEffect: true,
    formatValue: function (picker, values) {
        return values[0] + ":" + values[1];
    },
    cols: [
        {
            textAlign: 'left',
            values: ['Toyota', 'Lexus','Nissan', 'Honda', 'Hyundai', 'Kia' ,'Acura' ,'Audi', 'Volkswagen', 'BMW' ,'Mercedes_Benz' ,
            'Mitsubishi', 'Opel' ,'Skoda' ,'Alfa_Romeo', 'Aston_Martin', 'BYD_elect', 'Bentley', 'Bugatti' ,'Cadillac', 'Chery', 'Chevrolet',
            'Chrysler', 'Citroen','Daewoo', 'Daihatsu', 'Dodge', 'DongFeng', 'FAW', 'Ferrari', 'Fiat', 'Ford', 'GMC', 'Geely', 'Hummer',
             'Infiniti', 'Isuzu', 'ИЖ', 'JMC', 'Jaguar', 'Jeep', 'Lamborghini', 'LandRover', 'Lifan', 'Lincoln', 'Lotus', 'ЛУАЗ', 'Maybach',
              'Santana', 'Saturn', 'Seat', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Tesla_elect', 'Vortex', 'Volvo', 'Газ', 'ВАЗ', 'ВИС',
              'Mazda', 'Mini', 'Peugeot', 'Plymouth', 'Pontiac', 'Porsche', 'Renault', 'Rover', 'Rolls_Royce', 'Saab', 'Samsung',
              'УАЗ', 'ЗАЗ', 'Retro_Машины'],
            onChange: function (picker, country) {
                if(picker.cols[1].replaceValues){
                    picker.cols[1].replaceValues(carVendors[country]);
                }
            }
        },
        {
            values: carVendors.Toyota,
            width: 160,
        },
    ]
});


//podgruzka modulya nedvizhimosti


var pickerDevice = myApp.picker({
    input: '#picker-sdependent',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['Abbey','ABI_Jubilee','Ackermann','ADR_Trailers','Adria','Aichi','Airman','Alloy','Ammann','ANT','Asia','Atlant','Atlas',
            'Atlet','Avant','Avia','Avondale','Bailey','Balkancar','Baw','Beifang_Benchi','Bell','Bergland','Blumhardt','Bobcat','Bomag','Bova',
            'Branson','Bravis','Brenner','Broshuis','Buccaneer','Buerstner','BULL','Bulldog_Trailers','Burg','Caiman','CAMC','Camper','Camro',
            'Caravelair','Carmix','Carson','Case','Caterpillar','Changchun','Changlin','Chateau','Chehvrolet','Chenggong','Chereau','Chery',
            'China_First_Automobile_Group','CHOICE','CIMC','Citroen','Clark','CNH','Coleman','Combilift','Compass','Craftsman','Daehan','NF150',
            'Daenong','Daewoo','DAF','Daihatsu','Dalian','Dasan','Deadong','Demag','Terex','Denyo','Dethleffs','Dieci','Digger','Dimex','Dongfeng',
            'Donghae','Dongyang','Doosan','Doosan','Daewoo','Dorsey_Trailers','Dressta','DVRV','Dynapac','Eduard','Elddis','Elephant',
            'Enxin_Enterprise','HEX9400GYY','EP','Es','Ge','Everdigm','Everlast','30','Fassi','Faun','FAW','Fendt_Xaver','Fiat','Fiat',
            'Hitachi','Fiori','First_Loader','Fleetwood','Fliegl','GmBH','Ford','Forway','Foton','Freightliner','Fruehauf','Fuchs','Fudzi',
            'Fuji','Heavy','Fukai','ZL','926','Furukawa','Gehl','General_Trailers','Genie','Gensco','Goldhofer','Gray','Adams','Great','Dane',
            'Greatwall','Groenewegen','Gros','Grove','Grunwald','GT7','Hagglunds','BV','206','Haihong','Halla','Hamm','Hangcha','Hania','Hanix',
            'Hankook','Hanshin','Hansin','Hanta','Haomei','Hartung','Hayazaki','HBXG','Heli','Hengte','Hiab','Hidromek','Higer','Hino','Hinomoto',
            'Hitachi','Hobby','Prestige','Holmer','Honda','Horyong','Howo','Huanda','Humbaur','Hydrema','Hyster','Hyundai','HZM','IFA','IHI',
            'Ikarus','International','Iseki','Isuzu','Iveco','Jac','Jacto','JBC','JCB','Jian','Cheng','Jinbo','Jinwoo','JMC','John','Deere',
            'Jonyang','Jotec','Jun','Jin','Jungheinrich','Kafi','Kaiser','Kalmar','Kanglim','Karosa','Kato','Kawasaki','KCP','Kelberg','Kenworth',
            'Kia','King','Long','KIP','Knaus','Country','Kobelco','KOBIT','Kogel','Komatsu','Korea','Trailer','Kramer','Krone','Kubota','Kukji',
            'Kyungwon','Lamberet','Lay','Mor','LeciTrailer','LG','Liebherr','Linde','Lishide','LiuGong','LMC','Locatelli','Locust','Longgong',
            'Lonking','Lord','Muensterland','Luna','Luyang','Mack','Maeda','Mag','Magni','MAN','Manac','Auto','Manitou','Manitowoc','Marauder',
            'Marcel','Boschung','SA','Marshall','Masalta','Massey','Ferguson','Max','Maximal','Maxus','Mazda','Mecbo','Meiwa','Menci','Mercedes',
            'Benz','Merlo','Mikasa','Mitsuber','Mitsubishi','Mitsui','Montenegro','Morooka','MST','Mudan','Multix','Mustang','Narko','Nasteveya',
            'NAVECO','NEO','Neoplan','New','Holland','Nichiyu','Niewadow','Niigata','Nippon','Sharyo','Nissan','Nissha','North','Benz','Novas',
            'Opel','Movano','Ormig','Orteco','Pacton','Palazzani','Palfinger','Panav','Peterbilt','Peugeot','Piccini','Pilgrim','International',
            'PONSSE','Porsche','Pramac','Prestige','Putzmeister','Reich','Renault','Rocla','Sakai','Samro','Samsung','Sany','Saton','SB','Trailer',
            'Scania','Schmitz','Schwarzmuller','SDLG','Seddon','Atkinson','SEM','Sennebogen','Sermac','Setra','Shaanxi','Shandong','Shanghai',
            'Shanghai','Pengpu','Shanlin','Shantui','Shaolin','Shehwa','ShenLong','Shibaura','Shifeng','Shindaiwa','Shinko','SibGrand','Sinomach',
            'Sinoway','Sirion','Sisu','Skyline','Soosan','SOR','Southwest_Vehicles','Sprite','SsangYong','ST','Stalowa','Wola','Star','Starcraft',
            'Sterckeman','Steyr','Still','Subaru','Sumitomo','Sungari','1010E','Sunward','Suzuki','Svetruck','Swift_Challenger','Symtec','SZM',
            'Tabbert','Comtessa','Tacomi','Tadano','Takeuchi','Tarsus','TATA_697_NA','Tatra','Tatsuno','TCM','TEC','Teka','Terex','Terex','Bendini',
            'Tesab','TFN','Thomas','Tiangong','Tiema','Tiki','Tissan_Cabstar','Tokyi','Tokyu','Tongyada','Tota','Toyo','Toyota','Trail_King',
            'Trailmobil','Trailor','Trigano_Chantilly','Trouillet','TSR','UD','Trucks','UNC','Unic','Unilift','Unimog','Utilev','Utility','Valtra',
            'Vanhool','Venieri','Vermeer_D24X40A','Viking','Volkswagen','Volvo','VP','Wabash','Wacker','Warynski','Wecan','Weili','Weippert',
            'Weituo','Wielton','Wiggins','Wilk','Deluxe','XB','XCMG','XGMA','Xiamen_Golden_Dragon','Xilin','Xingtai','Xplore','Xuda','Yale',
            'Yamaha','Yanmar','Yigong','YTO','Yuejin','Yusoki','Yutong','Zemag','Zhong','Tong','Zoomlion','90','6476','3575','55','10','81021',
            '_8129','40912','01','150']
        }
    ]
});



var pickerDevice26 = myApp.picker({
    input: '#picker-sdependentzapch',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['Abbey','ABI_Jubilee','Ackermann','ADR_Trailers','Adria','Aichi','Airman','Alloy','Ammann','ANT','Asia','Atlant','Atlas',
            'Atlet','Avant','Avia','Avondale','Bailey','Balkancar','Baw','Beifang_Benchi','Bell','Bergland','Blumhardt','Bobcat','Bomag','Bova',
            'Branson','Bravis','Brenner','Broshuis','Buccaneer','Buerstner','BULL','Bulldog_Trailers','Burg','Caiman','CAMC','Camper','Camro',
            'Caravelair','Carmix','Carson','Case','Caterpillar','Changchun','Changlin','Chateau','Chehvrolet','Chenggong','Chereau','Chery',
            'China_First_Automobile_Group','CHOICE','CIMC','Citroen','Clark','CNH','Coleman','Combilift','Compass','Craftsman','Daehan','NF150',
            'Daenong','Daewoo','DAF','Daihatsu','Dalian','Dasan','Deadong','Demag','Terex','Denyo','Dethleffs','Dieci','Digger','Dimex','Dongfeng',
            'Donghae','Dongyang','Doosan','Doosan','Daewoo','Dorsey_Trailers','Dressta','DVRV','Dynapac','Eduard','Elddis','Elephant',
            'Enxin_Enterprise','HEX9400GYY','EP','Es','Ge','Everdigm','Everlast','30','Fassi','Faun','FAW','Fendt_Xaver','Fiat','Fiat',
            'Hitachi','Fiori','First_Loader','Fleetwood','Fliegl','GmBH','Ford','Forway','Foton','Freightliner','Fruehauf','Fuchs','Fudzi',
            'Fuji','Heavy','Fukai','ZL','926','Furukawa','Gehl','General_Trailers','Genie','Gensco','Goldhofer','Gray','Adams','Great','Dane',
            'Greatwall','Groenewegen','Gros','Grove','Grunwald','GT7','Hagglunds','BV','206','Haihong','Halla','Hamm','Hangcha','Hania','Hanix',
            'Hankook','Hanshin','Hansin','Hanta','Haomei','Hartung','Hayazaki','HBXG','Heli','Hengte','Hiab','Hidromek','Higer','Hino','Hinomoto',
            'Hitachi','Hobby','Prestige','Holmer','Honda','Horyong','Howo','Huanda','Humbaur','Hydrema','Hyster','Hyundai','HZM','IFA','IHI',
            'Ikarus','International','Iseki','Isuzu','Iveco','Jac','Jacto','JBC','JCB','Jian','Cheng','Jinbo','Jinwoo','JMC','John','Deere',
            'Jonyang','Jotec','Jun','Jin','Jungheinrich','Kafi','Kaiser','Kalmar','Kanglim','Karosa','Kato','Kawasaki','KCP','Kelberg','Kenworth',
            'Kia','King','Long','KIP','Knaus','Country','Kobelco','KOBIT','Kogel','Komatsu','Korea','Trailer','Kramer','Krone','Kubota','Kukji',
            'Kyungwon','Lamberet','Lay','Mor','LeciTrailer','LG','Liebherr','Linde','Lishide','LiuGong','LMC','Locatelli','Locust','Longgong',
            'Lonking','Lord','Muensterland','Luna','Luyang','Mack','Maeda','Mag','Magni','MAN','Manac','Auto','Manitou','Manitowoc','Marauder',
            'Marcel','Boschung','SA','Marshall','Masalta','Massey','Ferguson','Max','Maximal','Maxus','Mazda','Mecbo','Meiwa','Menci','Mercedes',
            'Benz','Merlo','Mikasa','Mitsuber','Mitsubishi','Mitsui','Montenegro','Morooka','MST','Mudan','Multix','Mustang','Narko','Nasteveya',
            'NAVECO','NEO','Neoplan','New','Holland','Nichiyu','Niewadow','Niigata','Nippon','Sharyo','Nissan','Nissha','North','Benz','Novas',
            'Opel','Movano','Ormig','Orteco','Pacton','Palazzani','Palfinger','Panav','Peterbilt','Peugeot','Piccini','Pilgrim','International',
            'PONSSE','Porsche','Pramac','Prestige','Putzmeister','Reich','Renault','Rocla','Sakai','Samro','Samsung','Sany','Saton','SB','Trailer',
            'Scania','Schmitz','Schwarzmuller','SDLG','Seddon','Atkinson','SEM','Sennebogen','Sermac','Setra','Shaanxi','Shandong','Shanghai',
            'Shanghai','Pengpu','Shanlin','Shantui','Shaolin','Shehwa','ShenLong','Shibaura','Shifeng','Shindaiwa','Shinko','SibGrand','Sinomach',
            'Sinoway','Sirion','Sisu','Skyline','Soosan','SOR','Southwest_Vehicles','Sprite','SsangYong','ST','Stalowa','Wola','Star','Starcraft',
            'Sterckeman','Steyr','Still','Subaru','Sumitomo','Sungari','1010E','Sunward','Suzuki','Svetruck','Swift_Challenger','Symtec','SZM',
            'Tabbert','Comtessa','Tacomi','Tadano','Takeuchi','Tarsus','TATA_697_NA','Tatra','Tatsuno','TCM','TEC','Teka','Terex','Terex','Bendini',
            'Tesab','TFN','Thomas','Tiangong','Tiema','Tiki','Tissan_Cabstar','Tokyi','Tokyu','Tongyada','Tota','Toyo','Toyota','Trail_King',
            'Trailmobil','Trailor','Trigano_Chantilly','Trouillet','TSR','UD','Trucks','UNC','Unic','Unilift','Unimog','Utilev','Utility','Valtra',
            'Vanhool','Venieri','Vermeer_D24X40A','Viking','Volkswagen','Volvo','VP','Wabash','Wacker','Warynski','Wecan','Weili','Weippert',
            'Weituo','Wielton','Wiggins','Wilk','Deluxe','XB','XCMG','XGMA','Xiamen_Golden_Dragon','Xilin','Xingtai','Xplore','Xuda','Yale',
            'Yamaha','Yanmar','Yigong','YTO','Yuejin','Yusoki','Yutong','Zemag','Zhong','Tong','Zoomlion','90','6476','3575','55','10','81021',
            '_8129','40912','01','150']
        }
    ]
});



var pickerDevice12 = myApp.picker({
    input: '#typedependent',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['Автобусы','Автовышки','Автодома','Автокраны','Манипуляторы','Автоцистерны','Бетононасосы','Бетоносмесители(Миксеры)',
            'Бульдозеры','Грузовики','Катки','Погрузчики вилочные','Погрузчики фронтальные','Прицепы и полуприцепы','Тракторы и сельхозтехника',
            'Экскаваторы','другое']
        }
    ]
});


var regionVendors = {

    Акмолинская_область : ['Астана','Косшы','Кокшетау','Зеренда','Щучинск','Алексеевка','Степногорск','Ерейментау','Талапкер','Шортанды','Атбасар','Акколь','Бурабай','Державинск','Макинск','Айдабул'],
    Алматинская_область : ['Алматы','Талдыкорган','Каскелен','Талгар','Текели','Есик','Ушарал','Жаркент','Достык','Карабулак','Теректы','Ушконыр','Чимбулак','Абай','Бурундай','Жана Арна','Сарыозек','Сарканд'],
    Северо_Казахстанская_область : ['Петропавловск','Новоишимка','Бескөл','Тайынша','Тайынша-1','Кішкенекөл','Мамлютка','Пресновка','Саумалколь','Сергеевка'],
    Карагандинская_область : ['Караганда','Жезказган','Шахтинск','Темиртау','Каражал','Каркаралинск','Абай','Агадырь','Актас','Балхаш','Ботакара','Бухар Жырау','Доскей','Дубовка','Жезды','Карабас','Осакаровка','Приозерск','Сарань','Сатпаев','Топар','Шашубай'],
    Восточно_Казахстанская_область : ['Семипалатинск','Семей','Усть Каменогорск','Атыбай','Аягоз','Асу Булак','Глубоков','Зайсан','Зыряновск','Кабалтау','Катон Карагай','Курчатов','Маканчи','Новая согра','Ново Хайрузовка','Первомайский','Риддер','Серебрянск','Солнечное','Теремшамка','Тугул','Усть Таловка','Шар','Шемонаиха'],
    Западно_Казахстанская_область : ['Актау','Уральск','Аксай','Дарьинск','Жангала','Зачаганск','Казталовка','Каменка','Переметное','Сайхин','Тайпак','Трекино','Федоровка','Чингирлау'],
    Костанайская_область : ['Костанай','Аркалык','Лисаковск','Рудный','Алтынсарино','Аманкарагай','Аулиеколь','Буревестник','Денисовка','Жалгыскан','Житикара','Заречный','Затобольск','Камысты','Карабалык','Карасу','Кушмурун','Новопавловка','Приозёрный','Раздольный','Садовое','Сарыколь','Силантьевка','Тарановское','Узунколь','Федоровка'],
    Павлодарская_область : ['Павлодар','Экибастуз','Аксу','Акжар','Актогай','Ефремовка','Калкаман','Коктобе','Майкаин','Шидерты'],
    Актюбинская_область : ['Актобе','Хромтау','Шалкар','Алга','Батамшинский','Кандыагаш','Карауылкелди','Каргалинское','Мартук','Шубаркудук','Эмба'],
    Атырауская_область : ['Атырау','Ганюшкино','Дамба','Жаскайрат','Индер','Кульсары','Махамбет','Тенгиз'],
    Жамбылская_область : ['Тараз','Шу','Кордай','Айша Биби','Толе би','Ерназар','Жанатас','Каратау','Кулан','Мерке','Мирный','село.Б.Момышулы','Степное','Татты','Шынты'],
    Кзыл_Ординская_область : ['Кызылорда','Байконур','Айтеке Би','Актан Батыр','Аральск','Жанакорган','Жосалы','Казалинск','Макпалколь','Тасбогет','Теренозек','Торебай Би','Шиели'],
    Мангистауская_область : ['Актау','Актобе','Баскудук','Бейнеу','Жанаозен','Умирзак','Форт Шевченко','Шетпе'],
    ЮКО_область : ['Шымкент','Арыс','Кентау','Байдибекский район -Шаян','Казыгуртский район - Казыгурт','Мактааральский район - Жетысай','Ордабасинский район - Темирлановка','Отырарский район - Шаульдер','Сайрамский район - Аксукент','Сарыагашский район - Сарыагаш','Сузакский район - Шолаккорган','Толебийский район - Ленгер','Тюлькубасский район - Турар Рыскулов','Шардаринский район - Шардара'],

};



var pickerDependent15 = myApp.picker({
    input: '#regionpicker',
    toolbarCloseText:'закрыть',
    rotateEffect: true,
    formatValue: function (picker, values) {
        return values[0] + ":" + values[1];
    },
    cols: [
        {
            textAlign: 'left',
            values: ['Акмолинская_область','Алматинская_область','Северо_Казахстанская_область','Карагандинская_область','Восточно_Казахстанская_область','Западно_Казахстанская_область','Костанайская_область',
            'Павлодарская_область','Актюбинская_область','Атырауская_область','Жамбылская_область','Кзыл_Ординская_область','Мангистауская_область','ЮКО_область'],
            onChange: function (picker, country) {
                if(picker.cols[1].replaceValues){
                    picker.cols[1].replaceValues(regionVendors[country]);
                }
            }
        },
        {
            values: regionVendors.Акмолинская_область,
            width: 160,
        },
    ]
});








var pickerDevice20 = myApp.picker({
    input: '#yourcontact',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['частное лицо', 'компания', 'бизнес', 'магазин', 'сайт', 'агенство', 'другое']
        }
    ]
});


var pickerDevice21 = myApp.picker({
    input: '#yourcomment',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['всем','зарегистрированным','никому']
        }
    ]
});


var pickerDevice22 = myApp.picker({
    input: '#sroksdachi',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['на длительный срок','посуточно','почасовая']
        }
    ]
});



var pickerDevice = myApp.picker({
    input: '#picker-shina',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['Белшина','Алтайшина','Арктиктранс','Волтайр','Воронежшина','Днепрошина','Кама / Нижнекамскшина','КШЗ','Мастер-Спорт','МШЗ','Омскшина','Уралшина','ЯМЗ',
            'Cordiant','Matador','Accelera','Achilles','Aderenza','Advance','Aeolus','Agate','Alliance','Altenzo','AmberWay','America','AMP_M','T_Terrain_Master','Amtel','Anjie',
            'F811','Annaite','386','Antares','Antyre','Aotel','Aplus','Apollo','Arctic_Claw','Winter_Xsi','Armour','Armpower','Atlas','Atturo','Aufine','Auplus','Aurora_Tire','Austone',
            'Austyre','Autogrip','Autoguard','Avatyre_Freeze','Avon','Barum','BFGoodrich','Big_O_Tires_Big_Foot_A','T_All_Terrain','Blacklion','Blackstone','Blue','Streak','Bontyre','Boto',
            'Brasa','Bridgestone','Capitol','Carbon_Series','CEAT','Chengshan','Clear','Comforser','Constancy','Continental','Contyre','Cooper','Cordiant','Cordovan','Crosswind','Daewoo',
            'Dayton','Dean_Tires','Debica','Deestone_D','102','Delfin','Delinte_Thunder','Dextero','Dick_Cepek','Diplomat','Dmack','Doral','Double_Coin_RLB450','Doublestar','Dunlop','Duro',
            'Durun','Effiplus','Eldorado','ESA','Tecar','Eurotec','Euzkadi','Evenking','Evergreen','EXTREME_Performance_tyres','Falken','Farroad','Fate','Federal','Fedima','Fenglun','FL268',
            'Fenix','Fierce','Finixx','Firestone','Firststop','Flamingo','Force','Formula','Fortio_WN','01','Fortuna','Fulda','Fullrun','FullWay','Fuzion','General_Tire','Geostar','Geotrac',
            'Gislaved','Giti','Goform_W705','Gold_Partner','Goodride','Goodtyre_YB258','Goodyear','GrandTour','Green_Dragon','GreenDiamond_C790','Gremax','Gripmax','GT_Radial','Haida',
            'HanKang','Hankook','Headway','Hercules','Hero','Herovic','Herse','Hifly','Hilo','Hoosier','Horizon','Imperial','Indoradial','Infinity','Innova','Insa','Turbo','Interco',
            'Interstate','Ion_Alloy','Ironman','Jetzon','Tire','Jinyu','Joyroad','Kapsen','Kelly','Kenda','Kenex','Kinforest','King_Meiler','Kingrun','Kingstar','Kleber','Kormoran','Koryo',
            'Kumho','Lakesea','Lander_Sea','Landsail','Lassa','Lexani','LingLong','Litio','Long','March','Mabor','Maloya','Marangoni','Marshal','Mastercraft','Matador','Maxgrade','Maxtrek',
            'Maxxis','Mayrun','Medeo','Mentor','Merit','Meteor','Michelin','Mickey','Thompson','Milestone','Millennium','Minerva','Mitas','MotoMaster','Motrio','Multi','Mile','Nankang',
            'Neuton','Nexen','Nitto','Nokian','NorTec','Northtrek','Novex','Green','Otani_King_Cobra_Extreme','Ovation_VI','702','Pace','Parnelli_Jones_Dirt_Grip','Passage','Petlas',
            'Pinso_PS','91','Pirelli','Pit_Bull','Platin','Pneumant','PointS','Power_Tire','Premiorri','Presa','President','Prestivo','Primewell','Pro_Comp','PROFIL','Radar','Rapid','Regal',
            'Remington_Tire','Rhino_King','Riken','Roadguider','Roadshine','Roadstone','Rockstone','Rosava','Rotalla','Rotex','Runway','Saffiro','Sagitar','Sailun','Satoya','Sava','Semperit',
            'Silverstone','Sime_Tyres','Simex','Solideal','Sonar','Sonny','Sportiva','Sportrak_BYD68','Sprut','Starfire','Stark_Proto','Starperformer','Strata_ZENO_UHP','Stunner','Sumitomo',
            'Sumo','Sunew','Sunfull','Sunitrac','Sunny','Suntek','Superhawk_HK867','Superia','Superstone_Crocodile_Xtreme','Syron','Targum','Techking','Telstar_Tire','Thunderer','Tianfu',
            'Tigar','Toryo','Toyo','Tracmax','Transtone','Trayal','Trazano','Trelleborg','Tri_Ace','Triangle_Group','Tristar','Tunga','TyRex','shield_WS118','Uniglory','Uniroyal','Universal',
            'Viatti','Viking','Vredestein','VSP','Wanli','Warrior_Fluent','R21','Waynner_WIN12','Westlake_Tyres','Wind','Power','Winter_Tact','YellowSea','Yokohama','Zeetex','Zeta','Zetro']
        }
    ]
});



var pickerDevice = myApp.picker({
    input: '#picker-protektor',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['летние','зимние','всесезонные','Грязь механика','Грязь автомат']
        }
    ]
});

var pickerDevice = myApp.picker({
    input: '#year-shina',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['2017','2016','2015','2014','2013','2012','2010','2009','2008','2007','2006','2005','2004','2003','2002','2001','2000']
        }
    ]
});

var pickerDevice = myApp.picker({
    input: '#diam-shina',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['22','21','20','19','18','17','16','15','14','13','70']
        }
    ]
});

var pickerDevice = myApp.picker({
    input: '#picker-iznos',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['износа нет','10','20','30','40','50','60','70','80','90','100']
        }
    ]
});


var pickerDevice = myApp.picker({
    input: '#sostoyaniezapch',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['новое', 'б/у в отличном состоянии', 'б/у среднее состояние']
        }
    ]
});



var pickerDevice = myApp.picker({
    input: '#type-shina',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['для легковых', 'для спецтехники', 'для мотоциклов', 'для велосипедов']
        }
    ]
});



var pickerDevice = myApp.picker({
    input: '#marka-disk',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['4_Racing','4Go','5ZIGEN','885','Tech','ABT','AC_Schnitzer','Ace','ADR_Design','Advan','Advanti','AEZ','AGForged','AITL','Akito','Alba','Alcasta','Aleks','Alessio',
            'Alfa','Romeo','Almex','Alpina','Alster','Aluchrome','Alutec','AME','American','Racing','Amistad','AMS','Anhelo','Antera','Anzio','Wheels','Apollo','AQUA','Arcasting','Artec',
            'Arteria_Strada_Splendor','ASA_Wheels','Asanti','Asiss','ASW_Prestige','ATP','ATS','Audi','Avangrade','Avarus','AVENUE','AVS','AWS','AZ','Azect','Azev','BADX','BANTAJ','Banzai',
            'Barracuda','BAZO','BBS_RS','Berg','Beyern','Black_Racing','Black_Rhino','Blade','BLEST_Bahnsport','Blitz_Techno','Speed','Blows','Bluege','BMF','BMW_Racing_Dynamics','Bolzanos',
            'Borbet','Brabus','Bradley','Breyton','Bridgestone','Brock','BSA','Buddy_Club_P1','BWR','Cadillac','CAM','Caractere','Carlsson','Carre','Carving_head','40','Carwel','Catwild',
            'CEC_Wheels','Centerline_Wheels','Chevrolet','Clyde','CMS','Compomotive','Conti','Coventry','Crimson','Cross_Street','CST_Zero','Daewoo','Nexia','Daihatsu','Dawning','Motorsport',
            'Decorsa','Delta_DL','Desmond','Detata','Devino','DEZENT','Diablo','Wheels','DIAL','Diamond','Dick','Cepek','Dizzard','DJ_WHEELS','Dotz','Dropstars','Dunlop','EMR','Enkei','Ensure',
            'Enzo','Erglanz','Etabeta','Eurodisk','Eurosport','Extreme','Shina','Fabulous','Ferrari','Final_Speed','Fondmetal','Ford','Forgiato','Forsage','Fox_FX2','FR_Design','Freemotion','Fujibond',
            'Futek','Corporation','Mach','Square','General_Motors','Gialla','Gianelle','GIANNA','Giovanna','GodFather','GR','Grass','Grenade_GX','01','GSI','Hamann','HART','Hayes_Lemmerz',
            'HD','Wheels','Helo','HI','TECH','Hipnotic','Wheels','Honda','Mugen','Hot_Stuff','HP_Design','HRE_Performance','HTL','Hummer','Hyundai','iFree','IJITSU','Ikon','Wheels','Impul',
            'Incubus','Incurve','Wheels','Infinity','Ion','Isuzu','IWheelz','Jaguar','Jawa','JD','Jeep','JT','Racing','Speed','K7','Kahn','KFZ','KIA','Kisna','KMC','Koko_Kuture','Konig',
            'Kormetal','Kosei','Kronprinz','Kyoho_Steiner','Kyowa','Connection','Larex','Lawu','League','Leasing','Leben','LegeArtis','Legzas','Lehrmeister','Lenso','Lexani','Lexus',
            'LF_Dick','Light_Sport_Wheels','Linea','Liso','Lodio_Drive','Lorenso','LORENZO','Lowenhart','LSZ','Luftbahn','Lumarai','LX','Mode','z_SPEED','Magline','Magnetto_Wheels','Mak',
            'Malyce_Legendary','Mamba_OFF_Road','Manaray','Mandrus','Marcello','MAXX_Wheels','Mayhem','Mazda','Mefro','Mercedes_AMG','MHT','Mi','tech','Mickey_Thompson','Milli','Miglia',
            'MIM','Mitsubishi_Rallyart','MKW','MKW_OFF','ROAD','MLJ','MML','Modellista','Modular_Society','MOMO','Monte_Fiore','Monza_Warwick','Motec','Motegi','MOTO_Metal','MPS','MSW',
            'MTT_Racing','MVF','Next','Nexta','Ningbo','Nissan_Nismo','Nitro','Noble','NORDWAY','Norfolk','NZ_Wheels','Green','Oefunger','Off','Road','Wheels','Opel','Oxigin','OZ',
            'PANTHER','PDW_Wheels','Peugeot','PIAA','Porsche','PRD','Primo','Pro_Comp','ProDrive','Proma','PTW','Steel','Race_Ready','Racing_Hart','Radius','Raiden','Range_Rover',
            'Rapid','Ravrion','RAYS','RC_Design','Red_Wheel','Redbourne','Renault','Replay','Replica','RepliKey','Reverline','Rial','Riverside','Rodeo_Drive','Romagna_Ruote',
            'Ronal','Rondell','Roner','Rota','Rotiform','Royal_Wheels','Rozest','RR','RS_Wheels','Russtec','RW','Sakura_Wheels','Salita','Sanfox','Sant','Schmidt','Sein','SEYEN',
            'SH','SHLK','Skoda','Slik','SLK','Sparco','Speedline','Spirits_Sagest','Sport_Technic','Sportmax_Racing','SportWay','SRD_Tuning','SsangYong','SSR','SSW','Stalker',
            'Starform_Basel','Stark','Steel_Wheels','Steinmetz','Stich','Precious','Stilauto','Stonewell','Storm_Wheels','Stranger','Strut','Subaru_STI','Suzuki','SW','Sword','Syms_SRW',
            'C1','Tailong','Team_Dynamics','Tech','Line','Technocast_Corsia','Tezzen','TGRACING','TIS','TMW','Tomason','TOMS','Toora','Top_True','Topy','Touchdown','Toyota','TRD',
            'Trebl','TRW','TSW','Tuff_A','Tunzzo','ULTRA','Ultraleggera','URAS','Urban_Racing','VAGGIO','Valbrem','Valente','VCT','Venerdi','Verde','Vertini','Vianor','Victor_Equipment',
            'Violento','Volkswagen','Voltec','Volvo','Vorxtec','Vossen','Wald','Watanabe','Weds','Wheelegend','Wheelworld','Wibram','Wiger','Winners','Winning_Street_Wheel','WOLF_Wheels',
            'Work','Worx','Wrest','WSP','trike','XD_Series','Xinfa','XXR','Yamato','Yokatta','Yokohama_Laycea','YST',
            'Yueling_wheels','Zack','Zauber','Zeit','Zent','Zephyr','Zepp','ZEPPELIN_Prestige','Zina','Zinik','Zorat_Wheels','Zormer','Zumbo_Wheels','ZW','ZY','_412']
        }
    ]
});



var pickerDevice = myApp.picker({
    input: '#picker-disk',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['литые', 'кованные', 'штампованные']
        }
    ]
});


var pickerDevice = myApp.picker({
    input: '#year-disk',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['2017','2016','2015','2014','2013','2012','2010','2009','2008','2007','2006','2005','2004','2003','2002','2001','2000']
        }
    ]
});


var pickerDevice = myApp.picker({
    input: '#diam-diska',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['22','21','20','19','18','17','16','15','14','13','70']
        }
    ]
});



var pickerDevice = myApp.picker({
    input: '#picker-iznosd',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['износа нет','10','20','30','40','50','60','70','80','90','100']
        }
    ]
});


var pickerDevice = myApp.picker({
    input: '#type-diskd',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['для легковых', 'для спецтехники', 'для мотоциклов', 'для велосипедов']
        }
    ]
});


//transferphoto("do_uploadapp/");


globalfixobupload = 1;

});   //kones action page

myApp.onPageBeforeAnimation('addcategory', function (page) {



        console.log("addcategory");
        globalfixobupload = 0;

  });

//rab3
//module sendob
$$('.sendob').on('click', function(){


      $(".gifloader").show();


      var formData = myApp.formToData('#form_to_submit');


      //manipulyasiya s dannimi

      formData['category1'] = localStorage.getItem("level1");
      formData['category2'] = localStorage.getItem("level2");
      formData['category3'] = localStorage.getItem("level3");

      var country = formData['city'];

      if(country != null){

      var arrayscountry = country.split(':');
      formData['city'] = arrayscountry[1];

      var splittingstringarray = arrayscountry[0].split("_");

      formData['strana'] = splittingstringarray[0] + " " + splittingstringarray[1];

      }

      formData['valyuta'] = "тг";


      var marka = formData['marka'];

      if(marka != null){

          var arraysmarka = marka.split(':');

          formData['marka'] = arraysmarka[0];
          formData['model'] = arraysmarka[1];

        }



      var markazapch = formData['markazapch'];

      if(markazapch != null){

          var arraysmarkazapch = markazapch.split(':');

          formData['markazapch'] = arraysmarkazapch[0];
          formData['modelzapch'] = arraysmarkazapch[1];

        }

      var typezapchasti = localStorage.getItem("typezapchasti");

      if((typezapchasti) || (typezapchasti != 0)){
        formData['typezapchasti'] = typezapchasti;
      }else{
        formData['typezapchasti'] = "нет";
      }

      var markazapch = formData['markazapch'];

      if(markazapch != null){

          var arraysmarkazapch = markazapch.split(':');

          formData['markazapch'] = arraysmarkazapch[1];

          formData['modelzapch'] = arraysmarkazapch[0];

      }

      var useremail = localStorage.getItem("useremail");

      if(useremail){
          formData['email'] = useremail;
      }
//manipulyasiya s dannimi




    //function zapolneniya

    for (keys in formData) {

       // console.log(formData[keys]);
        if((formData[keys] == null) || (formData[keys] == undefined) || (formData[keys] == "") || (formData[keys] == " undefined")){

            if(!formData[keys]){
              formData[keys] = 0;
            }else{
              formData[keys] = 0;
            }
              formData[keys] = 0;




        }

        //console.log(formData[keys]);


    }
    //function zapolneniya








var validate = ["script","alert","php","xss","*","-- -","--","<",">","concat","=","<script>","</script>","</"];

    //validate function

    for (key in formData) {

      for(var i = 0;i < validate.length;i++){

        var tt = formData[key];
        ttxt = tt.toString();
        var xt = ttxt.indexOf(validate[i]);

        //console.log(xt);

        if(xt >= 0){

            formData[key] = ".";
            //console.log("заменена");

        }


        var t = formData[key].length;

        for(var j = 0;j < t;j++){

          var y = formData[key][j];

          if(y == validate[i]){
            formData[key][j] = ".";
            //console.log("заменена");
          }

        }

      }

      //console.log(key);

    }
    //validate function

   //console.log(formData);

//return false;

    //dalee sdelat' zapolnenie

//rab4


      var baseurl = localStorage.getItem("baseurl");

      $.ajax({

              "type":"GET",
              "url": baseurl + "setuserob/",    /*random restourants menu zakaZ*/

              dataType: "jsonp",
              crossDomain: true,
              "data": formData,

              "success":kx001,
              "error":errorfunc001

              });


        function kx001(result){

            //console.log(result);

                if(result[0] == "ok"){

                    //clean formdata

                    // for (newkey in formData) {

                    //     $('[name = '+ newkey +']').val("");

                    // }

                    //clean formdata

                    myApp.alert('Спасибо ваше объявление подано!','Сервис');
                    //mainView.router.refreshPage("#add");
                    mainView.router.loadPage("#index");

                    $(".gifloader").hide();


                    setTimeout(function(){

                        window.location.reload();


                    },2000);




                }


        }

        function errorfunc001(){

               $(".gifloader").hide();
        }


        globalfixobupload = 0;



  //alert(JSON.stringify(formData));
  //console.log(formData);
});




// module pereclyucheniya legk gruz

$(".legk").click(function(){

    $(".zapchhide").show();
    $(".zapchspeshide").hide();

    $('[name = "markaspeszapch"]').val("");

    localStorage.setItem("typezapchasti","легковая");

});

$(".gruz").click(function(){

    $(".zapchhide").hide();
    $(".zapchspeshide").show();

    $('[name = "markazapch"]').val("");

    localStorage.setItem("typezapchasti","грузовая");

});
// module pereclyucheniya legk gruz
//module prodolzheniya





function logoutfunc(){

    localStorage.setItem("useridentificator","0");
    localStorage.setItem("role","2");

    $(".hide_reg").show();
    $(".hide_login").show();
    $(".hide_cabinet").hide();
    $(".show_vihod").hide();

}

// function logoutfunc(){

//     $(".hide_reg").show();
//     $(".hide_login").show();
//     $(".hide_cabinet").hide();
//     $(".show_vihod").hide();

// }




//module vihoda



$(".show_vihod").click(function(){

    logoutfunc();

});
//module vihoda


























angularApp.controller('SpicyController', ['$scope', function($scope) {

    $scope.spice = 'js/addcategory/subcategory/nedvizh.html';


    $scope.myclick = function(categoryname){

            localStorage.setItem("category1",categoryname);

            mainView.router.loadPage("#n1");


      };

    $scope.chiliSpicy = function() {
        $scope.spice = 'js/addcategory/subcategory/avto.html';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'js/addcategory/subcategory/nedvizh.html';
    };
}]);




//module upload photo



//function transferphoto(urlpath){        /*function transferphoto*/  //transferphoto("actionfunction php",)

var myurl = localStorage.getItem("baseurl");


var numberfiles = 0;        //podschet kolichestva failov
var arrOfname = new Array();    //
var fixedlimituploadphoto = 0;
var fixedphoto = 0;
var fixedvideo = 0;


var control = document.getElementById("myfile2");

if(control){

      control.addEventListener("change", function(event) {

      var files = control.files;

      //console.log(control.files.length);


      for (var i = 0; i < control.files.length; i++) {

        //console.log(i);
        //console.log(control.files.length);


            var formData = new FormData();
            formData.append("myfile", files[i]);
            var d = files[i];
            var filename = files[i].name;
            var filesize = files[i].size;
            var filetype = files[i].type;
            var photo_path = filename;

           // for(var ii = 0; ii < arrOfname.length; ii++){

           //      if(arrOfname[ii] == filename){

           //        var mm5m = "фотография с таким именем уже существует!"
           //        myApp.alert(mm5m,'Сервис');

           //        return false;

           //      }

           // }

            //dopolnitelnie dannie
            var useridentificator = localStorage.getItem("useremail");

            arrOfname.push(filename);
            formData.append("origname", filename);
            formData.append("useridentificator", useridentificator);

            $('.progressbar').css("display","block");
            $('.loader-hide').css("display","block");

            //myApp.showPreloader('передача данных');
            //dopolnitelnie dannie

            //validasiya
            // if(numberfiles != 8){

            //           numberfiles +=1;
            //           fixedlimituploadphoto++;
            //           formData.append("countupload", numberfiles);

            // }else{

            //     var mm = "Больше 8 фотографий не допустимо для загрузки!"
            //     myApp.alert(mm,'Сервис');
            //     return false;

            // }

            // if(fixedlimituploadphoto > 10){

            //     var mm = "Больше 10 фотографий не допустимо для загрузки!"
            //     myApp.alert(mm,'Сервис');
            //     return false;

            // }



            function myvalidjpeg(string){


                  var arr = new Array("image/pjpeg","image/jpeg");
                  for(var i = 0; i < arr.length;i++){
                    if(string == arr[i]){
                      return true;
                    }
                  }


            };



            function myvalidvideo(string){


                  var arr2 = new Array("video/mpeg","video/mp4","video/msvideo","video/avi","application/x-troff-msvideo","video/x-msvideo");
                  for(var j = 0; j < arr2.length;j++){
                    if(string == arr2[j]){
                      return true;
                    }
                  }


            };

            if(myvalidjpeg(filetype) == true){


                    if(filesize > 5000000){

                        var mm7m = "Размер фото не должен превышать 5mb"
                        myApp.alert(mm7m,'Сервис');
                        numberfiles -= 1;
                        fixedlimituploadphoto--;
                        return false;

                    }

                    fixedphoto = 1;
                    $('.progressbar').css("display","block");
                    $('.loader-hide').css("display","block");

                    $.ajax({

                        "type":"POST",
                        processData: false,
                        contentType: false,
                        crossDomain: true,
                        "url":myurl + "do_uploadapp/",
                        "data":formData ,
                        xhr: function(){

                            var xhr = new window.XMLHttpRequest();

                            //console.log(xhr);
                            //console.log(xhr);


                            // прогресс загрузки на сервер
                            xhr.upload.addEventListener("progress", function(evt){
                            if (evt.lengthComputable) {
                            var percentComplete = evt.loaded / evt.total * 100;
                            // делать что-то...

                            var progressbar = $$('.progressbar');
                            myApp.setProgressbar(progressbar, percentComplete);

                              if(percentComplete == 100){

                                  $('.loader-hide').css("display","none");
                                  $('.progressbar').css("display","none");

                                  myApp.setProgressbar(progressbar, 10);

                              }


                            }
                            }, false);

                            //прогресс скачивания с сервера
                            // xhr.addEventListener("progress", function(evt){
                            //   if (evt.lengthComputable) {
                            //     var percentComplete = evt.loaded / evt.total * 100;
                            //     // делать что-то...
                            //     console.log(percentComplete);

                            //     $('.progressbar').hide(2000);
                            //       $("#myfile2").val("");


                            //   }
                            // }, false);

                            //



                            return xhr;

                        },
                        "success":photosuccess,
                        "error":errorfunc
                    });

                    function photosuccess(res){           /*otvet foto*/



                    };

                    function errorfunc(){

                      $('.progressbar').css("display","none");
                      $('.loader-hide').css("display","none");

                      myApp.alert('Ошибка сети, повторите загрузку фото','Сервис');
                    };






            }else if(myvalidvideo(filetype) == true){


                  if(filesize > 500000000){

                        var mm7m = "Размер видео не должен превышать 500mb"
                        myApp.alert(mm7m,'Сервис');
                        numberfiles -= 1;
                        exit;

                  }

                  fixedvideo = 1;
                  $('.progressbar').css("display","block");
                  $('.loader-hide').css("display","block");

                  $.ajax({


                      "type":"POST",
                      processData: false,
                      contentType: false,
                      "url":myurl + "do_uploadvideoapp/",
                      "success":videofunc,
                      "data":formData ,
                       xhr: function(){

                            var xhr = new window.XMLHttpRequest();

                            //console.log(xhr);
                            //$('.loader-hide').css("display","none");


                            // прогресс загрузки на сервер
                            xhr.upload.addEventListener("progress", function(evt){
                            if (evt.lengthComputable) {
                            var percentComplete = evt.loaded / evt.total * 100;
                            // делать что-то...
                            //console.log(percentComplete);
                            var progressbar = $$('.progressbar');
                            myApp.setProgressbar(progressbar, percentComplete);

                              if(percentComplete == 100){

                                  $('.loader-hide').css("display","none");
                                  $('.progressbar').css("display","none");

                                  myApp.setProgressbar(progressbar, 10);
                              }
                            }
                            }, false);
                            // прогресс скачивания с сервера
                            // xhr.addEventListener("progress", function(evt){
                            //   if (evt.lengthComputable) {
                            //     var percentComplete = evt.loaded / evt.total * 100;
                            //     // делать что-то...
                            //     console.log(percentComplete);
                            //   }
                            // }, false);
                            return xhr;

                        },

                      "error":errorfunc

                  });

                  function videofunc(res){   /*otvet video*/

                  };

                  function errorfunc(){

                    myApp.alert('Ошибка сети, повторите загрузку видео','Сервис');
                    $('.progressbar').css("display","none");
                    $('.loader-hide').css("display","none");


                  };
                  /*_________________________*/


            }else{

                $('.progressbar').css("display","none");
                $('.loader-hide').css("display","none");
                myApp.hidePreloader();
                myApp.alert('фото не удовлетворяет требованиям','Сервис');
                return false;

            }


      }       /*kones for*/













      }, false);

}

/*________________________revo_func*/
/*peredelannii variant*/

//}       /*function transferphoto*/





//module upload photo
//module upload photo


//module check photo




                    //proverka zagruzhennih foto

                    var array_generatetwo = [];

                              var cnn = 0;
                              var cnn2 = 20;

                              for(var i = 0;i < cnn2; i++){

                                array_generatetwo[i] = cnn;

                              }

setInterval(function(){


//rab1

if(globalfixobupload == 1){

var useremail = localStorage.getItem("useremail");

var sendrequest = {

"useremail":useremail,

}

//console.log(useridentificator4);

var urlhack = localStorage.getItem("baseurl");

              $.ajax({

                    "type":"GET",
                    "url": urlhack + "hack_photoapp/",    /*random restourants menu zakaZ*/
                    dataType: "jsonp",
                    crossDomain: true,
                    "data": sendrequest,
                    "success":kxzaprosphoto,
                    "error":errorfunczapros

              });


function kxzaprosphoto(result){



                        //console.log(result);

                        // if(fixedphoto == 1){

                        if(result[0] != "false"){


                            $(".appendphoto").empty();

                            for(var g = 0; g < result.length;g++){
                            var imgurl = localStorage.getItem("baseurlimg2");
                            var appendstring = '<li> <a href="#" class="item-link item-content"> <div class="item-media">'+
                            '<img photoids="' + g + '" src="' + imgurl + result[g] + '" width="80"></div> <div class="item-inner"> '+
                            '<div class="item-title-row"> <div class="item-title"><button rmid="'+ result[g] +'" rmcount="'+ g +'" class="col button button-small button-fill rotatephtwo">перевернуть</button></div> <div class="item-after"><button phid="'+ result[g] +'" class="button color-red delete_photo">удалить</button></div> </div> '+
                            '<div class="item-subtitle"></div> <div class="item-text"></div> </div> </a> </li>';
                            $(".appendphoto").append(appendstring);


                            var imagerottwo = $('[photoids = '+ g +']');

                            var o = g;
                            var t = Number(o);
                            var p = 0;
                            p = array_generatetwo[t];

                            imagerottwo.css("transition","all 3s");
                            var rotate = "rotate(" + array_generatetwo[t] + "deg)";
                            imagerottwo.css("transform",rotate);

                            if(array_generatetwo[t] == 360){
                                  array_generatetwo[t] = 0;
                                }

                        }




                        //delete photo




                            $(".rotatephtwo").click(function(){

                              var rmid = $(this).attr("rmid");
                              var rmcount = $(this).attr("rmcount");

                              var imagerot = $(this).parent().parent().parent().prev().children("img");
                              //var imagerot = $(this).parent().parent().parent().prev().children("img").attr("src");

                             // console.log(imagerot);


                              //return false;

                             var sendrm = {

                                              "photoid":rmid,
                                              "rmcount":rmcount

                                          }

                                          //console.log(useridentificator4);

                                             var rotateurl = localStorage.getItem("baseurl");

                                             //console.log($(this).parent().parent().parent().parent().attr("class"));

                                            $.ajax({
                                                  "type":"GET",
                                                  "url": rotateurl + "rotatetwophotoapp/",

                                                  dataType: "jsonp",
                                                  crossDomain: true,
                                                  "data": sendrm,

                                                  "success":kx288111,
                                                  "error":errorfunc288111

                                                  });


                                            function kx288111(result){

                                                    //console.log(result);

                                                    var o = result[0];
                                                    var t = Number(o);
                                                    var p = 0;
                                                    p = array_generatetwo[t];
                                                    p += 90;
                                                    array_generatetwo[t] = p;
                                                    imagerot.css("transition","all 3s");
                                                    var rotate = "rotate(" + array_generatetwo[t] + "deg)";
                                                    imagerot.css("transform",rotate);

                                                    if(array_generatetwo[t] == 360){
                                                      array_generatetwo[t] = 0;
                                                    }



                                            }

                                            function errorfunc288111(){

                                                  console.log("error");

                                            }

                        });


                        $(".delete_photo").click(function(){

                                      var photo_id = $(this).attr("phid");

                                      //console.log(photo_id);

                                      var senddelete = {

                                      "photoid":photo_id,

                                      }


                                      var parent = $(this).parent().parent().parent().parent().parent();

                                     // console.log(parent);

                                      //return false;



                                      var url2 = localStorage.getItem("baseurl");

                                      $.ajax({
                                            "type":"GET",
                                            "url": url2 + "delete_photoapp/",    /*random restourants menu zakaZ*/

                                            dataType: "jsonp",
                                            crossDomain: true,
                                            "data": senddelete,

                                            "success":kx2881,
                                            "error":errorfunc2881

                                      });


                                      function kx2881(result){


                                        //console.log(result);

                                        if(result[0] != "false"){
                                            if(result[0] == "ok"){
                                              parent.hide(2000);
                                            }
                                        }

                                      }

                                      function errorfunc2881(){


                                      }

                        });

                        //delete photo


                        }

                        // }

}

function errorfunczapros(){


}


            $.ajax({

                    "type":"GET",
                    "url": urlhack + "hack_videoapp/",    /*random restourants menu zakaZ*/
                    dataType: "jsonp",
                    crossDomain: true,
                    "data": sendrequest,
                    "success":kxzaprosvideo,
                    "error":errorfunczaprosv

            });


function kxzaprosvideo(result){



                      //console.log(result);

                      if(result[0] != "false"){


                      $(".appendvideo").empty();

                      for(var h = 0;h < result.length;h++){

                          var imgurl2 = localStorage.getItem("baseurlimg3");

                          var stringvideo = '<li class="item-content"> <div class="item-inner">'+
                          ' <div class="item-title">' + result[h] + '</div> </div> </li>';

                          $(".appendvideo").append(stringvideo);
                      }


                      // }




                      }


}

            function errorfunczaprosv(){


            }


}


},5000);



//module check photo


//module search category



angular.
  module('angularApp').
  component('searchCategory', {
    templateUrl:'js/addcategory/searchcategorytemplate.html',
    controller: function AngularListController($scope) {
      this.obs = [
        {
          name: 'Недвижимость',
          src: img + 'nedv.jpg',
        }, {
          name: 'Авто и мото',
          src:img + 'cars.jpg',
        }, {
          name: 'Работа',
          src:img + 'job.jpg',
        }, {
          name: 'Электроника',
          src:img + 'electronic.jpg',
        },{
          name: 'Медицина',
          src:img + 'medical.jpg',
        }, {
          name: 'Салоны красоты',
          src:img + 'salon_krasoti.jpg',
        }, {
          name: 'Мода',
          src:img + 'moda.jpg',
        }, {
          name: 'кафе,караоке,ночные клубы',
          src:img + 'otdih.jpg',
        }, {
          name: 'Услуги и обслуживание',
          src:img + 'obsluzh.jpeg',
        }, {
          name: 'Банки Коммерческие организации',
          src:img + 'bank.jpg',
        }, {
          name: 'Компании,бизнес',
          src:img + 'biznes.jpg',
        },{
          name: 'Личные вещи',
          src:img + 'clothes.jpg',
        }, {
          name: 'Спортивные товары',
          src:img + 'sports.jpg',
        }, {
          name: 'Для детей',
          src:img + 'dlyadetei.jpg',
        }, {
          name: 'Животным',
          src:img + 'zhivotnie.jpg',
        }, {
          name: 'Для дома и дачи',
          src:img + 'domsad.jpg',
        }, {
          name: 'Хобби и игрушки',
          src:img + 'hobby.jpeg',
        }, {
          name: 'Изделия выполненные вручную',
          src:img + 'ruchnie_izdel.jpg',
        },
      ];

      $scope.myclick = function(categoryname){

        //rab search levels

        //default
        defaultobs = [
        {
          name: 'Недвижимость',
          src: img + 'nedv.jpg',
        }, {
          name: 'Авто и мото',
          src:img + 'cars.jpg',
        }, {
          name: 'Работа',
          src:img + 'job.jpg',
        }, {
          name: 'Электроника',
          src:img + 'electronic.jpg',
        },{
          name: 'Медицина',
          src:img + 'medical.jpg',
        }, {
          name: 'Салоны красоты',
          src:img + 'salon_krasoti.jpg',
        }, {
          name: 'Мода',
          src:img + 'moda.jpg',
        }, {
          name: 'кафе,караоке,ночные клубы',
          src:img + 'otdih.jpg',
        }, {
          name: 'Услуги и обслуживание',
          src:img + 'obsluzh.jpeg',
        }, {
          name: 'Банки Коммерческие организации',
          src:img + 'bank.jpg',
        }, {
          name: 'Компании,бизнес',
          src:img + 'biznes.jpg',
        },{
          name: 'Личные вещи',
          src:img + 'clothes.jpg',
        }, {
          name: 'Спортивные товары',
          src:img + 'sports.jpg',
        }, {
          name: 'Для детей',
          src:img + 'dlyadetei.jpg',
        }, {
          name: 'Животным',
          src:img + 'zhivotnie.jpg',
        }, {
          name: 'Для дома и дачи',
          src:img + 'domsad.jpg',
        }, {
          name: 'Хобби и игрушки',
          src:img + 'hobby.jpeg',
        }, {
          name: 'Изделия выполненные вручную',
          src:img + 'ruchnie_izdel.jpg',
        },
      ];
        //default

        //arrays



        //arrays



        //1 level nedvizhimost
//rab
        switch (categoryname) {
            case 'Недвижимость':

                        $(".hidesearch").hide(1000);
                        $(".hideformsearch").hide(1000);
                        $(".form_kv").show(1000);
                        localStorage.setItem("searchlevel1",categoryname);

                        autosearch("searchkv");
//level2
              break;
//level3
          }




          //level3
          //1 level nedvizhimost

            //arrays avto i moto

                    newobs3 = [
                          {
                            name: 'купить машину',
                            src: img + 'strelka.png',
                          }, {
                            name: 'спецтехника',
                            src:img + 'strelka.png',
                          }, {
                            name: 'запчасти',
                            src:img + 'strelka.png',
                          },{
                            name: 'услуги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочее',
                            src:img + 'strelka.png',
                          }
                        ];

                        newobs4 = [
                          {
                            name: 'с пробегом',
                            src: img + 'strelka.png',
                          }, {
                            name: 'новая',
                            src:img + 'strelka.png',
                          }, {
                            name: 'с автосалона',
                            src:img + 'strelka.png',
                          },{
                            name: 'из зарубежа',
                            src:img + 'strelka.png',
                          },{
                            name: 'на заказ',
                            src:img + 'strelka.png',
                          },{
                            name: 'мотоциклы',
                            src:img + 'strelka.png',
                          },{
                            name: 'квадроциклы',
                            src:img + 'strelka.png',
                          },{
                            name: 'катера и лодки',
                            src:img + 'strelka.png',
                          },{
                            name: 'другие машины',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs5 = [
                          {
                            name: 'Спецтехника,Автобусы и др.',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аренда',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Продавцы спецтехники',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs6 = [
                          {
                            name: 'для легковых',
                            src: img + 'strelka.png',
                          }, {
                            name: 'для спецтехники',
                            src:img + 'strelka.png',
                          }, {
                            name: 'шины',
                            src:img + 'strelka.png',
                          }, {
                            name: 'диски',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs7 = [
                          {
                            name: 'Автозвук',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Автомойки',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Автострахование',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Автошколы',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Автоэлектрики',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Аэрография',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Вскрытие авто, изготовление ключей',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Грузоперевозки',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Замена масел, жидкостей',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ксенон',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Перетяжка салона, пошив чехлов',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Прокат, аренда',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт бамперов, автопластика',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт двигателя',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт КПП',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт кузова',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт радиаторов, кондиционеров',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ремонт ходовой',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт топливной системы',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Сигнализации',
                            src:img + 'strelka.png',
                          }, {
                            name: 'СТО, автосервисы',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Такси',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Тех. осмотр',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Тонировка',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Тюнинг',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Установка автостёкол',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Химчистка, полировка',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Хранение шин',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Чип-тюнинг',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Шумоизоляция',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Шиномонтаж',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Эвакуатор',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Другие',
                            src:img + 'strelka.png',
                          },
                        ];
        //arrays avto i moto

          //level2 Авто и мото
          switch (categoryname) {
            case 'Авто и мото':

                        $scope.$ctrl.obs = newobs3;

                        localStorage.setItem("searchlevel1",categoryname);
//level2
              break;
            case 'купить машину':
              localStorage.setItem("searchlevel2",categoryname);
              $scope.$ctrl.obs = newobs4;
              break;
            case 'спецтехника':
              localStorage.setItem("searchlevel2",categoryname);
              $scope.$ctrl.obs = newobs5;
              break;
            case 'запчасти':
              $scope.$ctrl.obs = newobs6;
              localStorage.setItem("searchlevel2",categoryname);
              break;
            case 'услуги':
              $scope.$ctrl.obs = newobs7;
              localStorage.setItem("searchlevel2",categoryname);
              break;
            case 'Прочее':
              localStorage.setItem("searchlevel2",categoryname);
              localStorage.setItem("searchlevel3","нет");
                  $scope.$ctrl.obs = defaultobs;
                  $(".hidesearch").hide(1000);
                  $(".hideformsearch").hide(1000);
                  $(".form_uslugitransp").show(1000);

                  autosearch("searchuslugitransp");
              break;
//level2


          }
          //level3 Авто и мото
          for (var i = 0;i < newobs4.length;i++) {

              if(categoryname == newobs4[i].name){
                  localStorage.setItem("searchlevel3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  $(".hidesearch").hide(1000);
                  $(".hideformsearch").hide(1000);
                  $(".form_avto").show(1000);

                  autosearch("searchavto");

              }
          }

          //level3 Авто и мото
          for(var t = 0;t < newobs5.length;t++){
              if(categoryname == newobs5[t].name){
                  localStorage.setItem("searchlevel3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  $(".hidesearch").hide(1000);
                  $(".hideformsearch").hide(1000);
                  $(".form_spes").show(1000);
                  autosearch("searchspest");
              }
          }

          for(var tt = 0;tt < newobs6.length;tt++){
              if(categoryname == newobs6[tt].name){
              if(tt == 0){

                //console.log(categoryname);
                  localStorage.setItem("searchlevel3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  $(".hidesearch").hide(1000);
                  $(".hideformsearch").hide(1000);
                  $(".form_zapchlegk").show(1000);

                  autosearch("searchzapchlegk");
                }else if(tt == 1){

                //console.log(categoryname);
                  localStorage.setItem("searchlevel3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  $(".hidesearch").hide(1000);
                  $(".hideformsearch").hide(1000);
                  $(".form_zapchspest").show(1000);

                  autosearch("searchzapchspest");
                }else if(tt == 2){

                //console.log(categoryname);
                  localStorage.setItem("searchlevel3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  $(".hidesearch").hide(1000);
                  $(".hideformsearch").hide(1000);
                  $(".form_shina").show(1000);

                  autosearch("searchshina");
                }else if(tt == 3){

                //console.log(categoryname);
                  localStorage.setItem("searchlevel3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  $(".hidesearch").hide(1000);
                  $(".hideformsearch").hide(1000);
                  $(".form_diski").show(1000);

                  autosearch("searchdiski");
                }
              }
          }

          for(var ttt = 0;ttt < newobs7.length;ttt++){
              if(categoryname == newobs7[ttt].name){
                  localStorage.setItem("searchlevel3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  $(".hidesearch").hide(1000);
                  $(".hideformsearch").hide(1000);
                  $(".form_uslugitransp").show(1000);

                  autosearch("searchuslugitransp");
              }
          }

          //level3 Авто и мото

          //job arrays
          newobs8 = [
                          {
                            name: 'Торговля, продажи -',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Финансы, банки, инвестиции -',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Транспорт, логистика - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Строительство, недвижимость - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Юриспруденция и бухгалтерия',
                            src:img + 'strelka.png',
                          },{
                            name: 'Охрана и безопасность - ',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Домашний персонал',
                            src:img + 'strelka.png',
                          },{
                            name: 'Красота, фитнес, спорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Туризм, гостиницы, рестораны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Образование, наука',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Культура, искусство, развлечения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Медицина, фармацевтика',
                            src:img + 'strelka.png',
                          },{
                            name: 'IT, компьютеры, связь',
                            src:img + 'strelka.png',
                          },{
                            name: 'Маркетинг и реклама',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Производство, энергетика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Административный персонал',
                            src:img + 'strelka.png',
                          },{
                            name: 'Начало карьеры, студенты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рабочий персонал',
                            src:img + 'strelka.png',
                          },{
                            name: 'Автомобильный бизнес',
                            src:img + 'strelka.png',
                          },{
                            name: 'Добыча сырья',
                            src:img + 'strelka.png',
                          },{
                            name: 'Страхование',
                            src:img + 'strelka.png',
                          },{
                            name: 'Другие сферы деятельности',
                            src:img + 'strelka.png',
                          },
                        ];





          //job arrays

          //job

          switch (categoryname) {
            case 'Работа':

                        $scope.$ctrl.obs = newobs8;

                        localStorage.setItem("searchlevel1",categoryname);

              break;

          }

          //job

          for(var p = 0;p < newobs8.length;p++){
              if(categoryname == newobs8[p].name){
                  //$scope.$ctrl.obs = arraypodcategory[p];
                  $scope.$ctrl.obs = defaultobs;
                  localStorage.setItem("searchlevel2",categoryname);
                  localStorage.setItem("searchlevel3","vacancy");
                  $(".hidesearch").hide(1000);
                  $(".hideformsearch").hide(1000);
                  $(".form_uslugirabota").show(1000);

                  autosearch("searchrabota");
              }
          }





           //electronika

           //arrays electronic
           newobs22 = [
                          {
                            name: 'компьютеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'бытовая техника',
                            src:img + 'strelka.png',
                          },{
                            name: 'фототехника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'телефоны',
                            src:img + 'strelka.png',
                          },{
                            name: 'ТВ и видео, аудио',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игровые приставки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электроника для Arduino',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Индивидуальный уход',
                            src:img + 'strelka.png',
                          },{
                            name: 'Оргтехника',
                            src:img + 'strelka.png',
                          },{
                            name: 'Климатическая техника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'GPS навигация',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электроника для авто',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Оптические приборы',
                            src:img + 'strelka.png',
                          },{
                            name: 'охранные системы - ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары и комплектующие',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электронные книги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая электроника',
                            src:img + 'strelka.png',
                          },
                        ];




                        newobs23 = [
                          {
                            name: 'веб камеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'внешние жесткие диски',
                            src:img + 'strelka.png',
                          },{
                            name: 'источники бесперебойного питания',
                            src: img + 'strelka.png',
                          }, {
                            name: 'карты памяти',
                            src:img + 'strelka.png',
                          },{
                            name: 'комплектующие для ноутбуков',
                            src: img + 'strelka.png',
                          }, {
                            name: 'комплектующие для пк',
                            src:img + 'strelka.png',
                          },{
                            name: 'манипуляторы и клавиатуры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Мониторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Настольные компьютеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ноутбуки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Програмное обеспечение',
                            src:img + 'strelka.png',
                          },{
                            name: 'Планшеты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сетевое оборудование',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сумки и чехлы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Флешки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие компьютерные товары',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs24 = [
                          {
                            name: 'вытяжки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'духовки',
                            src:img + 'strelka.png',
                          },{
                            name: 'кофеварки и кофемашины',
                            src: img + 'strelka.png',
                          }, {
                            name: 'мелкая кухонная техника',
                            src:img + 'strelka.png',
                          },{
                            name: 'микроволновые печи',
                            src: img + 'strelka.png',
                          }, {
                            name: 'плиты',
                            src:img + 'strelka.png',
                          },{
                            name: 'посудомоечные машины',
                            src: img + 'strelka.png',
                          }, {
                            name: 'пылесосы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Стиральные машины',
                            src:img + 'strelka.png',
                          },{
                            name: 'утюги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фильтры и умягчители для воды',
                            src:img + 'strelka.png',
                          },{
                            name: 'Холодильники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Швейное оборудование',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрочайники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая бытовая техника',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs25 = [
                          {
                            name: 'Объективы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фотоаксессуары',
                            src:img + 'strelka.png',
                          },{
                            name: 'Фотоаппараты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фотовспышки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Студийное оборудование',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Цифровые фоторамки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Штативы и моноподы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая фототехника',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs26 = [
                          {
                            name: 'Аксессуары для телефонов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Гарнитуры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Запасные части для телефонов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Карты оплаты и номера',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мобильные телефоны',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Радиотелефоны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рации',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Спортивные браслеты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Android(watch)',
                            src:img + 'strelka.png',
                          },{
                            name: 'ios(watch)',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие телефоны',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs27 = [
                          {
                            name: 'Домашние кинотеатры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аудио',
                            src:img + 'strelka.png',
                          },{
                            name: 'DVD и Blu-ray плееры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для видеокамер',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аксессуары для ТВ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для экшн-камер',
                            src:img + 'strelka.png',
                          },{
                            name: 'Видеокамеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Медиаплееры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Спутниковое и кабельное ТВ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Телевизоры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая ТВ и видеотехника',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs28 = [
                          {
                            name: 'Аксессуары для игровых приставок',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игровые приставки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Игры для приставок',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт приставок',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рули, джойстики, геймпады',
                            src: img + 'strelka.png',
                          },{
                            name: 'прошивка,unlock',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs29 = [
                          {
                            name: 'Электронные платы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'электродвигатели',
                            src:img + 'strelka.png',
                          },{
                            name: 'прочая электроника',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs30 = [
                          {
                            name: 'Бритвы и триммеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бытовые медицинские приборы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Массажеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Напольные весы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фены и приборы для укладки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрические зубные щетки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Эпиляторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочее для индивидуального ухода',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs31 = [
                          {
                            name: 'Копиры и МФУ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ламинаторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мини АТС',
                            src: img + 'strelka.png',
                          },{
                            name: 'Принтеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Проекторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Проекционные экраны',
                            src: img + 'strelka.png',
                          },{
                            name: 'Расходные материалы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сканеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочая офисная техника',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs32 = [
                          {
                            name: 'Вентиляторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Водонагреватели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ионизаторы воздуха',
                            src: img + 'strelka.png',
                          },{
                            name: 'Кондиционеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Обогреватели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Осушители воздуха',
                            src: img + 'strelka.png',
                          },{
                            name: 'Очистители и увлажнители воздуха',
                            src:img + 'strelka.png',
                          },{
                            name: 'Тепловые пушки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Электрокамины',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочее климатическое оборудование',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs33 = [
                          {
                            name: 'GPS-навигаторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'GPS-трекеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Карты и программы для GPS',
                            src: img + 'strelka.png',
                          },{
                            name: 'другие приборы GPS',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs34 = [
                          {
                            name: 'Автоакустика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Автомагнитолы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Автоусилители',
                            src: img + 'strelka.png',
                          },{
                            name: 'Автомобильные телевизоры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Видеорегистраторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бортовые компьютеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Камеры заднего вида',
                            src: img + 'strelka.png',
                          },{
                            name: 'Радар-детекторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Универсальные зарядные устройства',
                            src: img + 'strelka.png',
                          },{
                            name: 'Устройства громкой связи',
                            src: img + 'strelka.png',
                          }, {
                            name: 'FM-трансмиттеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая электроника для авто',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs35 = [
                          {
                            name: 'Бинокли и зрительные трубы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Микроскопы и лупы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Приборы ночного видения',
                            src: img + 'strelka.png',
                          },{
                            name: 'Телескопы',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs36 = [
                          {
                            name: 'Датчики, извещатели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Домофоны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Камеры видеонаблюдения',
                            src: img + 'strelka.png',
                          },{
                            name: 'Охранные системы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сигнализации',
                            src: img + 'strelka.png',
                          },
                        ];




           //arrays electronic
            var podcategoryar = [newobs23,newobs24,newobs25,newobs26,newobs27,newobs28,newobs29,newobs30,newobs31,
            newobs32,newobs33,newobs34,newobs35,newobs36];
           //

           switch (categoryname) {
            case 'Электроника':

                        $scope.$ctrl.obs = newobs22;

                        localStorage.setItem("searchlevel1",categoryname);

              break;

          }

          for(var u = 0;u < newobs22.length;u++){
              if(categoryname == newobs22[u].name){
                  $scope.$ctrl.obs = podcategoryar[u];
                  localStorage.setItem("searchlevel2",categoryname);
              }
          }

          for(var y = 0;y < podcategoryar.length;y++){
              for(var yy = 0;yy < podcategoryar[y].length;yy++){
                  if(categoryname == podcategoryar[y][yy].name){
                      localStorage.setItem("searchlevel3",categoryname);
                      $scope.$ctrl.obs = defaultobs;
                      $(".hidesearch").hide(1000);
                      $(".hideformsearch").hide(1000);
                      $(".form_uslugitransp").show(1000);

                      autosearch("searchuslugitransp");
                  }
              }
          }


           //electronika
                //medical



                switch (categoryname) {
                case 'Медицина':


                            localStorage.setItem("searchlevel1",categoryname);
                            localStorage.setItem("searchlevel2","нет");
                            localStorage.setItem("searchlevel3","нет");
                            $scope.$ctrl.obs = defaultobs;
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");



                  break;

                }

                //medical


                //salon


                switch (categoryname) {
                case 'Салоны красоты':

                            //$scope.$ctrl.obs = newobs22;
                            localStorage.setItem("searchlevel1",categoryname);
                            localStorage.setItem("searchlevel2","нет");
                            localStorage.setItem("searchlevel3","нет");
                            $scope.$ctrl.obs = defaultobs;
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");



                  break;

                }

                //salon


                //moda


                switch (categoryname) {
                case 'Мода':

                            //$scope.$ctrl.obs = newobs22;
                            localStorage.setItem("searchlevel1",categoryname);
                            localStorage.setItem("searchlevel2","нет");
                            localStorage.setItem("searchlevel3","нет");
                            $scope.$ctrl.obs = defaultobs;
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");



                  break;

                }

                //moda


                //kafe
                switch (categoryname) {
                  case 'кафе,караоке,ночные клубы':

                              //$scope.$ctrl.obs = newobs22;
                              localStorage.setItem("searchlevel1",categoryname);
                              localStorage.setItem("searchlevel2","нет");
                              localStorage.setItem("searchlevel3","нет");
                              $scope.$ctrl.obs = defaultobs;
                              $(".hidesearch").hide(1000);
                              $(".hideformsearch").hide(1000);
                              $(".form_uslugitransp").show(1000);

                              autosearch("searchuslugitransp");



                    break;

                }



                //kafe


                //uslugi

                //arrays

                newobs39 = [
                          {
                            name: 'Строительство и ремонт',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Образование, курсы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ремонт и обслуживание техники',
                            src: img + 'strelka.png',
                          },{
                            name: 'Юридические услуги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат товаров',
                            src:img + 'strelka.png',
                          },{
                            name: 'Спорт',
                            src: img + 'strelka.png',
                          },{
                            name: 'Красота и здоровье',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Информационные технологии - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аренда оборудования',
                            src: img + 'strelka.png',
                          },{
                            name: 'Безопасность, детективы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бухгалтерские и аудиторские услуги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Риэлторские услуги',
                            src: img + 'strelka.png',
                          },{
                            name: 'Уборка, химчистка, стирка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дизайн, архитектура, ландшафт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Грузоперевозки, вывоз мусора',
                            src: img + 'strelka.png',
                          },{
                            name: 'Изготовление, сборка, ремонт мебели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Набор текста',
                            src:img + 'strelka.png',
                          },{
                            name: 'Няни',
                            src: img + 'strelka.png',
                          },{
                            name: 'Перевод',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Пошив и ремонт одежды',
                            src:img + 'strelka.png',
                          },{
                            name: 'Праздники и мероприятия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Редактирование, вычитка текстов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Реклама и полиграфия',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сиделки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сопровождение иностранцев',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Транспорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Уборка',
                            src: img + 'strelka.png',
                          },{
                            name: 'Фото и видео-съемка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие услуги',
                            src:img + 'strelka.png',
                          },
                        ];

                //arrays

                //podcategory arrays
                newobs40 = [
                          {
                            name: 'Вентиляция, кондиционирование',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дизайн, архитектура',
                            src:img + 'strelka.png',
                          },{
                            name: 'Готовые конструкции',
                            src: img + 'strelka.png',
                          },{
                            name: 'Изготовление мебели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Монтажные работы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Окна, двери, балконы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Отделка, ремонт',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт помещений',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сантехника',
                            src: img + 'strelka.png',
                          },{
                            name: 'Столярные работы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Строительные услуги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрика',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие строительные услуги',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs41 = [
                          {
                            name: 'Вождение',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дошкольное обучение',
                            src:img + 'strelka.png',
                          },{
                            name: 'Иностранные языки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Искусство',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Курсы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Образование за рубежом',
                            src: img + 'strelka.png',
                          },{
                            name: 'Репетиторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Семинары, тренинги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Уроки музыки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие образовательные услуги',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs42 = [
                          {
                            name: 'Ремонт и установка бытовой техники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт компьютерной техники',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ремонт и установка прочей техники',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs43 = [
                          {
                            name: 'Адвокаты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Нотариусы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Юридические консультации',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие юридические услуги',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs44 = [
                          {
                            name: 'Прокат велосипедов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат кальянов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прокат музыкального оборудования',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат оборудования',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат платьев и костюмов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат свадебных товаров',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прокат спортивных товаров',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат строительных инструментов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат туристического снаряжения',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат электроники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат прочих товаров',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs45 = [
                          {
                            name: 'Спортивные залы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Спортивные секции',
                            src:img + 'strelka.png',
                          },{
                            name: 'Тренеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие спортивные услуги',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs46 = [
                          {
                            name: 'Косметология',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Макияж, визаж',
                            src:img + 'strelka.png',
                          },{
                            name: 'Маникюр, педикюр',
                            src: img + 'strelka.png',
                          },{
                            name: 'Массаж',
                            src: img + 'strelka.png',
                          },{
                            name: 'Медицинские услуги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Наращивание ногтей',
                            src:img + 'strelka.png',
                          },{
                            name: 'Парикмахерские услуги',
                            src: img + 'strelka.png',
                          },{
                            name: 'Психология',
                            src: img + 'strelka.png',
                          },{
                            name: 'Тату, боди-арт, пирсинг',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Эпиляция и депиляция',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие услуги для красоты и здоровья',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs47 = [
                          {
                            name: 'Компьютерная помощь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Продвижение в социальных сетях',
                            src:img + 'strelka.png',
                          },{
                            name: 'Услуги разработчиков',
                            src:img + 'strelka.png',
                          },{
                            name: 'Продвижение сайтов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Создание сайтов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Телефония, связь, интернет',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие ИТ услуги',
                            src:img + 'strelka.png',
                          },
                        ];


                        var uslugiarr = [newobs40,newobs41,newobs42,newobs43,newobs44,newobs45,newobs46,newobs47];

                //podcategory arrays


                switch (categoryname) {
                case 'Услуги и обслуживание':

                            localStorage.setItem("searchlevel1",categoryname);
                            $scope.$ctrl.obs = newobs39;

                  break;

                }

                for(var ph = 0;ph < newobs39.length;ph++){
                    if(categoryname == newobs39[ph].name){

                        if(ph <= 7){
                          $scope.$ctrl.obs = uslugiarr[ph];
                          localStorage.setItem("searchlevel2",categoryname);
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          //mainView.router.loadPage("#add");
                          $(".hidesearch").hide(1000);
                          $(".hideformsearch").hide(1000);
                          $(".form_uslugitransp").show(1000);
                          localStorage.setItem("searchlevel3","zamena");
                          localStorage.setItem("searchlevel4",categoryname);
                          localStorage.setItem("searchlevel2","нет");

                          autosearch("searchuslugitransp");
                        }


                    }
                }



                for(var oh = 0;oh < uslugiarr.length;oh++){
                    for(var jjh = 0;jjh < uslugiarr[oh].length;jjh++){
                        if(categoryname == uslugiarr[oh][jjh].name){
                            localStorage.setItem("searchlevel3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            //mainView.router.loadPage("#add");
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");
                       }
                    }

                }

                //uslugi
           //

           //bank and commerce


           switch (categoryname) {
                case 'Банки Коммерческие организации':

                            localStorage.setItem("searchlevel1",categoryname);
                            localStorage.setItem("searchlevel2","нет");
                            localStorage.setItem("searchlevel3","нет");
                            $scope.$ctrl.obs = defaultobs;
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");

                  break;

                }
           //bank and commerce

           //company and biziness


           switch (categoryname) {
                case 'Компании,бизнес':

                            localStorage.setItem("searchlevel1",categoryname);
                            localStorage.setItem("searchlevel2","нет");
                            localStorage.setItem("searchlevel3","нет");
                            $scope.$ctrl.obs = defaultobs;
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");

                  break;

                }
           //company and biziness


           ///company and biziness

           //veshi arrays

           newobs48 = [
                          {
                            name: 'Одежда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Обувь',
                            src:img + 'strelka.png',
                          },{
                            name: 'Для свадьбы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аксессуары',
                            src: img + 'strelka.png',
                          },{
                            name: 'Подарки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Товары для красоты и здоровья',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Часы - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Другие личные вещи',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs49 = [
                          {
                            name: 'Головные уборы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Женское белье и купальники',
                            src:img + 'strelka.png',
                          },{
                            name: 'Женская одежда',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мужская одежда',
                            src: img + 'strelka.png',
                          },{
                            name: 'Одежда для беременных',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs50 = [
                          {
                            name: 'Женская обувь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Мужская обувь',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs51 = [
                          {
                            name: 'Свадебные аксессуары',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Свадебные платья',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs52 = [
                          {
                            name: 'Бижутерия',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сумки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ювелирные украшения',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие аксессуары',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs53 = [
                          {
                            name: 'Подарочные сертификаты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сувениры, подарки',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs54 = [
                          {
                            name: 'Косметика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Парфюмерия',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs55 = [
                          {
                            name: 'Карманные часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Командирские часы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сувенирные часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Наручные женские часы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Наручные мужские часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Настенные часы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Настольные часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Напольные часы',
                            src:img + 'strelka.png',
                          },
                        ];

                        var veshiarr = [newobs49,newobs50,newobs51,newobs52,newobs53,newobs54,newobs55];
           //veshi arrays


           switch (categoryname) {
                case 'Личные вещи':

                            localStorage.setItem("searchlevel1",categoryname);
                            $scope.$ctrl.obs = newobs48;

                  break;

                }

           for(var phd = 0;phd < newobs48.length;phd++){
                    if(categoryname == newobs48[phd].name){

                        if(phd <= 6){
                          $scope.$ctrl.obs = veshiarr[phd];
                          localStorage.setItem("searchlevel2",categoryname);
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          //mainView.router.loadPage("#add");
                          localStorage.setItem("searchlevel2","нет");
                          localStorage.setItem("searchlevel3","zamena");
                          localStorage.setItem("searchlevel4",categoryname);
                          $(".hidesearch").hide(1000);
                          $(".hideformsearch").hide(1000);
                          $(".form_uslugitransp").show(1000);

                          autosearch("searchuslugitransp");
                        }


                    }
                }


                for(var ohd = 0;ohd < veshiarr.length;ohd++){
                    for(var jjhd = 0;jjhd < veshiarr[ohd].length;jjhd++){
                        if(categoryname == veshiarr[ohd][jjhd].name){
                            localStorage.setItem("searchlevel3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");
                       }
                    }

                }
           //company and biziness

           //sport tovari
           switch (categoryname) {
                case 'Спортивные товары':

                            localStorage.setItem("searchlevel1",categoryname);
                            localStorage.setItem("searchlevel2","нет");
                            localStorage.setItem("searchlevel3","нет");
                            $scope.$ctrl.obs = defaultobs;
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");

                  break;

                }
           //sport tovari

           //dlya detei

           //arrays

           newobs56 = [
                          {
                            name: 'Детская одежда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Детская обувь',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детская мебель - ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Автокресла',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детские велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Детский транспорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детская литература',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игрушки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Коляски',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Товары для новорожденных',
                            src:img + 'strelka.png',
                          },{
                            name: 'Школьные товары',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие детские товары',
                            src:img + 'strelka.png',
                          },
                        ];

                        //arrays

                newobs37 = [
                          {
                            name: 'Одежда для девочек',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Одежда для мальчиков',
                            src:img + 'strelka.png',
                          },{
                            name: 'Одежда для новорожденных',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs38 = [
                          {
                            name: 'Обувь для девочек',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Обувь для мальчиков',
                            src:img + 'strelka.png',
                          },
                        ];

                //arrays

                        newobs57 = [
                          {
                            name: 'Бескаркасная мебель',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Детские гарнитуры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Колыбели и люльки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Комоды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Кроватки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Пеленальные столики',
                            src: img + 'strelka.png',
                          },{
                            name: 'Столы и стульчики для кормления',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ходунки и прыгунки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Шведские стенки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другая детская мебель',
                            src: img + 'strelka.png',
                          },
                        ];


//rab

           var childrenarrays = [newobs37,newobs38,newobs57];

           switch (categoryname) {
                case 'Для детей':

                            localStorage.setItem("searchlevel1",categoryname);
                            $scope.$ctrl.obs = newobs56;


                  break;

                }

                for(var phdd = 0;phdd < newobs56.length;phdd++){
                    if(categoryname == newobs56[phdd].name){

                        if(phdd <= 2){
                          $scope.$ctrl.obs = childrenarrays[phdd];
                          localStorage.setItem("searchlevel2",categoryname);
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          //mainView.router.loadPage("#add");
                          localStorage.setItem("searchlevel2","нет");
                          localStorage.setItem("searchlevel3","zamena");
                          localStorage.setItem("searchlevel4",categoryname);
                          $(".hidesearch").hide(1000);
                          $(".hideformsearch").hide(1000);
                          $(".form_uslugitransp").show(1000);

                          autosearch("searchuslugitransp");
                        }


                    }
                }


                for(var ohdd = 0;ohdd < childrenarrays.length;ohdd++){
                    for(var jjhdd = 0;jjhdd < childrenarrays[ohdd].length;jjhdd++){
                        if(categoryname == childrenarrays[ohdd][jjhdd].name){
                            localStorage.setItem("searchlevel3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            //mainView.router.loadPage("#add");
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");
                       }
                    }

                }
           //dlya detei

           //arrays

           newobs58 = [
                          {
                            name: 'Услуги для животных',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бюро находок - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аквариумные рыбки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Грызуны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Кошки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Птицы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рептилии',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сельхоз животные',
                            src:img + 'strelka.png',
                          },{
                            name: 'Собаки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Товары для животных',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Экзотические животные',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs59 = [
                          {
                            name: 'Ветеринария',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Выгул',
                            src:img + 'strelka.png',
                          },{
                            name: 'Дрессировка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Зоогостиницы, передержка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Стрижка',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие услуги для животных',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs60 = [
                          {
                            name: 'Найдены',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Утеряны',
                            src:img + 'strelka.png',
                          },
                        ];
           //arrays

           var arraysanimals = [newobs59,newobs60];

           switch (categoryname) {
                case 'Животным':

                            localStorage.setItem("searchlevel1",categoryname);
                            $scope.$ctrl.obs = newobs58;


                  break;

                }


                for(var phddd = 0;phddd < newobs58.length;phddd++){
                    if(categoryname == newobs58[phddd].name){

                        if(phddd <= 1){
                          $scope.$ctrl.obs = arraysanimals[phddd];
                          localStorage.setItem("searchlevel2",categoryname);
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          localStorage.setItem("searchlevel2","нет");
                          localStorage.setItem("searchlevel3","zamena");
                          localStorage.setItem("searchlevel4",categoryname);
                          $(".hidesearch").hide(1000);
                          $(".hideformsearch").hide(1000);
                          $(".form_uslugitransp").show(1000);

                          autosearch("searchuslugitransp");
                        }


                    }
                }


                for(var ohddd = 0;ohddd < arraysanimals.length;ohddd++){
                    for(var jjhddd = 0;jjhddd < arraysanimals[ohddd].length;jjhddd++){
                        if(categoryname == arraysanimals[ohddd][jjhddd].name){
                            localStorage.setItem("searchlevel3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");
                       }
                    }

                }

                //dlya doma i dachi
                //arrays
                newobs61 = [
                          {
                            name: 'Мебель и интерьер',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт и строительство',
                            src:img + 'strelka.png',
                          },{
                            name: 'Инструменты и инвентарь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Растения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Домашний текстиль',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бытовая химия - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Посуда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие товары для дома и дачи',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs62 = [
                          {
                            name: 'Диваны и кресла',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Компьютерные кресла',
                            src:img + 'strelka.png',
                          },{
                            name: 'Компьютерные столы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Кровати и матрасы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Кухонные гарнитуры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Мебель для ванной',
                            src:img + 'strelka.png',
                          },{
                            name: 'Освещение',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Подставки и тумбы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Предметы интерьера',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Спальные гарнитуры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Столы и стулья',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Текстиль и ковры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Шкафы и комоды',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочая мебель и предметы интерьера',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs63 = [
                          {
                            name: 'Двери',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Окна и балконы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Камины и обогреватели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Потолки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сауна и баня',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сантехника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Стройматериалы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие товары для строительства',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs64 = [
                          {
                            name: 'Садовая техника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Садовые инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие инструменты и инвентарь',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs65 = [
                          {
                            name: 'Комнатные растения',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Садовые растения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Удобрения и грунт',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs66 = [
                          {
                            name: 'Комплекты постельного белья',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Матрасы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Наволочки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Одеяла',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Подушки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Полотенца',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Пледы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Простыни',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs67 = [
                          {
                            name: 'Все для стирки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Все для уборки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Моющие средства',
                            src: img + 'strelka.png',
                          },{
                            name: 'Чистящие средства',
                            src: img + 'strelka.png',
                          },
                        ];


                        var domisadarrays = [newobs62,newobs63,newobs64,newobs65,newobs66,newobs67];
                //arrays

                switch (categoryname) {
                case 'Для дома и дачи':

                            localStorage.setItem("searchlevel1",categoryname);
                            $scope.$ctrl.obs = newobs61;


                  break;

                }



                for(var phdddd = 0;phdddd < newobs61.length;phdddd++){
                    if(categoryname == newobs61[phdddd].name){

                        if(phdddd <= 5){
                          $scope.$ctrl.obs = domisadarrays[phdddd];
                          localStorage.setItem("searchlevel2",categoryname);
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          localStorage.setItem("searchlevel2","нет");
                          localStorage.setItem("searchlevel3","zamena");
                          localStorage.setItem("searchlevel4",categoryname);
                          $(".hidesearch").hide(1000);
                          $(".hideformsearch").hide(1000);
                          $(".form_uslugitransp").show(1000);

                          autosearch("searchuslugitransp");
                        }


                    }
                }


                for(var ohdddd = 0;ohdddd < domisadarrays.length;ohdddd++){
                    for(var jjhdddd = 0;jjhdddd < domisadarrays[ohdddd].length;jjhdddd++){
                        if(categoryname == domisadarrays[ohdddd][jjhdddd].name){
                            localStorage.setItem("searchlevel3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");
                       }
                    }

                }

                //Хобби и игрушки

                //arrays hobby
                newobs68 = [
                          {
                            name: 'Коллекционирование',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Музыкальные инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Спорт и отдых',
                            src: img + 'strelka.png',
                          },{
                            name: 'Книги, журналы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Билеты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Путешествия',
                            src: img + 'strelka.png',
                          },{
                            name: 'USB, CD, DVD, пластинки -',
                            src: img + 'strelka.png',
                          },{
                            name: 'Настольные игры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Развивающие игрушки, игры',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs69 = [
                          {
                            name: 'Антиквариат',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бонистика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Искусство',
                            src: img + 'strelka.png',
                          },{
                            name: 'Модели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Нумизматика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Филокартия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Фарфор, Керамика, Стекло, Хрусталь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фалеристика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Филателия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие предметы для коллекционирования',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs70 = [
                          {
                            name: 'Аккордеоны, гармони, баяны',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для музыкальных инструментов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Гитары и другие струнные',
                            src: img + 'strelka.png',
                          },{
                            name: 'Духовые инструменты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Оборудование для студии и концертов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Пианино и другие клавишные',
                            src: img + 'strelka.png',
                          },{
                            name: 'Скрипки и другие смычковые',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ударные инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Этнические (национальные) инструменты',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs71 = [
                          {
                            name: 'Альпинизм',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бильярд',
                            src:img + 'strelka.png',
                          },{
                            name: 'Боулинг',
                            src: img + 'strelka.png',
                          },{
                            name: 'Водный спорт',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дайвинг',
                            src:img + 'strelka.png',
                          },{
                            name: 'Игры с мячом',
                            src: img + 'strelka.png',
                          },{
                            name: 'Единоборства',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Лыжный / горнолыжный спорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Охота и рыбалка',
                            src: img + 'strelka.png',
                          },{
                            name: 'Пейнтбол',
                            src: img + 'strelka.png',
                          },{
                            name: 'Ролики',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сноубординг',
                            src:img + 'strelka.png',
                          },{
                            name: 'Скейтборды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Страйкбол',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Теннис, бадминтон, пинг-понг',
                            src:img + 'strelka.png',
                          },{
                            name: 'Туризм',
                            src: img + 'strelka.png',
                          },{
                            name: 'Фитнес и тренажеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Хоккей',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочее для спорта и отдыха',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs72 = [
                          {
                            name: 'Журналы, газеты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Календари, постеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Книги',
                            src: img + 'strelka.png',
                          },{
                            name: 'Учебная литература',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs73 = [
                          {
                            name: 'BMX велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для велосипедов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Двухподвесные велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Горные велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Городские велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Запчасти для велосипедов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Трековые велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Шоссейные велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Электровелосипеды',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs74 = [
                          {
                            name: 'Спортивные мероприятия',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Купоны и абонементы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детские мероприятия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Концерты',
                            src: img + 'strelka.png',
                          },{
                            name: 'Бизнес',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Путешествия',
                            src:img + 'strelka.png',
                          },{
                            name: 'Театр, опера, балет',
                            src: img + 'strelka.png',
                          },{
                            name: 'Цирк, кино',
                            src: img + 'strelka.png',
                          },{
                            name: 'Выставки, фестивали',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие билеты',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs75 = [
                          {
                            name: 'Поиск попутчиков',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Товары для кемпинга',
                            src:img + 'strelka.png',
                          },{
                            name: 'Туры и путевки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Услуги для туристов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Эмиграция',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs76 = [
                          {
                            name: 'Аудиокниги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Видео',
                            src:img + 'strelka.png',
                          },{
                            name: 'Музыка',
                            src: img + 'strelka.png',
                          },{
                            name: 'USB накопители',
                            src: img + 'strelka.png',
                          },
                        ];

                      var arrayshobby = [newobs69,newobs70,newobs71,newobs72,newobs73,newobs74,newobs75,newobs76];

                switch (categoryname) {
                case 'Хобби и игрушки':

                            localStorage.setItem("searchlevel1",categoryname);
                            $scope.$ctrl.obs = newobs68;


                  break;

                }


                for(var phddddd = 0;phddddd < newobs68.length;phddddd++){
                    if(categoryname == newobs68[phddddd].name){

                        if(phddddd <= 7){
                          $scope.$ctrl.obs = arrayshobby[phddddd];
                          localStorage.setItem("searchlevel2",categoryname);
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          localStorage.setItem("searchlevel2","нет");
                          localStorage.setItem("searchlevel3","zamena");
                          localStorage.setItem("searchlevel4",categoryname);
                          $(".hidesearch").hide(1000);
                          $(".hideformsearch").hide(1000);
                          $(".form_uslugitransp").show(1000);

                          autosearch("searchuslugitransp");
                        }


                    }
                }


                for(var ohddddd = 0;ohddddd < arrayshobby.length;ohddddd++){
                    for(var jjhddddd = 0;jjhddddd < arrayshobby[ohddddd].length;jjhddddd++){
                        if(categoryname == arrayshobby[ohddddd][jjhddddd].name){
                            localStorage.setItem("searchlevel3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");
                       }
                    }

                }
                //Хобби и игрушки

                //arrays

                newobs77 = [
                          {
                            name: 'Украшения',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игрушки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Дом, интерьер',
                            src: img + 'strelka.png',
                          },{
                            name: 'Одежда, обувь',
                            src: img + 'strelka.png',
                          },{
                            name: 'Казахские национальные изделия - ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Для домашних животных',
                            src:img + 'strelka.png',
                          },{
                            name: 'Живопись',
                            src: img + 'strelka.png',
                          },{
                            name: 'Косметика, мыло',
                            src: img + 'strelka.png',
                          },{
                            name: 'Мастер-классы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Материалы для творчества',
                            src:img + 'strelka.png',
                          },{
                            name: 'Открытки, канцтовары',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сувениры ручной работы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сумки, аксессуары',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Цветы, флористика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Другие товары ручной работы',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs78 = [
                          {
                            name: 'Браслеты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Броши',
                            src:img + 'strelka.png',
                          },{
                            name: 'Заколки, обручи',
                            src: img + 'strelka.png',
                          },{
                            name: 'Колье, бусы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Серьги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие украшения',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs79 = [
                          {
                            name: 'Деревянные игрушки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Куклы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мягкие игрушки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие игрушки',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs80 = [
                          {
                            name: 'Кухня и посуда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Предметы мебели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Элементы интерьера и декор',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие предметы интерьера',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs81 = [
                          {
                            name: 'Детская одежда и обувь ручной работы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Женская одежда и обувь ручной работы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мужская одежда и обувь ручной работы',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs82 = [
                          {
                            name: 'Головные уборы и шарфы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Изделия из войлока',
                            src:img + 'strelka.png',
                          },{
                            name: 'Изделия из дерева',
                            src: img + 'strelka.png',
                          },{
                            name: 'Изделия из кожи',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Изделия из металла',
                            src:img + 'strelka.png',
                          },{
                            name: 'Казахская национальная одежда и обувь',
                            src: img + 'strelka.png',
                          },{
                            name: 'Казахские музыкальные инструменты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Казахские национальные украшения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Национальная посуда',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сувениры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сумки, ремни, аксессуары',
                            src:img + 'strelka.png',
                          },{
                            name: 'Тойбастар, коржын, приданое',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие национальные изделия',
                            src: img + 'strelka.png',
                          },
                        ];

                //arrays

                  var arraysruch = [newobs78,newobs79,newobs80,newobs81,newobs82];

                switch (categoryname) {
                case 'Изделия выполненные вручную':

                            localStorage.setItem("searchlevel1",categoryname);
                            $scope.$ctrl.obs = newobs77;


                  break;

                }

                for(var phddddda = 0;phddddda < newobs77.length;phddddda++){
                    if(categoryname == newobs77[phddddda].name){

                        if(phddddda <= 4){
                          $scope.$ctrl.obs = arraysruch[phddddda];
                          localStorage.setItem("searchlevel2",categoryname);
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          localStorage.setItem("searchlevel2","нет");
                          localStorage.setItem("searchlevel3","zamena");
                          localStorage.setItem("searchlevel4",categoryname);
                          $(".hidesearch").hide(1000);
                          $(".hideformsearch").hide(1000);
                          $(".form_uslugitransp").show(1000);

                          autosearch("searchuslugitransp");
                        }


                    }
                }


                for(var ohddddda = 0;ohddddda < arraysruch.length;ohddddda++){
                    for(var jjhddddda = 0;jjhddddda < arraysruch[ohddddda].length;jjhddddda++){
                        if(categoryname == arraysruch[ohddddda][jjhddddda].name){
                            localStorage.setItem("searchlevel3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            $(".hidesearch").hide(1000);
                            $(".hideformsearch").hide(1000);
                            $(".form_uslugitransp").show(1000);

                            autosearch("searchuslugitransp");
                       }
                    }

                }




      };




    }


  });







//dop podcategory


//module search
function sendsearch(formdata){


            //console.log(formdata);


             var urlmessagesend5 = localStorage.getItem("baseurl");

             var useridentificatorsearch = localStorage.getItem("useridentificator");

             var useremailsearch = localStorage.getItem("useremail");

             if(useridentificatorsearch == 0){
                useridentificatorsearch = 0;
                useremailsearch = 0;
             }

             var newphoneid = phoneid;



             //console.log(newphoneid + " | " + useridentificatorsearch + " | " + useremailsearch);

             formdata['useridentificatorsearch'] = useridentificatorsearch;
             formdata['useremailsearch'] = useremailsearch;
             formdata['newphoneid'] = newphoneid;

             //console.log(formdata);

            $.ajax({
                  "type":"GET",
                  "url": urlmessagesend5 + "searchusers/",    /*search users option*/

                  dataType: "jsonp",
                  crossDomain: true,
                  "data": formdata,

                  "success":kx1,
                  "error":errorfunc1

                  });


            function kx1(result){
//rab
                  //console.log(result[0]);
                  //console.log(result[1]);

                  pageindex = result[3];
                  //pageindex = 200;
                  console.log(result);
                  if(result[0].length > 0){
                    insertviewob(result);
                      //console.log(result[0][0]);

                      pagescroll = 100;
                      pagefixed = 0;

                      $(".page-content").scrollTop(0);
                      myApp.hidePreloader();
                  }else{
                    myApp.alert('извините ничего не найдено в данный момент мы набираем базу объявлений!','Сервис');
                        myApp.hidePreloader();
                  }

                  //console.log(pageindex);
                  //console.log(result[4]);
                  //console.log(result[5]);





            }

            function errorfunc1(){
                myApp.hidePreloader();

            }


}



$(".searchkvbutton").click(function(){

    var whatbuttons = $(this).attr("b");

    var myform = "";

    //console.log(whatbuttons);
    switch (whatbuttons) {
          case "kv":
            myform = myApp.formToData('#searchkv');
            myform['search'] = "kv";
          break;

          case "avto":
            myform = myApp.formToData('#searchavto');
            myform['search'] = "avto";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }

            var marka = myform['markasearch'];

            if(marka != null){

                var arraysmarka = marka.split(':');

                myform['marka'] = arraysmarka[0];
                myform['model'] = arraysmarka[1];


              }

          break;

          case "spest":
            myform = myApp.formToData('#searchspest');
            myform['search'] = "spest";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }



          break;


          case "zapchlegk":
            myform = myApp.formToData('#searchzapchlegk');
            myform['search'] = "zapchlegk";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }

             var marka = myform['markasearch'];

            if(marka != null){

                var arraysmarka = marka.split(':');

                myform['marka'] = arraysmarka[0];
                myform['model'] = arraysmarka[1];


              }





          break;


          case "zapchspest":
            myform = myApp.formToData('#searchzapchspest');
            myform['search'] = "zapchspest";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }




          break;


          case "shini":
            myform = myApp.formToData('#searchshina');
            myform['search'] = "shini";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }




          break;


          case "diski":
            myform = myApp.formToData('#searchdiski');
            myform['search'] = "diski";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }




          break;


          case "uslugitransport":
            myform = myApp.formToData('#searchuslugitransp');
            myform['search'] = "uslugitransport";

            var category1 = localStorage.getItem("searchlevel1");

            if(category1){
                myform['category1'] = category1;
            }

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
                if(category3 == "zamena"){
                    var category4 = localStorage.getItem("searchlevel4");
                    if(category4){
                        myform['category4'] = category4;
                    }
                }
            }




          break;


          case "uslugirabota":
            myform = myApp.formToData('#searchrabota');
            myform['search'] = "uslugitransport";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }




          break;

    }

    myform['valyuta'] = "тг";

    var country = $(".searchregion").val();

      if(country != ""){

      var arrayscountry = country.split(':');
      myform['city'] = arrayscountry[1];

      var splittingstringarray = arrayscountry[0].split("_");

      myform['strana'] = splittingstringarray[0] + " " + splittingstringarray[1];

      }else{
        myform['city'] = 0;
        myform['strana'] = 0;
      }



    sendsearch(myform);
    myApp.showPreloader('работаю..');


    //console.log(myform);

});


//module auto search

var formarrays = ["searchrabota","searchuslugitransp","searchdiski","searchshina","searchzapchspest", "searchzapchlegk","searchspest", "searchavto","searchkv"];





var arraysname = new Array();


// for(var p = 0;p < formarrays.length;p++){


//     var inputs = $("#" + formarrays[p]).find("input");

//     var selects = $("#" + formarrays[p]).find("select");

//     inputs.each(function(index,element){

//       var t = $(this).attr("keygens",formarrays[p]);

//       var y = $(this).attr("keygens");

//       var name = $(this).attr("name");



//       arraysname.push(name);




//     });


//     selects.each(function(index,element){

//       var t = $(this).attr("keygens",formarrays[p]);

//       var y = $(this).attr("keygens");

//       var name = $(this).attr("name");



//       arraysname.push(name);




//     });



// inputs.change(function(){

//           var g = $(this).attr("keygens");


//             console.log(g);
//             autosearch(g);



//       });


// selects.change(function(){

//           var g = $(this).attr("keygens");


//             console.log(g);
//             autosearch(g);



//       });








//}



function autosearch(request){

    myApp.showPreloader('работаю..');

    var whatbuttons = request;

    //console.log(whatbuttons);

    var myform = "";

    //console.log(whatbuttons);
    switch (whatbuttons) {
          case "searchkv":
            myform = myApp.formToData('#searchkv');
            myform['search'] = "kv";
          break;

          case "searchavto":
            myform = myApp.formToData('#searchavto');
            myform['search'] = "avto";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }

            var marka = myform['markasearch'];

            if(marka != null){

                var arraysmarka = marka.split(':');

                myform['marka'] = arraysmarka[0];
                myform['model'] = arraysmarka[1];


              }

          break;

          case "searchspest":
            myform = myApp.formToData('#searchspest');
            myform['search'] = "spest";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }



          break;


          case "searchzapchlegk":
            myform = myApp.formToData('#searchzapchlegk');
            myform['search'] = "zapchlegk";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }

             var marka = myform['markasearch'];

            if(marka != null){

                var arraysmarka = marka.split(':');

                myform['marka'] = arraysmarka[0];
                myform['model'] = arraysmarka[1];


              }





          break;


          case "searchzapchspest":
            myform = myApp.formToData('#searchzapchspest');
            myform['search'] = "zapchspest";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }




          break;


          case "searchshina":
            myform = myApp.formToData('#searchshina');
            myform['search'] = "shini";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }




          break;


          case "searchdiski":
            myform = myApp.formToData('#searchdiski');
            myform['search'] = "diski";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }




          break;


          case "searchuslugitransp":
            myform = myApp.formToData('#searchuslugitransp');
            myform['search'] = "uslugitransport";

            var category1 = localStorage.getItem("searchlevel1");

            if(category1){
                myform['category1'] = category1;
            }

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
                if(category3 == "zamena"){
                    var category4 = localStorage.getItem("searchlevel4");
                    if(category4){
                        myform['category4'] = category4;
                    }
                }
            }




          break;


          case "searchrabota":
            myform = myApp.formToData('#searchrabota');
            myform['search'] = "uslugitransport";

            var category2 = localStorage.getItem("searchlevel2");

            if(category2){
                myform['category2'] = category2;
            }

            var category3 = localStorage.getItem("searchlevel3");

            if(category3){
                myform['category3'] = category3;
            }




          break;

    }

    myform['valyuta'] = "тг";

    var country = $(".searchregion").val();

      if(country != ""){

      var arrayscountry = country.split(':');
      myform['city'] = arrayscountry[1];

      var splittingstringarray = arrayscountry[0].split("_");

      myform['strana'] = splittingstringarray[0] + " " + splittingstringarray[1];

      }else{
        myform['city'] = 0;
        myform['strana'] = 0;
      }



    sendsearch(myform);


    //console.log(myform);

};




//module auto search





















//dop podcategory

//module search city
var regionVendors = {

    Акмолинская_область : ['Астана','Косшы','Кокшетау','Зеренда','Щучинск','Алексеевка','Степногорск','Ерейментау','Талапкер','Шортанды','Атбасар','Акколь','Бурабай','Державинск','Макинск','Айдабул'],
    Алматинская_область : ['Алматы','Талдыкорган','Каскелен','Талгар','Текели','Есик','Ушарал','Жаркент','Достык','Карабулак','Теректы','Ушконыр','Чимбулак','Абай','Бурундай','Жана Арна','Сарыозек','Сарканд'],
    Северо_Казахстанская_область : ['Петропавловск','Новоишимка','Бескөл','Тайынша','Тайынша-1','Кішкенекөл','Мамлютка','Пресновка','Саумалколь','Сергеевка'],
    Карагандинская_область : ['Караганда','Жезказган','Шахтинск','Темиртау','Каражал','Каркаралинск','Абай','Агадырь','Актас','Балхаш','Ботакара','Бухар Жырау','Доскей','Дубовка','Жезды','Карабас','Осакаровка','Приозерск','Сарань','Сатпаев','Топар','Шашубай'],
    Восточно_Казахстанская_область : ['Семипалатинск','Семей','Усть Каменогорск','Атыбай','Аягоз','Асу Булак','Глубоков','Зайсан','Зыряновск','Кабалтау','Катон Карагай','Курчатов','Маканчи','Новая согра','Ново Хайрузовка','Первомайский','Риддер','Серебрянск','Солнечное','Теремшамка','Тугул','Усть Таловка','Шар','Шемонаиха'],
    Западно_Казахстанская_область : ['Актау','Уральск','Аксай','Дарьинск','Жангала','Зачаганск','Казталовка','Каменка','Переметное','Сайхин','Тайпак','Трекино','Федоровка','Чингирлау'],
    Костанайская_область : ['Костанай','Аркалык','Лисаковск','Рудный','Алтынсарино','Аманкарагай','Аулиеколь','Буревестник','Денисовка','Жалгыскан','Житикара','Заречный','Затобольск','Камысты','Карабалык','Карасу','Кушмурун','Новопавловка','Приозёрный','Раздольный','Садовое','Сарыколь','Силантьевка','Тарановское','Узунколь','Федоровка'],
    Павлодарская_область : ['Павлодар','Экибастуз','Аксу','Акжар','Актогай','Ефремовка','Калкаман','Коктобе','Майкаин','Шидерты'],
    Актюбинская_область : ['Актобе','Хромтау','Шалкар','Алга','Батамшинский','Кандыагаш','Карауылкелди','Каргалинское','Мартук','Шубаркудук','Эмба'],
    Атырауская_область : ['Атырау','Ганюшкино','Дамба','Жаскайрат','Индер','Кульсары','Махамбет','Тенгиз'],
    Жамбылская_область : ['Тараз','Шу','Кордай','Айша Биби','Толе би','Ерназар','Жанатас','Каратау','Кулан','Мерке','Мирный','село.Б.Момышулы','Степное','Татты','Шынты'],
    Кзыл_Ординская_область : ['Кызылорда','Байконур','Айтеке Би','Актан Батыр','Аральск','Жанакорган','Жосалы','Казалинск','Макпалколь','Тасбогет','Теренозек','Торебай Би','Шиели'],
    Мангистауская_область : ['Актау','Актобе','Баскудук','Бейнеу','Жанаозен','Умирзак','Форт Шевченко','Шетпе'],
    ЮКО_область : ['Шымкент','Арыс','Кентау','Байдибекский район -Шаян','Казыгуртский район - Казыгурт','Мактааральский район - Жетысай','Ордабасинский район - Темирлановка','Отырарский район - Шаульдер','Сайрамский район - Аксукент','Сарыагашский район - Сарыагаш','Сузакский район - Шолаккорган','Толебийский район - Ленгер','Тюлькубасский район - Турар Рыскулов','Шардаринский район - Шардара'],
};


var pickerDependent50 = myApp.picker({
    input: '#regionpickertwo',
    toolbarCloseText:'закрыть',
    rotateEffect: true,
    formatValue: function (picker, values) {
        return values[0] + ":" + values[1];
    },
    cols: [
        {
            textAlign: 'left',
            values: ['Акмолинская_область','Алматинская_область','Северо_Казахстанская_область','Карагандинская_область','Восточно_Казахстанская_область','Западно_Казахстанская_область','Костанайская_область',
            'Павлодарская_область','Актюбинская_область','Атырауская_область','Жамбылская_область','Кзыл_Ординская_область','Мангистауская_область','ЮКО_область'],
            onChange: function (picker, country) {
                if(picker.cols[1].replaceValues){
                    picker.cols[1].replaceValues(regionVendors[country]);
                }
            }
        },
        {
            values: regionVendors.Акмолинская_область,
            width: 160,
        },
    ]
});

//module search city

//return search refresh
$(".returnsearch").click(function(){


  $(".hidesearch").show(1000);
  $(".hideformsearch").hide();

  var formarrays = ["searchrabota","searchuslugitransp","searchdiski","searchshina","searchzapchspest", "searchzapchlegk","searchspest", "searchavto","searchkv"];








for(var p = 0;p < formarrays.length;p++){


    var inputs = $("#" + formarrays[p]).find("input");

    var selects = $("#" + formarrays[p]).find("select");

    inputs.each(function(index,element){

      var t = $(this).val("");

      //console.log("очищено");



    });


    // selects.each(function(index,element){

    //   var t = $(this).attr("keygens",formarrays[p]);

    //   $(this).val("");

    //   console.log("очищено");


    // });




}

});



var carVendors = {
    Toyota : ['4Runner','Allex','Allion','Alphard','Altezza','Aristo','Aurion','Auris','Avalon','Avensis','Avensis-Verso','Aygo','bB','Blizzard','Brevis','Caldina',
    'Cami','Camry','Camry-Gracia','Camry-Lumiere','Carib','Carina-E','Carina-ED','Carina-2','Cavalier','Celica','Celsior','Century','Ceres','Chaser','Corolla','Corolla-Verso',
    'Corona','Corona-Exiv','Corona-Mark-II','Corona-Premio','Corsa','Cressida','Cresta','Crown','Crown-Majesta','Curren','Cynos','Duet','Echo','Emina','Estima','FJ-Cruiser','Fortuner',
    'Funcargo','Gaia','Granvia','GT86','Harrier','Hiace','Hiace-Regius','Highlander','Hilux','Hilux-Surf','Innova','Ipsum','IQ','Isis','Ist','Kluger','Land-Cruiser','Land-Cruiser-Prado',
    'Levin','Lite-Ace','Lucida','Marino','Mark-II','Mark-X','Master','Master-Ace','Master-Ace-Surf','Master-Surf','Matrix','Mega-Cruiser','Model-F','MR-2','Nadia','Noah','Opa','Paseo','Passo-Sette',
    'Picnic','Platz','Porte','Previa','Prius','Probox','Progres','Pronard','Ractis','Raum','RAV','Regius','Scepter','Sequoia','Sera','Sienna','Sienta','Soarer','Solara','Soluna','Spacio',
    'Sprinter','Sprinter-Carib','Sprinter-Marino','Sprinter<-Trueno','Starlet','Supra','Tacoma','Tercel','Town-Ace','Town-Ace-Noah','Townace','Regius','Tundra','Urban-Cruiser',
    'Venza','Verossa','Verso','Verso','Vibe','Vista','Vista-Ardeo','Vitz','Voltz','Voxy','Will','Windom','Wish','Xa','Yaris'],
    Lexus : ['CT-300','CT-300h','CT-200h','ES','ES-300','ES','200','ES-250','ES-300h','ES-330','ES-350','GS','GS-250','GS','300-GS','300h',
    'GS-350','GS','400-GS','430-GS','450h-GS','460-GX','GX-400','GX-460','GX-470','HS-250h','IS','IS-200','IS-220','IS-250','IS-300','IS-350','IS','LFA-LS','LS-400',
    'LS-430','LS-460','LS-500h','LS-600h','LX','LX-450','LX-470','LX-570','NX','NX-200','NX-200t','NX-300h','RC','RC-300h','RC-350','RX','RX-200t','RX-270','RX-300','RX-330',
    'RX-350','RX-400h','RX-450h','SC','SC-300','SC-400','SC-430'],
    Nissan : ['100NX','100SX','180SX','200SX','240SX','280ZX','300ZX','350Z','370Z','Almera','Altima','Armada','Auster','Avenir',
    'Bassara','Bluebird','Bluebird','Sylphy','Caravan','Cedric','Cefiro','Cherry','Cima','Cube','Elgrand','Expert','Fairlady','Frontier','Fuga','Gloria',
    'GT','Homy','Interstar','Juke','Kubistar','Largo','Laurel','Leaf(electric)','Leopard','Liberty','Lucino','March','Maxima','Micra','Mistral','Moco','Murano','Navara',
    'Note','NP300','NV200','Otti','Paladin','Pathfinder','Patrol','Pick','Up','Pixo','Prairie','Prairie-Joy','Presage','Presea','President','Primastar','Primera','Primera-Camino',
    'Pulsar','Qashqai','Qashqai-Quest','nessa','Rasheen','Rogue','Safari','Sentra','Serena','Silvia','Skyline','Skyline-GT','Stagea','Stanza','Sunny','Teana','Terrano','Terrano-II',
    'Tiida','Tino','Titan','Urvan','Vanette','Versa','Wingroad','X-Trail','Xterra'],
    Honda : ['Accord','Airwave','Ascot','Ascot Innova','Asty','Avancier','Beat','Capa','City','Civic','Civic Ballade','Civic Shuttle','Civic Si','Civic Type R','Concerto',
    'CR V','CR Z','Crossroad','Crosstour','CRX','Domani','Element','Elision','FCX','Clarity','Fit','FR V','Freed','Horizon','HR V','Insight','Inspire','Integra','Jazz','Lagreat',
    'Legend','Life','Logo','Mobilio','NSX','Odyssey','Orthia','Partner','Passport','Pilot','Prelude','Quintet','Rafaga','Ridgeline','S2000','Saber','Shuttle','SM-X','Spike','Stepwgn',
    'Stream','Today','Torneo','Vamos','Vezel','Vigor'],
    Hyundai : ['Accent','Atos','Avanta','Touring','Avante','Azera','Centennial','Chorus','Click','Coupe','Dynasty','Elantra','Equus','Excel','Galloper','Genesis','Genesis','Coupe',
    'Getz','Grace','Grand','Starex','Grandeur','100','200','i10','i20','i30','i40','i50','ix20','ix35','ix55','Lantra','Lavita','Marcia','Matrix','Maxcruz','Pony','Porter','Coupe',
    'SantaFe','Santamo','Solaris','Sonata','Starex','Stellar','Terracan','Tiburon','Trajet','Tucson','Tuscani','Veloster','Veracruz','Verna','XG','XG','30','XG','350'],
    Kia : ['Avella','Delta','Besta','Bongo','Borrego','Cadenza','Capital','Carens','Carnival','Cee','Cee','SW','Cerato','Cerato','Koup','Clarus','Concord',
    'Credos','Credos','II','Elan','Enterprise','Joice','K3','Forte','K5','K7','Lotze','Magentis','Mentor','Mohave','Morning','Opirus','Optima','Picanto','Potencia','Pregio','Pride','Pro','Cee','Quoris',
    'Ray','Regal','Retona','Rio','Roadster','Rocsta','Sephia','Shuma','Sorento','Soul','Spectra','Sportage','Grand','Topic','Venga','Visto'],
    Acura : ['CL','CSX','EL','ILX','Integra','MDX','NSX','RDX','RL','RLX','RSX','SLX','TL','TLX','TSX','ZDX'],
    Audi : ['100','200','80','90','A1','A2','A3','A4','A4-allroad','A5','A6','A6-allroad','A7','A8','A8-Allroad','Cabriolet-Coupe','Q3','Q5','Q7','R8',
    'RS','Q3','RS2','RS3','RS4','RS5','RS6','RS7','Q3','Q5','S1','S2','S3','S4','S5','S6','S7','S8','TT','TTS','V8'],
    Volkswagen : ['Amarok','Beetle','Bora','Caddy','California','Campers','Caravelle','Corrado','Crafter','Derby','Eos','Eurovan','Fox','Gol','Golf','Golf',
    'Country','Golf','Plus','Golf','Sportsvan','Jetta','Kaefer','LT','Lupo','Multivan','Passat','Passat-CC','Phaeton','Pointer','Polo','Polo-Classic','Routan','Santana',
    'Scirocco','Sharan','Taro','Tiguan','Touareg','Touran','Transporter','up','Vento'],
    BMW : ['1-series','114','116','118','120','125','128','130i','135i','2-series','218','220','225','228i','Series','Active','Tourer','3-Series','315','316','318','318i',
    '320','320i','323','324d','325','328','330','335','4-Series','418','420','425','428','430','435','5-Series','518','520','523','524','525','528','530','530','ActiveHybrid',
    '535','540','545','550','6-Series','628','630','633','635','640','645','650','7-Series','725','728','730','732','735','740','745','750','760','8-Series','840','850','i3',
    'i8','GT-Series','Gran-Turismo Series','M1','Coupe','M135i','M235i','M3','M4','M5','M550d','M6','Coupe','Roadster','X5','X6','X-Series','X1','X3','X4','X5','X6','Z-Series',
    'Z3','Z4','Z8'],
    Mercedes_Benz : ['190','AMG-GT','A-Класс','A-140','A-150','A-160','A-170','A-180','A-190','A-200','A-210','A-220','A-250','A-45-AMG','B-Класс','B-150','B-160','B-170','B-180','B-200','B-220',
    'B-250','C-Класс','C-160','C-180','C-200','C-220','C-230','C-240','C-250','C-270','C-280','C-30AMG','C-300','C-32AMG','C-320','C-350','C-400','C-36AMG','C-43AMG','C-450AMG','C-55AMG','C-63AMG',
    'Citan','CE-class','CE-200','CE-220','CE-230','CE-300','CL-class','CL-180','CL-200','CL-220','CL-230','CL-420','CL-500','CL-550','CL-45AMG','CL-55AMG','CL-600','CL-63AMG','CL-65AMG','CLA-class',
    'CLA-180','CLA-200','CLA-220','CLA-250','CLA45-AMG','CLC-160','CLC-180','CLC-200','CLC-220','CLC-230','CLC-350','CLK-class','CLK-200','CLK-220','CLK-230','CLK-240','CLK-270','CLK-280','CLK-320',
    'CLK-350','CLK-430','CLK-500','CLK-55AMG','CLK-63AMG','CLS-class','CLS-250','CLS-280','CLS-320','CLS-350','CLS-400','CLS-500','CLS-550','CLS-55AMG','CLS-63AMG','E-class','E-200','E-220','E-230',
    'E-240','E-250','E-260','E-270','E-280','E-290','E-300','E-320','E-350','E-36AMG','E-400','E-420','E-430','E-50','E-500','E-55','E-60AMG','63AMG','G-class','G-230','G-240','G-250','G-270','G-280',
    'G-290','G-300','G-320','G-350','G-400','G-500','G-55AMG','G-63>AMG','G-65AMG','GL-class','GL-320','GL->350','GL-400','GL-420','GL-450','GL-500','GL-550','GL-55AMG','GL-63AMG','GLA-class',
    'GLA-200','GLA-220','GLA-250','GLA-45AMG','GLC-class','GLC-220','GLC-250','GLC-350','GLE-class','Coupe-GLE','350-GLE','400-GLE','GLE450-AMG','Sport-Coupe-AMG','63-GLE-Coupe','GLK-class','GLK-200',
    'GLK-220','GLK-250','GLK-280','GLK-300','GLK-320','GLK-350','GLS-class','GLS-350d','GLS-400','GLS-500MB','ML-class','100ML','230ML','250ML','270ML','280ML','300ML','320ML','350ML','400>ML',
    '420ML','430ML','450ML','500ML','550ML','55AMG','ML63AMG','R-class','R-280','R-300','R-320','R-350','R-500','R-63AMG','S-class','S-220','S-260','S-280','S-300','S-320','S-350','S-380','S-400',
    'S-420','S-430','S-450','S-500','S-55','S-550','S-600','S-63AMG','S-65AMG','SL-class','SL-280','SL-300','SL-320','SL-350','SL->380','SL-400','SL-420','SL-450','SL-500','SL-55AMG','SL-560',
    'SL60AMG','SL-600','SL-63AMG','SL-65AMG','SL-70AMG','SL-73AMG','SLK-class','SLK-200','SLK-230','SLK-250','SLK-280','SLK-300','SLK-32AMG','SLK-320','SLK-350','SLK-55AMG','SEC-500AMG','SLR',
    'SLS-AMG','Sprinter','V-class','V-200','V-220','V-230','V-250','V-280','Vaneo','Vario','Viano','Vito'],
    Mitsubishi : ['3000GT','Airtrek','ASX','Carisma','Challenger','Chariot','Colt','Cordia','Debonair','Delica','Diamante','Dingo','Dion','Eclipse','Emeraude','Endeavor','Eterna',
    'Eterna','Sava','FTO','Galant','Grandis','GTO','L200','L300','L400','Lancer','Lancer','Evolution','Legnum','Libero','Cargo','Magna','Minica','Mirage','Montero','Montero','Sport',
    'Nativa','Outlander','Pajero','Pajero','Evolution','Pajero','IO','Pajero','Junior','Pajero','Mini','Pajero','Pinin','Pajero','Sport','Proton','RVR','RVR','Open','Gear','RVR','Sport',
    'Gear','Sapporo','Sigma','Space','Gear','Space','Runner','Space','Star','Space','Wagon','Starion','Toppo','Bj','Wide','Tredia','Zinger'],
    Opel : ['Adam','Agila','Ampera','Antara','Arena','Ascona','Astra','Calibra','Campo','Cascada','Cavalier','Combo','Commodore','Corsa','Diplomat','Frontera','GT','Insignia',
    'Kadett','Manta','Meriva','Mokka','Monterey','Monza','Movano','Nova','Omega','Pick-Up','Sportscap','Rekord','Senator','Signum','Sintra','Speedster','Tigra','Vectra','Vita','Vivaro','Zafira'],
    Skoda : ['120','1203','130','135','Citigo','Estela','Fabia','Favorit','Felicia','Felicia-Combi','Forman','Octavia','Pick-up','Rapid','Roomster','Superb','Yeti'],
    Alfa_Romeo : ['145','146','147','155','156','159','164','166','33','4C','75','8C','Competizione','90','Alfasud','Alfetta','Brera','Crosswagon','Sportwagon','Q4','Giulia',
    'Giulietta','GT','GTV','MiTo','RZ','SZ','Spider','Sprint'],
    Aston_Martin : ['DB7','DB9','DBS','V12','Lagonda','One','77','Rapide','V12','Vanquish','V12','Vantage','V8','V8','Vantage','Vanquish','Vanquish','Vantage','Virage'],
    BYD_elect : ['E6','F0','F3','F6','F7','Flyer','G3','G6','i6','L3','M6','S6'],
    Bentley : ['Arnage','Azure','Bentayga','Brooklands','Continental','Flying','Spur','Continental','GT','Continental','Continental','Eight','Flying','Spur','Mulsanne','Turbo','Turbo','RT','Turbo'],
    Bugatti : ['EB','110','Veyron'],
    Cadillac : ['Coupe','De','Ville','Allante','ATS','BLS','Brougham','Catera','CTS','DeVille','DTS','Eldorado','Escalade','Evoq','Fleetwood','LSE','Sedan','de','Ville','Seville','SRX','STS','XLR','XTS'],
    Chery : ['Amulet','A15','Arrizo','Bonus','A13','Bonus','E3','Cowin','CrossEastar','E5','Fora','A21','IndiS','Kimo','A1','M11','QQ6','S21','Sweet','QQ','Tiggo','Very'],
    Chevrolet : ['Alero','Astra','Astro','Avalanche','Aveo','Beretta','Blazer','Camaro','Caprice','Captiva','Cavalier','Celebrity','Celta','Chevelle','Chevy','Van','Citation','Cobalt',
    'Colorado','Corsica','Corvette','Cruze','El','Camino','Epica','Equinox','Evanda','Express','Series','HHR','Impala','K1500','K30','Kalos','Lacetti','Lanos','Lumina','Malibu','Matiz',
    'Monte','Carlo','Monza','Nexia','Niva','Nubira','Orlando','Prizm','Rezzo','10','Sail','Silverado','Sonic','Spark','Sprint','SSR','Starcraft','Suburban','Tacuma','Tahoe','Tavera','Tracker',
    'TrailBlazer','Trans','Sport','Traverse','Uplander','Van','Venture','Viva','Volt'],
    Chrysler : ['200','300C','300M','Aspen','Cirrus','Concorde','Crossfire','Daytona','ES','Grand','Voyager','GS','GTS','Imperial','Intrepid','Le','Baron','LHS','Nassau',
    'Neon','New','Yorker','Pacifica','Prowler','PT','Cruiser','Saratoga','Sebring','Stratus','Town','Country','Valiant','Viper','Vision','Voyager'],
    Citroen : ['CV','AX','Berlingo','BX','Crosser','Elysee','C1','C15','C2','C3','C3','Picasso','C4','C4','Aircross','C4','Cactus','C4','Picasso','C5','C6','C8','CX','DS3','DS4',
    'DS5','Evasion','Grand','C4','Picasso','GSA','Jumper','Jumpy','Nemo','SAXO','SM','Visa','Xantia','XM','Xsara','Xsara','Picasso','ZX'],
    Daewoo : ['Brougham','Cielo','Damas','Espero','Evanda','Gentra','Kalos','Korando','Lacetti','Lanos','Leganza','Lemance','Lublin','Magnus','Matiz','Matiz','Creative','Musso',
    'Nexia','Nubira','Prince','Racer','Rezzo','Tacuma','Tico','Tosca','Winstorm'],
    Daihatsu : ['Altis','Applause','Boon','Charada','Charmant','Copen','Cuore','Esse','Feroza','Grand','Move',
    'Leeza','Materia','Max','Mira','Move','Naked','Pyzar','Re','Go','Rocky','Rugger','Sirion','Storia','Tanto',
    'Terios','Trevis','Wildcat','YRV'],
    Dodge : ['Avenger','Caliber','Caravan','Challenger','Charger','Dakota','Dart','Daytona','Durango','Dynasty','Grand',
    'Caravan','Intrepid','Journey','Magnum','Monaco','Neon','Nitro','RAM','Shadow','Spirit','Sprinter','Stealth','Stratus','Viper'],
    DongFeng : ['A30','A60','AX7','EQ6380','H30','Cross','L60','MPV','S30','S60','ZNA'],
    FAW : ['6390E','A6','Audi100','Besturn','B50','Besturn','B70','Besturn','X80','Bora','CA1021u2','CA6350','CA6371A4','CA6390B5',
    'CargoVan','City','Golf','Jetta','Jinn','Landmark','Oley','S80','V2','V5','V80','Vita','6371'],
    Ferrari : ['208','246','250','275','288','308','328','330','348','360','365','400','412','456','458','Italia','512','550','575','599','GTB','612','750','California','Daytona','Dino','GT4','Enzo',
    'Ferrari','F355','F40','F430','F50','FF','Mondial','Superamerica','Testarossa'],
    Fiat : ['124','126','127','130','131','500','500L','Albea','Barchetta','Brava','Bravo','Cinquecento','Coupe','Croma',
    'Dino','Doblo','Ducato','Fiorino','Freemont','Grande','Punto','Idea','Kartal','Linea','Marea','Marengo','Multipla','Palio',
    'Panda','Punto','Qubo','Regata','Ritmo','Scudo','Sedici','Seicento','Siena','Spider','Europa','Stilo','Strada','Tempra','Tipo',
    'Ulysse','UNO'],
    Ford : ['Aerostar','Aspire','Max','Bronco','Max','Capri','Contour','Cougar','Courier','Crown','Crown','Victoria','350',
    'Econoline','Econovan','EcoSport','Edge','Escape','Escort','Excursion','Expedition','Explorer','Express','150','250','350',
    '450','650','Fairlane','Falcon','Festiva','Fiesta','Five','Hundred','Flex','Focus','Focus','Max','Freda','Freestyle','Fusion',
    'Galaxy','Granada','Grand','Marquis','GT','KA','Kuga','Lazer','LTD','Maverick','Mercury','Mondeo','Mustang','Orion','Probe',
    'Puma','Ranger','Max','Scorpio','Shelby','Sierra','Taunus','Taurus','Telstar','Tempo','Thunderbird','Tourneo','Transit','Transit',
    'Connect','Windstar'],
    GMC : ['Acadia','Conoma','Denali','Envoy','Jimmy','Safari','Savana','Sierra','Sonoma','Suburban','Syclone','Terrain','Typhoon',
    'Vandura','Yukon'],
    Geely : ['Beauty','Leopard','CK','CK1','Emgrand','EC7','Emgrand','EC8','Emgrand','X7','FC','GC6','GC7','Haoquing','Haoquing','300','LC','LC','Cross',
    'Maple','Meirie','MK','MK-Cross','Otaka','SC7','Uliou','Vision'],
    Hummer : ['H1','H2','H3'],
    Infiniti : ['EX','EX25','EX35','EX37','FX','FX35','FX37','FX30d','FX45','FX50','G20','G25','G35','G37','I30','I35','J30','JX35','M25','M35','M37',
    'M45','M56','Q30','Q45','Q50','Q60','Q70','QX','QX4','QX30','QX50','QX56','QX60','QX70','QX80'],
    Isuzu : ['Amigo','Ascender','Aska','Axiom','Bighorn','Campo','Max','Gemini','Hi','Lander','Midi','Mu','Pa','Nero','Piazza',
    'Pick','Up','Rodeo','Trooper','VehiCross','Wizard'],
    ИЖ : ['2125','2125','2126','2715','2716','2717'],
    JMC : ['Baodian','Landwind','X6'],
    Jaguar : ['I Type','Pace','Type','MK','II Type','Sovereign','Type','XE','XF','XFR','XJ','XJ12','XJ40','XJ6','XJ8','XJR','XJS','XJSC','XK','XKR'],
    Jeep : ['Cherokee CJ','Comanche','Commander','Compass','Grand Cherokee','Liberty','Patriot','Renegade','Wagoneer','Willys','Wrangler'],
    Lamborghini : ['Aventador','Countach','Diablo','Espada','Gallardo','Huracan','Jalpa','LM002','Miura','Murcielago','Reventon','Urraco'],
    LandRover : ['Defender','Discovery','Discovery-Sport','Evoque','Freelander','LR2','LR4','RangeRoverSport'],
    Lifan : ['620','Breez','Cebrium','Celliya','Smily','Solano','X50','X60'],
    Lincoln : ['Aviator','Continental','LS','Mark','Mark VIII','MKS','MKX','MKZ','Navigator','Town','Car','Zephyr'],
    Lotus : ['340','Cortina','Elan','Elise','Elite','Esprit','Europa','Evora','Excel','Exige','Super','Seven','V8'],
    ЛУАЗ : ['967','969'],
    Maybach : ['57','62'],
    Santana : ['Anibal'],
    Saturn : ['Astra','Aura','Ion','LS','LW','Outlook','Relay','SC','Sky','SL','SW','Vue'],
    Seat : ['Alhambra','Altea','Arosa','Cordoba','Exeo','Fura','Ibiza','Inka','Leon','Malaga','Marbella','Rondo','Terra','Toledo'],
    Smart : ['City','Crossblade','ForFour','ForTwo','Roadster'],
    SsangYong : ['Actyon','Actyon-Sports','Chairman','Estano','Istana','Korando','Korando-Family','Kyron','Musso','Musso-Sport',
    'Nomad','Rexton','Rodius','Stavic'],
    Subaru : ['Alcyone','Baja','BRZ','Domingo','Exiga','Forester','Fuji','Impreza','Impreza-XV','Justy','Legacy','Legacy-Grand','Wagon',
    'Legacy-Lancaster','Leone','Libero','Lucra','Outback','Pleo','Rex','Sambar','SVX','Trezia','Tribeca','Vivio','WRX','XT','XV'],
    Suzuki : ['Aerio','Alto','Baleno','Cappuccino','Carry','Celerio','Cervo','Cultus','Ertiga','Escudo','Esteem','Every','Forenza','Fronte',
    'Grand','Vitara','Ignis','Jimny','Kei','Kizashi','Landy','Liana','MR','Wagon','Reno','Samurai','Sidekick','Solio','Spacia','Splash','Swift',
    'SX4','SX4-cross','Vitara','Wagon','Wagon-90','XL7'],
    Tesla_elect : ['Model-S','Model-X','Roadster'],
    Vortex : ['Corda','Estina','Tingo'],
    Volvo : ['240-Series','260-Series','300-Series','440','460','480','740','760','850','850T5','940','960','C30','C70',
    'S40','S60','S70','S80','S90','V40','V50','V60','V70','V70-XC','V80','V90','XC60','XC70','XC90'],
    Газ : ['2310','2401','24011','2402','2403','2407','2410','2411','2412','2413','2414','2417','2477','2705','2752','3101','3102','31022',
    '310221','31029','3110','31105','32213','32215','3302','33023','Siber','21R32','10','NEXT','22R32','20','NEXT'],
    ВАЗ : ['2101','2102','2103','2104','2105','2106','2107','2108','2109','21099','2113','2114','2115LADA','110','2110','2111','2112LADA-Priora',
    '2170','2171','2172','2172-LADA-Kalina','1117','1118','1119-LADA-Kalina','2192','2194-LADA-Granta','2190','2191-LADA-Largus',
    'Largus-R90','Largus-F90','1111','11113','1922','2121','2123','2129','2131','2329','2120','Vesta'],
    ВИС : ['LADA-4x4','234600','234610','234500','234700-LADA-Samara','234900-LADA-Granta'],
    Mazda : ['121','323','616','626','929','Atenza','Axela','AZ','AZ-Offroad','AZ-Wagon','AZ1','AZ3','series','Biante','Bongo',
    'BT','50','Capella','Carol','Cosmo','Cronos','CX','Demio','Efini','MS8','Efini','MS9','Etude','Eunos','500','Eunos','800','Eunos',
    '900','Eunos','Presso','Eunos','Roadster','Familia','Lantis','Levante','Luce','Marvi','Millenia','MPV','MS3','MS6','MS8','MS9','MX3',
    'MX5','MX6','MX8','Navajo','Persona','Premacy','Proceed','Protege','Roadster','RX6','RX7','RX8','Sentia','Speed6','Tribute','Verisa',
    'Xedos','Xedos6','Xedos9'],
    Mini : ['Cabrio','Clubman','Clubvan','Countryman','Coupe','Hatch','Paceman','Roadster'],
    Peugeot : ['1007','106','107','2008','204','205','206','207','208','3008','301','304','305','306','307','308','309','4007',
    '4008','405','406','406-Coupe','407','408','5008','505','508','604','605','607','806','807','Bipper','Tepee','Boxer','Expert','Partner','RCZ'],
    Plymouth : ['Acclaim','Breeze','Grand','Voyager','Laser','Neon','Prowler','Sundance','Voyager'],
    Pontiac : ['6000','Aztec','Bonneville','Fairfly','Fiero','Firebird','G6','Grand-AM','Grand-Prix','GTO','LE','Mans','Montana',
    'Phoenix','Solstige','Sunbird','Sunfire','Targa','Torrent','Trans','Sport','Vibe'],
    Porsche : ['911-Carrera','918','924','928','944','968','Boxster','Cayenne','Cayman','Macan','Panamera'],
    Renault : ['11','12','14','16','18','19','20','21','25','30','Alpine','A110','Alpine','A310','Alpine','V6','Avantime',
    'Boxer','Captur','Clio','Duster','Espace','Express','Fluence','Fuego','Kangoo','Koleos','Laguna','Latitude','Logan',
    'Lutecia','Mascott','Master','Megane','Modus','Rapid','Safrane','Sandero','Sandero','Stepway','Scenic','Symbol','Trafic',
    'Twingo','Twizy','Vel','Satis','ZOE'],
    Rover : ['200','213','214','216','220','400','416','420','45','600','618','620','623','75','800','820','825','827','Austin','Maestro','MGF','Mini','Montego','200','213','214','216','220','400',
    '416','420','45','600','618','620','623','75','800','820','825','827','Austin','Maestro','MGF','Mini','Montego'],
    Rolls_Royce : ['Corniche','Ghost','Park','Ward','Phantom','Silver','Cloud','Silver','Dawn','Silver','Seraph','Silver','Shadow',
    'Silver','Spirit','Silver','Spur','Wraith'],
    Saab : ['2X','7X','90','900','9000','96','99'],
    Samsung : ['QM5','SM3','SM5','SM7'],
    УАЗ : ['967','969'],
    ЗАЗ : ['1102','1103','1105','1125','1140','968','Chance','Forza','Sens','Vida'],
    Retro_Машины : ['Austin-10','Austin-FX4','Barkas','B1000','BMW-321','Buick-Special','Buick-Super','Convertible','Cadillac-DeVille',
    'Cadillac-Eldorado','Chevrolet-Bel-Air','Chrysler-Imperial','DeSoto','Custom','Ford-Model','Ford-Taunus','Ford-Tudor','Lincoln-Continental',
    'Mazda-1300','Mercedes-Benz-220SE-W111','Packard-120-Custom','Packard-180-Super-Eight','Packard-300-Packard-Custom','Clipper','Plymouth-Fury',
    'Rolls-Royce','Silver-Shadow','Simca-Horison','Skoda-1201','Steyr-50','Willys','Skoda-Octavia-Super','12','13','14',
    '20','21','22','24','67','69','965','966','111','114','117','110','400','401','402','403','407','408','423','434'],



};
var pickerDependentsearch = myApp.picker({
    input: '#picker-dependentsearch',
    toolbarCloseText:'закрыть',
    rotateEffect: true,
    formatValue: function (picker, values) {
        return values[0] + ":" + values[1];
    },
    cols: [
        {
            textAlign: 'left',
            values: ['Toyota', 'Lexus','Nissan', 'Honda', 'Hyundai', 'Kia' ,'Acura' ,'Audi', 'Volkswagen', 'BMW' ,'Mercedes_Benz' ,
            'Mitsubishi', 'Opel' ,'Skoda' ,'Alfa_Romeo', 'Aston_Martin', 'BYD_elect', 'Bentley', 'Bugatti' ,'Cadillac', 'Chery', 'Chevrolet',
            'Chrysler', 'Citroen','Daewoo', 'Daihatsu', 'Dodge', 'DongFeng', 'FAW', 'Ferrari', 'Fiat', 'Ford', 'GMC', 'Geely', 'Hummer',
             'Infiniti', 'Isuzu', 'ИЖ', 'JMC', 'Jaguar', 'Jeep', 'Lamborghini', 'LandRover', 'Lifan', 'Lincoln', 'Lotus', 'ЛУАЗ', 'Maybach',
              'Santana', 'Saturn', 'Seat', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Tesla_elect', 'Vortex', 'Volvo', 'Газ', 'ВАЗ', 'ВИС',
              'Mazda', 'Mini', 'Peugeot', 'Plymouth', 'Pontiac', 'Porsche', 'Renault', 'Rover', 'Rolls_Royce', 'Saab', 'Samsung',
              'УАЗ', 'ЗАЗ', 'Retro_Машины'],
            onChange: function (picker, country) {
                if(picker.cols[1].replaceValues){
                    picker.cols[1].replaceValues(carVendors[country]);
                }
            }
        },
        {
            values: carVendors.Toyota,
            width: 160,
        },
    ]
});


var pickerDependentsearch2 = myApp.picker({
    input: '#picker-dependentsearchzapch',
    toolbarCloseText:'закрыть',
    rotateEffect: true,
    formatValue: function (picker, values) {
        return values[0] + ":" + values[1];
    },
    cols: [
        {
            textAlign: 'left',
            values: ['Toyota', 'Lexus','Nissan', 'Honda', 'Hyundai', 'Kia' ,'Acura' ,'Audi', 'Volkswagen', 'BMW' ,'Mercedes_Benz' ,
            'Mitsubishi', 'Opel' ,'Skoda' ,'Alfa_Romeo', 'Aston_Martin', 'BYD_elect', 'Bentley', 'Bugatti' ,'Cadillac', 'Chery', 'Chevrolet',
            'Chrysler', 'Citroen','Daewoo', 'Daihatsu', 'Dodge', 'DongFeng', 'FAW', 'Ferrari', 'Fiat', 'Ford', 'GMC', 'Geely', 'Hummer',
             'Infiniti', 'Isuzu', 'ИЖ', 'JMC', 'Jaguar', 'Jeep', 'Lamborghini', 'LandRover', 'Lifan', 'Lincoln', 'Lotus', 'ЛУАЗ', 'Maybach',
              'Santana', 'Saturn', 'Seat', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Tesla_elect', 'Vortex', 'Volvo', 'Газ', 'ВАЗ', 'ВИС',
              'Mazda', 'Mini', 'Peugeot', 'Plymouth', 'Pontiac', 'Porsche', 'Renault', 'Rover', 'Rolls_Royce', 'Saab', 'Samsung',
              'УАЗ', 'ЗАЗ', 'Retro_Машины'],
            onChange: function (picker, country) {
                if(picker.cols[1].replaceValues){
                    picker.cols[1].replaceValues(carVendors[country]);
                }
            }
        },
        {
            values: carVendors.Toyota,
            width: 160,
        },
    ]
});


var pickerDevice8 = myApp.picker({
    input: '#picker-type88',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['белый','черный','серый','серебристый','серебристый','синий','голубой','зеленый','красный','бордовый','оранжевый','розовый','бежевый','желтый','золотистый','коричневый','фиолетовый']

        }
    ]
});

var pickerDevice8 = myApp.picker({
    input: '#picker-type888',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['белый','черный','серый','серебристый','серебристый','синий','голубой','зеленый','красный','бордовый','оранжевый','розовый','бежевый','желтый','золотистый','коричневый','фиолетовый']

        }
    ]
});



var pickerDevice = myApp.picker({
    input: '#picker-sdependentsearch',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['Abbey','ABI_Jubilee','Ackermann','ADR_Trailers','Adria','Aichi','Airman','Alloy','Ammann','ANT','Asia','Atlant','Atlas',
            'Atlet','Avant','Avia','Avondale','Bailey','Balkancar','Baw','Beifang_Benchi','Bell','Bergland','Blumhardt','Bobcat','Bomag','Bova',
            'Branson','Bravis','Brenner','Broshuis','Buccaneer','Buerstner','BULL','Bulldog_Trailers','Burg','Caiman','CAMC','Camper','Camro',
            'Caravelair','Carmix','Carson','Case','Caterpillar','Changchun','Changlin','Chateau','Chehvrolet','Chenggong','Chereau','Chery',
            'China_First_Automobile_Group','CHOICE','CIMC','Citroen','Clark','CNH','Coleman','Combilift','Compass','Craftsman','Daehan','NF150',
            'Daenong','Daewoo','DAF','Daihatsu','Dalian','Dasan','Deadong','Demag','Terex','Denyo','Dethleffs','Dieci','Digger','Dimex','Dongfeng',
            'Donghae','Dongyang','Doosan','Doosan','Daewoo','Dorsey_Trailers','Dressta','DVRV','Dynapac','Eduard','Elddis','Elephant',
            'Enxin_Enterprise','HEX9400GYY','EP','Es','Ge','Everdigm','Everlast','30','Fassi','Faun','FAW','Fendt_Xaver','Fiat','Fiat',
            'Hitachi','Fiori','First_Loader','Fleetwood','Fliegl','GmBH','Ford','Forway','Foton','Freightliner','Fruehauf','Fuchs','Fudzi',
            'Fuji','Heavy','Fukai','ZL','926','Furukawa','Gehl','General_Trailers','Genie','Gensco','Goldhofer','Gray','Adams','Great','Dane',
            'Greatwall','Groenewegen','Gros','Grove','Grunwald','GT7','Hagglunds','BV','206','Haihong','Halla','Hamm','Hangcha','Hania','Hanix',
            'Hankook','Hanshin','Hansin','Hanta','Haomei','Hartung','Hayazaki','HBXG','Heli','Hengte','Hiab','Hidromek','Higer','Hino','Hinomoto',
            'Hitachi','Hobby','Prestige','Holmer','Honda','Horyong','Howo','Huanda','Humbaur','Hydrema','Hyster','Hyundai','HZM','IFA','IHI',
            'Ikarus','International','Iseki','Isuzu','Iveco','Jac','Jacto','JBC','JCB','Jian','Cheng','Jinbo','Jinwoo','JMC','John','Deere',
            'Jonyang','Jotec','Jun','Jin','Jungheinrich','Kafi','Kaiser','Kalmar','Kanglim','Karosa','Kato','Kawasaki','KCP','Kelberg','Kenworth',
            'Kia','King','Long','KIP','Knaus','Country','Kobelco','KOBIT','Kogel','Komatsu','Korea','Trailer','Kramer','Krone','Kubota','Kukji',
            'Kyungwon','Lamberet','Lay','Mor','LeciTrailer','LG','Liebherr','Linde','Lishide','LiuGong','LMC','Locatelli','Locust','Longgong',
            'Lonking','Lord','Muensterland','Luna','Luyang','Mack','Maeda','Mag','Magni','MAN','Manac','Auto','Manitou','Manitowoc','Marauder',
            'Marcel','Boschung','SA','Marshall','Masalta','Massey','Ferguson','Max','Maximal','Maxus','Mazda','Mecbo','Meiwa','Menci','Mercedes',
            'Benz','Merlo','Mikasa','Mitsuber','Mitsubishi','Mitsui','Montenegro','Morooka','MST','Mudan','Multix','Mustang','Narko','Nasteveya',
            'NAVECO','NEO','Neoplan','New','Holland','Nichiyu','Niewadow','Niigata','Nippon','Sharyo','Nissan','Nissha','North','Benz','Novas',
            'Opel','Movano','Ormig','Orteco','Pacton','Palazzani','Palfinger','Panav','Peterbilt','Peugeot','Piccini','Pilgrim','International',
            'PONSSE','Porsche','Pramac','Prestige','Putzmeister','Reich','Renault','Rocla','Sakai','Samro','Samsung','Sany','Saton','SB','Trailer',
            'Scania','Schmitz','Schwarzmuller','SDLG','Seddon','Atkinson','SEM','Sennebogen','Sermac','Setra','Shaanxi','Shandong','Shanghai',
            'Shanghai','Pengpu','Shanlin','Shantui','Shaolin','Shehwa','ShenLong','Shibaura','Shifeng','Shindaiwa','Shinko','SibGrand','Sinomach',
            'Sinoway','Sirion','Sisu','Skyline','Soosan','SOR','Southwest_Vehicles','Sprite','SsangYong','ST','Stalowa','Wola','Star','Starcraft',
            'Sterckeman','Steyr','Still','Subaru','Sumitomo','Sungari','1010E','Sunward','Suzuki','Svetruck','Swift_Challenger','Symtec','SZM',
            'Tabbert','Comtessa','Tacomi','Tadano','Takeuchi','Tarsus','TATA_697_NA','Tatra','Tatsuno','TCM','TEC','Teka','Terex','Terex','Bendini',
            'Tesab','TFN','Thomas','Tiangong','Tiema','Tiki','Tissan_Cabstar','Tokyi','Tokyu','Tongyada','Tota','Toyo','Toyota','Trail_King',
            'Trailmobil','Trailor','Trigano_Chantilly','Trouillet','TSR','UD','Trucks','UNC','Unic','Unilift','Unimog','Utilev','Utility','Valtra',
            'Vanhool','Venieri','Vermeer_D24X40A','Viking','Volkswagen','Volvo','VP','Wabash','Wacker','Warynski','Wecan','Weili','Weippert',
            'Weituo','Wielton','Wiggins','Wilk','Deluxe','XB','XCMG','XGMA','Xiamen_Golden_Dragon','Xilin','Xingtai','Xplore','Xuda','Yale',
            'Yamaha','Yanmar','Yigong','YTO','Yuejin','Yusoki','Yutong','Zemag','Zhong','Tong','Zoomlion','90','6476','3575','55','10','81021',
            '_8129','40912','01','150']
        }
    ]
});



var pickerDevice = myApp.picker({
    input: '#picker-sdependentsearchshina',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['любая марка','Белшина','Алтайшина','Арктиктранс','Волтайр','Воронежшина','Днепрошина','Кама / Нижнекамскшина','КШЗ','Мастер-Спорт','МШЗ','Омскшина','Уралшина','ЯМЗ','Cordiant','Matador','Accelera','Achilles','Aderenza','Advance','Aeolus','Agate','Alliance','Altenzo','AmberWay','America','AMP_M','T_Terrain_Master','Amtel','Anjie','F811','Annaite','386','Antares','Antyre','Aotel','Aplus','Apollo','Arctic_Claw','Winter_Xsi','Armour','Armpower','Atlas','Atturo','Aufine','Auplus','Aurora_Tire','Austone','Austyre','Autogrip','Autoguard','Avatyre_Freeze','Avon','Barum','BFGoodrich','Big_O_Tires_Big_Foot_A','T_All_Terrain','Blacklion','Blackstone','Blue','Streak','Bontyre','Boto','Brasa','Bridgestone','Capitol','Carbon_Series','CEAT','Chengshan','Clear','Comforser','Constancy','Continental','Contyre','Cooper','Cordiant','Cordovan','Crosswind','Daewoo','Dayton','Dean_Tires','Debica','Deestone_D','102','Delfin','Delinte_Thunder','Dextero','Dick_Cepek','Diplomat','Dmack','Doral','Double_Coin_RLB450','Doublestar','Dunlop','Duro','Durun','Effiplus','Eldorado','ESA','Tecar','Eurotec','Euzkadi','Evenking','Evergreen','EXTREME_Performance_tyres','Falken','Farroad','Fate','Federal','Fedima','Fenglun','FL268','Fenix','Fierce','Finixx','Firestone','Firststop','Flamingo','Force','Formula','Fortio_WN','01','Fortuna','Fulda','Fullrun','FullWay','Fuzion','General_Tire','Geostar','Geotrac','Gislaved','Giti','Goform_W705','Gold_Partner','Goodride','Goodtyre_YB258','Goodyear','GrandTour','Green_Dragon','GreenDiamond_C790','Gremax','Gripmax','GT_Radial','Haida','HanKang','Hankook','Headway','Hercules','Hero','Herovic','Herse','Hifly','Hilo','Hoosier','Horizon','Imperial','Indoradial','Infinity','Innova','Insa','Turbo','Interco','Interstate','Ion_Alloy','Ironman','Jetzon','Tire','Jinyu','Joyroad','Kapsen','Kelly','Kenda','Kenex','Kinforest','King_Meiler','Kingrun','Kingstar','Kleber','Kormoran','Koryo','Kumho','Lakesea','Lander_Sea','Landsail','Lassa','Lexani','LingLong','Litio','Long','March','Mabor','Maloya','Marangoni','Marshal','Mastercraft','Matador','Maxgrade','Maxtrek','Maxxis','Mayrun','Medeo','Mentor','Merit','Meteor','Michelin','Mickey','Thompson','Milestone','Millennium','Minerva','Mitas','MotoMaster','Motrio','Multi','Mile','Nankang','Neuton','Nexen','Nitto','Nokian','NorTec','Northtrek','Novex','Green','Otani_King_Cobra_Extreme','Ovation_VI','702','Pace','Parnelli_Jones_Dirt_Grip','Passage','Petlas','Pinso_PS','91','Pirelli','Pit_Bull','Platin','Pneumant','PointS','Power_Tire','Premiorri','Presa','President','Prestivo','Primewell','Pro_Comp','PROFIL','Radar','Rapid','Regal','Remington_Tire','Rhino_King','Riken','Roadguider','Roadshine','Roadstone','Rockstone','Rosava','Rotalla','Rotex','Runway','Saffiro','Sagitar','Sailun','Satoya','Sava','Semperit','Silverstone','Sime_Tyres','Simex','Solideal','Sonar','Sonny','Sportiva','Sportrak_BYD68','Sprut','Starfire','Stark_Proto','Starperformer','Strata_ZENO_UHP','Stunner','Sumitomo','Sumo','Sunew','Sunfull','Sunitrac','Sunny','Suntek','Superhawk_HK867','Superia','Superstone_Crocodile_Xtreme','Syron','Targum','Techking','Telstar_Tire','Thunderer','Tianfu','Tigar','Toryo','Toyo','Tracmax','Transtone','Trayal','Trazano','Trelleborg','Tri_Ace','Triangle_Group','Tristar','Tunga','TyRex','shield_WS118','Uniglory','Uniroyal','Universal','Viatti','Viking','Vredestein','VSP','Wanli','Warrior_Fluent','R21','Waynner_WIN12','Westlake_Tyres','Wind','Power','Winter_Tact','YellowSea','Yokohama','Zeetex','Zeta','Zetro']
        }
    ]
});


var pickerDevice = myApp.picker({
    input: '#picker-sdependentsearchdiski',
    toolbarCloseText:'закрыть',
    cols: [
        {
            textAlign: 'center',
            values: ['все модели','4_Racing','4Go','5ZIGEN','885','Tech','ABT','AC_Schnitzer','Ace','ADR_Design','Advan','Advanti','AEZ','AGForged','AITL','Akito','Alba','Alcasta','Aleks','Alessio','Alfa','Romeo','Almex','Alpina','Alster','Aluchrome','Alutec','AME','American','Racing','Amistad','AMS','Anhelo','Antera','Anzio','Wheels','Apollo','AQUA','Arcasting','Artec','Arteria_Strada_Splendor','ASA_Wheels','Asanti','Asiss','ASW_Prestige','ATP','ATS','Audi','Avangrade','Avarus','AVENUE','AVS','AWS','AZ','Azect','Azev','BADX','BANTAJ','Banzai','Barracuda','BAZO','BBS_RS','Berg','Beyern','Black_Racing','Black_Rhino','Blade','BLEST_Bahnsport','Blitz_Techno','Speed','Blows','Bluege','BMF','BMW_Racing_Dynamics','Bolzanos','Borbet','Brabus','Bradley','Breyton','Bridgestone','Brock','BSA','Buddy_Club_P1','BWR','Cadillac','CAM','Caractere','Carlsson','Carre','Carving_head','40','Carwel','Catwild','CEC_Wheels','Centerline_Wheels','Chevrolet','Clyde','CMS','Compomotive','Conti','Coventry','Crimson','Cross_Street','CST_Zero','Daewoo','Nexia','Daihatsu','Dawning','Motorsport','Decorsa','Delta_DL','Desmond','Detata','Devino','DEZENT','Diablo','Wheels','DIAL','Diamond','Dick','Cepek','Dizzard','DJ_WHEELS','Dotz','Dropstars','Dunlop','EMR','Enkei','Ensure','Enzo','Erglanz','Etabeta','Eurodisk','Eurosport','Extreme','Shina','Fabulous','Ferrari','Final_Speed','Fondmetal','Ford','Forgiato','Forsage','Fox_FX2','FR_Design','Freemotion','Fujibond','Futek','Corporation','Mach','Square','General_Motors','Gialla','Gianelle','GIANNA','Giovanna','GodFather','GR','Grass','Grenade_GX','01','GSI','Hamann','HART','Hayes_Lemmerz','HD','Wheels','Helo','HI','TECH','Hipnotic','Wheels','Honda','Mugen','Hot_Stuff','HP_Design','HRE_Performance','HTL','Hummer','Hyundai','iFree','IJITSU','Ikon','Wheels','Impul','Incubus','Incurve','Wheels','Infinity','Ion','Isuzu','IWheelz','Jaguar','Jawa','JD','Jeep','JT','Racing','Speed','K7','Kahn','KFZ','KIA','Kisna','KMC','Koko_Kuture','Konig','Kormetal','Kosei','Kronprinz','Kyoho_Steiner','Kyowa','Connection','Larex','Lawu','League','Leasing','Leben','LegeArtis','Legzas','Lehrmeister','Lenso','Lexani','Lexus','LF_Dick','Light_Sport_Wheels','Linea','Liso','Lodio_Drive','Lorenso','LORENZO','Lowenhart','LSZ','Luftbahn','Lumarai','LX','Mode','z_SPEED','Magline','Magnetto_Wheels','Mak','Malyce_Legendary','Mamba_OFF_Road','Manaray','Mandrus','Marcello','MAXX_Wheels','Mayhem','Mazda','Mefro','Mercedes_AMG','MHT','Mi','tech','Mickey_Thompson','Milli','Miglia','MIM','Mitsubishi_Rallyart','MKW','MKW_OFF','ROAD','MLJ','MML','Modellista','Modular_Society','MOMO','Monte_Fiore','Monza_Warwick','Motec','Motegi','MOTO_Metal','MPS','MSW','MTT_Racing','MVF','Next','Nexta','Ningbo','Nissan_Nismo','Nitro','Noble','NORDWAY','Norfolk','NZ_Wheels','Green','Oefunger','Off','Road','Wheels','Opel','Oxigin','OZ','PANTHER','PDW_Wheels','Peugeot','PIAA','Porsche','PRD','Primo','Pro_Comp','ProDrive','Proma','PTW','Steel','Race_Ready','Racing_Hart','Radius','Raiden','Range_Rover','Rapid','Ravrion','RAYS','RC_Design','Red_Wheel','Redbourne','Renault','Replay','Replica','RepliKey','Reverline','Rial','Riverside','Rodeo_Drive','Romagna_Ruote','Ronal','Rondell','Roner','Rota','Rotiform','Royal_Wheels','Rozest','RR','RS_Wheels','Russtec','RW','Sakura_Wheels','Salita','Sanfox','Sant','Schmidt','Sein','SEYEN','SH','SHLK','Skoda','Slik','SLK','Sparco','Speedline','Spirits_Sagest','Sport_Technic','Sportmax_Racing','SportWay','SRD_Tuning','SsangYong','SSR','SSW','Stalker','Starform_Basel','Stark','Steel_Wheels','Steinmetz','Stich','Precious','Stilauto','Stonewell','Storm_Wheels','Stranger','Strut','Subaru_STI','Suzuki','SW','Sword','Syms_SRW','C1','Tailong','Team_Dynamics','Tech','Line','Technocast_Corsia','Tezzen','TGRACING','TIS','TMW','Tomason','TOMS','Toora','Top_True','Topy','Touchdown','Toyota','TRD','Trebl','TRW','TSW','Tuff_A','Tunzzo','ULTRA','Ultraleggera','URAS','Urban_Racing','VAGGIO','Valbrem','Valente','VCT','Venerdi','Verde','Vertini','Vianor','Victor_Equipment','Violento','Volkswagen','Voltec','Volvo','Vorxtec','Vossen','Wald','Watanabe','Weds','Wheelegend','Wheelworld','Wibram','Wiger','Winners','Winning_Street_Wheel','WOLF_Wheels','Work','Worx','Wrest','WSP','trike','XD_Series','Xinfa','XXR','Yamato','Yokatta','Yokohama_Laycea','YST','Yueling_wheels','Zack','Zauber','Zeit','Zent','Zephyr','Zepp','ZEPPELIN_Prestige','Zina','Zinik','Zorat_Wheels','Zormer','Zumbo_Wheels','ZW','ZY','412']
        }
    ]
});







//module search category








//module view ob page

//rab5
//xx
myApp.onPageBeforeAnimation('n1', function (page) {



setTimeout(function(){


var newcashid = globalvaluegetlocalob;

var ob = localStorage.getItem("ob" + newcashid);

//xx

if(ob){
    var obj = jQuery.parseJSON(ob);
    var arrayone = obj[0];
    var arraytwo = obj[1];
    var arraythree = obj[2];




//text

              var zagolovok = arrayone[globalvalue].zagolovok;
              var osnovnaya_sena = arrayone[globalvalue].sena;
              var valyuta = arrayone[globalvalue].valyuta;
              var oblast = arrayone[globalvalue].strana;
              var city = arrayone[globalvalue].city;
              var id = arrayone[globalvalue].id;
              var telephone = arrayone[globalvalue].telephone;
              var email = arrayone[globalvalue].email;
              var dostavka = arrayone[globalvalue].dostavka777;
              var opisanie = arrayone[globalvalue].opisanie;
              var sostoyanie = arrayone[globalvalue].res_peremen_string1;
              var date_start_aux777 = arrayone[globalvalue].date_start_aux777;
              var date_finish_aux777 = arrayone[globalvalue].date_finish_aux777;
              var selev_auditor777 = arrayone[globalvalue].selev_auditor777;
              var kol_uchastn777 = arrayone[globalvalue].kol_uchastn777;
              var watsapp = arrayone[globalvalue].watsapp;
              var viber = arrayone[globalvalue].viber;
              var obmen = arrayone[globalvalue].obmen;
              var instagram = arrayone[globalvalue].instagram;
              var vk = arrayone[globalvalue].vk;
              var skype = arrayone[globalvalue].skype;
              var mail = arrayone[globalvalue].mail;
              var google = arrayone[globalvalue].google;
              var other = arrayone[globalvalue].other;
              var chastn_liso = arrayone[globalvalue].chastn_liso;
              var companiya = arrayone[globalvalue].kompaniya;
              var biznes = arrayone[globalvalue].biznes;
              var agenstvo = arrayone[globalvalue].agenstvo;
              var naimenovanie = arrayone[globalvalue].naimenovanie;
              var commentarii = arrayone[globalvalue].commentarii;
              var komnat = arrayone[globalvalue].komnat;
              var obsh_ploshad = arrayone[globalvalue].obsh_ploshad;
              var etazh = arrayone[globalvalue].etazh;
              var mat_sten = arrayone[globalvalue].mat_sten;
              var tip_doma = arrayone[globalvalue].tip_doma;
              var et_v_dome = arrayone[globalvalue].et_v_dome;
              var year_build = arrayone[globalvalue].year_build;
              var sostoyanie22x = arrayone[globalvalue].sostoyanie22x;
              var sanuzel22x = arrayone[globalvalue].sanuzel22x;
              var dver22x = arrayone[globalvalue].dver22x;
              var poli22x = arrayone[globalvalue].poli22x;
              var telephone22x = arrayone[globalvalue].telephone22x;
              var balkon22x = arrayone[globalvalue].balkon22x;
              var parkovka22x = arrayone[globalvalue].parkovka22x;
              var steni22x = arrayone[globalvalue].steni22x;
              var internet22x = arrayone[globalvalue].internet22x;
              var balkon_osteklennii22x = arrayone[globalvalue].balkon_osteklennii22x;
              var mebel22x = arrayone[globalvalue].mebel22x;
              var otoplenie22x = arrayone[globalvalue].otoplenie22x;
              var signalizasiya22x = arrayone[globalvalue].signalizasiya22x;
              var videonabl22x = arrayone[globalvalue].videonabl22x;
              var konserzh22x = arrayone[globalvalue].konserzh22x;
              var domofon22x = arrayone[globalvalue].domofon22x;
              var ohrana22x = arrayone[globalvalue].ohrana22x;
              var kodov_zamok22x = arrayone[globalvalue].kodov_zamok22x;
              var reshetki_na_oknah22x = arrayone[globalvalue].reshetki_na_oknah;
              var datchik_dvizh22x = arrayone[globalvalue].datchik_dvizh22x;
              var video_domof22x = arrayone[globalvalue].video_domof22x;
              var udobno_pod_kommers22x = arrayone[globalvalue].udobno_pod_kommers22x;
              var neuglov22x = arrayone[globalvalue].neuglov22x;
              var plastik_okna22x = arrayone[globalvalue].plastik_okna22x;
              var kuhnya_studiya22x = arrayone[globalvalue].kuhnya_studiya22x;
              var uluchshennaya22x = arrayone[globalvalue].uluchshennaya22x;
              var komn_izolir22x = arrayone[globalvalue].komn_izolir22x;
              var new_santehnika22x = arrayone[globalvalue].new_santehnika22x;
              var vstroennaya_kuhnya22x = arrayone[globalvalue].vstroennaya_kuhnya22x;
              var imeetsya_kladov22x = arrayone[globalvalue].imeetsya_kladov22x;
              var schetchiki22x = arrayone[globalvalue].schetchiki22x;
              var tihii_dvor22x = arrayone[globalvalue].tihii_dvor22x;
              var konditioner22x = arrayone[globalvalue].konditioner22x;
              var rasst_ot_goroda25x = arrayone[globalvalue].rasst_ot_goroda25x;
              var s_doma25x = arrayone[globalvalue].s_doma25x;
              var type_doma25x = arrayone[globalvalue].type_doma25x;
              var year_build25x = arrayone[globalvalue].year_build25x;
              var rasst_ot_goroda26x = arrayone[globalvalue].rasst_ot_goroda26x;
              var s_doma26x = arrayone[globalvalue].s_doma26x;
              var s_uchastka26x = arrayone[globalvalue].s_uchastka26x;
              var type_doma26x = arrayone[globalvalue].type_doma26x;
              var rasst_ot_goroda27x = arrayone[globalvalue].rasst_ot_goroda27x;
              var s_uchastka27x = arrayone[globalvalue].s_uchastka27x;
              var kol_komnat28x = arrayone[globalvalue].kol_komnat28x;
              var s_obsh28x = arrayone[globalvalue].s_obsh28x;
              var etazh28x = arrayone[globalvalue].etazh28x;
              var et_v_zdanii28x = arrayone[globalvalue].et_v_zdanii28x;
              var type_ofisa28x = arrayone[globalvalue].type_ofisa28x;
              var s_obsh29x = arrayone[globalvalue].s_obsh29x;
              var etazh29x = arrayone[globalvalue].etazh29x;
              var et_v_zdanii29x = arrayone[globalvalue].et_v_zdanii29x;
              var type_pomesheniya29x = arrayone[globalvalue].type_pomesheniya29x;
              var year_build30x = arrayone[globalvalue].year_build30x;
              var s_obsh30x = arrayone[globalvalue].s_obsh30x;
              var et_v_dome30x = arrayone[globalvalue].et_v_dome30x;
              var mat_sten30x = arrayone[globalvalue].mat_sten30x;
              var type_zdaniya30x = arrayone[globalvalue].type_zdaniya30x;
              var s_obsh31x = arrayone[globalvalue].s_obsh31x;
              var type_pomesheniya31x = arrayone[globalvalue].type_pomesheniya31x;
              var srok_sdachi = arrayone[globalvalue].srok_sdachi;
              var kupit_ot33x = arrayone[globalvalue].kupit_ot33x;
              var kupit_do33x = arrayone[globalvalue].kupit_do33x;
              var valyuta33x = arrayone[globalvalue].valyuta33x;      /*30*/
              var marka40x = arrayone[globalvalue].marka40x;
              var model40x = arrayone[globalvalue].model40x;
              var year_build_car = arrayone[globalvalue].year_build_car;  /*100*/
              var probeg40x = arrayone[globalvalue].probeg40x;
              var obem40x = arrayone[globalvalue].obem40x;
              var korobka40x = arrayone[globalvalue].korobka40x;
              var bezdokov40x = arrayone[globalvalue].bezdokov40x;
              var bit_ili_na_zak40x = arrayone[globalvalue].bit_ili_na_zak40x;
              var prodazha_po_zapchast40x = arrayone[globalvalue].prodazha_po_zapchast40x;
              var trebuyutsya_vlozheniya40x = arrayone[globalvalue].trebuyutsya_vlozheniya40x;
              var eta_mash_na_zakaz40x = arrayone[globalvalue].eta_mash_na_zakaz40x;
              var mash_prosh_tuning40x = arrayone[globalvalue].mash_prosh_tuning40x;
              var rul40x = arrayone[globalvalue].rul40x;
              var toplivo40x = arrayone[globalvalue].toplivo40x;
              var privod40x = arrayone[globalvalue].privod40x;
              var svet40x = arrayone[globalvalue].svet40x;
              var sostoyanie_mash40x = arrayone[globalvalue].sostoyanie_mash40x;    /*14*/
              var marka_spes45x = arrayone[globalvalue].marka_spes45x;
              var model45x = arrayone[globalvalue].model45x;
              var probeg45x = arrayone[globalvalue].probeg45x;
              var obem45x = arrayone[globalvalue].obem45x;
              var korobka45x = arrayone[globalvalue].korobka45x;
              var bezdokov45x = arrayone[globalvalue].bezdokov45x;
              var bit_ili_na_zak45x = arrayone[globalvalue].bit_ili_na_zak45x;
              var prodazha_po_zapchast45x = arrayone[globalvalue].prodazha_po_zapchast45x;
              var trebyutsya_vlozheniya45x = arrayone[globalvalue].trebyutsya_vlozheniya45x;
              var eta_mash_na_zakaz45x = arrayone[globalvalue].eta_mash_na_zakaz45x;
              var sostoyanie_mash45x = arrayone[globalvalue].sostoyanie_mash45x;
              var rul45x = arrayone[globalvalue].rul45x;
              var toplivo45x = arrayone[globalvalue].toplivo45x;
              var privod45x = arrayone[globalvalue].privod45x;
              var svet45x = arrayone[globalvalue].svet45x;
              var year_build45x = arrayone[globalvalue].year_build45x;
              var kol_mest50x = arrayone[globalvalue].kol_mest50x;
              var nar50x = arrayone[globalvalue].nar50x;
              var vis_vish50x = arrayone[globalvalue].vis_vish50x;
              var nar50x2 = arrayone[globalvalue].nar50x2;
              var vis_vish50x2 = arrayone[globalvalue].vis_vish50x2;
              var gruzop50x2 = arrayone[globalvalue].gruzop50x2;
              var ob_sist51x = arrayone[globalvalue].ob_sist51x;    /*23*/
              var narab50x3 = arrayone[globalvalue].narab50x3;
              var vis_pod50x3 = arrayone[globalvalue].vis_pod50x3;
              var narab50x4 = arrayone[globalvalue].narab50x4;
              var ob_sist414x = arrayone[globalvalue].ob_sist414x;
              var narab50x5 = arrayone[globalvalue].narab50x5;
              var massa214x = arrayone[globalvalue].massa214x;
              var gruzop214x = arrayone[globalvalue].gruzop214x;
              var narab614x = arrayone[globalvalue].narab614x;
              var gruzop614x = arrayone[globalvalue].gruzop614x;
              var massa814x = arrayone[globalvalue].massa814x;
              var narab914x = arrayone[globalvalue].narab914x;
              var ob_kov514x = arrayone[globalvalue].ob_kov514x;
              var massa1014x = arrayone[globalvalue].massa1014x;
              var narab1114x = arrayone[globalvalue].narab1114x;
              var mosh1414x = arrayone[globalvalue].mosh1414x;      /*15*/      /*52*/
              var marka_legk67x = arrayone[globalvalue].marka_legk67x;
              var model67x = arrayone[globalvalue].model67x;
              var sost_zapch_legk77 = arrayone[globalvalue].sost_zapch_legk77;
              var marka_zapch_spes68x = arrayone[globalvalue].marka_zapch_spes68x;
              var sost_zapch_spes75 = arrayone[globalvalue].sost_zapch_spes75;
              var sena_ot_zap = arrayone[globalvalue].sena_ot_zap;
              var sena_do_zap = arrayone[globalvalue].sena_do_zap;
              var valyuta_zapch = arrayone[globalvalue].valyuta_zapch;
              var type_shina55x = arrayone[globalvalue].type_shina55x;
              var marka_shini55x = arrayone[globalvalue].marka_shini55x;
              var protector55x = arrayone[globalvalue].protector55x;
              var year_build_shina55x = arrayone[globalvalue].year_build_shina55x;
              var diam_shina55x = arrayone[globalvalue].diam_shina55x;
              var iznos_shina55x = arrayone[globalvalue].iznos_shina55x;
              var kol_shtuk55x = arrayone[globalvalue].kol_shtuk55x;
              var type_disk56x = arrayone[globalvalue].type_disk56x;
              var model_diska56x = arrayone[globalvalue].model_diska56x;
              var type_diska217x56x = arrayone[globalvalue].type_diska217x56x;
              var year_disk17x56x = arrayone[globalvalue].year_disk17x56x;
              var diam_diska17x56x = arrayone[globalvalue].diam_diska17x56x;
              var iznos_diska17x56x = arrayone[globalvalue].iznos_diska17x56x;
              var kol_shtuk_diskov17x56x = arrayone[globalvalue].kol_shtuk_diskov17x56x;
              var date_start_aux777 = arrayone[globalvalue].date_start_aux777;
              var date_finish_aux777 = arrayone[globalvalue].date_finish_aux777;
              var selev_auditor777 = arrayone[globalvalue].selev_auditor777;
              var kol_uchastn777 = arrayone[globalvalue].kol_uchastn777;
              var res_peremen_string1 = arrayone[globalvalue].res_peremen_string1;
              var res_peremen_string2 = arrayone[globalvalue].res_peremen_string2;
              var res_peremen_string3 = arrayone[globalvalue].res_peremen_string3;
              var res_peremen_chisl4 = arrayone[globalvalue].res_peremen_chisl4;
              var res_peremen_chisl5 = arrayone[globalvalue].res_peremen_chisl5;
              var res_peremen_chisl6 = arrayone[globalvalue].res_peremen_chisl6;
              var r_alm = arrayone[globalvalue].r_alm;
              var city_alm = arrayone[globalvalue].city_alm;
              var r_astana = arrayone[globalvalue].r_astana;
              var city_ast = arrayone[globalvalue].city_ast;
              var vremya_nachala_auxion = arrayone[globalvalue].vremya_nachala_auxion;
              var vremya_okonch_auxion = arrayone[globalvalue].vremya_okonch_auxion;
              var kol_prosmotrov = arrayone[globalvalue].kol_prosmotrov;

              if(kol_prosmotrov == null){
                  kol_prosmotrov = 0;
              }

              if(osnovnaya_sena == 777){
                osnovnaya_sena = "договорная | ";
              }else if(osnovnaya_sena == 999){
                osnovnaya_sena = "отдам даром | ";
              }


              var auxion = "";
              var auxion7 = "";
              var date_start_aux = "";
              var date_finish_aux = "";
              var selev_auditor = "";

              if(date_start_aux777 != 0){

                  auxion = "аукционный товар";
                  auxion7 = " ... ";
                  date_start_aux = "дата начала аукциона: ";
                  date_finish_aux = "дата окончания аукциона: ";

                  if(selev_auditor777 != "нет"){
                    selev_auditor = "целевая аудитория: ";
                  }

              }else{

                  auxion = "";
                  auxion7 = "";

                  date_start_aux = "";
                  date_start_aux777 = "";

                  date_finish_aux = "";
                  date_finish_aux777 = "";

                  selev_auditor = "";
                  selev_auditor777 = "";

              }

              var kol_uchastn77 = "";

              if(kol_uchastn777 == 0){
                kol_uchastn77 = "";
                kol_uchastn777 = "";
              }else{
                kol_uchastn77 = "количество участников: ";
              }

var array = ["цена: ","телефон: ","watsapp: ","viber: ","местоположение: ","город: ","продавец: ","состояние товара: ","доставка: ",
            "интересует обмен: ","инстаграм: ","в_контакте: ","skype: ","mail: ","google: ","другие: ","частное лицо: ","компания: ","бизнес: ",
            "агенство: ","наименование: ","количество комнат: ","общая площадь /кв.м: ","этаж: ","материал стен: ","тип дома: ","этажей в доме: ",
            "год постройки: ","состояние: ","сан.узел: ","дверь: ","полы: ","телефон: ","балкон: ","парковка: ","стены: ","интернет: ",
            "балкон остекленный: ","мебель: ","отопление: ","сигнализация: ","видеонаблюдение: ","консьерж: ","домофон: ","охрана: ",
            "кодовый замок: ","решетки на окнах: ","датчик движения: ","видео домофон: ","удобно под коммерцию: ","неугловая: ","пластиковые окна: ",
            "кухня студия: ","улучшенная: ","комната изолирована: ","новая сантехника: ","встроенная кухня: ","имеется кладовая: ","счетчики: ",
            "тихий двор: ","кондиционер: ","расстояние от города: ","площадь дома: ","тип дома: ","год постройки: ","расстояние от города: ",
            "площадь дома: ","площадь участка: ","тип дома: ","расстояние от города: ","площадь участка: ","количество комнат: ",
            "общая площадь /кв.м: ","этаж: ","этажей в здании: ","тип офиса: ","общая площадь /кв.м: ","этаж: ","этажей в здании: ",
            "тип помещения: ","год постройки: ","общая площадь /кв.м: ","этажей в доме: ","материал стен: ","тип здания: ","общая площадь /кв.м: ",
            "тип помещения: ","срок сдачи: ","купить от: ","купить до: ","валюта: ","марка машины: ","модель: ","год выпуска: ","пробег/км: ",
            "объем: ","коробка: ","интересует обмен: ","битый или на заказ: ","другие опции: ","требуются вложения: ","эта машина на заказ: ",
            "машина прошла тюнинг: ","руль: ","топливо: ","привод: ","цвет: ","состояние машины: ","марка спецтехники: ","модель: ",
            "пробег/км: ","объем: ","коробка: ","интересует обмен: ","битый или на заказ: ","продажа по запчастям: ","требуются вложения: ",
            "эта машина на заказ: ","состояние машины: ","руль: ","топливо: ","привод: ","цвет: ","год выпуска: ","количество мест: ","наработка: ",
            "высота вышки: ","наработка: ","высота вышки: ","грузоподъемность: ","объем цистерны: ","наработка: ","высота подьема: ","наработка: ",
            "объем цистерны: ","наработка: ","масса: ","грузоподъемность: ","наработка: ","грузоподъемность: ","масса: ","наработка: ",
            "объем ковша: ","масса: ","наработка: ","мощь: ","марка машины: ","модель: ","состояние запчасти: ","марка запчасти спецтехники: ",
            "состояние запчасти: ","цена от: ","цена до: ","валюта: ","тип шины: ","марка шины: ","протектор: ","год выпуска: ","диаметр шины: ",
            "износ шины: ","количество: ","тип дисков: ","модель диска: ","тип диска: ","дата выпуска: ","диаметр диска: ","износ диска: ",
            "количество штук: ","состояние: ","цвет: ","количество: ","описание: ",": ","ЖК: ",": ","ЖК: ","время начала аукциона: ",
            "время окончания аукциона: "];

var array2 = [osnovnaya_sena+" "+valyuta,telephone,watsapp,viber,oblast,city,email,sostoyanie,dostavka,obmen,instagram,vk,skype,mail,
              google,other,chastn_liso,companiya,biznes,agenstvo,naimenovanie,komnat,obsh_ploshad,etazh,mat_sten,tip_doma,et_v_dome,year_build,
              sostoyanie22x,sanuzel22x,dver22x,poli22x,telephone22x,balkon22x,parkovka22x,steni22x,internet22x,balkon_osteklennii22x,mebel22x,
              otoplenie22x,signalizasiya22x,videonabl22x,konserzh22x,domofon22x,ohrana22x,kodov_zamok22x,reshetki_na_oknah22x,datchik_dvizh22x,
              video_domof22x,udobno_pod_kommers22x,neuglov22x,plastik_okna22x,kuhnya_studiya22x,uluchshennaya22x,komn_izolir22x,new_santehnika22x,
              vstroennaya_kuhnya22x,imeetsya_kladov22x,schetchiki22x,tihii_dvor22x,konditioner22x,rasst_ot_goroda25x,s_doma25x,type_doma25x,
              year_build25x,rasst_ot_goroda26x,s_doma26x,s_uchastka26x,type_doma26x,rasst_ot_goroda27x,s_uchastka27x,kol_komnat28x,s_obsh28x,
              etazh28x,et_v_zdanii28x,type_ofisa28x,s_obsh29x,etazh29x,et_v_zdanii29x,type_pomesheniya29x,year_build30x,s_obsh30x,et_v_dome30x,
              mat_sten30x,type_zdaniya30x,s_obsh31x,type_pomesheniya31x,srok_sdachi,kupit_ot33x,kupit_do33x,valyuta33x,marka40x,model40x,
              year_build_car,probeg40x,obem40x,korobka40x,bezdokov40x,bit_ili_na_zak40x,prodazha_po_zapchast40x,trebuyutsya_vlozheniya40x,
              eta_mash_na_zakaz40x,mash_prosh_tuning40x,rul40x,toplivo40x,privod40x,svet40x,sostoyanie_mash40x,marka_spes45x,model45x,probeg45x,
              obem45x,korobka45x,bezdokov45x,bit_ili_na_zak45x,prodazha_po_zapchast45x,trebyutsya_vlozheniya45x,eta_mash_na_zakaz45x,
              sostoyanie_mash45x,rul45x,toplivo45x,privod45x,svet45x,year_build45x,kol_mest50x,nar50x,
              vis_vish50x,nar50x2,vis_vish50x2,gruzop50x2,ob_sist51x,narab50x3,vis_pod50x3,narab50x4,ob_sist414x,narab50x5,massa214x,gruzop214x,
              narab614x,gruzop614x,massa814x,narab914x,ob_kov514x,massa1014x,narab1114x,mosh1414x,marka_legk67x,model67x,sost_zapch_legk77,
              marka_zapch_spes68x,sost_zapch_spes75,sena_ot_zap,sena_do_zap,valyuta_zapch,type_shina55x,marka_shini55x,protector55x,year_build_shina55x,diam_shina55x,iznos_shina55x,
              kol_shtuk55x,type_disk56x,model_diska56x,type_diska217x56x,year_disk17x56x,diam_diska17x56x,iznos_diska17x56x,
              kol_shtuk_diskov17x56x,res_peremen_string1,res_peremen_string2,res_peremen_chisl4,opisanie,r_alm,city_alm,r_astana,
              city_ast,vremya_nachala_auxion,vremya_okonch_auxion];

              var testcount = array.length;
              var testcount2 = array2.length;
              var length = array2.length;


              for(var k=0; k < length; k++) {

                  if(array2[k] == "нет"){

                      array[k] = "";
                      array2[k] = "";

                  }else if(array2[k] == "0"){

                      array[k] = "";
                      array2[k] = "";

                  }else if(array2[k] == null){

                      array[k] = "";
                      array2[k] = "";

                  }else if(array2[k] == ""){

                      array[k] = "";
                      array2[k] = "";

                  }else if(array2[k] == "-1"){

                      array[k] = "";
                      array2[k] = "";

                  }else if(array2[k] == "Movies"){

                      //array[k] = "";
                      array2[k] = "да";

                  }else if(array2[k] == "zakaz"){

                      array[k] = "работаю";
                      array2[k] = "по заказу";

                  }else{/*zakritie if*/

                      array[k];
                      array2[k];
                  }

              } /*zakritie for*/

var templateh1 = zagolovok+' '+array[172]+array2[172]+' '+array[173]+array2[173]+array[174]+array2[174]+' '+
array[175]+array2[175];

      $(".inserth1").empty();
      $(".inserth1").append(templateh1);
      $(".insertobvn").empty();


      var templateob = "";
      var phone = "";
      var username = "";

for(var j = 0;j < array2.length;j++){

  if(array2[j] != ""){

      if(array[j] != "телефон: "){

          if(array[j] != "частное лицо: "){
                if(array[j] != "продавец: "){

                  if(array2[j].length > 10){

                          var g = "";
                          var l = "";

                          //console.log(j);

                          for(var hl = 0;hl < array2[j].length;hl++){
                              if(hl > 10){

                                if(array2[j][hl] != ""){
                                  g += array2[j][hl];
                                }

                              }else{
                                  if(array2[j][hl] != ""){
                                    l += array2[j][hl];
                                  }

                              }
                          }

                          array2[j] = l + " " + g;

                      }else{
                          array2[j];
                      }

                    templateob += '<tr class="inserttr"><td class="label-cell">'+ array[j] +'</td> <td  class="numeric-cell">'+ array2[j] +'</td></tr>';
                }

          }

      }

      if(array[j] == "телефон: "){
          phone = '<tr><td class="label-cell">'+ array[j] +'</td> <td  class="numeric-cell">'+ array2[j] +'</td></tr>';
          $(".floating-button").attr("href","tel:" + array2[j]);
      }

      if(array[j] == "частное лицо: "){
          username = '<tr ><td class="label-cell">'+ array[j] +'</td> <td class="numeric-cell">'+ array2[j] +'</td></tr>';
      }



  }


}

    templateob += username;
    templateob += phone;


//photo

$(".insertobvn").append(templateob);

//text

var photo = "n.jpg";

var baseurlimg2 = localStorage.getItem("baseurlimg4");

$(".insertimg").empty();

var photoar = new Array();

var g = 0;

if(arraytwo[globalvalue] != "n.jpg"){

    photo = arraytwo[globalvalue].photo_path;

    for(var h = 0; h < photo.length;h++){
        var photourl = baseurlimg2 + photo[h];

        if(h == 0){
            var insertimg = '<div class="photobr imageheight" style="background: url(' + photourl + ') no-repeat center/cover;"></div>';

                $(".insertimg").append(insertimg);
        }



photoar.push(photourl);

g = 1;



    }



}else{

    var photourl = baseurlimg2 + photo;
    var insertimg = '<div class="swiper-slide"><img src="'+ photourl +'" width="100%;" ' +
      ' height="100%;" alt="" /></div>';

    $(".insertimg").append(insertimg);

}


//rab
//video code

  // var videoobj = {

  //       html: '<iframe src="https://www.youtube.com/embed/1KwzzpH95TY" frameborder="0" allowfullscreen></iframe>',
  //       caption: 'Woodkid - Run Boy Run (Official HD Video)',
  // }

  $(".insertvideo").empty();

  if(arraythree[globalvalue] != "нет"){



    var video = arraythree[globalvalue].photo_path;



    for(var l = 0; l < video.length;l++){


  var urlpathvideo = '<video id="video1" width="100%" controls="controls" tabindex="0" style="margin-top: 50px;">'+

  ' <source src="https://www.kazpoisk.kz/assets/entry/uploadsv/' + video[l] + '" '+

  ' type="video/mp4"></source> </video>';


    $(".insertvideo").append(urlpathvideo);










    }



}

//video code


//photoar.push(videoobj);


//photobrowser


if(g == 1){


var myPhotoBrowserStandalone = myApp.photoBrowser({
    photos : photoar,
    type: 'popup',
    backLinkText: 'закрыть',
    zoom: true,
    lazyLoading:true,
    lazyLoadingInPrevNext:true,

});
//Open photo browser on click
$$('.photobr').on('click', function () {
    myPhotoBrowserStandalone.open();
});

}

//vrab


$(".backevent").click(function(){

      var videoev = $("#video1")[0];

      if(videoev){
        videoev.pause();
      }



      mainView.router.back();

});





//photobrowser



//slider
var mySwiper2 = myApp.swiper('.swiper-2', {
  pagination:'.swiper-2 .swiper-pagination',

  spaceBetween: 50
});


//slider


//video



//video





}





          },10);











});
//module view ob page


//module search input


$("#musearchinput").keypress(function(){

    var searchstring = $(this).val();


    if(validatexss(searchstring)){

          if(searchstring.length > 2){



          myApp.showPreloader('работаю..');

          var useridentificatorsearch = localStorage.getItem("useridentificator");

             var useremailsearch = localStorage.getItem("useremail");

             if(useridentificatorsearch == 0){
                useridentificatorsearch = 0;
                useremailsearch = 0;
             }

             var newphoneid = phoneid;

          var sendsearch = {

                  "searchtext":searchstring,
                  "useridentificatorsearch":useridentificatorsearch,
                  "useremailsearch":useremailsearch,
                  "newphoneid":newphoneid,

              }

              //console.log(useridentificator4);

                 var searchurl = localStorage.getItem("baseurl");

                $.ajax({
                      "type":"GET",
                      "url": searchurl + "searchinputapp/",    /*random restourants menu zakaZ*/

                      dataType: "jsonp",
                      crossDomain: true,
                      "data": sendsearch,

                      "success":kxsearch,
                      "error":errorsearch

                      });


                function kxsearch(result){

                        if(result[0].length != 0){


                            $(".page-content").scrollTop(0);

                            pagescroll = 20;

                            pageindex = result[3];

                            //console.log(pageindex);

                            pagefixed = 0;

                            insertviewob(result);
                            myApp.hidePreloader();
                        }else{
                          myApp.hidePreloader();
                        }

                        myApp.hidePreloader();

                }

                function errorsearch(){

                    myApp.hidePreloader();
                }

            }

    }else{

          myApp.showPreloader('ip адрес сохранен, поиск вашего местоположения, определение номера телефона.. ваш номер определен.. ваш номер и положение занесены в базу данных :) !');

    }





});


//module search input

//validate function

function validatexss(validatestring){

    var validate = ["script","alert","php","xss","*","-- -","--","<",">","concat","=","<script>","</script>","</"];

    //validate function

      var fix = 0;

      for(var i = 0;i < validate.length;i++){

            var xt = validatestring.indexOf(validate[i]);

            if(xt >= 0){

                fix = 1;

            }

        }

        if(fix == 0){
            return true;
        }else{
          return false;
        }







}

//validate function



//send ob

//rab5

$(".addcategoryevent").click(function(){


    var useremail = localStorage.getItem("useremail");
    var useridentificator = localStorage.getItem("useridentificator");

    if(useremail){

        if(useridentificator != 0){
            mainView.router.loadPage("#addcategory");
        }else{
            mainView.router.loadPage("login.html");

            myApp.alert('войдите или зарегистрируйтесь!','Kazpoisk');
        }



    }else{

        mainView.router.loadPage("login.html");

        myApp.alert('войдите или зарегистрируйтесь!','Kazpoisk');

    }


});




myApp.onPageBeforeAnimation('cabinet', function (page) {


                $(".gifloader").show();



                var useremail = localStorage.getItem("useremail");

                //avtiv obyavlen
                //console.log(useremail);
                var sendviewus = {

                                "useridentificator":useremail,

                            }

                  //console.log(useridentificator4);

                  $('.loader-hide').css("display","block");

                     var urlm = localStorage.getItem("baseurl");

                    $.ajax({

                          "type":"GET",
                          "url": urlm + "viewobuserapp/",    /*random obyav*/

                          dataType: "jsonp",
                          crossDomain: true,
                          "data": sendviewus,

                          "success":kxg,
                          "error":errorfuncg

                          });


                    function kxg(result){

                      if(result[0] != "noob"){

                        //console.log(result);
                        $('.loader-hide').css("display","none");
                        $(".gifloader").hide();
                        insertviewobuser(result);
                      }

                      //console.log(result);




                    }

                    function errorfuncg(){

                      $('.loader-hide').css("display","none");
                    }

                    //avtiv obyavlen

                    //neactiv obyavl



                    var useremailtwo = localStorage.getItem("useremail");

                    //console.log(useremailtwo);

                var sendviewusdeleted = {

                                "useridentificator":useremailtwo,

                            }

                  //console.log(useridentificator4);

                  $('.loader-hide').css("display","block");

                     var urlmn = localStorage.getItem("baseurl");

                    $.ajax({

                          "type":"GET",
                          "url": urlmn + "viewobuserdeletedapp/",    /*random obyav*/

                          dataType: "jsonp",
                          crossDomain: true,
                          "data": sendviewusdeleted,

                          "success":kxgg,
                          "error":errorfuncgg

                          });


                    function kxgg(result){

                      //console.log(result);

                      if(result[0] != "noob"){

                        //console.log(result);
                        $('.loader-hide').css("display","none");
                        $(".gifloader").hide();
                        insertviewobuserdeleted(result);
                      }

                      //console.log(result);




                    }

                    function errorfuncgg(){

                      $('.loader-hide').css("display","none");
                    }

                    //neactiv obyavl


                    $(".changetabs").click(function(){


                        var mydivtabs = ["#tab-1","#tab-2","#tab-3"];

                        var tt = $(this).attr("href");

                        for(var g = 0;g < mydivtabs.length;g++){

                            if(mydivtabs[g] == tt){

                                $(mydivtabs[g]).css("display","block");

                            }else{

                                $(mydivtabs[g]).css("display","none");

                            }

                        }


                    });


                    checkcabinet = 1;


                    $(".backcabinetevent").click(function(){

                        checkcabinet = 0;

                        mainView.router.back();

                    });






});


var checkcabinet = 0;

//x1

setInterval(function(){


        if(checkcabinet == 1){

                      var useridentificatorforbalans = localStorage.getItem("useridentificator");
                      var userem = localStorage.getItem("useremail");



                      var sendusercabinet = {

                                    "useridentificator":useridentificatorforbalans,
                                    "useremail":userem

                                }

                                //console.log(useridentificator4);

                                   var urluserbalance = localStorage.getItem("baseurl");

                                  $.ajax({
                                        "type":"GET",
                                        "url": urluserbalance + "userbalansapp/",    /*random restourants menu zakaZ*/

                                        dataType: "jsonp",
                                        crossDomain: true,
                                        "data": sendusercabinet,

                                        "success":kx2881cab,
                                        "error":errorfunc2881cab

                                        });


                                  function kx2881cab(result){

                                          $(".userbalans").empty();
                                          $(".useremail").empty();

                                          //console.log("ident: " + useridentificatorforbalans + " sum" + result);

                                          $(".userbalans").append(result + " тг");
                                          $(".useremail").append(userem);

                                  }

                                  function errorfunc2881cab(){


                                  }

                                }

},5000);


function recheckcabinet(){


                var useremail = localStorage.getItem("useremail");

                //avtiv obyavlen
                //console.log(useremail);
                var sendviewus = {

                                "useridentificator":useremail,

                            }

                  //console.log(useridentificator4);

                  $('.loader-hide').css("display","block");

                     var urlm = localStorage.getItem("baseurl");

                    $.ajax({

                          "type":"GET",
                          "url": urlm + "viewobuserapp/",    /*random obyav*/

                          dataType: "jsonp",
                          crossDomain: true,
                          "data": sendviewus,

                          "success":kxg,
                          "error":errorfuncg

                          });


                    function kxg(result){

                      if(result[0] != "noob"){

                        //console.log(result);
                        $('.loader-hide').css("display","none");
                        $(".gifloader").hide();
                        insertviewobuser(result);
                      }

                      //console.log(result);




                    }

                    function errorfuncg(){

                      $('.loader-hide').css("display","none");
                    }

                    //avtiv obyavlen

                    //neactiv obyavl



                    var useremailtwo = localStorage.getItem("useremail");

                    //console.log(useremailtwo);

                var sendviewusdeleted = {

                                "useridentificator":useremailtwo,

                            }

                  //console.log(useridentificator4);

                  $('.loader-hide').css("display","block");

                     var urlmn = localStorage.getItem("baseurl");

                    $.ajax({

                          "type":"GET",
                          "url": urlmn + "viewobuserdeletedapp/",    /*random obyav*/

                          dataType: "jsonp",
                          crossDomain: true,
                          "data": sendviewusdeleted,

                          "success":kxgg,
                          "error":errorfuncgg

                          });


                    function kxgg(result){

                      //console.log(result);

                      if(result[0] != "noob"){

                        //console.log(result);
                        $('.loader-hide').css("display","none");
                        $(".gifloader").hide();
                        insertviewobuserdeleted(result);
                      }

                      //console.log(result);




                    }

                    function errorfuncgg(){

                      $('.loader-hide').css("display","none");
                    }

                    //neactiv obyavl


                    $(".changetabs").click(function(){


                        var mydivtabs = ["#tab-1","#tab-2","#tab-3"];

                        var tt = $(this).attr("href");

                        for(var g = 0;g < mydivtabs.length;g++){

                            if(mydivtabs[g] == tt){

                                $(mydivtabs[g]).css("display","block");

                            }else{

                                $(mydivtabs[g]).css("display","none");

                            }

                        }


                    });


}



 function insertviewobuser(result){

      if(result[0] != "false"){

        $(".insertobuser").empty();

                                  var countfindobjects = result[0].length;

                                  $(".searchkvbutton").text("найдено " + countfindobjects + " объявлений");

                                  setTimeout(function () {
                                      myApp.hidePreloader();
                                  }, 1000);
                                  //searchkvbutton

                                  for(var i = 0;i < result[0].length;i++){

                                    var r_alm = result[0][i].r_alm;
                                    var city_alm = result[0][i].city_alm;
                                    var r_astana = result[0][i].r_astana;
                                    var city_ast = result[0][i].city_ast;
                                    var vremya_nachala_auxion = result[0][i].vremya_nachala_auxion;
                                    var vremya_okonch_auxion = result[0][i].vremya_okonch_auxion;

                                    var vremya_okonch_auxion = result[0][i].vremya_okonch_auxion;

                                    var photo = "n.jpg";
                                    var baseurlimg2 = localStorage.getItem("baseurlimg4");

                                    var year_build_car = result[0][i].year_build_car;
                                    var obem40x = result[0][i].obem40x;

                                    var opisanie = result[0][i].opisanie;

                                    var array = [" ","ЖК: "," ","ЖК: ","время начала аукциона: ","время окончания аукциона: "];
                                    var array2 = [r_alm,city_alm,r_astana,city_ast,vremya_nachala_auxion,vremya_okonch_auxion];


                                    if(result[1][i] != "n.jpg"){

                                        photo = result[1][i].photo_path[0];

                                    }

                                    var photourl = baseurlimg2 + photo;


                                    var op = "";


                                    for(var j = 0; j < array2.length; j++) {




                                                if(array2[j] == "нет"){

                                                  array[j] = "";
                                                  array2[j] = "";


                                                }else if(array2[j] == "0"){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == ""){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == "-1"){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == "нет"){
                                                  array[j] = "";
                                                  array2[j] = "";
                                                }else if(array2[j] == null){
                                                  array[j] = "";
                                                  array2[j] = "";
                                                }else{/*zakritie if*/


                                                  array[j];
                                                  array2[j];



                                                }

                                                var fixz = 0;

                                                if(array2[j] == ""){
                                                    if(year_build_car != "0"){

                                                        var array3 = ["г.","л."];
                                                        var array4 = [year_build_car,"объем:" + obem40x];

                                                        fixz = 1;



                                                        array2[0] = array4[0] + array3[0];

                                                        if(array4[1] != "0"){
                                                            array[1] = array4[1] + array3[1];
                                                        }

                                                    }
                                                 }

                                                 if(fixz == 0){



                                                        op = opisanie;





                                                 }

                                     } /*zakritie for*/







                                    var cityview = "";

                                    var city = result[0][i].city;

                                    if(city != "0"){
                                      cityview = city;
                                    }
//zzz
var templateobyav = '<li > <a href="#" ident="'+ i +'" class=" item-link item-content"> <div class="item-media"><img src="' + photourl + '" '+
' width="80" height="80" style="background-size:cover;"></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">'+ result[0][i].zagolovok +'</div>'+
' <div class="item-after">'+ result[0][i].sena +'</div> </div> <div class="item-subtitle">'+ result[0][i].city +'</div>'+
' <div class="item-text" style="margin-top:1px;"><div class="row"><button ident="'+ i
+'" " class="button color-green viewob"><i class="material-icons">&#xE869;</i></button><button upob="'+ result[0][i].id +
'" " class="button color-blue upob"><i class="material-icons">&#xE8E5;</i></button><button retimeid="'+ result[0][i].id +
'" " class="button color-orange retimeob"><i class="material-icons">&#xE192;</i></button><button rmid="'+ result[0][i].id +
'" " class="button color-red deleteob"><i class="material-icons">&#xE92B;</i></button></div></div> </div> </a> </li>';


$(".insertobuser").append(templateobyav);




                                  }



                                  localStorage.setItem("obcabinet",JSON.stringify(result));


                                  $(".actionsheet").click(function(){

                                    var action = $(this).attr("n");

                                    var idob = localStorage.getItem("upobid");

                                    var useridentificatoractiv = localStorage.getItem("useridentificator");
                                    var useremailsend = localStorage.getItem("useremail");

                                    var sendactiv = {

                                                    "action":action,
                                                    "idob":idob,
                                                    "phone":useridentificatoractiv,
                                                    "useremail":useremailsend


                                                }

                                                myApp.confirm('Вы подтверждаете действие?','Kazpoisk', function () {

                                                //console.log(useridentificatoractiv);

                                                   var urlactiv = localStorage.getItem("baseurl");

                                                  $.ajax({
                                                        "type":"GET",
                                                        "url": urlactiv + "activ_obapp/",    /*random restourants menu zakaZ*/

                                                        dataType: "jsonp",
                                                        crossDomain: true,
                                                        "data": sendactiv,

                                                        "success":kxactiv,
                                                        "error":errorfuncactiv

                                                        });


                                                  function kxactiv(result){

                                                          console.log(result);

                                                          if(result[1] == "5"){

                                                                  myApp.alert('поздравляем функция активирована...!','Сервис');

                                                                  firstviewob();

                                                                  //result[0];  --user balance

                                                            }else if(result[1] == "6"){

                                                                  myApp.alert('статус уже обновлен...!','Сервис');

                                                            }else if(result[1] == "1"){

                                                                  myApp.alert('Недостаточно средств...!','Сервис');

                                                            }

                                                  }

                                                  function errorfuncactiv(){


                                                  }

                                           });


                                  });


                                  $(".infousl").click(function(){

                                        var action = $(this).attr("act");

                                        switch(action){

                                          case "promo":

                                              myApp.alert('Это возможность добавить ваше объявление со статусом "ПРОМО" (высшая категория, 7 дней)','Kazpoisk');

                                          break;

                                          case "top":

                                              myApp.alert('Это возможность добавить ваше объявление со статусом "TOП" (20 первых объявлений 3 дня)','Kazpoisk');

                                          break;

                                          case "warm":

                                          myApp.alert('Это возможность добавить ваше объявление со статусом "Горячие" (рамка и значок огонь 7 дней)','Kazpoisk');

                                          break;

                                          case "time":

                                          myApp.alert('Это возможность добавить ваше объявление со статусом "Срочно" (красного цвета 7 дней)','Kazpoisk');

                                          break;

                                          case "up":

                                          myApp.alert('Это возможность поднять ваше объявление вверх по списку','Kazpoisk');

                                          break;
                                        }




                                  });


                                  $(".upob").click(function(){

                                    var upob = $(this).attr("upob");

                                    localStorage.setItem("upobid",upob);

                                    myApp.popup('.popup-viewobup');



                                  });


                                  $(".retimeob").click(function(){

                                      var updateid = $(this).attr("retimeid");

                                      myApp.confirm('продлить объявление?','Kazpoisk', function () {

                                          var sendretimeob = {

                                                        "upob":updateid,

                                                    }

                                                    //console.log(useridentificator4);

                                                       var urldeleteob = localStorage.getItem("baseurl");

                                                      $.ajax({
                                                            "type":"GET",
                                                            "url": urldeleteob + "prodlenieapp/",    /*random restourants menu zakaZ*/

                                                            dataType: "jsonp",
                                                            crossDomain: true,
                                                            "data": sendretimeob,

                                                            "success":hhkw,
                                                            "error":errordeleteobw

                                                            });


                                                      function hhkw(result){

                                                              //console.log(result);
                                                              if(result[0] == "1"){

                                                                  myApp.alert('объявление продлено!','Kazpoisk');

                                                              }else if(result[0] == "3"){

                                                                  myApp.alert('объявление обновлено!','Kazpoisk');

                                                              }else if(result[0] == "2"){

                                                                  myApp.alert('объявление обновлялось!','Kazpoisk');

                                                              }

                                                      }

                                                      function errordeleteobw(){


                                                      }

                                                      });


                                  });

                                  $(".deleteob").click(function(){

                                          var deleteob = $(this).attr("rmid");

                                          var hidecontent = $(this).parent().parent().parent().parent().parent();

                                          //console.log(hidecontent.attr("class"));

                                          myApp.confirm('отправить в архив?','Kazpoisk', function () {

                                          var senddeleteob = {

                                                        "rm_id":deleteob,

                                                    }

                                                    //console.log(useridentificator4);

                                                       var urldeleteob = localStorage.getItem("baseurl");

                                                      $.ajax({
                                                            "type":"GET",
                                                            "url": urldeleteob + "remove_obapp/",    /*random restourants menu zakaZ*/

                                                            dataType: "jsonp",
                                                            crossDomain: true,
                                                            "data": senddeleteob,

                                                            "success":hhk,
                                                            "error":errordeleteob

                                                            });


                                                      function hhk(result){

                                                              //console.log(result);
                                                              if(result[0] == "ok"){

                                                                  hidecontent.hide();

                                                                  setTimeout(function(){

                                                                      recheckcabinet();

                                                                  },5000);

                                                              }

                                                      }

                                                      function errordeleteob(){


                                                      }

                                                      });

                                  });

                                  $(".viewob").click(function(){

                                      var ident = $(this).attr("ident");

                                      mainView.router.loadPage("#n1user");

                                      globalvalue = ident;




                                  });




                              }



  }


  function insertviewobuserdeleted(result){

      if(result[0] != "false"){

        $(".insertobuserdeleted").empty();

                                  var countfindobjects = result[0].length;

                                  $(".searchkvbutton").text("найдено " + countfindobjects + " объявлений");

                                  setTimeout(function () {
                                      myApp.hidePreloader();
                                  }, 1000);
                                  //searchkvbutton

                                  for(var i = 0;i < result[0].length;i++){

                                    var r_alm = result[0][i].r_alm;
                                    var city_alm = result[0][i].city_alm;
                                    var r_astana = result[0][i].r_astana;
                                    var city_ast = result[0][i].city_ast;
                                    var vremya_nachala_auxion = result[0][i].vremya_nachala_auxion;
                                    var vremya_okonch_auxion = result[0][i].vremya_okonch_auxion;

                                    var vremya_okonch_auxion = result[0][i].vremya_okonch_auxion;

                                    var photo = "n.jpg";
                                    var baseurlimg2 = localStorage.getItem("baseurlimg4");

                                    var year_build_car = result[0][i].year_build_car;
                                    var obem40x = result[0][i].obem40x;

                                    var opisanie = result[0][i].opisanie;

                                    var array = [" ","ЖК: "," ","ЖК: ","время начала аукциона: ","время окончания аукциона: "];
                                    var array2 = [r_alm,city_alm,r_astana,city_ast,vremya_nachala_auxion,vremya_okonch_auxion];


                                    if(result[1][i] != "n.jpg"){

                                        photo = result[1][i].photo_path[0];

                                    }

                                    var photourl = baseurlimg2 + photo;


                                    var op = "";


                                    for(var j = 0; j < array2.length; j++) {




                                                if(array2[j] == "нет"){

                                                  array[j] = "";
                                                  array2[j] = "";


                                                }else if(array2[j] == "0"){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == ""){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == "-1"){
                                                  array[j] = "";
                                                  array2[j] = "";

                                                }else if(array2[j] == "нет"){
                                                  array[j] = "";
                                                  array2[j] = "";
                                                }else if(array2[j] == null){
                                                  array[j] = "";
                                                  array2[j] = "";
                                                }else{/*zakritie if*/


                                                  array[j];
                                                  array2[j];



                                                }

                                                var fixz = 0;

                                                if(array2[j] == ""){
                                                    if(year_build_car != "0"){

                                                        var array3 = ["г.","л."];
                                                        var array4 = [year_build_car,"объем:" + obem40x];

                                                        fixz = 1;



                                                        array2[0] = array4[0] + array3[0];

                                                        if(array4[1] != "0"){
                                                            array[1] = array4[1] + array3[1];
                                                        }

                                                    }
                                                 }

                                                 if(fixz == 0){



                                                        op = opisanie;





                                                 }

                                     } /*zakritie for*/







                                    var cityview = "";

                                    var city = result[0][i].city;

                                    if(city != "0"){
                                      cityview = city;
                                    }

var templateobyav = '<li > <a href="#" ident="'+ i +'" class=" item-link item-content"> <div class="item-media"><img src="' + photourl + '" '+
' width="80" height="80" style="background-size:cover;"></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">'+ result[0][i].zagolovok +'</div>'+
' <div class="item-after">'+ result[0][i].sena +'</div> </div> <div class="item-subtitle">'+ result[0][i].city +'</div>'+
' <div class="item-text" style="margin-top:1px;"><div class="row"><button retimeid="'+ result[0][i].id +
'" " class="button color-orange retimeobdel"><i class="material-icons">&#xE192;</i></button></div></div> </div> </a> </li>';


$(".insertobuserdeleted").append(templateobyav);




                                  }



                                  localStorage.setItem("obcabinetdeleted",JSON.stringify(result));





                                  $(".retimeobdel").click(function(){

                                      var updateid = $(this).attr("retimeid");

                                      myApp.confirm('продлить объявление?','Kazpoisk', function () {


                                        //console.log(updateid);

                                          var sendretimeob = {

                                                        "upob":updateid,

                                                    }

                                                    //console.log(useridentificator4);

                                                       var urldeleteob = localStorage.getItem("baseurl");

                                                      $.ajax({
                                                            "type":"GET",
                                                            "url": urldeleteob + "prodlenieapp/",    /*random restourants menu zakaZ*/

                                                            dataType: "jsonp",
                                                            crossDomain: true,
                                                            "data": sendretimeob,

                                                            "success":hhkw,
                                                            "error":errordeleteobw

                                                            });


                                                      function hhkw(result){

                                                              //console.log(result);
                                                              if(result[0] == "1"){

                                                                  setTimeout(function(){

                                                                      recheckcabinet();

                                                                  },5000);

                                                                  myApp.alert('объявление продлено!','Kazpoisk');

                                                              }else if(result[0] == "3"){

                                                                  setTimeout(function(){

                                                                      recheckcabinet();

                                                                  },5000);

                                                                  myApp.alert('объявление обновлено!','Kazpoisk');

                                                              }else if(result[0] == "2"){

                                                                  setTimeout(function(){

                                                                      recheckcabinet();

                                                                  },5000);

                                                                  myApp.alert('объявление обновлялось!','Kazpoisk');



                                                              }

                                                      }

                                                      function errordeleteobw(){


                                                      }

                                                      });


                                  });



                              }



  }       //kones function



  myApp.onPageBeforeAnimation('n1user', function (page) {


    $(".gifloader").show();


var ob = localStorage.getItem("obcabinet");

if(ob){
    var obj = jQuery.parseJSON(ob);
    var arrayone = obj[0];
    var arraytwo = obj[1];
    var arraythree = obj[2];

     setTimeout(function(){


//text
              var idob = arrayone[globalvalue].id;
              var zagolovok = arrayone[globalvalue].zagolovok;
              var osnovnaya_sena = arrayone[globalvalue].sena;
              var valyuta = arrayone[globalvalue].valyuta;
              var oblast = arrayone[globalvalue].strana;
              var city = arrayone[globalvalue].city;
              var id = arrayone[globalvalue].id;
              var telephone = arrayone[globalvalue].telephone;
              var email = arrayone[globalvalue].email;
              var dostavka = arrayone[globalvalue].dostavka777;
              var opisanie = arrayone[globalvalue].opisanie;
              var sostoyanie = arrayone[globalvalue].res_peremen_string1;
              var date_start_aux777 = arrayone[globalvalue].date_start_aux777;
              var date_finish_aux777 = arrayone[globalvalue].date_finish_aux777;
              var selev_auditor777 = arrayone[globalvalue].selev_auditor777;
              var kol_uchastn777 = arrayone[globalvalue].kol_uchastn777;
              var watsapp = arrayone[globalvalue].watsapp;
              var viber = arrayone[globalvalue].viber;
              var obmen = arrayone[globalvalue].obmen;
              var instagram = arrayone[globalvalue].instagram;
              var vk = arrayone[globalvalue].vk;
              var skype = arrayone[globalvalue].skype;
              var mail = arrayone[globalvalue].mail;
              var google = arrayone[globalvalue].google;
              var other = arrayone[globalvalue].other;
              var chastn_liso = arrayone[globalvalue].chastn_liso;
              var companiya = arrayone[globalvalue].kompaniya;
              var biznes = arrayone[globalvalue].biznes;
              var agenstvo = arrayone[globalvalue].agenstvo;
              var naimenovanie = arrayone[globalvalue].naimenovanie;
              var commentarii = arrayone[globalvalue].commentarii;
              var komnat = arrayone[globalvalue].komnat;
              var obsh_ploshad = arrayone[globalvalue].obsh_ploshad;
              var etazh = arrayone[globalvalue].etazh;
              var mat_sten = arrayone[globalvalue].mat_sten;
              var tip_doma = arrayone[globalvalue].tip_doma;
              var et_v_dome = arrayone[globalvalue].et_v_dome;
              var year_build = arrayone[globalvalue].year_build;
              var sostoyanie22x = arrayone[globalvalue].sostoyanie22x;
              var sanuzel22x = arrayone[globalvalue].sanuzel22x;
              var dver22x = arrayone[globalvalue].dver22x;
              var poli22x = arrayone[globalvalue].poli22x;
              var telephone22x = arrayone[globalvalue].telephone22x;
              var balkon22x = arrayone[globalvalue].balkon22x;
              var parkovka22x = arrayone[globalvalue].parkovka22x;
              var steni22x = arrayone[globalvalue].steni22x;
              var internet22x = arrayone[globalvalue].internet22x;
              var balkon_osteklennii22x = arrayone[globalvalue].balkon_osteklennii22x;
              var mebel22x = arrayone[globalvalue].mebel22x;
              var otoplenie22x = arrayone[globalvalue].otoplenie22x;
              var signalizasiya22x = arrayone[globalvalue].signalizasiya22x;
              var videonabl22x = arrayone[globalvalue].videonabl22x;
              var konserzh22x = arrayone[globalvalue].konserzh22x;
              var domofon22x = arrayone[globalvalue].domofon22x;
              var ohrana22x = arrayone[globalvalue].ohrana22x;
              var kodov_zamok22x = arrayone[globalvalue].kodov_zamok22x;
              var reshetki_na_oknah22x = arrayone[globalvalue].reshetki_na_oknah;
              var datchik_dvizh22x = arrayone[globalvalue].datchik_dvizh22x;
              var video_domof22x = arrayone[globalvalue].video_domof22x;
              var udobno_pod_kommers22x = arrayone[globalvalue].udobno_pod_kommers22x;
              var neuglov22x = arrayone[globalvalue].neuglov22x;
              var plastik_okna22x = arrayone[globalvalue].plastik_okna22x;
              var kuhnya_studiya22x = arrayone[globalvalue].kuhnya_studiya22x;
              var uluchshennaya22x = arrayone[globalvalue].uluchshennaya22x;
              var komn_izolir22x = arrayone[globalvalue].komn_izolir22x;
              var new_santehnika22x = arrayone[globalvalue].new_santehnika22x;
              var vstroennaya_kuhnya22x = arrayone[globalvalue].vstroennaya_kuhnya22x;
              var imeetsya_kladov22x = arrayone[globalvalue].imeetsya_kladov22x;
              var schetchiki22x = arrayone[globalvalue].schetchiki22x;
              var tihii_dvor22x = arrayone[globalvalue].tihii_dvor22x;
              var konditioner22x = arrayone[globalvalue].konditioner22x;
              var rasst_ot_goroda25x = arrayone[globalvalue].rasst_ot_goroda25x;
              var s_doma25x = arrayone[globalvalue].s_doma25x;
              var type_doma25x = arrayone[globalvalue].type_doma25x;
              var year_build25x = arrayone[globalvalue].year_build25x;
              var rasst_ot_goroda26x = arrayone[globalvalue].rasst_ot_goroda26x;
              var s_doma26x = arrayone[globalvalue].s_doma26x;
              var s_uchastka26x = arrayone[globalvalue].s_uchastka26x;
              var type_doma26x = arrayone[globalvalue].type_doma26x;
              var rasst_ot_goroda27x = arrayone[globalvalue].rasst_ot_goroda27x;
              var s_uchastka27x = arrayone[globalvalue].s_uchastka27x;
              var kol_komnat28x = arrayone[globalvalue].kol_komnat28x;
              var s_obsh28x = arrayone[globalvalue].s_obsh28x;
              var etazh28x = arrayone[globalvalue].etazh28x;
              var et_v_zdanii28x = arrayone[globalvalue].et_v_zdanii28x;
              var type_ofisa28x = arrayone[globalvalue].type_ofisa28x;
              var s_obsh29x = arrayone[globalvalue].s_obsh29x;
              var etazh29x = arrayone[globalvalue].etazh29x;
              var et_v_zdanii29x = arrayone[globalvalue].et_v_zdanii29x;
              var type_pomesheniya29x = arrayone[globalvalue].type_pomesheniya29x;
              var year_build30x = arrayone[globalvalue].year_build30x;
              var s_obsh30x = arrayone[globalvalue].s_obsh30x;
              var et_v_dome30x = arrayone[globalvalue].et_v_dome30x;
              var mat_sten30x = arrayone[globalvalue].mat_sten30x;
              var type_zdaniya30x = arrayone[globalvalue].type_zdaniya30x;
              var s_obsh31x = arrayone[globalvalue].s_obsh31x;
              var type_pomesheniya31x = arrayone[globalvalue].type_pomesheniya31x;
              var srok_sdachi = arrayone[globalvalue].srok_sdachi;
              var kupit_ot33x = arrayone[globalvalue].kupit_ot33x;
              var kupit_do33x = arrayone[globalvalue].kupit_do33x;
              var valyuta33x = arrayone[globalvalue].valyuta33x;      /*30*/
              var marka40x = arrayone[globalvalue].marka40x;
              var model40x = arrayone[globalvalue].model40x;
              var year_build_car = arrayone[globalvalue].year_build_car;  /*100*/
              var probeg40x = arrayone[globalvalue].probeg40x;
              var obem40x = arrayone[globalvalue].obem40x;
              var korobka40x = arrayone[globalvalue].korobka40x;
              var bezdokov40x = arrayone[globalvalue].bezdokov40x;
              var bit_ili_na_zak40x = arrayone[globalvalue].bit_ili_na_zak40x;
              var prodazha_po_zapchast40x = arrayone[globalvalue].prodazha_po_zapchast40x;
              var trebuyutsya_vlozheniya40x = arrayone[globalvalue].trebuyutsya_vlozheniya40x;
              var eta_mash_na_zakaz40x = arrayone[globalvalue].eta_mash_na_zakaz40x;
              var mash_prosh_tuning40x = arrayone[globalvalue].mash_prosh_tuning40x;
              var rul40x = arrayone[globalvalue].rul40x;
              var toplivo40x = arrayone[globalvalue].toplivo40x;
              var privod40x = arrayone[globalvalue].privod40x;
              var svet40x = arrayone[globalvalue].svet40x;
              var sostoyanie_mash40x = arrayone[globalvalue].sostoyanie_mash40x;    /*14*/
              var marka_spes45x = arrayone[globalvalue].marka_spes45x;
              var model45x = arrayone[globalvalue].model45x;
              var probeg45x = arrayone[globalvalue].probeg45x;
              var obem45x = arrayone[globalvalue].obem45x;
              var korobka45x = arrayone[globalvalue].korobka45x;
              var bezdokov45x = arrayone[globalvalue].bezdokov45x;
              var bit_ili_na_zak45x = arrayone[globalvalue].bit_ili_na_zak45x;
              var prodazha_po_zapchast45x = arrayone[globalvalue].prodazha_po_zapchast45x;
              var trebyutsya_vlozheniya45x = arrayone[globalvalue].trebyutsya_vlozheniya45x;
              var eta_mash_na_zakaz45x = arrayone[globalvalue].eta_mash_na_zakaz45x;
              var sostoyanie_mash45x = arrayone[globalvalue].sostoyanie_mash45x;
              var rul45x = arrayone[globalvalue].rul45x;
              var toplivo45x = arrayone[globalvalue].toplivo45x;
              var privod45x = arrayone[globalvalue].privod45x;
              var svet45x = arrayone[globalvalue].svet45x;
              var year_build45x = arrayone[globalvalue].year_build45x;
              var kol_mest50x = arrayone[globalvalue].kol_mest50x;
              var nar50x = arrayone[globalvalue].nar50x;
              var vis_vish50x = arrayone[globalvalue].vis_vish50x;
              var nar50x2 = arrayone[globalvalue].nar50x2;
              var vis_vish50x2 = arrayone[globalvalue].vis_vish50x2;
              var gruzop50x2 = arrayone[globalvalue].gruzop50x2;
              var ob_sist51x = arrayone[globalvalue].ob_sist51x;    /*23*/
              var narab50x3 = arrayone[globalvalue].narab50x3;
              var vis_pod50x3 = arrayone[globalvalue].vis_pod50x3;
              var narab50x4 = arrayone[globalvalue].narab50x4;
              var ob_sist414x = arrayone[globalvalue].ob_sist414x;
              var narab50x5 = arrayone[globalvalue].narab50x5;
              var massa214x = arrayone[globalvalue].massa214x;
              var gruzop214x = arrayone[globalvalue].gruzop214x;
              var narab614x = arrayone[globalvalue].narab614x;
              var gruzop614x = arrayone[globalvalue].gruzop614x;
              var massa814x = arrayone[globalvalue].massa814x;
              var narab914x = arrayone[globalvalue].narab914x;
              var ob_kov514x = arrayone[globalvalue].ob_kov514x;
              var massa1014x = arrayone[globalvalue].massa1014x;
              var narab1114x = arrayone[globalvalue].narab1114x;
              var mosh1414x = arrayone[globalvalue].mosh1414x;      /*15*/      /*52*/
              var marka_legk67x = arrayone[globalvalue].marka_legk67x;
              var model67x = arrayone[globalvalue].model67x;
              var sost_zapch_legk77 = arrayone[globalvalue].sost_zapch_legk77;
              var marka_zapch_spes68x = arrayone[globalvalue].marka_zapch_spes68x;
              var sost_zapch_spes75 = arrayone[globalvalue].sost_zapch_spes75;
              var sena_ot_zap = arrayone[globalvalue].sena_ot_zap;
              var sena_do_zap = arrayone[globalvalue].sena_do_zap;
              var valyuta_zapch = arrayone[globalvalue].valyuta_zapch;
              var type_shina55x = arrayone[globalvalue].type_shina55x;
              var marka_shini55x = arrayone[globalvalue].marka_shini55x;
              var protector55x = arrayone[globalvalue].protector55x;
              var year_build_shina55x = arrayone[globalvalue].year_build_shina55x;
              var diam_shina55x = arrayone[globalvalue].diam_shina55x;
              var iznos_shina55x = arrayone[globalvalue].iznos_shina55x;
              var kol_shtuk55x = arrayone[globalvalue].kol_shtuk55x;
              var type_disk56x = arrayone[globalvalue].type_disk56x;
              var model_diska56x = arrayone[globalvalue].model_diska56x;
              var type_diska217x56x = arrayone[globalvalue].type_diska217x56x;
              var year_disk17x56x = arrayone[globalvalue].year_disk17x56x;
              var diam_diska17x56x = arrayone[globalvalue].diam_diska17x56x;
              var iznos_diska17x56x = arrayone[globalvalue].iznos_diska17x56x;
              var kol_shtuk_diskov17x56x = arrayone[globalvalue].kol_shtuk_diskov17x56x;
              var date_start_aux777 = arrayone[globalvalue].date_start_aux777;
              var date_finish_aux777 = arrayone[globalvalue].date_finish_aux777;
              var selev_auditor777 = arrayone[globalvalue].selev_auditor777;
              var kol_uchastn777 = arrayone[globalvalue].kol_uchastn777;
              var res_peremen_string1 = arrayone[globalvalue].res_peremen_string1;
              var res_peremen_string2 = arrayone[globalvalue].res_peremen_string2;
              var res_peremen_string3 = arrayone[globalvalue].res_peremen_string3;
              var res_peremen_chisl4 = arrayone[globalvalue].res_peremen_chisl4;
              var res_peremen_chisl5 = arrayone[globalvalue].res_peremen_chisl5;
              var res_peremen_chisl6 = arrayone[globalvalue].res_peremen_chisl6;
              var r_alm = arrayone[globalvalue].r_alm;
              var city_alm = arrayone[globalvalue].city_alm;
              var r_astana = arrayone[globalvalue].r_astana;
              var city_ast = arrayone[globalvalue].city_ast;
              var vremya_nachala_auxion = arrayone[globalvalue].vremya_nachala_auxion;
              var vremya_okonch_auxion = arrayone[globalvalue].vremya_okonch_auxion;
              var kol_prosmotrov = arrayone[globalvalue].kol_prosmotrov;

              if(kol_prosmotrov == null){
                  kol_prosmotrov = 0;
              }

              if(osnovnaya_sena == 777){
                osnovnaya_sena = "договорная | ";
              }else if(osnovnaya_sena == 999){
                osnovnaya_sena = "отдам даром | ";
              }


              var auxion = "";
              var auxion7 = "";
              var date_start_aux = "";
              var date_finish_aux = "";
              var selev_auditor = "";

              if(date_start_aux777 != 0){

                  auxion = "аукционный товар";
                  auxion7 = " ... ";
                  date_start_aux = "дата начала аукциона: ";
                  date_finish_aux = "дата окончания аукциона: ";

                  if(selev_auditor777 != "нет"){
                    selev_auditor = "целевая аудитория: ";
                  }

              }else{

                  auxion = "";
                  auxion7 = "";

                  date_start_aux = "";
                  date_start_aux777 = "";

                  date_finish_aux = "";
                  date_finish_aux777 = "";

                  selev_auditor = "";
                  selev_auditor777 = "";

              }

              var kol_uchastn77 = "";

              if(kol_uchastn777 == 0){
                kol_uchastn77 = "";
                kol_uchastn777 = "";
              }else{
                kol_uchastn77 = "количество участников: ";
              }

var array = ["цена: ","телефон: ","watsapp: ","viber: ","местоположение: ","город: ","продавец: ","состояние товара: ","доставка: ",
            "интересует обмен: ","инстаграм: ","в_контакте: ","skype: ","mail: ","google: ","другие: ","частное лицо: ","компания: ","бизнес: ",
            "агенство: ","наименование: ","количество комнат: ","общая площадь /кв.м: ","этаж: ","материал стен: ","тип дома: ","этажей в доме: ",
            "год постройки: ","состояние: ","сан.узел: ","дверь: ","полы: ","телефон: ","балкон: ","парковка: ","стены: ","интернет: ",
            "балкон остекленный: ","мебель: ","отопление: ","сигнализация: ","видеонаблюдение: ","консьерж: ","домофон: ","охрана: ",
            "кодовый замок: ","решетки на окнах: ","датчик движения: ","видео домофон: ","удобно под коммерцию: ","неугловая: ","пластиковые окна: ",
            "кухня студия: ","улучшенная: ","комната изолирована: ","новая сантехника: ","встроенная кухня: ","имеется кладовая: ","счетчики: ",
            "тихий двор: ","кондиционер: ","расстояние от города: ","площадь дома: ","тип дома: ","год постройки: ","расстояние от города: ",
            "площадь дома: ","площадь участка: ","тип дома: ","расстояние от города: ","площадь участка: ","количество комнат: ",
            "общая площадь /кв.м: ","этаж: ","этажей в здании: ","тип офиса: ","общая площадь /кв.м: ","этаж: ","этажей в здании: ",
            "тип помещения: ","год постройки: ","общая площадь /кв.м: ","этажей в доме: ","материал стен: ","тип здания: ","общая площадь /кв.м: ",
            "тип помещения: ","срок сдачи: ","купить от: ","купить до: ","валюта: ","марка машины: ","модель: ","год выпуска: ","пробег/км: ",
            "объем: ","коробка: ","интересует обмен: ","битый или на заказ: ","другие опции: ","требуются вложения: ","эта машина на заказ: ",
            "машина прошла тюнинг: ","руль: ","топливо: ","привод: ","цвет: ","состояние машины: ","марка спецтехники: ","модель: ",
            "пробег/км: ","объем: ","коробка: ","интересует обмен: ","битый или на заказ: ","продажа по запчастям: ","требуются вложения: ",
            "эта машина на заказ: ","состояние машины: ","руль: ","топливо: ","привод: ","цвет: ","год выпуска: ","количество мест: ","наработка: ",
            "высота вышки: ","наработка: ","высота вышки: ","грузоподъемность: ","объем цистерны: ","наработка: ","высота подьема: ","наработка: ",
            "объем цистерны: ","наработка: ","масса: ","грузоподъемность: ","наработка: ","грузоподъемность: ","масса: ","наработка: ",
            "объем ковша: ","масса: ","наработка: ","мощь: ","марка машины: ","модель: ","состояние запчасти: ","марка запчасти спецтехники: ",
            "состояние запчасти: ","цена от: ","цена до: ","валюта: ","тип шины: ","марка шины: ","протектор: ","год выпуска: ","диаметр шины: ",
            "износ шины: ","количество: ","тип дисков: ","модель диска: ","тип диска: ","дата выпуска: ","диаметр диска: ","износ диска: ",
            "количество штук: ","состояние: ","цвет: ","количество: ","описание: ",": ","ЖК: ",": ","ЖК: ","время начала аукциона: ",
            "время окончания аукциона: "];

var array2 = [osnovnaya_sena+" "+valyuta,telephone,watsapp,viber,oblast,city,email,sostoyanie,dostavka,obmen,instagram,vk,skype,mail,
              google,other,chastn_liso,companiya,biznes,agenstvo,naimenovanie,komnat,obsh_ploshad,etazh,mat_sten,tip_doma,et_v_dome,year_build,
              sostoyanie22x,sanuzel22x,dver22x,poli22x,telephone22x,balkon22x,parkovka22x,steni22x,internet22x,balkon_osteklennii22x,mebel22x,
              otoplenie22x,signalizasiya22x,videonabl22x,konserzh22x,domofon22x,ohrana22x,kodov_zamok22x,reshetki_na_oknah22x,datchik_dvizh22x,
              video_domof22x,udobno_pod_kommers22x,neuglov22x,plastik_okna22x,kuhnya_studiya22x,uluchshennaya22x,komn_izolir22x,new_santehnika22x,
              vstroennaya_kuhnya22x,imeetsya_kladov22x,schetchiki22x,tihii_dvor22x,konditioner22x,rasst_ot_goroda25x,s_doma25x,type_doma25x,
              year_build25x,rasst_ot_goroda26x,s_doma26x,s_uchastka26x,type_doma26x,rasst_ot_goroda27x,s_uchastka27x,kol_komnat28x,s_obsh28x,
              etazh28x,et_v_zdanii28x,type_ofisa28x,s_obsh29x,etazh29x,et_v_zdanii29x,type_pomesheniya29x,year_build30x,s_obsh30x,et_v_dome30x,
              mat_sten30x,type_zdaniya30x,s_obsh31x,type_pomesheniya31x,srok_sdachi,kupit_ot33x,kupit_do33x,valyuta33x,marka40x,model40x,
              year_build_car,probeg40x,obem40x,korobka40x,bezdokov40x,bit_ili_na_zak40x,prodazha_po_zapchast40x,trebuyutsya_vlozheniya40x,
              eta_mash_na_zakaz40x,mash_prosh_tuning40x,rul40x,toplivo40x,privod40x,svet40x,sostoyanie_mash40x,marka_spes45x,model45x,probeg45x,
              obem45x,korobka45x,bezdokov45x,bit_ili_na_zak45x,prodazha_po_zapchast45x,trebyutsya_vlozheniya45x,eta_mash_na_zakaz45x,
              sostoyanie_mash45x,rul45x,toplivo45x,privod45x,svet45x,year_build45x,kol_mest50x,nar50x,
              vis_vish50x,nar50x2,vis_vish50x2,gruzop50x2,ob_sist51x,narab50x3,vis_pod50x3,narab50x4,ob_sist414x,narab50x5,massa214x,gruzop214x,
              narab614x,gruzop614x,massa814x,narab914x,ob_kov514x,massa1014x,narab1114x,mosh1414x,marka_legk67x,model67x,sost_zapch_legk77,
              marka_zapch_spes68x,sost_zapch_spes75,sena_ot_zap,sena_do_zap,valyuta_zapch,type_shina55x,marka_shini55x,protector55x,year_build_shina55x,diam_shina55x,iznos_shina55x,
              kol_shtuk55x,type_disk56x,model_diska56x,type_diska217x56x,year_disk17x56x,diam_diska17x56x,iznos_diska17x56x,
              kol_shtuk_diskov17x56x,res_peremen_string1,res_peremen_string2,res_peremen_chisl4,opisanie,r_alm,city_alm,r_astana,
              city_ast,vremya_nachala_auxion,vremya_okonch_auxion];

              var testcount = array.length;
              var testcount2 = array2.length;
              var length = array2.length;


              for(var k=0; k < length; k++) {

                  if(array2[k] == "нет"){

                      array[k] = "";
                      array2[k] = "";

                  }else if(array2[k] == "0"){

                      array[k] = "";
                      array2[k] = "";

                  }else if(array2[k] == null){

                      array[k] = "";
                      array2[k] = "";

                  }else if(array2[k] == ""){

                      array[k] = "";
                      array2[k] = "";

                  }else if(array2[k] == "-1"){

                      array[k] = "";
                      array2[k] = "";

                  }else if(array2[k] == "Movies"){

                      //array[k] = "";
                      array2[k] = "да";

                  }else if(array2[k] == "zakaz"){

                      array[k] = "работаю";
                      array2[k] = "по заказу";

                  }else{/*zakritie if*/

                      array[k];
                      var b = "";
                      var c = "";

                      if(array2[k].length > 10){
                          for(var hl = 0;hl < array2[k].length;hl++){
                              if(hl > 10){

                                if(array2[k][hl] != ""){
                                  b += array2[k][hl];
                                }

                              }else{
                                  if(array2[k][hl] != ""){
                                    c += array2[k][hl];
                                  }

                              }
                          }
                      }


                  }

              } /*zakritie for*/

var templateh1 = zagolovok+' '+array[172]+array2[172]+' '+array[173]+array2[173]+array[174]+array2[174]+' '+
array[175]+array2[175];

      $(".inserth1us").empty();

      var templateedituser = '<li class="align-top"> <div class="item-content">'+
      ' <div class="item-inner"> <div class="item-title label">заголовок</div> <div class="item-input"> <textarea  name="заголовок" '+
      'required ng-model="user.description">' + templateh1 + '</textarea> </div> </div> </div> </li>';

      $(".inserth1us").append(templateedituser);

      //$(".inserth1us").empty();


      var templateob = "";
      var phone = "";
      var username = "";

for(var j = 0;j < array2.length;j++){

  if(array2[j] != ""){



      if(array[j] != "телефон: "){

          if(array[j] != "частное лицо: "){
                if(array[j] != "продавец: "){
                  if(array[j] != "местоположение: "){
                    if(array[j] != "город: "){

                      if(array[j] == "цена: "){

                          var newar = array2[j].split(' ');
                          array2[j] = newar[0];
                      }


                    //templateob += '<tr><td class="label-cell">'+ array[j] +'</td> <td  class="numeric-cell">'+ array2[j] +'</td></tr>';

                    //console.log(array[j]);

                    if(array[j] == "описание: "){

                        templateob += '<li class="align-top"> <div class="item-content">'+
                        ' <div class="item-inner"> <div class="item-title label">' + array[j] + '</div> <div class="item-input"> <textarea  name="' +array[j]+ '" '+
                        'required >' + array2[j] + '</textarea> </div> </div> </div> </li>';

                    }else{

                      if(array[j] == "цена: "){

                        templateob += '<li> <div class="item-content"> <div class="item-inner">'+
                      ' <div class="item-title label">'+ array[j] +'</div> <div class="item-input"> <input  ng-model="user.phone" '+
                      ' required name="' +array[j]+ '" class="myphone" type="text" value="'+ array2[j] +'"> </div> </div> </div> </li>';

                      }
                    }



                    }
                  }
                }

          }

      }

      if(array[j] == "телефон: "){
         // phone = '<tr><td class="label-cell">'+ array[j] +'</td> <td  class="numeric-cell">'+ array2[j] +'</td></tr>';
          phone = '<li> <div class="item-content"> <div class="item-inner">'+
                    ' <div class="item-title label">'+ array[j] +'</div> <div class="item-input"> <input  ng-model="user.phone" '+
                    ' required name="' + array[j] + '" class="myphone" type="text" value="'+ array2[j] +'"> </div> </div> </div> </li>';
          //$(".floating-button").attr("href","tel:" + array2[j]);
      }

      // if(array[j] == "частное лицо: "){
      //     username = '<li> <div class="item-content"> <div class="item-inner">'+
      //               ' <div class="item-title label">'+ array[j] +'</div> <div class="item-input"> <input  ng-model="user.phone" '+
      //               ' required name="' + array[j] + '" class="myphone" type="text" value="'+ array2[j] +'"> </div> </div> </div> </li>';
      // }



  }


}

    templateob += username;
    templateob += phone;


//photo


$(".inserth1us").append(templateob);



//form obrab
 //x5

 if(upevent == 0){

$(".updateevent").click(function(){

    var myupdateform = myApp.formToData('#edituserob');

              myupdateform = cleanxss(myupdateform);



              var newformarray = new Array();

              $.each(myupdateform, function(index, value) {

                  newformarray.push(value);

              });



              var newformsend = {
                  "zagolovok":newformarray[0],
                  "description":newformarray[2],
                  "phone":newformarray[3],
                  "sena":newformarray[1],
                  "obid":arrayone[globalvalue].id,
              }

              //console.log(newformsend);

              //return false;

                 var urlmessagesendb = localStorage.getItem("baseurl");

                $.ajax({
                      "type":"GET",
                      "url": urlmessagesendb + "updateinfocabinet/",    /*random restourants menu zakaZ*/

                      dataType: "jsonp",
                      crossDomain: true,
                      "data": newformsend,

                      "success":kx2881t,
                      "error":errorfunc2881t

                      });


                function kx2881t(result){

                        if(result[0] == "ok"){
                          myApp.alert('информация обновлена!','KAZPOISK');
                        }

                }

                function errorfunc2881t(){


                }

});

upevent = 1;


}

//form obrab





//text

var photo = "n.jpg";

var baseurlimg2 = localStorage.getItem("baseurlimg4");

$(".insertimgus").empty();

var photoar = new Array();

var g = 0;


//console.log(arrayone[globalvalue].email);

//zdes bilo photo





$('.loader-hide').css("display","block");


//photo module


                   var array_generatetwo1 = [];

                              var cnn1 = 0;
                              var cnn21 = 20;

                              for(var i = 0;i < cnn21; i++){

                                array_generatetwo1[i] = [];

                                array_generatetwo1[i][arrayone[globalvalue].id] = cnn1;

                                //arrayone[globalvalue].id

                              }




      if(globalfixcodecabinet == 0){



setInterval(function(){


//rab1

if(globalfixcabinet == 1){

var idss = arrayone[globalvalue].id;

var sendrequest = {

"id":idss,

}

//console.log(useridentificator4);



var urlhack = localStorage.getItem("baseurl");



              $.ajax({

                    "type":"GET",
                    "url": urlhack + "hack_photoappcabinet/",    /*random restourants menu zakaZ*/
                    dataType: "jsonp",
                    crossDomain: true,
                    "data": sendrequest,
                    "success":kxzaprosphoto,
                    "error":errorfunczapros

              });




function kxzaprosphoto(result){

  //console.log("1");

                        $(".appendphototwo").empty();


                        $('.loader-hide').css("display","none");

                        //console.log(result);

                        // if(fixedphoto == 1){

                        if(result[0] != "false"){

                            $(".gifloader").hide();




                            for(var g = 0; g < result[0].length;g++){
                            var imgurl = localStorage.getItem("baseurlimg2");
                            var appendstring = '<li> <a href="#" class="item-link item-content"> <div class="item-media">'+
                            '<img photoids="' + g + '" src="' + imgurl + result[0][g] + '" width="80"></div> <div class="item-inner"> '+
                            '<div class="item-title-row"> <div class="item-title"><button rmid="'+ idss +'" rmcount="'+ g +'" class="col button button-small button-fill rotatephtwoy">перевернуть</button></div> <div class="item-after"><button rmid="'+ idss +'" rmcount="' + g + '" class="button color-red removephy">удалить</button></div> </div> '+
                            '<div class="item-subtitle"></div> <div class="item-text"></div> </div> </a> </li>';
                            $(".appendphototwo").append(appendstring);


                            var imagerottwo = $('[photoids = '+ g +']');

                            var o = g;
                            var t = Number(o);
                            var p = 0;
                            p = array_generatetwo1[t][arrayone[globalvalue].id];

                            imagerottwo.css("transition","all 3s");
                            var rotate = "rotate(" + array_generatetwo1[t][arrayone[globalvalue].id] + "deg)";
                            imagerottwo.css("transform",rotate);

                            if(array_generatetwo1[t][arrayone[globalvalue].id] == 360){
                                  array_generatetwo1[t][arrayone[globalvalue].id] = 0;
                                }

                        }




                        //delete photo




                $(".rotatephtwoy").click(function(){

                    var rmid = $(this).attr("rmid");
                    var rmcount = $(this).attr("rmcount");

                    var imagerot = $(this).parent().parent().parent().prev().children("img");

                   var sendrm = {

                                    "rmid":rmid,
                                    "rmcount":rmcount

                                }

                                //console.log(useridentificator4);

                                   var rotateurl = localStorage.getItem("baseurl");

                                   //console.log($(this).parent().parent().parent().parent().attr("class"));

                                  $.ajax({
                                        "type":"GET",
                                        "url": rotateurl + "rotateuserapp/",

                                        dataType: "jsonp",
                                        crossDomain: true,
                                        "data": sendrm,

                                        "success":kx288111,
                                        "error":errorfunc288111

                                        });


                                  function kx288111(result){

                                          //console.log(result);

                                          var o = result[0];
                                          var t = Number(o);
                                          var p = 0;
                                          p = array_generatetwo1[t][arrayone[globalvalue].id];
                                          p += 90;
                                          array_generatetwo1[t][arrayone[globalvalue].id] = p;
                                          imagerot.css("transition","all 3s");
                                          var rotate = "rotate(" + array_generatetwo1[t][arrayone[globalvalue].id] + "deg)";
                                          imagerot.css("transform",rotate);

                                          if(array_generatetwo1[t][arrayone[globalvalue].id] == 360){
                                            array_generatetwo1[t][arrayone[globalvalue].id] = 0;
                                          }



                                  }

                                  function errorfunc288111(){

                                        console.log("error");

                                  }

              });


            $(".removephy").click(function(){

                        var rmid = $(this).attr("rmid");
                        var rmcount = $(this).attr("rmcount");

                        var rmdiv = $(this).parent().parent().parent().parent().parent();

                         var sendrm = {

                                          "rmid":rmid,
                                          "rmcount":rmcount

                                      }

                                      //console.log(useridentificator4);

                                         var removeurl = localStorage.getItem("baseurl");

                                         //console.log($(this).parent().parent().parent().parent().attr("class"));

                                        $.ajax({
                                              "type":"GET",
                                              "url": removeurl + "removephotoapp/",

                                              dataType: "jsonp",
                                              crossDomain: true,
                                              "data": sendrm,

                                              "success":kx28811,
                                              "error":errorfunc28811

                                              });


                                        function kx28811(result){


                                                if(result == "ok_delete"){
                                                    rmdiv.hide(1000);
                                                }

                                        }

                                        function errorfunc28811(){

                                              console.log("error");

                                        }

                    });

                        //delete photo


                        }

                        // }

}

function errorfunczapros(){

  $('.loader-hide').css("display","none");
  $(".appendphototwo").empty();


}


            $.ajax({

                    "type":"GET",
                    "url": urlhack + "hack_videoappcabinet/",    /*random restourants menu zakaZ*/
                    dataType: "jsonp",
                    crossDomain: true,
                    "data": sendrequest,
                    "success":kxzaprosvideo,
                    "error":errorfunczaprosv

            });


function kxzaprosvideo(result){



                      //console.log(result);
                      $(".appendvideotwo").empty();

                      if(result[0] != "false"){




                      for(var h = 0;h < result[0].length;h++){

                          var imgurl2 = localStorage.getItem("baseurlimg3");

                          var stringvideo = '<li class="item-content"> <div class="item-inner">'+
                          ' <div class="item-title">' + result[0][h] + '</div> </div> </li>';

                          $(".appendvideotwo").append(stringvideo);
                      }







                      }


}

            function errorfunczaprosv(){

                  $(".appendvideotwo").empty();
            }


}


},5000);

}



//module check photo


//back ivent



$(".backeventtwo").click(function(){

    globalfixcabinet = 0;

    //mainView.router.refreshPage("n1user");

    //$(".inserth1us").empty();

    mainView.router.back();

});
//back


//photo upload module

var myurl = localStorage.getItem("baseurl");


var numberfiles = 0;        //podschet kolichestva failov
var arrOfname = new Array();    //
var fixedlimituploadphoto = 0;
var fixedphoto = 0;
var fixedvideo = 0;


var control = document.getElementById("myfile5");

if(control){

      control.addEventListener("change", function(event) {


        $(".gifloader").show();

      var files = control.files;

      //console.log(control.files.length);


      for (var i = 0; i < control.files.length; i++) {

        //console.log(i);
        //console.log(control.files.length);


            var formData = new FormData();
            formData.append("myfile", files[i]);
            var d = files[i];
            var filename = files[i].name;
            var filesize = files[i].size;
            var filetype = files[i].type;
            var photo_path = filename;



            //dopolnitelnie dannie
            var useridentificator = localStorage.getItem("useremail");

            arrOfname.push(filename);
            formData.append("origname", filename);

            formData.append("idob", arrayone[globalvalue].id);

            formData.append("useridentificator", useridentificator);

            $('.progressbar').css("display","block");
            $('.loader-hide').css("display","block");





            function myvalidjpeg(string){


                  var arr = new Array("image/pjpeg","image/jpeg");
                  for(var i = 0; i < arr.length;i++){
                    if(string == arr[i]){
                      return true;
                    }
                  }


            };



            function myvalidvideo(string){


                  var arr2 = new Array("video/mpeg","video/mp4","video/msvideo","video/avi","application/x-troff-msvideo","video/x-msvideo");
                  for(var j = 0; j < arr2.length;j++){
                    if(string == arr2[j]){
                      return true;
                    }
                  }


            };

            if(myvalidjpeg(filetype) == true){


                    if(filesize > 5000000){

                        var mm7m = "Размер фото не должен превышать 5mb"
                        myApp.alert(mm7m,'Сервис');
                        numberfiles -= 1;
                        fixedlimituploadphoto--;
                        return false;

                    }

                    fixedphoto = 1;
                    $('.progressbar').css("display","block");
                    $('.loader-hide').css("display","block");

                    $.ajax({

                        "type":"POST",
                        processData: false,
                        contentType: false,
                        crossDomain: true,
                        "url":myurl + "do_uploadappcabinet/",
                        "data":formData ,
                        xhr: function(){

                            var xhr = new window.XMLHttpRequest();

                            //console.log(xhr);
                            //console.log(xhr);


                            // прогресс загрузки на сервер
                            xhr.upload.addEventListener("progress", function(evt){
                            if (evt.lengthComputable) {
                            var percentComplete = evt.loaded / evt.total * 100;
                            // делать что-то...

                            var progressbar = $$('.progressbar');
                            myApp.setProgressbar(progressbar, percentComplete);

                              if(percentComplete == 100){

                                  $('.loader-hide').css("display","none");
                                  $('.progressbar').css("display","none");
                                  $(".gifloader").hide();

                                  myApp.setProgressbar(progressbar, 10);

                              }


                            }
                            }, false);





                            return xhr;

                        },
                        "success":photosuccess,
                        "error":errorfunc
                    });

                    function photosuccess(res){           /*otvet foto*/

                                  //console.log(res);

                    };

                    function errorfunc(){

                      $('.progressbar').css("display","none");
                      $('.loader-hide').css("display","none");

                      myApp.alert('Ошибка сети, повторите загрузку фото','Сервис');
                    };






            }else if(myvalidvideo(filetype) == true){


                  if(filesize > 500000000){

                        var mm7m = "Размер видео не должен превышать 500mb"
                        myApp.alert(mm7m,'Сервис');
                        numberfiles -= 1;
                        exit;

                  }

                  fixedvideo = 1;
                  $('.progressbar').css("display","block");
                  $('.loader-hide').css("display","block");

                  $.ajax({


                      "type":"POST",
                      processData: false,
                      contentType: false,
                      "url":myurl + "do_uploadvideoappcabinet/",
                      "success":videofunc,
                      "data":formData ,
                       xhr: function(){

                            var xhr = new window.XMLHttpRequest();

                            //console.log(xhr);
                            //$('.loader-hide').css("display","none");


                            // прогресс загрузки на сервер
                            xhr.upload.addEventListener("progress", function(evt){
                            if (evt.lengthComputable) {
                            var percentComplete = evt.loaded / evt.total * 100;
                            // делать что-то...
                            //console.log(percentComplete);
                            var progressbar = $$('.progressbar');
                            myApp.setProgressbar(progressbar, percentComplete);

                              if(percentComplete == 100){

                                  $('.loader-hide').css("display","none");
                                  $('.progressbar').css("display","none");
                                  $(".gifloader").hide();

                                  myApp.setProgressbar(progressbar, 10);
                              }
                            }
                            }, false);

                            return xhr;

                        },

                      "error":errorfunc

                  });

                  function videofunc(res){   /*otvet video*/

                  };

                  function errorfunc(){

                    myApp.alert('Ошибка сети, повторите загрузку видео','Сервис');
                    $('.progressbar').css("display","none");
                    $('.loader-hide').css("display","none");


                  };
                  /*_________________________*/


            }else{

                $('.progressbar').css("display","none");
                $('.loader-hide').css("display","none");
                myApp.hidePreloader();
                myApp.alert('фото не удовлетворяет требованиям','Сервис');
                return false;

            }


      }       /*kones for*/













      }, false);

}

//photo upload module

      globalfixcabinet = 1;
      globalfixcodecabinet = 1;




          },10);






}




});







           function checkLoginState() {
            FB.getLoginStatus(function(response) {
              statusChangeCallback(response);
            });
          }

        function statusChangeCallback(response){


          console.log(response);



              if(response.status == "connected"){
                  console.log("connected");

                  getUseridentification();
                  //console.log(response);
              }else{
                  console.log("not authentification");
              }

            }


                            function getUseridentification(){
                              FB.api('/me?fields=id,name,email',function(response){
                                if(response && !response.error){

                                  var userobj = response;

                                  var name = userobj.name;
                                  var email = userobj.email;

                                  var sendauth = {
                                                    "name":name,
                                                    "email":email
                                                }


                                                console.log(sendauth);


                                             var authurl = localStorage.getItem("baseurl") + "facebook_auth/";

                                                  $.ajax({
                                                        "type":"GET",
                                                        "url": authurl,

                                                        dataType: "jsonp",
                                                        crossDomain: true,
                                                        "data": sendauth,

                                                        "success":authsuccess,
                                                        "error":errorauth

                                                        });


                                                  function authsuccess(result){

                                                      if((result[0] == "olduser") || (result[0] == "newuser")){

                                                            $(".hide_reg").hide();
                                                            $(".hide_login").hide();
                                                            $(".show_vihod").show();
                                                            $(".hide_cabinet").show();

                                                            localStorage.setItem("role","2");
                                                            localStorage.setItem("useridentificator","0(000)0000000");//phone
                                                            localStorage.setItem("useremail",result[1]);

                                                            console.log(result[1]);

                                                        }
//xf



                                                  }

                                                  function errorauth(){


                                                  }
                  //console.log(name + " | " + email);
                }
              });
            }



        window.fbAsyncInit = function() {
            FB.init({
               appId      : '486268101757167',
                cookie     : true,
                xfbml      : true,
                version    : 'v2.12'
            });

            FB.getLoginStatus(function(response) {

              statusChangeCallback(response);

             });

          };


          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));


//var b = 0;





//send ob








//propisat filtr zashiti



//НАСИЛИЕ

//МАТЕРИАЛЫ СЕКСУАЛЬНОГО ХАРАКТЕРА

//ЛЕКСИКА

//ЗАПРЕЩЕННЫЕ ВЕЩЕСТВА

//ФИЗИЧЕСКИЕ ТОВАРЫ С ОГРАНИЧЕНИЕМ ПО ВОЗРАСТУ
//propisat filtr zashiti




//  f0e186a8ea1a48c290e9674c591e217d instagram id
//   f0440194c71a45b49057a184c3dcd31d --secret key for instagram
