document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector("#submit-btn");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      submitButton.innerText = "Sending...";
      submitButton.disabled = true;

      emailjs.sendForm("service_kxija51", "template_oowoyk8", this).then(
        () => {
          submitButton.innerText = "Message Sent!";
          this.reset();

          setTimeout(() => {
            submitButton.innerText = "Send Message";
            submitButton.disabled = false;
          }, 3000);
        },
        (error) => {
          submitButton.innerText = "Failed";
          submitButton.disabled = false;
          console.error(error);
        },
      );
    });
});
