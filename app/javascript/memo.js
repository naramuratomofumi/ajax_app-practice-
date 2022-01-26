function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("post", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      const list = document.getElementById("list");
      const formText = document.getElementById("content");  // リセットの対象となるフォームの要素contentを取得して、変数formTextに格納
      const item = XHR.response.post;  // XHR.response.postと記述することで、レスポンスの中から投稿されたメモの情報を抽出し、変数itemに格納
      const html = `
        <div class="post">
          <div class="post-date">
            投稿日時:${item.created_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`
      list.insertAdjacentHTML("afterend", html)
    };
  });
};

window.addEventListener('load', post);