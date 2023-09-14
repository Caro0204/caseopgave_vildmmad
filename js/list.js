fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  console.log(product);
  // ... (rest of your code)

  console.log("Has discounted class:", copy.querySelector("article").classList.contains("discounted"));
  if (product.discount === null) {
    // No discount available, hide the discount-related information
    copy.querySelector("article").querySelector(".discounted").style.display = "none";
  }
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
      //produktet er udsolgt
      copy.querySelector("article").classList.add("soldOut");
    }
          copy
    .querySelector(".read-more")
    .setAttribute("href", `product.html?id=${product.id}`);
    copy.querySelector(".smallProduct .price").textContent ="DKK " + product.price;
    copy.querySelector(".smallProduct .subtle").textContent =product.articletype + " | " + product.brandname;
    copy.querySelector(
        "img"
        ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
        //appende
        document.querySelector("main").appendChild(copy);
        document.querySelector("main h2").textContent =product.category;

}

