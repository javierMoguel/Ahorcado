class clsPalabra {
  constructor(palabra, difficulty) {
    this.palabra = palabra;
    this.difficulty = difficulty;
    this.espacios;
    this.ocultos = 0;
    this.tries = 0;
    this.getEspacios();
    this.lose = false;
    this.winner = false;
    this.time;
  }

  setDifficulty() {
    switch (this.difficulty) {
      case "facil":
          this.ocultos = Math.ceil((this.palabra.length * 30) / 100);
          this.tries = Math.ceil(this.palabra.length * 1.5);
        break;
      case "medio":
        this.ocultos = Math.ceil((this.palabra.length * 50) / 100);
        this.tries = this.palabra.length;
        this.time = 120
        break;
      default:
        this.ocultos = Math.ceil((this.palabra.length * 60) / 100);
        this.tries = Math.ceil(this.palabra.length * 0.8);
        this.time = 60;
        break;
    }
  }

  getEspacios() {
    this.setDifficulty();
    const random = [];
    while ( random.length < this.ocultos ) {
        let num = this.getRandoms();
        if ( random.indexOf(num) === -1 ) {
            random.push(num);
        }
    }
    this.espacios = this.palabra.split("");
    random.forEach( num => {
      this.espacios[num] = '_';
    })
  }

  getRandoms() {
      return Math.floor(Math.random() * (0 - this.palabra.length)) + this.palabra.length
  }

  checkLetter ( letra ) {
    let checkControl = false;
    this.palabra.split('').forEach( (res, index) => {
      if ( res === letra ) {
        checkControl = true;
        this.espacios[index] = letra;
      }
    });
    this.checkTries( checkControl );
    return this.espacios;
  }

  checkTries( ctrl ) {
    if ( !ctrl ) {
      this.tries--;
    };
    if ( this.tries === 0 ) {
      this.lose = true;
    } else if ( this.espacios.indexOf('_') === -1 ) {
      this.winner = true;
    }
  }
}

export default clsPalabra;
