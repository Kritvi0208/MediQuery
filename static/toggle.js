// function toggleTheme() {
//   document.body.classList.toggle('dark');
//   localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
// }

// window.onload = () => {
//   if (localStorage.getItem('theme') === 'dark') {
//     document.body.classList.add('dark');
//   }
// };
// toggle.js

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    // Optional: save preference
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Optional: Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});
