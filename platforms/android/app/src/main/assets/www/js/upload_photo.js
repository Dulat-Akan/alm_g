

//new exsperience photo module

// $(".openphotos").click(function(){
//
//     window.imagePicker.getPictures(
//       function(results) {
//           for (var i = 0; i < results.length; i++) {
//               console.log('Image URI: ' + results[i]);
//           }
//       }, function (error) {
//           console.log('Error: ' + error);
//       }
//     );
//
// });
//new exsperience photo module


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
                     //        myApp.dialog.alert(mm5m,'Сервис');

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

                      //myApp.preloader.show('передача данных');
                      //dopolnitelnie dannie

                      //validasiya
                      // if(numberfiles != 8){

                      //           numberfiles +=1;
                      //           fixedlimituploadphoto++;
                      //           formData.append("countupload", numberfiles);

                      // }else{

                      //     var mm = "Больше 8 фотографий не допустимо для загрузки!"
                      //     myApp.dialog.alert(mm,'Сервис');
                      //     return false;

                      // }

                      // if(fixedlimituploadphoto > 10){

                      //     var mm = "Больше 10 фотографий не допустимо для загрузки!"
                      //     myApp.dialog.alert(mm,'Сервис');
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
                                  myApp.dialog.alert(mm7m,'Сервис');
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
                                  "url":myurl + "do_uploadapp_modified/",
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
                                      myApp.progressbar.set(progressbar, percentComplete);

                                        if(percentComplete == 100){

                                            $('.loader-hide').css("display","none");
                                            $('.progressbar').css("display","none");

                                            myApp.progressbar.set(progressbar, 10);

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

                                myApp.dialog.alert('Ошибка сети, повторите загрузку фото','Сервис');
                              };






                      }else if(myvalidvideo(filetype) == true){


                            if(filesize > 500000000){

                                  var mm7m = "Размер видео не должен превышать 500mb"
                                  myApp.dialog.alert(mm7m,'Сервис');
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
                                "url":myurl + "do_uploadvideoapp_modified/",
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
                                      myApp.progressbar.set(progressbar, percentComplete);

                                        if(percentComplete == 100){

                                            $('.loader-hide').css("display","none");
                                            $('.progressbar').css("display","none");

                                            myApp.progressbar.set(progressbar, 10);
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

                              myApp.dialog.alert('Ошибка сети, повторите загрузку видео','Сервис');
                              $('.progressbar').css("display","none");
                              $('.loader-hide').css("display","none");


                            };
                            /*_________________________*/


                      }else{

                          $('.progressbar').css("display","none");
                          $('.loader-hide').css("display","none");
                          myApp.preloader.hide();
                          myApp.dialog.alert('фото не удовлетворяет требованиям','Сервис');
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
                checkphoto_or_video();




          },5000);



          //module check photo

          function checkphoto_or_video(){

                      if(globalfixobupload == 1){

                      var useremail = localStorage.getItem("useremail");

                      var sendrequest = {

                      "useremail":useremail,

                      }

                      //console.log(useridentificator4);

                      var urlhack = localStorage.getItem("baseurl");



                                    $.ajax({

                                          "type":"GET",
                                          "url": urlhack + "hack_photoapp_modified/",
                                          dataType: "jsonp",
                                          crossDomain: true,
                                          "data": sendrequest,
                                          "success":kxzaprosphoto,
                                          "error":errorfunczapros

                                    });


                      function kxzaprosphoto(result){


            //jjjj
                                            //  console.log(result);

                                              // if(fixedphoto == 1){

                                              if(result[0] != "false"){


                                                  $(".appendphoto").empty();

                                                  for(var g = 0; g < result.length;g++){
                                                  var imgurl = localStorage.getItem("baseurlimg2");
                            var appendstring = '<li> <a href="#" class="item-link item-content"> <div class="item-media">'+
                            '<img photoids="' + g + '" src="' + imgurl + result[g] + '" width="80"></div> <div class="item-inner"> '+
                            '<div class="item-title-row"> <div class="item-title">'+
                            '<button rmid="'+ result[g] +'" rmcount="'+ g +'" class="col button button-small button-fill rotatephtwo">перевернуть</button>'+
                            '</div> <div class="item-after">'+
                            '<button phid="'+ result[g] +'" class="button color-red button-small button-fill delete_photo">удалить</button>'+
                            '</div> </div> '+
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

                                                    var useremail = localStorage.getItem("useremail");

                                                   var sendrm = {

                                                                    "photoid":rmid,
                                                                    "rmcount":rmcount,
                                                                    "useremail":useremail

                                                                }

                                                                //console.log(useridentificator4);

                                                                   var rotateurl = localStorage.getItem("baseurl");

                                                                   //console.log($(this).parent().parent().parent().parent().attr("class"));

                                                                  $.ajax({
                                                                        "type":"GET",
                                                                        "url": rotateurl + "rotatetwophotoapp_modified/",

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

                                                            var useremail = localStorage.getItem("useremail");

                                                            var senddelete = {

                                                            "photoid":photo_id,
                                                            "useremail":useremail

                                                            }


                                                            var parent = $(this).parent().parent().parent().parent().parent();

                                                           // console.log(parent);

                                                            //return false;



                                                            var url2 = localStorage.getItem("baseurl");

                                                            $.ajax({
                                                                  "type":"GET",
                                                                  "url": url2 + "delete_photoapp_modified/",    /*random restourants menu zakaZ*/

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
                                          "url": urlhack + "hack_videoapp_modified/",
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


          }
