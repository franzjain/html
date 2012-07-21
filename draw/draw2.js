window.onload = function(){
	document.ontouchmove = function(e){e.preventDefault();}
	var canvas = document.getElementById('main');
	var canvastop = canvas.offsetTop;
	var context = canvas.getContext('2d');
	
	var lastx;
	var lasty;
	
	context.strokeStyle = "#000000";
	context.lineCap = "round";
	context.lineJoin = 'round';
	context.lineWidth = 5;
	
	function clear(){
		context.fillStyle = "#ffffff";
		context.rect(0, 0, 300, 300);
		context.fill();
		
		context.beginPath();
		context.arc(150, 30, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(120, 80, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(180, 80, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(90, 130, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(150, 130, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(210, 130, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(60, 180, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(120, 180, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(180, 180, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(240, 180, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(30, 230, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(90, 230, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(150, 230, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(210, 230, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.arc(270, 230, 20, 0, Math.PI * 2, false);
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke();
		context.closePath();
	}
	
	function dot(x, y){
		context.beginPath();
		context.fillStyle = "#000000";
		context.arc(x, y, 1, 0, Math.PI * 2, true);
		context.fill();
		context.stroke();
		context.closePath();
	}
	
	function line(fromx, fromy, tox, toy){
		context.beginPath();
		context.moveTo(fromx, fromy);
		context.lineTo(tox, toy);
		context.stroke();
		context.closePath();
	}
	
	canvas.ontouchstart = function(event){
		event.preventDefault();
		
		lastx = event.touches[0].clientX;
		lasty = event.touches[0].clientY - canvastop;
		
		dot(lastx, lasty);
	}
	
	canvas.onclick = function(event){
		event.preventDefault();
		
		lastx = event.clientX;
		lasty = event.clientY - canvastop;
		
		dot(lastx, lasty);
	}
	
	canvas.ontouchmove = function(event){
		event.preventDefault();
		
		var newx = event.touches[0].clientX;
		var newy = event.touches[0].clientY - canvastop;
		
		line(lastx, lasty, newx, newy);
		
		lastx = newx;
		lasty = newy;
	}
	
	var isMouseDown = false;
	
	canvas.onmouseup = function(event){
		isMouseDown = false;
	}
	
	canvas.onmousedown = function(event){
		var newx = event.clientX;
		var newy = event.clientY - canvastop;
		lastx = newx;
		lasty = newy;
		isMouseDown = true;
	}
	
	canvas.onmousemove = function(event){
		event.preventDefault();
		
		if(isMouseDown){
			var newx = event.clientX;
			var newy = event.clientY - canvastop;
			
			line(lastx, lasty, newx, newy);
			
			lastx = newx;
			lasty = newy;
		}
	}
	
	var clearButton = document.getElementById('clear');
	clearButton.onclick = clear;
	
	clear();
	
}