console.log("hello world");
//single line
/*multi line*/

//variables
let age = 23,gender="f"; //multi variable in single line declaration
console.log(age);
age = "qwerty"; //simple string with double quotes
console.log(age,gender);

var name = `john p - ${age} asdqwer`; //backsticks uasage
console.log(name);

//null is just a reference to a memory location 
let a = null;
console.log(a);
//undefined is just a variable declared but not assigned with any value;
let b;
console.log(b);

//type of 
console.log(typeof a,typeof b)

//number conversion
let num = '123.10';
let num2 = 432
num = num+num2;
console.log(parseInt(num))
console.log(Number(num));
console.log(parseFloat(num))

//if conditions
if(num>123){
    console.log("yes")
}else if(num<123){
    console.log("less")
}else{
    console.log("failed")
}

//ternary operation 
let ternary = num>123?'yes':'less';
console.log(ternary)

//boolean conversions
let x = 0
console.log(x == false)
console.log(x==true)
console.log(!x) //true
console.log(!x == false);
console.log(!x == true);

//nullish operator validates only null and undefined as false value, other than anyhting will be true
let y = null; //null
let z; //undefined
console.log(y ?? z);
// || validates 
console.log(z || y);


