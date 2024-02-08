let menu_SVG = document.getElementById("menu_SVG");
let collection = document.getElementById("collection");
menu_SVG.addEventListener("click", show_side_Menu);
function show_side_Menu() {
  if (collection.toggleAttribute("show")) {
    //dah attr lw la2aha fe al html hy4elo w yrg3 false w al3ks
    collection.style.left = "0";
  } else {
    collection.style.left = "-100%";
  }
}
let close_SVG = document.getElementById("close_SVG");
close_SVG.addEventListener("click", show_side_Menu);
//
let main_image = document.getElementById("main_image");
let next_btn = document.getElementById("next_btn");
let back_btn = document.getElementById("back_btn");
next_btn.addEventListener("click", next_photo);
back_btn.addEventListener("click", back_photo);
let page_width = document.documentElement.clientWidth;
let n = 1; //m5leha = 2 34an hwa by defuat hybd2 be al sora rmg wa7ed
function next_photo() {
  if (n + 1 < 5) {
    n++;
    main_image.src = `./images/image-product-${n}.jpg`;
  }
}
function back_photo() {
  if (n - 1 > 0) {
    n--;
    main_image.src = `./images/image-product-${n}.jpg`;
  }
}
//
let minus = document.getElementById("minus");
let num = document.getElementById("num");
let plus = document.getElementById("plus");
minus.addEventListener("click", () => {
  if (num.innerText > 0) num.innerText -= 1;
});
plus.addEventListener("click", () => {
  num.innerText -= -1; //lma bktb += 1 befhm anohom text fa be7tohom gnb b3d fa khltha be al - 34an befhmha s7 w 1--1=2
});
//
let cart_svg = document.getElementById("cart_svg");
let cart_page = document.getElementById("cart_page");
cart_svg.addEventListener("click", show_cart_Menu);
function show_cart_Menu() {
  if (cart_svg.toggleAttribute("show")) {
    //dah attr lw la2aha fe al html hy4elo w yrg3 false w al3ks
    cart_page.style.display = "block";
  } else {
    cart_page.style.display = "none";
  }
}
let add_to_cart_btn = document.getElementById("add_to_cart_btn");
add_to_cart_btn.addEventListener("click", move_to_cart);
function move_to_cart() {
  let order_quan = document.getElementById("num").innerText;
  if (order_quan > 0) {
    let actual_price = document.getElementById("actual_price").innerHTML;
    let order_quantity = parseInt(order_quan);
    let total_price = order_quantity * parseFloat(actual_price);
    document.getElementById("total_price").innerHTML = `$${total_price}`;
    document.getElementById("order_quantity").innerText = order_quantity;
    document.getElementById("empity_cart_txt").style.display = "none";
    document.getElementById("order__page").style.display = "flex";
    document.getElementById("added_text").style.display = "block";
    setTimeout(() => {
      //hyms7 al added_text b3d 2sec
      document.getElementById("added_text").style.display = "none";
    }, 2000);
  }
}
let delete_svg = document.getElementById("delete_svg");
delete_svg.addEventListener("click", () => {
  document.getElementById("order__page").style.display = "none";
  document.getElementById("empity_cart_txt").style.display = "flex";
});
