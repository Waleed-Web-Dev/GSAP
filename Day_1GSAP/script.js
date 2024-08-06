// // gsap.to("#box1", {
// //     x: 1000,
// //     duration:2,
// //     delay: 5
// // })

// // gsap.from("#box2", {
// //     x: 900,
// //     y: 100,
// //     duration: 2,
// //     delay: 5,
// // })

// // gsap.to("#box1", {
// //     x: 1200,
// //     y: 300,
// //     duration: 1,
// //     delay: 1,
// //     rotation :360,
// //     backgroundColor : "blue",
// //     scale: 0.5
// // })
// // gsap.from("#box1", {
// //     x: 1200,
// //     y: 300,
// //     duration: 1,
// //     delay: 1,
// //     rotation :360,
// //     backgroundColor : "blue",
// //     scale: 0.5
// // })

// // gsap.from("h1", {
// //     opacity: 0,
// //     y: 20,
// //     duration: 2,
// //     delay: 1,
// //     stagger: 1
// // })



// // gsap.to("#box1", {
// //     y: 410,
// //     duration: 1,
// //     delay: 1,
// //     repeat : -1,
// //     yoyo : true
// // })

// // 
// let tl = gsap.timeline();

// tl.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1
// })


// tl.from("#box2", {
//     x: 1100,
//     delay: 1,
//     duration: 2,
// })

// tl.to("#box3", {
//     x: 1200,
//     duration: 1.5,
//     delay: 1,
//     rotation: 360,
//     borderRadius : "50%",
// // })


let tl = gsap.timeline()

tl.from("h2", {
    opacity: 0,
    y : -20,
    duration: 1.5,
    delay: 1
})

tl.from("p", {
    opacity: 0,
    y: -20,
    duration: 1.5,
    delay: 1,
    stagger: 0.3
})

tl.from("h1", {
    opacity: 0,
    y: 20,
    scale: 0.5,
    duration: 1.5,
    delay: 1
})