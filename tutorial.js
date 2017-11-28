/*
Run current script in node (Alt + R)
  * Run current script in node debug (Alt + D)
  * Run current script in node and arguments (Ctrl + Alt + r)
  * Run current script in node debug and arguments (Ctrl + Alt + D)
*/

// example of recursion
function findPower (num, pow) {
	
	if (pow == 1)
	{
		return num;
	}
	else
	{
		return num * findPower(num, pow-1);
	}
}

function restParams (...values) {
	// body...
	console.log(arguments[0]);
	var sum=0; 
	for (item in values)
	{
		// console.log(item);
        sum += Number(item)
	}
	return sum

}
console.log(restParams(1,2,3,4,5))
// example of ananymous function
x = new Function("x", "y", "return x+y;");
console.log(typeof(x(2,3,4))) 

console.log(Math.max(...[1,2,3,41,5]));
console.log(..."hello"[2])
console.log(Array.from("hello"))

// creation of object
x = new Object()
x.name = "farhan"
console.log(x)
// var x = "fstjs"
// console.log(`called ${x} times`)
console.log(Object.getOwnPropertyDescriptor(x, "name"))

function walk() {
	// body... 
	console.log('animal walks');
}

animal = new Object()
animal.eat = true
animal.walk = walk

rabbit = new Object()
rabbit.__proto__ = animal
console.log(rabbit.eat)
console.log(walk.prototype.constructor)

var http = require("http");
 
http.createServer(function (request, response)
	{	console.log('request');
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.end('Hello World\n');
	}).listen(8081);