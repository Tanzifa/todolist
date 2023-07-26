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
    let newSpan = document.createElement("span");
    newSpan.className = "li__span";

    newli.append(newSpan);
    let newButton = document.createElement("button");
    newButton.className = "exit";
    newli.append(newButton);
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-xmark";
    newButton.append(icon);
    let text = input.value;
    newSpan.textContent = text;

    input.value = "";

    newButton.addEventListener("click", () => {
      newli.remove();
    });
  }
});

deleted.addEventListener("click", () => {
  list.textContent = "";
});
