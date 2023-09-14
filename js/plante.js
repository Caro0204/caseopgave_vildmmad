const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://oyneqjqpxkustcsgrvut.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bmVxanFweGt1c3Rjc2dydnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NjYyMjksImV4cCI6MjAwOTQ0MjIyOX0.LTjODVfOec0K5fQg8jjs6TXgJRyaP8Ulyzr1-NTw5X8";

fetch(url + "/rest/v1/vildmad?id=eq.5" , {
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
  template.querySelector(".title").textContent = item.title;
  template.querySelector(".Sankested").textContent = item.Sankested;
  template.querySelector(".Saeson").textContent = item.Saeson;
  template.querySelector(".Beskrivelse").textContent = item.Beskrivelse;
  template.querySelector(".Sankning").textContent = item.Sankning;
  template.querySelector(".Ingredienser").textContent = item.Ingredienser;
  template.querySelector(".Fremgangsmåde").textContent = item.Fremgangsmetode;

  document.querySelector("#margin_plante").appendChild(template);
}
