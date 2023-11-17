//Adding and Removing Event Handlers
const allInputEles = document.querySelectorAll('input')
const resetBtn = document.getElementById('reset')
const resetHandler = function (event) {
  console.log(`Event target: ${event.target}`)
  console.log(`Event Type: ${event.type}`)

  allInputEles.forEach((inputEle) => {
    console.log(`Reset empty on ${inputEle.id}`)
    inputEle.value = ''
  })
}
resetBtn.addEventListener('click', resetHandler, false)
// resetBtn.removeEventListener('click', resetHandler, false)

const createBtn = document.getElementById('submit')
createBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const isValidInput = Array.from(allInputEles).every(
    (inputEle) => inputEle.value.length !== 0
  )
  const pEle = document.querySelector('p')
  if (isValidInput) {
    pEle.textContent = 'your account has been created!'
    pEle.style = 'color:green'
  } else {
    pEle.textContent = 'missing some values, please try again'
    pEle.style = 'color:red'
  }
})
