const btn = document.querySelector(".add-quote");

console.log(btn);

btn.addEventListener("click", () => {
  fetch(`https://api.kanye.rest/`)
    .then((response) => response.json())

    .then((data) => {
      const quotes = document.querySelector(".quotes");
      const divquote = document.createElement("div");
      divquote.className = "block";
      const p = document.createElement("p");
      p.textContent = data.quote;
      const divbtn = document.createElement("div");
      divbtn.className = "btn-div-flex";
      const btnup = document.createElement("button");
      btnup.className = "btn up";
      btnup.textContent = "up";
      const btndown = document.createElement("button");
      btndown.className = "btn down";
      btndown.textContent = "down";
      quotes.appendChild(divquote);
      divquote.appendChild(p);
      divquote.appendChild(divbtn);
      divbtn.appendChild(btnup);
      divbtn.appendChild(btndown);
      up();
      down();
    });
});

function up() {
  const divblock = document.querySelectorAll(".block");
  const buttonup = document.querySelectorAll(".up");
  for (let i = 0; i < divblock.length; i++) {
    buttonup[i].onclick = function () {
      let temp = divblock[i];
      divblock[i].previousElementSibling.insertAdjacentElement(
        "beforebegin",
        temp
      );
    };
  }
}

function down() {
  const divblock = document.querySelectorAll(".block");
  const buttondown = document.querySelectorAll(".down");
  for (let i = 0; i < divblock.length; i++) {
    buttondown[i].onclick = function () {
      let temp = divblock[i];
      divblock[i].nextElementSibling.insertAdjacentElement("afterend", temp);
    };
  }
}
