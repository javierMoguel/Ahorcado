import "./checkbox.js";
import "./ahorcado.js";
new Vue({
  el: "#app",
  data: {
    titulo: "Ahorcado",
    palabra: "",
    diff: 'facil'
  },
  created: async function () {
    this.$on("difficulty", (diff) => {
      this.diff = diff;
    });
  },
});
