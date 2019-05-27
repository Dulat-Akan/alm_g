var globalMessage;

$$(document).on('page:beforein', '.page[data-name="comment"]', function (e) {



  var messages = myApp.messages.create({
    el: '.messages',

    // First message rule
    firstMessageRule: function (message, previousMessage, nextMessage) {
      // Skip if title
      if (message.isTitle) return false;
      /* if:
        - there is no previous message
        - or previous message type (send/received) is different
        - or previous message sender name is different
      */
      if (!previousMessage || previousMessage.type !== message.type || previousMessage.name !== message.name) return true;
      return false;
    },
    // Last message rule
    lastMessageRule: function (message, previousMessage, nextMessage) {
      // Skip if title
      if (message.isTitle) return false;
      /* if:
        - there is no next message
        - or next message type (send/received) is different
        - or next message sender name is different
      */
      if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
      return false;
    },
    // Last message rule
    tailMessageRule: function (message, previousMessage, nextMessage) {
      // Skip if title
      if (message.isTitle) return false;
        /* if (bascially same as lastMessageRule):
        - there is no next message
        - or next message type (send/received) is different
        - or next message sender name is different
      */
      if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
      return false;
    },

  });

  // Init Messagebar
  var messagebar = myApp.messagebar.create({
    el: '.messagebar'
  });

  // Response flag
  var responseInProgress = false;

  var myemail = localStorage.getItem("useremail");
  var toEmail = localStorage.getItem("toEmail");
  var toId = localStorage.getItem("toId");

  if(myemail == 0){
     myemail = 0;
  }

  // Send Message
  $$('.send-link').on('click', function () {
    var text = messagebar.getValue().replace(/\n/g, '<br>').trim();
    // return if empty message
    if (!text.length) return;

    // Clear area
    messagebar.clear();

    // Return focus to area
    messagebar.focus();

    var avatar = "https://www.w3schools.com/howto/img_avatar.png";
    var name = myemail;

    if(myemail == toEmail){
      sendNotification("Not for Yourself!");
      return false;
    }

    // Add message to messages
    messages.addMessage({
      text: text,
      type: 'received',
      avatar:avatar,
      name:name,
    });


    socket.emit('serviceComments', {action:"setComments",email:myemail,toEmail:toEmail,id:toId,text:text,avatar:avatar,name:name});

    //if (responseInProgress) return;
    // Receive dummy message
    //receiveMessage();
  });

  // Dummy response
  var answers = [
    'Yes!',
    'No',
    'Hm...',
    'I am not sure',
    'And what about you?',
    'May be ;)',
    'Lorem ipsum dolor sit amet, consectetur',
    'What?',
    'Are you sure?',
    'Of course',
    'Need to think about it',
    'Amazing!!!'
  ]


  var people = [
    {
      name: 'Kate Johnson',
      avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
      text:"test1",
      type: 'received',
    },
    {
      name: 'Blue Ninja',
      avatar: 'https://cdn.framework7.io/placeholder/people-100x100-7.jpg',
      text:"test2",
      type: 'received',
    }
  ];





  function receiveMessage() {
    responseInProgress = true;
    setTimeout(function () {
      // Get random answer and random person
      var answer = answers[Math.floor(Math.random() * answers.length)];
      var person = people[Math.floor(Math.random() * people.length)];

      // Show typing indicator
      messages.showTyping({
        header: person.name + ' is typing',
        avatar: person.avatar
      });

      setTimeout(function () {
        // Add received dummy message
        messages.addMessage({
          text: answer,
          type: 'received',
          name: person.name,
          avatar: person.avatar
        });
        // Hide typing indicator
        messages.hideTyping();
        responseInProgress = false;
      }, 4000);
    }, 1000);
  }

  globalMessage = messages;



  socket.emit('serviceComments', {action:"checkComments",email:myemail,toEmail:toEmail,id:toId});

  var date = new Date();

  $(".messages-title").text(date);
});



socket.on('serviceComments', function(data){

          if(data.action == "checkComments"){
            //
            var commentArray = new Array();
            for(var i = 0;i < data.data.length;i++){
              var object = {
                text: data.data[i].com_text,
                type: 'received',
                name: data.data[i].com_name,
                avatar: data.data[i].image_url
              };

              commentArray.push(object);
            }

            globalMessage.addMessages(commentArray);
            //console.log(data);
          }else if(data.action == "setComments"){
            //console.log(data.status);
          }

        });
