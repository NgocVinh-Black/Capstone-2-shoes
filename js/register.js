// Registration
var arrUser = [];
function registerUser() {
  const registrationForm = document.getElementById("registrationForm");
  const email = registrationForm.querySelector("#email").value;
  const password = registrationForm.querySelector("#password").value;
  const name = registrationForm.querySelector("#name").value;
  const gender = registrationForm.querySelector("#gender").value === "true";
  const phone = registrationForm.querySelector("#phone").value;

  const userData = {
    email,
    password,
    name,
    gender,
    phone,
  };

  var promise = axios({
    method: "POST",
    responseType: "json",
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    data: userData,
  });

  promise
    .then(function (result) {
      const responseMessage = document.getElementById("responseMessage");
      responseMessage.textContent = "Registration successful!";
      console.log(result);
    })
    .catch(function (error) {
      const responseMessage = document.getElementById("responseMessage");
      responseMessage.textContent = "Registration failed. Please try again.";
      console.log(error);
    });
}

document.querySelector(".btn-sqr").addEventListener("click", registerUser);
