<template>
  <div class="magnifying-glass-container"
      :style="{ left: x + 'px',
                top: y + 'px'}"
       @mousedown="moveActive=true"
       @mousemove="moveXY($event)"
       @mouseup="moveActive=false"
       @mouseleave="moveActive=false"
  >
      <div class="magnifying-glass"
           v-html="abstract"/>

    <span></span>
  </div>
</template>

<script>
export default {
  name: "MagnifyingGlass",
  props: {
    abstract: String,
    x_init: Number,
    y_init: Number,
  },
  data() {
    return {
      moveActive: false,
      x: 0,
      y: 0,
    }
  },
  methods: {
    moveXY(e){
      if(this.moveActive) {
        e.preventDefault();
        this.x += e.movementX
        this.y += e.movementY
        this.$emit("mouseXY", [this.x, this.y]);
      }
    }
  },
  watch: {
    x_init: function(x) {
      this.x = x;
    },
    y_init: function(y) {
      this.y = y;
    }
  },
  mounted() {
    // this.x = this.x_init;
    // this.y = this.y_init;
    // console.log("this.x: ", this.x)
  }
}
</script>

<style scoped>
  .magnifying-glass-container {
    position: relative;
    width: 300px;
    height: 300px;
    transform: translate(-150px,-150px) scale(100%);
    cursor: move;
    z-index: 997;
    clip-path: circle(76px at 75px 75px);
    overflow: scroll;
  }
  .magnifying-glass {
    position: absolute;
  }
  :deep() p {
    font-family: "IBM Plex Mono", monospace;
    font-size: var(--font-small-med);
    letter-spacing: -1px;
    margin: 12px 30px;
    text-shadow: 0 0 15px black;
  }

  :deep() img {
    position: relative;
    align-self: center;
    width: 100%;
  }

</style>
