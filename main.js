let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;
btn.onclick = function () {
  if (inp.value !== "") {
    boxs[0].innerHTML += `<p class="item" draggable="true">${inp.value}</p>`;
    inp.value = "";
  }
  dradItem();
};
function dradItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      drag = item;
      item.Style.opacity = "0.5";
    });
    item.addEventListener("dragend", () => {
      drag = null;
      item.Style.opacity = "1";
    });

    boxs.forEach((box) => {
      box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.Style.background = "#090";
        box.Style.color = "red";
      });
      box.addEventListener("dragover", () => {
        box.Style.background = "#fff";
        box.Style.color = "#000";
      });
      box.addEventListener("drop", () => {
        box.append(drag);
        box.Style.background = "#fff";
        box.Style.color = "#000";
      });
    });
  });
}
