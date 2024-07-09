let mdl = (ar) => {
  let networkOutput = ar;
  let firstPromise = new Promise((res, rej) => {
    setTimeout(() => {
      if (networkOutput) {
        res(networkOutput);
      } else {
        rej("sorry network error");
      }
    }, 2000);
  });

  console.log(firstPromise);
  firstPromise
    .then((res) => {
      return [res];
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      console.log("finally finished");
    });
};
module.exports = mdl;
