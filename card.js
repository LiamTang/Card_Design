/* Show hidden event */

function myFunction() {
  let e = document.querySelector(".icon-down");
  e.addEventListener("click", function () {
    document.querySelector(".p-format3").classList.toggle("show");
  });
}
