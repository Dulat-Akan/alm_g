



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
