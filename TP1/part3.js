const wait = ms => new Promise(res => setTimeout(res,ms));
async function download() {
    console.log("Debut")
    await wait(2000);
    console.log("Fin")
}
download();



async function fetchPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("Titres des 5 premiers posts:");
    data.slice(0, 5).forEach(post => console.log("-", post.title));
  } catch (err) {
    console.error("Erreur:", err);
  }
}
fetchPosts();
