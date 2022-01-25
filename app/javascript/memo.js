function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", () => {
    console.log("OK")
  });
};

window.addEventListener('load', post);