document.addEventListener('DOMContentLoaded', function () {
  // GSAP Object
  const greenSquare = document.querySelector('.greenSquare')

  gsap.to(greenSquare, {
    duration: 2,
    x: 300,
    rotation: 360,
    opacity: 0.5,
    backgroundColor: 'red',
    ease: 'power1.out',
  })

  // gsap.from()
  const orangeSquare = document.querySelector('.orangeSquare')

  gsap.from(orangeSquare, {
    duration: 2,
    x: 500,
    opacity: 0,
    scale: 0.5,
    rotation: -90,
    ease: 'bounce.out',
  })

  // gsap.to()
  const purpleSquare = document.querySelector('.purpleSquare')

  // gsap.fromTo()
  const blueSquare = document.querySelector('.blueSquare')

  // Delay & Repeat
  const circleYellow = document.querySelector('.circleYellow')
  const circleRed = document.querySelector('.circleRed')
  const circleGreen = document.querySelector('.circleGreen')

  // Ease
  const circleBlue = document.querySelector('.circleBlue')

  // Stagger
})
