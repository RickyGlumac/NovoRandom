var startup;
$(document).ready (function() {
	startup=0;
	if (localStorage['myList'] == null) localStorage['myList']="[]";
	if (localStorage['myList2'] == null) localStorage['myList2']="[]";
	$(".idk_maindiv").show();
	var myList = JSON.parse(localStorage['myList']);
	if(location.hash == "#listPage"){
		showList()
	}
		/*$("#small").off("tap").on("tap", function() {
			$("#idk_maindiv").reload();
		});*/
});		
setTimeout(function() { 
window.onload = $('#loader').hide();
document.getElementById('body').style.display = 'block';
},3400);

function idk_animation() {
	if (JSON.parse(localStorage['myList']).length==0) {
		if ($('input.checkbox_check').prop('checked')){
			alert("List is empty!");
		}
		else if ($('input.checkbox_check-2').prop('checked')){
			alert("Lista je prazna.");
		}
		else if ($('input.checkbox_check-3').prop('checked')){
			alert("Liste ist leer.");
		}
		return;
	}
	if(startup==1){
		generate();
		return;
	}
	else{
		startup=1;
		localStorage['myList2']=localStorage['myList'];
	}

	generate();
	var x=3, id, y;
	var z=0, z2=0;
	var fs=80;
	var elem = document.getElementById("startbutton");
	var small=document.getElementById("small");
	var idkhome=document.getElementById("home");
	var winner=document.getElementById("winner");
	var para=document.getElementById("innerTekst");
	var pos2 = $('#polukrug').position();
	var pos = $('#startbutton').position();
	var pos3 = $('#path').position();
	
	setTimeout(count, 1000);
	
	function frame() {
		if (pos.top < -80) {
		clearInterval(id);
		} else {
			small.style.opacity=z;
			winner.style.opacity=z2;
			z+=0.0141;
			if (z>0.5)z2+=0.2;
			if (z>1) z=1;
			if (z2>1) z2=1;
			pos.top--;
			pos3.top=pos3.top-2.6;
			document.getElementById("path").style.marginTop = pos3.top + 'px';
			if(pos3.top<-50 && pos3.top>-53){
				$('.idk-second-header').animate({
					height: 'hide'
				});
				$('.idk-first-header').animate({
					height: 'hide'
				});
			}
		}
	}

	function count() {
		y=x;
		if(window.innerWidth < 750){
			if (x==0){
				fs=30;
				y='<i class="fa fa-refresh fa-2x refresh_ikona"></i>';
			}
			para.innerHTML=y;
			para.style.fontSize = fs+'px';
			
			x--;
			if (x>-1) setTimeout(count, 1000);
			else {
				small.style.opacity=z;
				winner.style.opacity=z;
				$(".idk_winner").show();
				small.style.display="block";
				idkhome.style.display="block";
				id = setInterval(frame, 15);
			}
		}else{
			fs=160;
			if(x==0){
				fs=100;
				y='<i class="fa fa-refresh fa-2x"></i>';
			}
			para.innerHTML=y;
			para.style.fontSize = fs+'px';
			x--;
			if (x>-1) setTimeout(count, 1000);
			else {
				small.style.opacity=z;
				winner.style.opacity=z;
				$(".idk_winner").show();
				small.style.display="block";
				idkhome.style.display="block";
				id = setInterval(frame, 15);
			}
		}
	}
}


function dropup() {
	$(".foot1").toggleClass("foot1Open");
}
 
 function dropdown() {
	 $(".foot1").toggleClass("foot1Open");
}

if(location.hash == ""){
	location.hash="#mainPage";
	showPage("#mainPage");
}
else{
	showPage(location.hash);
}
 
 function showPage(pageId){
		 $(".page").hide();
		 $(pageId).show();
}
 
$(window).on("hashchange", function(){
	document.getElementById("noviItem").value="";
	showPage(location.hash);
	$(".foot1").removeClass("foot1Open");
	if(location.hash=="#listPage"){
	showList();
}
 });
 
function showList() {
	var lista = JSON.parse(localStorage['myList']);
	$("#lista").empty();
	var listItem;
	for (var i=0;i<lista.length;i++) {
		listItem = '<li id ="'+i+'"><span>'+lista[i]+'</span><button class="obrisi" data-id="'+i+'" data-toggle="modal" data-target="#myModal"><i class="fa fa-times" aria-hidden="true"></i></button><button class="uredi" data-id="'+i+'" data-toggle="modal" data-target="#myModal2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></li>';
		$("#lista").append(listItem);
		if(lista[i].length == 19){
			document.getElementById(i).childNodes[0].style.fontSize = '17px';
		}
		if(lista[i].length == 20){
			document.getElementById(i).childNodes[0].style.fontSize = '16px';
		}
		if(lista[i].length >= 21 && lista[i].length <= 22){
			document.getElementById(i).childNodes[0].style.fontSize = '15px';
		}
		if(lista[i].length == 23){
			document.getElementById(i).childNodes[0].style.fontSize = '14px';
		}
		if(lista[i].length >= 24 && lista[i].length <= 25){
			document.getElementById(i).childNodes[0].style.fontSize = '13px';
		}
		if(lista[i].length >= 26 && lista[i].length <= 27){
			document.getElementById(i).childNodes[0].style.fontSize = '12px';
		}
		if(lista[i].length >= 28 && lista[i].length <= 30){
			document.getElementById(i).childNodes[0].style.fontSize = '11px';
		}
		if(lista[i].length >= 31 && lista[i].length <= 33){
			document.getElementById(i).childNodes[0].style.fontSize = '10px';
		}
	}
	for(var j=0;j<lista.length;j++){
		if(lista[j].length == 19){
			if($('#'+j).is(':last-child')){
				document.getElementById(j).style.paddingBottom = "8px";
			}
			else{
				document.getElementById(j).style.paddingBottom = "1px";
			}
		}
		if(lista[j].length == 20){
			if($('#'+j).is(':last-child')){
				document.getElementById(j).style.paddingBottom = "8px";
			}
			else{
				document.getElementById(j).style.paddingBottom = "1px";
			}
		}
		if(lista[j].length >= 21 && lista[j].length <= 22){
			if($('#'+j).is(':last-child')){
				document.getElementById(j).style.paddingBottom = "8px";
			}
			else{
				document.getElementById(j).style.paddingBottom = "1px";
			}
		}
		if(lista[j].length == 23){
			if($('#'+j).is(':last-child')){
				document.getElementById(j).style.paddingBottom = "9px";
			}
			else{
				document.getElementById(j).style.paddingBottom = "2px";
			}
		}
		if(lista[j].length >= 24 && lista[j].length <= 25){
			if($('#'+j).is(':last-child')){
				document.getElementById(j).style.paddingBottom = "9px";
			}
			else{
				document.getElementById(j).style.paddingBottom = "2px";
			}
		}
		if(lista[j].length >= 26 && lista[j].length <= 27){
			if($('#'+j).is(':last-child')){
				document.getElementById(j).style.paddingBottom = "10px";
			}
			else{
				document.getElementById(j).style.paddingBottom = "3px";
			}
		}
		if(lista[j].length >= 28 && lista[j].length <= 30){
			if($('#'+j).is(':last-child')){
				document.getElementById(j).style.paddingBottom = "9px";
			}
			else{
				document.getElementById(j).style.paddingBottom = "2px";
			}
		}
		if(lista[j].length >= 31 && lista[j].length <= 33){
			if($('#'+j).is(':last-child')){
				document.getElementById(j).style.paddingBottom = "10px";
			}
			else{
				document.getElementById(j).style.paddingBottom = "3px";
			}
		}
	}
};


var myList = JSON.parse(localStorage['myList']);



function dodajButton(){
	location.hash="#addItem";
	showPage("#addItem");
};

function dodajItem(){
	var item = document.getElementById('noviItem').value;
	if(item != ""){
	var lista = document.getElementById('lista');
	myList = JSON.parse(localStorage['myList']);			//DODANO zbog 1)
	myList.push(item);
	localStorage['myList'] = JSON.stringify(myList);
	location.hash="listPage";
	showPage("#listPage");
	}
	else if(item == ""){
		if ($('input.checkbox_check').prop('checked')){
			alert("Fill the required input field.");
		}
		else if ($('input.checkbox_check-2').prop('checked')){
			alert("Popunite polje za unos.");
		}
		else if ($('input.checkbox_check-3').prop('checked')){
			alert("Füllen Sie das Feld aus.");
		}
	}
	else if(item.length >= 33){
		if ($('input.checkbox_check').prop('checked')){
			alert("Maximum number of characters is 33.");
		}
		else if ($('input.checkbox_check-2').prop('checked')){
			alert("Maximalan broj karaktera je 33.");
		}
		else if ($('input.checkbox_check-3').prop('checked')){
			alert("Maximale Anzahl der Briefe ist 33.");
		}
	}
	document.getElementById('noviItem').value = "";
};

function nazadMain(){
	location.hash="#mainPage";
	showPage("#mainPage");
	showList();
}

function nazadMainSmall(){
	startup=0;
	var id;
	var elem = document.getElementById("startbutton");
	var path = document.getElementById("path");
	var small=document.getElementById("small");
	var idkhome=document.getElementById("home");
	var winner=document.getElementById("winner");
	var op=0.9;
	$('#startbutton').css('top: 69');
	var pos2 = $('#path').position();
	$('.idk_winner').animate({
		width: 'hide'
	});
	var pos=69;
	var margin = -189.7;
	function frame() {
		if (margin == 0) {
		clearInterval(id);
		tekstStart=document.getElementById("innerTekst");
		tekstStart.innerHTML="START";
		$('#startbutton').off('click');
		$("#home").hide();
		} else {
			small.style.opacity=op;
			op-=0.015;
			if (op<0) op=0;
			pos++; 
			if(margin>-3 && margin<-2) margin=margin+2.5000000000002376;
			else margin+=2.6;
			path.style.marginTop = margin + 'px'; 
			if(margin<-50 && margin>-52){
				$('.idk-second-header').animate({
					height: 'show'
				});
				$('.idk-first-header').animate({
					height: 'show'
				});
			}
		}
	}
	id = setInterval(frame, 15);
}

function nazadList(){
	location.hash="#listPage";
	showPage("#listPage");
	showList();
}


$('#myModal').on('shown.bs.modal', function (event) {
	var button = $(event.relatedTarget);
	var idLI = button.data('id');
	$("#obrisi").off("click").on("click", function () {
		myList=JSON.parse(localStorage['myList']);
		myList.splice(idLI, 1);
		localStorage['myList']=JSON.stringify(myList);
		showList();
	});
});

$('#myModal2').on('shown.bs.modal', function (event) {
	var button = $(event.relatedTarget);
	var idLI = button.data('id');
	var textSpan = $("#"+idLI).children()[0];
	document.getElementById("inputUredi").value = textSpan.innerHTML;
	$("#spremi").off("click").on("click", function () {
		var tekst = document.getElementById("inputUredi").value;
		if(tekst != ""){
			myList = JSON.parse(localStorage['myList']);			//DODANO ZBOG 1)
			myList[idLI] = "";
			var span = $("#"+idLI).children()[0];
			var b1 = $("#"+idLI).children()[1];
			var b2 = $("#"+idLI).children()[2];
			$("#"+idLI+ ' span').html("");
			span = tekst;
			$("#"+idLI).append(span);
			$("#"+idLI).append(b1);
			$("#"+idLI).append(b2);
			myList=JSON.parse(localStorage['myList']);
			myList[idLI] = tekst;
			localStorage['myList']=JSON.stringify(myList);
			document.getElementById("inputUredi").value = "";
			showList();
		}
		else if(tekst.length > 33){
		if ($('input.checkbox_check').prop('checked')){
			alert("Maximum number of characters is 33.");
		}
		else if ($('input.checkbox_check-2').prop('checked')){
			alert("Maximalan broj karaktera je 33.");
		}
		else if ($('input.checkbox_check-3').prop('checked')){
			alert("Maximale Anzahl der Briefe ist 33.");
		}
		}
		else{
			if ($('input.checkbox_check').prop('checked')){
				alert("This field cannot be empty.");
			}
			else if ($('input.checkbox_check-2').prop('checked')){
				alert("Ovo polje ne smije biti prazno.");
			}
			else if ($('input.checkbox_check-3').prop('checked')){
				alert("Dieses Feld kann nicht leer sein.");
			}
		}
	});
});

function generate(){
	var myList2=JSON.parse(localStorage['myList2']);
	var broj = myList2.length;
	if (broj == 0) return 0;
	var rndBroj = getRandom(broj)-1;
	var list2 = [];
	for (var i=0;i<broj;i++) {
		if (i!=rndBroj) list2.push(myList2[i]);
	}
	localStorage['myList2']=JSON.stringify(list2);
	var item = myList2[rndBroj];
	if(item.indexOf(" ")!== -1){
		var rijeci = item.split(" ");
		if(rijeci[0].length > 20){
			var pola = rijeci[0].length / 2;
			var duz = rijeci[0].length;
			var sp1 = rijeci[0].slice(pola, rijeci[0].length);
			var sp2 = rijeci[0].slice(0 , pola);
			rijeci[0] = sp2+"-</br>"+sp1;
		}
		else if(rijeci[1].length > 20){
			var pola = rijeci[1].length / 2;
			var sp1 = rijeci[1].slice(pola, rijeci[1].length);
			var sp2 = rijeci[1].slice(0 , pola);
			rijeci[1] = sp2+"-</br>"+sp1;
		}
		console.log(rijeci.length);
		if(rijeci.length == 2)							var novo = rijeci[0]+"</br>"+rijeci[1];
		else if(rijeci.length == 3)							var novo = rijeci[0]+"</br>"+rijeci[1]+"</br>"+rijeci[2];
		$(".idk_winner_h1b").animate ({
			opacity: 0
		}, 1000, function() {
			$(".idk_winner_h1b").html(novo);
		});
		$(".idk_winner_h1b").animate ({
			opacity: 1
		}, 1000);
		setTimeout(function(){
			if(rijeci.length >= 3){
				document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "6vh";
			}
			else{
				if((rijeci[0].length >= 10 && rijeci[0].length <= 11) || (rijeci[1].length >= 10 && rijeci[1].length <= 11)){
				document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "8vh";
				}
				else if(rijeci[0].length == 12 || rijeci[1].length == 12){
					document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "7vh";
				}
				else if(rijeci[0].length == 13 || rijeci[1].length == 13){
					document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "6.5vh";
				}
				else if(rijeci[0].length == 14 || rijeci[1].length == 14){
					document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "6vh";
				}
				else if(rijeci[0].length == 18 || rijeci[1].length == 18){
					document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "4.5vh";
				}
				else if(rijeci[0].length == 19 || rijeci[1].length == 19){
					document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "4.2vh";
				}
				else if(rijeci[0].length == 20 || rijeci[1].length == 20){
					document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "4vh";
				}
				else if((rijeci[0].length >= 15 && rijeci[0].length <= 17) || (rijeci[1].length >= 15 && rijeci[1].length <= 17)){
					document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "5vh";
				}
				else if(rijeci[0].length > 20){
					document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "5.5vh";
				}
				else if(rijeci[1].length > 20){
					document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "5.5vh";
				}
				else document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "9vh";
			}
		}, 1000);
	}
	else{
		
		$(".idk_winner_h1b").animate ({
			opacity: 0
		}, 1000, function() {
			$(".idk_winner_h1b").html(item);
		});
		
		$(".idk_winner_h1b").animate ({
			opacity: 1
		}, 1000);
		setTimeout(function(){
			console.log("y0")
			if(item.length >= 10 && item.length <= 11){
				document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "8vh";
			}
			else if(item.length == 12){
				document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "7vh";
			}
			else if(item.length == 13){
				document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "6.5vh";
			}
			else if(item.length == 14){
				document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "6vh";
			}
			else if(item.length == 18){
				document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "4.5vh";
			}
			else if(item.length == 19){
				document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "4.2vh";
			}
			else if(item.length == 20){
				document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "4vh";
			}
			else if(item.length >= 15 && item.length <= 17){
				document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "5vh";
			}
			else if(item.length > 20){
				var pola = item.length / 2;
				var sp1 = item.slice(pola, item.length);
				var sp2 = item.slice(0 , pola);
				item = sp2+"-</br>"+sp1;
				document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "5vh";
			}
			else document.getElementsByClassName("idk_winner_h1b")[0].style.fontSize = "9vh";
		}, 1000);
	}
}
	
function getRandom(max){
	var miliSekunde = new Date().getMilliseconds();
	return Math.floor((miliSekunde * max / 1000) + 1);
}

//--------------DODANO 17.11.2017-----------------------------------//

$('html').click(function(){					//ZATVARANJE MENIJA ON BODY(html) CLICK//
	if($('.foot1').hasClass('foot1Open')){
		if(event.target.className!="meni idk-footer-style" && event.target.className!="fa fa-bars idk-right-menu" && event.target.className!="btn btn-default idk-btn-style" && event.target.className!="foot-li"){
			dropup();
		}
	}
});

$('#noviItem').on('click', function(){
	$('.foot1').hide();
});

$('html').click(function(){
	if(!($('.foot1').is(':visible'))){
		if(event.target.id != 'noviItem')	$('.foot1').show();
	}
});

$('#engJez').on('click', function(){
	$('.checkbox_check').prop('checked', true);
	$('.idk_languages').change(); 
});
$('#bosJez').on('click', function(){
	$('.checkbox_check-2').prop('checked', true).trigger('click');
	$('.idk_languages').change(); 
});
$('#njemJez').on('click', function(){
	$('.checkbox_check-3').prop('checked', true);
	$('.idk_languages').change(); 
});

$('.about_slika').on('click', function(){
	$("#full_slika").show();
	var src = $(this).attr('src');
	$("#full_slika_jpg").attr('src', src);
});

$("#full_slika").on('click', function(){
	$("#full_slika").hide()
});