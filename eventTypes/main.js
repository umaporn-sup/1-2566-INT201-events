const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const display = document.getElementById('display_name')

document.addEventListener('DOMContentLoaded', () =>
  alert('DOM Content Loaded!')
)

window.addEventListener('load', welcomeMessage)
function welcomeMessage(event) {
  alert(
    `Welcome, Your window screen width: ${window.innerWidth}, height: ${window.innerHeight}.`
  )
}
window.addEventListener('beforeunload', (event) => {
  display.value = 'Good bye'
  event.returnValue = true
})

window.addEventListener('resize', (event) => {
  console.log(`${event.target} Resized`)
  console.log(`inner height: ${window.innerHeight}`)
  console.log(`inner width: ${window.innerWidth}`)
})

firstName.addEventListener('blur', (event) => {
  console.log(`${event.target}: ${event.target.id}: on blur!`)
})
lastName.addEventListener('focus', (event) => {
  console.log(`${lastName.id}: ${event.target}: on focus!`)
})

firstName.addEventListener('input', function () {
  display.value = firstName.value
})

const cancelBtn = document.querySelector('#cancel')

cancelBtn.addEventListener('click', (event) => {
  alert('you click cancel button!')
})

const message = document.querySelector('p')
display.addEventListener('input', function () {
  message.textContent = display.value
})
