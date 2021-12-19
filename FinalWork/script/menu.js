const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('links-container')[0]
const navL = document.querySelectorAll('links-container li') ;

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
  })

  // navL.forEach((link,index) => {
  //   link.style.animation = `navLFade 0.5s ease forwards ${index / 7 + 2}s`;
  // })