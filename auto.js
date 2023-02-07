

function validation(){
    let name=document.getElementById("name").value.trim()
    let email=document.getElementById("email").value.trim()
    let place=document.getElementById("place").value.trim()
    let message=document.getElementById("message").value.trim()
    let phone=document.getElementById("phone").value.trim()
    flag=0;
    if(name==''){
      document.getElementById("nameError").innerHTML="name is required"
      flag=1;
    }
    if(email==''){
      document.getElementById("emailError").innerHTML="email is required"
      flag=1;
    }
    if(place==''){
      document.getElementById("placeError").innerHTML="place is required"
      flag=1;
    }
    if(phone==''){
      document.getElementById("phoneError").innerHTML="message is required"
      flag=1;
    }
    if(message==''){
      document.getElementById("messageError").innerHTML="message is required"
      falg=1;
    }
    if(flag==1){
      return false;



    }
  }