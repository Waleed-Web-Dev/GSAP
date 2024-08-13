
function marqueAnimation(){
  window.addEventListener("wheel", e => {
    if(e.deltaY > 0){
         gsap.to(".marque", {
          transform: "translateX(-200%)",
          duration: 2,
          ease :"none", 
          repeat: -1
         })
        gsap.to(".marque img", {
          rotate :180
        })
    }else{
      gsap.to(".marque", {
  
        transform: "translateX(0%)",
        duration: 2,
        ease :"none", 
        repeat: -1
       })
       gsap.to(".marque img", {
        rotate :0
      })
    }
  })
}

marqueAnimation()