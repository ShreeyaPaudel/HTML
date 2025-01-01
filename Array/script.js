// const formObj = {
//     name: "Aruna",
//     section: "B",
//     id:"230318"
// };

// console.log(formObj);

// const a = Object.keys(formObj);
// console.log(a);

// const b = Object.values(formObj);
// console.log(b);

// const d = Object.assign(formObj, {address: "Mahankal"});
// console.log(d);

// const c = Object.entries(formObj);
// console.log(c);

//manipulating array

let names = ["Aruna", "Shreeya", "Samikshya"];   //array
let strNames = names.toString();    // returns array of string on default
console.log(strNames);

let strNames1 = names.join(" and ");
console.log(strNames1);

let nums = [1,2,3,4];
let nums2 = [5,6,7,8];
let nums3 = [5,10,11,12];
let nums4 = [13,23,45,56];
let concatArr = nums.concat(nums2, nums3, nums4);
console.log(concatArr);

let arr = ["Danny", "Joe", "John", "David", "Sammy", "Joe"];
// arr.splice(1, 0, "Alice", "Amy");  //  1 vaneko ka bata suru garne matlab ka rakhne 0 le pachadi k cha matlab vayena 
// console.log(arr);

// let spliced = arr.splice(1,1 ,"Alice", "Amy");
// console.log(arr);

// let spliced = arr.splice(1,1);
// console.log(arr);

// let slice = arr.slice(1);
// console.log(slice);

// let slice = arr.slice(0,2);
// console.log(slice);

// let spliced = arr.splice(1,2);
// console.log(arr);

// let index = arr.indexOf("Joe"); //1
let index = arr.lastIndexOf("Joe"); //5
console.log(index);   

let numbers = [1,2,3,4,5];
numbers.forEach(n => console.log(n));

const account =[
    {name: "st Aruna", class:"12", roll:"13"},
    {name: "st Shreeya", class:"12", roll:"14"},
    {name: "Samikshya", class:"12", roll:"15"},
    {name: "Yunika", class:"12", roll:"16"},
    {name: "Deepa", class:"12", roll:"17"}
];
console.log(account);
account.forEach(n => console.log(n));

account.forEach(n => console.log(n.name));
account.forEach(n => console.log(n.class));

let stName = account.filter(a => a.name.includes("st"));
console.log(stName);

let class1 = account.filter(a => a.class.includes(12));
console.log(class1);


let cities =[
    {name: "Kathmandu", rivers: 6},
    {name: "Pokhara", rivers: 5},
    {name: "Butwal", rivers: 2},
    {name: "Hetauda", rivers: 3},
];

// let moreThanTwoRivers = cities.filter(c => c.rivers > 2);
// console.log(moreThanTwoRivers);

let moreThanTwoRivers = cities.filter(c => c.rivers > 2 &&  c.name.includes("Kathmadu"));
console.log(moreThanTwoRivers);

let info =[
    {name:"Shreeya Paudel", age:19, class:12, contact:981378875, address:"Bhaisepati,lalitpur "},
    {name:"Samekshya Baniya", age:21, class:12, contact:981378875, address:"Bhaisepati,lalitpur"},
    {name:"Aruuna Guragain", age:21, class:12, contact:981342275, address:"Bhaisepati,lalitpur"  },
    {name:"Jeson Dangol", age:19, class:12, contact:981321875, address:"Bhaisepati,lalitpur"  },
    {name:"Mahika Lakoul", age:19, class:12, contact:981373475, address:"Bhaisepati,lalitpur"  },

];

let a = info.filter(i => i.age>=20 && i.age<=30);
console.log(a);

info.forEach(i => console.log(i.name));

// let b = info.age.toString();
// console.log();

let double = info.map(person => ({
    age: person.age*2
}));
console.log(double);

let b = info.map (n,)


