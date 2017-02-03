$(document).foundation()
$(document).ready(function(){
	
	var obj=
	{
				pendrive:[
					["images/pen1.png","HP 16GB","RS.499"],["images/pen2.png","Sandisk 8GB","RS.200"],["images/pen3.png","Transcend 8GB","Rs.450"],["images/pen4.png","Kingston 16GB","Rs.549"],["images/pen5.png","Strontium 16GB","Rs.399"],["images/pen6.png","Sony 16GB","Rs.599"],["images/pen7.png","HP 16GB","RS.200"],["images/pen8.png","MoserBaer 8GB","RS.200"]
				],
				mobile:[
					["images/mob1.png","Swipe","RS.7,500"],["images/mob2.png","Intex","RS.4,999"],["images/mob3.png","LENOVO","RS.12,500"],["images/mob4.png","LAVA","RS.7000"],["images/mob5.png","MOTO G4","RS.15,000"],["images/mob6.png","MOTO G3","RS.12,000"],["images/mob7.png","Xiomi","RS.10,000"],["images/mob8.png","Samsung","RS.12,000"]
				],
				watch:[
					["images/w1.png","Fastrack","RS.4,000"],["images/w2.png","FOGG","RS.3,000"],["images/w3.png","Titan","RS.3,500"],["images/w4.png","Abrexo","RS.3,800"],["images/w5.png","Dinor","RS.2,500"],["images/w6.png","Xeno","RS.5,000"],["images/w7.png","Timex","RS.3,890"],["images/w8.png","Titan Raga","RS.4,500"]
				],
				camera:[
					["images/cam1.png","Nikon","RS.6,000"],["images/cam2.png","Kodak","RS.5,000"],["images/cam3.png","Nikon","RS.9,000"],["images/cam4.png","Canon","RS.3,500"],["images/cam5.png","Kodak","RS.3,000"],["images/cam6.png","Kodak","RS.5,000"],["images/cam7.png","Canon","RS.4,000"],["images/cam8.png","Canon","RS.6,500"]
				]
	}
$(".product").on("click",select);
function select()
	{
		$("#demo").empty()
		var id=$(this).attr("id");
		var ip1=$($(".input")[0]).val();
		$($(".input")[0]).val("");
		var ip2=$($(".input")[1]).val();
		$($(".input")[1]).val("");
			var inputval="";
		if(ip1!="")
			{
				inputval=ip1;
	}
	else
	{
		inputval=ip2;
	}
	

	
		for(var key in obj)
		{
			if((id==key)||(inputval==key))
			{  
				
				for(var k=0;k<8;k++)
				{
				var div=$("<article></article>").attr("class","list");
				var imagetag=$("<img></img>").attr("class","image").attr("src",obj[key][k][0]);
			    var h1tag=$("<h1></h1>").attr("class","name").text(obj[key][k][1]);
			    var prcetag=$("<span></span>").attr("class","cost").text(obj[key][k][2]);
			    var but=$("<button></button>").attr("class","but").text("BUY");
				var but1=$("<button></button>").attr("class","but1").text("ADD TO CART");
			    $(div).append(imagetag,h1tag,prcetag,but,but1);
	           $("#demo").append(div);
				}
		}
	}
	$(".but").on("click",popup);
	$(".but1").on("click",popups);
}
$("#searchitem").on("click",selects);
$("#searchitem1").on("click",selects);
function selects()
{
	console.log("hi");
	select();
}

function popup()
{
  $("#layer").css("display","block");
  $("#pop").css("display","block");
}
function popups()
{
  $("#layer").css("display","block");
  $("#pop1").css("display","block");
}
$(".cancel").on("click",cancel);
function cancel()
{
   $("#layer").css("display","none");
  $("#pop").css("display","none");
  $("#pop1").css("display","none");	
}
var unam=localStorage.getItem("username");
var finaluname=JSON.parse(unam);
$($(".uname")[0]).html(finaluname);
$($(".uname")[1]).html(finaluname);
})
		
	

