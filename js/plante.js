const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://oyneqjqpxkustcsgrvut.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bmVxanFweGt1c3Rjc2dydnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NjYyMjksImV4cCI6MjAwOTQ0MjIyOX0.LTjODVfOec0K5fQg8jjs6TXgJRyaP8Ulyzr1-NTw5X8";

fetch(url + "/rest/v1/vildmad", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then((data) => showData(data))
  .then(showItems);

function showData(items) {
  console.log(items);
  items.forEach(showItem);
}


function showItem(item) {
  const template = document.querySelector("#plante").content.cloneNode(true);
  document.querySelector("p.Sankested").textContent = item.Sankested;
  document.querySelector("p.Saeson").textContent = item.Saeson;
  document.querySelector("p.Beskrivelse").textContent = item.Beskrivelse;
  document.querySelector("p.Sankning").textContent = item.Sankning;
  document.querySelector("p.Ingredienser").textContent = item.Ingredienser;
  document.querySelector("p.Fremgangsmåde").textContent = item.Fremgangsmåde;

  document.querySelector(".margin_plante").appendChild(copy);
}