window.onload = function() {
  const textField = document.getElementById("text")
  const form = document.querySelector("form")
  const age = document.getElementById("age")
  form.onsubmit = function(event) {

    // grab number from input field

    event.preventDefault();

    // next block of code will display text based of age entered

    if (age.value <= 18) {
      textField.innerHTML = "Sorry homie, you can't vote now :("
    } 
    else if(age.value === 18) {
      textField.innerHTML = "HBD big boy, now you can vote"
    } 
    else (age >= 18) {
      textField.innerHTML = "Vote wisely friend"
    }
  }

}
