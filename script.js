document.addEventListener('DOMContentLoaded', () => {
  const hiddenEls = document.querySelectorAll('.hidden-left, .hidden-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');  
      } else {
        entry.target.classList.remove('show');      }
    });
  }, { threshold: 0.2 });

  hiddenEls.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("html")) entry.target.style.width = "95%";
        if (entry.target.classList.contains("css")) entry.target.style.width = "90%";
        if (entry.target.classList.contains("js")) entry.target.style.width = "80%";
        if (entry.target.classList.contains("mongo")) entry.target.style.width = "75%";
        if (entry.target.classList.contains("node")) entry.target.style.width = "80%";
        if (entry.target.classList.contains("git")) entry.target.style.width = "90%";

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); 

  progressBars.forEach(bar => observer.observe(bar));
});
const skills = document.querySelectorAll('.progress');

function animateSkills() {
  const trigger = window.innerHeight * 0.85;

  skills.forEach(skill => {
    const top = skill.getBoundingClientRect().top;
    const width = skill.getAttribute('class').match(/\d+%$/); // fallback for CSS width class
    const dataWidth = skill.dataset.width || width || '0%';

    if(top < trigger){
      skill.style.width = dataWidth;
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
