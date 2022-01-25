function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", () => {
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
  });
};

window.addEventListener('load', post);