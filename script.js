function openPopup(src) {
  document.getElementById("imagePopup").style.display = "block";
  document.getElementById("popupImg").src = src;
}

function closePopup() {
  document.getElementById("imagePopup").style.display = "none";
}