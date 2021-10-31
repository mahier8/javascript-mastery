const randomNumber = function (min, max) {
  let nb = min + (max - min + 1) * Math.random();
  return Math.floor(nb);
};

function casino() {
  let isPlaying = true;
  let money = 1000;
  alert(`Welcome to our game, you have $${money}.`);

  do {
    let message = `Please pick a number between 1 and 39`;
    let numberPick;
    do {
      numberPick = prompt(message);
      numberPick = parseInt(numberPick);
      console.log(numberPick);

      message = `Please make sure your number is between 1 to 36.`;
    } while (numberPick > 36 || numberPick < 1 || isNaN(numberPick));

    message = `Please place your bet.`;
    let placeBet;
    do {
      placeBet = prompt(message);
      placeBet = parseInt(placeBet);
      console.log(placeBet);

      message = `There seems to be a problem with your bet. Please place your bet again.`;
    } while (placeBet > money || placeBet < 10 || isNaN(placeBet));

    let Rnumber = randomNumber(1, 36);
    console.log(Rnumber);
    alert(`The wheel is spinninnnnnnng!!!`);

    if (numberPick == Rnumber) {
      alert(`The ball landed on your number!`);
      money += placeBet * 36 - placeBet;
      alert(`You now have $${money}`);
    } else if (numberPick % 2 == 0) {
      alert(`The ball landed the black square!`);
      money += placeBet * 18 - placeBet;
      alert(`You now have $${money}`);
    } else {
      alert(`The ball didn't land on anything!`);
      money -= placeBet;
      alert(`You now have $${money}`);
    }

    if ((isPlaying = confirm(`Do you want to play again.`))) {
      if (money == 0) {
        alert(
          `I'm terribly sorry you ran out of money. If you want to play again please withdraw more money.`
        );
        isPlaying = false;
      }
    }
  } while (isPlaying);
}

casino();
