$$(document).on('page:init', '.page[data-name="login"]', function (e) {

  //login

  var clienturl = localStorage.getItem("clienturl");

              if(!clienturl){
                  var clienturl = "index.html";
              }

          //registration

                  //validation form registration

                  $('[name = "phone"]').mask("9(999)9999999");

                  $$('.form-to-login').on('click', function(){


                    $(".gifloader_login").show();

                      var validation = 0;

                    var formData = myApp.form.convertToData('#form-login');


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

                        $(".gifloader_login").hide();



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

                                   myApp.dialog.alert('Вы вошли как ' + result[3],'Kazpoisk');

                                   $(".progressbar-infinite").hide();
                                   $(".hide_cabinet").show();

                              }else if(result[1] == 2){

                                   //mainView.router.loadPage("main.html");
                                   mainView.router.back();
                                   var usid =  localStorage.getItem("useridentificator");

                                   myApp.dialog.alert('Вы вошли как ' + result[3],'Kazpoisk');
                                   $(".progressbar-infinite").hide();


                                  //console.log(usid);
                              }


                          }else if(result[0] == "0"){
                              myApp.dialog.alert('данного пользователя не существует!','Сервис');
                              $(".progressbar-infinite").hide();
                          }else if(result[0] == "1"){
                              myApp.dialog.alert('неправильный пароль!','Сервис');
                              $(".progressbar-infinite").hide();
                          }


                  }

                  function errorfunc25(){
                      console.log("oshibka registration send");
                      $(".gifloader_login").hide();
                  }

                   //ajax send

                 }else{
                   $(".gifloader_login").hide();
                 }

                    //validation form registration




                  });


                  $(".registr").click(function(){

                    mainView.router.back();

                    setTimeout(function(){

                    //  mainView.router.loadPage("registration.html");
                      //router.navigate("registration.html");
                      router.navigate({ name: 'registration' });
                    },1000);


                   });


                  $(".restorepass").click(function(){


                        restorepassword();


                  });


  //login




  });
