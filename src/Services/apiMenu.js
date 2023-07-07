export async function getMenu() {
  return fetch("http://localhost:3000/menu")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed getting menu");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error("Error", err);
      throw err;
    });
}
