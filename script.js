document.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const curve = document.querySelector('.curve');
    const angle = scrollPercentage * -360; 
    curve.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
});

const typingEffect = document.querySelector('.typing-effect');
setTimeout(() => {
    typingEffect.style.animation = 'none'; 
    typingEffect.style.borderRight = 'none'; 
}, 2000); 

document.querySelectorAll('a[href^="."]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("about-visible");
            } else {
                aboutSection.classList.remove("about-visible"); 
            }
        });
    }, { threshold: 0.1 });

    observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", () => {
    const resumeSection = document.querySelector(".resume");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resumeSection.classList.add("resume-visible");
            } else {
                resumeSection.classList.remove("resume-visible");
            }
        });
    }, { threshold: 0.1 });

    observer.observe(resumeSection);
});

document.addEventListener("DOMContentLoaded", () => {
    const resumeSection = document.querySelector(".projects");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resumeSection.classList.add("projects-visible");
            } else {
                resumeSection.classList.remove("projects-visible");
            }
        });
    }, { threshold: 0.1 });

    observer.observe(resumeSection);
});


function showEdu(){
    const eduText = document.getElementById("edu-text");
    const skillText = document.getElementById("skill-text");
    eduText.classList.toggle("visible");
    if (eduText.classList.contains("visible")) {
        skillText.classList.remove("visible");
    }
}

function showSkills(){
    const eduText = document.getElementById("edu-text");
    const skillText = document.getElementById("skill-text");
    skillText.classList.toggle("visible");
    if (skillText.classList.contains("visible")) {
        eduText.classList.remove("visible");
    }
}

var sideMenu=document.getElementById("side-menu");
function openMenu(){
    sideMenu.style.right="0";
    sideMenu.style.opacity="1";
}
function closeMenu(){
    sideMenu.style.right="-200px";
    sideMenu.style.opacity="0";
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If the element is not in view, hide it
        if (!entry.isIntersecting) {
            entry.target.classList.remove("visible");
        }
    });
}, { threshold: 0.5 }); 
observer.observe(document.getElementById("edu-text"));
observer.observe(document.getElementById("skill-text"));