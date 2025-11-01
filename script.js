let previews = document.querySelectorAll(".preview");
for (let i = 0; i < previews.length; i++) {
  let item = previews[i];
  item.setAttribute("tabindex", "0");
}
function upDate(previewPic) {
  x = document.getElementById("gallery");
  x.innerHTML = previewPic.alt;
  x.style.backgroundImage = `url(${previewPic.src})`;
  switch (previewPic.alt) {
    case "Tulips":
      x.style.color = "hotpink";
      break;
    case "Hydrangeas":
      x.style.color = "lightblue";
      break;
    case "Peonies":
      x.style.color = "pink";
      break;
    case "Roses":
      x.style.color = "darkred";
      break;
    case "Carnation":
      x.style.color = "beige";
      break;
    case "Lilies":
      x.style.color = "gold";
      break;
    default:
      x.style.color = "white";
  }
}
function unDo() {
  x = document.getElementById("gallery");
  x.innerHTML = " ";
  x.style.backgroundImage = `url('')`;
}
