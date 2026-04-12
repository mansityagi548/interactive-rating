const buttons = document.querySelectorAll(".circle"); // this is the numbers
const submitBtn = document.querySelector("#btn"); // this is the submit.
const renderHtml = document.querySelector(".container");

function setColor(button) {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  button.classList.add("active");
}

let rating = ""; // in this the ratings that you choosed would be
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    rating = btn.textContent;
    setColor(btn);
  });
});

function renderHTML() {
  let html = "";
  html += `
       <div class="thank">
            <img src="icons/illustration-thank-you.svg" alt="">
         </div>
         <section class="givenRatings">
            <p>You selected ${rating} out of 5</p>
         </section>
         <section class="appreciation">
            <h1>Thank you!</h1>
         </section>
         <p id="thankyou">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    `;

    renderHtml.innerHTML = html;
}

submitBtn.addEventListener("click", () => {
  renderHTML();
});
