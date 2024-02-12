const btn = document.getElementById("debounce");
console.log(btn);

const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

btn.addEventListener(
  "click",
  debounce(function () {
    alert(
      "Hello,No matter how many times you" +
        "click the debounce button, I get " +
        "executed once every 3 seconds!!"
    );
  }, 3000)
);
