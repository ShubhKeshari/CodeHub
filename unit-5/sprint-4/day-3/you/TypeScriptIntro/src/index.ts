// console.log("Hello from typescript");

// // let a = 10;
// //a ="String"; // It will not throw error in javascript but in type script it will throw error

// //number

// let a: number = 10;

// //string

// let b: string = "String";

// //boolean

// let c: boolean = true;

// //undefined

// let d: undefined = undefined;

// //Array

// let arr: number[] = [1,2,3,5];

// let arrString: string[] = ["abc", "def"];

// let arr2:Array<number> = [4,5,6,8]; // Define array with constructor

// function  sum (a: number, b: number) : number {
//     return a + b;
// }

// let a:null|number = null;

// a = 10;

//a = "shubh" it will throw error the a type will be null or number

//type and interface

// type DataType = null|number;

// let a: DataType = null;

// a = 10;
// type Person={
//     fname:string;
//     lname:string;
//     address:string;
//     id:number;
//     isMarried?:boolean; //It is optional key 
// }

// interface Person{
//     fname:string;
//     lname:string;
//     address:string;
//     id:number;
//     isMarried?:boolean; //It is optional key 
// }

// let person:Person={
//     fname:"shubham",
//     lname:"keshari",
//     address:"Prayagraj",
//     id:1
// }

//person.pin(212101)-> It will throw error beacuse pin keyword is not defined in object
// type Cartitems = {
//     id: number;
//     store: string;
//     products: Product[];
// };
// type Product = {
//     id: number;
//     p_name: string;
//     price: number;
// };

// Interface is only used with object
// interface Product{
//     id: number;
//     p_name: string;
//     price: number;
// }
// interface Cartitems{
//     id: number;
//     store: string;
//     products: Product[];
// }

// let cartItems: Cartitems[] = [
//     {
//       id: 1,
//       products: [{ id: 1, p_name: "Jeans", price: 1000 }],
//       store: "Amazon",
//     },
//     {
//       id: 1,
//       products: [
//         { id: 1, p_name: "Jeans", price: 1000 },
//         { id: 2, p_name: "Shirt", price: 2000 },
//       ],
//       store: "Amazon",
//     },
//   ];

// We can inherit property from object using interface that we not do with type

// interface Shape{
//     color:string;
// }

// interface Square extends Shape{
//     sideLength:number;
// };

// const product: Square={
//     sideLength:4,
//     color:"red"
// }

// function print(a:string):void{ // function returning void
//     console.log(a);
// }

// interface Flyable{
//     fly():void;
// }

// interface Swimmable{
//     swim():void;
// }

// interface Duck extends Flyable, Swimmable{ // Multiple inheritence not multilevel inheritance
//     quack():void;
// }

//Union
// type Union = number|string|boolean; //Datatype can be number, string or boolean
// let a:Union = 10;
//  a="abc"


//Intersection
// interface User{
//     id:number;
//     email:string;
// }

// interface Person{
//         fname:string;
//         lname:string;
//         address:string;
//         isMarried?:boolean; //It is optional key 
// }

// let employee:User & Person={
//     id:5,
//     email:"shubh1999@gmail.com",
//     fname: "shubham",
//     lname:"keshari",
//     address:"Prayagraj",
//     isMarried:true,
// }

//Define a type which will have the keys for both company and softwareDev
// type Company = { 
//     name: string; 
//     address: string; 
//     open: boolean 
// };

// type SoftwareDev = { 
//     f_name: string; 
//     company: string; 
//     age: number 
// };

// type Employee= Company & SoftwareDev; 

//Enum

//petrol|diesel|cng|electric

//East|West|North|South

// enum Direction{
//     East="EAST",
//     West="WEST",
//     North="NORTH",
//     South="SOUTH"
// }

// enum Role{
//     user="USER",
//     admin="ADMIN",
//     superAdmin="SUPER_ADMIN"
// }

// let dir = Direction.West;
// console.log(dir);

//Tuple

// let person={
//         fname:"shubham",
//         lname:"keshari",
//         address:"Prayagraj",
//         id:1
// }
// //We can not define optional in tuple, what order we have written we have to write like that 
// //we cant change anything in tuple
// type Tuple = [string, string, string, number];

// let user:Tuple=["Vinod","keshari","prayagraj",2];

// type Rgb = [number, number, number];

// let color:Rgb=[255,255,255];

//Generic function
