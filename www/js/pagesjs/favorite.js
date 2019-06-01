var lastIdfavorite = 100000000000;
var oldfavoritedata = new Array();
var startcounttwofavorite = 0;
var pagesumtwofavorite = 40;
var searchSqlrequesttwofavorite = "";
var processSendCounttwofavorite = 0;

$$(document).on('page:beforein', '.page[data-name="favorite"]', function (e){


      var email = getEmail();
      if(email != false){
        //console.log("send");
        socket.emit('getFavorites', {email:email});
      }

      oldfavoritedata = new Array();

            $$('.infinite-scroll-content').on('infinite', function () {
              // Exit, if loading in progress
                    //console.log("sending");
                    if(processSendCounttwofavorite == 1){
                      return false;
                    }

                    var em_searchtwo = localStorage.getItem("useremail");

                    if(em_searchtwo == 0){
                       em_searchtwo = 0;
                    }

                    //console.log(startcounttwofavorite);
                    if(startcounttwofavorite < 1){
                      return false;
                    }

                    var sendData = {
                      email:em_searchtwo,
                      id:lastIdfavorite
                    };

                    //console.log(sendData);
                    socket.emit('getFavoritesCount', sendData);


                    processSendCounttwofavorite = 1;
                    fixedsearchtwo = 2;
                    // Emulate 1s loading

            });



  });





    socket.on('getFavorites', function(data){

              for(var i = 0;i < data.data.length;i++){
                if(data.data[i].id < lastIdfavorite){
                    lastIdfavorite = data.data[i].id;
                }
              }



              startcounttwofavorite = lastIdfavorite;

              oldfavoritedata = data.data;

              ShowFavoriteContent(data.data);

          });

    socket.on('getFavoritesCount', function(data){

              processSendCounttwofavorite = 0;

              for(var d = 0;d < data.data.length;d++){
                if(data.data[d].id > lastIdfavorite){
                    lastIdfavorite = data.data[d].id;
                }
              }

              for(var i = 0;i < data.data.length;i++){

                if(oldfavoritedata.length > 0){
                  var fixfound = 0;
                  for(var j = 0;j < oldfavoritedata.length;j++){
                      if(oldfavoritedata[j].id == data.data[i].id){
                        fixfound = 1;
                      }
                  }

                  if(fixfound == 0){
                    oldfavoritedata.push(data.data[i]);
                  }
                }else{
                  oldfavoritedata.push(data.data[i]);
                }

              }

              startcounttwofavorite = lastIdfavorite;
              //console.log(lastIdfavorite);

              ShowFavoriteContent(oldfavoritedata);

          });
