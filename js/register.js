let arrUser = [];

// lấy danh sách người dùng
function getDataUser() {
  var promise = axios({
    method: "POST",
    url: "https://shop.cyberlearn.vn/api/Users/signup",
  });
  Promise.then(function (result) {
    arrUser = result.data.content;
    console.log(arrUser);
    renderDataUser(result.data.content);
  }).catch(function (error) {
    console.log(error);
  });
}

getDataUser();
