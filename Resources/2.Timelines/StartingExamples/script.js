document.addEventListener('DOMContentLoaded', function () {
  // GSAP Timeline
  const blueBox = document.querySelector('.blueBox')
  const greenBox = document.querySelector('.greenBox')
  const orangeBox = document.querySelector('.orangeBox')
  const redBox = document.querySelector('.redBox')
  const purpleBox = document.querySelector('.purpleBox')

  const tl = gsap.timeline()
  tl.to(blueBox, {
    duration: 1,
    y: 100,
  })

  tl.to(greenBox, {
    duration: 1,
    y: -100,
  })

  tl.to(orangeBox, {
    duration: 1,
    scale: 1.5,
  })

  tl.to(redBox, {
    duration: 1,
    rotation: 100,
  })

  tl.to(purpleBox, {
    duration: 1,
    opacity: 0.5,
  })

  // The Position Parameter
  const yellowCircle = document.querySelector('.yellowCircle ')
  const blueCircle = document.querySelector('.blueCircle')
  const greenCircle = document.querySelector('.greenCircle')

  // Timeline Control and Labels
  // #6B8E23
  // #FF5733
  // #C70039
  const yellowSquare = document.querySelector('.yellowSquare')
  const timeline = gsap.timeline()

  // Add control buttons
  document.querySelector('#pause').addEventListener('click', function () {})

  document.querySelector('#restart').addEventListener('click', function () {})

  document.querySelector('#reverse').addEventListener('click', function () {})

  document.querySelector('#play').addEventListener('click', function () {})

  // Add play button with a delay
  document
    .querySelector('#play-delay')
    .addEventListener('click', function () {})
})
