function MakeTea()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
           res("Tea is Ready!");
        },2000);
    })
}
 function prepareBreakfast()
 {
  
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res("Toast is Ready!");
    },3000)
  })
 }
 const pr1=MakeTea();
 const pr2=prepareBreakfast();
 
 pr1.then((result)=>{
  console.log(result);
 },(result)=>{
  throw result;
 })
 pr2.then((result)=>{
  console.log(result);
 } ,(result )=>{
  throw result;
 }).catch((error)=>{
  console.log("Error is :",error);
 })