function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", () => {
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("post", posts_path, true);
    XHR.responseType = "json";
  });
};

window.addEventListener('load', post);