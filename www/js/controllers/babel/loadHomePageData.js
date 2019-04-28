var homedeviceid = localStorage.getItem("deviceid");

$(".searchkvbutton").text("Найти");


function getHomeData(){
  socket.emit('homeStart', {deviceid:homedeviceid});
}

  getHomeData();


  setInterval(function(){
      getHomeData();
  },60000);






  function CheckPhoto(item){

      var path = 'n.jpg';

      //console.log(item.photo_path);

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

  function ShowData(props) {

      const items = props.items;

      const baseUrl = localStorage.getItem("baseurlimg2");

      const content = items.map((item) =>
        <div key={item.id} className="threeview" style={{ backgroundImage: "url("+ baseUrl + CheckPhoto(item) +")" }}></div>
      );

      return (

        <div className="row">
        <div col="100 ">
            <div className="hot-listings">
              Latest 40
            </div>
        </div>
        <div className="mainrow">{content}</div>

        </div>
      );
  }


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

        ReactDOM.render(
          <ShowData items={data.latest} />,
          document.getElementById('reactOb')
        );

});


function SendingData(data){
  ReactDOM.render(
    <ShowData items={data} />,
    document.getElementById('reactOb')
  );
}
