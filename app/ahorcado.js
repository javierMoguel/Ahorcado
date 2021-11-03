import { getRandomWord } from "./apiWords.js";
import clsPalabra from "./clsPalabra.js";
import "./timer.js";

Vue.component("ahorcado", {
  props: ["diff"],
  data: function () {
    return {
      palabra: "",
      espacios: [],
      ctrlPalabra: '',
      lose: false,
      win: false,
      time: 0
    };
  },
  template: `
    <div class="mt-5">
      <div v-if="!this.lose">
      <div class="d-flex justify-content-around">
      <p id="word">{{ this.espacios }}</p>
      <timer v-if="this.time" :time="this.time"></timer>
      </div>
        <div class="input-group mt-5">
          <input type="text" class="form-control" placeholder="Tu letra" aria-label="Text">
          <button class="btn btn-outline-secondary" type="button" @click="checkLetter($event)">Enviar</button>
        </div>
      </div>
      <div v-else>
      <span class="badge bg-danger">HAS PERDIDO. La palabra era {{ this.palabra }}</span>
      </div>
      <button type="button" class="btn btn-primary mt-5" @click="setWord()">RESETEAR JUEGO</button>
    </div>
    `,
    methods: {
      async setWord() {
        this.palabra = await getRandomWord();
        this.objPalabra = new clsPalabra(this.palabra, this._props.diff);
        this.espacios = this.objPalabra.espacios.toString().replaceAll(',',' ');
        this.ctrlPalabra = this.objPalabra.palabra.split('');
        this.time = this.objPalabra.time;
      },
      checkLetter(  ) {
        const letter = document.querySelector('.form-control').value;
        this.espacios = this.objPalabra.checkLetter(letter).toString().replaceAll(',',' ');
        if ( this.objPalabra.lose ) {
          this.loseGame();
        } else if ( this.objPalabra.winner ) {
          alert(`Has ganado`);
          this.setWord();
        }
      },
      loseGame() {
        this.lose = true;
      }
    },
  created: async function () {
    this.setWord();
  },
  watch: {
    diff: function (newVal, oldVal) {
      this.setWord();
    }
  },
});
