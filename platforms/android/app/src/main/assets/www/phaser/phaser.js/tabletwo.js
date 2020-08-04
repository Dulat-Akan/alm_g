

Tabletwo = function(){};

Tabletwo.prototype = {

 preload:function() {

    // this.game.load.spritesheet('player', 'phaser/phaser.png', 38, 48);
    // this.game.load.tilemap('tilemap', 'phaser/table.js', null, Phaser.Tilemap.TILED_JSON);
    // //this.game.load.tilemap('tilemap', 'phaser/table.csv');
    // this.game.load.image('tiles', 'phaser/table3.png');

    //game.load.tilemap('map', 'phaser/level2.json', null, Phaser.Tilemap.TILED_JSON);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.load.tilemap('map', 'phaser/newtable.json', null, Phaser.Tilemap.TILED_JSON);
 
    //this.load.tilemap("map","phaser/level2.csv"); 

  this.load.image("tilesets","phaser/newdoptable.png");

  game.load.image('fishka', 'phaser/fishka1.png');
  game.load.image('fishka5', 'phaser/fishka5.png');
  game.load.image('fishka25', 'phaser/fishka25.png');
  game.load.image('fishka100', 'phaser/fishka100.png');
  game.load.image('fishka500', 'phaser/fishka500.png');
  game.load.image('fishka1000', 'phaser/fishka1000.png');

  game.load.image('camera','fishki/0001.png');
  game.load.image('changebutton','fishki/changetable.png');
  game.load.image('undo','fishki/0003.png');
  game.load.image('fish','fishki/0004.png');
  game.load.image('double','fishki/0005.png');
  game.load.image('delete','fishki/delete.png');
  game.load.image('reiting','fishki/0006.png');
  game.load.image('menu','fishki/0008.png');
  game.load.image('smallseries','fishki/n1.png');
  game.load.image('bigseries','fishki/n2.png');
  game.load.image('orphans','fishki/n3.png');
  game.load.image('zerospiel','fishki/n4.png');
  game.load.image('oneneighbours','fishki/n5.png');
  game.load.image('twoneighbours','fishki/n6.png');
  game.load.image('threeneighbours','fishki/n7.png');
  game.load.image('fourneighbours','fishki/n8.png');
  game.load.image('backsprite','fishki/back.png');





  
  

},



 create: function() {

 
        //Start the Arcade Physics systems
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
 
    //Change the background colour
    this.game.stage.backgroundColor = "#1c2e2e";

    //map = this.add.tilemap("map",10,10);
    map = game.add.tilemap("map");
  

  map.addTilesetImage('doptable', 'tilesets');

  layer = map.createLayer('Tile Layer 1');

 
var len = map.objects['Object Layer 1'].length;

for(var i = 0;i < len;i++){

  var x = map.objects['Object Layer 1'][i].polygon[0][0];
  var y = map.objects['Object Layer 1'][i].polygon[0][1];

  var x2 = map.objects['Object Layer 1'][i].polygon[1][0];
  var y2 = map.objects['Object Layer 1'][i].polygon[1][1];

  var x3 = map.objects['Object Layer 1'][i].polygon[2][0];
  var y3 = map.objects['Object Layer 1'][i].polygon[2][1];

  var x4 = map.objects['Object Layer 1'][i].polygon[3][0];
  var y4 = map.objects['Object Layer 1'][i].polygon[3][1];

  //console.log(x4);

  poly = new Phaser.Polygon([ new Phaser.Point(x, y), new Phaser.Point(x2, y2), new Phaser.Point(x3, y3), new Phaser.Point(x4, y4) ]);

  graphics = game.add.graphics(map.objects['Object Layer 1'][i].x, map.objects['Object Layer 1'][i].y);

  graphics.numbers = map.objects['Object Layer 1'][i].name;

  graphics.paramssum = 0;
  graphics.paramsnominal = 1;
  graphics.paramsclicked = 0;
  //graphics.paramsy = y;

  

  graphics.beginFill(0xFF33f + i,0.001);
  graphics.drawPolygon(poly.points);
  graphics.endFill();

  graphics.inputEnabled = true;
  graphics.input.useHandCursor = true;
  graphics.events.onInputUp.add(clicknumbers, this);

  allgraphics[graphics.numbers] = graphics;



  //console.log(i);
  
}

//3 obj layers
//camera
  
  var camera = game.add.sprite(145,10.5,'camera');

  camera.scale.setTo(0.23, 0.23);
  camera.angle = 90;
  camera.inputEnabled = true;
  camera.events.onInputDown.add(camerasevents, this);

  function camerasevents(target, pointer){

      console.log("camera");
      myApp.alert('on completion!','Almagames');

  }

  var changebutton = game.add.sprite(95,65,'changebutton');

  changebutton.scale.setTo(0.36, 0.36);
  changebutton.inputEnabled = true;
  changebutton.events.onInputDown.add(buttonsevents, this);

  function buttonsevents(target, pointer){

 
      $(".changetabletwo").css("display","none");
      $(".tablebackground").css("background","#4D897C");
      

 }


  var undo = game.add.sprite(143,285,'undo');

  undo.scale.setTo(0.265, 0.265);
  undo.angle = 90;
  undo.inputEnabled = true;
  undo.events.onInputDown.add(undoevents, this);



 function undoevents(target, pointer){


      //console.log(target);
      console.log("undo");
      returnfish();
      
      

 }

   var fish = game.add.sprite(143,340,'fish');

  fish.scale.setTo(0.225, 0.225);
  fish.angle = 90;
  fish.inputEnabled = true;
  fish.events.onInputDown.add(fishevents, this);



 function fishevents(target, pointer){


      console.log("fish");
      myApp.alert('on completion!','Almagames');
      

 }


  var double = game.add.sprite(143,395,'double');

  double.scale.setTo(0.225, 0.225);
  double.angle = 90;
  double.inputEnabled = true;
  double.events.onInputDown.add(doubleevents, this);



 function doubleevents(target, pointer){


      console.log("double");
      doublesums();
      

 }


  var deletet = game.add.sprite(95,558,'delete');

  deletet.scale.setTo(0.35, 0.35);
  deletet.inputEnabled = true;
  deletet.events.onInputDown.add(deletetevents, this);



 function deletetevents(target, pointer){


      //console.log("delete");
      cleanclient();
      

 }


  var reiting = game.add.sprite(143,613,'reiting');

  reiting.scale.setTo(0.225, 0.225);
  reiting.angle = 90;
  reiting.inputEnabled = true;
  reiting.events.onInputDown.add(reitingevents, this);



 function reitingevents(target, pointer){


      //console.log("reiting");
      // if(historyfix == 0){
      //           $(".historystatic").show();
      //           $(this).children("img").attr("src","fishki/0010.png");
      //           historyfix = 1;
      //       }else{
      //           $(".historystatic").hide();
      //           $(this).children("img").attr("src","fishki/0006.png");
      //           historyfix = 0;
      //       }
      myApp.alert('on completion!','Almagames');
      
      

 }


   var menu = game.add.sprite(143,669,'menu');

  menu.scale.setTo(0.225, 0.225);
  menu.angle = 90;
  menu.inputEnabled = true;
  menu.events.onInputDown.add(menuevents, this);



 function menuevents(target, pointer){


      console.log("menu");
      myApp.alert('on completion!','Almagames');
      

 }


   var smallseries = game.add.sprite(72,13.5,'smallseries');

  smallseries.scale.setTo(0.09, 0.09);
  smallseries.angle = 90;
  smallseries.inputEnabled = true;
  smallseries.events.onInputDown.add(smallseriesevents, this);

  function smallseriesevents(target, pointer){

      //console.log("smallseries");
      var result = globalneirochecksum("bs");

      if(!result){
              return false;
            }

      
      smallseriesone();


  }

  var bigseries = game.add.sprite(72,100,'bigseries');

  bigseries.scale.setTo(0.09, 0.09);
  bigseries.angle = 90;
  bigseries.inputEnabled = true;
  bigseries.events.onInputDown.add(bigseriesevents, this);

  function bigseriesevents(target, pointer){

      //console.log("bigseries");

      
        var result = globalneirochecksum("ss");

        if(!result){
              return false;
            }
      bigseriess();
      

  }

    var orphans = game.add.sprite(72,186,'orphans');

  orphans.scale.setTo(0.09, 0.09);
  orphans.angle = 90;
  orphans.inputEnabled = true;
  orphans.events.onInputDown.add(orphansevents, this);

  function orphansevents(target, pointer){

     var result = globalneirochecksum("orp");

      if(!result){
              return false;
            }

      orphanss();

  }

      var zerospiel = game.add.sprite(72,272,'zerospiel');

  zerospiel.scale.setTo(0.09, 0.09);
  zerospiel.angle = 90;
  zerospiel.inputEnabled = true;
  zerospiel.events.onInputDown.add(zerospielevents, this);

  function zerospielevents(target, pointer){

      //console.log("zerospiel");

      var result = globalneirochecksum("zs");

      if(!result){
              return false;
            }

      zerospiels();

  }


  var oneneighbours = game.add.sprite(71.9,372.5,'oneneighbours');

  oneneighbours.scale.setTo(0.122, 0.122);
  oneneighbours.angle = 90;
  oneneighbours.inputEnabled = true;
  oneneighbours.events.onInputDown.add(oneneighboursevents, this);

  function oneneighboursevents(target, pointer){

      //console.log("oneneighbours");
      sosed = 1;

  }

    var twoneighbours = game.add.sprite(71.9,459,'twoneighbours');

  twoneighbours.scale.setTo(0.122, 0.122);
  twoneighbours.angle = 90;
  twoneighbours.inputEnabled = true;
  twoneighbours.events.onInputDown.add(twoneighboursevents, this);

  function twoneighboursevents(target, pointer){

      //console.log("twoneighbours");
      sosed = 2;

  }

      var threeneighbours = game.add.sprite(71.9,545,'threeneighbours');

  threeneighbours.scale.setTo(0.122, 0.122);
  threeneighbours.angle = 90;
  threeneighbours.inputEnabled = true;
  threeneighbours.events.onInputDown.add(threeneighboursevents, this);

  function threeneighboursevents(target, pointer){

      //console.log("threeneighbours");
      sosed = 3;

  }
  

  var fourneighbours = game.add.sprite(71.9,631,'fourneighbours');

  fourneighbours.scale.setTo(0.122, 0.122);
  fourneighbours.angle = 90;
  fourneighbours.inputEnabled = true;
  fourneighbours.events.onInputDown.add(fourneighboursevents, this);

  function fourneighboursevents(target, pointer){

      //console.log("fourneighbours");
      sosed = 4;

  }


    var backsprite = game.add.sprite(418.5,20,'backsprite');

  backsprite.scale.setTo(0.3, 0.3);
  backsprite.angle = 90;
  backsprite.inputEnabled = true;
  backsprite.events.onInputDown.add(backspriteevents, this);

  function backspriteevents(target, pointer){


      mainView.router.back();

      fixconnection = 1;
     

  }

//3 obj layers


//console.log(allgraphics);
  
  //my user function

  function checkfishsum(){

      if(fishnum == 1){
          return "fishka";
      }else if(fishnum == 5){
          return "fishka5";
      }else if(fishnum == 25){
          return "fishka25";
      }else if(fishnum == 100){
          return "fishka100";
      }else if(fishnum == 500){
          return "fishka500";
      }else if(fishnum == 1000){
          return "fishka1000";
      }
  }


  


  function getcoordinates(number){

    var coordinates = new Object();

    for(var l = 0;l < map.objects['Object Layer 2'].length;l++){

          if(number == map.objects['Object Layer 2'][l].name){
              coordinates.x = map.objects['Object Layer 2'][l].x - 16;
              coordinates.y = map.objects['Object Layer 2'][l].y - 13;
              return coordinates;
          }
      }

  }

  //copy to global

  globallayer = map.objects['Object Layer 2'];
  //copy to global


  //my user function

//phaser2

//ostanovilsya getcount and insert count and neighbours
  function clicknumbers(target, pointer){




      // alertmessage("on completion");

      // return false;

                    if(timerates == 1){

                              alertmessage('No more bets');           
                              return false;
                          }



    //proverka combinasii sosedei
              if(fixno == 1){

                  sosed = 1;

              }else if(fixntwo == 1){
                 sosed = 2;
              }else if(fixnthree == 1){
                  sosed = 3;
              }else if(fixnfour == 1){
                    sosed = 4;
              }
    //proverka combinasii sosedei

      var targetnumber = target.numbers;

      var countsum = 0;
      var nominal = checkfishsum(); // return path and type image

//check neighbours
      
      function setfish(coordinates,nominal,number){


          var newsavenom = allgraphics[number].paramsnominal;

          allgraphics[number].paramssum += fishnum;
          var newsum = allgraphics[number].paramssum;

          var g = 99;



          if((allgraphics[number].paramsclicked != 1) || (newsavenom != fishnum)){
              
              fishobj.number = game.add.sprite(coordinates.x, coordinates.y, nominal);    //add sprite
              fishobj.number.scale.setTo(0.11, 0.11);
              allgraphics[number].paramsnominal = fishnum;
              allgraphics[number].paramsclicked = 1;     //update click
              deletefish.push(fishobj.number);

              phaservariables = fishobj.number.width;

              var style = { font: "bold 10px Helvetica, sans-serif", fill: "#120E0E", wordWrap: true, wordWrapWidth: fishobj.number.width, align: "center" };    //add text
              text[number] = game.add.text(coordinates.x + 14, coordinates.y + 16, newsum, style);
              text[number].anchor.set(0.5);
              text[number].angle = 90;

              countnamenumbers.push(number);  //informasiya o spritah
              deletetext.push(text[number]);
              deletetextnums.push(number);



          }else{
            text[number].destroy();
            var style = { font: "bold 10px Helvetica, sans-serif", fill: "#120E0E", wordWrap: true, wordWrapWidth: fishobj.number.width, align: "center" };    //add text
              text[number] = game.add.text(coordinates.x + 14, coordinates.y + 16, newsum, style);
              text[number].anchor.set(0.5);
              text[number].angle = 90;
             

              for(var t = 0;t < deletetextnums.length;t++){

                  if(deletetextnums[t] == number){
                      deletetext[t] = text[number];
                  }
              }

              
          }
          
   
      }

      //console.log(targetnumber);

      if((targetnumber == "bigseries") || (targetnumber == "orphans") || (targetnumber == "smallseries") || (targetnumber == "zerospiel")){
        //phaser3
            if(targetnumber == "smallseries"){


                    var result = globalneirochecksum("bs");

                          if(!result){
                            return false;
                          }

                    smallseriesone();

            }else if(targetnumber == "bigseries"){
                  
                  

                   var result = globalneirochecksum("ss");

                          if(!result){
                            return false;
                          }

                    bigseriess();
                              
            }else if(targetnumber == "orphans"){
                  
                       var result = globalneirochecksum("orp");

                          if(!result){
                            return false;
                          }

                     orphanss();
                             
            }else if(targetnumber == "zerospiel"){

                    var result = globalneirochecksum("zs");

                          if(!result){
                            return false;
                          }

                  zerospiels();
             
            }

            
      }else{

              var neighbours = checkneighbours(Number(allgraphics[targetnumber].numbers));

              var oneplus = neighbours.oneplus;
              var onemin = neighbours.onemin;
              var twoplus = neighbours.twoplus;
              var twomin = neighbours.twomin;
              var threemin = neighbours.threemin;
              var threeplus = neighbours.threeplus;
              var fourplus = neighbours.fourplus;
              var fourmin = neighbours.fourmin;


              //console.log(fourmin);
              var lenneigh;

              //sosed
              if(sosed == 1){
                   lenneigh = [onemin,oneplus,targetnumber]; 
                   fixno = 0;
                   fixsosed = 0;

                  var result = globalneirochecksum("no");

                          if(!result){
                            return false;
                          }

              }else if(sosed == 2){
                   lenneigh = [onemin,oneplus,twoplus,twomin,targetnumber];  
                   fixntwo = 0;
                   fixsosed = 0;

                    var result = globalneirochecksum("ntwo");

                          if(!result){
                            return false;
                          }

              }else if(sosed == 3){
                    lenneigh = [onemin,oneplus,twoplus,twomin,threeplus,threemin,targetnumber]; 
                    fixnthree = 0;
                    fixsosed = 0;

                    var result = globalneirochecksum("nthree");

                          if(!result){
                            return false;
                          }

              }else if(sosed == 4){
                    lenneigh = [onemin,oneplus,twoplus,twomin,threeplus,threemin,fourplus,fourmin,targetnumber]; 
                    fixnfour = 0;
                    fixsosed = 0;

                    var result = globalneirochecksum("nf");

                          if(!result){
                            return false;
                          }
              }


              if(lenneigh == undefined){
                //alertmessage("select to neighbours");

                lenneigh = [onemin,oneplus,twoplus,twomin,targetnumber];  
              }

              globalneighbours(targetnumber,sosed);

              for(var k = 0;k < lenneigh.length;k++){
                      var coordinates = getcoordinates(lenneigh[k]);

                      setfish(coordinates,nominal,lenneigh[k]);

                      //console.log(coordinates);
                  }


        //check neighbours
              
              //insert count sum
               

                      if(globalsumx == 0){
                          for(var ggg = 0;ggg <= 36;ggg++){
                              arnumbercountphaser[ggg] = 0;
                          }
                      }

                       for(var yf = 0;yf < arnumber.length;yf++){

                            if(allgraphics[yf].paramssum != 0){

                                  var xxx = 0;

                                  if(arnumbercountphaser[yf] != undefined){

                                      var countg = arnumbercount[yf];
                                      xxx = countg - arnumbercountphaser[yf];
                                  }
                                  
                                  var vv = xxx + allgraphics[yf].paramssum;

                                      
                                      arnumbercount[yf] = 0;

                                      arnumbercount[yf] = vv;

                                  
                                  arnumbercountphaser[yf] = allgraphics[yf].paramssum;
                            }

                          }


              //insert count sum

      }
      //finish if


              



  }//finish click



  //layer.resizeWorld();


//mkr Aktobe, Almolikskay ulisa d 73

    

},//finish create







 update:function() {
    
    graphics.clear();

    if (poly.contains(game.input.x, game.input.y))
    {
        //graphics.beginFill(0xFF3300,0.001);
        
        graphics.beginFill(0xFF0000,0.01);
    }
    else
    {
        graphics.beginFill(0x00FFFF,0.01);
    }

    graphics.drawPolygon(poly.points);
    graphics.endFill();

    //usersum
  
    if(usersum != fixbalance){

    if(balancetext != undefined){
        balancetext.destroy();
    }
    
    fixbalance = usersum;

    var stylebalance = { font: "bold 14px Helvetica, sans-serif", fill: "#fcd5a6", wordWrap: true, wordWrapWidth: 150, align: "center" };    //add text
    balancetext = game.add.text(418, 50, "BALANCE " + usersum + " -AGP", stylebalance);
    // balancetext.anchor.set(0.5);
    balancetext.angle = 90;

    }
    //usersum
    //totalbet
    if(globalsumx != fixtotalbet){

      fixtotalbet = globalsumx;

      if(totalbet != undefined){
        totalbet.destroy();
      }

      var totalbetstyle = { font: "bold 14px Helvetica, sans-serif", fill: "#fcd5a6", wordWrap: true, wordWrapWidth: 150, align: "center" };    //add text
      totalbet = game.add.text(418, 500, "TOTAL BET " + globalsumx + " -AGP", totalbetstyle);
      // balancetext.anchor.set(0.5);
      totalbet.angle = 90;


    }
    //totalbet
 
},


render:function() {

    //game.debug.text(game.input.x + ' x ' + game.input.y, 32, 32);

}


};


function checkneighbours(number){

    var numb = 0;

    var neighnumbers = new Object();



    for(var i = 0;i < fullnumbers.length;i++){

              if(number == fullnumbers[i]){


                //vichisleniya dlya odnogo soseda
                  if(i + 1 > 36){
                      neighnumbers.oneplus = fullnumbers[i + 1 - 37]; //1 sosed s +
                  }else{
                      neighnumbers.oneplus = fullnumbers[i + 1];
                  }

                  if(i + 2 > 36){
                      neighnumbers.twoplus = fullnumbers[i + 2 - 37]; //2 sosed s +
                  }else{
                      neighnumbers.twoplus = fullnumbers[i + 2];
                  }

                  if(i + 3 > 36){
                      neighnumbers.threeplus = fullnumbers[i + 3 - 37]; //3 sosed s +
                  }else{
                      neighnumbers.threeplus = fullnumbers[i + 3];
                  }

                  if(i + 4 > 36){
                      neighnumbers.fourplus = fullnumbers[i + 4 - 37]; //4 sosed s +
                  }else{
                      neighnumbers.fourplus = fullnumbers[i + 4];
                  }

                  if(i - 1 < 0){
                      neighnumbers.onemin = fullnumbers[i - 1 + 37];
                  }else{
                      neighnumbers.onemin = fullnumbers[i - 1];
                  }

                  if(i - 2 < 0){
                      neighnumbers.twomin = fullnumbers[i - 2 + 37];
                  }else{
                      neighnumbers.twomin = fullnumbers[i - 2];
                  }

                  if(i - 3 < 0){
                      neighnumbers.threemin = fullnumbers[i - 3 + 37];
                  }else{
                      neighnumbers.threemin = fullnumbers[i - 3];
                  }

                  if(i - 4 < 0){
                      neighnumbers.fourmin = fullnumbers[i - 4 + 37];
                  }else{
                      neighnumbers.fourmin = fullnumbers[i - 4];
                  }

                //vichisleniya dlya odnogo soseda                  

                  return neighnumbers;
              }
          }


  }




