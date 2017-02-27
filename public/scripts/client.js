console.log('client.js sourced properly');

$(document).ready(function(){
  console.log('jq sourced properly');

  //TEST POST route

  var objectToSend ={
    test: 'buzzzzz'
  };//end object to send

  $.ajax({
    type: "POST",
    url: "/math"
    data: objectToSend
    success: function(response){
      console.log('back from ajax with: ',response);
    }//end success function
  });//end ajax
}); // end document.reay
