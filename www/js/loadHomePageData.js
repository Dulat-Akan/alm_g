var homedeviceid = localStorage.getItem("deviceid");

$(".searchkvbutton").text("Найти");

function getHomeData() {
  socket.emit('homeStart', { deviceid: homedeviceid });
}

getHomeData();

setInterval(function () {
  getHomeData();
}, 60000);

function CheckPhoto(item) {

  var path = 'n.jpg';

  //console.log(item.photo_path);

  if (item.photo_path) {
    if (item.photo_path != path) {

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

  var items = props.items;

  var baseUrl = localStorage.getItem("baseurlimg2");

  var content = items.map(function (item) {
    return React.createElement(
      "li",
      { key: item.id },
      React.createElement(
        "a",
        null,
        React.createElement("div", { className: "header-photo", style: { backgroundImage: "url(" + baseUrl + CheckPhoto(item) + ")" } }),
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
        "Premium listings"
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

  var items = props.items;

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
          { className: "aChild", style: { backgroundImage: "url(" + baseUrl + CheckPhoto(item) + ")" } },
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
        "Gold listings"
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

function ShowData(props) {

  var items = props.items;

  var baseUrl = localStorage.getItem("baseurlimg2");

  var content = items.map(function (item) {
    return React.createElement("div", { key: item.id, className: "threeview", style: { backgroundImage: "url(" + baseUrl + CheckPhoto(item) + ")" } });
  });

  return React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { col: "100 " },
      React.createElement(
        "div",
        { className: "hot-listings" },
        "Latest 40"
      )
    ),
    React.createElement(
      "div",
      { className: "mainrow" },
      content
    )
  );
}

socket.on('homeStart', function (data) {

  //console.log(data);

  ReactDOM.render(React.createElement(ShowGold, { items: data.gold }), document.getElementById('reactGold'));

  ReactDOM.render(React.createElement(ShowPremium, { items: data.premium }), document.getElementById('reactPremium'));

  ReactDOM.render(React.createElement(ShowData, { items: data.latest }), document.getElementById('reactOb'));
});

function SendingData(data) {
  ReactDOM.render(React.createElement(ShowData, { items: data }), document.getElementById('reactOb'));
}