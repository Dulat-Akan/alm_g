    function statusChangeCallback(response){

      if(response.status == "connected"){
          console.log("connected");
      }else{
          console.log("not authentification");
      }

    }


    function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
      }


  
window.fbAsyncInit = function() {
    FB.init({
       appId      : '486268101757167',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.12'
    });
      
    FB.getLoginStatus(function(response) {

      statusChangeCallback(response);
      console.log(response);

     });
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));





    




