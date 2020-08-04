var mobileappversion = "0.2.3";   //podnimat your version     hglyg || +77714138261   \\ 192

//small series

var fixconnection = 1;
var enablecamera = 0;
var startvoicefix = 0;
var cashready = 0;

var fixloading = 0;

var timerates = 0;
var globalsumx = 0;

var maxstrightup = 500;
var maxsplit = 1000;
var maxstreet = 1500;
var maxcorner = 2000;
var maxsixline = 3000;

var minogranizhenie = 0;

var maxdozensandcolumn = 1000;
var mindozensandcolumn = 50;
var maxevenaddredandblack = 2000;
var minevenaddredandblack = 50;
var blockclientst = 0;
var stateready = 0;



var arraydozandcol = ["1x12","2x12","3x12","2k1_3","2k1_2","2k1-1"];

var arrayevenoddblackred = ["1to18","even","red","black","odd","19to36"];





var userbalans = 0;
var touchendelement = 0;

 var usersum = 0;

  var sendArray = new Array();

  var countArray = new Array();

  var nominalnumber = 1;  //nominal

  var counttablefish = 0;






            function checktabletwo(){

                  var table = $(".changetabletwo").css("display");

                  if(table != "none"){
                      return false;
                  }else{
                      return true;
                  }
            }


            function exituser(){

                localStorage.setItem("userid","0");
                localStorage.setItem("useridentificator","0");

                mainView.router.loadPage("main.html");

                window.location.reload();

                $(".hidecontent").show();



            }


            function controlsum(){

              var sfxtwo = Number(usersum) - Number(globalsumx);


              if(Number(usersum) < Number(globalsumx)){

                  cleanclient();

              }




                if(stateready == 0){
//sfx
                      var t = '<span>BALANCE ' + sfxtwo + ' -AGP </span><img width="18" style="position:absolute;left:28%;top:4px;"  style="margin-top:5px;" src="phaser/play.png" alt="">';

                  }else{
                      var t = '<span>BALANCE ' + sfxtwo + ' -AGP </span><img width="18" style="position:absolute;left:28%;top:4px;"  style="margin-top:5px;" src="phaser/ready.png" alt="">';

                  }



                  $(".balans").html(t);
                  //console.log(t);




            }


            function alertmessage($message){

               var alertmessage = $(".viewmessage");

               alertmessage.empty();

               alertmessage.html($message);

               alertmessage.css("display","block");


               setTimeout(function(){
                    alertmessage.css("display","none");
               },1000);


            }

            function alertmessagethree($message){

               var alertmessage = $(".viewmessage3");

               alertmessage.empty();

               alertmessage.html($message);

               alertmessage.css("display","block");


               setTimeout(function(){
                    alertmessage.css("display","none");
               },1000);


            }

            function alertmessagefour($message){

               var alertmessage = $(".viewmessage4");

               alertmessage.empty();

               alertmessage.html($message);

               alertmessage.css("display","block");


               setTimeout(function(){
                    alertmessage.css("display","none");
               },1000);


            }

            function alertmessagetwo($message){

               var alertmessage2 = $(".viewmessage2");

               alertmessage2.empty();

               alertmessage2.html($message);

               alertmessage2.css("display","block");

            }

            function alertmessagetwohide($message){

               var alertmessage2 = $(".viewmessage2");

               alertmessage2.empty();

               alertmessage2.html($message);

               alertmessage2.css("display","block");


               setTimeout(function(){
                    alertmessage2.css("display","none");
               },1000);


            }





 var arnumber = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];

  var arnumbercount = new Array();

  for(var i = 0;i < arnumber.length;i++){
    arnumbercount[i] = 0;
  }
    //dlya rascheta selih blokov
  var arnumbercombination = ["0x3","0x2x3","0x2","0x1x2","0x1","0x1x2x3","3x2x1","1x12","2x12","3x12","3x6x2x5x1x4","6x5x4","6x9x5x8x4x7","9x8x7","9x12x8x11x7x10","12x11x10","12x15x11x14x10x13","15x14x13",
  "15x18x14x17x13x16","18x17x16","18x21x17x20x16x19","21x20x19","21x24x20x23x19x22","24x23x22","24x27x23x26x22x25","27x26x25","27x30x26x29x25x28","30x29x28","30x33x29x32x28x31",
  "33x32x31","33x36x32x35x31x34","36x35x34","3x6","6x9","9x12","12x15","15x18","18x21","21x24","24x27","27x30","30x33","33x36","2k1-1","3x2","3x6x2x5","6x5","6x9x5x8","9x8",
  "9x12x8x11","12x11","12x15x11x14","15x14","15x18x14x17","18x17","18x21x17x20","21x20","21x24x20x23","24x23","24x27x23x26","27x26","27x30x26x29","30x29","30x33x29x32",
  "32x33","33x36x32x35","36x35","2x5","5x8","8x11","11x14","14x17","17x20","20x23","23x26","26x29","29x32","32x35","2k1_2","2x1","2x5x1x4","5x4","5x8x4x7","8x7","8x11x7x10",
  "11x10","11x14x10x13","14x13","14x17x13x16","17x16","17x20x16x19","20x19","20x23x19x22","23x22","23x26x22x25","26x25","26x29x25x28","29x28","29x32x28x31","32x31","32x35x31x34",
  "35x34","1x4","4x7","7x10","10x13","13x16","16x19","19x22","22x25","25x28","28x31","31x34","2k1_3",,"1x2x3x4x5x6","4x5x6","4x5x6x9x8x7","7x8x9","7x8x9x10x11x12","10x11x12",
  "10x13x11x14x12x15","13x14x15","13x16x14x17x15x18","16x17x18","16x19x17x20x18x21","19x20x21","19x22x20x23x21x24","22x23x24","22x25x23x26x24x27","25x26x27","25x26x27x28x29x30",
  "28x29x30","28x31x29x32x30x33","31x32x33","31x34x32x35x33x36","34x35x36","1to18","even","red","black","odd","19to36","no","ntwo","nthree","nf","bs","ss","orp","zs"];

  var arnumbercombinationcount = new Array();

  for(var i = 0;i < arnumbercombination.length;i++){
    arnumbercombinationcount[i] = 0;
  }
      //chisto combinasii iz chisel
  var arnumbersearchcombination = ["0x3","0x2x3","0x2","0x1x2","0x1","0x1x2x3","3x6x2x5x1x4","6x5x4","6x9x5x8x4x7","9x8x7","9x12x8x11x7x10","12x11x10","12x15x11x14x10x13","15x14x13",
  "15x18x14x17x13x16","18x17x16","18x21x17x20x16x19","21x20x19","21x24x20x23x19x22","24x23x22","24x27x23x26x22x25","27x26x25","27x30x26x29x25x28","30x29x28","30x33x29x32x28x31",
  "33x32x31","33x36x32x35x31x34","36x35x34","3x6","6x9","9x12","12x15","15x18","18x21","21x24","24x27","27x30","30x33","33x36","3x2","3x6x2x5","6x5","6x9x5x8","9x8",
  "9x12x8x11","12x11","12x15x11x14","15x14","15x18x14x17","18x17","18x21x17x20","21x20","21x24x20x23","24x23","24x27x23x26","27x26","27x30x26x29","30x29","30x33x29x32",
  "32x33","33x36x32x35","36x35","2x5","5x8","8x11","11x14","14x17","17x20","20x23","23x26","26x29","29x32","32x35","2x1","2x5x1x4","5x4","5x8x4x7","8x7","8x11x7x10",
  "11x10","11x14x10x13","14x13","14x17x13x16","17x16","17x20x16x19","20x19","20x23x19x22","23x22","23x26x22x25","26x25","26x29x25x28","29x28","29x32x28x31","32x31","32x35x31x34",
  "35x34","1x4","4x7","7x10","10x13","13x16","16x19","19x22","22x25","25x28","28x31","31x34","3x2x1","1x2x3x4x5x6","4x5x6","4x5x6x9x8x7","7x8x9","7x8x9x10x11x12","10x11x12",
  "10x13x11x14x12x15","13x14x15","13x16x14x17x15x18","16x17x18","16x19x17x20x18x21","19x20x21","19x22x20x23x21x24","22x23x24","22x25x23x26x24x27","25x26x27","25x26x27x28x29x30",
  "28x29x30","28x31x29x32x30x33","31x32x33","31x34x32x35x33x36","34x35x36"];

  var arnumbersearchcombinationcount  = new Array();

  for(var i = 0;i < arnumbersearchcombination.length;i++){
    arnumbersearchcombinationcount[i] = 0;
  }


  var ar2k1_1 = [3,6,9,12,15,18,21,24,27,30,33,36];
  var ar2k1_2 = [2,5,8,11,14,17,20,23,26,29,32,35];
  var ar2k1_3 = [1,4,7,10,13,16,19,22,25,28,31,34];
  var red = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
  var black = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];

  var orphans = ["6x9","14x17","17x20","31x34","1"];

  var zero_spiel = ["0x3","12x15","32x35","26"];

  var s_s = ["0x2x3","0x2x3","4x7","12x15","18x21","19x22","32x35","26x29x25x28","26x29x25x28"];

  var big_series = ["5x8","11x10","13x16","24x23","27x30","33x36"];

  var fullnumbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];

  var fixsosed = 0;

  var noar = new Array();
  var notwoar = new Array();
  var nothreear = new Array();
  var nofar = new Array();
  var obshiiars = new Array();

      /*fixatori massivov*/

  var fixno = 0;
  var fixntwo = 0;
  var fixnthree = 0;
  var fixnfour = 0;
      /*fixatori massivov*/
      /*fixatori odnoi stavki na sosedei*/

      /*fixatori odnoi stavki na sosedei*/


/*peremennaya dlya otpravki koef tolko 1 raz*/

var send = 0;
/*peremennaya dlya otpravki koef tolko 1 raz*/

/*proverka statusa igri*/
var gamestatus2 = 0;
/*proverka statusa igri*/


var fixgame = 0;  //posgruzka setInterval 1 raz


//ogranichenie

var ogranichenie = 50000;

var timercamera = 0;


//phaser variables

var game;

var map;
var layer;

 var sprite;

var poly;
var allgraphics = new Object();   //save allgraphics
var graphics;
var graphicsbuttons;
var fishnum = 1;
var text = new Array();       //save all sprite text
var fishwidth;
var sosed = 1;

var fishobj = new Object();     //save all sprites

var countnamenumbers = new Array();

var deletefish = new Array();
var deletetext = new Array();
var deletetextnums = new Array();
var balancetext;
var fixbalance = 0;
var totalbet;
var fixtotalbet = 0;

var arnumbercountphaser = new Array();

var globallayer;

var phaservariables;

var historyfix = 0;


//routes

  var baseurl = localStorage.getItem("baseurl");  //route ball

  var routeball = baseurl + "rouletteball";

  var routegbal = baseurl + "getbalans";

  var routegamestatusclient = baseurl + "gamestatusclient";

  var routegamestatusdealer = baseurl + "gamestatusdealer";

  var routeburl = baseurl + "senddata";

  var routegetresult = baseurl + "getresult";

  var userid = localStorage.getItem("userid");

  var repeaturl = baseurl + "repeatnumber";

  var cancelmessage = baseurl + "cancelmessage";





//routes

//phaser variables

//functions

function cleanclient(){





                       $(".y").each(function(index,element){

                        var osn = $(element);

                        var div = osn.children("div:not(.i)");

                        var ii = osn.children(".i");

                        ii.attr("count","0");

                        ii.empty();

                        ii.css("display","none");

                        div.css("display","block");





                    });

                       for(var i = 0;i < arnumbercount.length;i++){
                            arnumbercount[i] = 0;
                        }

                        for(var j = 0;j < arnumbercombinationcount.length;j++){
                            arnumbercombinationcount[j] = 0;
                        }

                        for(var k = 0;k < arnumbersearchcombinationcount.length;k++){
                            arnumbersearchcombinationcount[k] = 0;
                        }


                        noar[0] = 2000;
                        notwoar[0] = 2000;
                        nothreear[0] = 2000;
                        nofar[0] = 2000;




                        fixno = 0;
                        fixntwo = 0;
                        fixnthree = 0;
                        fixnfour = 0;



                        for(var jj = 0;jj < noar.length;jj++){
                              noar[jj] = 2000;
                        }

                        for(var jjj = 0;jjj < noar.length;jjj++){
                              notwoar[jjj] = 2000;
                        }


                        for(var jjjj = 0;jjjj < noar.length;jjjj++){
                              nothreear[jjjj] = 2000;
                        }

                        for(var jjjjj = 0;jjjjj < noar.length;jjjjj++){
                              nofar[jjjjj] = 2000;
                        }



                        for(var f = 0;f < deletefish.length;f++){
                            deletefish[f].destroy();
                            //deletefish.splice(f,1);
                        }
                        //deletefish.pop();

                        for(var n = 0;n < deletetext.length;n++){
                              deletetext[n].destroy();
                              //deletetext.splice(n,1);

                        }
                        deletefish = [];
                        deletetext = [];
                        countnamenumbers = [];
                        deletetextnums = [];
                        //deletetext.pop();


                        for(var nn = 0;nn <= 36;nn++){
                            allgraphics[nn].paramssum = 0;
                            allgraphics[nn].paramsclicked = 0;
                        }



                        checksum();



                 }



                 function returnfish(){

                  //var buttons = $$("#clickvoice")[0];
                              //buttons.play();

                               if(timerates == 1){

                                    alertmessage('No more bets');
                                    return false;
                                }


//testg

                      for(var i = 0;i < countArray.length;i++){
                          if(i == countArray.length - 1){

                              //console.log(countArray[i]);

                              var y = $('[x = ' + countArray[i] + ']');

                              y.children(".i").empty();

                              y.children("div:not(.i)").css("display","block");

                              for(var j = 0;j < arnumber.length;j++){
                                  if(countArray[i] == arnumber[j]){
                                      if(arnumbercount[j] != 0){
                                          arnumbercount[j] = 0;
                                          var ng = arnumber[j];
                                          $('[x = ' + ng + ']').children(".i").attr("count","0");
                                      }
                                  }
                              }

                              for(var k = 0;k < arnumbercombination.length;k++){
                                  if(countArray[i] == arnumbercombination[k]){
                                      if(arnumbercombinationcount[k] != 0){
                                          arnumbercombinationcount[k] = 0;
                                          var ng = arnumbercombination[k];
                                          $('[x = ' + ng + ']').children(".i").attr("count","0");
                                      }
                                  }
                              }


                              for(var l = 0;l < arnumbersearchcombination.length;l++){
                                  if(countArray[i] == arnumbersearchcombination[l]){
                                      if(arnumbersearchcombinationcount[l] != 0){
                                          arnumbersearchcombinationcount[l] = 0;
                                          var ng = arnumbersearchcombination[l];
                                          $('[x = ' + ng + ']').children(".i").attr("count","0");
                                      }
                                  }
                              }




                          }
                      }


                      countArray.pop();

                      //phaser

                        if(deletefish.length > 0){


                              deletefish[deletefish.length-1].destroy();    //delete sprite
                              deletefish.pop();
                              deletetextnums.pop();
                              countnamenumbers.pop();

                              deletetext[deletetext.length - 1].destroy();    //delete text
                              deletetext.pop();

                              var deletenumber = countnamenumbers[countnamenumbers.length - 1];     //delete sum information
                              countnamenumbers.pop();

                              var deletesum = allgraphics[deletenumber].paramssum;

                              allgraphics[deletenumber].paramssum = 0;
                              allgraphics[deletenumber].paramsclicked = 0;


                        }


                        checksumx();


                      //phaser

                 }


                 function globalneirochecksum(checkx){
                                               //checkbalans
                                    //ogranicheniya


                                        if(globalsumx > usersum){
                                            returnfish();
                                            return false;
                                        }

                                        if(globalsumx > ogranichenie){
                                            returnfish();
                                            return false;
                                        }


                                      //ogranicheniya

                                    if(checkx == "no"){

                                      var fixstrightup = 0;
                                        var stringtupsum = 0;

                                        for(var y = 0;y < arnumber.length;y++){

                                            if(arnumbercount[y] != 0){
                                                stringtupsum = arnumbercount[y];

                                                if((stringtupsum + Number(nominalnumber)) > maxstrightup){
                                                    alertmessagefour('Straight Up maximum ' + maxstrightup);
                                                    return false;
                                                }

                                                if(Number(nominalnumber) < minogranizhenie){
                                                    alertmessagefour('Straight Up minimum ' + minogranizhenie);
                                                    return false;
                                                }
                                            }

                                        }

                                      var vb = Number(globalsumx) + (Number(nominalnumber) * 3);
                                      var vbs = Number(globalsumx) + (Number(nominalnumber) * 3);

                                    //console.log(v + " | " + usersum);
                                        if(vb > Number(usersum)){

                                          alertmessagefour('Insufficiant Balance');
                                          return false;
                                        }else if(vbs > ogranichenie){
                                            alertmessagefour('Table maximum ' + ogranichenie);
                                            return false;
                                        }else{
                                          return true;
                                        }

                                    }else if(checkx == "ntwo"){

                                      var fixstrightup = 0;
                                        var stringtupsum = 0;

                                        for(var y = 0;y < arnumber.length;y++){

                                            if(arnumbercount[y] != 0){
                                                stringtupsum = arnumbercount[y];

                                                if((stringtupsum + Number(nominalnumber)) > maxstrightup){
                                                    alertmessagefour('Straight Up maximum ' + maxstrightup);
                                                    return false;
                                                }

                                                if(Number(nominalnumber) < minogranizhenie){
                                                    alertmessagefour('Straight Up minimum ' + minogranizhenie);
                                                    return false;
                                                }
                                            }

                                        }

                                      var vb = Number(globalsumx) + (Number(nominalnumber) * 5);
                                      var vbs = Number(globalsumx) + (Number(nominalnumber) * 5);

                                    //console.log(v + " | " + usersum);
                                        if(vb > Number(usersum)){

                                          alertmessage('Insufficiant Balance');
                                          return false;
                                        }else if(vbs > ogranichenie){
                                            alertmessagefour('Table maximum ' + ogranichenie);
                                            return false;
                                        }else{
                                          return true;
                                        }

                                    }else if(checkx == "nthree"){

                                      var fixstrightup = 0;
                                        var stringtupsum = 0;

                                        for(var y = 0;y < arnumber.length;y++){

                                            if(arnumbercount[y] != 0){
                                                stringtupsum = arnumbercount[y];

                                                if((stringtupsum + Number(nominalnumber)) > maxstrightup){
                                                    alertmessagefour('Straight Up maximum ' + maxstrightup);
                                                    return false;
                                                }

                                                if(Number(nominalnumber) < minogranizhenie){
                                                    alertmessagefour('Straight Up minimum ' + minogranizhenie);
                                                    return false;
                                                }
                                            }

                                        }

                                      var vb = Number(globalsumx) + (Number(nominalnumber) * 7);
                                      var vbs = Number(globalsumx) + (Number(nominalnumber) * 7);

                                    //console.log(v + " | " + usersum);
                                        if(vb > Number(usersum)){

                                          alertmessage('Insufficiant Balance');
                                          return false;
                                        }else if(vbs > ogranichenie){
                                            alertmessagefour('Table maximum ' + ogranichenie);
                                            return false;
                                        }else{
                                          return true;
                                        }





                                    }else if(checkx == "nf"){

                                      var fixstrightup = 0;
                                        var stringtupsum = 0;

                                        for(var y = 0;y < arnumber.length;y++){

                                            if(arnumbercount[y] != 0){
                                                stringtupsum = arnumbercount[y];

                                                if((stringtupsum + Number(nominalnumber)) > maxstrightup){
                                                    alertmessagefour('Straight Up maximum ' + maxstrightup);
                                                    return false;
                                                }

                                                if(Number(nominalnumber) < minogranizhenie){
                                                    alertmessagefour('Straight Up minimum ' + minogranizhenie);
                                                    return false;
                                                }
                                            }

                                        }

                                      var vb = Number(globalsumx) + (Number(nominalnumber) * 9);
                                      var vbs = Number(globalsumx) + (Number(nominalnumber) * 9);

                                    //console.log(v + " | " + usersum);
                                        if(vb > Number(usersum)){

                                          alertmessage('Insufficiant Balance');
                                          return false;
                                        }else if(vbs > ogranichenie){
                                            alertmessagefour('Table maximum ' + ogranichenie);
                                            return false;
                                        }else{
                                          return true;
                                        }

                                        //gforse

                                    }else if(checkx == "twox"){






                                      var vb = Number(globalsumx) * counttablefish;
                                      var twox = Number(globalsumx) * 2;

                                      // else if(vb > Number(usersum)){
                                      //       alertmessage('Insufficiant Balance');
                                      //       return false;
                                      //   }else


                                    //console.log(v + " | " + usersum);
                                        // if(vb > ogranichenie){
                                        //       alertmessagefour('Table maximum ' + ogranichenie);
                                        //             return false;
                                        // }else

                                        if(twox > ogranichenie){
                                              alertmessagefour('Table maximum ' + ogranichenie);
                                                    return false;
                                        }else if(twox > Number(usersum)){
                                            alertmessage('Insufficiant Balance');
                                            return false;
                                        }else{
                                          return true;
                                        }



                                    }else{
//end


                                        for(var h = 0;h < arraydozandcol.length;h++){
                                          if(checkx == arraydozandcol[h]){

                                              if(Number(nominalnumber) < mindozensandcolumn){
                                                  alertmessagethree('Dozen and column minimum ' + mindozensandcolumn);
                                                  return false;
                                              }

                                          }
                                        }

                                        for(var ii = 0;ii < arrayevenoddblackred.length;ii++){
                                            if(checkx == arrayevenoddblackred[ii]){
                                                if(Number(nominalnumber) < minevenaddredandblack){
                                                    alertmessagefour('even,odd,black,red,1-18,19-36 minimum ' + minevenaddredandblack);
                                                    return false;
                                                }
                                            }
                                        }

                                        for(var h = 0;h < arraydozandcol.length;h++){
                                          if(checkx == arraydozandcol[h]){


                                            for(var k = 0;k < arnumbercombination.length;k++){
                                                  if(checkx == arnumbercombination[k]){

                                                      if((arnumbercombinationcount[k] + Number(nominalnumber)) > maxdozensandcolumn){
                                                          alertmessagethree('Dozen and column maximum ' + maxdozensandcolumn);
                                                          return false;
                                                      }
                                                  }
                                              }


                                          }
                                        }

                                        for(var ll = 0;ll < arrayevenoddblackred.length;ll++){

                                            if(checkx == arrayevenoddblackred[ll]){

                                                for(var pp = 0;pp < arnumbercombination.length;pp++){
                                                    if(checkx == arnumbercombination[pp]){
                                                        if((arnumbercombinationcount[pp] + Number(nominalnumber)) > maxevenaddredandblack){
                                                          alertmessagefour('even,odd,black,red,1-18,19-36 maximum ' + maxevenaddredandblack);
                                                          return false;
                                                        }
                                                    }
                                                }
                                            }

                                        }


                                        for(var yx = 0;yx < arnumbersearchcombination.length;yx++){

                                            if(checkx == arnumbersearchcombination[yx]){

                                            var newarrz = arnumbersearchcombination[yx].split("x");

                                            if(newarrz.length == 2){

                                                if((arnumbersearchcombinationcount[yx] + Number(nominalnumber)) > maxsplit){
                                                    alertmessagefour('Split maximum ' + maxsplit);
                                                    return false;
                                                        }
                                                if(Number(nominalnumber) < minogranizhenie){
                                                    alertmessagefour('Split minimum ' + minogranizhenie);
                                                    return false;
                                                        }
                                            }else if(newarrz.length == 3){

                                                if((arnumbersearchcombinationcount[yx] + Number(nominalnumber)) > maxstreet){
                                                    alertmessagefour('Street maximum ' + maxstreet);
                                                    return false;
                                                        }

                                                if(Number(nominalnumber) < minogranizhenie){
                                                    alertmessagefour('Street minumum ' + minogranizhenie);
                                                    return false;
                                                        }

                                            }else if(newarrz.length == 4){

                                                if((arnumbersearchcombinationcount[yx] + Number(nominalnumber)) > maxcorner){
                                                    alertmessagefour('Corner maximum ' + maxcorner);
                                                    return false;
                                                        }

                                                if(Number(nominalnumber) < minogranizhenie){
                                                    alertmessagefour('Corner minimum ' + minogranizhenie);
                                                    return false;
                                                        }

                                            }else if(newarrz.length == 6){

                                                if((arnumbersearchcombinationcount[yx] + Number(nominalnumber)) > maxsixline){
                                                    alertmessagefour('Sixline maximum ' + maxsixline);
                                                    return false;
                                                        }

                                                if(Number(nominalnumber) < minogranizhenie){
                                                    alertmessagefour('Sixline minimum ' + minogranizhenie);
                                                    return false;
                                                        }
                                            }

                                            }

                                        }

                                        var jjj = (Number(globalsumx) + Number(nominalnumber));


                                        var fixstrightup = 0;
                                        var stringtupsum = 0;

                                        for(var y = 0;y < arnumber.length;y++){

                                            if(checkx == arnumber[y]){
                                                stringtupsum = arnumbercount[y];
                                                fixstrightup = 1;
                                            }

                                        }

                                        var stringtupsumg = stringtupsum + Number(nominalnumber);


                                        if(jjj > ogranichenie){
                                                alertmessagefour('Table maximum ' + ogranichenie);
                                                //returnfish();
                                                return false;
                                        }else if(jjj > Number(usersum)){    //limit for balans

                                                alertmessage('Insufficiant Balance');
                                                return false;
                                        }else if(globalsumx > usersum){
                                            returnfish();
                                            return false;
                                        }else if(globalsumx > ogranichenie){  //limit for ogranichenie
                                            returnfish();
                                            return false;
                                        }else if((fixstrightup == 1) && (stringtupsumg > maxstrightup)){

                                            alertmessagefour('Straight Up maximum ' + maxstrightup);
                                            return false;


                                        }else if((fixstrightup == 1) && (Number(nominalnumber) < minogranizhenie)){

                                            alertmessagefour('Straight Up minimum ' + minogranizhenie);
                                            return false;


                                        }else{
                                          return true;
                                        }



                                    }


                                    //checkbalans
                 }




//////////////////////////////////////////////////

                           //istoriya stavok


                           //function opredeleniya combinasii

                           function searchcombination(name){

                                var a_1 = "сообщить программисту";

                                          switch (name) {
                                                        case "corner":
                                                          a_1 = "CORNER";
                                                          break;
                                                        case "duzhina":
                                                          a_1 = "DOZEN";
                                                          break;
                                                        case "kolonki":
                                                          a_1 = "COLUMN";
                                                          break;

                                                          case "mal_bol":
                                                          a_1 = "SMALL BIG";
                                                          break;

                                                          case "stright_up":
                                                          a_1 = "STRAIGHT UP";
                                                          break;


                                                          case "even_odd":
                                                          a_1 = "EVEN ODD";
                                                          break;

                                                          case "black_red":
                                                          a_1 = "BLACK RED";
                                                          break;

                                                          case "no":
                                                          a_1 = "1 NEIGHBOUR";
                                                          break;

                                                          case "notwo":
                                                          a_1 = "2 NEIGHBOURS";
                                                          break;

                                                          case "nothree":
                                                          a_1 = "3 NEIGHBOURS";
                                                          break;

                                                          case "nofour":
                                                          a_1 = "4 NEIGHBOURS";
                                                          break;

                                                          case "split":
                                                          a_1 = "SPLIT";
                                                          break;

                                                          case "street":
                                                          a_1 = "STREET";
                                                          break;

                                                          case "six_number":
                                                          a_1 = "SIX NUMBER";
                                                          break;

                                                          case "z_s":
                                                          a_1 = "ZERO SPIEL";
                                                          break;

                                                          case "orp":
                                                          a_1 = "ORPHANS";
                                                          break;

                                                          case "s_s":
                                                          //a_1 = "SMALL SERIES";
                                                          a_1 = "TIERS";
                                                          break;

                                                          case "b_s":
                                                        //  a_1 = "BIG SERIES";
                                                          a_1 = "VOISINS";
                                                          break;


                                                      }

                                          return a_1;

                           }
                           //function opredeleniya combinasii

                           //function opredeleniya time

                           function gettime(time){

                              var hhh = new Date(time * 1000);

                                                      var options = {
                                                            //era: 'long',
                                                            //era: 'long',
                                                            year: 'numeric',
                                                            month: 'numeric',
                                                            day: 'numeric',
                                                            //weekday: 'long',
                                                            //timezone: 'UTC',
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            second: 'numeric'
                                                          };

                                                      var strdate = hhh.toLocaleString("ru", options);

                                                      return strdate;
                           }
                           //function opredeleniya time



                        function checkhistory(){


                              var userid = localStorage.getItem("userid");

                              var useridentificator = userid;

                               var senduserid = {

                                        "userid":useridentificator,

                                                }


                                                   var urlmessagesend7 = localStorage.getItem("baseurl");

                                                  $.ajax({
                                                        "type":"GET",
                                                        "url": urlmessagesend7 + "roulettehistory/",    /*random restourants menu zakaZ*/

                                                        dataType: "jsonp",
                                                        crossDomain: true,
                                                        "data": senduserid,

                                                        "success":kxn1,
                                                        "error":errorfuncn1

                                                        });


                                                  function kxn1(result){

                                                  var fixwin = 0;

                                                  var lastwinnumber = 0;



                                                    if(result[0] != "false"){

                                                      //console.log(result[0]);

                                                        $(".staticblank").empty();

                                                        for(var i = 0;i < result[1].length;i++){


                                                            for(var v = 0;v < 3;v++){   //obhod serii

                                                            for(var z = 0;z < result[1][i][v][2].length;z++){ //obhod viigrishei

                                                              if(result[1][i][v][2][z] == 1){

                                                                  var returnstring = searchcombination(result[1][i][v][4][z]);
                                                                  //console.log(result[1][i][v][4][z]);

                                                                  //console.log(returnstring);
                                                                  //console.log(result[1][i][v][4][z]);
                                                                  var newtime = gettime(result[0][i].time);
                                                                  //rab
                                                                  var stb = "new update";
                                                                  var end = "new update";

                                                                  var startingbalance = result[1][i][6];

                                                                  if(startingbalance){
                                                                      stb = startingbalance;
                                                                      end = Number(startingbalance) + Number(result[1][i][v][3][z]);
                                                                  }

                                                                  if(result[1][i][v][3][z]){

                                                                      if(fixwin == 0){
                                                                          lastwinnumber += result[1][i][v][3][z];
                                                                         // fixwin = 1;
                                                                          $(".lastwin").text("WIN " + lastwinnumber + " AGP");

                                                                          //console.log(result[1][i][v][3][z]);
                                                                      }
                                                                  }

                                                                  //console.log(result[1][i][v][3][z] + " | " + z);

var str = '<table><tbody  style="color:black;"><tr> <td class="label-cell">DATE:</td> <td class="numeric-cell">'+ newtime +'</td> </tr>' +
'<tr> <td class="label-cell">STARTING BALANCE:</td> <td class="numeric-cell">'+ stb +'</td> </tr>' +
'<tr> <td class="label-cell">COMBINATION:</td> <td class="numeric-cell">'+ returnstring +'</td> </tr>' +
'<tr> <td class="label-cell">BET:</td> <td class="numeric-cell">'+ result[1][i][v][1][z] +'</td> </tr>' +
'<tr> <td class="label-cell">RESULT:</td> <td class="numeric-cell">'+ result[1][i][5] +'</td> </tr>' +
'<tr> <td class="label-cell">WIN:</td> <td class="numeric-cell">'+ result[1][i][v][3][z] +'</td> </tr>' +
'<tr> <td class="label-cell">ENDING BALANCE:</td> <td class="numeric-cell">'+ end +'</td> </tr> ' +
'<tr> <td class="label-cell"></td> <td class="numeric-cell"></td> </tr></tbody></table>';

$(".staticblank").append(str);
//console.log("append");



                                                              }

                                                            }

                                                          }

                                                        }

                                                    }


                                                  }

                                                  function errorfuncn1(){


                                                  }



                                          }




                           //istoriya stavok

//////////////////////////////////////////////////



                var checkkoef = 0; //peremennaya kotoraya soobsh/bili li statvki



                          /*function proverki sredstv*/
                  function checksum(){


                    var sumx = 0;
                    var countfish = 0;




                        for(var xx = 0;xx < arnumbercount.length;xx++){

                            if(arnumbercount[xx] != 0){
                              sumx += +arnumbercount[xx];
                              countfish += 1;

                            }

                        }

                        for(var xx2 = 0;xx2 < arnumbersearchcombinationcount.length;xx2++){

                            if(arnumbersearchcombinationcount[xx2] != 0){
                              sumx += +arnumbersearchcombinationcount[xx2];

                              countfish += 1;
                            }

                        }

                        for(var xx3 = 0;xx3 < arnumbercombinationcount.length;xx3++){

                            if(arnumbercombinationcount[xx3] != 0){
                              sumx += +arnumbercombinationcount[xx3];
                              countfish += 1;
                            }

                        }


                        counttablefish = countfish;
                        globalsumx = sumx;




                        $(".totalbet").text(sumx);

                        if(Number(globalsumx) > Number(usersum)){

                          console.log(1);
                            returnfish();
                            cleanclient();
                        }

                        //console.log("checksum");

                        controlsum();



                  }



            function sendkoef(){



                        //return false;

                        for(var i = 0;i < arnumbercount.length;i++){
                              if(arnumbercount[i] != "0"){

                                if(arnumbercount[i] < 0){
                                  arnumbercount[i] = 0;
                                }
                                checkkoef = 1;
                              }
                        }

                        for(var i = 0;i < arnumbercombinationcount.length;i++){
                              if(arnumbercombinationcount[i] != "0"){
                                if(arnumbercombinationcount[i] < 0){
                                    arnumbercombinationcount[i] = 0;
                                }
                                checkkoef = 1;
                              }
                        }

                        for(var i = 0;i < arnumbersearchcombinationcount.length;i++){
                              if(arnumbersearchcombinationcount[i] != "0"){

                                if(arnumbersearchcombinationcount[i] < 0){
                                    arnumbersearchcombinationcount[i] = 0;
                                }
                                checkkoef = 1;
                              }
                        }
                              /*podschet postavlennoi summi i proverka*/



                              if((Number(usersum) <= 0) || (Number(globalsumx) > Number(usersum))){
                                  //returnfish();
                                  cleanclient();
                                  return false;
                              }

                        /*podschet postavlennoi summi i proverka*/


                        if((checkkoef == 1) && (send == 0)){

                            /*sbor sosedei arrays*/
                         obshiiars[0] = noar;
                         obshiiars[1] = notwoar;
                         obshiiars[2] = nothreear;
                         obshiiars[3] = nofar;
                            /*sbor sosedei arrays*/

                            /*dopolnitelnie usloviya*/

                            if((obshiiars[0][0] == undefined) || (obshiiars[0][0] == "-")){
                                obshiiars[0][0] = 2000;
                            }

                            if((obshiiars[1][0] == undefined) || (obshiiars[1][0] == "-")){
                                obshiiars[1][0] = 2000;
                            }

                            if((obshiiars[2][0] == undefined) || (obshiiars[2][0] == "-")){
                                obshiiars[2][0] = 2000;
                            }

                            if((obshiiars[3][0] == undefined) || (obshiiars[3][0] == "-")){
                                obshiiars[3][0] = 2000;
                            }

                            /*dopolnitelnie usloviya*/

                            /*berem id*/

                            var id = localStorage.getItem("userid");


                        if(blockclientst == 1){

                          myApp.alert("Your Account is Blocked!",'ALMAGAMES');
                          return false;

                        }

                            /*berem id*/

                        sendArray[0] = arnumber;
                        sendArray[1] = arnumbercount;
                        sendArray[2] = arnumbercombination;
                        sendArray[3] = arnumbercombinationcount;
                        sendArray[4] = arnumbersearchcombination;
                        sendArray[5] = arnumbersearchcombinationcount;
                        sendArray[6] = obshiiars;     /*sosedi*/
                        sendArray[7] = id;     /*sosedi*/

                        //console.log(routeburl);

                        var url = routeburl;

                        var jsonsendarray = JSON.stringify(sendArray);

                        var usid = localStorage.getItem("userid");

                        socket.emit('sendData', {userid:usid,data:jsonsendarray});

                           send = 1;
                           console.log("senddata");

                         }else{

                            //console.log("данные пусты..");
                            return false;

                         }/*kones if*/


                 }

                 socket.on('sendData', function(data){

                     if(data.status == "1"){
                        console.log("sended");
                     }

                 });



                       voicefix = 0;
                 /*function blockclient*/

                 function blockclient(){

                          fixbot = 0;

                          sendkoef();
                          $(".jjj").css("display","none");

                          $(".jjj2").css("display","block");

                          if(voicefix == 0){

                          var automaticvideo = localStorage.getItem("automaticvideo");

                          if(automaticvideo == "false"){

                          }else{
                            activcamera();
                            enablechangecamera();
                          }
                            voicefix = 1;

                          }

                          //console.log("block");

                          checkutime = 1;
                          checkutime2 = 0;
                          //utime2 = 120;

                          fixbot = 0; //needfixed
                          //getball();


                 }


                    var fixbot = 0;

                    function ublockclient(){

                               $(".jjj").css("display","block");

                               $(".jjj2").css("display","none");

                               voicefix = 0;

                               checkutime = 0;
                               checkutime2 = 1;

                              // console.log("unblock");

                               if(fixbot == 0){

                                fixbot = 1;

                                fixshowball = 0;


                                  checkhistory();
                                  getball();
                                  getbalans();

                                setTimeout(function(){

                                  var automaticvideo = localStorage.getItem("automaticvideo");

                                  if(automaticvideo == "false"){

                                  }else{
                                        unactivecamera();
                                        disabledchangecamera();
                                  }

                                },1700);


                                setTimeout(function(){

                                    getresult();

                                },2000);





                               }


                               send = 0;


                 }



                 var checkutime = 0;

                 function updatetime(){

                    if(checkutime == 0){
                      return false;
                    }



                    //$("#timeout").text("N");
                    $(".change_status").attr("src","image/no_more_bets.png");




                 }


                 var checkutime2 = 0;

                 function updatetime2(){

                    if(checkutime2 == 0){
                      return false;
                    }

                    //$(".timeout2").text("P");
                    $(".change_status").attr("src","image/bets_open.png");


                 }



               function getnumbers(hhh){

                //1 color,2 number left,3 number right

                                  var returnnumbers = new Array();

                                  var fixnum = 0;

                                  for(var i = 0;i < red.length;i++){
                                        if(hhh == red[i]){
                                            returnnumbers[0] = "red";
                                            fixnum = 1;
                                        }
                                  }


                                  for(var j = 0;j < black.length;j++){
                                      if(hhh == black[j]){
                                            returnnumbers[0] = "black";
                                            fixnum = 1;
                                        }

                                  }

                                  if(fixnum == 0){
                                      returnnumbers[0] = "green";
                                  }


                                  for(var v = 0;v < fullnumbers.length;v++){

                                      if(hhh == fullnumbers[v]){

                                          if(fullnumbers[v] == 26){
                                              returnnumbers[1] = fullnumbers[v-1];
                                              returnnumbers[2] = 0;

                                          }else if(fullnumbers[v] == 0){
                                              returnnumbers[1] = 26;
                                              returnnumbers[2] = fullnumbers[v+1];

                                          }else{
                                              returnnumbers[1] = fullnumbers[v-1];
                                              returnnumbers[2] = fullnumbers[v+1];
                                          }

                                      }

                                  }

                                  return returnnumbers;


            }


                var fixx = 0;

                 var fixshowball = 0;

                 function getball(){

                          var ball = routeball;


                      /*  var o = {
                            "hid":"d",
                            "data":sendArray,
                            };
                      */
                         $.ajax({
                                    "type":"GET",
                                    "url":ball,

                                    "dataType": "jsonp",
                                    "crossDomain": true,
                                    /*"data":o,*/

                                    "success":kx10,
                                    "error":errorfunc10

                              });

                          function kx10(result10){

                                //console.log(result10);

                                if(result10[0] != "0"){

                                var obj = result10[0];//jQuery.parseJSON(result10);

                                //$(".gamenumber").text("# " + result10[1]);

                                $("#balltracker").empty();

                                for(var i = 0;i < obj.length;i++){

                                    if(i == 0){

                                      //tabbb

                                      if(fixshowball == 0){
                                          showball(obj[i]);

                                      }


                                        $("#balltracker").append('<span style="color:white;background-color:red;border-top:4px solid red;border-bottom:4px solid red;">&nbsp;&nbsp;' + obj[i] + '&nbsp;&nbsp;</span>');

                                        var jj = $("#im_r_val").val();
                                        var jjj = jj + obj[i] + ".png";

                                        $(".im_r").each(function(index,element){

                                            $(element).attr("src",jjj);

                                        });




                                    }else{

                                        if(obj[i] == 0){
                                            $("#balltracker").append('<span style="color:green;">&nbsp;&nbsp;' + obj[i] + '&nbsp;&nbsp;</span>');
                                        }

                                        for(var k = 0;k < red.length;k++){
                                            if(red[k] == obj[i]){
                                                $("#balltracker").append('<span style="color:#ff5c33;">&nbsp;&nbsp;' + obj[i] + '&nbsp;&nbsp;</span>');
                                            }
                                        }

                                        for(var l = 0;l < black.length;l++){
                                            if(black[l] == obj[i]){
                                                $("#balltracker").append('<span  style="color:black;">&nbsp;&nbsp;' + obj[i] + '&nbsp;&nbsp;</span>');
                                            }
                                        }


                                    }

                                }




                                }else{
                                    console.log("ошибка ball");
                                } /*kones if*/

                             }

                             function errorfunc10(){
                                console.log("oshibka zaprosa v ball");
                             }

                 }



                function repeatnumbers(){





                                        function getimage5(target,sum){



                                                  var p_indecator_count = target.children(".i");

                                                  var prevdivnumber = target.children("div:not(.i)");

                              //new manipulation

                                                   prevdivnumber.css("display","none");  //skritie perednego div s nomerom
                                                   //generasiya kartinki

                                                    var vvv = vvvvt.cloneNode(false);


                                                    vvv.setAttribute("width", "50");
                                                    vvv.setAttribute("height", "50");

                                                     var xxx = vvv.getContext('2d');

                                                     var img = imggt.cloneNode(false);

                                                    xxx.beginPath();

                                                    var imcolor = "#00a0e3";

                                                    if(nominalnumber == "1"){
                                                        imcolor = "#00a0e3";
                                                        img.src = 'fishki/fishka1.png';

                                                    }else if(nominalnumber == "5"){
                                                        imcolor = "#e31e24";
                                                        img.src = 'fishki/fishka5.png';

                                                    }else if(nominalnumber == "25"){
                                                        imcolor = "#10653f";
                                                        img.src = 'fishki/fishka25.png';

                                                    }else if(nominalnumber == "50"){
                                                        imcolor = "#0079EF";
                                                        //img.src = 'fishki/fishka25.png';
                                                    }else if(nominalnumber == "100"){
                                                        imcolor = "#1c1b17";
                                                        img.src = 'fishki/fishka100.png';

                                                    }else if(nominalnumber == "500"){
                                                        imcolor = "#ea5f8b";
                                                        img.src = 'fishki/fishka500.png';

                                                    }else if(nominalnumber == "1000"){
                                                        imcolor = "#9d3a31";
                                                         img.src = 'fishki/fishka1000.png';

                                                    }else if(nominalnumber == "10000"){
                                                        imcolor = "#FDD700";
                                                    }

                                                    p_indecator_count.attr("colorfx",imcolor);

                                                    //podschet kolichestva nazhatii i stavok

                                                   p_indecator_count.attr("count",sum);

                                                   //podschet kolichestva nazhatii i stavok

                                                   var count_img = sum;



                                                    img.onload = function(){

                                                    xxx.drawImage(img,6,6,37,37);

                                                    xxx.beginPath();

                                                    xxx.fillStyle = "white";

                                                    xxx.arc(24.5,24.5,12,0,Math.PI*2,true); // Внутренняя окружность

                                                    xxx.fill();

                                                    xxx.beginPath();
                                                    xxx.fillStyle = "black";
                                                    xxx.font = "bold 12px Helvetica, sans-serif";

                                                    /*sentrovka texta*/
                                                    var positiontext = 20;

                                                    if((count_img > 9) && (count_img <= 99)){
                                                        positiontext = 17;
                                                    }else if((count_img > 99) && (count_img <= 999)){
                                                        positiontext = 12;
                                                    }else if((count_img > 999) && (count_img <= 9999)){
                                                        positiontext = 8;
                                                    }else if((count_img > 9999) && (count_img <= 99999)){
                                                        positiontext = 4;
                                                    }else if((count_img > 99999) && (count_img <= 10000000)){
                                                        positiontext = 1;
                                                    }
                                                    xxx.fillText(count_img, positiontext, 29);
                                                    /*sentrovka texta*/

                                                    p_indecator_count.empty();      //ochistka diva

                                                    p_indecator_count.append(vvv);  //vstabka kartinki

                                                    p_indecator_count.css("display","block");       //pokaz kartinki

                                                    //new manipulation
                                                  }

                            }


                            function getimage6(target,numb){

              //new manipulation

                                    var p_indecator_count = target.children(".i");

                                    var prevdivnumber = target.children("div:not(.i)");

                                   prevdivnumber.css("display","none");  //skritie perednego div s nomerom
                                   //generasiya kartinki

                                    var vvv = vvvvt.cloneNode(false);

                                    vvv.setAttribute("width", "50");
                                    vvv.setAttribute("height", "50");

                                     var xxx = vvv.getContext('2d');

                                     var img = imggt.cloneNode(false);

                                    xxx.beginPath();

                                    var imcolor = "#00a0e3";

                                    if(nominalnumber == "1"){
                                        imcolor = "#00a0e3";
                                        img.src = 'fishki/fishka1.png';

                                    }else if(nominalnumber == "5"){
                                        imcolor = "#e31e24";
                                        img.src = 'fishki/fishka5.png';

                                    }else if(nominalnumber == "25"){
                                        imcolor = "#10653f";
                                        img.src = 'fishki/fishka25.png';

                                    }else if(nominalnumber == "50"){
                                        imcolor = "#0079EF";
                                        //img.src = 'fishki/fishka25.png';
                                    }else if(nominalnumber == "100"){
                                        imcolor = "#1c1b17";
                                        img.src = 'fishki/fishka100.png';

                                    }else if(nominalnumber == "500"){
                                        imcolor = "#ea5f8b";
                                        img.src = 'fishki/fishka500.png';

                                    }else if(nominalnumber == "1000"){
                                        imcolor = "#9d3a31";
                                         img.src = 'fishki/fishka1000.png';

                                    }else if(nominalnumber == "10000"){
                                        imcolor = "#FDD700";
                                    }


                                    p_indecator_count.attr("colorfx",imcolor);

                                    //podschet kolichestva nazhatii i stavok




                                    img.onload = function(){

                                    xxx.drawImage(img,6,6,37,37);

                                    xxx.beginPath();

                                    xxx.fillStyle = "white";

                                    xxx.arc(24.5,24.5,12,0,Math.PI*2,true); // Внутренняя окружность

                                    xxx.fill();

                                    xxx.beginPath();
                                    xxx.fillStyle = "black";
                                    xxx.font = "bold 12px Helvetica, sans-serif";

                                    /*sentrovka texta*/

                                    var snum = numb + "n";

                                    xxx.fillText(snum, 17, 29);
                                    /*sentrovka texta*/


                                    p_indecator_count.empty();      //ochistka diva

                                    p_indecator_count.append(vvv);  //vstabka kartinki

                                    p_indecator_count.css("display","block");       //pokaz kartinki

                                    //new manipulation
                                  }

            }

                        /*function image*/

                        var repeat = repeaturl;
                        //need change
                        var usiddd = localStorage.getItem("userid");

                        var sendd = {
                            "userid":usiddd
                            };

                       $.ajax({
                                  "type":"GET",
                                  "url":repeat,

                                  "dataType": "jsonp",
                                  "crossDomain": true,
                                  "data":sendd,

                                  "success":kxx2,
                                  "error":errorfuncv2

                            });

                        function kxx2(res1){

                              //console.log(res1[0]);

                              if(res1[0] != "2000"){

                                var jsonar = jQuery.parseJSON(res1[0]);

                                for(var i = 0;i < jsonar[1].length;i++){

                                    if(jsonar[1][i] != "0"){

                                        var sum = jsonar[1][i];

                                        var numb = jsonar[0][i];

                                        /*zapolnyaem summ*/

                                        // var result = globalneirochecksum(numb);

                                        // if(!result){
                                        //   return false;
                                        // }

                                        arnumbercount = jsonar[1];

                                        /*zapolnyaem summ*/

                                        //console.log(numb);
                                        var target = $('[x = ' + numb + ']');



                                        getimage5(target,sum);
                                    }
                                }


                                for(var i = 0;i < jsonar[2].length;i++){

                                    if(jsonar[3][i] != "0"){

                                        var sum = jsonar[3][i];

                                        var numb = jsonar[2][i];

                                        // var result = globalneirochecksum(numb);
                                        // if(!result){
                                        //   return false;
                                        // }

                                        /*zapolnyaem summ*/

                                        arnumbercombinationcount = jsonar[3];

                                        /*zapolnyaem summ*/

                                        //console.log(numb);
                                        var target = $('[x = ' + numb + ']');



                                        getimage5(target,sum);
                                    }
                                }



                                for(var i = 0;i < jsonar[4].length;i++){

                                    if(jsonar[5][i] != "0"){

                                        var sum = jsonar[5][i];

                                        var numb = jsonar[4][i];

                                        // var result = globalneirochecksum(numb);
                                        // if(!result){
                                        //   return false;
                                        // }

                                        /*zapolnyaem summ*/

                                        arnumbersearchcombinationcount = jsonar[5];

                                        /*zapolnyaem summ*/

                                        //console.log(numb);
                                        var target = $('[x = ' + numb + ']');

                                        getimage5(target,sum);
                                    }
                                }


                                for(var j = 0;j < jsonar[6].length;j++){

                                    //console.log(jsonar[6]);

                                    ///return false;
                                    //console.log(jsonar[6][j]);
                                    if(jsonar[6][j][0] != "2000"){

                                      if(jsonar[6][j][0] != "-"){



                                        var target = $('[x = ' + jsonar[6][j][0] + ']');
                                        if(j == 0){
                                          noar[0] = jsonar[6][j][0];
                                          getimage6(target,1);
                                        }

                                        if(j == 1){
                                          notwoar[0] = jsonar[6][j][0];
                                          getimage6(target,2);
                                        }

                                        if(j == 2){
                                          nothreear[0] = jsonar[6][j][0];
                                          getimage6(target,3);
                                        }

                                        if(j == 3){
                                          nofar[0] = jsonar[6][j][0];
                                          getimage6(target,4);
                                        }



                                       // }
                                       }

                                    }

                                }




                              }


checksumx();


                                      }

                           function errorfuncv2(){
                              console.log("oshibka repeat");
                           }





                      };


                function getresult(){
                      //x1
                      var g_r = routegetresult;

                        var id = localStorage.getItem("userid");
                        var or = {
                            "id":id,
                            };

                         $.ajax({
                                    "type":"GET",
                                    "url":g_r,

                                    "dataType": "jsonp",
                                    "crossDomain": true,
                                    "data":or,

                                    "success":kx15,
                                    "error":errorfunc15

                              });

                          function kx15(result15){

                              //console.log(result15);

                               var obj = result15;//jQuery.parseJSON(result15);

                              // console.log(obj[0]);

                                if(result15[0] != "2000"){
                                    var obj = result15;//jQuery.parseJSON(result15);

                                    if(checkkoef == 1){
                                       if(obj[1] == "1"){


                                             alertmessage('You won!..');

                                             // var wins = $("#youwin")[0];


                                              var arkoef = jQuery.parseJSON(obj[0]);



                                              var static = $(".statictics");

                                              function setstatic(a,b,c,d,e){

                                                  var a_1 = "";

                                                  switch (a) {
                                                        case "corner":
                                                          a_1 = "угол";
                                                          break;
                                                        case "duzhina":
                                                          a_1 = "дюжина";
                                                          break;
                                                        case "kolonki":
                                                          a_1 = "колонка";
                                                          break;

                                                          case "mal_bol":
                                                          a_1 = "малые_большие";
                                                          break;

                                                          case "stright_up":
                                                          a_1 = "прямое попадание";
                                                          break;


                                                          case "even_odd":
                                                          a_1 = "четное_нечетное";
                                                          break;

                                                          case "black_red":
                                                          a_1 = "красные_черные";
                                                          break;

                                                          case "no":
                                                          a_1 = "1 сосед";
                                                          break;

                                                          case "notwo":
                                                          a_1 = "2 соседа";
                                                          break;

                                                          case "nothree":
                                                          a_1 = "3 соседа";
                                                          break;

                                                          case "nofour":
                                                          a_1 = "4 соседа";
                                                          break;

                                                          case "split":
                                                          a_1 = "сплит";
                                                          break;

                                                          case "six_number":
                                                          a_1 = "6 номеров";
                                                          break;


                                                          case "z_s":
                                                          a_1 = "zero_speal";
                                                          break;

                                                          case "orp":
                                                          a_1 = "orphans";
                                                          break;

                                                          case "s_s":
                                                          a_1 = "малая серия";
                                                          break;

                                                          case "b_s":
                                                          a_1 = "большая серия";
                                                          break;


                                                      }

                                                      var hhh = new Date(e * 1000);

                                                      var options = {
                                                            //era: 'long',
                                                            //era: 'long',
                                                            year: 'numeric',
                                                            month: 'numeric',
                                                            day: 'numeric',
                                                            //weekday: 'long',
                                                            //timezone: 'UTC',
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            second: 'numeric'
                                                          };

                                                      var strdate = hhh.toLocaleString("ru", options);

                                                  var gmove = '<ul style="background:none;" style="margin-bottom: 25px;"><li class="item-content">комбинация: ' + a_1 +
                                                  '</li> <li class="item-content">поставлено: ' + b + '</li> <li class="item-content">выиграно: ' +
                                                   c + '</li> <li class="item-content">№ шара: ' + d +
                                                  '</li><li class="item-content">дата: ' + strdate + '</li> </ul>';

                                                  static.append(gmove);

                                              }

                                               for(var k = 0;k < arkoef[0][0].length;k++){
                                                    if(arkoef[0][2][k] == "1"){

                                                      //console.log(arkoef[0][4][k] + " | " + arkoef[0][1][k] + " | " + arkoef[0][2][k] +  " | " + arkoef[0][3][k] +  " | " + arkoef[5] + "<br>");
                                                      setstatic(arkoef[0][4][k],arkoef[0][1][k],arkoef[0][3][k],arkoef[5],obj[3]);
                                                    }
                                               }

                                               for(var j = 0;j < arkoef[1][0].length;j++){
                                                    if(arkoef[1][2][j] == "1"){

                                                      //console.log(arkoef[1][4][j] + " | " + arkoef[1][1][j] + " | " + arkoef[1][2][j] +  " | " + arkoef[1][3][j] +  " | " + arkoef[5] + "<br>");
                                                      setstatic(arkoef[1][4][j],arkoef[1][1][j],arkoef[1][3][j],arkoef[5],obj[3]);
                                                    }
                                               }

                                               for(var h = 0;h < arkoef[2][0].length;h++){
                                                    if(arkoef[2][2][h] == "1"){

                                                      //console.log(arkoef[2][4][h] + " | " + arkoef[2][1][h] + " | " + arkoef[2][2][h] +  " | " + arkoef[2][3][h] +  " | " + arkoef[5] + "<br>");
                                                      setstatic(arkoef[2][4][h],arkoef[2][1][h],arkoef[2][3][h],arkoef[5],obj[3]);
                                                    }

                                               }


                                             // console.log(arkoef[0][0]);


                                       }else if(obj[1] == "0"){




                                       }

                                       checkkoef = 0;
                                       cleanclient();
                                    }
                                        checkkoef = 0;
                                       cleanclient();

                                }


                             }

                             function errorfunc15(){
                                console.log("oshibka zaprosa v gr..");
                             }


                 }

//kkk
               function getbalans(){

                        var urlaa = routegbal;

                        userid = localStorage.getItem("userid");


                                      var obj = {
                                          "hid":"d",
                                          "userid":userid,
                                          };



                                       $.ajax({
                                                  "type":"GET",
                                                  "url":urlaa,

                                                  "dataType": "jsonp",
                                                  "crossDomain": true,
                                                  "data":obj,

                                                  "success":kx207,
                                                  "error":errorfunc207

                                            });

                                        function kx207(result){


                                              //console.log(result);

                                              if((usersum != result[0]) || (cashready != result[1])){

                                                cashready = result[1];

                                                usersum = Number(result[0]);

                                                var sfx = Number(result[0]) - globalsumx;

                                                //console.log(sfx);

                                                if(result[0] < globalsumx){

                                                    cleanclient();

                                                }


                                                if(result[1] == 0){

                                                    stateready = 0;
//sfx
                                                    var t = '<span>BALANCE ' + sfx + ' -AGP </span><img width="18" style="position:absolute;left:28%;top:4px;"  style="margin-top:5px;" src="phaser/play.png" alt="">';

                                                }else{

                                                    stateready = 1;

                                                    var t = '<span>BALANCE ' + sfx + ' -AGP </span><img width="18" style="position:absolute;left:28%;top:4px;"  style="margin-top:5px;" src="phaser/ready.png" alt="">';

                                                }



                                                //console.log("xxxxxxxx");

                                                $(".balans").html(t);
                                              }



                                              if(result[2] != 0){
                                                  if(result[2] != phoneid){

                                                      exituser();

                                                  }
                                              }



                                                if((result[3] != "") && (result[3] != undefined)){

                                                    myApp.alert(result[3],'ALMAGAMES');


                                                    var vuserid = localStorage.getItem("userid");


                                                    var sendusid = {

                                                        "userid":vuserid,

                                                    }


                                                    $.ajax({
                                                              "type":"GET",
                                                              "url": cancelmessage,
                                                              dataType: "jsonp",
                                                              crossDomain: true,
                                                              "data": sendusid,

                                                              "success":kxr,
                                                              "error":errorfr

                                                              });

                                                      function kxr(result){

                                                             console.log(result);

                                                      }

                                                      function errorfr(){

                                                          console.log("error fixupdate");
                                                      }

                                                }




                                              if((result[4] != 0) && (result[3] != undefined)){

                                                  blockclientst = 1;

                                              }


                                             if(fixloading == 0){

                                                        alertmessagetwohide("LOADING...");
                                                        fixloading = 1;

                                                      }
                                             }

                                           function errorfunc207(){
                                              console.log("oshibka zaprosa v bs");
                                           }


                    }



              var checkx = 0;

                function updatedealerstatus(dealer_status){

                      var urll = routegamestatusdealer;

                              if(dealer_status == 5){
                                gamestatus2 = 4;   //ostanovka raboti dilera
                                checkx = 0;
                              }

                              if(dealer_status == 5){
                                          //prodolzhenie raboti dilera
                                gamestatus2 = 1;
                                if(checkx == 0){

                                  checkx = 1;
                                }

                              }

                   }


                function gamestatus(game_status){
//aa
                    //console.log(game_status);
                    var urla = routegamestatusclient;


                          if(game_status == 3){

                             blockclient();
                             timerates = 1;


                          }else if(game_status == 1){

                              ublockclient();
                              timerates = 0;


                          }else if(game_status == 0){

                              getball();


                          }

                }



                function activcamera(){
                        // $(".changeVideoClass").css("visibility","visible");

                        $(".changeVideoClass").addClass("mainvideo-container");
                        $(".mainvideo-container").css("visibility","visible");
                        $(".changeVideoClass").removeClass("small_mainvideo-container");

                        $(".changeVideoLoaderClass").addClass("videoloader");
                        $(".changeVideoLoaderClass").removeClass("small_videoloader");

                        $(".changeVideoContainer").addClass("video-container");
                        $(".changeVideoContainer").removeClass("small_video-container");

                        $(".changeVideoContainerSecond").addClass("video-container_second");
                        $(".changeVideoContainerSecond").removeClass("small_video-container_second");


                        $(".changeDownMatrix").addClass("downMatrix");
                        $(".changeDownMatrix").removeClass("downMatrixSmall");

                        $(".splashclick").css("display","block");
                        //$(".roulettenumber").css("display","block");


                        // $("#frame3").css("visibility","hidden");
                        // // $("#frame2").css("visibility","hidden");
                        // $("#frame2").css("visibility","visible");
                        // $("#frame1").css("visibility","visible");

                        $(".roul_video").attr("src","fishki/0016.png");
                        fixb = 1;
                  }

                  function unactivecamera(){

                        // $(".mainvideo-container").css("visibility","hidden");
                        $(".changeVideoClass").addClass("small_mainvideo-container");
                        $(".changeVideoClass").removeClass("mainvideo-container");

                        $(".changeVideoLoaderClass").addClass("small_videoloader");
                        $(".changeVideoLoaderClass").removeClass("videoloader");

                        $(".changeVideoContainer").addClass("small_video-container");
                        $(".changeVideoContainer").removeClass("video-container");

                        $(".changeVideoContainerSecond").addClass("small_video-container_second");
                        $(".changeVideoContainerSecond").removeClass("video-container_second");

                        $(".changeDownMatrix").addClass("downMatrixSmall");
                        $(".changeDownMatrix").removeClass("downMatrix");

                        $(".splashclick").css("display","none");
                        $(".splashline").css("display","none");
                        $(".splashlinematrix").css("display","none");
                        $(".roulettenumber").css("display","none");




                        $(".roul_video").attr("src","fishki/0001.png");
                        fixb = 0;
                  }



                  function enablechangecamera(){

                        enablecamera = 1;
                      //  changecamera();

                  }

                  function disabledchangecamera(){

                        enablecamera = 0;
                        timercamera = 0;

                  }





function showroulettenumber(centernumber){

                function getlength(number){

                    var newstring = String(number);

                    return newstring.length;

                  }


                  var returnnumbers = getnumbers(centernumber);


                var canvasnumber = document.getElementById("canvasnumber");
                var numbshow = canvasnumber.getContext("2d");

                numbshow.clearRect(0, 0, canvasnumber.width, canvasnumber.height);


                  var redopacity = "rgba(255, 0, 0, 0.5)";
                  var blackopacity = "rgba(13, 13, 13, 0.5)";
                  var insertcolor = "";

                  if(returnnumbers[0] == "red"){
                      insertcolor = blackopacity;
                  }else if(returnnumbers[0] == "black"){
                      insertcolor = redopacity;
                  }else{
                      insertcolor = "";
                  }



                  var red = "red";
                  var black = "black";

                  var centernumberg = centernumber;
                  var countcenter = getlength(centernumberg);


                  var leftnumber = returnnumbers[1];
                  var countleft = getlength(leftnumber);


                  var rightnumber = returnnumbers[2];

                  var countright = getlength(rightnumber);




                //yadro
                  numbshow.fillStyle = returnnumbers[0];
                  numbshow.beginPath();
                  numbshow.moveTo(50,50);
                  numbshow.lineTo(110,50);
                  numbshow.lineTo(103,100);
                  numbshow.lineTo(57,100);
                  numbshow.fill();

                  //ramka

                  numbshow.strokeStyle = "yellow";
                  numbshow.lineWidth = 3;
                  numbshow.moveTo(50,50);
                  numbshow.lineTo(110,50);
                  numbshow.lineTo(103,100);
                  numbshow.lineTo(57,100);
                  numbshow.closePath();
                  numbshow.stroke();

                  //sleva yadro

                  numbshow.beginPath();
                  //numbshow.globalAlpha = 0.4
                  //numbshow.fillStyle = "red";
                  var onecolor = "";
                  var twocolor = "";

                  if(insertcolor != ""){
                        onecolor = insertcolor;
                        twocolor = insertcolor;
                  }else{
                        onecolor = blackopacity;
                        twocolor = redopacity;
                  }

                  numbshow.fillStyle = onecolor;
                  numbshow.moveTo(50,53);
                  numbshow.lineTo(12,60);
                  numbshow.lineTo(24,104);
                  numbshow.lineTo(57,98);
                  numbshow.fill();
                  //numbshow.strokeStyle = "yellow";
                  numbshow.strokeStyle = 'rgba(255, 255, 0, 0.5)';
                  numbshow.lineWidth = 2;
                  numbshow.moveTo(50,53);
                  numbshow.lineTo(12,60);
                  numbshow.lineTo(24,104);
                  numbshow.lineTo(57,98);
                  numbshow.closePath();
                  numbshow.stroke();

                  //sprava yadro

                  numbshow.beginPath();
                  numbshow.fillStyle = twocolor;
                  numbshow.moveTo(110,53);
                  numbshow.lineTo(148,60);
                  numbshow.lineTo(136,104);
                  numbshow.lineTo(103,98);
                  numbshow.fill();

                  numbshow.strokeStyle = 'rgba(255, 255, 0, 0.5)';
                  numbshow.lineWidth = 2;
                  numbshow.moveTo(110,53);
                  numbshow.lineTo(148,60);
                  numbshow.lineTo(136,104);
                  numbshow.lineTo(103,98);
                  numbshow.closePath();
                  numbshow.stroke();

                  numbshow.fillStyle = "#FFFFFF";
                  numbshow.font = "28px Artsans ArtsansC Regular";

                  if(countcenter == 1){
                      numbshow.fillText(centernumberg, 71, 84); //1 number
                  }else if(countcenter == 2){
                      numbshow.fillText(centernumberg, 62, 84);      //2number
                  }

                  //----------------------------


                  numbshow.font = "24px Artsans ArtsansC Regular";
                  numbshow.fillStyle = "rgba(255,255,255,0.8)";

                  //2nomer

                  if(countleft == 1){
                      numbshow.translate(31,87);    //1 number
                  }else{
                      numbshow.translate(24,89);    //2 number
                  }


                  numbshow.rotate(-0.06*Math.PI);   //2 number
                  numbshow.fillText(leftnumber, 0, 0);


                  //----------------------------




                  if(countright == 1){
                      numbshow.translate(85,12);    //1 nomer

                  }else if(countright == 2){
                      //numbshow.translate(83,11);    //2 nomera
                      numbshow.translate(77,12);    //2 nomera
                  }

                  //3nomer


                  numbshow.rotate(0.12*Math.PI);
                  numbshow.fillText(rightnumber, 0, 0);





//numbercanvas

        }





        function showball(number){





                        var insertcolorsprite = '<div class="positionr"><canvas width="80" height="80" id="showroulette"></canvas></div>';

                        var divposition = $('[x = "' + number + '"]').append(insertcolorsprite);

                        roulettenumberdraw();


                        //vivod shara

                        $(".roulettenumber").empty();
                        $(".roulettenumber").append('<canvas id="canvasnumber" width="150" height="105"></canvas>');

                        showroulettenumber(number);

                        if(number == "0"){
                            $(".positionr").css("margin-top","-122px");
                        }else{
                            $(".positionr").css("margin-top","-65px");
                        }


                            $(".roulettenumber").css("display","block");




                        setTimeout(function(){

                            $(".roulettenumber").css("display","none");
                            $('[x = "' + number + '"]').children('div').css("-webkit-box-shadow","0 0 0px #ffff00");

                            divposition.children("div.positionr").remove();
                        },5000);


                        fixshowball = 1;


                        //vivod shara
        }


  function roulettenumberdraw() {
                  var xxx = document.getElementById('showroulette').getContext('2d');

                    //podschet kolichestva nazhatii i stavok



                    ///-------------
                    xxx.lineWidth = 2;

                    xxx.beginPath();

                    xxx.strokeStyle = 'rgba(247,245,0,0.4)';

                    xxx.arc(40,40,38,0,Math.PI*2,true); // Внешняя окружность

                    xxx.stroke();
                    ///-------------

                    xxx.beginPath();

                    xxx.strokeStyle = 'rgba(247,245,0,0.6)';

                    xxx.arc(40,40,36,0,Math.PI*2,true); // Внешняя окружность

                    xxx.stroke();
                    ///-------------


                    //sentr line
                    xxx.beginPath();
                    xxx.strokeStyle = 'rgba(247,245,0,0.8)';
                    xxx.arc(40,40,34,0,Math.PI*2,true); // Внешняя окружность
                    xxx.stroke();
                  ///-------------
                    xxx.beginPath();
                    xxx.strokeStyle = 'rgba(247,245,0,0.6)';
                    xxx.arc(40,40,32,0,Math.PI*2,true); // Внешняя окружность
                    xxx.stroke();
                  ///-------------
                    xxx.beginPath();
                    xxx.strokeStyle = 'rgba(247,245,0,0.3)';
                    xxx.arc(40,40,30,0,Math.PI*2,true); // Внешняя окружность
                    xxx.stroke();
                  ///-------------

                    //----------------

                     xxx.beginPath();
                     xxx.strokeStyle = 'rgba(247,245,0,0.3)';
                     xxx.arc(40,40,29,0,Math.PI*2,true); // Внутренняя окружность
                     xxx.stroke();

                     xxx.beginPath();
                     xxx.strokeStyle = 'rgba(247,245,0,0.6)';
                     xxx.arc(40,40,27,0,Math.PI*2,true); // Внутренняя окружность
                     xxx.stroke();

                      ///sentr
                     xxx.beginPath();
                     xxx.strokeStyle = 'rgba(247,245,0,0.8)';
                     xxx.arc(40,40,25,0,Math.PI*2,true); // Внутренняя окружность
                     xxx.stroke();


                     xxx.beginPath();
                     xxx.strokeStyle = 'rgba(247,245,0,0.6)';
                     xxx.arc(40,40,23,0,Math.PI*2,true); // Внутренняя окружность
                     xxx.stroke();

                     xxx.beginPath();
                     xxx.strokeStyle = 'rgba(247,245,0,0.4)';
                     xxx.arc(40,40,21,0,Math.PI*2,true); // Внутренняя окружность
                     xxx.stroke();




                }



                function changecamera(){

                    var changeCameraObj = {
                        updateTime: function () {
                            var myRef = this;
                            var val = setTimeout(function () {

                                  if(fixconnection == 0){

                                      if(enablecamera == 1){


                                              // if(timercamera == 3){
                                              //   $(".roul_video").attr("src","fishki/0016.png");
                                              //     $(".mainvideo-container").css("visibility","visible");
                                              //     $("#frame1").css("visibility","hidden");
                                              //     $("#frame2").css("visibility","hidden");
                                              //     $("#frame3").css("visibility","visible");
                                              // }else if(timercamera == 6){
                                              //   $(".roul_video").attr("src","fishki/0016.png");
                                              //   $(".mainvideo-container").css("visibility","visible");
                                              //     $("#frame3").css("visibility","hidden");
                                              //     $("#frame2").css("visibility","visible");
                                              //     $("#frame1").css("visibility","hidden");
                                              // }else if(timercamera == 9){
                                              //   $(".roul_video").attr("src","fishki/0016.png");
                                              //   $(".mainvideo-container").css("visibility","visible");
                                              //     $("#frame1").css("visibility","visible");
                                              //     $("#frame2").css("visibility","hidden");
                                              //     $("#frame3").css("visibility","hidden");
                                              // }else if(timercamera == 12){
                                              //   $(".roul_video").attr("src","fishki/0016.png");
                                              //   $(".mainvideo-container").css("visibility","visible");
                                              //     $("#frame3").css("visibility","hidden");
                                              //     $("#frame2").css("visibility","hidden");
                                              //     $("#frame1").css("visibility","visible");
                                              // }else if(timercamera == 15){
                                              //   $(".roul_video").attr("src","fishki/0016.png");
                                              //   $(".mainvideo-container").css("visibility","visible");
                                              //     $("#frame3").css("visibility","hidden");
                                              //     $("#frame2").css("visibility","hidden");
                                              //     $("#frame1").css("visibility","visible");
                                              // }else if(timercamera == 30){
                                              //     timercamera = 0;
                                              //     enablecamera = 0;
                                              // }



                                              if(timercamera == 3){
                                                $(".roul_video").attr("src","fishki/0016.png");
                                                  $(".mainvideo-container").css("visibility","visible");
                                                  $("#frame1").css("visibility","hidden");
                                                  $("#frame2").css("visibility","visible");

                                              }else if(timercamera == 6){
                                                $(".roul_video").attr("src","fishki/0016.png");
                                                $(".mainvideo-container").css("visibility","visible");

                                                  $("#frame2").css("visibility","hidden");
                                                  $("#frame1").css("visibility","visible");
                                              }else if(timercamera == 9){
                                                $(".roul_video").attr("src","fishki/0016.png");
                                                $(".mainvideo-container").css("visibility","visible");
                                                  $("#frame1").css("visibility","hidden");
                                                  $("#frame2").css("visibility","visible");

                                              }else if(timercamera == 12){
                                                $(".roul_video").attr("src","fishki/0016.png");
                                                $(".mainvideo-container").css("visibility","visible");

                                                  $("#frame2").css("visibility","hidden");
                                                  $("#frame1").css("visibility","visible");
                                              }else if(timercamera == 15){
                                                $(".roul_video").attr("src","fishki/0016.png");
                                                $(".mainvideo-container").css("visibility","visible");

                                                  $("#frame2").css("visibility","visible");
                                                  $("#frame1").css("visibility","hidden");
                                              }else if(timercamera == 30){
                                                  timercamera = 0;
                                                  enablecamera = 0;
                                              }


                                                          timercamera += 1;


                                      }

                                    }


                                myRef.updateTime();
                            }, 1000);
                        }
                    };

                    changeCameraObj.updateTime();



                };






//functions



myApp.onPageInit('table', function (page) {











      var ff = '<iframe id="frame1" class="frame1" scrolling="no" src="https://almagames.mypsx.net:8080/c1" frameborder="0" allowfullscreen></iframe>';
      var ffTwo = '<iframe id="frame2" class="frame2" scrolling="no" src="https://almagames.mypsx.net:8080/c2" frameborder="0" allowfullscreen></iframe>';
      // var ff = '<iframe id="frame1" class="frame1" scrolling="no" src="https://almagames.mypsx.net:8080/c1" frameborder="0" allowfullscreen></iframe><iframe id="frame2" class="frame2" scrolling="no" src="https://almagames.mypsx.net:8080/c2" frameborder="0" allowfullscreen></iframe>';
      //var ff = '<iframe id="frame1" class="frame1" scrolling="no" src="https://almagames.mypsx.net:8080/c1" frameborder="0" allowfullscreen></iframe><iframe id="frame2" class="frame2" scrolling="no" src="https://almagames.mypsx.net:8080/c2" frameborder="0" allowfullscreen></iframe><iframe id="frame3" class="frame3" scrolling="no" src="https://almagames.mypsx.net:8080/c3" frameborder="0" allowfullscreen></iframe>';


      $(".refresh").click(function(){

          $(".video-container").empty();
          $(".video-container").html(ffTwo);
          $(".video-container_second").empty();
          $(".video-container_second").html(ff);

      });


      userid = localStorage.getItem("userid");
      //console.log("table");


      if(userid == "0"){


          mainView.router.loadPage("main.html");
          return false;
      }





  baseurl = localStorage.getItem("baseurl");  //route ball

  routeball = baseurl + "rouletteball";

  routegbal = baseurl + "getbalans";

  routegamestatusclient = baseurl + "gamestatusclient";

  routegamestatusdealer = baseurl + "gamestatusdealer";

  routeburl = baseurl + "senddata";

  routegetresult = baseurl + "getresult";

  userid = localStorage.getItem("userid");

  repeaturl = baseurl + "repeatnumber";




 //canvas function


     var canvas = document.getElementById("canv");
                var ctx = canvas.getContext("2d");

                ctx.fillStyle = "red";
                // Filled triangle
                  ctx.beginPath();
                  ctx.moveTo(15,18);
                  ctx.lineTo(52,5);
                  ctx.lineTo(90,18);
                  ctx.lineTo(52,30);
                  ctx.fill();

                  ctx.strokeStyle = "white";
                  ctx.beginPath();
                  ctx.moveTo(15,18);
                  ctx.lineTo(52,5);
                  ctx.lineTo(90,18);
                  ctx.lineTo(52,30);
                  ctx.closePath();
                  ctx.stroke();



                  var canvas2 = document.getElementById("canv2");
                var ctx2 = canvas2.getContext("2d");

                ctx2.fillStyle = "black";
                // Filled triangle
                  ctx2.beginPath();
                  ctx2.moveTo(15,18);
                  ctx2.lineTo(52,5);
                  ctx2.lineTo(90,18);
                  ctx2.lineTo(52,30);
                  ctx2.fill();

                  ctx2.strokeStyle = "white";
                  ctx2.beginPath();
                  ctx2.moveTo(15,18);
                  ctx2.lineTo(52,5);
                  ctx2.lineTo(90,18);
                  ctx2.lineTo(52,30);
                  ctx2.closePath();
                  ctx2.stroke();


                      var canvas3 = document.getElementById("canvzero");
                 var ctx3 = canvas3.getContext("2d");
                 //var ctx3 = canvas3.getContext("2d");

                  ctx3.fillStyle = "green";
                // Filled triangle
                  ctx3.beginPath();
                  ctx3.moveTo(1,79);
                  ctx3.lineTo(25,1);
                  ctx3.lineTo(49,1);
                  ctx3.lineTo(49,157);
                  ctx3.lineTo(49,157);
                  ctx3.lineTo(25,157);
                  ctx3.fill();

                  ctx3.strokeStyle = "white";
                  ctx3.lineWidth = 2;
                  ctx3.beginPath();
                  ctx3.moveTo(0,79);
                  ctx3.lineTo(25,0);
                  ctx3.lineTo(50,0);
                  ctx3.lineTo(50,158);
                  ctx3.lineTo(50,158);
                  ctx3.lineTo(25,158);
                  ctx3.closePath();
                  ctx3.stroke();

                  ctx3.fillStyle = "#FFFFFF";
                  ctx3.font = "33px Artsans ArtsansC Regular";
                  ctx3.fillText("0", 15, 92);


 //canvas function


 //view alert message function

var vvvv = document.createElement("CANVAS");
var imgg = new Image();

    $(".y").click(function(){

            var checkx = $(this).attr("x");

            var result = globalneirochecksum(checkx);

            if(!result){
                return false;
            }



            if(timerates == 1){

                alertmessage('No more bets');
                return false;
            }


            var z = $(this);

            var url = $("#urll").val();

            var p_indecator_count = z.children(".i");

            var prevdivnumber = $(this).children("div:not(.i)");

            var colorrand = $(this).children("div:not(.i)").css("color");

            var x = $(this).attr("x");

            countArray.push(x);

            function getimage(){

              //new manipulation

                                   prevdivnumber.css("display","none");  //skritie perednego div s nomerom
                                   //generasiya kartinki

                                   var vvv = vvvv.cloneNode(false);



                                    vvv.setAttribute("width", "50");
                                    vvv.setAttribute("height", "50");

                                     var xxx = vvv.getContext('2d');


                                    xxx.beginPath();

                                    var img = imgg.cloneNode(false);

                                    var imcolor = "#00a0e3";

                                    if(nominalnumber == "1"){
                                        imcolor = "#00a0e3";
                                        img.src = 'fishki/fishka1.png';

                                    }else if(nominalnumber == "5"){
                                        imcolor = "#e31e24";
                                        img.src = 'fishki/fishka5.png';

                                    }else if(nominalnumber == "25"){
                                        imcolor = "#10653f";
                                        img.src = 'fishki/fishka25.png';

                                    }else if(nominalnumber == "50"){
                                        imcolor = "#0079EF";
                                        //img.src = 'fishki/fishka25.png';
                                    }else if(nominalnumber == "100"){
                                        imcolor = "#1c1b17";
                                        img.src = 'fishki/fishka100.png';

                                    }else if(nominalnumber == "500"){
                                        imcolor = "#ea5f8b";
                                        img.src = 'fishki/fishka500.png';

                                    }else if(nominalnumber == "1000"){
                                        imcolor = "#9d3a31";
                                         img.src = 'fishki/fishka1000.png';

                                    }else if(nominalnumber == "10000"){
                                        imcolor = "#FDD700";
                                    }


                                    p_indecator_count.attr("colorfx",imcolor);

                                    //podschet kolichestva nazhatii i stavok

                                   var count_img = p_indecator_count.attr("count");

                                   count_img = (+count_img + +nominalnumber);

                                   p_indecator_count.attr("count",count_img);


                                    img.onload = function(){

                                    xxx.drawImage(img,6,6,37,37);

                                    xxx.beginPath();

                                    xxx.fillStyle = "white";

                                    xxx.arc(24.5,24.5,12,0,Math.PI*2,true); // Внутренняя окружность

                                    xxx.fill();

                                    xxx.beginPath();
                                    xxx.fillStyle = "black";
                                    xxx.font = "bold 12px Helvetica, sans-serif";

                                    /*sentrovka texta*/
                                    var positiontext = 20;

                                    if((count_img > 9) && (count_img <= 99)){
                                        positiontext = 17;
                                    }else if((count_img > 99) && (count_img <= 999)){
                                        positiontext = 12;
                                    }else if((count_img > 999) && (count_img <= 9999)){
                                        positiontext = 8;
                                    }else if((count_img > 9999) && (count_img <= 99999)){
                                        positiontext = 4;
                                    }else if((count_img > 99999) && (count_img <= 10000000)){
                                        positiontext = 1;
                                    }
                                    xxx.fillText(count_img, positiontext, 29);
                                    /*sentrovka texta*/


                                    p_indecator_count.empty();      //ochistka diva

                                    p_indecator_count.append(vvv);  //vstabka kartinki

                                    p_indecator_count.css("display","block");       //pokaz kartinki

                                  }

                                    //new manipulation

            }





            function getcount(){

                var gcount = arnumbercombinationcount[i];

                  gcount = (+gcount + +nominalnumber);

                  arnumbercombinationcount[i] = gcount;

            }

            function getcount2(){

                var gcount = arnumbersearchcombinationcount[g];

                  gcount = (+gcount + +nominalnumber);

                  arnumbersearchcombinationcount[g] = gcount;

            }

            function getcount3(number){

              var h = 0;

              if(number == 1){
                  h = nominalnumber * 3;
              }else if(number == 2){
                  h = nominalnumber * 5;
              }else if(number == 3){
                  h = nominalnumber * 7;
              }else if(number == 4){
                  h = nominalnumber * 9;
              }

                  var gcount = arnumbercombinationcount[m];

                  gcount = (+gcount + + h);

                  arnumbercombinationcount[m] = gcount;

            }


            if(nominalnumber == 0){

                alertmessage("select number..");

                return false;
            }

              /*chisla s sosedyami*/
            for(var m = 0;m < arnumbercombination.length;m++){

                      if(x == arnumbercombination[m]){


            switch(x){

                            case 'no':
                                  //

                                  var checktable = checktabletwo();

                                  if(checktable){

                                      fixsosed = 1;
                                      fixno = 1;

                                        alertmessage("select number..");

                                        $(".n188").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                                        setTimeout(function(){

                                          $(".n188").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                                        },3000);
//currentjob


                                  }else{
                                    sosed = 1;
                                  }


                              break;


                              case 'ntwo':

                                  var checktable = checktabletwo();

                                  if(checktable){

                                      fixsosed = 1;
                                      fixntwo = 1;

                                        alertmessage("select number..");

                                        $(".n189").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                                        setTimeout(function(){

                                          $(".n189").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                                        },3000);

                                  }else{
                                    sosed = 2;
                                  }


                                break;

                              case 'nthree':

                                  var checktable = checktabletwo();

                                  if(checktable){

                                      fixsosed = 1;
                                      fixnthree = 1;

                                        alertmessage("select number..");

                                        $(".n190").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                                        setTimeout(function(){

                                          $(".n190").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                                        },3000);


                                  }else{
                                    sosed = 3;
                                  }



                              break;

                              case 'nf':

                              var checktable = checktabletwo();

                                  if(checktable){

                                      fixsosed = 1;
                                      fixnfour = 1;

                                        alertmessage("select number..");

                                        $(".n191").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                                        setTimeout(function(){

                                          $(".n191").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                                        },3000);

                                  }else{
                                    sosed = 4;
                                  }



                              break;
            }

          }}
          /*chisla s sosedyami*/

          if(fixsosed == 0){


            for(var i = 0;i < arnumber.length;i++){

              if(x == arnumber[i]){                           /*prostie chisla*/

                  var gcount = arnumbercount[i];

                  gcount = (+gcount + +nominalnumber);

                  arnumbercount[i] = gcount;


                  getimage();



              }

            }



            for(var i = 0;i < arnumbercombination.length;i++){

                      if(x == arnumbercombination[i]){              /*chisla s combinasiyami*/

                          switch(x){

                              case '1x12':


                                  getcount();
                                  getimage();

                                break;

                              case '2x12':


                                  getcount();
                                 getimage();

                                break;

                              case '3x12':


                                  getcount();
                                  getimage();

                              break;

                              case '1to18':


                                  getcount();
                                  getimage();

                              break;

                              case 'even':


                                  getcount();
                                  getimage();

                              break;

                              case 'odd':

                                  getcount();
                                  getimage();

                              break;

                              case '19to36':


                                  getcount();
                                  getimage();

                              break;

                              case 'red':


                                  getcount();
                                  getimage();

                              break;

                              case 'black':


                                  getcount();
                                  getimage();

                              break;


                              case '2k1-1':


                                  getcount();
                                  getimage();

                                break;

                              case '2k1_2':


                                  getcount();
                                  getimage();

                                break;

                              case '2k1_3':


                                  getcount();
                                  getimage();

                                break;



                              default:


                                    for(var g = 0;g < arnumbersearchcombination.length;g++){
                                        if(x == arnumbersearchcombination[g]){

                                              var revoar = arnumbersearchcombination[g].split('x');

                                                  getcount2();
                                                  getimage();

                                         }
                                     }


                            }   /*kones if*/




                      }



            }


          }   /*kones if glavnogo*/



          if(fixsosed == 1){

                      /*sosednie chisla*/
              for(var i = 0;i < arnumber.length;i++){

              if(x == arnumber[i]){     /*prostie chisla*/



                 if(fixno == 1){

                    var nnn = checkneighbours(x);

                    var oneplus = nnn.oneplus;
                    var onemin = nnn.onemin;


                    var array = [String(onemin),String(oneplus),x];


                                   for(var gh = 0;gh < array.length;gh++){


                                                  var xxx = $('[x = "' + array[gh] + '"]');


                                                  var z = xxx;

                                                  var p_indecator_count = z.children(".i");

                                                  var prevdivnumber = z.children("div:not(.i)");

                                                  var colorrand = z.children("div:not(.i)").css("color");

                                                  var x = z.attr("x");

                                                  countArray.push(x);

                                                  getimagemorefishs(p_indecator_count,prevdivnumber);

                                                  for(var kkk = 0;kkk < arnumber.length;kkk++){

                                                      if(Number(array[gh]) == arnumber[kkk]){

                                                            var gcount = arnumbercount[kkk];

                                                            gcount = (+gcount + +nominalnumber);

                                                            arnumbercount[kkk] = gcount;
                                                      }

                                                  }

                                    }

                    fixno = 0;

                 }else if(fixntwo == 1){

                    var nnn = checkneighbours(x);

                    var oneplus = nnn.oneplus;
                    var onemin = nnn.onemin;
                    var twoplus = nnn.twoplus;
                    var twomin = nnn.twomin;


                    var array = [String(onemin),String(oneplus),String(twoplus),String(twomin),x];


                                   for(var gh = 0;gh < array.length;gh++){


                                                  var xxx = $('[x = "' + array[gh] + '"]');


                                                  var z = xxx;

                                                  var p_indecator_count = z.children(".i");

                                                  var prevdivnumber = z.children("div:not(.i)");

                                                  var colorrand = z.children("div:not(.i)").css("color");

                                                  var x = z.attr("x");

                                                  countArray.push(x);

                                                  getimagemorefishs(p_indecator_count,prevdivnumber);

                                                  //console.log(gn.length);


                                                  for(var kkk = 0;kkk < arnumber.length;kkk++){

                                                      if(Number(array[gh]) == arnumber[kkk]){

                                                            var gcount = arnumbercount[kkk];

                                                            gcount = (+gcount + +nominalnumber);

                                                            arnumbercount[kkk] = gcount;
                                                      }

                                                  }


                                    }

                    fixntwo = 0;

                 }else if(fixnthree == 1){

                    var nnn = checkneighbours(x);

                    var oneplus = nnn.oneplus;
                    var onemin = nnn.onemin;
                    var twoplus = nnn.twoplus;
                    var twomin = nnn.twomin;
                    var threemin = nnn.threemin;
                    var threeplus = nnn.threeplus;


                    var array = [String(onemin),String(oneplus),String(twoplus),String(twomin),String(threeplus),Number(threemin),x];


                                   for(var gh = 0;gh < array.length;gh++){


                                                  var xxx = $('[x = "' + array[gh] + '"]');


                                                  var z = xxx;

                                                  var p_indecator_count = z.children(".i");

                                                  var prevdivnumber = z.children("div:not(.i)");

                                                  var colorrand = z.children("div:not(.i)").css("color");

                                                  var x = z.attr("x");

                                                  countArray.push(x);

                                                  getimagemorefishs(p_indecator_count,prevdivnumber);


                                                  for(var kkk = 0;kkk < arnumber.length;kkk++){

                                                      if(Number(array[gh]) == arnumber[kkk]){

                                                            var gcount = arnumbercount[kkk];

                                                            gcount = (+gcount + +nominalnumber);

                                                            arnumbercount[kkk] = gcount;
                                                      }

                                                  }

                                    }

                    fixnthree = 0;

                 }else if(fixnfour == 1){

                    var nnn = checkneighbours(x);

                    var oneplus = nnn.oneplus;
                    var onemin = nnn.onemin;
                    var twoplus = nnn.twoplus;
                    var twomin = nnn.twomin;
                    var threemin = nnn.threemin;
                    var threeplus = nnn.threeplus;
                    var fourplus = nnn.fourplus;
                    var fourmin = nnn.fourmin;

                    var array = [String(onemin),String(oneplus),String(twoplus),String(twomin),String(threeplus),Number(threemin),Number(fourplus),Number(fourmin),x];



                                   for(var gh = 0;gh < array.length;gh++){

                                                  var xxx = $('[x = "' + array[gh] + '"]');

                                                  var z = xxx;

                                                  var p_indecator_count = z.children(".i");

                                                  var prevdivnumber = z.children("div:not(.i)");

                                                  var colorrand = z.children("div:not(.i)").css("color");

                                                  var x = z.attr("x");

                                                  countArray.push(x);

                                                  getimagemorefishs(p_indecator_count,prevdivnumber);

                                                  for(var kkk = 0;kkk < arnumber.length;kkk++){

                                                      if(Number(array[gh]) == arnumber[kkk]){

                                                            var gcount = arnumbercount[kkk];

                                                            gcount = (+gcount + +nominalnumber);

                                                            arnumbercount[kkk] = gcount;
                                                      }

                                                  }

                                    }

                    fixnfour = 0;

                 }

                 fixsosed = 0;

              }


            }


                      /*sosednie chisla*/

          }


          checksum();


    });




$(".yx").click(function(){

            var xx = $(this).attr("x");

            var result = globalneirochecksum(xx);

            if(!result){
                return false;
            }

            var xxx = $('[x = "' + xx + '"]:not(.yx):not(.nott)');


            if(timerates == 1){

                alertmessage('No more bets');
                return false;
            }



            var z = xxx;

            var url = $("#urll").val();

            var p_indecator_count = z.children(".i");

            var prevdivnumber = z.children("div:not(.i)");

            var colorrand = z.children("div:not(.i)").css("color");

            var x = z.attr("x");


            countArray.push(x);


            function getimage(){

              //new manipulation

                                   prevdivnumber.css("display","none");  //skritie perednego div s nomerom
                                   //generasiya kartinki

                                    var vvv = vvvv.cloneNode(false);

                                    vvv.setAttribute("width", "50");
                                    vvv.setAttribute("height", "50");

                                     var xxx = vvv.getContext('2d');

                                     var img = imgg.cloneNode(false);



                                    xxx.beginPath();

                                    var imcolor = "#00a0e3";

                                    if(nominalnumber == "1"){
                                        imcolor = "#00a0e3";
                                        img.src = 'fishki/fishka1.png';

                                    }else if(nominalnumber == "5"){
                                        imcolor = "#e31e24";
                                        img.src = 'fishki/fishka5.png';

                                    }else if(nominalnumber == "25"){
                                        imcolor = "#10653f";
                                        img.src = 'fishki/fishka25.png';

                                    }else if(nominalnumber == "50"){
                                        imcolor = "#0079EF";
                                        //img.src = 'fishki/fishka25.png';
                                    }else if(nominalnumber == "100"){
                                        imcolor = "#1c1b17";
                                        img.src = 'fishki/fishka100.png';

                                    }else if(nominalnumber == "500"){
                                        imcolor = "#ea5f8b";
                                        img.src = 'fishki/fishka500.png';

                                    }else if(nominalnumber == "1000"){
                                        imcolor = "#9d3a31";
                                         img.src = 'fishki/fishka1000.png';

                                    }else if(nominalnumber == "10000"){
                                        imcolor = "#FDD700";
                                    }


                                    p_indecator_count.attr("colorfx",imcolor);

                                   var count_img = p_indecator_count.attr("count");



                                   count_img = (+count_img + +nominalnumber);

                                   p_indecator_count.attr("count",count_img);





                                    img.onload = function(){

                                    xxx.drawImage(img,6,6,37,37);

                                    xxx.beginPath();

                                    xxx.fillStyle = "white";

                                    xxx.arc(24.5,24.5,12,0,Math.PI*2,true); // Внутренняя окружность

                                    xxx.fill();

                                    xxx.beginPath();
                                    xxx.fillStyle = "black";
                                    xxx.font = "bold 12px Helvetica, sans-serif";

                                    /*sentrovka texta*/
                                    var positiontext = 20;

                                    if((count_img > 9) && (count_img <= 99)){
                                        positiontext = 17;
                                    }else if((count_img > 99) && (count_img <= 999)){
                                        positiontext = 12;
                                    }else if((count_img > 999) && (count_img <= 9999)){
                                        positiontext = 8;
                                    }else if((count_img > 9999) && (count_img <= 99999)){
                                        positiontext = 4;
                                    }else if((count_img > 99999) && (count_img <= 10000000)){
                                        positiontext = 1;
                                    }
                                    xxx.fillText(count_img, positiontext, 29);
                                    /*sentrovka texta*/

                                    p_indecator_count.empty();      //ochistka diva

                                    p_indecator_count.append(vvv);  //vstabka kartinki

                                    p_indecator_count.css("display","block");       //pokaz kartinki

                                  }

                                    //new manipulation

            }





            function getcount2(){


                var gcount = arnumbersearchcombinationcount[g];

                  gcount = (+gcount + +nominalnumber);

                  arnumbersearchcombinationcount[g] = gcount;

            }



            if(nominalnumber == 0){

                alertmessage("select number..");

                return false;
            }




            for(var i = 0;i < arnumbercombination.length;i++){

                      if(x == arnumbercombination[i]){              /*chisla s combinasiyami*/

                          switch(x){


                              case '2k1_3':

                                  getcount();
                                  getimage();

                                break;



                              default:


                                    for(var g = 0;g < arnumbersearchcombination.length;g++){
                                        if(x == arnumbersearchcombination[g]){

                                              var revoar = arnumbersearchcombination[g].split('x');           /*chisla s x promezhutkom*/


                                                  getcount2();
                                                  getimage();

                                         }
                                     }


                            }   /*kones if*/

                      }

            }

         /*kones if glavnogo*/

         checksum();

    });



      $(".yss").click(function(){       //ss series(big series)


                  if(timerates == 1){

                        alertmessage('No more bets');
                        return false;
                    }


                    var vb = Number(globalsumx) + (Number(nominalnumber) * 7);


                                    //console.log(v + " | " + usersum);
                                        if(vb > Number(usersum)){

                                          alertmessage('Insufficiant Balance');
                                          return false;
                                        }else if(vb > ogranichenie){
                                            alertmessagefour('Table maximum ' + ogranichenie);
                                            return false;
                                        }




                    for(var gh = 0;gh < s_s.length;gh++){

                               var xxx = $('[x = "' + s_s[gh] + '"]');


                                var z = xxx;

                                var p_indecator_count = z.children(".i");

                                var prevdivnumber = z.children("div:not(.i)");

                                var colorrand = z.children("div:not(.i)").css("color");

                                var x = z.attr("x");

                                countArray.push(x);


                                var newarrz = s_s[gh].split("x");





                                for(var jj = 0;jj < arnumbersearchcombination.length;jj++){
                                    if(s_s[gh] == arnumbersearchcombination[jj]){


                                          if(newarrz.length == 2){

                                            if((arnumbersearchcombinationcount[jj] + Number(nominalnumber)) > maxsplit){

                                        //return false;

                                            }else{

                                                getimagemorefishs(p_indecator_count,prevdivnumber);

                                                var gcount = arnumbersearchcombinationcount[jj];

                                                gcount = (+gcount + +nominalnumber);

                                                arnumbersearchcombinationcount[jj] = gcount;

                                            }

                                            }else if(newarrz.length == 3){

                                                if((arnumbersearchcombinationcount[jj] + (Number(nominalnumber) * 2)) > maxstreet){
                                                    //alertmessagefour('Street maximum ' + maxstreet);
                                                    //return false;
                                                        }else{

                                                            getimagemorefishs(p_indecator_count,prevdivnumber);

                                                            var gcount = arnumbersearchcombinationcount[jj];

                                                            gcount = (+gcount + +nominalnumber);

                                                            arnumbersearchcombinationcount[jj] = gcount;

                                                        }

                                            }else if(newarrz.length == 4){

                                                if((arnumbersearchcombinationcount[jj] + (Number(nominalnumber) * 2)) > maxcorner){
                                                    //alertmessagefour('Street maximum ' + maxstreet);
                                                    //return false;
                                                        }else{

                                                            getimagemorefishs(p_indecator_count,prevdivnumber);

                                                            var gcount = arnumbersearchcombinationcount[jj];

                                                            gcount = (+gcount + +nominalnumber);

                                                            arnumbersearchcombinationcount[jj] = gcount;

                                                        }

                                            }





                                    }
                                }

                      }

                      $(".n193").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                          setTimeout(function(){

                            $(".n193").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                          },3000);


                          checksum();


      });


      $(".yorp").click(function(){


        if(timerates == 1){

                alertmessage('No more bets');
                return false;
            }

                  var vb = Number(globalsumx) + (Number(nominalnumber) * 5);


                                    //console.log(v + " | " + usersum);
                                        if(vb > Number(usersum)){

                                          alertmessage('Insufficiant Balance');
                                          return false;
                                        }else if(vb > ogranichenie){
                                            alertmessagefour('Table maximum ' + ogranichenie);
                                            return false;
                                        }



                  for(var gh = 0;gh < orphans.length;gh++){


                                  var xxx = $('[x = "' + orphans[gh] + '"]');


                                  var z = xxx;

                                  var p_indecator_count = z.children(".i");

                                  var prevdivnumber = z.children("div:not(.i)");

                                  var colorrand = z.children("div:not(.i)").css("color");

                                  var x = z.attr("x");

                                  countArray.push(x);



                                  var gn = orphans[gh].split('x');

                            if(gn.length == 2){

                                  for(var jj = 0;jj < arnumbersearchcombination.length;jj++){
                                      if(orphans[gh] == arnumbersearchcombination[jj]){


                                            if((arnumbersearchcombinationcount[jj] + Number(nominalnumber)) > maxsplit){

                                                  //return false;

                                            }else{
                                                getimagemorefishs(p_indecator_count,prevdivnumber);

                                                var gcount = arnumbersearchcombinationcount[jj];

                                                gcount = (+gcount + +nominalnumber);

                                                arnumbersearchcombinationcount[jj] = gcount;
                                            }


                                      }
                                  }

                            }else{

                                  for(var kkk = 0;kkk < arnumber.length;kkk++){

                                      if(Number(orphans[gh]) == arnumber[kkk]){


                                            if((arnumbercount[kkk] + Number(nominalnumber)) > maxstrightup){
                                                //alertmessagefour('Straight Up maximum ' + maxstrightup);    //sdelat opoveshenie
                                                //return false;
                                            }else{

                                                getimagemorefishs(p_indecator_count,prevdivnumber);

                                                var gcount = arnumbercount[kkk];

                                                gcount = (+gcount + +nominalnumber);

                                                arnumbercount[kkk] = gcount;
                                            }



                                      }

                                  }

                            }



                    }

                    $(".n194").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                        setTimeout(function(){

                          $(".n194").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                        },3000);


                checksum();

      });


      $(".yzs").click(function(){


              if(timerates == 1){

                  alertmessage('No more bets');
                  return false;

              }

              var vb = Number(globalsumx) + (Number(nominalnumber) * 4);


                //console.log(v + " | " + usersum);
                    if(vb > Number(usersum)){

                        alertmessage('Insufficiant Balance');
                        return false;

                    }else if(vb > ogranichenie){

                        alertmessagefour('Table maximum ' + ogranichenie);
                        return false;

                    }


                  for(var gh = 0;gh < zero_spiel.length;gh++){

                                  var xxx = $('[x = "' + zero_spiel[gh] + '"]');

                                  var z = xxx;

                                  var p_indecator_count = z.children(".i");

                                  var prevdivnumber = z.children("div:not(.i)");

                                  var colorrand = z.children("div:not(.i)").css("color");

                                  var x = z.attr("x");

                                  countArray.push(x);




                                  var gn = zero_spiel[gh].split('x');

                                  if(gn.length == 2){


                                              for(var jj = 0;jj < arnumbersearchcombination.length;jj++){
                                                    if(zero_spiel[gh] == arnumbersearchcombination[jj]){


                                                          if((arnumbersearchcombinationcount[jj] + Number(nominalnumber)) > maxsplit){

                                                            }else{
                                                                getimagemorefishs(p_indecator_count,prevdivnumber);

                                                                var gcount = arnumbersearchcombinationcount[jj];

                                                                gcount = (+gcount + +nominalnumber);

                                                                arnumbersearchcombinationcount[jj] = gcount;
                                                            }



                                                    }
                                                }



                                    }else{

                                          for(var kkk = 0;kkk < arnumber.length;kkk++){

                                                if(Number(zero_spiel[gh]) == arnumber[kkk]){

                                                      if((arnumbercount[kkk] + Number(nominalnumber)) > maxstrightup){


                                                        }else{
                                                              getimagemorefishs(p_indecator_count,prevdivnumber);

                                                              var gcount = arnumbercount[kkk];

                                                              gcount = (+gcount + +nominalnumber);

                                                              arnumbercount[kkk] = gcount;

                                                        }


                                                }

                                            }

                                    }


                    }

                    $(".n195").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                        setTimeout(function(){

                          $(".n195").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                        },3000);


               checksum();

      });

      $(".ybs").click(function(){

                    if(timerates == 1){

                            alertmessage('No more bets');
                            return false;

                        }

                        var vb = Number(globalsumx) + (Number(nominalnumber) * 6);

                        if(vb > Number(usersum)){

                            alertmessage('Insufficiant Balance');
                            return false;

                        }else if(vb > ogranichenie){

                            alertmessagefour('Table maximum ' + ogranichenie);
                            return false;

                        }


                        for(var gh = 0;gh < big_series.length;gh++){

                                   var xxx = $('[x = "' + big_series[gh] + '"]');


                                    var z = xxx;

                                    var p_indecator_count = z.children(".i");

                                    var prevdivnumber = z.children("div:not(.i)");

                                    var colorrand = z.children("div:not(.i)").css("color");

                                    var x = z.attr("x");

                                    countArray.push(x);


                                    for(var jj = 0;jj < arnumbersearchcombination.length;jj++){

                                        if(big_series[gh] == arnumbersearchcombination[jj]){

                                              if((arnumbersearchcombinationcount[jj] + Number(nominalnumber)) > maxsplit){

                                              }else{

                                                  getimagemorefishs(p_indecator_count,prevdivnumber);

                                                  var gcount = arnumbersearchcombinationcount[jj];

                                                  gcount = (+gcount + +nominalnumber);

                                                  arnumbersearchcombinationcount[jj] = gcount;

                                              }

                                        }
                                    }

                          }

                          $(".n192").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                              setTimeout(function(){

                                $(".n192").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                              },3000);

                            checksum();


      });




              /*podsvetka*/

        var fishArray = new Array();

        $(".fishki").on('click', function (e) {


            var x = $(this);

            fishArray.push(x);

            var srcgl = x.attr("src");

            $(".fishgl").attr("src",srcgl);

            //

           $(".eventfish").attr("src",srcgl);
            var nom = x.attr("src");
            var numb = x.attr("v");


            nominalnumber = numb;
            fishnum = Number(numb);



            $(".fishki").each(function(index,element){

                $(this).css("border","0px");
                $(this).css("-webkit-box-shadow","0px 0px 0px 0px rgba(247, 191, 7, 0.75)");


            });

            x.css("border","2px");
            x.css("border-radius","30px");
            //x.css("-webkit-box-shadow","0px 0px 10px 4px rgba(29, 81 ,66, 0.75)");
            x.css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");
            $(".hidefont").css("display","none");



            //podsvetka

        });

            /*vibor i podsvetka fishek*/

//vz

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


            //check sound attribute

            var automaticvideo = localStorage.getItem("automaticvideo");


            if(!automaticvideo){

              localStorage.setItem("automaticvideo","true");

            }else if(automaticvideo == "true"){


                  $("#automaticvideo").prop('checked', true);
                  $("#automaticsound").prop('checked', true);
                  $("#automaticvsound").prop('checked', true);

                  //console.log("sound muted");
            }

            var videosett = 0;

            $(".settingsevent").click(function(){

                if(videosett == 0){
                  $(".gamesetting").css("display","block");
                  videosett = 1;
                }else{
                  $(".gamesetting").css("display","none");
                  videosett = 0;
                }
            });





                    $(".n251").click(function(){


                          if(timerates == 1){

                              alertmessage('No more bets');
                              return false;
                          }


                          var result = globalneirochecksum("twox");

                          if(!result){
                            return false;
                          }


                              if(globalsumx == 0){

                                  repeatnumbers();

                              }else{


                        /*udvoenie massivov*/
                        var fixarnumbermessage = 0;

                        for(var i = 0;i < arnumbercount.length;i++){

                            if(arnumbercount[i] != 0){

                                stringtupsum = arnumbercount[i];

                                if((stringtupsum * 2) > maxstrightup){
                                    //alertmessagefour('Straight Up maximum ' + maxstrightup);    //sdelat opoveshenie
                                    //return false;
                                }else{
                                    arnumbercount[i] = arnumbercount[i] * 2;
                                    fixarnumbermessage = 1;
                                }


                            }

                        }

                        if(fixarnumbermessage == 0){
                              //alertmessagefour('Straight Up maximum ' + maxstrightup);
                        }

                        var fixarnumbermessagetwo = 0;
                        var fixarnumbermessagethree = 0;

                        for(var n = 0;n < arnumbercombinationcount.length;n++){

                            if(arnumbercombinationcount[n] != 0){

                                for(var h = 0;h < arraydozandcol.length;h++){
                                      if(arnumbercombination[n] == arraydozandcol[h]){

                                          if((arnumbercombinationcount[n] * 2) > maxdozensandcolumn){
                                              //alertmessagethree('Dozen and column maximum ' + maxdozensandcolumn);
                                              //return false;

                                          }else{
                                              arnumbercombinationcount[n] = arnumbercombinationcount[n] * 2;
                                              fixarnumbermessagetwo = 1;
                                          }

                                      }
                                }

                                for(var oo = 0;oo < arrayevenoddblackred.length;oo++){
                                    if(arnumbercombination[n] == arrayevenoddblackred[oo]){

                                        if((arnumbercombinationcount[n] * 2) > maxevenaddredandblack){
                                              //alertmessagefour('even,odd,black,red,1-18,19-36 maximum ' + maxevenaddredandblack);
                                             // return false;
                                          }else{
                                              arnumbercombinationcount[n] = arnumbercombinationcount[n] * 2;
                                              fixarnumbermessagethree = 1;
                                          }

                                    }
                                }

                                //

                            }

                        }


                        if(fixarnumbermessagetwo == 0){
                            //alertmessagethree('Dozen and column maximum ' + maxdozensandcolumn);
                        }

                        if(fixarnumbermessagethree == 0){
                            //alertmessagefour('even,odd,black,red,1-18,19-36 maximum ' + maxevenaddredandblack);
                        }



                        var splitfix = 0;
                        var streetfix = 0;
                        var cornerfix = 0;
                        var sixlinefix = 0;


                        for(var nn = 0;nn < arnumbersearchcombinationcount.length;nn++){

                            if(arnumbersearchcombinationcount[nn] != 0){



                                          var newarrz = arnumbersearchcombination[nn].split("x");

                                          if(newarrz.length == 2){
                                              //console.log("split");
                                              //console.log(arnumbersearchcombinationcount[nn]);
                                              if((arnumbersearchcombinationcount[nn] * 2) > maxsplit){

                                                  //return false;

                                                      }else{
                                                          splitfix = 1;
                                                          arnumbersearchcombinationcount[nn] = arnumbersearchcombinationcount[nn] * 2;
                                                      }
                                          }else if(newarrz.length == 3){

                                              if((arnumbersearchcombinationcount[nn] * 2) > maxstreet){
                                                  //alertmessagefour('Street maximum ' + maxstreet);
                                                  //return false;
                                                      }else{
                                                        streetfix = 1;
                                                              arnumbersearchcombinationcount[nn] = arnumbersearchcombinationcount[nn] * 2;
                                                      }

                                          }else if(newarrz.length == 4){

                                              if((arnumbersearchcombinationcount[nn] * 2) > maxcorner){
                                                  //alertmessagefour('Corner maximum ' + maxcorner);
                                                  //return false;
                                                      }else{
                                                        cornerfix = 1;
                                                          arnumbersearchcombinationcount[nn] = arnumbersearchcombinationcount[nn] * 2;
                                                      }

                                          }else if(newarrz.length == 6){

                                              if((arnumbersearchcombinationcount[nn] * 2) > maxsixline){
                                                  //alertmessagefour('Sixline maximum ' + maxsixline);
                                                  //return false;
                                                      }else{
                                                        sixlinefix = 1;
                                                            arnumbersearchcombinationcount[nn] = arnumbersearchcombinationcount[nn] * 2;
                                                      }
                                          }



                                //arnumbersearchcombinationcount[nn] = arnumbersearchcombinationcount[nn] * 2;
                            }

                        }

                        if(splitfix == 0){
                            //alertmessagefour('Split maximum ' + maxsplit);
                            //console.log(1);
                        }

                        if(streetfix == 0){
                            //alertmessagefour('Street maximum ' + maxstreet);
                            //console.log(2);
                        }

                        if(cornerfix == 0){
                            //alertmessagefour('Corner maximum ' + maxcorner);
                            //console.log(3);
                        }

                        if(sixlinefix == 0){
                            //alertmessagefour('Sixline maximum ' + maxsixline);
                            //console.log(4);
                        }


                        /*udvoenie massivov*/




                        var betta = $(".y").children(".i");

                        betta.each(function(index,element){

                              var alpha = $(element);

                              var gamma = alpha.attr("count");

                              if(+gamma != 0){

                                var parenti = alpha.parent(".y");

                                //console.log(parenti.attr("x"));

                                var xx = parenti.attr("x")


                                if(xx.indexOf("x") > 0){

                                     //ogranichenie


                                      var newarrztwo = xx.split("x");

                                                if(newarrztwo.length == 2){

                                                    if((gamma * 2) > maxsplit){

                                                        //return false;

                                                            }else{
                                                                splitfix = 1;
                                                                var summ = (+gamma * 2);
                                                                alpha.attr("count",summ);
                                                            }
                                                }else if(newarrztwo.length == 3){

                                                    if((gamma * 2) > maxstreet){
                                                        //alertmessagefour('Street maximum ' + maxstreet);
                                                        //return false;
                                                            }else{
                                                              streetfix = 1;
                                                                    var summ = (+gamma * 2);
                                                                    alpha.attr("count",summ);
                                                            }

                                                }else if(newarrztwo.length == 4){

                                                    if((gamma * 2) > maxcorner){
                                                        //alertmessagefour('Corner maximum ' + maxcorner);
                                                        //return false;
                                                            }else{
                                                              cornerfix = 1;
                                                                var summ = (+gamma * 2);
                                                                alpha.attr("count",summ);
                                                            }

                                                }else if(newarrztwo.length == 6){

                                                    if((gamma * 2) > maxsixline){
                                                        //alertmessagefour('Sixline maximum ' + maxsixline);
                                                        //return false;
                                                            }else{
                                                              sixlinefix = 1;
                                                                  var summ = (+gamma * 2);
                                                                  alpha.attr("count",summ);
                                                            }
                                                }

                                //ogranichenie


                                }else{  //stright_up





                                      for(var h = 0;h < arraydozandcol.length;h++){

                                            if(xx == arraydozandcol[h]){

                                                  if((gamma * 2) > maxdozensandcolumn){
                                                      //alertmessagethree('Dozen and column maximum ' + maxdozensandcolumn);
                                                      //return false;

                                                  }else{

                                                      var summ = (+gamma * 2);
                                                      alpha.attr("count",summ);

                                                  }

                                              }

                                        }

                                        for(var oo = 0;oo < arrayevenoddblackred.length;oo++){
                                              if(xx == arrayevenoddblackred[oo]){

                                                  if((gamma * 2) > maxevenaddredandblack){
                                                        //alertmessagefour('even,odd,black,red,1-18,19-36 maximum ' + maxevenaddredandblack);
                                                       // return false;
                                                    }else{

                                                        var summ = (+gamma * 2);
                                                        alpha.attr("count",summ);
                                                    }

                                              }
                                          }

                                          for(var jj = 0;jj < arnumber.length;jj++){

                                                  if(xx == arnumber[jj]){

                                                      stringtupsumtwo = gamma;

                                                      if((stringtupsumtwo * 2) > maxstrightup){
                                                          //alertmessagefour('Straight Up maximum ' + maxstrightup);    //sdelat opoveshenie
                                                          //return false;
                                                      }else{
                                                          var summ = (+gamma * 2);
                                                          alpha.attr("count",summ);
                                                      }


                                                  }



                                          }

                                }

                              }

                        });


                        $(".y").each(function(index,element){

                              var h = $(element);

                              var a = h.children(".i");

                              var b = a.attr("count");

                              if(b != "0"){



                                    var p_indecator_count = h.children(".i");

                                    var prevdivnumber = h.children("div:not(.i)");


                                    prevdivnumber.css("display","none");  //skritie perednego div s nomerom
                                   //generasiya kartinki

                                    var vvv = vvvv.cloneNode(false);

                                    vvv.setAttribute("width", "50");
                                    vvv.setAttribute("height", "50");

                                    var xxx = vvv.getContext('2d');

                                    var img = imgg.cloneNode(false);

                                    xxx.beginPath();

                                    var imcolor = p_indecator_count.attr("colorfx");

                                    switch (imcolor) {
                                      case "#00a0e3":
                                        img.src = 'fishki/fishka1.png';
                                        break;
                                      case "#e31e24":
                                        img.src = 'fishki/fishka5.png';
                                        break;
                                      case "#10653f":
                                        img.src = 'fishki/fishka25.png';
                                        break;
                                      case "#1c1b17":
                                        img.src = 'fishki/fishka100.png';
                                        break;
                                      case "#ea5f8b":
                                        img.src = 'fishki/fishka500.png';
                                        break;

                                      case "#9d3a31":
                                        img.src = 'fishki/fishka1000.png';
                                        break;
                                      default:
                                        img.src = 'fishki/fishka1.png';
                                    }

                                    //podschet kolichestva nazhatii i stavok

                                   var count_img = p_indecator_count.attr("count");

                                   //count_img = (+count_img + +nominalnumber);

                                   p_indecator_count.attr("count",count_img);


                                    img.onload = function(){

                                    xxx.drawImage(img,6,6,37,37);


                                    xxx.beginPath();

                                    xxx.fillStyle = "white";

                                    xxx.arc(24.5,24.5,12,0,Math.PI*2,true); // Внутренняя окружность

                                    xxx.fill();

                                    xxx.beginPath();
                                    xxx.fillStyle = "black";
                                    xxx.font = "bold 12px Helvetica, sans-serif";

                                    /*sentrovka texta*/
                                    var positiontext = 20;

                                    if((count_img > 9) && (count_img <= 99)){
                                        positiontext = 17;
                                    }else if((count_img > 99) && (count_img <= 999)){
                                        positiontext = 12;
                                    }else if((count_img > 999) && (count_img <= 9999)){
                                        positiontext = 8;
                                    }else if((count_img > 9999) && (count_img <= 99999)){
                                        positiontext = 4;
                                    }else if((count_img > 99999) && (count_img <= 10000000)){
                                        positiontext = 1;
                                    }
                                    xxx.fillText(count_img, positiontext, 29);
                                    /*sentrovka texta*/

                                    p_indecator_count.empty();      //ochistka diva

                                    p_indecator_count.append(vvv);  //vstabka kartinki

                                    p_indecator_count.css("display","block");       //pokaz kartinki

                                    //new manipulation

                                  }




                              }


                        });



                      }

                      checksum();


                    });

                                        /*X2 double*/

                                        /*ochistka*/


                 $(".n252").click(function(){


                  if(timerates == 1){

                      alertmessage('No more bets');
                      return false;
                  }


                    $(".y").each(function(index,element){

                        var osn = $(this);



                        if(osn.attr("x") != undefined){


                        var div = osn.children("div:not(.i)");

                        var ii = osn.children(".i");

                        ii.attr("count","0");

                        ii.empty();

                        ii.css("display","none");

                        div.css("display","block");

                        }

                    });

                        for(var i = 0;i < arnumbercount.length;i++){
                            arnumbercount[i] = 0;
                        }

                        for(var j = 0;j < arnumbercombinationcount.length;j++){
                            arnumbercombinationcount[j] = 0;
                        }

                        for(var k = 0;k < arnumbersearchcombinationcount.length;k++){
                            arnumbersearchcombinationcount[k] = 0;
                        }


                        noar[0] = 2000;
                        notwoar[0] = 2000;
                        nothreear[0] = 2000;
                        nofar[0] = 2000;

                        //ochishenie phaser

                        for(var f = 0;f < deletefish.length;f++){
                            deletefish[f].destroy();
                        }

                        for(var n = 0;n < deletetext.length;n++){
                              deletetext[n].destroy();
                        }

                        for(var nn = 0;nn <= 36;nn++){
                            allgraphics[nn].paramssum = 0;
                            allgraphics[nn].paramsclicked = 0;
                        }


                        //ochishenie phaser
                        checksum();





                 });





                if(fixgame == 0){


                  var updateTimeObj = {
                      updateTime: function () {
                          var myRef = this;
                          var val = setTimeout(function () {

                            if(fixconnection == 0){
                                updatetime();
                                updatetime2();
                            }

                              myRef.updateTime();
                          }, 1000);
                      }
                  };

                  updateTimeObj.updateTime();

                }
                 /*function timeout*/





                 $(".n253-5").click(function(){



                    if(timerates == 1){

                      alertmessage('No more bets');
                      return false;
                   }



                 for(var i = 0;i < countArray.length;i++){
                          if(i == countArray.length - 1){

                              //console.log(countArray[i]);

                              var y = $('[x = ' + countArray[i] + ']');

                              y.children(".i").empty();

                              y.children("div:not(.i)").css("display","block");

                              for(var j = 0;j < arnumber.length;j++){
                                  if(countArray[i] == arnumber[j]){
                                      if(arnumbercount[j] != 0){
                                          arnumbercount[j] = 0;
                                          var ng = arnumber[j];
                                          $('[x = ' + ng + ']').children(".i").attr("count","0");
                                      }
                                  }
                              }

                              for(var k = 0;k < arnumbercombination.length;k++){
                                  if(countArray[i] == arnumbercombination[k]){
                                      if(arnumbercombinationcount[k] != 0){
                                          arnumbercombinationcount[k] = 0;
                                          var ng = arnumbercombination[k];
                                          $('[x = ' + ng + ']').children(".i").attr("count","0");
                                      }
                                  }
                              }


                              for(var l = 0;l < arnumbersearchcombination.length;l++){
                                  if(countArray[i] == arnumbersearchcombination[l]){
                                      if(arnumbersearchcombinationcount[l] != 0){
                                          arnumbersearchcombinationcount[l] = 0;
                                          var ng = arnumbersearchcombination[l];
                                          $('[x = ' + ng + ']').children(".i").attr("count","0");
                                      }
                                  }
                              }




                          }
                      }


                      countArray.pop();


                      if(deletefish.length > 0){


                              deletefish[deletefish.length-1].destroy();    //delete sprite
                              deletefish.pop();
                              deletetext[deletetext.length - 1].destroy();    //delete text
                              deletetext.pop();

                              var deletenumber = countnamenumbers[countnamenumbers.length - 1];     //delete sum information
                              countnamenumbers.pop();

                              var deletesum = allgraphics[deletenumber].paramssum;

                              allgraphics[deletenumber].paramssum = 0;
                              allgraphics[deletenumber].paramsclicked = 0;

                             }


                              checksum();





                 });




//new variable after update sockets
var checky = 0;

//aa
socket.on('gamestatusclient', function(data){

      //console.log(userid);
      //console.log(fixgame);
      //if(fixgame == 1){
      //xx
            //console.log(data);
            if(fixconnection == 0){

                updatedealerstatus(data.dealer_status);
                  if(gamestatus2 != 4){

                       gamestatus(data.game_status);

                    if(checky == 1){


                          alertmessagetwohide('technical break is over..');



                         checky = 0;
                      }


                    }else if(gamestatus2 == 4){

                        if(checky == 0){

                            alertmessagetwo('Technical break..');

                            checky = 1;

                        }

                    }


                }



        // }

  });

  socket.on('CheckOnlineUsers', function(data){

    //console.log(data);

  });

//new variable after update sockets


/*game status*/












/*game status*/



                setTimeout(function(){

                      getbalans();

                },2000);





//rabbb




var fixb = 0;

$(".roul_video").on('click', function (e) {

//gg

  if(fixb == 0){

    activcamera();


    $("#frame3").css("visibility","hidden");
    // $("#frame2").css("visibility","hidden");
    $("#frame2").css("visibility","visible");
    $("#frame1").css("visibility","visible");
    $(this).attr("src","fishki/0016.png");
    fixb = 1;
    return false;
  }

  if(fixb == 1){
    unactivecamera();


    $("#frame3").css("visibility","visible");
    $("#frame2").css("visibility","visible");
    $("#frame1").css("visibility","visible");
    $(this).attr("src","fishki/0001.png");
    fixb = 0;
  }


});

var fixchat = 0;

$(".roul_chat").on('click', function (e) {

  if(fixchat == 0){
    $(".chatstatic").show(500);
    $(this).attr("src","image/active_message_button.png");
    fixchat = 1;
    enableOrientation = 0;
    makeLandscapeWithoutFullScreen();
    return false;
  }

  if(fixchat == 1){
    $(".chatstatic").hide(500);
    $(this).attr("src","image/message_button.png");
    enableOrientation = 1;
    makePortraitWithoutFullScreen();
    fixchat = 0;
  }


});

var fixcam = 0;

$(".cam1").click(function(){

    // if(fixcam == 0){
    //   $("#frame1").css("visibility","hidden");
    //   $("#frame2").css("visibility","visible");
    //   $("#frame3").css("visibility","hidden");
    //   fixcam = 1;
    //   return false;
    // }else if(fixcam == 1){
    //   $("#frame1").css("visibility","hidden");
    //   $("#frame2").css("visibility","hidden");
    //   $("#frame3").css("visibility","visible");
    //   fixcam = 2;
    //   return false;
    // }else if(fixcam == 2){
    //   $("#frame1").css("visibility","visible");
    //   $("#frame2").css("visibility","hidden");
    //   $("#frame3").css("visibility","hidden");
    //   fixcam = 0;
    //   return false;
    // }


    if(fixcam == 0){
      // $("#frame1").css("visibility","hidden");
      // $("#frame2").css("visibility","visible");
      // $("#frame3").css("visibility","hidden");
      fixcam = 1;
      return false;
    }else if(fixcam == 1){
      // $("#frame1").css("visibility","visible");
      // $("#frame2").css("visibility","hidden");
      // $("#frame3").css("visibility","hidden");
      fixcam = 0;
      return false;
    }


});



//hhh
var fixfish = 0;
$(".eventfish").click(function(){




    var path = "fishki/0015.png";
    var pathoriginal = "fishki/0004.png";

    var hidef = $(".hidefont");

    if(fixfish == 0){

      $(this).attr("src",path);
      $(this).attr("width","50");
      $(".fish").css("display","block");

      hidef.css("display","block");



      fixfish = 1;

      setTimeout(function(){

        $(".eventfish").attr("src",pathoriginal);
        $(".eventfish").attr("width","48");
        $(".fish").css("display","none");
        hidef.css("display","none");

        fixfish = 0;

      },5000);

    }else{

        $(this).attr("src",pathoriginal);
        $(this).attr("width","48");
        $(".fish").css("display","none");
        hidef.css("display","none");

        fixfish = 0;

    }





});




//showroulettenumber(36);







//shownumbers function

//menu event
//vz2
var fixmenu = 0;

$(".menuevent").click(function(){

    var menuicons = $(this);

    if(fixmenu == 0){

      $(".tablemenu").css("display","block");
      fixmenu = 1;
      menuicons.attr("src","fishki/0017.png");

      $(".help").css("display","none");
        $(".historystatic").css("display","none");
        $(".gamestatic").css("display","none");
        $(".gamesetting").css("display","none");

        $("#testdrag").attr("src","fishki/delete.png");
        $(".openhistory").children("img").attr("src","fishki/0006.png");

    }else{

        $(".tablemenu").css("display","none");
        fixmenu = 0;
        menuicons.attr("src","fishki/0008.png");
        $(".help").css("display","none");
        $(".historystatic").css("display","none");
        $(".gamestatic").css("display","none");
        $(".gamesetting").css("display","none");
        videosett = 0;
        historyfix = 0;
        fixhelp = 0;

        $("#testdrag").attr("src","fishki/delete.png");
        $(".openhistory").children("img").attr("src","fishki/0006.png");

    }



});
//menu event


$(".changeDownMatrix").dblclick(function(){

        if(fixDragdivDown == 0){
          activateMoveVideo();
          fixDragdivDown = 1;
          return false;
        }

        if(fixDragdivDown == 1){
          deactivateMoveVideo();
          fixDragdivDown = 0;
        }

});

function activateMoveVideo(){
  activcamera();

  $("#frame3").css("visibility","hidden");
  $("#frame2").css("visibility","visible");
  $("#frame1").css("visibility","visible");
  activefixDragdivDown = 0;
}

function deactivateMoveVideo(){
  unactivecamera();

  $("#frame3").css("visibility","visible");
  $("#frame2").css("visibility","visible");
  $("#frame1").css("visibility","visible");
  activefixDragdivDown = 0;
}

            var ldelay;
            var newdelay;
            var betw={};




            document.addEventListener('touchstart', function(event) {

              if(fix == 1){
                return false;
              }
              if(touchendelement == 0){
                return false;
              }

            event.preventDefault();
            event.stopPropagation();
            ldelay = new Date();
            newdelay = new Date();
            betw.x=event.changedTouches[0].pageX;
            betw.y=event.changedTouches[0].pageY;




            }, false);

            var dragpositionx = 0;
            var dragpositiony = 0;
            var fix = 0;
            var fixDragdivDown = 0;
            var activefixDragdivDown = 0;

            document.addEventListener('touchmove', function(event) {
            event.preventDefault();
            event.stopPropagation();

//sensor
                var myLocation = event.touches[0];
                var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
                //getAttribute


                var top = $(".mainvideo-container").css("top");
                var left = $(".mainvideo-container").css("left");




                var realclass = realTarget.getAttribute("x");

                if(realclass == "dragdiv"){
                     var postop = myLocation.clientX;
                      var posleft = myLocation.clientY;

                      if(screen.width > 700){
                            $(".mainvideo-container").css("top",-postop + 500 + "px");

                            $(".mainvideo-container").css("left",posleft - 300 + "px");
                      }else{
                            $(".mainvideo-container").css("top",-postop + 240 + "px");

                            $(".mainvideo-container").css("left",posleft - 100 + "px");
                      }




                      fix = 1;
                }

                if(realclass == "dragdivDown"){
                     var postop = myLocation.clientX;
                      var posleft = myLocation.clientY;


                      var pdelayD = new Date();

                      activefixDragdivDown = 1;

                }

                //draggablebutton


                if(realclass){

                  if(realclass != "dragdiv"){
                      touchendelement = realclass;
                  }else{
                    return false;
                  }



                   // console.log(realclass);
                    var x = realclass;

                    for(var g = 0;g < arnumbersearchcombination.length;g++){
                        if(x == arnumbersearchcombination[g]){

                              var revoar = arnumbersearchcombination[g].split('x');

                              for(var k = 0;k < revoar.length;k++){

                                     $('[x = "'+ revoar[k] + '"]').css("opacity","0.8");
                                     //$('[x = "'+ revoar[k] + '"]').css("-webkit-box-shadow","0 0 30px #ffff00");
                                     $('[x = "'+ revoar[k] + '"]').css("-webkit-box-shadow","1px 1px 5px 10px rgba(255,255,255,1)");

                              }

                         }
                     }




                }





            }, false);



            document.addEventListener('touchend', function(event) {
            event.preventDefault();
            event.stopPropagation();
                //console.log("touchend");


                //downMoveCameraevent
                var pdelayG = new Date();
                //if((pdelayG.getTime()-ldelay.getTime())>300){

                      if(activefixDragdivDown == 1){

                        if(fixDragdivDown == 0){
                          activateMoveVideo();
                          fixDragdivDown = 1;
                          return false;
                        }

                        if(fixDragdivDown == 1){
                          deactivateMoveVideo();
                          fixDragdivDown = 0;
                        }

                        return false;
                      }

                //}

                //downMoveCameraevent


                fix = 0;

                if(touchendelement == 0){


                  return false;
                }


              for(var g = 0;g < arnumbersearchcombination.length;g++){

                    var revoar = arnumbersearchcombination[g].split('x');

                    for(var k = 0;k < revoar.length;k++){

                           $('[x = "'+ revoar[k] + '"]').css("opacity","1.0");
                           $('[x = "'+ revoar[k] + '"]').css("-webkit-box-shadow","0 0 0px #ffff00");

                    }

               }

               var pdelay = new Date();

               if((pdelay.getTime()-ldelay.getTime())>600){


                //var buttons = $$("#clickvoice")[0];
                              //buttons.play();


                  if(timerates == 1){

                      //alertmessage('<h2 style="color: white;text-align: center;">Ставки приостановлены..</h2>');
                      return false;
                  }

               //show fish
                var z = $('[x = "' + touchendelement + '"]');

                 var result = globalneirochecksum(touchendelement);

                if(!result){
                    return false;
                }



                if(timerates == 1){

                    alertmessage('No more bets');
                    return false;
                }



                var p_indecator_count = z.children(".i");

                var prevdivnumber = z.children("div:not(.i)");

                var colorrand = z.children("div:not(.i)").css("color");

                var x = touchendelement;

                countArray.push(x);


                function getimage(){

              //new manipulation

                                   prevdivnumber.css("display","none");  //skritie perednego div s nomerom
                                   //generasiya kartinki

                                    var vvv = vvvv.cloneNode(false);

                                    vvv.setAttribute("width", "50");
                                    vvv.setAttribute("height", "50");

                                     var xxx = vvv.getContext('2d');

                                     var img = imgg.cloneNode(false);

                                    xxx.beginPath();

                                    var imcolor = "#00a0e3";

                                    if(nominalnumber == "1"){
                                        imcolor = "#00a0e3";
                                        img.src = 'fishki/fishka1.png';

                                    }else if(nominalnumber == "5"){
                                        imcolor = "#e31e24";
                                        img.src = 'fishki/fishka5.png';

                                    }else if(nominalnumber == "25"){
                                        imcolor = "#10653f";
                                        img.src = 'fishki/fishka25.png';

                                    }else if(nominalnumber == "50"){
                                        imcolor = "#0079EF";
                                        //img.src = 'fishki/fishka25.png';
                                    }else if(nominalnumber == "100"){
                                        imcolor = "#1c1b17";
                                        img.src = 'fishki/fishka100.png';

                                    }else if(nominalnumber == "500"){
                                        imcolor = "#ea5f8b";
                                        img.src = 'fishki/fishka500.png';

                                    }else if(nominalnumber == "1000"){
                                        imcolor = "#9d3a31";
                                         img.src = 'fishki/fishka1000.png';

                                    }else if(nominalnumber == "10000"){
                                        imcolor = "#FDD700";
                                    }


                                    p_indecator_count.attr("colorfx",imcolor);

                                    //podschet kolichestva nazhatii i stavok

                                   var count_img = p_indecator_count.attr("count");

                                   count_img = (+count_img + +nominalnumber);

                                   p_indecator_count.attr("count",count_img);


                                   //podschet kolichestva nazhatii i stavok

                                    // xxx.fillStyle = imcolor;
                                    // xxx.arc(25,25,20,0,Math.PI*2,true); // Внешняя окружность

                                    // xxx.fill();

                                    img.onload = function(){

                                    xxx.drawImage(img,6,6,37,37);

                                    xxx.beginPath();

                                    xxx.fillStyle = "white";

                                    xxx.arc(24.5,24.5,12,0,Math.PI*2,true); // Внутренняя окружность

                                    xxx.fill();

                                    xxx.beginPath();
                                    xxx.fillStyle = "black";
                                    xxx.font = "bold 12px Helvetica, sans-serif";

                                    /*sentrovka texta*/
                                    var positiontext = 20;

                                    if((count_img > 9) && (count_img <= 99)){
                                        positiontext = 17;
                                    }else if((count_img > 99) && (count_img <= 999)){
                                        positiontext = 12;
                                    }else if((count_img > 999) && (count_img <= 9999)){
                                        positiontext = 8;
                                    }else if((count_img > 9999) && (count_img <= 99999)){
                                        positiontext = 4;
                                    }else if((count_img > 99999) && (count_img <= 10000000)){
                                        positiontext = 1;
                                    }
                                    xxx.fillText(count_img, positiontext, 29);
                                    /*sentrovka texta*/

                                    //generasiya kartinki

                                    //document.body.appendChild(vvv); //vstabka kartinki

                                    p_indecator_count.empty();      //ochistka diva

                                    p_indecator_count.append(vvv);  //vstabka kartinki

                                    p_indecator_count.css("display","block");       //pokaz kartinki

                                    //new manipulation
                                  }

            }



            function getcount2(){

                var gcount = arnumbersearchcombinationcount[g];

                  gcount = (+gcount + +nominalnumber);

                  arnumbersearchcombinationcount[g] = gcount;

                  //console.log(arnumbersearchcombinationcount);

            }


            for(var i = 0;i < arnumbercombination.length;i++){

                      if(x == arnumbercombination[i]){              /*chisla s combinasiyami*/





                                    for(var g = 0;g < arnumbersearchcombination.length;g++){
                                        if(x == arnumbersearchcombination[g]){

                                              var revoar = arnumbersearchcombination[g].split('x');           /*chisla s x promezhutkom*/


                                                  getcount2();
                                                  getimage();

                                         }
                                     }



                      }



            }




            }
                //show fish

                touchendelement = 0;
                checksumx();

            /* Здесь ваш код обработки события*/
            }, false);



              $(".backlink").click(function(){

                  $(".video-container").empty();


                  fixconnection = 1;

                  fixloading = 0;



                 //
                 checkCoefMemory();
                  mainView.router.back();


                  setTimeout(function(){

                    cleanclient();

                  },2000);



              });

              var gamestaticfix = 0;

              $(".opengamestatic").click(function(){


                  if(gamestaticfix == 0){
                      $(".gamestatic").css("display","block");
                      $(this).children("img").attr("src","fishki/0010.png");
                      gamestaticfix = 1;
                  }else{
                      $(".gamestatic").css("display","none");
                      $(this).children("img").attr("src","fishki/0006.png");
                      gamestaticfix = 0;
                  }



              });

              $(".opengamestatictwo").click(function(){

                      $(".gamestatic").css("display","none");
                      $(".opengamestatic").children("img").attr("src","fishki/0006.png");
                      gamestaticfix = 0;

              });



              $(".openhistory").click(function(){

                  if(historyfix == 0){
                      $(".historystatic").css("display","block");
                      $(this).children("img").attr("src","fishki/0010.png");
                      historyfix = 1;
                  }else{
                      $(".historystatic").css("display","none");
                      $(this).children("img").attr("src","fishki/0006.png");
                      historyfix = 0;
                  }



              });

              var fixscale = 0;

              $(".screenbuttons").click(function(){

                  $(".mainvideo-container").css("left","31%");

                  if(fixscale == 0){
                    $(".mainvideo-container").css("-webkit-transform","scale(2.8,2.8)");
                    $(".mainvideo-container").css("top","22%");


                    $(".refreshbuttons").css("margin-top","25px");
                    $(".draggablebutton").css("margin-top","15px");
                    $(".videobuttons").css("margin-top","15px");
                    $(".screenbuttonsb").css("margin-top","15px");
                    $(".splashclick").css("top","15px");
                    $(".videobuttonmatrixs").css("height","30px");

                    fixscale = 1;
                  }else{
                    $(".mainvideo-container").css("-webkit-transform","scale(1.0,1.0)");
                    $(".mainvideo-container").css("top","10%");

                    $(".refreshbuttons").css("margin-top","10px");
                    $(".draggablebutton").css("margin-top","29px");
                    $(".videobuttons").css("margin-top","29px");
                    $(".screenbuttonsb").css("margin-top","29px");
                    $(".splashclick").css("top","0px");
                    $(".videobuttonmatrixs").css("height","50px");
                    // $(".videobuttons").css("top","22%");
                    // $(".draggablebutton").css("top","60%");
                    // $(".screenbuttons").css("top","78%");

                    fixscale = 0;
                  }



              });

              var fixdraggable = 0;


              var fixhelp = 0;

              $(".helpevent").click(function(){

                  if(fixhelp == 0){
                      $(".help").css("display","block");
                      fixhelp = 1;
                  }else{
                      $(".help").css("display","none");
                      fixhelp = 0;
                  }

              });


              $(".cabinetevent").click(function(){
                    mainView.router.loadPage("cabinet.html");
              });


              $(".transferpage").click(function(){
                    mainView.router.loadPage("/pages/transfer.html");
              });





                $(".downb").click(function(){

                  var top = $(".historystatic").scrollTop();
                  //console.log(top);

                  top = top += 50;

                  $(".historystatic").scrollTop(top);

                });

                $(".downup").click(function(){

                  var top = $(".historystatic").scrollTop();
                  //console.log(top);


                    top = top -= 50;
                    $(".historystatic").scrollTop(top);


                });



              $(".downbb").click(function(){

                  var top = $(".help").scrollTop();
                 // console.log(top);

                  top = top += 120;

                  $(".help").scrollTop(top);

                });

                $(".downupp").click(function(){

                  var top = $(".help").scrollTop();
                  //console.log(top);


                    top = top -= 120;
                    $(".help").scrollTop(top);


                });

                //prodolzhenie


                $(".changetable").click(function(){



                        $(".changetabletwo").css("display","block");
                        
                        $(".tablebackground").css("background","#1c2e2e");



                });
                //prodolzhenie



                //click splashline

                $(".splashlinebutton").click(function(){

                      $(this).css("display","none");
                      $(".splashline").css("display","block");
                      $(".splashlinematrix").css("display","block");

                      setTimeout(function(){

                        $(".splashline").css("display","none");
                        $(".splashlinematrix").css("display","none");
                        $(".splashlinebutton").css("display","block");

                      },15000);

                });

                //click splashline

          $(".hidetabs").click(function(){

                $(".tablemenu").css("display","none");
                fixmenu = 0;
                $(".menuevent").attr("src","fishki/0008.png");
                $(".help").css("display","none");
                $(".historystatic").css("display","none");
                $(".gamestatic").css("display","none");
                $(".gamesetting").css("display","none");
                videosett = 0;
                historyfix = 0;
                fixhelp = 0;

                $("#testdrag").attr("src","fishki/delete.png");
                $(".openhistory").children("img").attr("src","fishki/0006.png");

         });



          //phaser init


//if(fixgame == 0){
          //phaser canv

                //phaser       //phaser

//game = new Phaser.Game(424, 726, Phaser.AUTO, 'phaser');
game = new Phaser.Game(424, 726, Phaser.CANVAS, 'phaser');


//https://github.com/MattMcFarland/phaser-menu-system

 Main = function () {};

 Main.prototype = {

  preload: function () {
    game.load.image('progressbar',    'phaser/progressbar.jpg');
   // game.load.script('polyfill',   'phaser/phaser.js/polyfill.js');
   // game.load.script('utils',   'phaser/phaser.js/utils.js');
    game.load.script('tabletwo',  'phaser/phaser.js/tabletwo.js');
  },

  create: function () {
    game.add.sprite(0,0,'progressbar');

        setTimeout(function(){

              game.state.add('Tabletwo', Tabletwo);
              game.state.start('Tabletwo');

        },1000);
  }

};

game.state.add('Main', Main);
game.state.start('Main');



//}


//game.state.add('Tabletwo', Tabletwo);
//game.state.start('Tabletwo');
//phaser canv
          //phaser init

          if(fixgame == 0){

var options = {

                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric'
                    };

                    var updateTimeObjtwo = {
                      updateTime: function () {
                          var myRef = this;
                          var val = setTimeout(function () {

                            var date = new Date();

                            $("#nowtime").text(date.toLocaleString("ru", options));

                              myRef.updateTime();
                          }, 1000);
                      }
                  };

                  //updateTimeObjtwo.updateTime();

                  var updateTimeObjthree = {
                      updateTime: function () {
                          var myRef = this;
                          var val = setTimeout(function () {

                              checksumx();//rx

                              myRef.updateTime();
                          }, 20000);
                      }
                  };

                  updateTimeObjthree.updateTime();

                    }


fixgame = 1;



$(".ready").click(function(){

    var src = $(this).children("img").attr("src");

    if(src == "phaser/play.png"){
        alertmessage("AGP is not ready");
    }else{
        alertmessage("AGP is ready");
    }
});


makePortrait();


setTimeout(function(){
  //checkLimits();
},5000);



$(".draggablebuttonmatrix").click(function(){

  var usid = checkAuth();

  console.log("check request");

  socket.emit('getCamData', {usid:usid,command:"enableVoice"});
  //xx

});

// setInterval(function(){
//     document.querySelector('#frame1').click();
// },5000);


translateApp();

});     //kones onpageinit


function checkLimits(){
  var ogranUser = localStorage.getItem("player_coef");

  console.log(ogranUser);
  if(ogranUser){
    if(ogranUser == "1-100"){

      maxstrightup = 100;
      maxsplit = 100;
      maxstreet = 100;
      maxcorner = 100;
      maxsixline = 100;
      minogranizhenie = 1;
      maxdozensandcolumn = 100;
      mindozensandcolumn = 1;
      maxevenaddredandblack = 100;
      minevenaddredandblack = 1;

    }else if(ogranUser == "25-500"){

      maxstrightup = 500;
      maxsplit = 500;
      maxstreet = 500;
      maxcorner = 500;
      maxsixline = 500;
      minogranizhenie = 25;
      maxdozensandcolumn = 500;
      mindozensandcolumn = 25;
      maxevenaddredandblack = 500;
      minevenaddredandblack = 25;
    }else if(ogranUser == "100-1000"){

      console.log("100-1000 loaded");
      console.log("100-1000 loaded");
      console.log("100-1000 loaded");
      console.log("100-1000 loaded");
      console.log("100-1000 loaded");
      console.log("100-1000 loaded");
      maxstrightup = 1000;
      maxsplit = 1000;
      maxstreet = 1000;
      maxcorner = 1000;
      maxsixline = 1000;
      minogranizhenie = 100;
      maxdozensandcolumn = 1000;
      mindozensandcolumn = 100;
      maxevenaddredandblack = 1000;
      minevenaddredandblack = 100;

    }
  }
}

//camera timer







//camera timer


myApp.onPageBeforeAnimation('table', function (page) {

fixconnection = 0;

var ff = '<iframe id="frame1" class="frame1" scrolling="no" src="https://almagames.mypsx.net:8080/c1" frameborder="0" allowfullscreen></iframe>';
var ffTwo = '<iframe id="frame2" class="frame2" scrolling="no" src="https://almagames.mypsx.net:8080/c2" frameborder="0" allowfullscreen></iframe>';

    // var ff = '<iframe id="frame1" class="frame1" scrolling="no" src="https://almagames.mypsx.net:8080/c1" frameborder="0" allowfullscreen></iframe><iframe id="frame2" class="frame2" scrolling="no" src="https://almagames.mypsx.net:8080/c2" frameborder="0" allowfullscreen></iframe>';
    // var ff = '<iframe id="frame1" class="frame1" scrolling="no" src="https://almagames.mypsx.net:8080/c1" frameborder="0" allowfullscreen></iframe><iframe id="frame2" class="frame2" scrolling="no" src="https://almagames.mypsx.net:8080/c2" frameborder="0" allowfullscreen></iframe><iframe id="frame3" class="frame3" scrolling="no" src="https://almagames.mypsx.net:8080/c3" frameborder="0" allowfullscreen></iframe>';

    $(".video-container").html(ffTwo);
    $(".video-container_second").html(ff);

//rx
    // setTimeout(function(){
    //
    //   usersum = 5;
    //
    // },3000);

    //cleanclient();






    alertmessagetwo("LOADING...");

    //$(".choosedot").show();

    setTimeout(function(){

      //$(".choosedot").hide();
      alertmessagetwohide("LOADING...");
      //checkLimits();

    },5000);

    makePortrait();

    translateApp();


});


//mobileappversion

//checkgameparams

                var gameparams = {

                            "st":"st",

                        }

                        //console.log(useridentificator4);
//rab
                           var url = localStorage.getItem("baseurl");



                          $.ajax({
                                "type":"GET",
                                "url": url + "gameparams/",    /*random restourants menu zakaZ*/

                                dataType: "jsonp",
                                crossDomain: true,
                                "data": gameparams,

                                "success":kxstt,
                                "error":errorfuncstt

                                });


                          function kxstt(result){
//xx

                            var ogranUser = localStorage.getItem("player_coef");
                            // if(ogranUser){
                            //   if(ogranUser == "1-100"){
                            //     ogranichenie = Number(result[0]);//ogranichenie
                            //
                            //     maxstrightup = 100;
                            //     maxsplit = 100;
                            //     maxstreet = 100;
                            //     maxcorner = 100;
                            //     maxsixline = 100;
                            //     minogranizhenie = 1;
                            //     maxdozensandcolumn = 100;
                            //     mindozensandcolumn = 1;
                            //     maxevenaddredandblack = 100;
                            //     minevenaddredandblack = 1;
                            //
                            //   }else if(ogranUser == "25-500"){
                            //     ogranichenie = Number(result[0]);//ogranichenie
                            //
                            //     maxstrightup = 500;
                            //     maxsplit = 500;
                            //     maxstreet = 500;
                            //     maxcorner = 500;
                            //     maxsixline = 500;
                            //     minogranizhenie = 25;
                            //     maxdozensandcolumn = 500;
                            //     mindozensandcolumn = 25;
                            //     maxevenaddredandblack = 500;
                            //     minevenaddredandblack = 25;
                            //   }else if(ogranUser == "100-1000"){
                                // ogranichenie = Number(result[0]);//ogranichenie
                                //
                                // maxstrightup = 1000;
                                // maxsplit = 1000;
                                // maxstreet = 1000;
                                // maxcorner = 1000;
                                // maxsixline = 1000;
                                // minogranizhenie = 100;
                                // maxdozensandcolumn = 1000;
                                // mindozensandcolumn = 100;
                                // maxevenaddredandblack = 1000;
                                // minevenaddredandblack = 100;

                            //  }
                          //  }else{
                              ogranichenie = Number(result[0]);//ogranichenie

                              maxstrightup = Number(result[2]);
                              maxsplit = Number(result[3]);
                              maxstreet = Number(result[4]);
                              maxcorner = Number(result[5]);
                              maxsixline = Number(result[6]);

                              maxdozensandcolumn = Number(result[7]);
                              mindozensandcolumn = Number(result[8]);
                              maxevenaddredandblack = Number(result[9]);
                              minevenaddredandblack = Number(result[10]);
                          //  }


                                 if(result[1] != mobileappversion){

                                        setTimeout(function(){


                                                myApp.alert('Please update your almagames app', 'ALMAGAMES', function () {
                                                    window.location = "https://play.google.com/store/apps/details?id=kz.almabet.www&hl=ru";
                                                });



                                        },2000);

                                 }

                          }

                          function errorfuncstt(){

                              console.log("err");
                          }

//checkgameparams




//dop function combination
//uuu
function bigseriess(){

      if(timerates == 1){

                        alertmessage('No more bets');
                        return false;
                    }


                    var vb = Number(globalsumx) + (Number(nominalnumber) * 7);


                                    //console.log(v + " | " + usersum);
                                        if(vb > Number(usersum)){

                                          alertmessage('Insufficiant Balance');
                                          return false;
                                        }else if(vb > ogranichenie){
                                            alertmessagefour('Table maximum ' + ogranichenie);
                                            return false;
                                        }




                    for(var gh = 0;gh < s_s.length;gh++){

                               var xxx = $('[x = "' + s_s[gh] + '"]');


                                var z = xxx;

                                var p_indecator_count = z.children(".i");

                                var prevdivnumber = z.children("div:not(.i)");

                                var colorrand = z.children("div:not(.i)").css("color");

                                var x = z.attr("x");

                                countArray.push(x);


                                var newarrz = s_s[gh].split("x");





                                for(var jj = 0;jj < arnumbersearchcombination.length;jj++){
                                    if(s_s[gh] == arnumbersearchcombination[jj]){


                                          if(newarrz.length == 2){

                                            if((arnumbersearchcombinationcount[jj] + Number(nominalnumber)) > maxsplit){

                                        //return false;

                                            }else{

                                                getimagemorefishs(p_indecator_count,prevdivnumber);

                                                var gcount = arnumbersearchcombinationcount[jj];

                                                gcount = (+gcount + +nominalnumber);

                                                arnumbersearchcombinationcount[jj] = gcount;

                                            }

                                            }else if(newarrz.length == 3){

                                                if((arnumbersearchcombinationcount[jj] + (Number(nominalnumber) * 2)) > maxstreet){
                                                    //alertmessagefour('Street maximum ' + maxstreet);
                                                    //return false;
                                                        }else{

                                                            getimagemorefishs(p_indecator_count,prevdivnumber);

                                                            var gcount = arnumbersearchcombinationcount[jj];

                                                            gcount = (+gcount + +nominalnumber);

                                                            arnumbersearchcombinationcount[jj] = gcount;

                                                        }

                                            }else if(newarrz.length == 4){

                                                if((arnumbersearchcombinationcount[jj] + (Number(nominalnumber) * 2)) > maxcorner){
                                                    //alertmessagefour('Street maximum ' + maxstreet);
                                                    //return false;
                                                        }else{

                                                            getimagemorefishs(p_indecator_count,prevdivnumber);

                                                            var gcount = arnumbersearchcombinationcount[jj];

                                                            gcount = (+gcount + +nominalnumber);

                                                            arnumbersearchcombinationcount[jj] = gcount;

                                                        }

                                            }





                                    }
                                }

                      }

                      $(".n193").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                          setTimeout(function(){

                            $(".n193").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                          },3000);


                          checksum();


}

function smallseriesone(){



                    if(timerates == 1){

                            alertmessage('No more bets');
                            return false;

                        }

                        var vb = Number(globalsumx) + (Number(nominalnumber) * 6);

                        if(vb > Number(usersum)){

                            alertmessage('Insufficiant Balance');
                            return false;

                        }else if(vb > ogranichenie){

                            alertmessagefour('Table maximum ' + ogranichenie);
                            return false;

                        }


                        for(var gh = 0;gh < big_series.length;gh++){

                                   var xxx = $('[x = "' + big_series[gh] + '"]');


                                    var z = xxx;

                                    var p_indecator_count = z.children(".i");

                                    var prevdivnumber = z.children("div:not(.i)");

                                    var colorrand = z.children("div:not(.i)").css("color");

                                    var x = z.attr("x");

                                    countArray.push(x);


                                    for(var jj = 0;jj < arnumbersearchcombination.length;jj++){

                                        if(big_series[gh] == arnumbersearchcombination[jj]){

                                              if((arnumbersearchcombinationcount[jj] + Number(nominalnumber)) > maxsplit){

                                              }else{

                                                  getimagemorefishs(p_indecator_count,prevdivnumber);

                                                  var gcount = arnumbersearchcombinationcount[jj];

                                                  gcount = (+gcount + +nominalnumber);

                                                  arnumbersearchcombinationcount[jj] = gcount;

                                              }

                                        }
                                    }

                          }

                          $(".n192").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                              setTimeout(function(){

                                $(".n192").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                              },3000);

                            checksum();



}


function orphanss(){


   if(timerates == 1){

                alertmessage('No more bets');
                return false;
            }

                  var vb = Number(globalsumx) + (Number(nominalnumber) * 5);


                                    //console.log(v + " | " + usersum);
                                        if(vb > Number(usersum)){

                                          alertmessage('Insufficiant Balance');
                                          return false;
                                        }else if(vb > ogranichenie){
                                            alertmessagefour('Table maximum ' + ogranichenie);
                                            return false;
                                        }



                  for(var gh = 0;gh < orphans.length;gh++){


                                  var xxx = $('[x = "' + orphans[gh] + '"]');


                                  var z = xxx;

                                  var p_indecator_count = z.children(".i");

                                  var prevdivnumber = z.children("div:not(.i)");

                                  var colorrand = z.children("div:not(.i)").css("color");

                                  var x = z.attr("x");

                                  countArray.push(x);



                                  var gn = orphans[gh].split('x');

                            if(gn.length == 2){

                                  for(var jj = 0;jj < arnumbersearchcombination.length;jj++){
                                      if(orphans[gh] == arnumbersearchcombination[jj]){


                                            if((arnumbersearchcombinationcount[jj] + Number(nominalnumber)) > maxsplit){

                                                  //return false;

                                            }else{
                                                getimagemorefishs(p_indecator_count,prevdivnumber);

                                                var gcount = arnumbersearchcombinationcount[jj];

                                                gcount = (+gcount + +nominalnumber);

                                                arnumbersearchcombinationcount[jj] = gcount;
                                            }


                                      }
                                  }

                            }else{

                                  for(var kkk = 0;kkk < arnumber.length;kkk++){

                                      if(Number(orphans[gh]) == arnumber[kkk]){


                                            if((arnumbercount[kkk] + Number(nominalnumber)) > maxstrightup){
                                                //alertmessagefour('Straight Up maximum ' + maxstrightup);    //sdelat opoveshenie
                                                //return false;
                                            }else{

                                                getimagemorefishs(p_indecator_count,prevdivnumber);

                                                var gcount = arnumbercount[kkk];

                                                gcount = (+gcount + +nominalnumber);

                                                arnumbercount[kkk] = gcount;
                                            }



                                      }

                                  }

                            }



                    }

                    $(".n194").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                        setTimeout(function(){

                          $(".n194").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                        },3000);


                checksum();
}


function zerospiels(){

       if(timerates == 1){

                  alertmessage('No more bets');
                  return false;

              }

              var vb = Number(globalsumx) + (Number(nominalnumber) * 4);


                //console.log(v + " | " + usersum);
                    if(vb > Number(usersum)){

                        alertmessage('Insufficiant Balance');
                        return false;

                    }else if(vb > ogranichenie){

                        alertmessagefour('Table maximum ' + ogranichenie);
                        return false;

                    }


                  for(var gh = 0;gh < zero_spiel.length;gh++){

                                  var xxx = $('[x = "' + zero_spiel[gh] + '"]');

                                  var z = xxx;

                                  var p_indecator_count = z.children(".i");

                                  var prevdivnumber = z.children("div:not(.i)");

                                  var colorrand = z.children("div:not(.i)").css("color");

                                  var x = z.attr("x");

                                  countArray.push(x);




                                  var gn = zero_spiel[gh].split('x');

                                  if(gn.length == 2){


                                              for(var jj = 0;jj < arnumbersearchcombination.length;jj++){
                                                    if(zero_spiel[gh] == arnumbersearchcombination[jj]){


                                                          if((arnumbersearchcombinationcount[jj] + Number(nominalnumber)) > maxsplit){

                                                            }else{
                                                                getimagemorefishs(p_indecator_count,prevdivnumber);

                                                                var gcount = arnumbersearchcombinationcount[jj];

                                                                gcount = (+gcount + +nominalnumber);

                                                                arnumbersearchcombinationcount[jj] = gcount;
                                                            }



                                                    }
                                                }



                                    }else{

                                          for(var kkk = 0;kkk < arnumber.length;kkk++){

                                                if(Number(zero_spiel[gh]) == arnumber[kkk]){

                                                      if((arnumbercount[kkk] + Number(nominalnumber)) > maxstrightup){


                                                        }else{
                                                              getimagemorefishs(p_indecator_count,prevdivnumber);

                                                              var gcount = arnumbercount[kkk];

                                                              gcount = (+gcount + +nominalnumber);

                                                              arnumbercount[kkk] = gcount;

                                                        }


                                                }

                                            }

                                    }


                    }

                    $(".n195").css("-webkit-box-shadow"," 1px 1px 5px 6px rgba(29,81,66,1)");

                        setTimeout(function(){

                          $(".n195").css("-webkit-box-shadow"," 0px 0px 0px 0px rgba(29,81,66,1)");

                        },3000);


               checksum();

}

 var vvvvt = document.createElement("CANVAS");
 var imggt = new Image();

function getimagemorefishs(p_indecator_count,prevdivnumber){

              //new manipulation

                                   prevdivnumber.css("display","none");  //skritie perednego div s nomerom
                                   //generasiya kartinki

                                    var vvv = vvvvt.cloneNode(false);

                                    vvv.setAttribute("width", "50");
                                    vvv.setAttribute("height", "50");

                                     var xxx = vvv.getContext('2d');

                                     var img = imggt.cloneNode(false);



                                    xxx.beginPath();

                                    var imcolor = "#00a0e3";

                                    if(nominalnumber == "1"){
                                        imcolor = "#00a0e3";
                                        img.src = 'fishki/fishka1.png';

                                    }else if(nominalnumber == "5"){
                                        imcolor = "#e31e24";
                                        img.src = 'fishki/fishka5.png';

                                    }else if(nominalnumber == "25"){
                                        imcolor = "#10653f";
                                        img.src = 'fishki/fishka25.png';

                                    }else if(nominalnumber == "50"){
                                        imcolor = "#0079EF";
                                        //img.src = 'fishki/fishka25.png';
                                    }else if(nominalnumber == "100"){
                                        imcolor = "#1c1b17";
                                        img.src = 'fishki/fishka100.png';

                                    }else if(nominalnumber == "500"){
                                        imcolor = "#ea5f8b";
                                        img.src = 'fishki/fishka500.png';

                                    }else if(nominalnumber == "1000"){
                                        imcolor = "#9d3a31";
                                         img.src = 'fishki/fishka1000.png';

                                    }else if(nominalnumber == "10000"){
                                        imcolor = "#FDD700";
                                    }


                                    p_indecator_count.attr("colorfx",imcolor);

                                    //podschet kolichestva nazhatii i stavok

                                   var count_img = p_indecator_count.attr("count");

                                   count_img = (+count_img + +nominalnumber);

                                   p_indecator_count.attr("count",count_img);


                                   //podschet kolichestva nazhatii i stavok

                                    // xxx.fillStyle = imcolor;
                                    // xxx.arc(25,25,20,0,Math.PI*2,true); // Внешняя окружность

                                    // xxx.fill();

                                    img.onload = function(){

                                    xxx.drawImage(img,6,6,37,37);

                                    xxx.beginPath();

                                    xxx.fillStyle = "white";

                                    xxx.arc(24.5,24.5,12,0,Math.PI*2,true); // Внутренняя окружность

                                    xxx.fill();

                                    xxx.beginPath();
                                    xxx.fillStyle = "black";
                                    xxx.font = "bold 12px Helvetica, sans-serif";

                                    /*sentrovka texta*/
                                    var positiontext = 20;

                                    if((count_img > 9) && (count_img <= 99)){
                                        positiontext = 17;
                                    }else if((count_img > 99) && (count_img <= 999)){
                                        positiontext = 12;
                                    }else if((count_img > 999) && (count_img <= 9999)){
                                        positiontext = 8;
                                    }else if((count_img > 9999) && (count_img <= 99999)){
                                        positiontext = 4;
                                    }else if((count_img > 99999) && (count_img <= 10000000)){
                                        positiontext = 1;
                                    }
                                    xxx.fillText(count_img, positiontext, 29);
                                    /*sentrovka texta*/

                                    //generasiya kartinki

                                    //document.body.appendChild(vvv); //vstabka kartinki

                                    p_indecator_count.empty();      //ochistka diva

                                    p_indecator_count.append(vvv);  //vstabka kartinki

                                    p_indecator_count.css("display","block");       //pokaz kartinki

                                  }

                                    //new manipulation

                            }



                            function checksumx(){


                                  var sumx = 0;
                                    var countfish = 0;




                                        for(var xx = 0;xx < arnumbercount.length;xx++){

                                            if(arnumbercount[xx] != 0){
                                              sumx += +arnumbercount[xx];
                                              countfish += 1;

                                            }

                                        }

                                        for(var xx2 = 0;xx2 < arnumbersearchcombinationcount.length;xx2++){

                                            if(arnumbersearchcombinationcount[xx2] != 0){
                                              sumx += +arnumbersearchcombinationcount[xx2];

                                              countfish += 1;
                                            }

                                        }

                                        for(var xx3 = 0;xx3 < arnumbercombinationcount.length;xx3++){

                                            if(arnumbercombinationcount[xx3] != 0){
                                              sumx += +arnumbercombinationcount[xx3];
                                              countfish += 1;
                                            }

                                        }


                                        counttablefish = countfish;
                                        globalsumx = sumx;




                                        $(".totalbet").text(sumx);

                                        if(Number(globalsumx) > Number(usersum)){

                                          console.log(1);
                                            returnfish();
                                            cleanclient();
                                        }

                                        //console.log("checksum");

                                        controlsum();



                  }


                  function globalneighbours(numberh,neighb){




                     var nnn = checkneighbours(numberh);

                    var oneplus = nnn.oneplus;
                    var onemin = nnn.onemin;
                    var twoplus = nnn.twoplus;
                    var twomin = nnn.twomin;
                    var threemin = nnn.threemin;
                    var threeplus = nnn.threeplus;
                    var fourplus = nnn.fourplus;
                    var fourmin = nnn.fourmin;

                    var array = [String(onemin),String(oneplus),numberh];

                    switch (neighb) {
                        case 1:

                        var result = globalneirochecksum("no");

                        if(!result){
                          return false;
                        }

                        array = [String(onemin),String(oneplus),numberh];
                        break;

                        case 2:

                        var result = globalneirochecksum("ntwo");

                        if(!result){
                          return false;
                        }

                        array = [String(onemin),String(oneplus),String(twoplus),String(twomin),numberh];
                        break;

                        case 3:

                        var result = globalneirochecksum("nthree");

                        if(!result){
                          return false;
                        }

                        array = [String(onemin),String(oneplus),String(twoplus),String(twomin),String(threeplus),Number(threemin),numberh];
                        break;
                        case 4:

                        var result = globalneirochecksum("nf");

                        if(!result){
                          return false;
                        }

                        array = [String(onemin),String(oneplus),String(twoplus),String(twomin),String(threeplus),Number(threemin),Number(fourplus),Number(fourmin),numberh];
                        break;

                      default:
                        array = [String(onemin),String(oneplus),numberh];
                    }




                                   if(timerates == 1){

                                        alertmessage('No more bets');
                                        fixsosed = 0;
                                        return false;
                                    }

                                    var v = Number(globalsumx) + Number(nominalnumber);

                                        if(v > Number(usersum)){
                                          return false;
                                                  }


                                   for(var gh = 0;gh < array.length;gh++){

                                                  var xxx = $('[x = "' + array[gh] + '"]');

                                                  var z = xxx;

                                                  var p_indecator_count = z.children(".i");

                                                  var prevdivnumber = z.children("div:not(.i)");

                                                  var colorrand = z.children("div:not(.i)").css("color");

                                                  var x = z.attr("x");

                                                  countArray.push(x);

                                                  getimagemorefishs(p_indecator_count,prevdivnumber);

                                                  // for(var kkk = 0;kkk < arnumber.length;kkk++){

                                                  //     if(Number(array[gh]) == arnumber[kkk]){

                                                  //           var gcount = arnumbercount[kkk];

                                                  //           gcount = (+gcount + +nominalnumber);

                                                  //           arnumbercount[kkk] = gcount;
                                                  //     }

                                                  // }


                                    }

                                    checksumx();

                  }


                  function doublesums(){


                                if(timerates == 1){

                                    alertmessage('No more bets');
                                    return false;
                                }


                                var result = globalneirochecksum("twox");

                                if(!result){
                                  return false;
                                }


                                    if(globalsumx == 0){

                                        repeatnumbers();

                                    }else{


                              /*udvoenie massivov*/
                              var fixarnumbermessage = 0;

                              for(var i = 0;i < arnumbercount.length;i++){

                                  if(arnumbercount[i] != 0){

                                      stringtupsum = arnumbercount[i];

                                      if((stringtupsum * 2) > maxstrightup){
                                          //alertmessagefour('Straight Up maximum ' + maxstrightup);    //sdelat opoveshenie
                                          //return false;
                                      }else{
                                          arnumbercount[i] = arnumbercount[i] * 2;
                                          fixarnumbermessage = 1;
                                      }


                                  }

                              }

                              if(fixarnumbermessage == 0){
                                    //alertmessagefour('Straight Up maximum ' + maxstrightup);
                              }

                              var fixarnumbermessagetwo = 0;
                              var fixarnumbermessagethree = 0;

                              for(var n = 0;n < arnumbercombinationcount.length;n++){

                                  if(arnumbercombinationcount[n] != 0){

                                      for(var h = 0;h < arraydozandcol.length;h++){
                                            if(arnumbercombination[n] == arraydozandcol[h]){

                                                if((arnumbercombinationcount[n] * 2) > maxdozensandcolumn){
                                                    //alertmessagethree('Dozen and column maximum ' + maxdozensandcolumn);
                                                    //return false;

                                                }else{
                                                    arnumbercombinationcount[n] = arnumbercombinationcount[n] * 2;
                                                    fixarnumbermessagetwo = 1;
                                                }

                                            }
                                      }

                                      for(var oo = 0;oo < arrayevenoddblackred.length;oo++){
                                          if(arnumbercombination[n] == arrayevenoddblackred[oo]){

                                              if((arnumbercombinationcount[n] * 2) > maxevenaddredandblack){
                                                    //alertmessagefour('even,odd,black,red,1-18,19-36 maximum ' + maxevenaddredandblack);
                                                   // return false;
                                                }else{
                                                    arnumbercombinationcount[n] = arnumbercombinationcount[n] * 2;
                                                    fixarnumbermessagethree = 1;
                                                }

                                          }
                                      }

                                      //

                                  }

                              }


                              if(fixarnumbermessagetwo == 0){
                                  //alertmessagethree('Dozen and column maximum ' + maxdozensandcolumn);
                              }

                              if(fixarnumbermessagethree == 0){
                                  //alertmessagefour('even,odd,black,red,1-18,19-36 maximum ' + maxevenaddredandblack);
                              }



                              var splitfix = 0;
                              var streetfix = 0;
                              var cornerfix = 0;
                              var sixlinefix = 0;


                              for(var nn = 0;nn < arnumbersearchcombinationcount.length;nn++){

                                  if(arnumbersearchcombinationcount[nn] != 0){



                                                var newarrz = arnumbersearchcombination[nn].split("x");

                                                if(newarrz.length == 2){
                                                    //console.log("split");
                                                    //console.log(arnumbersearchcombinationcount[nn]);
                                                    if((arnumbersearchcombinationcount[nn] * 2) > maxsplit){

                                                        //return false;

                                                            }else{
                                                                splitfix = 1;
                                                                arnumbersearchcombinationcount[nn] = arnumbersearchcombinationcount[nn] * 2;
                                                            }
                                                }else if(newarrz.length == 3){

                                                    if((arnumbersearchcombinationcount[nn] * 2) > maxstreet){
                                                        //alertmessagefour('Street maximum ' + maxstreet);
                                                        //return false;
                                                            }else{
                                                              streetfix = 1;
                                                                    arnumbersearchcombinationcount[nn] = arnumbersearchcombinationcount[nn] * 2;
                                                            }

                                                }else if(newarrz.length == 4){

                                                    if((arnumbersearchcombinationcount[nn] * 2) > maxcorner){
                                                        //alertmessagefour('Corner maximum ' + maxcorner);
                                                        //return false;
                                                            }else{
                                                              cornerfix = 1;
                                                                arnumbersearchcombinationcount[nn] = arnumbersearchcombinationcount[nn] * 2;
                                                            }

                                                }else if(newarrz.length == 6){

                                                    if((arnumbersearchcombinationcount[nn] * 2) > maxsixline){
                                                        //alertmessagefour('Sixline maximum ' + maxsixline);
                                                        //return false;
                                                            }else{
                                                              sixlinefix = 1;
                                                                  arnumbersearchcombinationcount[nn] = arnumbersearchcombinationcount[nn] * 2;
                                                            }
                                                }



                                      //arnumbersearchcombinationcount[nn] = arnumbersearchcombinationcount[nn] * 2;
                                  }

                              }

                              if(splitfix == 0){
                                  //alertmessagefour('Split maximum ' + maxsplit);
                                  //console.log(1);
                              }

                              if(streetfix == 0){
                                  //alertmessagefour('Street maximum ' + maxstreet);
                                  //console.log(2);
                              }

                              if(cornerfix == 0){
                                  //alertmessagefour('Corner maximum ' + maxcorner);
                                  //console.log(3);
                              }

                              if(sixlinefix == 0){
                                  //alertmessagefour('Sixline maximum ' + maxsixline);
                                  //console.log(4);
                              }


                              /*udvoenie massivov*/




                              var betta = $(".y").children(".i");

                              betta.each(function(index,element){

                                    var alpha = $(element);

                                    var gamma = alpha.attr("count");

                                    if(+gamma != 0){

                                      var parenti = alpha.parent(".y");

                                      //console.log(parenti.attr("x"));

                                      var xx = parenti.attr("x")


                                      if(xx.indexOf("x") > 0){

                                           //ogranichenie


                                            var newarrztwo = xx.split("x");

                                                      if(newarrztwo.length == 2){

                                                          if((gamma * 2) > maxsplit){

                                                              //return false;

                                                                  }else{
                                                                      splitfix = 1;
                                                                      var summ = (+gamma * 2);
                                                                      alpha.attr("count",summ);
                                                                  }
                                                      }else if(newarrztwo.length == 3){

                                                          if((gamma * 2) > maxstreet){
                                                              //alertmessagefour('Street maximum ' + maxstreet);
                                                              //return false;
                                                                  }else{
                                                                    streetfix = 1;
                                                                          var summ = (+gamma * 2);
                                                                          alpha.attr("count",summ);
                                                                  }

                                                      }else if(newarrztwo.length == 4){

                                                          if((gamma * 2) > maxcorner){
                                                              //alertmessagefour('Corner maximum ' + maxcorner);
                                                              //return false;
                                                                  }else{
                                                                    cornerfix = 1;
                                                                      var summ = (+gamma * 2);
                                                                      alpha.attr("count",summ);
                                                                  }

                                                      }else if(newarrztwo.length == 6){

                                                          if((gamma * 2) > maxsixline){
                                                              //alertmessagefour('Sixline maximum ' + maxsixline);
                                                              //return false;
                                                                  }else{
                                                                    sixlinefix = 1;
                                                                        var summ = (+gamma * 2);
                                                                        alpha.attr("count",summ);
                                                                  }
                                                      }

                                      //ogranichenie


                                      }else{  //stright_up





                                            for(var h = 0;h < arraydozandcol.length;h++){

                                                  if(xx == arraydozandcol[h]){

                                                        if((gamma * 2) > maxdozensandcolumn){
                                                            //alertmessagethree('Dozen and column maximum ' + maxdozensandcolumn);
                                                            //return false;

                                                        }else{

                                                            var summ = (+gamma * 2);
                                                            alpha.attr("count",summ);

                                                        }

                                                    }

                                              }

                                              for(var oo = 0;oo < arrayevenoddblackred.length;oo++){
                                                    if(xx == arrayevenoddblackred[oo]){

                                                        if((gamma * 2) > maxevenaddredandblack){
                                                              //alertmessagefour('even,odd,black,red,1-18,19-36 maximum ' + maxevenaddredandblack);
                                                             // return false;
                                                          }else{

                                                              var summ = (+gamma * 2);
                                                              alpha.attr("count",summ);
                                                          }

                                                    }
                                                }

                                                for(var jj = 0;jj < arnumber.length;jj++){

                                                        if(xx == arnumber[jj]){

                                                            stringtupsumtwo = gamma;

                                                            if((stringtupsumtwo * 2) > maxstrightup){
                                                                //alertmessagefour('Straight Up maximum ' + maxstrightup);    //sdelat opoveshenie
                                                                //return false;
                                                            }else{
                                                                var summ = (+gamma * 2);
                                                                alpha.attr("count",summ);
                                                            }


                                                        }



                                                }

                                      }

                                    }

                              });


                              $(".y").each(function(index,element){

                                    var h = $(element);

                                    var a = h.children(".i");

                                    var b = a.attr("count");

                                    if(b != "0"){



                                          var p_indecator_count = h.children(".i");

                                          var prevdivnumber = h.children("div:not(.i)");


                                          prevdivnumber.css("display","none");  //skritie perednego div s nomerom
                                         //generasiya kartinki

                                          var vvv = vvvv.cloneNode(false);

                                          vvv.setAttribute("width", "50");
                                          vvv.setAttribute("height", "50");

                                          var xxx = vvv.getContext('2d');

                                          var img = imgg.cloneNode(false);

                                          xxx.beginPath();

                                          var imcolor = p_indecator_count.attr("colorfx");

                                          switch (imcolor) {
                                            case "#00a0e3":
                                              img.src = 'fishki/fishka1.png';
                                              break;
                                            case "#e31e24":
                                              img.src = 'fishki/fishka5.png';
                                              break;
                                            case "#10653f":
                                              img.src = 'fishki/fishka25.png';
                                              break;
                                            case "#1c1b17":
                                              img.src = 'fishki/fishka100.png';
                                              break;
                                            case "#ea5f8b":
                                              img.src = 'fishki/fishka500.png';
                                              break;

                                            case "#9d3a31":
                                              img.src = 'fishki/fishka1000.png';
                                              break;
                                            default:
                                              img.src = 'fishki/fishka1.png';
                                          }

                                          //podschet kolichestva nazhatii i stavok

                                         var count_img = p_indecator_count.attr("count");

                                         //count_img = (+count_img + +nominalnumber);

                                         p_indecator_count.attr("count",count_img);


                                          img.onload = function(){

                                          xxx.drawImage(img,6,6,37,37);


                                          xxx.beginPath();

                                          xxx.fillStyle = "white";

                                          xxx.arc(24.5,24.5,12,0,Math.PI*2,true); // Внутренняя окружность

                                          xxx.fill();

                                          xxx.beginPath();
                                          xxx.fillStyle = "black";
                                          xxx.font = "bold 12px Helvetica, sans-serif";

                                          /*sentrovka texta*/
                                          var positiontext = 20;

                                          if((count_img > 9) && (count_img <= 99)){
                                              positiontext = 17;
                                          }else if((count_img > 99) && (count_img <= 999)){
                                              positiontext = 12;
                                          }else if((count_img > 999) && (count_img <= 9999)){
                                              positiontext = 8;
                                          }else if((count_img > 9999) && (count_img <= 99999)){
                                              positiontext = 4;
                                          }else if((count_img > 99999) && (count_img <= 10000000)){
                                              positiontext = 1;
                                          }
                                          xxx.fillText(count_img, positiontext, 29);
                                          /*sentrovka texta*/

                                          p_indecator_count.empty();      //ochistka diva

                                          p_indecator_count.append(vvv);  //vstabka kartinki

                                          p_indecator_count.css("display","block");       //pokaz kartinki

                                          //new manipulation

                                        }




                                    }


                              });



                            }

                            checksum();


                    };



                        function globalgetcoordinates(number){

                            var coordinates = new Object();

                            for(var l = 0;l < globallayer.length;l++){

                                  if(number == globallayer[l].name){
                                      coordinates.x = globallayer[l].x - 16;
                                      coordinates.y = globallayer[l].y - 13;
                                      return coordinates;
                                  }
                              }

                          }


//dop function combination
//var mobileappversion = "0.2.3";
//exituser();                         +
//$(".video-container").html(ff);
//routing

//time vremya otscheta


//sdelat otpravku koda

//sdelat vse stavki polozhitelnimi
//vvesti schitivanie kontaktov
//vvesti schtivanie geolocasii

//ubrat icon exit



//http://onlinecasinohex.ca/roulette/european-roulette-netent/
