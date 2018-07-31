function getBezierBasis(i, n, t) {
	function f(n) {
		return (n <= 1) ? 1 : n * f(n - 1);
	};
	return (f(n)/(f(i)*f(n - i)))* Math.pow(t, i)*Math.pow(1 - t, n - i);
}

function getBezierCurve(arr, step) {
	if (step == undefined) {
		step = 0.01;
	}
	var res = [];
	for (var t = 0; t < 1 + step; t += step) {
		if (t > 1) {
			t = 1;
		}
		var ind = res.length;
		res[ind] = [0,0];
		for (var i = 0; i < arr.length; i++) {
			var b = getBezierBasis(i, arr.length - 1, t);	
			res[ind][0] += arr[i][0] * b;
			res[ind][1] += arr[i][1] * b;
		}
	}
	return res;
}

function drawLines(ctx, arr) {
	ctx.clearRect(0,0, 2000, 2000 );
	var i = 0;
	function delayDraw() {
		if (i >= arr.length - 1) {
			return;
		}
		ctx.beginPath()
		ctx.moveTo(arr[i][0],arr[i][1]);
		ctx.lineTo(arr[i+1][0],arr[i+1][1]);
		ctx.stroke();
		++i;
		delayDraw();
	}
	delayDraw();
}
drawC = document.getElementById('bezier');
		
if (drawC && drawC.getContext) {
	var ctx = drawC.getContext('2d');
	var flow; 
	var mas=[];
	mas[0] = [0,200];
    mas[1] = [200,80];
	flow = getBezierCurve(mas);
	drawLines(ctx, flow);
}