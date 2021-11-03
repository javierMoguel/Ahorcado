Vue.component("timer", {
  props: ["time"],
  data: function () {
    return {
      restTime: 0
    };
  },
  template: `
    <p>{{this.restTime}}</p>
  `,
  methods: {
    updateClock(time) {
      if (time == 0) {
        alert('Final');
      } else {
        this.restTime -= 1;
        setTimeout( () => {
          this.updateClock(this.restTime)
        }, 1000)
      }
    }
  },
  created:  function () {
    this.restTime = this._props.time
    this.updateClock( this.restTime );  
  },
  watch: {
    time: function () {
      this.restTime = this._props.time
      this.updateClock( this.restTime );
    }
  },
})