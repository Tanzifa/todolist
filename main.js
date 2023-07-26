const input = document.querySelector(".title");
console.log(input.value);
const list = document.querySelector(".list");
const btn = document.querySelector(".btn");
const deleted = document.querySelector(".delete");

btn.addEventListener("click", () => {
  if (!input.value.trim() == "") {
    let newli = document.createElement("li");
    newli.className = "list__item";
    list.append(newli);
    const newSpan = document.createElement("span");
    newSpan.className = "li__span";

    newli.append(newSpan);
    const newButton = document.createElement("button");
    newButton.className = "exit";
    newli.append(newButton);
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-xmark";
    newButton.append(icon);
    const done = document.createElement("i");
    done.className = "fa-solid fa-check ";
    newli.prepend(done);
    let text = input.value;
    newSpan.textContent = text;

    input.value = "";

    newButton.addEventListener("click", () => {
      newli.remove();
    });
    newli.addEventListener("click", () => {
      newSpan.classList.toggle("active");
      done.classList.toggle("done__exit");
    });
  }
});

deleted.addEventListener("click", () => {
  list.textContent = "";
});
