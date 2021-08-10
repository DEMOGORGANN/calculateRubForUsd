"use strict";

const inputRub = document.querySelector("#rub"),
  inputUSD = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  const requst = new XMLHttpRequest();
  requst.open("GET", "js/current.json");
  requst.setRequestHeader("Content-type", "application/json; charset = utf-8 ");
  requst.send();
  requst.addEventListener("load", () => {
    if (requst.status === 200) {
      const data = JSON.parse(requst.response);
      inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUSD.value = "Что-то пошло не так";
    }
  });
});
