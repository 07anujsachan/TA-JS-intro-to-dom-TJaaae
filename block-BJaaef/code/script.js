function createUi(arr) {
  let ul = document.querySelector("ul");
  ul.className = "container";
  arr.map((house) => {
    house.people.map((people) => {
      let li = document.createElement("li");
      li.className = "house";
      let div = document.createElement("div");
      div.className = "div flex ";
      let img = document.createElement("img");
      img.className = "image";
      img.src = people.image;
     let h2 = document.createElement("h2");
      h2.className = " h2";
      h2.innerText = people.name;
      let para = document.createElement("p");
      para.className = "para";
      para.innerText = people.description;
      let btn = document.createElement("button");
      btn.className = "button";
      btn.innerText = "Learn More!";
      div.append(img, h2);
      li.append(div, para, btn);
      ul.append(li);
    });
  });
  return ul;
}
createUi(got.houses);
