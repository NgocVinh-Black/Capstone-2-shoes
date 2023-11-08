let arrItem = [];

// hàm lấy danh sách sản phẩm
function getDataItem() {
  var promise = axios({
    method: "GET",
    url: "https://shop.cyberlearn.vn/api/Product",
  });
  promise
    .then(function (result) {
      arrItem = result.data.content;
      console.log(arrItem);
      renderDataItem(result.data.content);
      // var itemMoi = new
      // document.querySelector('.gallery_product-gallery').innerHTML = result.data.content;
    })
    .catch(function (error) {
      console.log(error);
    });
}

getDataItem();

// hiển thị lên giao diện
function renderDataItem(arr) {
  var content = "";

  for (let i = 0; i < arr.length; i++) {
    var item_SP = arr[i];
    content += `
    <div class="item">
                  <div class="item_top">
                    <img src="${item_SP.image}" alt="">
                  </div>
                  <div class="product_group">
                  <div class="item_bot">
                    <div class="product">
                      <h3>${item_SP.name}</h3>
                      <p><i class="fa-solid fa-dollar-sign"></i>${item_SP.price}</p>
                    </div>
                    <div class="shopping">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                  </div>
                  <div class="ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  </div>
                  
                </div>
        `;
  }
  // console.log(content);
  document.querySelector(".item_product-gallery").innerHTML = content;
}
