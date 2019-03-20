var WebsiteMessage = document.getElementById("WebsiteMessage");
var sendMessage = document.getElementById("sendMessage"); 


function SubmitClick() {
    window.alert("Your message has been sent !");

    var firebaseRef = firebase.database().ref(); 
    
    var MessageText = WebsiteMessage.value;

   // firebaseRef.child("Text").set(MessageText);
    
    firebase.database().ref().child('Text').push(MessageText);


}



