const randomNumber = function (min, max) {
  let nb = min + (max - min + 1) * Math.random();
  return Math.floor(nb);
};

function casino() {
  let isPlaying = true; // I will come back to this later
  let money = 1000;
  alert(`Welcome to our casino. You have $${money}.`);

  do {
    let msg = `Please choose a number between 1 and 36.`;
    let pickedNumber;
    do {
      pickedNumber = prompt(msg);
      pickedNumber = parseInt(pickedNumber);
      console.log(pickedNumber);
      msg = `Your choice is not valid, please choose a number between 1 and 36.`;
      // how does this msg get shown as a prompt? Question 1.
      // alert("Please make sure your number is between 1 and 36.");
    } while (pickedNumber < 1 || pickedNumber > 36 || isNaN(pickedNumber));

    msg = `Please place your bet.`;
    let placebet;
    do {
      placebet = prompt(msg);
      placebet = parseInt(placebet);
      console.log(placebet);
      msg = `Please place your bet again.`;
    } while (placebet <= 1 || placebet > money || isNaN(placebet));

    rNumber = randomNumber(1, 36);
    console.log(rNumber);
    alert(`The wheel is spinning!!!!!!!`);

    if (pickedNumber == rNumber) {
      alert(`The ball landed on the same number you chose.`);
      money += placebet * 36 - placebet;
      alert(`Congratulations. You now have $${money}.`);
    } else if (rNumber % 2 == 0) {
      alert(`The ball landed on a black square.`);
      money += placebet * 18 - placebet;
      alert(`Congratulations. You now have $${money}.`);
    } else {
      alert(`The ball didn't land on anything you chose.`);
      money -= placebet;
      alert(`You lost. You now have $${money}.`);
    }

    if ((isPlaying = confirm(`Do you want to continue playing?`))) {
      if (money == 0) {
        alert(`I'm terribly sorry. You have no money so you cannot continue.`);
        isPlaying = false;
        // Question 2. When we set the boolean isPlaying to false, what actually happens?
      }
    }
  } while (isPlaying);
}

casino();
