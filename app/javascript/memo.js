const buildHTML = (XHR) => {
  const item = XHR.response.post;  // XHR.response.postと記述することで、レスポンスの中から投稿されたメモの情報を抽出し、変数itemに格納
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時:${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html; //関数buildHTMLの返り値にhtmlを指定  htmlとは、3〜11行目で定義した変数htmlのことを表している。つまり、投稿後に新たに生成されたHTMLのこと
};

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
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null; //return null;によってJavaScriptの処理から抜け出すことができ、エラーが出た場合に、30行目以降に記述されている処理を行わないようにすることが目的
      }
      const list = document.getElementById("list");
      const formText = document.getElementById("content");  // リセットの対象となるフォームの要素contentを取得して、変数formTextに格納
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);