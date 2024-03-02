// Type variabel
// let dan const mengijinkan user untuk mengamankan value
// let dapat mengijinkan perubahan value, sedangkan const bersifat konstan
// var -> scope, maksudnya ketika dikompile sebelum inisialisasi, akan memunculkan pesan undefined
// ketika query selector all maka akan terdapat node list yang isinya itu adalah sebuah array dari elemen html
// get element by id selalu unik jadi isinya cuma 1
// get element by class

// const menuParagraph = document.getElementsByClassName("paragraph");
// console.log(menuParagraph);

//inner html menambahkan tag html ke dalam sebuah div
// inner text menambahkan sebuah text

//create element, create text node

const menuWrapper = document.getElementById("list-item");
const listText = document.createTextNode("Ini adalah text");

const btnAlert = document.getElementById("btn-alert");

for (let i = 0; i < data.length; i++) {
  const menuList = document.createElement("li");
  const d = document.createTextNode(data[i]);
  menuWrapper.appendChild(menuList);
  menuList.appendChild(d);
}

btnAlert.addEventListener("click", function (e) {
  alert("INI ADALAH ALERT");
  console.log(e);
});

window.addEventListener("scroll", function () {
  console.log(this.window.scrollY);
  if (this.window.scrollX > 10) {
    menuWrapper.style.backgroundColor = "red";
  }
});
