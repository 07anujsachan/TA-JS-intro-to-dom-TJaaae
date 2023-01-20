function createUI(arr) {
  let ul = document.querySelector("ul");
  ul.className = "booklist";
  arr.map((book) => {
    let li = document.createElement("li");
    li.className = "li  container";
    let img = document.createElement("img");
    img.className = " image";
    img.src = book.image;
    let h2 = document.createElement("h2");
    h2.innerText = book.title;
    let p = document.createElement("p");
    p.innerText = book.author;
    let btn = document.createElement("button");
    btn.innerText = "Buy now";
    li.append(img, h2, p, btn);
    ul.append(li);
  });

  return ul;
}

createUI(bookly.books);
