fetch("https://oyneqjqpxkustcsgrvut.supabase.co/rest/v1/vildmad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bmVxanFweGt1c3Rjc2dydnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NjYyMjksImV4cCI6MjAwOTQ0MjIyOX0.LTjODVfOec0K5fQg8jjs6TXgJRyaP8Ulyzr1-NTw5X8",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
}
