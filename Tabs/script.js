const about = document.querySelector(".aboutme");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id; // event returns ann object and dataset in the object is a readonly property of the element shows the data is present... ex..//HTML <div id="hello"  data-user= "shiv">   //JS let a = doc.gtelmntbyid("hello")     ... a.dataset.id ="niw" it basically gives data which are given data keyword in html

  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });


    e.target.classList.add("active");
    // hide other articles


    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});