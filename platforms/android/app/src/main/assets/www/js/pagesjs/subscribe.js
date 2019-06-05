var lastId = 100000000000;
var olddata = new Array();
var startcounttwo = 0;
var pagesumtwo = 40;
var searchSqlrequesttwo = "";
var processSendCounttwo = 0;
$$(document).on('page:beforein', '.page[data-name="subscribe"]', function (e) {


      var email = getEmail();
      if(email != false){
        socket.emit('getSubscribers', {email:email});
      }

      olddata = new Array();

            $$('.infinite-scroll-content').on('infinite', function () {
              // Exit, if loading in progress
                    //console.log("sending");
                    if(processSendCounttwo == 1){
                      return false;
                    }

                    var em_searchtwo = localStorage.getItem("useremail");

                    if(em_searchtwo == 0){
                       em_searchtwo = 0;
                    }

                    //console.log(startcounttwo);
                    if(startcounttwo < 1){
                      return false;
                    }

                    var sendData = {
                      email:em_searchtwo,
                      id:lastId
                    };

                    //console.log(sendData);
                    socket.emit('getSubscribersCount', sendData);


                    processSendCounttwo = 1;
                    fixedsearchtwo = 2;
                    // Emulate 1s loading

            });



  });





    socket.on('getSubscribers', function(data){

              for(var i = 0;i < data.data.length;i++){
                if(data.data[i].id > lastId){
                    lastId = data.data[i].id;
                }
              }

              startcounttwo = lastId;

              olddata = data.data;

              ShowSubscribeContent(data.data);

          });

    socket.on('getSubscribersCount', function(data){

              processSendCounttwo = 0;

              for(var d = 0;d < data.data.length;d++){
                if(data.data[d].id < lastId){
                    lastId = data.data[d].id;
                }
              }

              console.log(lastId);

              for(var i = 0;i < data.data.length;i++){

                if(olddata.length > 0){
                  var fixfound = 0;
                  for(var j = 0;j < olddata.length;j++){
                      if(olddata[j].id == data.data[i].id){
                        fixfound = 1;
                      }
                  }

                  if(fixfound == 0){
                    olddata.push(data.data[i]);
                  }
                }else{
                  olddata.push(data.data[i]);
                }

              }

              startcounttwo = lastId;
              //console.log(lastId);

              ShowSubscribeContent(olddata);

          });
