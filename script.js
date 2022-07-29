window.addEventListener("load", function () {
  const title = document.querySelectorAll(".accordeon__title");


  for(let i = 0; i < title.length; i++) {
    title[i].addEventListener("click", function () {
      this.classList.toggle("minus");
      this.nextElementSibling.classList.toggle("text");
      this.nextElementSibling.classList.toggle("text-underline");
    })
  }

});