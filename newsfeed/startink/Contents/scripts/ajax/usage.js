// JavaScript Document

function get_completed_inks()
{
	
var xmlhttp;
	    document.getElementById("section_ajax").innerHTML="loading......";
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		
    document.getElementById("section_ajax").innerHTML=xmlhttp.responseText;
    }
	
  }
  
xmlhttp.open("POST","completed_user.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send('type=completed&user=<?php echo $username; ?>&token='+Math.random());

	
}
  
function get_inks_to_complete()
{
		    document.getElementById("section_ajax").innerHTML="loading......";
var xmlhttp;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		
    document.getElementById("section_ajax").innerHTML=xmlhttp.responseText;
    }
	
  }
  
xmlhttp.open("POST","completed_user.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send('type=inks&user=<?php echo $username; ?>&token='+Math.random());

	
}

function show_follow(val)
{
var xmlhttp;
	    document.getElementById("section_ajax").innerHTML="loading......";
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		
    document.getElementById("section_ajax").innerHTML=xmlhttp.responseText;
    }
	
  }
  
xmlhttp.open("GET","follow_user.php?user="+val.getAttribute('data-user'),true);
xmlhttp.send();
	
}


function meetoo(ink_name)
{
		
		
     document.getElementById("new_ink").value=ink_name;
document.getElementById("new_ink_name").innerHTML=ink_name;
	$('#show_more_oversurface_meetoo').reveal({ // The item which will be opened with reveal
				  	animation: 'fade',                   // fade, fadeAndPop, none
					animationspeed: 300,                       // how fast animtions are
					closeonbackgroundclick: true,              // if you click background will modal close?
					dismissmodalclass: 'close'    // the class of a button or element that will close an open modal
				});
			return false;
	
	
	
}
	


function load_content(ink_value)
{
	var xmlhttp;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		
    document.getElementById("show_more_oversurface").innerHTML=xmlhttp.responseText;
	call();
    }
  }
  
xmlhttp.open("GET","get_content_ajax.php?id_value="+ink_value,true);
xmlhttp.send();

	
	
}

function post_remark()
{
	console.log("here");
	var comment=document.getElementById("comment_section");
	console.log(comment.value);
	if(comment.value.length!=0)
	{
	var xmlhttp;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		
   
	var a=document.createElement("div");
	var aa=xmlhttp.responseText;
	a.innerHTML=aa;
	document.getElementById("show_comments").appendChild(a);
	comment.value="";

	 }
  }
  

xmlhttp.open("POST","add_comment.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send('comment='+comment.value+'&activity='+document.getElementsByName("activity").item(0).value+'&token='+document.getElementsByName("token").item(0).value);
	
	}
	
}

function del_remark(val)
{
	var xmlhttp;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		
		if(xmlhttp.responseText)
		{
		document.getElementById(val).style.display="none";	
		}
   
	 }
  }
  

xmlhttp.open("POST","del_comment.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send('delc='+val);
	
	
	
}


function get_voters(ink_value)
{
	var xmlhttp;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		
    document.getElementById("show_more_oversurface").innerHTML=xmlhttp.responseText;
	call();
    }
  }
  
xmlhttp.open("GET","get_voters.php?id_value="+ink_value,true);
xmlhttp.send();

	
	
}

function vote(val)
{
	var xmlhttp;
console.log(val.dataset['id']);
console.log(val.dataset['name']);
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		
    (val.nextElementSibling||val.nextSibling).innerHTML=xmlhttp.responseText;
	if(val.innerHTML=='Support')
	val.innerHTML='Unsupport';
	
	else
	val.innerHTML='Support';
    }
  }
  
xmlhttp.open("POST","vote_activity.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send('vote='+val.dataset["id"]+'&activity='+val.dataset['name']+'&token='+Math.random());


	
	
}

	function call(){
		 // Button which will activate our modal
			   	$('#show_more_oversurface').reveal({ // The item which will be opened with reveal
				  	animation: 'fade',                   // fade, fadeAndPop, none
					animationspeed: 300,                       // how fast animtions are
					closeonbackgroundclick: true,              // if you click background will modal close?
					dismissmodalclass: 'close'    // the class of a button or element that will close an open modal
				});
			return false;

		
	}
	
	
