// setInterval(function(){
//   checkDiv_elem();
//   changeEffects();
// },1000);

// setInterval(function(){
//
//   const imgs = document.querySelectorAll('[data-src]');
//   imgs.forEach(img => {
//     observer.observe(img);
//   });
//
// },2000);


var startClass = 0;
var n1fix = 0;
function changeEffects(){

  var arClass = ["greyLights","greyLights2","greyLights3","greyLights4","greyLights5","greyLights6"]
  var elm = $(".mainrow");
  var elm2 = $(".greyLightsdefault");

  if(startClass > 0){
    elm.removeClass(arClass[startClass - 1]);
    if(n1fix == 1){
      elm2.removeClass(arClass[startClass - 1]);
    }

  }
  elm.addClass(arClass[startClass]);
  if(n1fix == 1){
    elm2.addClass(arClass[startClass]);
  }


  startClass++;

  if(startClass == 7){
    startClass = 0;
  }

}

function checkElem(name,positionX,positionY,pointName,element){

  if(name == "aChild"){

      //console.log("a_child" + "|" + positionX + "|" + positionY + "|" + pointName);
      $(".bChild").css("margin-top","45%");
      //var li = $(".a_child").parent().parent();

      var li = $(".myhidescrolledThree > li");

      li.each(function( index ) {
      //  console.log( index );


            $(this).css("width","82%");
            $(this).css("height","30vh");
            $(this).css('margin-bottom',"0vh");
            $(this).css('border-radius',"0px");

      });

      var lin = $(".myhidescrolledThreeN > li");

      lin.each(function( index ) {
      //  console.log( index );

            $(this).css("width","82%");
            $(this).css("height","30vh");
            $(this).css('margin-bottom',"0vh");
            $(this).css('border-radius',"0px");

      });


      var w = element.parentElement.parentElement.style.width;
      if(w != "84%"){
        element.parentElement.parentElement.style.width = "84%";
        element.parentElement.parentElement.style.height = "33vh";
        element.parentElement.parentElement.style.marginBottom = "-1.4vh";
        element.parentElement.parentElement.style.borderRadius = "5px";
      }

      var selec = element.children;
      //44%
      for(var i = 0;i < selec.length;i++){

        if(selec[i].className == "bChild"){
            selec[i].style.marginTop = "49%";
        }

      }









      //console.log(li);

  }

}


function checkDiv_elem(){

  var centerX = document.documentElement.clientWidth / 2;
  var centerX_point_1 = document.documentElement.clientWidth / 4;
  var centerX_point_2 = document.documentElement.clientWidth / 3;
  var centerX_point_3 = centerX + centerX_point_1;

  var centerY = document.documentElement.clientHeight / 2;
  var centerY_point_2 = document.documentElement.clientHeight / 3;
  var centerY_point_1 = document.documentElement.clientHeight / 4;
  var centerY_point_3 = centerY + centerY_point_1;

  var elem = document.elementFromPoint(centerX, centerY);
  var elem_dot_3 = document.elementFromPoint(centerX, centerY_point_3); //x center and y below in 1 position
  var elem_dot_2 = document.elementFromPoint(centerX, centerY_point_2); //x last dot and y
  var elem_dot_1 = document.elementFromPoint(centerX, centerY_point_1); //x last dot and y


  checkElem(elem_dot_1.className,centerX,centerY_point_3,"1y:center",elem_dot_1);
  checkElem(elem_dot_2.className,centerX,centerY_point_2,"2y:center",elem_dot_2);
  checkElem(elem.className,centerX,centerY,"3y:center",elem);
  checkElem(elem_dot_3.className,centerX,centerY_point_1,"4y:center",elem_dot_3);



  //console.log(centerX_point_1 + "|" + centerX_point_2 + "|" + centerX_point_3);
  //160|213.33333333333334|320|480
  //console.log(centerY_point_1 + "|" + centerY_point_2 + "|" + centerY + "|" + centerY_point_3);
  //console.log( elem.tagName + "|" + elem.className);
  //console.log( centerX + "|" + centerY);
  //console.log(document.documentElement.clientWidth, document.documentElement.clientHeight);


}
