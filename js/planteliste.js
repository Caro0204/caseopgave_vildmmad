const url = "https://oyneqjqpxkustcsgrvut.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bmVxanFweGt1c3Rjc2dydnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NjYyMjksImV4cCI6MjAwOTQ0MjIyOX0.LTjODVfOec0K5fQg8jjs6TXgJRyaP8Ulyzr1-NTw5X8";

fetch(url + "/rest/v1/vildmad", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showData);

  function showItems(items) {
    console.log(items);
    // Loop through the items and call showData for each item
    items.forEach(showData);
  }

  function showData(item) {
    console.log(item);

    const template = document.querySelector("#smallPlantTemplate").content;

    const copy = template.cloneNode(true);

    copy.querySelector(".plante_image").textContent = item.id;
    document.querySelector("main").appendChild(copy);
    document.querySelector(".plante_image")
    .setAttribute("href", `plante.html?id=${item.id}`);
  }
