

          //myApp.onPageBeforeAnimation('cabinet', function (page) {
            $$(document).on('page:beforein', '.page[data-name="cabinet"]', function (e) {


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

                                //  mainView.router.back();
                                  router.back();

                              });








                              //---------------------------------------------------------









          });



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


                 //return false;

                 $(".insertobuser").empty();

                                           var countfindobjects = result[0].length;

                                           $(".searchkvbutton").text("найдено " + countfindobjects + " объявлений");

                                           setTimeout(function () {
                                               myApp.preloader.hide();
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
         ' <div class="item-text" style="margin-top:1px;"><div class="row">'+
         '<i style="color:#4cd964;border:1px solid #4cd964;border-radius:5px;padding:4px;" ident="'+ i +'" class="material-icons color-green viewob">&#xE869;</i>'+
         '<i style="color:#007aff;border:1px solid #007aff;border-radius:5px;padding:4px;"  upob="'+ result[0][i].id + '" class="material-icons color-blue upob">&#xE8E5;</i>'+
         '<i style="color:#ff9500;border:1px solid #ff9500;border-radius:5px;padding:4px;"  retimeid="'+ result[0][i].id + '" class="material-icons color-orange retimeob">&#xE192;</i>'+
         '<i style="color:#ff3b30;border:1px solid #ff3b30;border-radius:5px;padding:4px;"   rmid="'+ result[0][i].id + '" class="material-icons color-red deleteob">&#xE92B;</i></div></div> </div> </a> </li>';


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

                                                         myApp.dialog.confirm('Вы подтверждаете действие?','Kazpoisk', function () {

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

                                                                           myApp.dialog.alert('поздравляем функция активирована...!','Сервис');

                                                                           firstviewob();

                                                                           //result[0];  --user balance

                                                                     }else if(result[1] == "6"){

                                                                           myApp.dialog.alert('статус уже обновлен...!','Сервис');

                                                                     }else if(result[1] == "1"){

                                                                           myApp.dialog.alert('Недостаточно средств...!','Сервис');

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

                                                       myApp.dialog.alert('Это возможность добавить ваше объявление со статусом "ПРОМО" (высшая категория, 7 дней)','Kazpoisk');

                                                   break;

                                                   case "top":

                                                       myApp.dialog.alert('Это возможность добавить ваше объявление со статусом "TOП" (20 первых объявлений 3 дня)','Kazpoisk');

                                                   break;

                                                   case "warm":

                                                   myApp.dialog.alert('Это возможность добавить ваше объявление со статусом "Горячие" (рамка и значок огонь 7 дней)','Kazpoisk');

                                                   break;

                                                   case "time":

                                                   myApp.dialog.alert('Это возможность добавить ваше объявление со статусом "Срочно" (красного цвета 7 дней)','Kazpoisk');

                                                   break;

                                                   case "up":

                                                   myApp.dialog.alert('Это возможность поднять ваше объявление вверх по списку','Kazpoisk');

                                                   break;
                                                 }




                                           });


                                           $(".upob").click(function(){

                                             var upob = $(this).attr("upob");

                                             localStorage.setItem("upobid",upob);

                                             myApp.popup.open('.popup-viewobup');



                                           });


                                           $(".retimeob").click(function(){

                                               var updateid = $(this).attr("retimeid");

                                               myApp.dialog.confirm('продлить объявление?','Kazpoisk', function () {

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

                                                                           myApp.dialog.alert('объявление продлено!','Kazpoisk');

                                                                       }else if(result[0] == "3"){

                                                                           myApp.dialog.alert('объявление обновлено!','Kazpoisk');

                                                                       }else if(result[0] == "2"){

                                                                           myApp.dialog.alert('объявление обновлялось!','Kazpoisk');

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

                                                   myApp.dialog.confirm('отправить в архив?','Kazpoisk', function () {

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

                                               //mainView.router.loadPage("#n1user");
                                               //router.navigate({ name: 'n1user' },{clearPreviousHistory:false,});

                                               globalvalue = ident;

                                               getn1user();

                                               myApp.popup.open(".popup-n1user");

                                               // $$('.popup-n1user').on('popup:open', function (e, popup) {
                                               //    console.log('popup-n1user popup open');
                                               //  });
                                               //  $$('.popup-n1user').on('popup:opened', function (e, popup) {
                                               //    console.log('popup-n1user popup opened');
                                               //  });




                                           });




                                       }



           }



          function insertviewobuserdeleted(result){

              if(result[0] != "false"){

                $(".insertobuserdeleted").empty();

                                          var countfindobjects = result[0].length;

                                          $(".searchkvbutton").text("найдено " + countfindobjects + " объявлений");

                                          setTimeout(function () {
                                              myApp.preloader.hide();
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
        ' <div class="item-text" style="margin-top:1px;"><div class="row">'+
        '<i  style="color:#ff9500;border:1px solid #ff9500;border-radius:5px;padding:4px;" retimeid="'+ result[0][i].id + '" class="material-icons color-orange retimeobdel">&#xE192;</i>'+
        '</div></div> </div> </a> </li>';


        $(".insertobuserdeleted").append(templateobyav);




                                          }



                                          localStorage.setItem("obcabinetdeleted",JSON.stringify(result));





                                          $(".retimeobdel").click(function(){

                                              var updateid = $(this).attr("retimeid");

                                              myApp.dialog.confirm('продлить объявление?','Kazpoisk', function () {


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

                                                                          myApp.dialog.alert('объявление продлено!','Kazpoisk');

                                                                      }else if(result[0] == "3"){

                                                                          setTimeout(function(){

                                                                              recheckcabinet();

                                                                          },5000);

                                                                          myApp.dialog.alert('объявление обновлено!','Kazpoisk');

                                                                      }else if(result[0] == "2"){

                                                                          setTimeout(function(){

                                                                              recheckcabinet();

                                                                          },5000);

                                                                          myApp.dialog.alert('объявление обновлялось!','Kazpoisk');



                                                                      }

                                                              }

                                                              function errordeleteobw(){


                                                              }

                                                              });


                                          });



                                      }



          }       //kones function
