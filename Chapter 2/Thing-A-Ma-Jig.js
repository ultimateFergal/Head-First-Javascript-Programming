// <!doctype html>
// <html lang="en">
// <head>
// <title>Play Thing-A-Ma-Jig</title>
// 	<meta charset="utf-8">
// 	</head>
// <body>
// 	<h1>Play Thing-A-Ma-Jig!</h1>
// 	<script type="text/javascript" src="battleship.js"></script>
// <script>
function clunk(times) {
	var num = times;
	while (num > 0) {
		display("clunk");
		num = num - 1;
	}
}
function thingamajig(size) {
	var facky = 1;
	clunkCounter = 0;
	if (size == 0) {
		display("clank");
	} else if (size == 1) {
		display("thunk");
	} else {
		while (size > 1) {
			facky = facky * size;
			size = size - 1;
		}
		clunk(facky);
	}
}
function display(output) {
	console.log(output);
	clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);
// </script>

// </body>
// </html>