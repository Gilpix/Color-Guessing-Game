var numSquares=6;
var colors =generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelectorAll("h1")[0];
var resetButton=document.querySelector("#reset");
var easyButton=document.querySelector("#easy");
var hardButton=document.querySelector("#hard");

var pickedColor=pickColor();
colorDisplay.textContent=pickedColor;

setSquareColors();


easyButton.addEventListener("click",function(){
	//change selected
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	//hide below three squares
	for(var i=3;i<squares.length;i++)
	{
		squares[i].style.display="none";
	}
	//no of squares
	 numSquares=3;
	editOnButtonClick();
});


hardButton.addEventListener("click",function(){
	for(var i=3;i<squares.length;i++)
	{
		squares[i].style.display="initial";
	}
	//change selected
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	//no of squares
	 numSquares=6;
	 editOnButtonClick();
});



resetButton.addEventListener("click",editOnButtonClick);


function editOnButtonClick(){
	//generate new colors
	colors=generateRandomColors(numSquares);
	//pick new color
	pickedColor=pickColor();
	//reset header
	h1.style.backgroundColor="#00B0FF";
	colorDisplay.textContent=pickedColor;
	//reset Stripe
	resetButton.textContent="NEW COLORS";
	messageDisplay.textContent="";
	//set new colors for squares
	setSquareColors();
};



function setSquareColors()
{
	for(var i=0;i<numSquares;i++)
	{
		//color added to each sqaure
		squares[i].style.backgroundColor=colors[i];
		//add event listner to each square
		squares[i].addEventListener("click", function(){
			//color selected by user
			var colorSelected=this.style.backgroundColor;
			//compare selected color with colorDisplay
			if(colorSelected==pickedColor)
			{
				changeAllColorRight(pickedColor);
				resetButton.textContent="PLAY AGAIN";
				messageDisplay.textContent="Correct";
			}
			else
			{
				messageDisplay.textContent="Try Again";
				this.style.backgroundColor="#232323";
			}

		});
	}
};


//Change Color of all squares and header when answer is right
function changeAllColorRight(color)
{
	h1.style.backgroundColor=color;
	for(var i=0;i<numSquares;i++)
		squares[i].style.backgroundColor=color;
};


//return random color from colors
function pickColor()
{
	var pickedColor;
	pickedColor =colors[Math.floor((Math.random() * colors.length))];
	return pickedColor;
}


function generateRandomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
		arr[i]=randomColor();
	return arr;
}

function randomColor()
{
	var red=Math.floor((Math.random()*255));
	var green=Math.floor((Math.random()*255));
	var blue=Math.floor((Math.random()*255));
	return "rgb("+red+", "+green+", "+blue+")";
}
