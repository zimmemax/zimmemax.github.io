const words = ["Future SWE", "Computer Science Major", "Class of Spring 2024", "Software Developer Intern"];
const textEl = document.querySelector('.text');

let index = 0;

setInterval(() => {
  textEl.classList.add('slide-out');
  setTimeout(() => {
    textEl.textContent = words[index];
    textEl.classList.remove('slide-out');
    textEl.classList.add('slide-in');
    setTimeout(() => {
      textEl.classList.remove('slide-in');
    }, 1000);
    index++;
    if (index === words.length) {
      index = 0;
    }
  }, 1000);
}, 3000);
