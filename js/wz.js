window.onload=function(){
	var canvas=document.querySelector('#canvas');

ctx=canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(20,20.5);
ctx.lineTo(580,20.5);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(20.5,20);
ctx.lineTo(20.5,580);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(20,580.5);
ctx.lineTo(580,580.5);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(580.5,20);
ctx.lineTo(580.5,580);
ctx.stroke();

for (var i = 0; i <15; i++) {
	ctx.beginPath();
ctx.moveTo(20,20.5+40*i);
ctx.lineTo(580,20.5+40*i);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(20.5+40*i,20);
ctx.lineTo(20.5+40*i,580);
ctx.stroke();
}
ctx.beginPath();
ctx.arc(300,300,10,0,Math.PI*2,true);
ctx.fill();
}