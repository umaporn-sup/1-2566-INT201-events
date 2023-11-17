//1. query target node
const okBtn = document.querySelector('#submitOK')
const divBtn = document.querySelector('#divButtonPanel')

//2. register event handler to target node
// when event is fired , event object is passed to an event handler function
function showMessage(event) {
  alert(`submit button click!!
    event current target: ${event.currentTarget}
    event phase: ${event.eventPhase}
    event type: ${event.type}
    ---
    event target id : ${event.target.id}
    event target : ${event.target}`)
}
//2.1 put function name for click event handler
//true - capture phase
//false - (by default - bubble phase)
okBtn.addEventListener('click', showMessage, false)

//2.2 put arrow function for click event handler
divBtn.addEventListener(
  'click',
  (event) => {
    alert(`div click!!
    event current target: ${event.currentTarget}
    event phase: ${event.eventPhase}
    event type: ${event.type}
    ---
    event target id : ${event.target.id}
    event target : ${event.target}`)
  },
  false
)
