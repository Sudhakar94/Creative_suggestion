$(document).ready(function() {

   var  userNamePattern= /^[a-zA-Z]{1}[a-zA-Z0-9_-]{5,15}$/
   var passwordPattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
   var mailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;
  var contactPattern=/^[0-9]{10}$/;
   var a=0,b=0,c=0,d=0,e=0;
   
   $("#btn").click(function(){

    var uName= $('#userName').val()
    if(!userNamePattern.test( uName)) 
    {
       $(".userError").css("display","block");
   }
   else
   {
    a=1;
     $(".userError").css("display","none");
}
var pwd= $('#password').val()
if(!passwordPattern.test(pwd)) 
{
   $(".passwordError").css("display","block");
}
else
{
    b=1;
    $(".passwordError").css("display","none");
}
var mail= $('#mailId').val()
if(!mailPattern.test(mail)) 
{
   $(".mailError").css("display","block");
}
else
{
    c=1;
    $(".mailError").css("display","none");
}
var num= $('#contactNumber').val()
if(!contactPattern.test(num)) 
{
   $(".contactError").css("display","block");
}
else
{
    d=1;
    $(".contactError").css("display","none");
}
if(($("#agree").prop("checked")) == false)
{
   $(".checkBoxError").css("display","block");
}
else
{
 e=1;
 $(".checkBoxError").css("display","none");
}

if(a==1 && b==1 && c==1 && d==1 && e==1)
{
 $(".opacitylayer").css({"opacity":"0.5","background-color":"#bfbfbf","display":"block"});
 var poparticle=$("<article></article>").attr("class","poparti");
 var name1=$("<p></p>").attr("class","popname").text("You have registered SuccessFully... Please Click Ok button to Continue..");
 var anchor=$("<a></a>").attr({"href":"javascript:void(0)"});
 var image1=$("<img>").attr({"src":"images/close.jpg","class":"closeimg","alt":"close"});
 $(anchor).append(image1);
 var userBtn=$("<button>Ok</button>").attr("class","userBtn").click(function () {
   window.location.href="login.html";
});
 var attach=$(poparticle).append(name1,anchor,userBtn);
 $(".popup").append(attach);
 $(".closeimg").click(function(){
    $(".opacitylayer").css({"display":"none"});
    $(".poparti").css("display","none");
})
}
})
})