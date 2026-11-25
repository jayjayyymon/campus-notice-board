const double = (n) => n * 2;
const greet = (name) => `Hello, ${name}`;
const isLong = (text) => text.length > 20;

const items = [
  { name: "Coffee sachet", price: 8 },
  { name: "Biscuit", price: 12 },
  { name: "Softdrink", price: 25 },
  { name: "Candy", price: 2 },
];

const names = items.map((item) => item.name);
const cheap = items.filter((item) => item.price < 20);
const total = items.reduce((sum, item) => sum + item.price, 0);

const notice = { id: 1, title: "Library hours", pinned: false };
const { title } = notice; // destructuring: pull out one field
const pinnedNotice = { ...notice, pinned: true }; // spread: copy, then override
console.log(notice, pinnedNotice);

import { notices } from "./notices.js";

const list = document.querySelector("#list");

function render(items) {
  list.innerHTML = "";
  items.forEach((n) => {
    const li = document.createElement("li");
    li.textContent = `${n.title}, ${n.message}`;
    list.appendChild(li);
  });
}

const search = document.querySelector("#search");

search.addEventListener("input", () => {
  const text = search.value.toLowerCase();
  const matches = notices.filter((n) => n.title.toLowerCase().includes(text));
  render(matches);
});
