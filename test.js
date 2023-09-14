const url = "https://pexwboaieovroxjkczsc.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleHdib2FpZW92cm94amtjenNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MDEwNzgsImV4cCI6MjAxMDA3NzA3OH0.6BHSqoC3DM7BXM7_X4Syq5W3u_U5MKO7EPClIkefExs";

//fetch(url+"/rest/v1/test_products?id=eq.1",{
fetch(url + "/rest/v1/vildapi", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showData)
  .then(showProducts);

function showData(items) {
  console.log(items);
}

function showProducts(products) {
  // LOOPER OG KALDER showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector("#vmProduktTemplate").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("h3").textContent = product.navn;
  copy.querySelector("h4").textContent = product.sankeland;
  copy.querySelector(".kategori").textContent = product.kategori;

  // Corrected the line below by adding backticks for string interpolation
  copy.querySelector(".vmPic").src = https://vildmadv2.vps.webdock.io/application/files/8916/2436/4262/${product.id}.png;

  // appende
  document.querySelector(".produktliste").appendChild(copy);
}
