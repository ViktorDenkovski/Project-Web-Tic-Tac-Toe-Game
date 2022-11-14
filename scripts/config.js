//Configuration File for players

function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //+'1' => 1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  //validation of the get player name input
  //1. Triming white space in the input
  const enteredPlayerName = formData.get("playername").trim(); //'  Vik  ' => 'Vik' but its ok for 'Vik Den'
  //2. If entered empty space or trimmed to white space empty string
  if (!enteredPlayerName) {
    //or same as (enteredPlayerName === '')
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid player name!";
    return; //this will stop the entire function and lines wont be executed bellow if this executes
  }
  //select the player to edit dynamic
  const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  
  //store player name globaly
  players[editedPlayer-1].name = enteredPlayerName;

  //close the config player
  closePlayerConfig(); //call it manually to close it done
}
