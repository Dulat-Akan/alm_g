
          var myurl = localStorage.getItem("baseurl");





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
