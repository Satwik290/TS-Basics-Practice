"use strict";
// interface Obj{
//    height: number;
//    weight: number;
//    gender?: boolean;
// };
// // interface act as class 
// //type
// type typefunc = (n:number,m:number)=> void;
// interface newObj extends Obj {
//  scholar:boolean;
//  func: typefunc;
// };
// const gg: newObj={
//   height:12,
//   weight:34,
//   scholar:true,
//   func: (n,m)=>{
//    console.log(n*m);
//   },
// };
// const ken: newObj={
//   height:12,
//   weight:34,
//   scholar:true,
//   func: (n,m)=>{
//    console.log(n*m);
//   },
// }; 
// ken.func(12,54);
// const  obj: Obj={ 
//    height: 52,
//    weight: 45,
//    gender: true,
// };
// const  obj2: Obj={ 
//    height: 52,
//    weight: 45,
//    // gender: 
// };
/*
type Functype = (n:number,m:number,l?:number)=> number|string;
const func:Functype =(n,m,l)=>{
   if(typeof l === "undefined")return n*m;
   return n*m*l;
}
func(1,3) */
//default
/*
type Functype = (n:number,m:number,l?:number)=> number|string;
const func:Functype =(n,m,l=7)=>{
   if(typeof l === "undefined")return n*m;
   return n*m*l;
}
func(1,3) ; */
//rest operator
/**
type Functype = (...m:number[])=> number[];
const func:Functype=(...m)=>{
   return m;
}
func(1,3,9,65,97) */
// function lol(n:number):number{
//    return 54;
// }
//func in obj-------------------------------------------------------------------
/**
interface product {
   name:string;
   stock:number;
   price:number;
   photo?:string;
   readonly id:string;
}

type Getdatatype = (product:product)=>void;
const getdata:Getdatatype= (product)=>{
   console.log(product);
};

const productone:product={
   name:"macbook",
   stock:10,
   price:100000,
   id:"fvvj764",

}
getdata(productone); */
//never type
/*
type theme = "light"|"dark";
const errorHandler = ():never=>{
   throw new Error();
}; */
