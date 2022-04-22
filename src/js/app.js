function client() {
  $.get("https://api.kanye.rest/", (data) => {
    console.log(data);
    $(".quotes").append("<div></div>");
    $(".quotes div").last().addClass("block text-center");
    $(".block").last().append("<p></p>");
    $("p")
      .last()
      .text(function () {
        return data.quote;
      });
    $(".block").last().append('<div class="btn-div d-flex flex-column"></div');
    $(".btn-div").last().append('<button class="btn up"></button');
    $(".btn-div").last().append('<button class="btn down"></button');
    $(".up")
      .last()
      .text(function () {
        return "up";
      });
    $(".down")
      .last()
      .text(function () {
        return "down";
      });
    // const p = document.createElement("p");
    // p.textContent = data.quote;
    // const divbtn = document.createElement("div");
    // divbtn.className = "btn-div-flex";
    // const btnup = document.createElement("button");
    // btnup.className = "btn up";
    // btnup.textContent = "up";
    // const btndown = document.createElement("button");
    // btndown.className = "btn down";
    // btndown.textContent = "down";
    // quotes.appendChild(divquote);
    // divquote.appendChild(p);
    // divquote.appendChild(divbtn);
    // divbtn.appendChild(btnup);
    // divbtn.appendChild(btndown);
    up();
    down();
  });
}

function up() {
  const divblock = document.querySelectorAll(".block");
  for (let i = 0; i < $(".block").length; i++) {
    $(".up")[i].onclick = function () {
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
  for (let i = 0; i < $(".block").length; i++) {
    $(".down")[i].onclick = function () {
      let temp = divblock[i];
      divblock[i].nextElementSibling.insertAdjacentElement("afterend", temp);
    };
  }
}
