function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("fromEmail").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").value,
  };
  emailjs
    .send("service_2byfh77", "template_00bawh3", tempParams)
    .then(function (res) {
        console.log(res);
    //   alert("Succesfully send your mail");
      const alerts = document.getElementById("alert");
      alerts.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
      Your Email has been succesfully sent.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
     `;
      document.getElementById("fromEmail").value = "";
      document.getElementById("toName").value = "";
      document.getElementById("msg").value = "";
    });
}
const textDisplay = document.getElementById("type-writer");
const phrases = ["Web Designer & Developer"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (60 - 50) + 50;
  const normalSpeed = Math.random() * (250 - 200) + 100;
  const time = isEnd ? 2500 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
