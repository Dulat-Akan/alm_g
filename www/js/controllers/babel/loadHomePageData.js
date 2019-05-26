var homedeviceid = localStorage.getItem("deviceid");

var fixedsearch = 0;
var tempsearchdata = new Object();
var tempmassivdata = new Array();


$(".searchkvbutton").text("Найти");


function getHomeData(){
  socket.emit('homeStart', {deviceid:homedeviceid});
}

function getSearchData(){
  var useridentificatorsearch = localStorage.getItem("useridentificator");

  var useremailsearch = localStorage.getItem("useremail");

  if(useridentificatorsearch == 0){
     useridentificatorsearch = 0;
     useremailsearch = 0;
  }

  //console.log(tempsearchdata);

  socket.emit('searchData', {email:useremailsearch,formdata:tempsearchdata});
}


  getHomeData();

  setInterval(function(){

      if(fixedsearch == 0){
        getHomeData();
      }else if(fixedsearch == 1){
        getSearchData();
      }else if(fixedsearch == 2){

      }else if(fixedsearch == 4){

      }

//  },10000);
  },60000);






  function CheckPhoto(item){

      var path = 'n.jpg';

      //console.log(item.id);

      if(item.photo_path){
        if(item.photo_path != path){

                  path = item.photo_path.photo_path[0];

        }
      }


      return path;
  }

  function setReiting() {

    var min = 3;
    var max = 5;

    return Math.round(Math.random() * (max - min) + min);

  }



  function ShowPremium(props) {

      const items = props.items;

      const baseUrl = localStorage.getItem("baseurlimg2");

      const content = items.map((item) =>
          <li key={item.id}>

            <a>
                <div className="header-photo" style={{ backgroundImage: "url("+ baseUrl + CheckPhoto(item) +")" }}></div>
                <div className="photo-description">
                    <div className="header-text">{item.zagolovok}</div>
                    <div className="small-text">{item.opisanie}</div>
                    <div className="stars-line">

                      <div className="stars-line-child">
                          <i className="material-icons">
                          star
                          </i>
                          <i className="material-icons">
                          star
                          </i>
                          <i className="material-icons">
                          star
                          </i>
                          <i className="material-icons">
                          star
                          </i>
                          <i className="material-icons">
                          star_border
                          </i>
                      </div>
                      <div className="stars-reiting">{setReiting()}.0</div>

                    </div>
                </div>
            </a>
          </li>
      );

      return (

        <div className="row">

            <div col="100">
                <div className="hot-listings">
                  Premium listings
                </div>
            </div>

            <div className="col-100">
              <div className="glob">
                  <ul className="myhidescrolled">
                      {content}
                  </ul>
              </div>
            </div>

        </div>

      );
  }

  function ShowGold(props) {

      const items = props.items;

      const baseUrl = localStorage.getItem("baseurlimg2");

      const content = items.map((item) =>
                    <li key={item.id}>
                      <a>
                          <div className="aChild" style={{ backgroundImage: "url("+ baseUrl + CheckPhoto(item) +")" }}>
                                <div className="bChild">
                                    <div className="headT">
                                          {item.zagolovok}
                                    </div>

                                    <div className="smText">
                                          {item.opisanie}
                                    </div>

                                </div>
                          </div>
                      </a>
                    </li>
      );

      return (

        <div className="row Mn">

        <div col="100">
            <div className="hot-listings">
              Gold listings
            </div>
        </div>

          <div className="col-100">

            <div className="globThree">
                <ul className="myhidescrolledThree">
                    {content}
                </ul>
            </div>

          </div>
          </div>
      );
  }

  var senditem = new Object();

  function navigateToDetail(item,e) {
    console.log(item);
    senditem = item;
    router.navigate({ name: 'n1' });
  }

  function ShowData(props) {

      const items = props.items;

      const baseUrl = localStorage.getItem("baseurlimg2");

      const content = items.map((item) =>
        <div key={item.id} className="threeview" onClick={(e) => this.navigateToDetail(item, e)} style={{ backgroundImage: "url("+ baseUrl + CheckPhoto(item) +")" }}></div>
      );

      return (

        <div className="row">
        <div col="100 ">
            <div className="hot-listings">

            </div>
        </div>
        <div className="mainrow">{content}</div>

        </div>
      );
  }


var latestid = 0;


socket.on('homeStart', function(data){

        console.log(data);

        ReactDOM.render(
          <ShowGold items={data.gold} />,
          document.getElementById('reactGold')
        );

        ReactDOM.render(
          <ShowPremium items={data.premium} />,
          document.getElementById('reactPremium')
        );
        
        // ReactDOM.render(
        //   <ShowPremium items={data.premium} />,
        //   document.getElementById('userAds')
        // );



        ReactDOM.render(
          <ShowData items={data.latest} />,
          document.getElementById('reactOb')
        );

        tempmassivdata = data.latest;
        startcount = data.latestid;
        searchType = "usually";

        console.log(startcount);

        // ReactDOM.render(
        //   <ShowDataUpdateClass items={data.latest} />,
        //   document.getElementById('reactOb')
        // );


});





function SendingData(data){





  if(clearItems == 1){
      tempmassivdata = new Array();
      clearItems = 0;
  }

  for(var i = 0;i < data.length;i++){

    if(tempmassivdata.length > 0){
      var fixfound = 0;
      for(var j = 0;j < tempmassivdata.length;j++){
          if(tempmassivdata[j].id == data[i].id){
            fixfound = 1;
          }
      }

      if(fixfound == 0){
        tempmassivdata.push(data[i]);
      }
    }else{
      tempmassivdata.push(data[i]);
    }

  }

//  setTimeout(function(){
    ReactDOM.render(
      <ShowData items={tempmassivdata} />,
      document.getElementById('reactOb')
    );
//  },500);







  //startcount = data.latestid;
  //console.log(startcount);
}
