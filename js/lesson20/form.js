"use strict";
const rate = document.querySelector(".rate");
const feedback = document.querySelector(".form-block");
const returnBlock = document.querySelector(".return-block");
const errorBlock = document.querySelector(".error-block");
const returnButton = document.querySelector(".return-button");
const writeMore = document.querySelector(".form-more");
const inputs = document.querySelectorAll(".input");
const form = document.querySelector(".form-block");
const FORM_DATA = {
  adept_marketing: (data) => ({
    host: "XR-Adept",
    subject: "Вопрос с XR-Adept",
    html: `Email: ${data.email}, <br> Обращение: ${data.inform},<br>`,
    text: `Email: ${data.email}. Обращение: ${data.inform}.`,
    type: "xradept",
  }),
  adept_tariff: (data) => ({
    host: "XR-Adept",
    subject: "Заявка с XR-Adept",
    html: `Имя: ${data.name},<br> Фамилия: ${data.lastname},<br> Компания: ${data.company},<br> Телефон: ${data.phone},<br> Email: ${data.email},<br>`,
    text: `Имя: ${data.name}. Фамилия: ${data.lastname}. Компания: ${data.company}. Телефон: ${data.phone}. Email: ${data.email}.`,
    type: "xradept",
  }),
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Array.from(formData.entries()).reduce(
    (prev, [name, value]) => ({
      ...prev,
      [name]: value,
    }),
    {}
  );
  const mailData = FORM_DATA[data.type](data);
  const mailDataJSON = JSON.stringify(mailData);

  try {
    await fetch("https://xr-adept.ru/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: mailDataJSON,
    });
    for (let input of inputs) {
      input.value = null;
    }
    rate && (rate.style.display = "none");
    writeMore && (writeMore.style.display = "none");
    feedback && (feedback.style.display = "none");
    returnBlock && (returnBlock.style.display = "block");
    errorBlock && (errorBlock.style.display = "none");
  } catch (error) {
    errorBlock && (errorBlock.style.display = "block");
  }

  returnButton.addEventListener("click", () => {
    feedback.style.display = "block";
    returnBlock.style.display = "none";
    writeMore.style.display = "block";
    errorBlock && (errorBlock.style.display = "none");
  });
});
