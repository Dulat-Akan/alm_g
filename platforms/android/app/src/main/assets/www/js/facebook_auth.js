
function sendRegistration(name,email){



  var sendauth = {
                    "name":name,
                    "email":email
                }


            //    console.log(sendauth);


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

                            var storage_email = localStorage.getItem("useremail");

                            if(!storage_email){

                              localStorage.setItem("role","2");
                              localStorage.setItem("useridentificator","0(000)0000000");//phone
                              localStorage.setItem("useremail",result[1]);

                              //console.log(result[1]);

                            }



                        }
  //xf



                  }

                  function errorauth(){


                  }



}



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

                                            sendRegistration(name,email);


                            //console.log(name + " | " + email);
                          }
                        });
                      }




                    // addCategory



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
