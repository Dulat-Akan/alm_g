

//rab
//login
    


myApp.onPageBeforeInit('index2', function (page) {

    localStorage.setItem("baseurl5","http://almagames.mypsx.net/bakkara2/");




    var balance = localStorage.getItem("balance");
    localStorage.setItem("isbakkara","1");

    function apnut_tolko_1_raz() {
        if (!window.location.hash) {
            window.location = window.location;
            console.log("location = "+window.location);
            window.location.reload();
        }
    }
    
    $$('.back').on('click', function () {
            localStorage.setItem("isbakkara","0");
        });
   
    setTimeout("apnut_tolko_1_raz()", 100);
    console.log("location = "+window.location);
    var baseurl = localStorage.getItem("baseurl5"); 

    var myApps = new Framework7();
    $$('.open-bets').on('click', function () {
      myApps.popup('.popup-bets');
    });

    $$('.open-stats').on('click', function () {
      myApps.popup('.popup-stats');
    });
 

    $$('#vmm').on('click', function () {

        $("#ifrr").show();
        $("#cls").show();
        $("#move").show();
        $("#zoom").show();

        
    });
    $('#zoom').click(function(){

        /*var height = window.innerHeight;
        var width = window.innerWidth;
        console.log(height+" i "+width);

        $("#ifrr").height(height);
        $("#ifrr").width(width);


        $("#frameb").height(width);
        $("#frameb").width(height);

        $(".mediabox").height(width);
        $(".mediabox").width(height);*/

        $("#frameb").toggleClass('rotated');
        $("#ifrr").toggleClass('rotated2');
    });
 
    $.ajax({

        "type":"GET",
        "url":baseurl+"stats",    /*random restourants view*/

        dataType: "jsonp",
        crossDomain: true,

        "success":scsstat,
        "error":errorstat
    });
    function scsstat(result){
        var p11="01"; var p12 = "01"; var pa = "01"; var d11 = "01"; var d12 = "01"; var da = "01";
        var p112="01"; var p122 = "01"; var pa2 = "01"; var d112 = "01"; var d122 = "01"; var da2 = "01";
        var p113="01"; var p123 = "01"; var pa3 = "01"; var d113 = "01"; var d123 = "01"; var da3 = "01";
        var p114="01"; var p124 = "01"; var pa4 = "01"; var d114 = "01"; var d124 = "01"; var da4 = "01";
        var p115="01"; var p125 = "01"; var pa5 = "01"; var d115 = "01"; var d125 = "01"; var da5 = "01";
        
        localStorage.setItem("gameids",result[0][0].id);
        $("#n1").text(result[0][1].gameid);
        $("#w1").text(result[0][1].winner);
        
        $("#n2").text(result[0][2].gameid);
        $("#w2").text(result[0][2].winner);

        $("#n3").text(result[0][3].gameid);
        $("#w3").text(result[0][3].winner);
        
        $("#n4").text(result[0][4].gameid);
        $("#w4").text(result[0][4].winner);

        $("#n5").text(result[0][5].gameid);
        $("#w5").text(result[0][5].winner);

        if(result[0][1].p11 !=0)
            p11=result[0][1].p11;
        if(result[0][1].p12 !=0)
            p12=result[0][1].p12;
        if(result[0][1].d11 !=0)
            d11=result[0][1].d11;
        if(result[0][1].d12 !=0)
            d12=result[0][1].d12;
        if(result[0][1].pa !=0)
            pa=result[0][1].pa;
        if(result[0][1].da !=0)
            da=result[0][1].da;

        if(result[0][2].p11 !=0)
            p112=result[0][2].p11;
        if(result[0][2].p12 !=0)
            p122=result[0][2].p12;
        if(result[0][2].d11 !=0)
            d112=result[0][2].d11;
        if(result[0][2].d12 !=0)
            d122=result[0][2].d12;
        if(result[0][2].pa !=0)
            pa2=result[0][2].pa;
        if(result[0][2].da !=0)
            da2=result[0][2].da;

        if(result[0][3].p11 !=0)
            p113=result[0][3].p11;
        if(result[0][3].p12 !=0)
            p123=result[0][3].p12;
        if(result[0][3].d11 !=0)
            d113=result[0][3].d11;
        if(result[0][3].d12 !=0)
            d123=result[0][3].d12;
        if(result[0][3].pa !=0)
            pa3=result[0][3].pa;
        if(result[0][3].da !=0)
            da3=result[0][3].da;

        if(result[0][4].p11 !=0)
            p114=result[0][4].p11;
        if(result[0][4].p12 !=0)
            p124=result[0][4].p12;
        if(result[0][4].d11 !=0)
            d114=result[0][4].d11;
        if(result[0][4].d12 !=0)
            d124=result[0][4].d12;
        if(result[0][4].pa !=0)
            pa4=result[0][4].pa;
        if(result[0][4].da !=0)
            da4=result[0][4].da;

        if(result[0][5].p11 !=0)
            p115=result[0][5].p11;
        if(result[0][5].p12 !=0)
            p125=result[0][5].p12;
        if(result[0][5].d11 !=0)
            d115=result[0][5].d11;
        if(result[0][5].d12 !=0)
            d125=result[0][5].d12;
        if(result[0][5].pa !=0)
            pa5=result[0][5].pa;
        if(result[0][5].da !=0)
            da5=result[0][5].da;

        if(result[0][6].p11 !=0)
            p115=result[0][6].p11;
        if(result[0][6].p12 !=0)
            p125=result[0][6].p12;
        if(result[0][6].d11 !=0)
            d115=result[0][6].d11;
        if(result[0][6].d12 !=0)
            d125=result[0][6].d12;
        if(result[0][6].pa !=0)
            pa5=result[0][6].pa;
        if(result[0][6].da !=0)
            da5=result[0][6].da;



        $("#pp11").attr("src","img/cards/"+p11+".png");
        $("#pp12").attr("src","img/cards/"+p12+".png");
        $("#dd11").attr("src","img/cards/"+d11+".png");
        $("#dd12").attr("src","img/cards/"+d12+".png");
        $("#ppa").attr("src","img/cards/"+pa+".png");
        $("#dda").attr("src","img/cards/"+da+".png");

        $("#pp112").attr("src","img/cards/"+p112+".png");
        $("#pp122").attr("src","img/cards/"+p122+".png");
        $("#dd112").attr("src","img/cards/"+d112+".png");
        $("#dd122").attr("src","img/cards/"+d122+".png");
        $("#ppa2").attr("src","img/cards/"+pa2+".png");
        $("#dda2").attr("src","img/cards/"+da2+".png");

        $("#pp113").attr("src","img/cards/"+p113+".png");
        $("#pp123").attr("src","img/cards/"+p123+".png");
        $("#dd113").attr("src","img/cards/"+d113+".png");
        $("#dd123").attr("src","img/cards/"+d123+".png");
        $("#ppa3").attr("src","img/cards/"+pa3+".png");
        $("#dda3").attr("src","img/cards/"+da3+".png");

        $("#pp114").attr("src","img/cards/"+p114+".png");
        $("#pp124").attr("src","img/cards/"+p124+".png");
        $("#dd114").attr("src","img/cards/"+d114+".png");
        $("#dd124").attr("src","img/cards/"+d124+".png");
        $("#ppa4").attr("src","img/cards/"+pa4+".png");
        $("#dda4").attr("src","img/cards/"+da4+".png");

        $("#pp115").attr("src","img/cards/"+p115+".png");
        $("#pp125").attr("src","img/cards/"+p125+".png");
        $("#dd115").attr("src","img/cards/"+d115+".png");
        $("#dd125").attr("src","img/cards/"+d125+".png");
        $("#ppa5").attr("src","img/cards/"+pa5+".png");
        $("#dda5").attr("src","img/cards/"+da5+".png");


    }
    function errorstat(result){
         console.log('err stat'+result);
    }

function updatebets(){
    var isbakkara = localStorage.getItem("isbakkara");
    if(isbakkara==1){
        var userid =localStorage.getItem("userid");
        var data = {
            "userid":userid,    
        };

        $.ajax({
            "type":"GET",
            "url":baseurl+"updatebets",    /*random restourants view*/
            data: data,
            dataType: "jsonp",
            crossDomain: true,

            "success":ss5,
            "error":ee5,
        });

        function ss5(result){
            var s1,s2,s,s4,s5;
            if(result[0][0].status==2){
                s1='проиграло';
                $("#r11").text(s1);
            }
            if(result[0][0].status==1){
                s1='выиграло';
                $("#r12").text(s1);
            }
            if(result[0][0].status==0){
                s1='не расcчитано';
                $("#r13").text(s1);
            }
            if(result[0][1].status==2){
                s2='проиграло';
                $("#r21").text(s2);
            }
            if(result[0][1].status==1){
                s2='выиграло';
                $("#r22").text(s2);
            }
            if(result[0][1].status==0){
                s2='не расcчитано';
                $("#r23").text(s2);
            }

            if(result[0][2].status==2){
                s3='проиграло';
                $("#r31").text(s3);
            }
            if(result[0][2].status==1){
                s3='выиграло';
                $("#r32").text(s3);
            }
            if(result[0][2].status==0){
                s3='не расcчитано';
                $("#r33").text(s3);
            }
            if(result[0][3].status==2){
                s4='проиграло';
                $("#r41").text(s4);
            }
            if(result[0][3].status==1){
                s4='выиграло';
                $("#r42").text(s4);
            }
            if(result[0][3].status==0){
                s4='не расcчитано';
                $("#r43").text(s4);
            }

            if(result[0][4].status==2){
                s5='проиграло';
                $("#r51").text(s5);
            }
            if(result[0][4].status==1){
                s5='выиграло';
                $("#r52").text(s5);
            }
            if(result[0][4].status==0){
                s5='не расcчитано';
                $("#r53").text(s5);
            }


            if(result[0][0].event=='tie')
                b1='Ничья';
          
            if(result[0][1].event=='tie')
                b2='Ничья';
           
            if(result[0][2].event=='tie')
                b3='Ничья';

            if(result[0][3].event=='tie')
                b4='Ничья';

            if(result[0][4].event=='tie')
                b5='Ничья';


            if(result[0][0].event=='diller')
                b1='Диллер';
          
            if(result[0][1].event=='diller')
                b2='Диллер';
           
            if(result[0][2].event=='diller')
                b3='Диллер';

            if(result[0][3].event=='diller')
                b4='Диллер';

            if(result[0][4].event=='diller')
                b5='Диллер';

            if(result[0][0].event=='player')
                b1='Игрок';
          
            if(result[0][1].event=='player')
                b2='Игрок';
           
            if(result[0][2].event=='player')
                b3='Игрок';

            if(result[0][3].event=='player')
                b4='Игрок';

            if(result[0][4].event=='player')
                b5='Игрок';

            if(result[0][0].event=='pair_p')
                b1='Пара y игрока';
          
            if(result[0][1].event=='pair_p')
                b2='Пара y игрока';
           
            if(result[0][2].event=='pair_p')
                b3='Пара y игрока';

            if(result[0][3].event=='pair_p')
                b4='Пара y игрока';

            if(result[0][4].event=='pair_p')
                b5='Пара y игрока';

            if(result[0][0].event=='pair_d')
                b1='Пара y диллера';
          
            if(result[0][1].event=='pair_d')
                b2='Пара y диллера';
           
            if(result[0][2].event=='pair_d')
                b3='Пара y диллера';

            if(result[0][3].event=='pair_d')
                b4='Пара y диллера';

            if(result[0][4].event=='pair_d')
                b5='Пара y диллера';
            
            if(result[0][0].event=='insb')
                b1='Banker ins';
          
            if(result[0][1].event=='insb')
                b2='Banker ins';
           console.log("combin "+result[0][2].event);
            if(result[0][2].event=='insb')
                b3='Banker ins';

            if(result[0][3].event=='insb')
                b4='Banker ins';

            if(result[0][4].event=='insb')
                b5='Banker ins';

            if(result[0][0].event=='insp')
                b1='Player ins';
          
            if(result[0][1].event=='insp')
                b2='Player ins';
           
            if(result[0][2].event=='insp')
                b3='Player ins';

            if(result[0][3].event=='insp')
                b4='Player ins';

            if(result[0][4].event=='insp')
                b5='Player ins';
            $("#b1").text(b1);
            $("#b2").text(b2);
            $("#b3").text(b3);
            $("#b4").text(b4);
            $("#b5").text(b5);

            $("#s1").text(result[0][0].price+'тг');
            $("#s2").text(result[0][1].price+'тг');
            $("#s3").text(result[0][2].price+'тг');
            $("#s4").text(result[0][3].price+'тг');
            $("#s5").text(result[0][4].price+'тг');

            $("#k1").text(result[0][0].kef);
            $("#k2").text(result[0][1].kef);
            $("#k3").text(result[0][2].kef);
            $("#k4").text(result[0][3].kef);
            $("#k5").text(result[0][4].kef);

           

             console.log("stbts"+result[0][0].event);
             setTimeout(updatebets, 1000);
        }
        function ee5(result){
            console.log("asd");
            console.log(result[0][0].event);
        }
    }
}



    
    

    function updatebalance(){
        var isbakkara = localStorage.getItem("isbakkara");
        if(isbakkara==1){

            var userid =localStorage.getItem("userid");
            var data = {
                "userid":userid,    
            };

            $.ajax({
                "type":"GET",
                "url":baseurl+"balance",    /*random restourants view*/
                data: data,
                dataType: "jsonp",
                crossDomain: true,

                "success":ss4,
                "error":ee4,
            });

            function ss4(result){
                localStorage.setItem("balances",result);
                 $("#balance").text(result);
                 $("#balance1").attr("placeholder", result);
                 console.log("akwa"+result);
                 setTimeout(updatebalance, 1000);
            }
            function ee4(result){
                console.log("akwa");
                console.log(result);
            }
        }
    }

    function getstatus(){
        $.ajax({
            "type":"GET",
            "url":baseurl+"getstatus",    
            dataType: "jsonp",
            crossDomain: true,

            "success":ss5,
            "error":ee5,
        });

        function ss5(result){
            console.log("winner"+result);
            localStorage.setItem("winner",result);
        }
        function ee5(result){
            console.log("winner err"+result);
        }

    }
    $(".clicks").click(function(){
        var startvoice = $("#clickvoice")[0];
        startvoice.play();
    });

    function enablebets(){

        $.ajax({
            "type":"GET",
            "url":baseurl+"enablebets",    
            dataType: "jsonp",
            crossDomain: true,

            "success":ss6,
            "error":ee6,
        });

        function ss6(result){
            console.log(result);
            return result;
        }
        function ee6(result){
            console.log(result);
        }
    }

    function disablebets(){

        $.ajax({
            "type":"GET",
            "url":baseurl+"disablebets",    
            dataType: "jsonp",
            crossDomain: true,

            "success":ss7,
            "error":ee7,
        });

        function ss7(result){
            console.log(result);
            return result;
        }
        function ee7(result){
            console.log(result);
        }
    }

    setTimeout(updatebalance, 1000);


    setTimeout(updatebets, 1000);
    //add status and winner
    /*function addstatus(id,winner,pair_p,pair_d,pair_b,pair_r,v3){


        var big=0;

        if(v3!=0) 
            big=1;


        var data = {
            "id":id, 
            "winner":winner,
            "pair_p":pair_p,  
            "pair_d":pair_d,
            "pair_b":pair_b,
            "pair_r":pair_r,
            "big":big,        
        };
        $.ajax({
            type: 'GET',
            url: baseurl+"addstatus", 
            data: data,
            response: 'jsonp',
             "success":s2,
             "error":err2
        });
        function s2(result){
            console.log("event"+id+winner+pair_p+pair_d+pair_b+pair_r+v3);
        }
        function err2(result){
            console.log("event err"+id+winner+pair_p+pair_d+pair_b+pair_r+v3);
        }
    }*/
    function winner(id){

        var data = {
            "id":id,        
        };
        $.ajax({
            type: 'GET',
            url: baseurl+"getwinner", 
            data: data,
            response: 'jsonp',
            crossDomain: true,
             "success":s2,
             "error":err2
        });
        function s2(result){
            console.log("winner"+result);
        }
        function err2(result){
            console.log("winner err"+result);
        }
    }
    //get cards
    function testTimer(startTime) {
        setenable();
        var seconds = startTime;
        localStorage.setItem("timer1",1);
        $("#ifrr").contents().find("#randomid").remove();
        //отрисовываем время
        $("#status").text('До окончания ставок '+seconds+' секунд');
        //уменьшаем общее время на одну секунду
        startTime= startTime-1;
        if(startTime==14){
            
            getstatus();
            var winner = localStorage.getItem("winner");
                    myApp.alert("Победил: "+winner);
        }
        //смотрим время не закончилось
        if ( startTime  >= 0 ) {
            console.log("vse norm");
                //если нет то повторяем процедуру заново
                setenable();
               stopTimer  =  setTimeout(function(){testTimer(startTime); }, 1000);
               //если закончилось, то выводим сообщение на экран, и делаем кнопку запуска активной
        } else {
            setdisable();
            localStorage.setItem("timer1",1);
            localStorage.setItem("timer2",0);

            $("#ifrr").show();
            $("#cls").show();

            $("#status").text('Статус: раздаются карты.');
            //myApp.showTab('#tab11');
            //setTimeout(updatecards, 1000);
            myApp.closeModal('.modal.modal-in');
             
        }
    }
    $('#vid').on('click', function () {
       $("#ifrr").show();
    });
    function testTimer2(startTime) {

        $("#ifrr").hide();
            $("#cls").hide();

         $("#ifrr").contents().find("#randomid").remove();
        var seconds = startTime;
        //отрисовываем время
        localStorage.setItem("timer2",1);
        $("#status").text('До окончания ставок '+seconds+' секунд');
        //уменьшаем общее время на одну секунду
        startTime= startTime-1;
        //смотрим время не закончилось
        if ( startTime  >= 0 ) {
            
                //если нет то повторяем процедуру заново
               stopTimer  =  setTimeout(function(){testTimer2(startTime); }, 1000);
               //если закончилось, то выводим сообщение на экран, и делаем кнопку запуска активной
          } else {

            $("#ifrr").show();
            $("#cls").show();
            
            setdisable();
            localStorage.setItem("timer2",1);
            localStorage.setItem("timer3",0);
             $("#status").text('Статус: раздаются карты.');
             //myApp.showTab('#tab11');
             //setTimeout(updatecards, 1000);
             myApp.closeModal('.modal.modal-in');
           }
    }
    function testTimer3(startTime) {
        setenable();
         $("#ifrr").hide();
            $("#cls").hide();

         $("#ifrr").contents().find("#randomid").remove();
        var seconds = startTime;
        //отрисовываем время
        localStorage.setItem("timer3",1);
        $("#status").text('До окончания ставок '+seconds+' секунд');
        //уменьшаем общее время на одну секунду
        startTime= startTime-1;
        //смотрим время не закончилось
        if ( startTime  >= 0 ) {
            
            setenable();
                //если нет то повторяем процедуру заново
                
               stopTimer  =  setTimeout(function(){testTimer3(startTime); }, 1000);
               //если закончилось, то выводим сообщение на экран, и делаем кнопку запуска активной
          } else {
            $("#ifrr").show();
            $("#cls").show();
         
            localStorage.setItem("timer3",1);
            localStorage.setItem("timer1",0);
             $("#status").text('Статус: раздаются карты.');
             //myApp.showTab('#tab11');
             //setTimeout(updatecards, 1000);
             myApp.closeModal('.modal.modal-in');
             
           }
    }


    localStorage.setItem("timer1",0);
    localStorage.setItem("timer2",0);
    localStorage.setItem("timer3",0);
    $('#cls').on('click', function () {
        $("#ifrr").hide();
        $("#cls").hide();
    });

    

    function updatecards(){
        var isbakkara = localStorage.getItem("isbakkara");
        if(isbakkara==1){
        console.log("nrom");
        var timer2 =  localStorage.getItem("timer2");
        var timer1 = localStorage.getItem("timer1");
        var timer3 = localStorage.getItem("timer3");
        $.ajax({
            "type":"GET",
            "url":baseurl+"index",    /*random restourants view*/

            dataType: "jsonp",
            crossDomain: true,

            "success":scscrds,
            "error":errorcrds
        });
        
        
        function scscrds(result){

            localStorage.setItem("gameids",result[0][0].id);
            timer2 = localStorage.getItem("timer2");
            timer1 = localStorage.getItem("timer1");
            timer3 = localStorage.getItem("timer3");
console.log("norrm");

            var pair_p =0; var pair_d=0; var insp=0; var insb=0; var big=0; 
            var p11="01"; var p12 = "01"; var pa = "01"; var d11 = "01"; var d12 = "01"; var da = "01";
            if(result[0][0].status==0){
                var st1, st2, st3, st4;
                if(result[0][0].comb==0){
                    
                    
                    if(timer1==0)
                    testTimer(15); 
                }

                if(result[0][0].comb==1){
                    winner(result[0][0].id);
                    setdisable();
                    localStorage.setItem("timer1",1);
                    $("#status").text('Статус: раздается карта игроку.');
                    //myApp.showTab('#tab11');
                    myApp.closeModal('.modal.modal-in');  
                }

                if(result[0][0].comb==2){
                    setdisable();
                }

                if(result[0][0].comb==3){
                    setdisable();
                    localStorage.setItem("timer2",1);
                    $("#status").text('Статус: раздается карта диллеру.');
                    //myApp.showTab('#tab11');
                    myApp.closeModal('.modal.modal-in');  
                }

                if(result[0][0].comb==4){
                    setdisable();
                     
                }
                if(result[0][0].comb==5){
                    setdisable();
                     
                }
                if(result[0][0].comb==6){
                    setdisable();
                     
                }
                if(result[0][0].comb==7){
                    if(timer2==0)
                    testTimer2(15);
                    localStorage.setItem("timer2",1);
                    setdisable();
                    if(result[0][0].insb!=0){
                        $("#insb").removeAttr('disabled');
                        $("#insb_k").text(result[0][0].insb);
                    }

                    if(result[0][0].insp!=0){
                        $("#insp").removeAttr('disabled');
                        $("#insp_k").text(result[0][0].insp);
                    }
            
                    //myApp.showTab('#tab11'); 
                }

                if(result[0][0].comb==8){
                    setdisable();
                    localStorage.setItem("timer3",1);
                    //$("#status").text('Победитель: ');
                    //myApp.showTab('#tab11');
                    myApp.closeModal('.modal.modal-in');  
                }

                if(result[0][0].evet!='live')

                if(result[0][0].p11>0)
                    p11 = result[0][0].p11;
                if(result[0][0].p12>0)
                    p12 = result[0][0].p12;
                if(result[0][0].d11>0)
                    d11 = result[0][0].d11;
                if(result[0][0].d12>0)
                    d12 = result[0][0].d12;
                if(result[0][0].pa>0)
                    pa = result[0][0].pa;
                if(result[0][0].da>0)
                    da = result[0][0].da;

                $("#p11").attr("src","img/cards/"+p11+".png");
                $("#p12").attr("src","img/cards/"+p12+".png");
                $("#d11").attr("src","img/cards/"+d11+".png");
                $("#d12").attr("src","img/cards/"+d12+".png");
                $("#pa" ).attr("src","img/cards/"+pa+".png");
                $("#da" ).attr("src","img/cards/"+da+".png");


                console.log("combb "+result[0][0].comb);
                
                

                                       
               
            }
            console.log('karti'+result[1]+"22");
            setTimeout(updatecards, 1000);
        }
        function errorcrds(result){
            console.log(result);
            console.log("oshibka karti");
        }
    }
    }

    setTimeout(updatecards, 1000);

    function setdisable(){
            $("#p1").attr('disabled',true);
            $("#d").attr('disabled',true);
            $("#draw").attr('disabled',true);
            $("#pair_p").attr('disabled',true);
            $("#pair_d").attr('disabled',true);
            $("#insp").attr('disabled',true);
            $("#insb").attr('disabled',true);
            $("#small").attr('disabled',true);
            $("#big").attr('disabled',true);

    }
    function setenable(){
            $("#p1").removeAttr('disabled');
            $("#d").removeAttr('disabled');
            $("#draw").removeAttr('disabled');
            $("#pair_p").removeAttr('disabled');
            $("#pair_d").removeAttr('disabled');
            $("#insp").removeAttr('disabled');
            $("#insb").removeAttr('disabled');
            $("#small").removeAttr('disabled');
            $("#big").removeAttr('disabled');

    }
    
       // end get cards
        var userid =localStorage.getItem("userid"); 
        var gameids =localStorage.getItem("gameids");
    $('#p1').on('click', function () {

        myApp.prompt('Выиграет игрок: '+$("#p1_k").text()+'<br>Сумма ставки', function (value) {
            var data = {
                "event":'player',
                "kef":$("#p1_k").text(),
                "gameid":gameids,
                "price":value,
                "userid":userid,//localStorage.getItem("userid"),
            };
            var balances = localStorage.getItem("balances"); 
            value = parseInt(value);
            if(value<=balances && value>0){
                $.ajax({
                    type: 'GET',
                    url: baseurl+"bets", 
                    data: data,
                    response: 'jsonp',
                    success: function(result){
                        //console.log(result);
                    }
                });
           

                myApp.alert('Выиграет игрок: '+$("#p1_k").text()+'<br> Сумма ставки: ' + value);
            }else{
                myApp.alert("Нехватает средств.");
            }
        });
    });
    
    $('#d').on('click', function () {
        myApp.prompt('Выиграет диллер: '+$("#d_k").text()+'<br> Сумма ставки', function (value) {
            var data = {
                "event":'diller',
                "kef":$("#d_k").text(),
                "gameid":gameids,
                "price":value,
                "userid":userid,//localStorage.getItem("userid"),
            };
            var balances = localStorage.getItem("balances"); 
            value = parseInt(value);
            if(value<=balances && value>0){
            $.ajax({
                type: 'GET',
                url: baseurl+"bets", 
                data: data,
                response: 'jsonp',
                success: function(result){
                    //console.log(result);
                }
            });
            myApp.alert('Выиграет диллер: '+$("#d_k").text()+' <br> Сумма ставки' + value);
            }else{
                myApp.alert("Нехватает средств.");
            }
        });
    });
    
    $('#draw').on('click', function () {
        myApp.prompt('Ничья: '+$("#draw_k").text()+'<br> Сумма ставки', function (value) {

            var data = {
                "event":'tie',
                "kef":$("#draw_k").text(),
                "gameid":gameids,
                "price":value,
                "userid":userid,//localStorage.getItem("userid"),
            };
            var balances = localStorage.getItem("balances"); 
            value = parseInt(value);
            if(value<=balances && value>0){
            $.ajax({
                type: 'GET',
                url: baseurl+"bets", 
                data: data,
                response: 'jsonp',
                success: function(result){
                    //console.log(result);
                }
            });

            myApp.alert('Ничья: '+$("#draw_k").text()+'<br> Сумма ставки' + value);
            }else{
                myApp.alert("Нехватает средств.");
            }
        });
    });
    
    $('#pair_p').on('click', function () {
        myApp.prompt('Пара игрока: '+$("#pair_p_k").text()+'<br> Сумма ставки', function (value) {
            var userid = localStorage.getItem("userid");
            var data = {
                "event":'pair_p',
                "kef":$("#pair_p_k").text(),
                "gameid":gameids,
                "price":value,
                "userid":userid,//localStorage.getItem("userid"),
            };
            var balances = localStorage.getItem("balances"); 
            value = parseInt(value);
            if(value<=balances && value>0){
            $.ajax({
                type: 'GET',
                url: baseurl+"bets", 
                data: data,
                response: 'jsonp',
                success: function(result){
                    //console.log(result);
                }
            });
            myApp.alert('Пара игрока: '+$("#pair_p_k").text()+' <br> Сумма ставки' + value);
            }else{
                myApp.alert("Нехватает средств.");
            }
        });
    });
    
    $('#pair_d').on('click', function () {
        myApp.prompt('Пара диллера: '+$("#pair_d_k").text()+' <br> Сумма ставки', function (value) {
            var userid = localStorage.getItem("userid");
            var data = {
                "event":'pair_d',
                "kef":$("#pair_d_k").text(),
                "gameid":gameids,
                "price":value,
                "userid":userid,//localStorage.getItem("userid"),
            };
            var balances = localStorage.getItem("balances"); 
            value = parseInt(value);
            if(value<=balances && value>0){
            $.ajax({
                type: 'GET',
                url: baseurl+"bets", 
                data: data,
                response: 'jsonp',
                success: function(result){
                    //console.log(result);
                }
            });
            myApp.alert('Пара диллера: '+$("#pair_d_k").text()+' <br> Сумма ставки' + value);
            }else{
                myApp.alert("Нехватает средств.");
            }
        });
    });
    
     $('#insp').on('click', function () {
        var userid = localStorage.getItem("userid");
        myApp.prompt('Player insurance: '+$("#insp_k").text()+' <br> Сумма ставки', function (value) {
            var data = {
                "event":'insp',
                "kef":$("#insp_k").text(),
                "gameid":gameids,
                "price":value,
                "userid":userid,
            };
            var balances = localStorage.getItem("balances"); 
            value = parseInt(value);
            if(value<=balances && value>0){
            $.ajax({
                type: 'GET',
                url: baseurl+"bets", 
                data: data,
                response: 'jsonp',
                success: function(result){
                    //console.log(result);
                }
            });
            myApp.alert('Player insurance: '+$("#insp_k").text()+' <br> Сумма ставки' + value);
            }else{
                myApp.alert("Нехватает средств.");
            }
        });
    });
    
    $('#insb').on('click', function () {
        var userid = localStorage.getItem("userid");
        myApp.prompt('Banker insurance: "'+$("#insb_k").text()+'" <br> Сумма ставки', 'Almagames', function (value) {
            var data = {
                "event":'insb',
                "kef":$("#insb_k").text(),
                "gameid":gameids,
                "price":value,
                "userid":userid,
            };
            var balances = localStorage.getItem("balances"); 
            value = parseInt(value);
            if(value<=balances && value>0){
            $.ajax({
                type: 'GET',
                url: baseurl+"bets", 
                data: data,
                response: 'jsonp',
                success: function(result){
                    //console.log(result);
                }
            });
            myApp.alert('Banker insurance: '+$("#insb_k").text()+' <br> Сумма ставки' + value);
            }else{
                myApp.alert("Нехватает средств.");
            }
        });
    });
    
    $('#small').on('click', function () {
        var userid = localStorage.getItem("userid");
        myApp.prompt('Малая: '+$("#small_k").text()+' <br> Сумма ставки', function (value) {

            var data = {
                "event":'pair_a',
                "kef":$("#pair_a_k").text(),
                "gameid":gameids,
                "price":value,
                "userid":userid,//localStorage.getItem("userid"),
            };
            var balances = localStorage.getItem("balances"); 
            value = parseInt(value);
            if(value<=balances && value>0){
            $.ajax({
                type: 'GET',
                url: baseurl+"bets", 
                data: data,
                response: 'jsonp',
                success: function(result){
                    //console.log(result);
                }
            });
            myApp.alert('Малая: '+$("#small_k").text()+' <br> Сумма ставки' + value);
            }else{
                myApp.alert("Нехватает средств.");
            }
        });
    });
    
    $('#big').on('click', function () {
        var userid = localStorage.getItem("userid");
        myApp.prompt('Большая: '+$("#big_k").text()+' <br> Сумма ставки', function (value) {

            var data = {
                "event":'pair_a',
                "kef":$("#pair_a_k").text(),
                "gameid":gameids,
                "price":value,
                "userid":userid,//localStorage.getItem("userid"),
            };
            var balances = localStorage.getItem("balances"); 
            value = parseInt(value);
            if(value<=balances && value>0){
            $.ajax({
                type: 'GET',
                url: baseurl+"bets", 
                data: data,
                response: 'jsonp',
                success: function(result){
                    //console.log(result);
                }
            });
            myApp.alert('Большая: '+$("#big_k").text()+' <br> Сумма ставки' + value);
            }else{
                myApp.alert("Нехватает средств.");
            }
        });
    });
        var baseurl = localStorage.getItem("baseurl5");
        var baseurlimg = localStorage.getItem("baseurlimg");

    
   



});