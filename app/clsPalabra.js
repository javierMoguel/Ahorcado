class clsPalabra {
  constructor(palabra, difficulty) {
    this.palabra = palabra;
    this.difficulty = difficulty;
    this.espacios;
    this.ocultos = 0;
    this.tries = 0;
    this.getEspacios();
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
        break;
      default:
        this.ocultos = Math.ceil((this.palabra.length * 60) / 100);
        this.tries = Math.ceil(this.palabra.length * 0.8);
        break;
    }
    console.log( this.ocultos, this.tries)
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
  }

  getRandoms() {
      return Math.floor(Math.random() * (0 - this.palabra.length)) + this.palabra.length
  }
}

export default clsPalabra;
