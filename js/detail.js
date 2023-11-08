window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);
  //call api load lên giao diện

  let arrItemDetail = [];

  // hàm lấy thông tin sản phẩm
  function getDataItemDetail() {
    var promise = axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
    });
    promise
      .then(function (result) {
        arrItemDetail = result.data.content;
        console.log(arrItemDetail);
        renderDataItemDetail(result.data.content);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getDataItemDetail();

  // hiển thị lên giao diện
  function renderDataItemDetail(arr) {
    var content = "";
    
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[1])
      var item_detail = arr[i];
      content += `
    <div class="content_detail">
    <div class="left_content">
      <div class="img_top">
        <img src="${item_detail.image}" alt="">
      </div>
      <div class="img_bot">
        <img src="${item_detail.image}" alt="">
        <img src="${item_detail.image}" alt="">
        <img src="${item_detail.image}" alt="">
        <img src="${item_detail.image}" alt="">
        <img src="${item_detail.image}" alt="">
      </div>
    </div>
    <div class="right_content">
      <h2>${item_detail.name}</h2>
      <div class="start_reviews">
        <div class="start">
          <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
        </div>
        <div class="reviews">
          <p>Reviews</p>
        </div>
      </div>
      <div class="price">
        <i class="fa-solid fa-dollar-sign"></i>${item_detail.price}
      </div>
      <div class="size">
        <p>34</p>
      </div>
      <div class="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, exercitationem.</p>
      </div>
      <div class="add">
        <button class="add_to_cart">Add To Cart</button>
      </div>
      <div class="social">
        <div class="social_fb">
          <i class="fa-brands fa-facebook-f"></i>
          <p>Like</p>
        </div>
        <div class="social_tw">
          <i class="fa-brands fa-twitter"></i>
          <p>Tweet</p>
        </div>
        <div class="social_S">
          <i class="fa-brands fa-pinterest"></i>
          <p>Save</p>
        </div>
        <div class="social_gg">
          <i class="fa-brands fa-google-plus-g"></i>
          <p>Share</p>
        </div>
      </div>
    </div>
  </div>
        `;
    }
    console.log(content);
    document.querySelector(".demo_detail_vinh").innerHTML = content;
  }
};
