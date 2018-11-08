$$(document).on('page:init', '.page[data-name="registration"]', function (e) {

              var clienturl = localStorage.getItem("clienturl");

              if(!clienturl){
                  var clienturl = "index.html";
              }

          //registration

                  //validation form registration

                  $('[name = "phone"]').mask("9(999)9999999");

                  $$('.form-to-register').on('click', function(){


                    $(".gifloader-registration").show();

                      var validation = 0;


                    var formData = myApp.form.convertToData('#form-registration');

                    //console.log(formData);

                    for(var key in formData){

                          $('[name = "'+ key +'"]').each(function(){

                              if(this.checkValidity()){

                                  $(this).css("border-bottom","0px");

                              }else{
                                  validation = 1;

                                  $(this).css("border-bottom","1px solid red");


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

                          $(".gifloader-registration").hide();


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

                                  //mainView.router.back();
                                  router.back();
                                  myApp.dialog.alert('спасибо что уделили время!','kazpoisk');

                          }else if((result[0] == "oshibka_db_isset_user") || (result[0] == "issetuser")){
                              myApp.dialog.alert('данный пользователь уже существует!','Сервис');
                              $(".progressbar-infinite").hide();
                          }else if(result[0] == "check_encorrect"){
                              myApp.dialog.alert('вводите коррестные данные!','Сервис');
                              $(".progressbar-infinite").hide();
                          }else if(result[0] == "registration_false"){
                              myApp.dialog.alert('ошибка системы извините за учтенные недостатки!','Сервис');
                              $(".progressbar-infinite").hide();
                          }


                  }

                  function errorfunc22(){
                      console.log("oshibka registration send");
                      $(".gifloader-registration").hide();
                  }

                   //ajax send

                 }else{
                   $(".gifloader-registration").hide();
                 }

                    //validation form registration




                  });



                  $(".log").click(function(){

                  //  mainView.router.back();
                    router.back();

                    setTimeout(function(){

                    //  mainView.router.loadPage("login.html");
                      router.navigate({ name: 'login' });
                    },1000);


                   });


          //registration

          $(".restorepass").click(function(){


                        restorepassword();


                  });

});
