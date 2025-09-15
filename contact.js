(function(){
  emailjs.init("7GqBwIFeOdZrYjVXS"); // вставь свой EmailJS Public Key
})();

document.getElementById("rate-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const status = document.getElementById("status");
  status.innerHTML = "⏳ Отправка...";

  emailjs.sendForm("service_iohanpa", "template_gjquucg", this)
    .then(() => {
      status.innerHTML = "✅ Заявка успешно отправлена!";
      this.reset();
    }, (err) => {
      status.innerHTML = "❌ Ошибка: " + JSON.stringify(err);
    });
});
