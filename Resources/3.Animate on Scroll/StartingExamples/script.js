document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger)

  // ScrollTrigger Intro
  const navySquare = document.querySelector('.navySquare')
  const sectionTitle = document.querySelector('h1')

  gsap.to(navySquare, {
    duration: 2,
    x: 500,
    scrollTrigger: sectionTitle,
  })

  // ScrollTrigger Basic Implementation
  // #f3a712
  const redSquare = document.querySelector('.redSquare')

  // ScrollTrigger Scrub & Pin
  const tanSection = document.querySelector('.tanSection')
  const redBar = document.querySelector('.redBar')
})
