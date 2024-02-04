function makeEgg() {
  const random = Math.random();
  const delay = 1000 + random * 4000;
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Egg is Made!");
    }, delay);
  });
}

function makeToast() {
  const random = Math.random();
  const delay = 1000 + random * 4000;
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Toast is Made!");
    }, delay);
  });
}

function makeTea() {
  const random = Math.random();
  const delay = 1000 + random * 4000;
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Tea is made !");
    }, delay);
  });
}



function prepareFullBreakFast() {
   async function execute()
   {
    try{
     const result= await Promise.all([makeEgg(),makeTea(),makeToast()]);
      console.log("Full BreakFast is Ready");
    }catch(error)
    {
      console.log("Error comes between:",error);
    }
      
   }
   execute();
}

prepareFullBreakFast();











 
