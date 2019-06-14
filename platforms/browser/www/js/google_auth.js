





              //  var name = profile.getName();
              //  var email = profile.getEmail();
              //  var image_url = profile.getImageUrl();
              //  var device = localStorage.getItem("deviceid");
              //
              // //console.log(profile);
              //
              // sendRegistration(name,email);




               function Googlelogin() {

                 console.log(platformName);

                    if(platformName != "browser"){

                         window.plugins.googleplus.login(
                             {
                               'webClientId': '818015353741-m97ohmk6tpqf067gcgff0kb3i6t4k8go.apps.googleusercontent.com',
                             },
                             function (obj) {
                               console.log(obj.imageUrl);
                               console.log(obj.displayName);
                               console.log(obj.email);

                               sendTogoogleAuth(obj.displayName,obj.email,obj.imageUrl);

                             },
                             function (msg) {
                               console.log(msg);
                             }
                         );

                     }
                   }


                   function sendTogoogleAuth(name,email,image_url){

                     var insData = {
                         email:email,
                         name:name,
                         image_url,image_url
                     }

                     socket.emit('googleAuth', insData);

                   }

                   socket.on('googleAuth', function(data){

                          //console.log(data);
                          if((data.user == "olduser") || (data.user == "newuser")){

                                $(".hide_reg").hide();
                                $(".hide_login").hide();
                                $(".show_vihod").show();
                                $(".hide_cabinet").show();

                                var storage_email = getEmail();

                                if(storage_email == false){

                                  localStorage.setItem("role","2");
                                  localStorage.setItem("useridentificator","0(000)0000000");//phone
                                  localStorage.setItem("useremail",data.email);
                                  localStorage.setItem("image_url",data.image_url);

                                  sendNotification("Вы вошли как " + data.email + " Большое спасибо!");

                                  router.back();

                                }



                            }

                           });



                           //
