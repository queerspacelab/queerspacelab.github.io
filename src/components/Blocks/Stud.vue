<template>
  <div class="stud"
       :style="{left: x + 'px', top: y + 'px'}">
    <img src="../../assets/stud.png">
  </div>
</template>

<script>
export default {
  name: "Stud",
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

  .stud {
    position: absolute;
    display: flex;
    flex-direction: row;
    vertical-align: center;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    font-size: 1.5rem;
    cursor: pointer;

    /*box-shadow:*/
    /*    0 0 2px 2px #6c6c6c inset, !* middle magenta *!*/
    /*    0 0 5px 2px rgba(0, 255, 255, 0.66); !* outer cyan *!*/
  }
  .stud > img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  /*.stud-overlay {*/
  /*  width: 12px;*/
  /*  height: 12px;*/
  /*  position: absolute;*/
  /*  border-radius: 50%;*/
  /*  !*background-color: white;*!*/
  /*  z-index: 99;*/
  /*}*/

</style>
