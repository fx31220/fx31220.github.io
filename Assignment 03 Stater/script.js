"use strict";
const btnSubmit = document.querySelector(".btn-info");
btnSubmit.addEventListener("click", function () {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const erroremail = document.querySelector(".error-email");
  const check = emailValue.match(regex);
  const sectionContent = document.querySelector(".info-2-hide");
  const submitEmail = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitEmail.style.display = "none";
    erroremail.innerHTML = "";
  } else {
    erroremail.innerHTML = "Please enter valid email ! ";
    erroremail.style.color = "red";
  }
});

function view_move(element) {
  const view_more = element.querySelector(".bio-ul .view-button");
  view_more.style.visibility = "visible";
}
function view_out(element) {
  const view_more = element.querySelector(".bio-ul .view-button");
  view_more.style.visibility = "hidden";
}
function view_click(button) {
  console.log(button);
  const element = button.parentElement.parentElement;
  const job_content = element.querySelector(".bio-ul");
  const view_less = element.querySelector(".view-button > button");
  if (view_less.innerHTML.includes("More")) {
    view_less.innerHTML = `View Less`;
    job_content.style.display = "block";
  } else {
    view_less.innerHTML = `View More`;
    job_content.style.display = "none";
  }
}
