function toggleDropdown(menuId) {
  const menu = document.getElementById(menuId);
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
  const box = document.getElementById("toglecontent");
  box.classList.toggle("wide");
}

