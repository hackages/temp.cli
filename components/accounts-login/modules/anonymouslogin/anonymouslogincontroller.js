function AnonymousLoginController() {

  this.sendToAnonymousLogin = function() {
    console.log("sendToAnonymousLogin");
    gadgets.pubsub.publish('channelA', 'the message');
  }


  gadgets.pubsub.subscribe('channelA', function(msg) {
    console.log("subscribe To A");
    // a callback function to display incoming messages on channel
    $('#messageHolderA').append(msg + '<br/>');
  });

}

export default AnonymousLoginController;
