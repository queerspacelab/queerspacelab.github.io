<template>
  <div id="magnifying-glass" class="pointer" ref="pointer"
      :style="{ left: x + 'px',
                top: y + 'px'}"
       @mousedown="moveActive=true"
       @mousemove="moveXY($event)"
       @mouseup="moveActive=false"
       @mouseleave="moveActive=false"
  >
    <span></span>
  </div>
</template>

<script>
export default {
  name: "MagnifyingGlass",
  props: {
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
  #magnifying-glass {
    position: absolute;
    width: 250px;
    height: 250px;
    transform: translate(-50%,-50%);
    background: white;
    opacity: 0.8;
    border-radius: 50%;
    border: 0.5px solid black;
    cursor: move;
    z-index: 997;
  }
</style>
