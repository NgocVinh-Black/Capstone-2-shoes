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

// function registerUser() {
//   const registrationForm = document.getElementById("registrationForm");
//   const email = registrationForm.querySelector("#email").value;
//   const password = registrationForm.querySelector("#password").value;
//   const name = registrationForm.querySelector("#name").value;
//   const gender = registrationForm.querySelector("#gender").value === "true";
//   const phone = registrationForm.querySelector("#phone").value;

//   // Perform validation
//   if (!validateEmail(email)) {
//     showModal("Invalid email");
//     return;
//   }

//   if (!validateName(name)) {
//     showModal("Invalid name - Name must contain at least 5 characters");
//     return;
//   }

//   if (!validatePassword(password)) {
//     showModal("Invalid password - Password must contain at least 6 characters");
//     return;
//   }

//   if (!validatePhone(phone)) {
//     showModal(
//       "Invalid phone number - Phone number must contain only digits and be 10 characters long"
//     );
//     return;
//   }

//   const userData = {
//     email,
//     password,
//     name,
//     gender,
//     phone,
//   };

//   var promise = axios({
//     method: "POST",
//     responseType: "json",
//     url: "https://shop.cyberlearn.vn/api/Users/signup",
//     data: userData,
//   });

//   promise
//     .then(function (result) {
//       const responseMessage = document.getElementById("responseMessage");
//       responseMessage.textContent = "Registration successful!";
//       console.log(result);
//     })
//     .catch(function (error) {
//       const responseMessage = document.getElementById("responseMessage");
//       responseMessage.textContent = "Registration failed. Please try again.";
//       console.log(error);
//     });
// }

// function validateEmail(email) {
//   // Basic email validation using a regular expression
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// function validateName(name) {
//   // Basic name validation: must contain at least 5 characters
//   return name.length >= 5;
// }

// function validatePassword(password) {
//   // Basic password validation: must contain at least 6 characters
//   return password.length >= 6;
// }

// function validatePhone(phone) {
//   // Basic phone number validation: must contain only digits and be 10 characters long
//   const phoneRegex = /^\d{10}$/;
//   return phoneRegex.test(phone);
// }

// function showModal(message) {
//   // Show a Bootstrap pop-up modal with the validation message
//   const modal = document.getElementById("validationModal");
//   const modalBody = modal.querySelector(".modal-body");
//   modalBody.textContent = message;
//   $(modal).modal("show");
// }

// document.querySelector(".btn-sqr").addEventListener("click", registerUser);
