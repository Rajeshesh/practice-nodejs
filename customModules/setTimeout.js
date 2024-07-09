let mdl = (arg = "initial console") => {
  let amGetCallBackAsArg = (callBack) => {
    console.log("before calling");
    setTimeout(function () {
      callBack("I came to check callback after 3s");
    }, 3000);
  };

  setTimeout(() => {
    console.log("after 4 seconds");
    amGetCallBackAsArg((res) => {
      console.log("after callback", res);
    });
  }, 4000);

  console.log(arg);
};
module.exports=mdl
