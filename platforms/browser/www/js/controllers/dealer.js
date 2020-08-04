var menufix = 0;
function checkCoefMemory(){
  var p_coef_memory = localStorage.getItem("player_coef");

  $(".main_enter").show();
     $(".hidecoef").hide();

  // if(p_coef_memory){
  //   $(".main_enter").show();
  //   $(".hidecoef").hide();
  // }else{
  //   $(".hidecoef").show();
  //   $(".main_enter").hide();
  // }
}

function hideMainBlocks(){
  $(".hidecoef").hide();
  $(".main_enter").hide();
}


function accessGranted(){
  $(".main_button_container").show();
  checkCoefMemory();
}

function set_current_coef(memory_value){

  var v = memory_value;

  switch (v) {
      case "1-100":

        $(".b_b_one").attr("src","image/1-100_RED.png");
        $(".b_b_two").attr("src","image/25-500.png");
        $(".b_b_three").attr("src","image/100-1000.png");
        $(".b_b_premium").attr("src","image/PREMIUM.png");

      break;
      case "25-500":

      $(".b_b_one").attr("src","image/1-100.png");
      $(".b_b_two").attr("src","image/25-500_RED.png");
      $(".b_b_three").attr("src","image/100-1000.png");
      $(".b_b_premium").attr("src","image/PREMIUM.png");

      break;
      case "100-1000":

      $(".b_b_one").attr("src","image/1-100.png");
      $(".b_b_two").attr("src","image/25-500.png");
      $(".b_b_three").attr("src","image/100-1000_RED.png");
      $(".b_b_premium").attr("src","image/PREMIUM.png");

      break;
      case "premium":

      $(".b_b_one").attr("src","image/1-100.png");
      $(".b_b_two").attr("src","image/25-500.png");
      $(".b_b_three").attr("src","image/100-1000.png");
      $(".b_b_premium").attr("src","image/PREMIUM_RED.png");

      break;
  }
}



$(function() {







//myApp.onPageInit('dealer', function (page) {

  $(".back_button").click(function(){
    mainView.router.back();
  });

  $(".chose_coef").click(function(){
    var v = $(this).attr("v");
    var vObj = $(this);


    switch (v) {
      case "menu":

            if(menufix == 0){
              $(".tablemenuD").show();
              $(".background_dealer").css("background", "url(/image/main_background.png) no-repeat center center fixed");
              $(".background_dealer").css("background-size", "cover");
              $(".background_dealer").css("-webkit-background-size", "cover");
              $(".background_dealer").css("-moz-background-size", "cover");
              $(".background_dealer").css("-o-background-size", "cover");
              $(".gameRules").hide();
              $(".helpRules").hide();
              $(".gamesettingD").hide();
              $(".payments").hide();
              hideMainBlocks();

              menufix = 1;
            }else{
              $(".tablemenuD").hide();
              checkCoefMemory();
              $(".background_dealer").css("background", "url(/image/lobby_girl.png) no-repeat center center fixed");
              $(".background_dealer").css("background-size", "cover");
              $(".background_dealer").css("-webkit-background-size", "cover");
              $(".background_dealer").css("-moz-background-size", "cover");
              $(".background_dealer").css("-o-background-size", "cover");
              $(".gameRules").hide();
              $(".helpRules").hide();
              $(".gamesettingD").hide();
              $(".payments").hide();

              menufix = 0;
            }

        break;
        case "1-100":


          vObj.attr("src","image/1-100_RED.png");
          $(".b_b_two").attr("src","image/25-500.png");
          $(".b_b_three").attr("src","image/100-1000.png");
          $(".b_b_premium").attr("src","image/PREMIUM.png");


        localStorage.setItem("player_coef",v);
        mainView.router.loadPage(tablePage);
        break;
        case "25-500":

        $(".b_b_one").attr("src","image/1-100.png");
        vObj.attr("src","image/25-500_RED.png");
        $(".b_b_three").attr("src","image/100-1000.png");
        $(".b_b_premium").attr("src","image/PREMIUM.png");

        localStorage.setItem("player_coef",v);
        mainView.router.loadPage(tablePage);
        break;
        case "100-1000":

        $(".b_b_one").attr("src","image/1-100.png");
        $(".b_b_two").attr("src","image/25-500.png");
        vObj.attr("src","image/100-1000_RED.png");
        $(".b_b_premium").attr("src","image/PREMIUM.png");

        localStorage.setItem("player_coef",v);
        mainView.router.loadPage(tablePage);
        break;
        case "premium":

        $(".b_b_one").attr("src","image/1-100.png");
        $(".b_b_two").attr("src","image/25-500.png");
        $(".b_b_three").attr("src","image/100-1000.png");
        vObj.attr("src","image/PREMIUM_RED.png");

        localStorage.setItem("player_coef",v);
        mainView.router.loadPage(tablePage);
        break;
      default:
        localStorage.setItem("player_coef",v);
        mainView.router.loadPage(tablePage);
        //console.log(v);
    }
  });





  var current_coef = localStorage.getItem("player_coef");

  if(current_coef){
      set_current_coef(current_coef);
  }

  $(".menu_actions").click(function(){

    var action = $(this).attr("v");

    switch (action) {
      case "rules":
      $(".tablemenuD").hide();
      $(".gameRules").show();
      $(".background_dealer").css("background", "url(/image/main_background_small.png) no-repeat center center fixed");
      $(".background_dealer").css("background-size", "cover");
      $(".background_dealer").css("-webkit-background-size", "cover");
      $(".background_dealer").css("-moz-background-size", "cover");
      $(".background_dealer").css("-o-background-size", "cover");
        break;
      case "help":
        $(".tablemenuD").hide();
        $(".payments").hide();
        $(".helpRules").show();
        $(".background_dealer").css("background", "url(/image/main_background_small.png) no-repeat center center fixed");
        $(".background_dealer").css("background-size", "cover");
        $(".background_dealer").css("-webkit-background-size", "cover");
        $(".background_dealer").css("-moz-background-size", "cover");
        $(".background_dealer").css("-o-background-size", "cover");
        break;
        case "profile":
            mainView.router.loadPage("cabinet.html");
        break;
        case "transfer":
        mainView.router.loadPage("/pages/transfer.html");
        break;
        case "gamesetting":
        $(".gamesettingD").show();
        $(".tablemenuD").hide();
        $(".background_dealer").css("background", "url(/image/main_background_small.png) no-repeat center center fixed");
        $(".background_dealer").css("background-size", "cover");
        $(".background_dealer").css("-webkit-background-size", "cover");
        $(".background_dealer").css("-moz-background-size", "cover");
        $(".background_dealer").css("-o-background-size", "cover");
        break;
        case "changeCoef":
        $(".gamesettingD").hide();
        $(".hidecoef").show();
        $(".main_enter").hide();
        $(".background_dealer").css("background", "url(/image/lobby_girl.png) no-repeat center center fixed");
        $(".background_dealer").css("background-size", "cover");
        $(".background_dealer").css("-webkit-background-size", "cover");
        $(".background_dealer").css("-moz-background-size", "cover");
        $(".background_dealer").css("-o-background-size", "cover");
        $(".gameRules").hide();
        $(".helpRules").hide();

        menufix = 0;
        break;
        case "deposit":
        $(".payments").show();
        $(".tablemenuD").hide();
        $(".helpRules").hide();
        $(".background_dealer").css("background", "url(/image/main_background_small.png) no-repeat center center fixed");
        $(".background_dealer").css("background-size", "cover");
        $(".background_dealer").css("-webkit-background-size", "cover");
        $(".background_dealer").css("-moz-background-size", "cover");
        $(".background_dealer").css("-o-background-size", "cover");



        break;


    }
  });

  $(".goToqiqi").click(function(){
      window.location="https://qiwi.com/payment/form/32795"; target="_blank";
  });


  $("#automaticvideo").change(function(){


        var checksound = $(this).prop("checked");

        if(checksound){
              console.log("вкл");

              localStorage.setItem("automaticvideo","true");
        }else{

            console.log("выкл");
            localStorage.setItem("automaticvideo","false");
        }


  });

  var automaticvideo = localStorage.getItem("automaticvideo");


  if(!automaticvideo){

    localStorage.setItem("automaticvideo","true");

  }else if(automaticvideo == "true"){


        $("#automaticvideo").prop('checked', true);
        $("#automaticsound").prop('checked', true);
        $("#automaticvsound").prop('checked', true);

        //console.log("sound muted");
  }


  checkCoefMemory();

  var auth = checkAuth();
  if(auth == false){
    $(".main_button_container").hide();
  }



});//finish ready



//});
// background: url(/image/main_background_small.png) no-repeat center center;
