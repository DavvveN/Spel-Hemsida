var cycle = true;
var object = document.getElementById("Cirkel");
var borderObject = document.getElementById("spelruta");
var counter = 0;
var totalClick = 0;
var accuracyNum;

borderObject.addEventListener("click",accuracy,false);
object.addEventListener("click",flyttaCirkel,false);


function play(){
	object.style.display = "inline-block";
	counter = -1;
	flyttaCirkel();
	}
function reset(){
	object.style.display = "none";
	document.getElementById("counter").innerHTML = 0;
	counter = 0;
	totalClick = 0;
	document.getElementById("accuracy").innerHTML = "1.00";
}
function flyttaCirkel(){

	var borderObjectOuterWidth = borderObject.offsetWidth;
	var borderObjectOuterHeight = borderObject.offsetHeight;
	
	var newPosW = Math.random() * borderObjectOuterWidth - 50;
	var newPosH = Math.random() * borderObjectOuterHeight- 50;

	if (newPosW <50){newPosW = 50};
	if(newPosH <50){newPosH = 50};

	object.style.left = newPosW+ "px";
	object.style.top = newPosH +"px";

	if(cycle){object.style.backgroundColor = "red"; cycle = false}
	else{
		object.style.backgroundColor = "green"; 
		cycle = true
	};

	counter +=1;
	document.getElementById("counter").innerHTML = counter;
	}
function accuracy(){

	totalClick +=1;
	accuracyNum = counter / totalClick ;  
	if(accuracyNum == 1){
		document.getElementById("accuracy").innerHTML = "1.00";
	}else{
	document.getElementById("accuracy").innerHTML = Math.round((accuracyNum + Number.EPSILON) * 100) / 100;
	}                           
}
