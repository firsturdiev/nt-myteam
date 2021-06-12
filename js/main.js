const elsToggleButton = document.querySelectorAll(".director__toggle");

elsToggleButton.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentElement.classList.toggle('director--flipped')
  })
})
