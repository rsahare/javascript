var name = "Rajeev";
let email = "rajeev@gmail.com";
const phone = "9594939291";
console.log(name);
//1. var can be updated and redeclared.
//var updated
    name = "Raj";
    console.log(name);
//redeclared
    var name = "Sahare";
    console.log(name);

//2. let can updated but can not be redeclared.
    console.log(email);
// let email = "sahare@gmail.com";
    email = "sahare@gmail.com";
    console.log(email);

//3. const can neither be updated and nor be redeclared. Because as the name defines its a constant.
console.log(phone);
    // phone = "9192939495";
    // console.log(phone);

//4. var and let are initialized with undefined keyword whereas const must be initialized during declaration.
    var a;
    let b;
    const c = "constant";
    console.log(a,b,c);

//5. Variable created using var are created only once in the memory.
// below example will print the text that which mean both the variables text is pointing to the same memory location.
var text = "this";
{
    var text = "that";
    console.log(text);
}
console.log(text);

