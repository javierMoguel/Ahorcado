Vue.component('check-box', {
    data: function() {
        return  {
          diff: 'facil'
        }
   },
    template: `
    <form v-on:change="changeDiff($event)">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="facil" checked>
            <label class="form-check-label" for="inlineRadio1">Fácil</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="medio">
            <label class="form-check-label" for="inlineRadio2">Medio</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="dificl">
            <label class="form-check-label" for="inlineRadio3">Difícil</label>
        </div>
    </form>
    `,
    methods: {
        changeDiff(e) {
            this.$root.$emit('difficulty', e.target.value);
        }
    }
})