
function processData()
{
    function fetchData()
    {
        return new Promise((res,rej)=>{
            setTimeout(()=>{
              res([3,2,5]);
            },2000);
        });

    }
    function analyzeData(arrayofnum)
    {
        return new Promise((res,rej)=>{
             setTimeout(function timer(){
                  const result=arrayofnum.every((element)=>{
                    return element>0;
                  });

                   if(result)
                   {
                     let  sum=arrayofnum.reduce(function reducer(acc,currentvalue){
                        return acc+currentvalue;
                     },0);
                     let average=sum/arrayofnum.length;
                     res({sum,average});
                   }

                   else{
                        rej(new Error("all are not positive number"));
                     }

                 });
        })
    }

    let pr1=fetchData();
    pr1.then((result)=>{
        console.log(result);
        return analyzeData(result);
    }).then((reslut)=>{
        console.log(reslut);
    }).catch((error)=>{
        console.error(error.message);
    })


}
processData();