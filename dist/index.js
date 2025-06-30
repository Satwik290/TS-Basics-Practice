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
//classes 
/*
class Player {
   public readonly id:string;
  constructor(
    private height:number,
    public weight:number,
    protected power:number){
     this.id=String(Math.random()*100);
    }
    getmyheight=()=>this.height;
}

class Player2 extends Player{
   special:boolean;
   constructor(height:number,weight:number,power:number,special:boolean){
      super(height,weight,power);
      this.special=special;
   }
   getmypower=()=> this.power;
}

const satwik = new Player2(100,150,22,true);
console.log("weight",satwik.weight);
console.log("Height",satwik.getmyheight());
console.log("power",satwik.getmypower);
console.log("id",satwik.id); */
//other functions of classes (get,set)
/*
class Player {
  public readonly id:string;
 constructor(
   private height:number,
   public weight:number,
   protected power:number){
    this.id=String(Math.random()*100);
  }
  //greater func
  get getmyheight(){
    return  this.height;
  }
  //setter function
  set changeHeight(val:number){
     this.height=val;
  }
};

const satwik = new Player(100,150,25);
console.log("height",satwik.getmyheight);
satwik.changeHeight=200;
console.log("height",satwik.getmyheight);
*/
/**
interface  ProductType{
   name:string;
   price:number;
   stock:number;
   offer?:boolean;
};

interface GiveId{
   getId:()=>string;

};

class Product implements ProductType{
  private id:string= String(Math.random()*1000);

  constructor(
  public name:string,
  public price:number,
  public stock:number){
  }
  getId=()=>this.id;
};

const product1= new Product("mac", 167809,65);
console.log(product1);
 */
