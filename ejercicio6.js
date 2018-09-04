function cuadrado (n) {
	var a;
	a=n*n;

return a;
} 

function sum_cuadrado (i) {
	var sum, sum_2;
	sum = (i*(i+1))/2;

	sum_2=cuadrado(sum);

return sum_2;
}

function cuadrado_sum (w) {
	var sum_cua;

	sum_cua = (w*(w+1)*(w*2+1))/6;

	return sum_cua;

}

function diferencia (b) {
	var d;

	d=sum_cuadrado(b)-cuadrado_sum(b);

	return d;
}