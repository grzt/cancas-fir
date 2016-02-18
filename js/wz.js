window.onload=function(){
	var canvas=document.querySelector('#canvas');

ctx=canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(20,20.5);
ctx.lineTo(580,20.5);

ctx.moveTo(20.5,20);
ctx.lineTo(20.5,580);

ctx.moveTo(20,580.5);
ctx.lineTo(580,580.5);

ctx.moveTo(580.5,20);
ctx.lineTo(580.5,580);
ctx.stroke();

for (var i = 0; i <15; i++) {
var lingrad=ctx.createLinearGradient(20,300,580,300);
lingrad.addColorStop(0,'red');
lingrad.addColorStop(0.4,'yellow');
lingrad.addColorStop(0.8,'red');
lingrad.addColorStop(1,'red');
ctx.lineWidth=2;
ctx.lineCap='round';
/*ctx.strokeStyle='red';*/
ctx.strokeStyle=lingrad;	
	ctx.beginPath();
ctx.moveTo(20,20.5+40*i);
ctx.lineTo(580,20.5+40*i);
ctx.stroke();

var lingrad=ctx.createLinearGradient(20,300,580,300);
lingrad.addColorStop(0,'green');
lingrad.addColorStop(0.2,'#ccc');
lingrad.addColorStop(0.8,'pink');
lingrad.addColorStop(1,'green');
ctx.lineWidth=2;
ctx.lineCap='round';
/*ctx.strokeStyle='red';*/
ctx.strokeStyle=lingrad;
ctx.beginPath();
ctx.moveTo(20.5+40*i,20);
ctx.lineTo(20.5+40*i,580);
ctx.stroke();
}

ctx.beginPath();
ctx.arc(300,300,3,0,Math.PI*2,true);
ctx.fill();

/*ctx.beginPath();
ctx.arc(140,140,3,0,Math.PI*2,true);
ctx.fill();

ctx.beginPath();
ctx.arc(460,460,3,0,Math.PI*2,true);
ctx.fill();

ctx.beginPath();
ctx.arc(140,460,3,0,Math.PI*2,true);
ctx.fill();

ctx.beginPath();
ctx.arc(460,140,3,0,Math.PI*2,true);
ctx.fill();*/

var z=[140.5,460.5];
for (var i = 0; i < z.length; i++) {
	for (var j = 0; j < z.length; j++) {
		ctx.beginPath();
		ctx.arc(z[i],z[j],3,0,Math.PI*2);
		ctx.fill();
	}
}


//落子
var luozi=function(x,y,color){
    var zx=40*x+20.5;
    var zy=40*y+20.5;

var black=ctx.createRadialGradient(zx,zy,1,zx,zy,18);
black.addColorStop(0.1,'#555');
black.addColorStop(1,'black');
var white=ctx.createRadialGradient(zx,zy,1,zx,zy,18);
white.addColorStop(0.1,'#fff');
white.addColorStop(1,'#ddd');

ctx.fillStyle=color?black:white;
ctx.beginPath();
ctx.arc(40*x+20.5,40*y+20.5,14,0,Math.PI*2);
ctx.fill();
}
luozi(3,3,true);
luozi(2,2,false);

//黑白交错
var qizi={}
var kaiguan=true;
canvas.onclick=function(e){
	console.log(e.offsetX);
	console.log(Math.round(e.offsetX-20.5)/40);
	var x=Math.round((e.offsetX-20.5)/40);
	var y=Math.round((e.offsetY-20.5)/40);

if (qizi[x+'_'+y]) {return}
	luozi(x,y,kaiguan);
    qizi[x+'_'+y]=true;
	kaiguan=!kaiguan;
}


var lingrad=ctx.createLinearGradient(20,300,580,300);
lingrad.addColorStop(0,'red');
lingrad.addColorStop(0.2,'yellow');
lingrad.addColorStop(0.8,'red');
lingrad.addColorStop(1,'red');

ctx.lineWidth=2;
ctx.lineCap='round';
/*ctx.strokeStyle='red';*/
ctx.strokeStyle=lingrad;

//矩形的渐变色
/*ctx.fillStyle=lingrad;
ctx.fillRect(0,0,200,200);*/
ctx.beginPath();
ctx.moveTo(20,300);
ctx.lineTo(580,300);
ctx.stroke();




}