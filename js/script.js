const url = "https://oyneqjqpxkustcsgrvut.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bmVxanFweGt1c3Rjc2dydnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NjYyMjksImV4cCI6MjAwOTQ0MjIyOX0.LTjODVfOec0K5fQg8jjs6TXgJRyaP8Ulyzr1-NTw5X8";

fetch(url + "/rest/v1/vildmad", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showDatas);

function showDatas(items) {
  items.forEach(showData);
}
function showData(item) {
  console.log(item);
  // fang template
  const template = document.querySelector("#plante").content;
  // lav en kopi
  const copy = template.cloneNode(true);
}
