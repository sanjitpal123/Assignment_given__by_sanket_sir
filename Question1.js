function MakeTea()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
           res("Tea is Ready!");
        },2000);
    })
}
let pr1=MakeTea();
pr1.then((result)=>{
  console.log(result);
});