

           function renderButton() {
              gapi.signin2.render('my-signin2', {
                'scope': 'profile email',
                'width': 150,
                'height': 23,
                'longtitle': true,
                'theme': 'dark',
                'onsuccess': onSignIn,
                'onfailure': onFailure
              });
          }



           function onSignIn(googleUser) {
                   var profile = googleUser.getBasicProfile();

                   //console.log(profile);
                   //console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
                   //console.log('Name: ' + profile.getName());
                   //console.log('Image URL: ' + profile.getImageUrl());
                   //console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

                   var name = profile.getName();
	    			       var email = profile.getEmail();
                   var image_url = profile.getImageUrl();
                   var device = localStorage.getItem("deviceid");

                  //console.log(profile);

                  sendRegistration(name,email);

               }

               function onFailure(error) {
                 console.log(error);
               }


               function signOut() {
                 var auth2 = gapi.auth2.getAuthInstance();
                 auth2.signOut().then(function () {
                   //console.log('User signed out.');
                 });
               }


               function Googlelogin() {
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


                   function sendTogoogleAuth(name,email,image_url){

                     var insData = {
                         email:email,
                         name:name,
                         image_url,image_url
                     }

                     socket.emit('googleAuth', insData);

                   }

                   socket.on('googleAuth', function(data){

                          console.log(data);
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

                                  router.back();

                                }



                            }

                           });
