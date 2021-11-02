import { getRandomWord } from "./apiWords.js";
import clsPalabra from "./clsPalabra.js";

Vue.component("ahorcado", {
  props: ["diff"],
  data: function () {
    return {
      palabra: "",
      espacios: [],
    };
  },
  template: `
    <div class="mt-5">
        <span v-for="espacio in this.espacios">
        {{ espacio.value }}
        </span>
        <div class="input-group mt-5">
        <input type="text" class="form-control" placeholder="Tu letra" aria-label="Text">
        <button class="btn btn-outline-secondary" type="button">Enviar</button>
      </div>
    </div>
    `,
    methods: {
      async setWord() {
        this.palabra = await getRandomWord();
        this.objPalabra = new clsPalabra(this.palabra, this._props.diff);
        this.espacios = this.objPalabra.espacios;
      }
    },
  created: async function () {
    this.setWord();
  },
  watch: {
    diff: function (newVal, oldVal) {
      this.setWord();
    },
  },
});
