$(document).ready(function()
{
  var localname="";
  $("#back").click(function()
  {
    $("#login-page").css("display","block");
    $("#contact").css("display","none");
  });
 function navigate()
  {
    $("#shoppage").attr("href","foundation/shop.html");
  }
  $("#login").click(function(event)
  {
  	event.preventDefault();
  	 var validname = $("#name").val();
  	 var validpwd = $("#pwd").val();
  	 var namefilter = /^[a-zA-Z_-]{5,15}$/;
  	 var pwdfilter = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

	  	 if(namefilter.test(validname))
	  	 {
	  	      if((pwdfilter.test(validpwd)))
	  	      {
                 localname=JSON.stringify(validname);
                localStorage.setItem("username",localname);
                window.location.href="shop.html";
	  	      }
	  	      else
	  	      {
	  	      	 $("#pwd").css("border","2px solid red");
	  	      }
	  	 }
	  	 else
	  	 {
	  	 	 $("#name").css("border","2px solid red");
	  	 	 $(".alert-box alert round").css("display","block");
	  	 }
       
  });
  $("#newuser").click(function(event)
       {
        event.preventDefault();
          window.location.href="userindex.html";
       });


 
});
