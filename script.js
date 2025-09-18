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
