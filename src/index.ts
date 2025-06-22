interface Obj{
   height: number;
   weight: number;
   gender?: boolean;
};
// interface act as class 

//type
type typefunc = (n:number,m:number)=> void;

interface newObj extends Obj {
 scholar:boolean;
 func: typefunc;
};

const gg: newObj={
  height:12,
  weight:34,
  scholar:true,
  func: (n,m)=>{
   console.log(n*m);
  },
};


const ken: newObj={
  height:12,
  weight:34,
  scholar:true,
  func: (n,m)=>{
   console.log(n*m);
  },
}; 

ken.func(12,54);

const  obj: Obj={ 
   height: 52,
   weight: 45,
   gender: true,
};

const  obj2: Obj={ 
   height: 52,
   weight: 45,
   // gender: 
};