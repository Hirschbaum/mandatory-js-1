//change Bananas to Vegetables in h1
let h1 = document.querySelector("h1");
console.log(h1);
h1.textContent = "Fruits & Vegetables Corp";

// change last a and href in ul
let lastLi = document.querySelector("ul li:last-child");
console.log(lastLi);
lastLi.textContent = "";

let a = document.createElement("a");
a.setAttribute("href", "#vegetables");
a.textContent = "Vegetables";
lastLi.appendChild(a);

//1. #about 2. #contact
//adding h2 to each section: About Contact
//slogen wrapped in p tag under #about
//th instead of td in thead
/*let thead = document.querySelector("thead");
let tr = document.querySelector("tr");
let td = document.querySelector("td");
thead.appendChild(tr);
tr.appendChild(td);
let th = document.createElement("th");
td.replaceWith(th);*/

// <link rel="stylesheet" href="main.css">
let head = document.querySelector("head");
let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "main.css");
head.appendChild(link);

//change head title
let title = document.querySelector("title");
console.log(title);
title.textContent = "Fruits & Vegetables Corp";
