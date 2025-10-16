
## 🪄 Image Hover Animation Project

A sleek and interactive image hover animation built using HTML, CSS, and JavaScript.
When you hover over each element, a circular image appears and smoothly follows the mouse movement — creating a modern and dynamic user experience.

## 🚀 Features

- 🖱️ Smooth image follow effect on hover

- 🎨 Clean and minimal dark-themed UI

- ⚡ Fast and responsive transitions

- 💡 Built with pure JavaScript — no external libraries

- 🧭 Easily customizable for any website or portfolio section

## 🧩 Tech Stack

- HTML5 — Structure of the elements

- CSS3 — Styling and animations

- JavaScript (ES6) — Dynamic movement and hover interactivity

## 🛠️ How It Works

- When you hover over a heading:

- The image appears (opacity: 1) and follows your cursor.

- On mouse leave, it smoothly fades out again.

- The cursor position is tracked in real time using mousemove events.


## 🧠 Code Highlights
```js
elem.addEventListener('mousemove', (e) => {
  img.style.left = e.x + 'px';
  img.style.top = e.y + 'px';
  img.style.opacity = 1;
});

elem.addEventListener('mouseleave', () => {
  img.style.opacity = 0;
});
```


- Simple yet powerful — smooth animation using event listeners and CSS transitions 🎯

## 🧑‍💻 Author

### Mohammed Gouse Mohiyuddin Yekkaluru

