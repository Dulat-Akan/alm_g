function checkOsenka(){

  var checkosenka = localStorage.getItem("osenka");

  if(checkosenka){

      if(checkosenka == "1"){

        var platform_name = platform.toLowerCase();

        //if(platform_name.indexOf("browser") >= 0){
        if(platform_name.indexOf("browser") < 0){

              myApp.dialog.confirm('Пожалуйста оцените приложение и оставьте отзыв! " ','KAZPOISK', function () {


                var platform_name = platform.toLowerCase();

                if(platform_name.indexOf("android") >= 0){
                      window.location = "https://play.google.com/store/apps/details?id=kz.kazpoisk.kz";
                }

                if(platform_name.indexOf("ios") >= 0){
                      window.location = "https://itunes.apple.com/us/app/kazpoisk/id1282461018?l=ru&ls=1&mt=8";
                }

                  //dialog.alert('Ok, your name is ' + name);
              });



        }


        localStorage.setItem("osenka","2");//osenka sdelana



      }
  }

}
