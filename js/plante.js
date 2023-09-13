fetch("https://oyneqjqpxkustcsgrvut.supabase.co/rest/v1/vildmad" + id)
  .then((Response) => Response.json())
  .then((data) => showProduct(data));
