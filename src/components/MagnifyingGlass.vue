<template>
  <div class="pointer" ref="pointer"
      :style="{ left: x,
                top: y}">
    <span></span>
  </div>
</template>

<script>
export default {
  name: "MagnifyingGlass",
  props: {
    x: String,
    y: String,
  },
  mounted() {
  }
}
</script>

<style scoped>
  .pointer {
    float: left;
    position: absolute;
    width: 80px;
    height: 80px;
    transform: translate(-50%,-50%);
    fill: white;
    /*opacity: 0.5;*/
    border-radius: 50%;
    border: 1px solid black;
    z-index: 999;
  }
</style>
