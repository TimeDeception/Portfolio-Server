function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (email && subject && message) {
      sendFormData(email, subject, message);
    } else {
      alert("please fill all fields.");
    }
  });

function sendFormData(email, subject, message) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/send-email", true);
  xhr.setRequestHeader("content-type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if ((xhr.status = 200)) {
        alert(xhr.responseText);
      } else {
        alert("Something went wrong when sending the email.");
      }
    }
  };

  const data = JSON.stringify({
    email: email,
    subject: subject,
    message: message,
  });
  xhr.send(data);
}
