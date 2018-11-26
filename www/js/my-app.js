          var myApp = new Framework7({
            // App root element
                  root: '#app',
                  // App Name
                  name: 'kazpoisk',
                  // App id
                  id: 'kz.kazpoisk.www',
                  // Enable swipe panel
                  panel: {
                    swipe: 'left',
                  },
                  // Add default routes
                  routes: [
                    {
                      path: '/about/',
                      url: 'about.html',
                      name:'about'
                    },
                    {
                      path: '/addcategory/',
                      componentUrl: 'addcategory.html',
                      name:'addcategory'
                    },
                    {
                      path: '/registration/',
                      url: 'registration.html',
                      name:'registration'
                    },
                    {
                      path: '/add/',
                      url: 'add.html',
                      name:'add'
                    },
                    {
                      path: '/login/',
                      url: 'login.html',
                      name:'login'
                    },
                    {
                      path: '/cabinet/',
                      url: 'cabinet.html',
                      name:'cabinet'

                    },
                    {
                      path: '/home/',
                      url: 'main.html',
                      name:'home'
                    },
                    {
                      path: '/n1/',
                      url: 'n1.html',
                      name:'n1'
                    }
                  ],

                  statusbar: {
                    //iosOverlaysWebView: true,
                    enabled:false,
                  },
            // ... other parameters
          });


          var mainView = myApp.views.create('.view-main');

          var router = mainView.router;

          myApp.statusbar.hide();


          var $$ = Dom7;


          var globaltime = 0;

          var appversion = 6;

          var migrateitem = new Array();


          var globalvalue = 0;
          var globalvaluegetlocalob = 0;
          var globalfixcabinet = 0;
          var globalfixcodecabinet = 0;
          var globalfixobupload = 0;
          var upevent = 0;
          var phoneid = 0;
          var openpopup = 0;
          var platform = "";


          function onAppReady() {
              if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
                  navigator.splashscreen.hide();

              }
          }

          document.addEventListener("app.Ready", onAppReady, false);


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

                  platform = window.device.platform;



                  searchContacts();

                  $(".jbutton").click(function(){

                        var value = $(this).attr('data-value');

                        $(".my-gauge").attr("data-value","0.50");


                  });



              },
              // Update DOM on a Received Event
              receivedEvent: function(id) {
                  console.log("ready_app");
                  //setdeviceinfo
                          //console.log(window.location.href);
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

                          if(useridentificator6 == 0){
                              $(".show_vihod").hide();
                              $(".hide_cabinet").hide();
                          }

                          var role = localStorage.getItem("role");




                          $(".cabinetclick").click(function(){

                              var useridentificator = localStorage.getItem("useridentificator");

                              if(useridentificator == 0){
                                //  mainView.router.loadPage("login.html");
                                  router.navigate({ name: 'login' });
                              }else{
                                  //mainView.router.loadPage("cabinet.html");
                                  router.navigate({ name: 'cabinet' });
                              }

                          });



                          $(".vhod").click(function(){
                                //mainView.router.loadPage("login.html");
                                router.navigate({ name: 'login' });
                          });

                          $(".registration").click(function(){
                              //  mainView.router.loadPage("registration.html");
                                //router.navigate("registration.html");
                                router.navigate({ name: 'registration' });
                          });





                                //insertob

                                firstviewob();


                                setTimeout(function(){
                                    checkuserid();
                                },3000);

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

              $(".searchbutton").css("height","12%");


          });

          $(".top_input").blur(function(){

            var height = $(window).height();


              $(".opensearch").css("top","13%");
              $(".searchbutton").css("top","13%");


            $(".searchbutton").css("height","6%");


          });


          // document.addEventListener("deviceready", onDeviceReady, false);
          //             function onDeviceReady() {




          //             }//kones ondevice ready

          function savefinding(){

              if(checkuserauth() == false){
                  myApp.dialog.prompt('Для продолжения работы введите ваш "EMAIL" ','KAZPOISK', function (email) {

                      if(checkemail(email) == true){
                        myApp.dialog.alert('Большое спасибо ваш EMAIL ' + email + ' зарегистрирован в нашей системе и будет использоваться для оповещений о новых результатах по вашим запросам','KAZPOISK');
                        auto_registration(email);
                      }else{
                        myApp.dialog.alert(' пожалуйста введите правильный EMAIL ','KAZPOISK');
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
                              myApp.dialog.alert('Благодарю за авторизацию )) .. теперь вы можете продолжить работу ','Kazpoisk');
                          }else{

                              myApp.dialog.alert('введенный пароль неправильный .. повторите пожалуйста ввод ','Kazpoisk');
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
                  myApp.dialog.prompt('Введите пароль от вашей почты ' + email + ' ( проверка подлинности владельца почтового ящика)','KAZPOISK', function (password) {

                      var sendrequest = {
                          "email":email,
                          "password":password,
                          "deviceid":ndeviceid,
                      }

                      console.log(sendrequest);
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
                                              myApp.dialog.alert('приложение нуждается в обновлении! Пожалуйста обновите приложение. после перенаправления нажмите обновить(UPDATE)','Kazpoisk');

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
//xxxx
                                            var countfindobjects = result[0].length;

                                            $(".searchkvbutton").text("найдено " + countfindobjects + " публикаций");

                                            setTimeout(function () {
                                                myApp.preloader.hide();
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
//llll

          var templateobyav = '<li status="'+ newstatus + '" listid="'+ newstatus + " | " + statusid
          +'" class="li_img_styling exmachange"> <div ident="'+ i +'" cashid="' + result[3] + '" class="viewob imgheight" style="background: url(' + photourl
          + ') no-repeat center/cover;"> <div class="imgheight_div"> <div class="imgheight_title" >' + result[0][i].zagolovok
          + '</div> <div class="imgheight_text" >'+ cityview +'</div> <div class="imgheight_text" >'
          + array[0] + array2[0]+' '+array[1]+array2[1]+array[2]+array2[2]+' '+array[3]+array2[3] + ' ' + op
          + '</div> <div class="imgheight_text" >'+ result[0][i].sena + 'тг.' +'</div> </div> </div> </li>';



           var admin_template = '<li > <a href="#" ident="'+ i +'" class=" item-link item-content"> <div class="item-media"><img src="' + photourl + '" '+
           ' width="80" height="80" style="background-size:cover;"></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">'+ result[0][i].zagolovok +'</div>'+
           ' <div class="item-after">'+ result[0][i].sena +'</div> </div> <div class="item-subtitle">'+ result[0][i].city +'</div>'+
           ' <div class="item-text" style="margin-top:1px;"><div class="row">'+
           '<i style="color:#4cd964;border:1px solid #4cd964;border-radius:5px;padding:4px;" ident="'+ i +'" class="material-icons color-green viewobuser">&#xE869;</i>'+
           '<i style="color:#007aff;border:1px solid #007aff;border-radius:5px;padding:4px;"  upob="'+ statusid + '" class="material-icons color-blue upob">&#xE8E5;</i>'+
           '<i style="color:#ff9500;border:1px solid #ff9500;border-radius:5px;padding:4px;"  retimeid="'+ statusid + '" class="material-icons color-orange retimeob">&#xE192;</i>'+
           '<i style="color:#ff3b30;border:1px solid #ff3b30;border-radius:5px;padding:4px;"   rmid="'+ statusid + '" class="material-icons color-red deleteob">&#xE92B;</i></div></div> </div> </a> </li>';


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
                                                                              myApp.dialog.alert('Объявление удалено в архив!','Kazpoisk');
                                                                            }else{
                                                                              myApp.dialog.alert('Действие не удалось!','Kazpoisk');
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
                                                                              myApp.dialog.alert('Объявление восстановлено!','Kazpoisk');
                                                                            }else{
                                                                              myApp.dialog.alert('Действие не удалось!','Kazpoisk');
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

                                                //  mainView.router.loadPage("#n1");
                                                  router.navigate({ name: 'n1' });

                                                  globalvalue = ident;

                                                  globalvaluegetlocalob = ncashid;

                                                  console.log("first_param" + globalvaluegetlocalob);




                                              });
                                            }






                                        }



            }       //kones function


            function insertviewobaddmincount(result){


              var role = localStorage.getItem("role");

                if(result[0] != "false"){

                  //$(".insertob").empty();

                                            var countfindobjects = result[0].length;

                                            $(".searchkvbutton").text("найдено " + countfindobjects + " публикаций");

                                            setTimeout(function () {
                                                myApp.preloader.hide();
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


          var admin_template = '<li > <a href="#" ident="'+ i +'" class=" item-link item-content"> <div class="item-media"><img src="' + photourl + '" '+
          ' width="80" height="80" style="background-size:cover;"></div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">'+ result[0][i].zagolovok +'</div>'+
          ' <div class="item-after">'+ result[0][i].sena +'</div> </div> <div class="item-subtitle">'+ result[0][i].city +'</div>'+
          ' <div class="item-text" style="margin-top:1px;"><div class="row">'+
          '<i style="color:#4cd964;border:1px solid #4cd964;border-radius:5px;padding:4px;" ident="'+ i +'" class="material-icons color-green viewobuser">&#xE869;</i>'+
          '<i style="color:#007aff;border:1px solid #007aff;border-radius:5px;padding:4px;"  upob="'+ statusid + '" class="material-icons color-blue upob">&#xE8E5;</i>'+
          '<i style="color:#ff9500;border:1px solid #ff9500;border-radius:5px;padding:4px;"  retimeid="'+ statusid + '" class="material-icons color-orange retimeob">&#xE192;</i>'+
          '<i style="color:#ff3b30;border:1px solid #ff3b30;border-radius:5px;padding:4px;"   rmid="'+ statusid + '" class="material-icons color-red deleteob">&#xE92B;</i></div></div> </div> </a> </li>';


          //lll
          if(role == "1"){
           $(".insertob").append(admin_template);
          }else{
           $(".insertob").append(templateobyav);
          }





                                            }


          //xxx
                                              //console.log(result[3]);


                                            localStorage.setItem("ob" + result[3],JSON.stringify(result));

                                            migrateitem.push("ob" + result[3]);
                                            //console.log(migrateitem);
                                            localStorage.removeItem("migrateitem");
                                            localStorage.setItem("migrateitem",JSON.stringify(migrateitem));

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
                                                                              myApp.dialog.alert('Объявление удалено в архив!','Kazpoisk');
                                                                            }else{
                                                                              myApp.dialog.alert('Действие не удалось!','Kazpoisk');
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
                                                                              myApp.dialog.alert('Объявление восстановлено!','Kazpoisk');
                                                                            }else{
                                                                              myApp.dialog.alert('Действие не удалось!','Kazpoisk');
                                                                            }

                                                                    }

                                                                    function errorfunc(){


                                                                    }


                                              });


                                            }else{
                                              $(".viewob").click(function(){

                                                  var ident = $(this).attr("ident");

                                                  var cashid = $(this).attr("cashid");

                                                  //mainView.router.loadPage("#n1");

                                                  router.navigate({ name: 'n1' });

                                                  globalvalue = ident;
                                                  globalvaluegetlocalob = cashid;    //identificator latest id

                                                  console.log(cashid);




                                              });
                                            }






                                        }



            }       //kones function






          //service function







          //routing

          // localStorage.setItem("baseurl","http://ls2.kz/public_control/");
          // localStorage.setItem("baseurlimg","http://ls2_mobile.kz/assets/img/");
          // localStorage.setItem("baseurlimg2","http://ls2_mobile.kz/assets/entry/uploads/");
          // localStorage.setItem("baseurlimg3","http://ls2_mobile.kz/assets/entry/uploadsv/");
          // localStorage.setItem("baseurlimg4","http://ls2.kz/assets/entry/uploads/");


          localStorage.setItem("baseurl","http://www.kazpoisk.kz/public_control/");
          localStorage.setItem("baseurlimg","http://www.kazpoisk.kz/assets/img/");
          localStorage.setItem("baseurlimg2","http://www.kazpoisk.kz/assets/entry/uploads/");
          localStorage.setItem("baseurlimg3","http://www.kazpoisk.kz/assets/entry/uploadsv/");
          localStorage.setItem("baseurlimg4","http://www.kazpoisk.kz/assets/entry/uploads/");


          //opredelenie avtorizovan li polzovatel


          //opredelenie avtorizovan li polzovatel

          //console.log(useridentificator);

          //baseUrl localstorage








          //https://www.tutorialspoint.com/cordova/cordova_file_system.htm   -- site cordova



          $$(document).on('page:init', '.page[data-name="about"]', function (e) {
            // Do something here when page with data-name="about" attribute loaded and initialized
          });







          var angularApp = angular.module('angularApp', []);




          $('[name = "kategory"] option').click(function(){

                var children = $(this).val();

                console.log(children);


          });






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

                               var valueattribute3 = $(element).children("div").children("div").children("input");

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

                               valueattribute3.each(function(){

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


          //validate angular
          //http://jsfiddle.net/2G8gA/1/

        //  myApp.onPageBeforeAnimation('add', function (page) {


        //  myApp.onPageBeforeAnimation('addcategory', function (page) {
              $$(document).on('page:beforein', '.page[data-name="addcategory"]', function (e) {



                  console.log("addcategory");
                  globalfixobupload = 0;

            });

          //rab3










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

                    //  mainView.router.loadPage("#n1");
                      router.navigate({ name: 'n1' });


                };

              $scope.chiliSpicy = function() {
                  $scope.spice = 'js/addcategory/subcategory/avto.html';
              };

              $scope.jalapenoSpicy = function() {
                  $scope.spice = 'js/addcategory/subcategory/nedvizh.html';
              };
          }]);







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


          var pickerDependent50 = myApp.picker.create({
              inputEl: '#regionpickertwo',
              toolbarCloseText:'закрыть',
              closeByOutsideClick:true,
              rotateEffect: true,
              formatValue: function (values) {
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
            $(".returnsearch").hide();

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
          var pickerDependentsearch = myApp.picker.create({
              inputEl: '#picker-dependentsearch',
              toolbarCloseText:'закрыть',
              rotateEffect: true,
              formatValue: function (values) {
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


          var pickerDependentsearch2 = myApp.picker.create({
              inputEl: '#picker-dependentsearchzapch',
              toolbarCloseText:'закрыть',
              rotateEffect: true,
              formatValue: function (values) {
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


          var pickerDevice8 = myApp.picker.create({
              inputEl: '#picker-type88',
              toolbarCloseText:'закрыть',
              cols: [
                  {
                      textAlign: 'center',
                      values: ['белый','черный','серый','серебристый','серебристый','синий','голубой','зеленый','красный','бордовый','оранжевый','розовый','бежевый','желтый','золотистый','коричневый','фиолетовый']

                  }
              ]
          });

          var pickerDevice8 = myApp.picker.create({
              inputEl: '#picker-type888',
              toolbarCloseText:'закрыть',
              cols: [
                  {
                      textAlign: 'center',
                      values: ['белый','черный','серый','серебристый','серебристый','синий','голубой','зеленый','красный','бордовый','оранжевый','розовый','бежевый','желтый','золотистый','коричневый','фиолетовый']

                  }
              ]
          });



          var pickerDevice = myApp.picker.create({
              inputEl: '#picker-sdependentsearch',
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



          var pickerDevice = myApp.picker.create({
              inputEl: '#picker-sdependentsearchshina',
              toolbarCloseText:'закрыть',
              cols: [
                  {
                      textAlign: 'center',
                      values: ['любая марка','Белшина','Алтайшина','Арктиктранс','Волтайр','Воронежшина','Днепрошина','Кама / Нижнекамскшина','КШЗ','Мастер-Спорт','МШЗ','Омскшина','Уралшина','ЯМЗ','Cordiant','Matador','Accelera','Achilles','Aderenza','Advance','Aeolus','Agate','Alliance','Altenzo','AmberWay','America','AMP_M','T_Terrain_Master','Amtel','Anjie','F811','Annaite','386','Antares','Antyre','Aotel','Aplus','Apollo','Arctic_Claw','Winter_Xsi','Armour','Armpower','Atlas','Atturo','Aufine','Auplus','Aurora_Tire','Austone','Austyre','Autogrip','Autoguard','Avatyre_Freeze','Avon','Barum','BFGoodrich','Big_O_Tires_Big_Foot_A','T_All_Terrain','Blacklion','Blackstone','Blue','Streak','Bontyre','Boto','Brasa','Bridgestone','Capitol','Carbon_Series','CEAT','Chengshan','Clear','Comforser','Constancy','Continental','Contyre','Cooper','Cordiant','Cordovan','Crosswind','Daewoo','Dayton','Dean_Tires','Debica','Deestone_D','102','Delfin','Delinte_Thunder','Dextero','Dick_Cepek','Diplomat','Dmack','Doral','Double_Coin_RLB450','Doublestar','Dunlop','Duro','Durun','Effiplus','Eldorado','ESA','Tecar','Eurotec','Euzkadi','Evenking','Evergreen','EXTREME_Performance_tyres','Falken','Farroad','Fate','Federal','Fedima','Fenglun','FL268','Fenix','Fierce','Finixx','Firestone','Firststop','Flamingo','Force','Formula','Fortio_WN','01','Fortuna','Fulda','Fullrun','FullWay','Fuzion','General_Tire','Geostar','Geotrac','Gislaved','Giti','Goform_W705','Gold_Partner','Goodride','Goodtyre_YB258','Goodyear','GrandTour','Green_Dragon','GreenDiamond_C790','Gremax','Gripmax','GT_Radial','Haida','HanKang','Hankook','Headway','Hercules','Hero','Herovic','Herse','Hifly','Hilo','Hoosier','Horizon','Imperial','Indoradial','Infinity','Innova','Insa','Turbo','Interco','Interstate','Ion_Alloy','Ironman','Jetzon','Tire','Jinyu','Joyroad','Kapsen','Kelly','Kenda','Kenex','Kinforest','King_Meiler','Kingrun','Kingstar','Kleber','Kormoran','Koryo','Kumho','Lakesea','Lander_Sea','Landsail','Lassa','Lexani','LingLong','Litio','Long','March','Mabor','Maloya','Marangoni','Marshal','Mastercraft','Matador','Maxgrade','Maxtrek','Maxxis','Mayrun','Medeo','Mentor','Merit','Meteor','Michelin','Mickey','Thompson','Milestone','Millennium','Minerva','Mitas','MotoMaster','Motrio','Multi','Mile','Nankang','Neuton','Nexen','Nitto','Nokian','NorTec','Northtrek','Novex','Green','Otani_King_Cobra_Extreme','Ovation_VI','702','Pace','Parnelli_Jones_Dirt_Grip','Passage','Petlas','Pinso_PS','91','Pirelli','Pit_Bull','Platin','Pneumant','PointS','Power_Tire','Premiorri','Presa','President','Prestivo','Primewell','Pro_Comp','PROFIL','Radar','Rapid','Regal','Remington_Tire','Rhino_King','Riken','Roadguider','Roadshine','Roadstone','Rockstone','Rosava','Rotalla','Rotex','Runway','Saffiro','Sagitar','Sailun','Satoya','Sava','Semperit','Silverstone','Sime_Tyres','Simex','Solideal','Sonar','Sonny','Sportiva','Sportrak_BYD68','Sprut','Starfire','Stark_Proto','Starperformer','Strata_ZENO_UHP','Stunner','Sumitomo','Sumo','Sunew','Sunfull','Sunitrac','Sunny','Suntek','Superhawk_HK867','Superia','Superstone_Crocodile_Xtreme','Syron','Targum','Techking','Telstar_Tire','Thunderer','Tianfu','Tigar','Toryo','Toyo','Tracmax','Transtone','Trayal','Trazano','Trelleborg','Tri_Ace','Triangle_Group','Tristar','Tunga','TyRex','shield_WS118','Uniglory','Uniroyal','Universal','Viatti','Viking','Vredestein','VSP','Wanli','Warrior_Fluent','R21','Waynner_WIN12','Westlake_Tyres','Wind','Power','Winter_Tact','YellowSea','Yokohama','Zeetex','Zeta','Zetro']
                  }
              ]
          });


          var pickerDevice = myApp.picker.create({
              inputEl: '#picker-sdependentsearchdiski',
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
        //  myApp.onPageBeforeAnimation('n1', function (page) {

          //module view ob page


          //module search input


          $("#musearchinput").keypress(function(){

              var searchstring = $(this).val();


              if(validatexss(searchstring)){

                    if(searchstring.length > 2){



                    myApp.preloader.show('работаю..');

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
                                      myApp.preloader.hide();
                                  }else{
                                    myApp.preloader.hide();
                                  }

                                  myApp.preloader.hide();

                          }

                          function errorsearch(){

                              myApp.preloader.hide();
                          }

                      }

              }else{

                    myApp.preloader.show('ip адрес сохранен, поиск вашего местоположения, определение номера телефона.. ваш номер определен.. ваш номер и положение занесены в базу данных :) !');

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
                    //  mainView.router.loadPage("#addcategory");
                      router.navigate({ name: 'addcategory' });
                  }else{
                      //mainView.router.loadPage("login.html");
                      router.navigate({ name: 'login' });

                      myApp.dialog.alert('войдите или зарегистрируйтесь!','Kazpoisk');
                  }



              }else{

                //  mainView.router.loadPage("login.html");
                  router.navigate({ name: 'login' });

                  myApp.dialog.alert('войдите или зарегистрируйтесь!','Kazpoisk');

              }


          });




          var checkcabinet = 0;

          //x77




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

                                          checkOsenka();

          },5000);
