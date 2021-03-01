const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: function() {
    let guess;
    while(isNaN(guess) || guess<this.smallestNum || guess>this.biggestNum ) {
    guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
    }  
    return guess
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    let newGuess;
    do {
      newGuess = this.getGuess()
      this.prevGuesses.push(newGuess)
      this.render()
    } while(true)

  },
  render: function() {
    let guessed = this.prevGuesses.pop()
    this.prevGuesses.push(guessed)
    console.log(guessed)
    if(guessed === this.secretNum) {
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
    } if(guessed > this.secretNum) {
      alert(`Your guess is too high Previous Guesses ${this.prevGuesses.join(', ')}`)
    } if(guessed < this.secretNum) {
      alert(`Your guess is too low Previous Guesses ${this.prevGuesses.join(', ')}`)
    }
  }

  }

  game.play()
  


 
  

