//camera connect

socket.on('checkCamData', function(data){

    console.log(data);

});

//camera connect

socket.on('NotificationService', function(data){
    //console.log(data);
    if(data.status == "new_message"){
      var usid = checkAuth();
      if(data.id == usid){
        myApp.alert(data.message,'Almagames');
        getdata();
      }


    }

});


socket.on('connect', () => {
  //console.log(socket.connected); // true
  //console.log("io connected to server");
  var phoneid = localStorage.getItem("phoneid");
  var usid = checkAuth();
  socket.emit('NotificationService', {phoneid:phoneid,userid:usid,connect:1});


  var NotificationObj = {
                      updateTime: function () {
                          var myRef = this;
                          var val = setTimeout(function () {
                            var usid = checkAuth();
                            socket.emit('NotificationService', {phoneid:phoneid,userid:usid,connect:1});

                              myRef.updateTime();
                          }, 5000);
                      }
                  };

    NotificationObj.updateTime();

});


socket.on('disconnect', () => {
  socket.open();

  var phoneid = localStorage.getItem("phoneid");
  var usid = checkAuth();

  socket.emit('NotificationService', {phoneid:phoneid,userid:usid,connect:2});
});


function cleanxss(formData){

  var validate = ["script","alert","php","xss","*","-- -","--","<",">","concat","=","<script>","</script>","</"];

    //validate function

    for (key in formData) {

        for(var i = 0;i < validate.length;i++){

          var tt = formData[key];
          ttxt = tt.toString();
          var xt = ttxt.indexOf(validate[i]);

          //console.log(xt);

          if(xt >= 0){

              formData[key] = ".";
              //console.log("заменена");

          }


          var t = formData[key].length;

          for(var j = 0;j < t;j++){

            var y = formData[key][j];

            if(y == validate[i]){
              formData[key][j] = ".";
              //console.log("заменена");
            }

          }

        }

        //console.log(key);

    }

    return formData;

}



function getImage(){
      var image = localStorage.getItem("image_url");

      var imageurl = "https://www.w3schools.com/howto/img_avatar.png";

      if(image){
        imageurl = image;
      }

      return imageurl;
    }
