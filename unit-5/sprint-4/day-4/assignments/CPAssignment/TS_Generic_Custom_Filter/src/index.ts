import Filter from "./code";
  console.log(Filter<number>([6,9,12,4,6,21],(element,index) =>{
      if(index %2 === 0) return true;
      return false;
  }));
  