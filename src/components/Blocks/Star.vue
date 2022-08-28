<template>
  <div class="star"
       :style="{left: x + '%', top: y + '%'}">
<!--    <img src="../assets/stud.png">-->
    ✶
  </div>
</template>

<script>
// import * as d3 from "d3";

export default {
  name: "Star",
  props: {
    x: Number,
    y: Number,
  },
  // methods: {
  //   renderStuds(){
  //     let divBG = document.querySelector("#studs");
  //     let svg = d3.select('svg');
  //     let W = window.innerWidth, H = window.innerHeight;
  //     divBG.style.width = W;
  //     divBG.style.height = H;
  //     let NX = Math.floor(W/60), NY = Math.floor(H/60);
  //     let w = W/NX, h = H/NY;
  //     for (let x = 1; x < NX; x++){
  //       svg.append('circle')
  //           .attr('class', 'stud')
  //           .attr('r', 8)
  //           .attr('cx', x*w)
  //           .attr('cy', h)
  //           .attr('fill', 'white')
  //           .style("box-shadow", function() {
  //             var i = d3.interpolate("#f0f", "#0ff");
  //             return function(t) {
  //               return "0px 0px 50px 30px " + i(t);
  //             };
  //           })
  //     }
  //   }
  // },
  mounted() {
    // this.renderStuds();
  },

}
</script>

<style scoped>
  /*:root {*/
  /*  --glow:*/
  /*      0 0 60px 30px #fff,  !* inner white *!*/
  /*      0 0 100px 60px #f0f, !* middle magenta *!*/
  /*      0 0 140px 90px #0ff; !* outer cyan *!*/
  /*}*/
  /*#studs {*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*}*/
  /*svg {*/
  /*  position: relative;*/
  /*  float:left;*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*}*/
  .star {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    font-size: 15px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Old versions of Firefox */
    user-select: none; /* Non-prefixed version, currently */
  }

</style>
