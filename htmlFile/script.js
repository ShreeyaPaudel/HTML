
// console.log("it is working");

// // Global scope
// let globalVar = " I am global";
// function test(){
//     console.log(globalVar)
// }
// test();
// console.log(globalVar)

// // block scope
// if(true){
//     let blockVar = "I am block scoped";
//     const blockConst = " I am also block scoped"
//     console.log(blockVar);
//     console.log(blockConst);
// }
// // console.log(blockVar);    //Error: blockVar is not defined
// // console.log(blockConst);  //Error: blockConst is not defined


// // let var const
// // var
// console.log(a);  //undefined
// var a = 10;
// function test(){
//     var x = 5;
//     console.log(x);  //Accessible within the function
// }
// test();
// // console.log(x);    //Error: x is not defined(function-scoped)

// // let
// // console.log(b);   // Error: Cannot access 'b' before initialization
// let b =20;
// // Block scope
// if(true){
//     let y = 15;
//     console.log(y);  // Accessible iniside the block
// }
// // console.log(y);  //Error: y is not defined(block-scoped)

//Reassignment
// let z = 30;
// z = 40; //Works
// z = 100; // can be reassigned multiple times
// console.log(z);

// //const
// // Temporal Dead zone
// console.log(c);  // Error: cannot access 'c' before initialization

// // immutable binding
// const PI = 3.14; 
// // PI = 3.15;  //Error : Assignment to constant value

// //Mutable objects
// const obj = {name : " Alice"};
// obj.name = " Bob";   // Works (you can modify properties)
// console.log(obj);    // {name : 'Bob}

// const arr = [1,2,3];
// arr.push(4); // Works you can modify arrays
// console.log(arr);  // [1,2,3,4]

// // arithmetic operators
// let a = 5;
// b = 2;
// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log(a**b);
// console.log(a%b);
// console.log(a-b);

// // assignment operators
// let x= 10;
// x += 5; // x=x+5
// console.log(x);

// //comparison operators
// let  y = 10;
// console.log(y === "10"); //false(strict equality checks type)
// console.log(y == "10"); //true (loose equality converts types)

// //logical operators
// let a = true;
// b = false;
// console.log( a && b); 
// console.log( a || b); 
// console.log( !a ); 

// //bitwise operators
// console.log(5 & 1);
// console.log( 5 | 1);

//  // if-else
//  let score =85;

//  // using if-else
//  if(score >= 90){
//     console.log("Grade: A")
//  }else if (score >= 80){
//     console.log("Grade: B")
//  }else if (score >= 70){
//     console.log("Grade: C")
//  }else{
//     console.log("Grade: F")
//  }

    // let grade = "B";
    // switch (grade){
    //     case "A":
    //         console.log("Excellen!");
    //         break;
    //     case "B":
    //         console.log("good Job");
    //     case "C":
    //         console.log("you can do better");
    //     break;
    //     default:
    //         console.log("invalid grgade")
    // }

//    let count = 0;
// while (count< 5){
//     console.log("count is:", count);
//     count ++; // increment the  count
// }


// for ( let i = 0; i<5; i++){
//     console.log('vaue of i is:', i);
// }

// let sum = 0;
// for (let i = 1; i<=10; i++){
//     sum+= i; // add the current value of i to sum
// }
// console.log("the sum of numbers from 1 to 10 is:", sum);

function test(value){
    sum+2
}