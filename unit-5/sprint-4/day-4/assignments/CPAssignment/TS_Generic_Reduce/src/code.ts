

function Reduce<Type>(arr:Type[],callback:(a:number, b:Type)=>number,op:number=0):number{
 return arr.reduce((acc,curr)=>callback(acc,curr),op);

}
export default Reduce;
