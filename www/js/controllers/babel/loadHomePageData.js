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

  if(useremailsearch == 0){
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


var number = 0;
var arrayofImage = ["n.png","n2.png","n3.jpg","n4.jpg","n5.jpg","n6.png","n7.jpg","n8.jpg","n9.jpg","n10.png"];

  function CheckPhoto(item){

      var path = "n.png";

      if(number){
          path = arrayofImage[number];
      }

      number++;

      if(number == 10){
        number = 0;
      }

      try{
        if(item.photo_path){
          if(item.photo_path != path){

                    if(item.photo_path.photo_path[0]){
                      path = item.photo_path.photo_path[0];
                    }


          }
        }
      }catch(e){

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
          <li key={item.id}  className="greyLightsdefault">

            <a>
                <div className="header-photo" onClick={(e) => this.navigateToDetail(item, e)}>
                  <img  src={baseUrl + CheckPhoto(item)} height="100%" width="100%"></img>
                </div>
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
                  Премиум публикации
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


  function ShowUniversal(props) {

      const items = props.items;

      const desc = props.desc;

      const baseUrl = localStorage.getItem("baseurlimg2");

      const content = items.map((item) =>
          <li key={item.id}>

            <a>
                <div className="header-photo" onClick={(e) => this.backAndnavigateToDetail(item, e)}>
                  <img  src={baseUrl + CheckPhoto(item)} height="100%" width="100%"></img>
                </div>
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
                  {desc}
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
                    <li key={item.id}  className="greyLightsdefault">
                      <a>
                          <div className="aChild" onClick={(e) => this.navigateToDetail(item, e)}>
                          <img  src={baseUrl + CheckPhoto(item)} height="100%" width="100%"></img>
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
              Голд публикации
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


  function openPhotoBrowser(item,e){
      myPhotoBrowserStandalone.open();
  }

  function ShowN1(props) {

      const items = props.items;

      const baseUrl = localStorage.getItem("baseurlimg2");

      const content = items.map((item) =>
                    <li key={item.id}  className="greyLightsdefault">
                      <a>
                          <div className="aChild" onClick={(e) => this.openPhotoBrowser(item, e)} >
                                <img  src={baseUrl + item.url} height="100%" width="100%"></img>
                          </div>
                      </a>
                    </li>
      );

      return (

        <div className="row ">

          <div className="col-100">

            <div className="globThree">
                <ul className="myhidescrolledThreeN">
                    {content}
                </ul>
            </div>

          </div>
          </div>
      );
  }

  var senditem = new Object();

  function navigateToDetail(item,e) {

    var check = checkAuthorize();

    if(check == true){
      senditem = item;
      router.navigate({ name: 'n1'});

    }else{
      router.navigate({ name: 'login' });
    }

  }

  function backAndnavigateToDetail(item,e) {
    senditem = item;
    router.back();

    setTimeout(function(){
      router.navigate({ name: 'n1' });
    },1500);

  }
//xx
  function ShowData(props) {

      const items = props.items;

      const baseUrl = localStorage.getItem("baseurlimg2");

      const content = items.map((item) =>
        <div key={item.id} className="threeview" onClick={(e) => this.navigateToDetail(item, e)} >
            <img  src={baseUrl + CheckPhoto(item)} height="100%" width="100%"></img>
        </div>
      );

      return (

        <div className="row">
        <div col="100 ">
            <div className="hot-listings">

            </div>
        </div>
        <div className="mainrow greyLights">{content}</div>

        </div>
      );
  }

  function CheckContactUser(item){
    var useremailsearch = localStorage.getItem("useremail");

    if(useremailsearch == 0){
       useremailsearch = 0;
    }

    if(useremailsearch == item.toUser){
      return item.fromUser;
    }else{
      return item.toUser;
    }
  }

  function getUserEmail(){
    var useremailsearch = localStorage.getItem("useremail");

    if(useremailsearch == 0){
      useremailsearch = 0;
      return useremailsearch;
    }else{
      return useremailsearch;
    }
  }

  function navigateToMessage(item,e){

    var check = checkAuthorize();

    if(check == true){

      var useremailsearch = localStorage.getItem("useremail");

      if(useremailsearch == item.toUser){
        localStorage.setItem("toEmail",item.fromUser);
      }else{
        localStorage.setItem("toEmail",item.toUser);
      }

      localStorage.setItem("toId","20");

      router.navigate({ name: 'message' });

    }else{
      router.navigate({ name: 'login' });
    }

  }


  function ContactData(props) {

      const items = props.items;

      const baseUrl = localStorage.getItem("baseurlimg2");

      const content = items.map((item) =>
            <div key={item.id} onClick={(e) => this.navigateToMessage(item, e)} className="main_list">
              <div className="pleft_block">

                <div className="pleft_block_1" style={{ backgroundImage: "url(" + item.image_url +")" }}>
                </div>
                <div className="pleft_block_2">
                      <i  className="mysize material-icons">
                      fiber_manual_record
                      </i>
                </div>
              </div>
              <div className="pright_block">

                  <div className="pright_block_1">
                    <div className="pright_block_1_2">
                      { CheckContactUser(item) }
                    </div>
                    <div className="pright_block_1_3">{item.date}</div>
                  </div>
                  <div className="pright_block_2">
                    <div className="pright_block_2_1">{item.message}</div>
                    {
                      item.fromUser != getUserEmail() && item.count != 0  &&
                      <div className="pright_block_2_2">
                        {item.count}
                      </div>
                    }

                  </div>

              </div>
          </div>
      );

      return content;
  }


var latestid = 0;


socket.on('homeStart', function(data){

        //console.log(data);

        ReactDOM.render(
          <ShowGold items={data.gold} />,
          document.getElementById('reactGold')
        );

        ReactDOM.render(
          <ShowPremium items={data.premium} />,
          document.getElementById('reactPremium')
        );


        setTimeout(function(){

          homestarted = 1;
          ReactDOM.render(
            <ShowData items={data.latest} />,
            document.getElementById('reactOb')
          );

          tempmassivdata = data.latest;
          startcount = data.latestid;
          searchType = "usually";
        },4000);


        //console.log(startcount);

        // ReactDOM.render(
        //   <ShowDataUpdateClass items={data.latest} />,
        //   document.getElementById('reactOb')
        // );
        $(".gifloader").hide();

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

        if(tempmassivdata.length > 250){
          tempmassivdata = tempmassivdata.splice(0,pagesum);
        }
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

  $(".gifloader").hide();
}

function ShowUserContent(data){

  if(data.length > 0){
    ReactDOM.render(
      <ShowUniversal items={data} desc={'User suggestion'} />,
      document.getElementById('userAds')
    );
  }
  $(".gifloader").hide();
}

function ShowUniversalContent(data,id){

  if(data.length > 0){
    ReactDOM.render(
      <ShowUniversal items={data} desc={'User subscribers'} />,
      document.getElementById(id)
    );
  }
  $(".gifloader").hide();
}

function ShowSubscribeContent(data){

  if(data.length > 0){
    ReactDOM.render(
      <ShowData items={data} />,
      document.getElementById('reactSubscribe')
    );
  }
  $(".gifloader").hide();
}
function ShowFavoriteContent(data){

  if(data.length > 0){
    ReactDOM.render(
      <ShowData items={data} />,
      document.getElementById('reactFavorite')
    );
  }
  $(".gifloader").hide();
}

function RenderContactList(data){
  if(data.length > 0){
    ReactDOM.render(
      <ContactData items={data} />,
      document.getElementById('contactData')
    );
  }
  $(".gifloader").hide();
}

function RenderN1(data){
  if(data.length > 0){
    ReactDOM.render(
      <ShowN1 items={data} />,
      document.getElementById('showN1')
    );
  }

  $(".gifloader").hide();
}
