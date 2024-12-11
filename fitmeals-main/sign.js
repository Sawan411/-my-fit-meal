document.getElementById("myform").addEventListener("submit",get)
 
var data=JSON.parse(localStorage.getItem("logindata"))||[];
function get(event){
    window.location.href="login.html"
    event.preventDefault();
    var email=document.getElementById("user").value;
    var Password=document.getElementById("pass").value;

   
   
        
     var obj={
        email:email,
        Password:Password,
       
        }
        data.push(obj)
        localStorage.setItem("logindata",JSON.stringify(data))
    
  
}