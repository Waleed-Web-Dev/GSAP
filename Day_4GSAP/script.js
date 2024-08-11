let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let image = document.getElementById("image")
// main.addEventListener("mousemove", e => {
//       gsap.to(cursor, {
//         x: e.x,
//         y: e.y,
//         duration: 1,
//         ease: "back.out",
//       })
// })


// image.addEventListener("mouseenter", e => {
//   cursor.innerHTML = "Learn More"
// gsap.to(cursor, {
//   scale: 3,
//   backgroundColor:" #ffffff65",
// })
// })

// image.addEventListener("mouseleave", e => {
//     cursor.innerHTML = ""
//   gsap.to(cursor, {
//     scale: 1,
//     backgroundColor: "#fff"
//   })
//   })


main.addEventListener("mousemove",e =>  {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
  })
})


image.addEventListener("mouseenter", e => {
  cursor.innerHTML = "View More"
  gsap.to(cursor, {
    scale: 3,
    backgroundColor: "#ececec3d"
  })
})



image.addEventListener("mouseleave", e => {
  cursor.innerHTML = ""
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff"
  })
})

