function Digipasschoosercontroller() {

  gadgets.pubsub.subscribe('channelA', function(msg) {
    console.log("subscribe To A");
    // a callback function to display incoming messages on channel
    $('#messageHolderA').append(msg + '<br/>');
  });

}

export default Digipasschoosercontroller;