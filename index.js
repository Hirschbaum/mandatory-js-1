// ----- changing Bananas to Vegetables in h1 -------
let h1 = document.querySelector("h1");
console.log(h1);
h1.textContent = "Fruits & Vegetables Corp";

// ----- changing last a and href in ul ------------
let lastLi = document.querySelector("ul li:last-child");
console.log(lastLi);
lastLi.textContent = "";

let a = document.createElement("a");
a.setAttribute("href", "#vegetables");
a.textContent = "Vegetables";
lastLi.appendChild(a);

// ----- swapping: 1. #about 2. #contact ---------
let main = document.querySelector("#main");

let about = document.querySelector("#about");
console.log(about);
main.appendChild(about);

let contact = document.querySelector("#contact");
main.appendChild(contact);

// ----- adding h2 to each section: About Contact ------
let aboutH2 = document.createElement("h2");
aboutH2.textContent = "About";
//here was: about.appendChild(aboutH2);

let contactH2 = document.createElement("h2");
contactH2.textContent = "Contact";
contact.appendChild(contactH2);
//let moveH2 = contact.insertBefore(contactH2, ?other p tag);
about.after(contactH2);

//slogen wrapped in p tag under #about
about.innerHTML = "";
about.appendChild(aboutH2);
let p = document.createElement("p");
p.textContent = "We're the best in fruits & vegetables";
about.appendChild(p);

// two th instead of two td in thead
let thead = document.querySelector("thead");
let tr = document.querySelector("tr");
thead.appendChild(tr);

let td1 = document.querySelector("td");
tr.appendChild(td1);
let th1 = document.createElement("th");
td1.replaceWith(th1); 
th1.textContent = "Name";

let td2 = document.querySelector("td");
tr.appendChild(td2);
let th2 = document.createElement("th");
td2.replaceWith(th2);
th2.textContent = "Email";

// --------- add CSS link to head -------
let head = document.querySelector("head");
let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "main.css");
head.appendChild(link);

// ----- changing head title ------
let title = document.querySelector("title");
console.log(title);
title.textContent = "Fruits & Vegetables Corp";