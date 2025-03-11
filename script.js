function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
loco();

//text animation 

var clutter = "";
document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`;
    document.querySelector("#page2>h1").innerHTML = clutter;
});

gsap.to("#page2>h1>span", {
    scrollTrigger: {
        trigger: `#page2>h1>span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: .5
    },
    stagger: .2,
    color: `#fff`
});


//popup and skills

//  Animate Progress Bar Based on % Values
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".progress.html").style.width = "90%";
    document.querySelector(".progress.css").style.width = "85%";
    document.querySelector(".progress.js").style.width = "80%";
    document.querySelector(".progress.react").style.width = "75%";
    document.querySelector(".progress.node").style.width = "85%";
    document.querySelector(".progress.mongo").style.width = "80%";
});

//-----------------------------------------------------------------


//  Open Contact Form Smoothly Without Affecting Layout
//function openContactForm() {
   // let popup = document.getElementById("contactForm");
   // popup.style.visibility = "visible"; 
   // popup.style.opacity = "1";  
//}

// Close Contact Form Smoothly
//function closeContactForm() {
  //  let popup = document.getElementById("contactForm");
   // popup.style.opacity = "0";  
   // setTimeout(() => {
   //     popup.style.visibility = "hidden";  
   // }, 300); // Delay for smooth transition
//}

/*  Form Submission with Auto Close */
function submitContactForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    closeContactForm();
}




//project slider 

let currentIndex = 0;
const slider = document.querySelector(".project-slider");
const totalProjects = document.querySelectorAll(".project-card").length;
const projectsPerView = window.innerWidth <= 768 ? 1 : 3;

function slideNext() {
    if (currentIndex < totalProjects - projectsPerView) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    slider.style.transform = `translateX(-${currentIndex * 270}px)`;
}

setInterval(slideNext, 3000);







function openWhatsApp() {
    let phoneNumber = "917086504052"; //  
    let message = "Hello! I want to connect with you."; // 

    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // 
}





function callMe() {
    let phoneNumber = "7086504052"; // ✅ Apna actual phone number yahan add kare
    window.location.href = `tel:${phoneNumber}`;
}


