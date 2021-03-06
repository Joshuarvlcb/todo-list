"use script";
const addBtn = document.querySelector(".add-btn");
const card = document.querySelector(".card");
const task = document.querySelector("task");
const submitContainer = document.querySelector(".add-list-container");
const backBtn = document.querySelector(".back");
const taskContainer = document.querySelector(".section");
const inputValue = document.getElementById("taskValue");
const submitThing = document.querySelector(".submit-btn");

let allTextContents;
let cliked;
addBtn.addEventListener("click", function (e) {
  card.style.display = "none";
  submitContainer.style.display = "block";

  submitThing.addEventListener("click", function (e) {
    if (inputValue.value !== "") {
      card.style.display = "block";
      submitContainer.style.display = "none";

      let html = `<div class="list-container">
        <div class=" two-items">
            <div class="check">
                <input type="checkbox">
            </div>

        </div>
        <div class="task">${inputValue.value}</div>

        <div class="trash">
            <ion-icon class="trash-can" name="trash-outline"></ion-icon>
        </div>
</div>`;
      taskContainer.insertAdjacentHTML("afterbegin", html);

      window.localStorage.setItem(inputValue.value, html);

      html = ``;
      const trash = document.querySelector(".trash");
      trash.addEventListener("click", function (e) {
        let click = e.target.parentElement.previousElementSibling.textContent;

        e.target.parentElement.parentElement.style.paddingTop = "0px";

        localStorage.removeItem(click);
        e.target.parentElement.parentElement.innerHTML = "";
      });
      inputValue.value = "";
    }
  });
});

const todaysDate = document.querySelector(".card-header-text");
const currentDate = function (date) {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "Febuary";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  return `${month} ${day}, ${year}`;
};
todaysDate.textContent = currentDate(new Date());

backBtn.addEventListener("click", function () {
  card.style.display = "block";
  submitContainer.style.display = "none";
});

console.log(localStorage);
Array.from(localStorage).forEach((_, i) => {
  const key = localStorage.key(i);
  taskContainer.insertAdjacentHTML("afterbegin", localStorage.getItem(key));
  const trash = document.querySelector(".trash");

  trash.addEventListener("click", function (e) {
    /*
        e.target
          <ion-icon class="trash-can" name="trash-outline"></ion-icon>
    e.target.parent
        <div class="trash">
            <ion-icon class="trash-can" name="trash-outline"></ion-icon>
        </div>

        sibling
            <div class="task">${inputValue.value}</div>
         */
    let click = e.target.parentElement.previousElementSibling.textContent;
    e.target.parentElement.parentElement.style.paddingTop = "0px";
    // cliked = allTextContents.find(cliked => {
    //     return cliked == click
    // })
    localStorage.removeItem(click);
    e.target.parentElement.parentElement.innerHTML = "";
  });
});
// if(taskContainer.children){
//     const listContainer = document.querySelectorAll('.list-container')
//    console.log(listContainer)

//    allTextContents =  Array.from(listContainer).map(listContainer => {
//        return listContainer.children[1].textContent
//    })
// }
// console.log(allTextContents)
