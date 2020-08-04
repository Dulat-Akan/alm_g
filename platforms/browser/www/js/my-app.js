//localStorage.setItem("category1",categoryname);

//useridentificator
//baseurl
//userid

//globalstatus

var globalstatusgame = 1;
var enableOrientation = 1;
var phoneid = 12345;
//globalstatus

//cashing pages
var tablePage = "table.html";
//cashing pages

var myApp = new Framework7({
  tapHold: true, //enable tap hold events
  fastClicks:true,
  cache: false, /* disable caching */
  cacheDuration: 0
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    //domCache: true //enable inline pages

});

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






//function cordova file

document.addEventListener("deviceready", onDeviceReady, false);
            function onDeviceReady() {





                var useridentificator = localStorage.getItem("useridentificator");

                //console.log(useridentificator);

                if(!useridentificator){
                    localStorage.setItem("useridentificator","0");
                }else{
                  var useridentificator6 = localStorage.getItem("useridentificator");



                if(useridentificator6 != 0){

                    $(".hidecontent").hide();

                }

                if(useridentificator6 == 0){
                    $(".show_vihod").hide();
                    $(".hide_cabinet").hide();


                }
                }



                var role = localStorage.getItem("role");

                if(role == 2){
                  $(".myorder").show();
                }else{
                  $(".myorder").hide();
                }

                if(role == 1){
                  $(".restourantsorder").show();
                }else{
                  $(".restourantsorder").hide();
                }

                //console.log(useridentificator6);


                //check hacking

                var sendst = {

                            "st":"st",

                        }

                        //console.log(useridentificator4);
//rab
                           var url = localStorage.getItem("baseurl");



                          $.ajax({
                                "type":"GET",
                                "url": url + "statusk/",    /*random restourants menu zakaZ*/

                                dataType: "jsonp",
                                crossDomain: true,
                                "data": sendst,

                                "success":kxst,
                                "error":errorfuncst

                                });


                          function kxst(result){

                                 //console.log(result[0]);
                                 globalstatusgame = result[0];

                          }

                          function errorfuncst(){

                              console.log("err");
                          }
                //check hacking

                //device information


                //device information
                phoneid = window.device.uuid;
                //x1

                function generateRandomNumber(min_value , max_value)
                {
                    return Math.random() * (max_value-min_value) + min_value;
                }

                var checkphoneid = localStorage.getItem("phoneid");

                var fixdevicememory = 0;
                //if device id is in memory is not empty
                if(checkphoneid){
                    localStorage.setItem("phoneid",checkphoneid);
                    //console.log("checked");
                    fixdevicememory = 1;
                    phoneid = checkphoneid;
                }

                if((phoneid == null) && (fixdevicememory == 0)){

                  //console.log("new hash");

                  var generatevalue = generateRandomNumber(1,5555555555555);

                  localStorage.setItem("phoneid",generatevalue);

                  phoneid = generatevalue;

                  //console.log("2222");

                }else if(phoneid != null){
                  localStorage.setItem("phoneid",phoneid);
                }

                //console.log(phoneid);

                try {
                  navigator.splashscreen.hide();
                } catch (e) {

                }






            }


          var useridentificator = localStorage.getItem("useridentificator");

                //console.log(useridentificator);

                if(!useridentificator){
                    localStorage.setItem("useridentificator","0");
                }else{
                  var useridentificator6 = localStorage.getItem("useridentificator");



                if(useridentificator6 != 0){

                    $(".hidecontent").hide();

                }

                if(useridentificator6 == 0){
                    $(".show_vihod").hide();
                    $(".hide_cabinet").hide();
                }
                }

// function cordova upload and download








//routing

  //localStorage.setItem("baseurl","http://localhost/casino/basic/web/roulette/");
//localStorage.setItem("baseurl","http://almagames.mypsx.net/roulette/");
 localStorage.setItem("baseurl","https://almagames.mypsx.net/roulette/");
//localStorage.setItem("baseurl","http://localhost/casino/basic/web/index.php/roulette/");

//opredelenie avtorizovan li polzovatel


//opredelenie avtorizovan li polzovatel

//console.log(useridentificator);

//baseUrl localstorage








//https://www.tutorialspoint.com/cordova/cordova_file_system.htm   -- site cordova







myApp.onPageInit('registration', function (page) {

function show1() {
    var p = document.getElementById('password1');
    p.setAttribute('type', 'text');
}

function hide1() {
    var p = document.getElementById('password1');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye1").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show1();
    } else {
        pwShown = 0;
        hide1();
    }
}, false);

function show2() {
    var p = document.getElementById('password2');
    p.setAttribute('type', 'text');
}

function hide2() {
    var p = document.getElementById('password2');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye2").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show2();
    } else {
        pwShown = 0;
        hide2();
    }
}, false);

$( "#emailr" ).focus(function() {
  var scroll = $(this).offset().top;
  $("#regr").scrollTop(scroll);
});
$( "#password1" ).focus(function() {
  var scroll = $(this).offset().top;
  $("#regr").scrollTop(scroll);
});
$( "#password2" ).focus(function() {
  var height = window.innerHeight
  var scroll = height-100;

  $("#regr").scrollTop(scroll);
});


                    $( "#phonecr" ).change(function() {
                      var phonec = $('#phonec').val();
                      $('#pcsr').html(phonec);
                    });



                    $$('.form-to-register').on('click', function(){

                      var validation = 0;


                      var formData = myApp.formToData('#form-registration');

                        var pcs = $('#pcsr').html();
                        var phone = formData['phoner'];
                        var withpcs = pcs+formData['phone'];
                        formData['phone']=withpcs;

                            //console.log(formData['phone']);
                      // checkbox license
                      var checklicense = $("#license").prop("checked");

                      if(checklicense){
                            validation=0;
                      }else{
                        validation=2;
                      }
                      $("#license").change(function(){

                      checklicense = $(this).prop("checked");

                      if(checklicense){
                            validation=0;
                      }else{
                        validation=2;
                      }


                    });
                      //console.log("license "+checklicense);
                    // end checkbox license





                      if(checklicense == false){
                        myApp.alert('Please, accept license','Almagames');
                                    }

                      formData['phoneid'] = phoneid;
                      console.log(phoneid);
                      //ajax send

                      //phone edit

                      //console.log(formData);

                       for(var key in formData){

                            $('[name = "'+ key +'"]').each(function(){

                                if(this.checkValidity()){

                                    $(this).css("border","0px");

                                }else{

                                    //console.log($(this));

                                    $(this).css("border","1px solid red");
                                    $(this).css("border-radius","10px");



                                    validation = 1;
                                }

                            });
                      }

                      if(formData['phone'].length > 12){
                            myApp.alert('the main number must be less than 11 digits!','almagames');
                            validation = 1;

                      }


                      //console.log(validation);

                      if(validation == 0){
                        //return false;
                        //console.log(formData);

                        $(".progressbar-infinite").show();
                        var urlregistration = localStorage.getItem("baseurl");

                        //return false;

                      $.ajax({
                            "type":"GET",
                            "url":urlregistration + "registrationapp/",    /*random restourants menu zakaZ*/

                            dataType: "jsonp",
                            crossDomain: true,
                            "data":formData,

                            "success":kx22,
                            "error":errorfunc22

                            });



                    function kx22(result){

                          console.log(result);

                            $(".progressbar-infinite").hide();
                            if(result[0] == "ok"){
                                //localStorage.setItem("role",formData['role']);
                                localStorage.setItem("useridentificator",formData['phone']);

                                localStorage.setItem("userid",result[1]);






                                $(".hidecontent").hide();
                               // $(".show_vihod").show();

                                // if(formData['role'] == 1){
                                //     mainView.router.loadPage("cabinet.html");
                                //     $(".restourantsorder").show();
                                // }else if(formData['role'] == 2){
                                    accessGranted();
                                    mainView.router.back();
                                    //mainView.router.loadPage("/pages/dealer.html");


                                // }


                            }else if(result[0] == "replay"){
                                myApp.alert('this user already exists!','ALMAGAMES');
                            }else if(result[0] == "false"){
                                myApp.alert('error!','ALMAGAMES');
                            }else if(result[0] == "issetemail"){
                                myApp.alert('this user already exists!','ALMAGAMES');
                            }else if(result[0] == "phoneid"){
                                myApp.alert('this phone can not be used for 2 accounts!','ALMAGAMES');
                            }


                    }

                    function errorfunc22(){
                        console.log("oshibka registration send");
                        $(".progressbar-infinite").hide();
                         myApp.alert("Error network request!",'ALMAGAMES');
                    }

                     //ajax send

                      }

                      //validation form registration




                    });


            //registration

            $(".changepage").click(function(){

                mainView.router.back();

                setTimeout(function(){

                    mainView.router.loadPage("login.html");

                },1000);


            });
                var pickerDevice = myApp.picker({
    input: '#country2',
    cols: [
        {
            textAlign: 'center',
            values: ['+7', '+7', '+90', '+91', '+996', '+86', '+1', '+998', '+380'],
            displayValues: ['+7 Kazakhstan', '+7 Russia', '+90 Turkey', '+91 Indiya', '+996 Kyrgyzstan', '+86 China', '+1 USA', '+998 Uzbeqistan', '+380 Ukraine']
        }
    ]
});

                 //forgot password
                   $('.forgotp').on('click', function () {


                        var baseurl = localStorage.getItem("baseurl6");
                        var phonec2 = $("#country2").val();
                        if(phonec2.length<1)
                          phonec2='+7';
                        var phonen2 = $("#phonef").val();
                        var phone = phonec2+''+phonen2;

                        $(".hideforgot").hide();


                            var data = {
                                "phone":phone,
                            };
                            var em="email";

                            $.ajax({
                                type: 'GET',
                                url: baseurl+"sendpass",
                                crossDomain: true,
                                data: data,
                                dataType: 'jsonp',

                                "success":forgots,
                                "error":forgote
                            });
                            function forgots(result){

                              //console.log(result);

                                var dat = {
                                    "pass":result[1],
                                    "email":result[0],
                                };
                                em = result[0];
                                console.log(result[1]+' ttt '+result[0]);
                                  $.ajax({
                                      "type":"GET",
                                      "url": "https://kazpoisk.kz/public_control/restorealmagamespassword/",
                                      crossDomain: true,
                                      data: dat,
                                      dataType: "jsonp",
                                      "success":forgots1,



                                  });

                                  function forgots1(result){

                                    $(".hideforgot").show();

                                    if(result[1] == "ok"){
                                        myApp.alert('Your password was sent to the e-mail: ' + em, 'Almagames');
                                    }


                                  }
                                  if(em=="email"){
                                    myApp.alert('Wrong number', 'Almagames');

                                  }else{
                                      myApp.alert('Your password was sent to the e-mail: ' + em, 'Almagames');
                                  }


                            }
                            function forgote(){
                              myApp.alert('Wrong number', 'Almagames');
                            }
                      });
                //forgot password

});




myApp.onPageInit('login', function (page) {

    //login
    var pickerDevice = myApp.picker({
    input: '#country',
    cols: [
        {
            textAlign: 'center',
            values: ['+7', '+7', '+90', '+91', '+996', '+86', '+1', '+998', '+380'],
            displayValues: ['+7 Kazakhstan', '+7 Russia', '+90 Turkey', '+91 Indiya', '+996 Kyrgyzstan', '+86 China', '+1 USA', '+998 Uzbekistan', '+380 Ukraine']
        }
    ]
});

    var clienturl = localStorage.getItem("clienturl");

                if(!clienturl){
                    var clienturl = "index.html";
                }

              $( "#phonec" ).change(function() {
                var phonec = $('#phonec').val();
                $('#pcs').html(phonec);
              });



            //login
function show() {
    var p = document.getElementById('password');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('password');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

$( "#phone" ).focus(function() {
  var scroll = $(this).offset().top;
  $("#regr").scrollTop(scroll);
});
$( "#password" ).focus(function() {
  var height = window.innerHeight
  var scroll = height-100;

  $("#regr").scrollTop(scroll);
});
                    //validation form registration

                    /*$(function(){  $("#phone").mask("+7(999) 999-9999");}); */

                    $$('.form-to-login').on('click', function(){
                        var validation = 0;

                        var formData = myApp.formToData('#form-login');
                        var pcs = $('#pcs').html();
                        var phone = formData['phone'];
                        var withpcs = pcs+formData['phone'];
                        formData['phone']=withpcs;




                      //phone edit
                      //console.log(formData['phone']);

                      for(var key in formData){

                            $('[name = "'+ key +'"]').each(function(){

                                if(this.checkValidity()){

                                    $(this).css("border","0px");

                                }else{

                                    console.log($(this));

                                    $(this).css("border","1px solid red");
                                    $(this).css("border-radius","10px");

                                    validation = 1;
                                }

                            });
                      }

                      formData['phoneid'] = phoneid;



                      if(validation == 0){

                        $(".progressbar-infinite").show();
                        var urllogin = localStorage.getItem("baseurl");

                      $.ajax({
                            "type":"GET",
                            "url": urllogin + "rloginapp/",    /*random restourants menu zakaZ*/

                            dataType: "jsonp",
                            crossDomain: true,
                            "data":formData,

                            "success":kx25,
                            "error":errorfunc25

                            });

                    function kx25(result){

                      //console.log(result);

                            $(".progressbar-infinite").hide();



                            if(result[0] == "ok"){

                                $(".hidecontent").hide();
                               // $(".show_vihod").show();
                                //$(".hide_cabinet").show();
                                //mainView.router.back();

                                localStorage.setItem("role",result[1]);
                                localStorage.setItem("useridentificator",result[2]);
                                localStorage.setItem("userid",result[3]);
                                accessGranted();
                                mainView.router.back();
                                //mainView.router.loadPage("/pages/dealer.html");
                                //userid = result[3];
                                //console.log(result[3]);


                            }else if(result[0] == "nenaiden"){
                                myApp.alert('данного пользователя не существует!','Сервис');
                            }else if(result[0] == "false"){
                                myApp.alert('неправильный пароль!','Сервис');
                            }else if(result[0] == "phoneid"){
                                myApp.alert('this phone can not be used for 2 accounts! use password recovery','ALMAGAMES');
                            }


                    }

                    function errorfunc25(){
                        $(".progressbar-infinite").hide();
                        console.log("oshibka registration send");

                        myApp.alert("Error network request!",'ALMAGAMES');
                    }

                     //ajax send

                      }

                      //validation form registration




                    });


                     //forgot password
                   $('.forgotp').on('click', function () {


                        var baseurl = localStorage.getItem("baseurl6");
                        var phonec2 = $("#country").val();
                         if(phonec2.length<1)
                          phonec2='+7';
                        var phonen2 = $("#phonef").val();
                        var phone = phonec2+''+phonen2;

                        $(".hideforgot").hide();
                        //console.log(phone);
                            var data = {
                                "phone":phone,
                            };
                            var em="email";

                            $.ajax({
                                type: 'GET',
                                url: baseurl+"sendpass",
                                crossDomain: true,
                                data: data,
                                dataType: 'jsonp',

                                "success":forgots,
                                "error":forgote
                            });

                            function forgots(result){

                              //console.log(result);

                                var dat = {
                                    "pass":result[1],
                                    "email":result[0],
                                };
                                em = result[0];
                                console.log(result[1]+' ttt '+result[0]);
                                  $.ajax({
                                      "type":"GET",
                                      "url": "https://kazpoisk.kz/public_control/restorealmagamespassword/",
                                      crossDomain: true,
                                      data: dat,
                                      dataType: "jsonp",
                                      "success":forgots1,



                                  });

                                  function forgots1(result){

                                    $(".hideforgot").show();
                                    if(result[1] == "ok"){
                                        myApp.alert('Your password was sent to the e-mail: ' + em, 'Almagames');
                                    }


                                  }
                                  if(em=="email"){
                                    myApp.alert('Wrong number', 'Almagames');

                                  }else{
                                      myApp.alert('Your password was sent to the e-mail: ' + em, 'Almagames');
                                  }


                            }

                            function forgote(){
                              myApp.alert('Wrong number', 'Almagames');
                            }
                      });
                //forgot password


                    //changepage

                        $(".changepage").click(function(){

                            mainView.router.back();

                            setTimeout(function(){

                                mainView.router.loadPage("registration.html");

                            },1000);


                        });


                    //changepage


    });



//module vihoda


$(function() {

  $(".funcvihod").click(function(){

        localStorage.setItem("userid","0");
        localStorage.setItem("useridentificator","0");

        mainView.router.loadPage("main.html");

        $(".hidecontent").show();

        window.location.reload();
  });

  $(".notbakkara").click(function(){
    localStorage.setItem("isbakkara","0");
  });

  $("#ifrshow").click(function(){

    console.log("video norm");
    $(".ifr").show();
  });
  $(".bakk").click(function(){
    //localStorage.setItem("isbakkara","0");
  });





  $(".testpage").click(function(){

    console.log(1);

          var n1 = $(this).attr("n1");

  //console.log("obsh");
        var userid = localStorage.getItem("userid");

    //console.log(userid);
        if((userid == "0") || (userid==null)){

            //myApp.alert('вы не авторизованы!','Сервис');
            mainView.router.loadPage("login.html");

            return false;
        }else{

            //console.log(globalstatusgame);

            if(globalstatusgame == 1){

                if(n1 == "transfer"){
                  //mainView.router.loadPage("#table");
                  mainView.router.loadPage("/pages/transfer.html");

                }else if(n1 == "dealer"){
                  mainView.router.loadPage("/pages/dealer.html");
                }else{
                  //mainView.router.loadPage("index2.html");
                  myApp.alert('section on completion..','Almagames');
                }


            }else{

                  // if(n1 == "n1"){
                  // mainView.router.loadPage("#another");
                  // }else{
                  //   mainView.router.loadPage("index3.html");
                  // }

            }

        }

  });









  function updatebalance1(){

        var baseurl = localStorage.getItem("baseurl6");

        var userid =localStorage.getItem("userid");
        var data = {
            "userid":userid,
        };

        $.ajax({
            "type":"GET",
            "url":baseurl+"balance",    /*random restourants view*/
            data: data,
            dataType: "jsonp",
            crossDomain: true,

            "success":ss4,
            "error":ee4,
        });

        function ss4(result){
            $("#balance1").attr("placeholder", result);
            setTimeout(updatebalance1, 1000);
        }
        function ee4(result){
            console.log("balance error");
          //  console.log(result[0]);
        }
    }



    $(".testautentificate").click(function(){



      console.log(1);

            var n1 = $(this).attr("n1");

    //console.log("obsh");
          var userid = localStorage.getItem("userid");

      //console.log(userid);
          if((userid == "0") || (userid==null)){

              //myApp.alert('вы не авторизованы!','Сервис');
              mainView.router.loadPage("login.html");

              return false;
          }else{

              //console.log(globalstatusgame);

              if(globalstatusgame == 1){

                  if(n1 == "n1"){
                    //mainView.router.loadPage("#table");
                     mainView.router.loadPage(tablePage);
                    // mainView.router.load({url: 'table.html', reload: true, ignoreCache: true});
                  //  mainView.router.loadPage("/pages/transfer.html");

                  }else{
                    //mainView.router.loadPage("index2.html");
                    myApp.alert('section on completion..','Almagames');
                  }


              }else{

                    // if(n1 == "n1"){
                    // mainView.router.loadPage("#another");
                    // }else{
                    //   mainView.router.loadPage("index3.html");
                    // }

              }




          }



    });





});
//finish ready


function checkAuth(){

      var userid = localStorage.getItem("userid");

//console.log(userid);
        if((userid == "0") || (userid==null)){

            return false;

        }else{

            return userid;

        }

}


function checkAuth(){

      var userid = localStorage.getItem("userid");

//console.log(userid);
        if((userid == "0") || (userid==null)){

            return false;

        }else{

            return userid;

        }

}


function testautentificate(name){

  //console.log(1);

        var n1 = name;

//console.log("obsh");
      var userid = localStorage.getItem("userid");

  //console.log(userid);
      if((userid == "0") || (userid==null)){

          //myApp.alert('вы не авторизованы!','Сервис');
          mainView.router.loadPage("login.html");

          return false;
      }else{

          //console.log(globalstatusgame);

          if(globalstatusgame == 1){

              if(n1 == "n1"){
                //mainView.router.loadPage("#table");
                mainView.router.loadPage(tablePage);

              //  mainView.router.loadPage("/pages/transfer.html");

              }else{
                //mainView.router.loadPage("index2.html");
                myApp.alert('section on completion..','Almagames');
              }


          }else{

                // if(n1 == "n1"){
                // mainView.router.loadPage("#another");
                // }else{
                //   mainView.router.loadPage("index3.html");
                // }

          }




      }



}




myApp.onPageInit('index', function (page) {

  var auth = checkAuth();
  if(auth != false){
    //mainView.router.loadPage("/pages/dealer.html");
  }


});


function getdata(){

    var baseurl = localStorage.getItem("baseurl6");

    var id = localStorage.getItem("userid");
    var data = {
        "userid":id,
    };

    $.ajax({
        "type":"GET",
        "url":baseurl+"getdata",    /*random restourants view*/
        data: data,
        dataType: "jsonp",
        crossDomain: true,

        "success":ssgd,
        "error":eegd,
    });

    function ssgd(result){
        //console.log(result);
    $("#name1-dropdown").val(result[0][0].name1);
    $("#name2-dropdown").val(result[0][0].name2);
    $("#email-dropdown").val(result[0][0].email);
    $("#tel-dropdown").val(result[0][0].phone);
    $("#ul-dropdown").val(result[0][0].tel);
    $("#balance1").val(result[0][0].balance);
    $("#balance1").text(result[0][0].balance + " - AGP");
  }
    function eegd(result){
        console.log("balance error");

    }
}



myApp.onPageInit('shablon', function (page) {

});



localStorage.setItem("baseurl6","https://almagames.mypsx.net/bakkara2/");
//lichni cabinet







myApp.onPageInit('cabinet', function (page) {
  var baseurl = localStorage.getItem("baseurl6");

  /*$("#tel-dropdown").mask("9(999)9999999");*/
  $('#myTable').children('tbody').remove();
  var autocompleteDropdownSimple = myApp.autocomplete({
      input: '#autocomplete-dropdown',
      openIn: 'dropdown',
      source: function (autocomplete, query, render) {
          var results = [];
          if (query.length === 0) {
              render(results);
              return;
          }
          // Find matched items
          for (var i = 0; i < fruits.length; i++) {
              if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
          }
          // Render items by passing array with result items
          render(results);
      }
  });



    $("#savedata").click(function(){

        var name1 = $("#name1-dropdown").val();
        var name2 = $("#name2-dropdown").val();
        var email = $("#email-dropdown").val();
        var phone = $("#tel-dropdown").val();
        var tel = $("#ul-dropdown").val();
        var id = localStorage.getItem("userid");

        var data = {
            "id":id,
            "email":email,
            "name1":name1,
            "name2":name2,
            "phone":phone,
            "tel":tel,
        };
        $.ajax({
            "type":"GET",
            "url":baseurl+"updatedata",    /*random restourants view*/
            data: data,
            dataType: "jsonp",
            crossDomain: true,

            "success":ss4,
            "error":ee4,
        });

        function ss4(result){
          console.log(id+email+tel+phone);

        myApp.alert("Данные сохранены.");
        }
        function ee4(result){
            console.log("balance error");
            console.log(result[0]);
        }
    });

    getdata();
    //updatebalance1();

});

var temptransferV = "";
var transferId = 0;

function selectValue(string,id){

  temptransferV = string;
  transferId = id;
  $("#email_search").val(string);
  $("#myUL").empty();

}


socket.on('searchTransferEmail', function(data){

    var results = new Array();

    //console.log(data);


    $("#myUL").empty();

    if(data.data.length < 6){
      for(var i = 0;i < data.data.length;i++){
        results.push(data.data[i].email);
        //console.log(data.data[i].email);
        var appendLi = "<li><a onclick='selectValue(\"" + data.data[i].email + "\"\,\"" + data.data[i].id + "\")'>" + data.data[i].email + "</a></li>";
        $("#myUL").append(appendLi);
      }
    }




});


//xx
myApp.onPageInit('transfer', function (page) {


  /*$("#tel-dropdown").mask("9(999)9999999");*/
  var requestId = localStorage.getItem("userid");


  $("#email_search").on('keyup input', function(){

    var inputvalue = $(this).val();
    //console.log(inputvalue);
    if(inputvalue.length > 7){
      socket.emit('searchTransferEmail', {userid:requestId,search_string:inputvalue});
    }else{
      $("#myUL").empty();
    }
  //code
  });

  // $("#email_search").keyup(function() {
  //
  //   var inputvalue = $(this).val();
  //   console.log(inputvalue);
  //   if(inputvalue.length > 2){
  //     socket.emit('searchTransferEmail', {userid:requestId,search_string:inputvalue});
  //   }
  //
  // });




    getdata();
    //updatebalance1();

    $(".back_transfer").click(function(){
      mainView.router.back();
    });


});

function TransferConfirm(){
  myApp.confirm('Please confirm email:"' + $("#email_search").val() + '" and amount ' + $(".amTransfer").val(), function (value) {

      transferM();

  });
}


function transferM(){

  var requestId = localStorage.getItem("userid");

  var sendM = $("#email_search").val();
  var amTransfer = $(".amTransfer").val();

  var validation = 0;

  var formData = myApp.formToData('#transferForm');

  var email = formData['email'];
  var amount = formData['amount'];



for(var key in formData){

      $('[name = "'+ key +'"]').each(function(){

          if(this.checkValidity()){

              $(this).css("border","0px");

          }else{

              $(this).css("border","1px solid red");
              $(this).css("border-radius","10px");

              validation = 1;
          }

      });
}


if(validation == 0){
  var data = {
      "email":email,
      "amount":amount,
      "id":transferId
  };

  $(".progressbar-infinite").show();
  $("#transferM").hide();
  socket.emit('transferData', {userid:requestId,data:data});

  //console.log(data);

}


}
//xx2
socket.on('transferData', function(data){

    $(".progressbar-infinite").hide();
    $("#transferM").show();

    if(data.status == "ok"){
        myApp.alert('Success transfer','Almagames');
        $("#email_search").val("");
        $(".amTransfer").val("");
        getdata();
    }else if(data.status == "notfound"){
        myApp.alert('transfer user not found','Almagames');
    }else if(data.status == "money_reason"){
        myApp.alert('insufficient funds','Almagames');
    }else if(data.status == "not_for_uself"){
        myApp.alert('not for uself!','Almagames');
    }
    //console.log(data);

});


//roulette event


var myPhotoBrowserStandalone = myApp.photoBrowser({
                                photos : [
                                    'https://almagames.mypsx.net:8092/webcam3.mjpeg',
                                ],
                                backLinkText:'закрыть',
                                theme: 'dark',
                                type: 'popup',
                                zoom:true,

                            });
                            //Open photo browser on click
                            $$('#im1').on('click', function () {
                                myPhotoBrowserStandalone.open();
                            });



var myPhotoBrowserStandalone2 = myApp.photoBrowser({
                                photos : [
                                    'https://almagames.mypsx.net:8090/webcam.mjpeg',
                                ],
                                backLinkText:'закрыть',
                                theme: 'dark',
                                type: 'popup',
                                zoom:true,
                            });
                            //Open photo browser on click
                            $$('#im2').on('click', function () {
                                myPhotoBrowserStandalone2.open();
                            });



//roulette event

//sound module

$("#sound").change(function(){

      var v1 = document.getElementById("stopvoice");
      var v2 = document.getElementById("youlose");
      var v3 = document.getElementById("youwin");
      var v4 = document.getElementById("startvoice");


      var checksound = $(this).prop("checked");

      if(checksound){
            //console.log("вкл");
            v1.muted = false;
            v2.muted = false;
            v3.muted = false;
            v4.muted = false;
            localStorage.setItem("sound","false");
      }else{


          v1.muted = true;
          v2.muted = true;
          v3.muted = true;
          v4.muted = true;
          //console.log("выкл");
          localStorage.setItem("sound","true");
      }


});


//check sound attribute



var sound = localStorage.getItem("sound");


if(!sound){

}else if(sound == "true"){
      var v1 = document.getElementById("stopvoice");
      var v2 = document.getElementById("youlose");
      var v3 = document.getElementById("youwin");
      var v4 = document.getElementById("startvoice");

      v1.muted = true;
      v2.muted = true;
      v3.muted = true;
      v4.muted = true;
      $("#sound").prop('checked', false);

      //console.log("sound muted");
}

//check sound attribute
//sound module


//var elem = document.getElementById("fullscreenpage");
var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

//xxx
function changeRotate(){

  try {
    var screenAngle = screen.orientation.angle;

    if(screenAngle == 90){
      const orient = getScreenType();
      //console.log(orient);
      if((orient == "landscape-secondary") || (orient == "landscape-primary") || (orient == "portrait")){
          makePortrait();
      }
    }
    } catch (error) {
      console.log("changeRotate");
    }



}


// setTimeout(function(){
//
//
//       //openFullscreen();
//
//
//
// },5000);
//xx

var updateTimeInterval = {
    updateTime: function () {
        var myRef = this;
        var val = setTimeout(function () {

            changeRotate();
            //openFullscreen();

            myRef.updateTime();
        }, 5000);
    }
};

function fixScreen(){
  changeRotate();
  openFullscreen();
}

//updateTimeObj.updateTime();




let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});


//lock screen

function fullScreenCheck() {

  var elem = document.documentElement;

  if (elem.requestFullscreen) {
    return elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
     return elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    return elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    return elem.msRequestFullscreen();
  }

}


function getOppositeOrientation() {
  const { type } = screen.orientation;
  return type.startsWith("portrait") ? "landscape" : "portrait";
}
function getOppositeOrientationForLandscape() {
  const { type } = screen.orientation;
  return type.startsWith("portrait") ? "landscape" : "landscape";
}


function show() {

  try {
    const { type, angle } = screen.orientation;
    console.log(`Orientation type is ${type} & angle is ${angle}.`);
  } catch (e) {

  }



}



try {
      screen.orientation.addEventListener("change", () => {
        //show();


          const orient = getScreenType();
          console.log(orient);
          if((orient == "landscape-secondary") || (orient == "landscape-primary") || (orient == "portrait")){
              makePortrait();
          }

      });
} catch (e) {

}



window.addEventListener("orientationchange", function() {


    const orient = getScreenType();
    //console.log(orient);
    if((orient == "landscape-secondary") || (orient == "landscape-primary") || (orient == "portrait")){
        makePortrait();
    }


});


async function makePortrait(){

  try {
    await fullScreenCheck();
  } catch (err) {
    console.error(err);
  }
  const newOrientation = getOppositeOrientation();
  //console.log(newOrientation);
  //portrait need to make portrait
      if(enableOrientation == 1){
        await screen.orientation.lock(newOrientation);//landscape
      }

}

async function makePortraitWithoutFullScreen(){

  const newOrientation = getOppositeOrientation();
  //console.log(newOrientation);
  //portrait need to make portrait
      if(enableOrientation == 1){
        await screen.orientation.lock(newOrientation);//landscape
      }

}

//nn
async function makeLandscape(){

  try {
    await fullScreenCheck();
  } catch (err) {
    console.error(err);
  }
  const newOrientation = getOppositeOrientationForLandscape();
  //console.log(newOrientation);
  //portrait need to make portrait
  if(enableOrientation == 0){
    await screen.orientation.lock(newOrientation);//landscape
  }

}

async function makeLandscapeWithoutFullScreen(){

  const newOrientation = getOppositeOrientationForLandscape();
  //console.log(newOrientation);
  //portrait need to make portrait
  if(enableOrientation == 0){
    await screen.orientation.lock(newOrientation);//landscape
  }

}

function getScreenType(){
  const { type, angle } = screen.orientation;
  return type;
}



//lock screen


//hide splashscrin
function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
}
document.addEventListener("app.Ready", onAppReady, false) ;
//hide splashscrin
