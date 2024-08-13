    // ES6 Let let ki value change kar shakta ha
// let num = 20;
// num = 35;
// num = 67;
// console.log(num)


    // ES6 Const const ki value ham change nahi kar shakta ha 
// const num = 89;
// console.log(num)

// let or const ma kuch similarities ha dono window ma add hota ha or dono braces scope hai


    // ES6 Arrow Function
// arrow function 3 types ka hai
//01) Basic fat arrow function?
// const upload = () =>{

// }
// upload function name ha

// 02) Fat arrow function with one parameter?
// const upload = (a) =>{
//     console.log(a)
// }
// upload(5)

// 02) Fat arrow function with impliciat return
// const g = () => 117;
// console.log(g());



    // ES6 template literals backtick
// let sum = 5+9;
// let num = 5*9;
// console.log(`The answer of sum is ${sum} and num is ${num}`);

// double quotaion ka andar ham variable ko nahi likh shakta ha backtick ma dollar sign ka sath 
// use kar shakta ha, double quotaion ka andar sum or num sa calculation nahi hoti ha wo sum or num ko
// string store kara ga.


    // ES6 Spread & Rest operator
// let a = [1, 3, 67, 89, 345, 34, 78, 34, 90];
// let b = [...a];
// console.log(b)

    // Rest operator
// function sum(a, b, c, ... d){
//     console.log(a, b, c, d)
// }
// sum(4, 7, 9, 3, 6, 78, 66, 55);

// Spread use hota ha copy ya fir us location par kisi aur ki values bikharna ke liya.
// Rest use hota ha jab apko bacha howe values aik varaibale ma dalna ho.

// let a = [4, 7, 9, 3, 6];
// console.log(a)
// let [b, c, d, e] = a;

console.log(a)
console.log(b);
console.log(c);
console.log(d);
console.log(e);
this is called destruction