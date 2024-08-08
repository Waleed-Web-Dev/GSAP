var initialPath = `M 10 100 Q 250 100 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string")

string.addEventListener("mousemove", e => {
  initialPath = `M 10 100 Q ${e.x} ${e.y} 990 100`;
  gsap.to("svg path", {
    attr: {d:initialPath},
    duration: 0.2,
    ease: "power3.out"
  })
})


string.addEventListener("mouseleave", e => {
  gsap.to("svg path", {
    attr: {d:finalPath},
    duration: 0.8,
    ease: "elastic.out(1,0.2)",
  })
})