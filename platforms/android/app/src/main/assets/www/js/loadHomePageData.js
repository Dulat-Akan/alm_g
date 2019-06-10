var homedeviceid = localStorage.getItem("deviceid");

var fixedsearch = 0;
var tempsearchdata = new Object();
var tempmassivdata = new Array();

$(".searchkvbutton").text("Найти");

function getHomeData() {
  socket.emit('homeStart', { deviceid: homedeviceid });
}

function getSearchData() {
  var useridentificatorsearch = localStorage.getItem("useridentificator");

  var useremailsearch = localStorage.getItem("useremail");

  if (useremailsearch == 0) {
    useremailsearch = 0;
  }

  //console.log(tempsearchdata);

  socket.emit('searchData', { email: useremailsearch, formdata: tempsearchdata });
}

getHomeData();

setInterval(function () {

  if (fixedsearch == 0) {
    getHomeData();
  } else if (fixedsearch == 1) {
    getSearchData();
  } else if (fixedsearch == 2) {} else if (fixedsearch == 4) {}

  //  },10000);
}, 60000);

var number = 0;
var arrayofImage = ["n.png", "n2.png", "n3.jpg", "n4.jpg", "n5.jpg", "n6.png", "n7.jpg", "n8.jpg", "n9.jpg", "n10.png"];

function CheckPhoto(item) {

  var path = "n.png";

  if (number) {
    path = arrayofImage[number];
  }

  number++;

  if (number == 10) {
    number = 0;
  }

  try {
    if (item.photo_path) {
      if (item.photo_path != path) {

        if (item.photo_path.photo_path[0]) {
          path = item.photo_path.photo_path[0];
        }
      }
    }
  } catch (e) {}

  return path;
}

function setReiting() {

  var min = 3;
  var max = 5;

  return Math.round(Math.random() * (max - min) + min);
}

function ShowPremium(props) {
  var _this = this;

  var items = props.items;

  var baseUrl = localStorage.getItem("baseurlimg2");

  var content = items.map(function (item) {
    return React.createElement(
      "li",
      { key: item.id, className: "greyLightsdefault" },
      React.createElement(
        "a",
        null,
        React.createElement(
          "div",
          { className: "header-photo", onClick: function onClick(e) {
              return _this.navigateToDetail(item, e);
            } },
          React.createElement("img", { src: baseUrl + CheckPhoto(item), height: "100%", width: "100%" })
        ),
        React.createElement(
          "div",
          { className: "photo-description" },
          React.createElement(
            "div",
            { className: "header-text" },
            item.zagolovok
          ),
          React.createElement(
            "div",
            { className: "small-text" },
            item.opisanie
          ),
          React.createElement(
            "div",
            { className: "stars-line" },
            React.createElement(
              "div",
              { className: "stars-line-child" },
              React.createElement(
                "i",
                { className: "material-icons" },
                "star"
              ),
              React.createElement(
                "i",
                { className: "material-icons" },
                "star"
              ),
              React.createElement(
                "i",
                { className: "material-icons" },
                "star"
              ),
              React.createElement(
                "i",
                { className: "material-icons" },
                "star"
              ),
              React.createElement(
                "i",
                { className: "material-icons" },
                "star_border"
              )
            ),
            React.createElement(
              "div",
              { className: "stars-reiting" },
              setReiting(),
              ".0"
            )
          )
        )
      )
    );
  });

  return React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { col: "100" },
      React.createElement(
        "div",
        { className: "hot-listings" },
        "\u041F\u0440\u0435\u043C\u0438\u0443\u043C \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438"
      )
    ),
    React.createElement(
      "div",
      { className: "col-100" },
      React.createElement(
        "div",
        { className: "glob" },
        React.createElement(
          "ul",
          { className: "myhidescrolled" },
          content
        )
      )
    )
  );
}

function ShowUniversal(props) {
  var _this2 = this;

  var items = props.items;

  var desc = props.desc;

  var baseUrl = localStorage.getItem("baseurlimg2");

  var content = items.map(function (item) {
    return React.createElement(
      "li",
      { key: item.id },
      React.createElement(
        "a",
        null,
        React.createElement(
          "div",
          { className: "header-photo", onClick: function onClick(e) {
              return _this2.backAndnavigateToDetail(item, e);
            } },
          React.createElement("img", { src: baseUrl + CheckPhoto(item), height: "100%", width: "100%" })
        ),
        React.createElement(
          "div",
          { className: "photo-description" },
          React.createElement(
            "div",
            { className: "header-text" },
            item.zagolovok
          ),
          React.createElement(
            "div",
            { className: "small-text" },
            item.opisanie
          ),
          React.createElement(
            "div",
            { className: "stars-line" },
            React.createElement(
              "div",
              { className: "stars-line-child" },
              React.createElement(
                "i",
                { className: "material-icons" },
                "star"
              ),
              React.createElement(
                "i",
                { className: "material-icons" },
                "star"
              ),
              React.createElement(
                "i",
                { className: "material-icons" },
                "star"
              ),
              React.createElement(
                "i",
                { className: "material-icons" },
                "star"
              ),
              React.createElement(
                "i",
                { className: "material-icons" },
                "star_border"
              )
            ),
            React.createElement(
              "div",
              { className: "stars-reiting" },
              setReiting(),
              ".0"
            )
          )
        )
      )
    );
  });

  return React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { col: "100" },
      React.createElement(
        "div",
        { className: "hot-listings" },
        desc
      )
    ),
    React.createElement(
      "div",
      { className: "col-100" },
      React.createElement(
        "div",
        { className: "glob" },
        React.createElement(
          "ul",
          { className: "myhidescrolled" },
          content
        )
      )
    )
  );
}

function ShowGold(props) {
  var _this3 = this;

  var items = props.items;

  var baseUrl = localStorage.getItem("baseurlimg2");

  var content = items.map(function (item) {
    return React.createElement(
      "li",
      { key: item.id, className: "greyLightsdefault" },
      React.createElement(
        "a",
        null,
        React.createElement(
          "div",
          { className: "aChild", onClick: function onClick(e) {
              return _this3.navigateToDetail(item, e);
            } },
          React.createElement("img", { src: baseUrl + CheckPhoto(item), height: "100%", width: "100%" }),
          React.createElement(
            "div",
            { className: "bChild" },
            React.createElement(
              "div",
              { className: "headT" },
              item.zagolovok
            ),
            React.createElement(
              "div",
              { className: "smText" },
              item.opisanie
            )
          )
        )
      )
    );
  });

  return React.createElement(
    "div",
    { className: "row Mn" },
    React.createElement(
      "div",
      { col: "100" },
      React.createElement(
        "div",
        { className: "hot-listings" },
        "\u0413\u043E\u043B\u0434 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438"
      )
    ),
    React.createElement(
      "div",
      { className: "col-100" },
      React.createElement(
        "div",
        { className: "globThree" },
        React.createElement(
          "ul",
          { className: "myhidescrolledThree" },
          content
        )
      )
    )
  );
}

function openPhotoBrowser(item, e) {
  myPhotoBrowserStandalone.open();
}

function ShowN1(props) {
  var _this4 = this;

  var items = props.items;

  var baseUrl = localStorage.getItem("baseurlimg2");

  var content = items.map(function (item) {
    return React.createElement(
      "li",
      { key: item.id, className: "greyLightsdefault" },
      React.createElement(
        "a",
        null,
        React.createElement(
          "div",
          { className: "aChild", onClick: function onClick(e) {
              return _this4.openPhotoBrowser(item, e);
            } },
          React.createElement("img", { src: baseUrl + item.url, height: "100%", width: "100%" })
        )
      )
    );
  });

  return React.createElement(
    "div",
    { className: "row " },
    React.createElement(
      "div",
      { className: "col-100" },
      React.createElement(
        "div",
        { className: "globThree" },
        React.createElement(
          "ul",
          { className: "myhidescrolledThreeN" },
          content
        )
      )
    )
  );
}

var senditem = new Object();

function navigateToDetail(item, e) {

  var check = checkAuthorize();

  if (check == true) {
    senditem = item;
    router.navigate({ name: 'n1' });
  } else {
    router.navigate({ name: 'login' });
  }
}

function backAndnavigateToDetail(item, e) {
  senditem = item;
  router.back();

  setTimeout(function () {
    router.navigate({ name: 'n1' });
  }, 1500);
}
//xx
function ShowData(props) {
  var _this5 = this;

  var items = props.items;

  var baseUrl = localStorage.getItem("baseurlimg2");

  var content = items.map(function (item) {
    return React.createElement(
      "div",
      { key: item.id, className: "threeview", onClick: function onClick(e) {
          return _this5.navigateToDetail(item, e);
        } },
      React.createElement("img", { src: baseUrl + CheckPhoto(item), height: "100%", width: "100%" })
    );
  });

  return React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { col: "100 " },
      React.createElement("div", { className: "hot-listings" })
    ),
    React.createElement(
      "div",
      { className: "mainrow greyLights" },
      content
    )
  );
}

function CheckContactUser(item) {
  var useremailsearch = localStorage.getItem("useremail");

  if (useremailsearch == 0) {
    useremailsearch = 0;
  }

  if (useremailsearch == item.toUser) {
    return item.fromUser;
  } else {
    return item.toUser;
  }
}

function getUserEmail() {
  var useremailsearch = localStorage.getItem("useremail");

  if (useremailsearch == 0) {
    useremailsearch = 0;
    return useremailsearch;
  } else {
    return useremailsearch;
  }
}

function navigateToMessage(item, e) {

  var check = checkAuthorize();

  if (check == true) {

    var useremailsearch = localStorage.getItem("useremail");

    if (useremailsearch == item.toUser) {
      localStorage.setItem("toEmail", item.fromUser);
    } else {
      localStorage.setItem("toEmail", item.toUser);
    }

    localStorage.setItem("toId", "20");

    router.navigate({ name: 'message' });
  } else {
    router.navigate({ name: 'login' });
  }
}

function ContactData(props) {
  var _this6 = this;

  var items = props.items;

  var baseUrl = localStorage.getItem("baseurlimg2");

  var content = items.map(function (item) {
    return React.createElement(
      "div",
      { key: item.id, onClick: function onClick(e) {
          return _this6.navigateToMessage(item, e);
        }, className: "main_list" },
      React.createElement(
        "div",
        { className: "pleft_block" },
        React.createElement("div", { className: "pleft_block_1", style: { backgroundImage: "url(" + item.image_url + ")" } }),
        React.createElement(
          "div",
          { className: "pleft_block_2" },
          React.createElement(
            "i",
            { className: "mysize material-icons" },
            "fiber_manual_record"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "pright_block" },
        React.createElement(
          "div",
          { className: "pright_block_1" },
          React.createElement(
            "div",
            { className: "pright_block_1_2" },
            CheckContactUser(item)
          ),
          React.createElement(
            "div",
            { className: "pright_block_1_3" },
            item.date
          )
        ),
        React.createElement(
          "div",
          { className: "pright_block_2" },
          React.createElement(
            "div",
            { className: "pright_block_2_1" },
            item.message
          ),
          item.fromUser != getUserEmail() && item.count != 0 && React.createElement(
            "div",
            { className: "pright_block_2_2" },
            item.count
          )
        )
      )
    );
  });

  return content;
}

var latestid = 0;

socket.on('homeStart', function (data) {

  //console.log(data);

  ReactDOM.render(React.createElement(ShowGold, { items: data.gold }), document.getElementById('reactGold'));

  ReactDOM.render(React.createElement(ShowPremium, { items: data.premium }), document.getElementById('reactPremium'));

  setTimeout(function () {

    homestarted = 1;
    ReactDOM.render(React.createElement(ShowData, { items: data.latest }), document.getElementById('reactOb'));

    tempmassivdata = data.latest;
    startcount = data.latestid;
    searchType = "usually";
  }, 4000);

  //console.log(startcount);

  // ReactDOM.render(
  //   <ShowDataUpdateClass items={data.latest} />,
  //   document.getElementById('reactOb')
  // );
  $(".gifloader").hide();
});

function SendingData(data) {

  if (clearItems == 1) {
    tempmassivdata = new Array();
    clearItems = 0;
  }

  for (var i = 0; i < data.length; i++) {

    if (tempmassivdata.length > 0) {
      var fixfound = 0;
      for (var j = 0; j < tempmassivdata.length; j++) {
        if (tempmassivdata[j].id == data[i].id) {
          fixfound = 1;
        }
      }

      if (fixfound == 0) {

        if (tempmassivdata.length > 250) {
          tempmassivdata = tempmassivdata.splice(0, pagesum);
        }
        tempmassivdata.push(data[i]);
      }
    } else {
      tempmassivdata.push(data[i]);
    }
  }

  //  setTimeout(function(){
  ReactDOM.render(React.createElement(ShowData, { items: tempmassivdata }), document.getElementById('reactOb'));
  //  },500);

  $(".gifloader").hide();
}

function ShowUserContent(data) {

  if (data.length > 0) {
    ReactDOM.render(React.createElement(ShowUniversal, { items: data, desc: 'User suggestion' }), document.getElementById('userAds'));
  }
  $(".gifloader").hide();
}

function ShowUniversalContent(data, id) {

  if (data.length > 0) {
    ReactDOM.render(React.createElement(ShowUniversal, { items: data, desc: 'User subscribers' }), document.getElementById(id));
  }
  $(".gifloader").hide();
}

function ShowSubscribeContent(data) {

  if (data.length > 0) {
    ReactDOM.render(React.createElement(ShowData, { items: data }), document.getElementById('reactSubscribe'));
  }
  $(".gifloader").hide();
}
function ShowFavoriteContent(data) {

  if (data.length > 0) {
    ReactDOM.render(React.createElement(ShowData, { items: data }), document.getElementById('reactFavorite'));
  }
  $(".gifloader").hide();
}

function RenderContactList(data) {
  if (data.length > 0) {
    ReactDOM.render(React.createElement(ContactData, { items: data }), document.getElementById('contactData'));
  }
  $(".gifloader").hide();
}

function RenderN1(data) {
  if (data.length > 0) {
    ReactDOM.render(React.createElement(ShowN1, { items: data }), document.getElementById('showN1'));
  }

  $(".gifloader").hide();
}