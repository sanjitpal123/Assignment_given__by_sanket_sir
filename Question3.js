function prepareFullBreakFast() {
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
       
        rej("Tea making!");
      }, delay);
    });
  }

  Promise.all([makeEgg(), makeTea(), makeToast()])
    .then(() => {
      console.log("Full breakfast is made");
    })
    .catch((error) => {
      console.log("Error occurred:", error);
    });

  async function execute() {
    const eggResult = await makeEgg();
    const toastResult = await makeToast();
    const teaResult = await makeTea();
  }

  execute();
}

prepareFullBreakFast();












 