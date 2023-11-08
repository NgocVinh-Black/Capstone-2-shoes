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
      renderDataItem(result.data.content);
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
    <div class="">
    <div class="item_product-gallery">
      <!-- call api -->
      <div class="item">
        <div class="item_top">
          <img src="${item_SP.image}" alt="">
        </div>
        <div class="product_group">
          <div class="name_item">
            <h3>${item_SP.name}</h3>
          </div>
          <div class="price_shop">
            <div class="price">
              <p><i class="fa-solid fa-dollar-sign"></i>${item_SP.price}.00</p>
            </div>
            <div class="shopping">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        <div class="ratings_buy">
          <div class="ratings">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="buy">
            <a href="./../pages/detail.html?productid=${item_SP.id}">Buy now</a>
          </div>
        </div>
        </div>
        
      </div>
      </div>
      
    </div>
        `;
  }
  document.querySelector(".gallery_product-gallery").innerHTML = content;
}
