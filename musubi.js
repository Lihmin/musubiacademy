const scroll= document.querySelectorAll(".show")

const observer= new IntersectionObserver(entries=>{
    entries.forEach((entry) => {
        entry.target.classList.toggle("active", entry.isIntersecting)
      // if(entry.isIntersecting) animationobserver.unobserve(entry.target)
    })
}
//,{   threshold: 0}
) 

scroll.forEach(show => {
    observer.observe(show)
})