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
      btnup.className = "btn";
      btnup.textContent = "up";
      const btndown = document.createElement("button");
      btndown.className = "btn";
      btndown.textContent = "down";
      quotes.appendChild(divquote);
      divquote.appendChild(p);
      divquote.appendChild(divbtn);
      divbtn.appendChild(btnup);
      divbtn.appendChild(btndown);
    });
});
