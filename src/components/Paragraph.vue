<template>
<!--  <div class="wrapper full-bleed">-->
    <div class="paragraph"
         :class="{ active: isActive }"
         @click="emitClickedIndex(index)"
         @mouseenter="showMagnifyingGlass"
         @mouseleave="hideMagnifyingGlass"
         @mousemove="emitMouseXY($event)"
         :style="{ top: topLeft[1] + '%',
                  left: Math.min(topLeft[0], bottomLeft[0]) + '%',
                  width: Math.max(topRight[0]-topLeft[0], bottomRight[0]-bottomLeft[0])  + '%',
                  height: bottomLeft[1] - topLeft[1] + '%',
                  transform: 'rotate(' + transform.rotate + ')' + ' skewX(' + transform.skewX + ')',
                  transformOrigin: topLeft[0] < bottomLeft[0] ? 'top left' : 'bottom left'}"
    >
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a augue imperdiet, dapibus nisl
      sit amet, pulvinar magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Etiam laoreet aliquam neque, ut rhoncus urna viverra in. Vestibulum hendrerit
      sagittis pretium. Pellentesque est sem, consectetur eget lacinia tincidunt, ultrices non urna.
      Fusce imperdiet arcu in ipsum luctus lobortis. Praesent lorem urna, porttitor in dignissim sit
      amet, venenatis eget massa. Fusce quis ex eget dui scelerisque vestibulum. Nulla pharetra massa
      et augue scelerisque, sed dapibus massa euismod. Morbi placerat ultricies consectetur.
      Morbi faucibus sem vitae felis ornare, eu condimentum libero ornare. Quisque vitae dolor egestas,
      egestas ipsum non, viverra risus. Donec sit amet mi id dolor ultrices molestie. Suspendisse
      lobortis nec ligula at faucibus. In viverra blandit urna et feugiat. Nunc ante lectus,
      fringilla a purus eget, sollicitudin lacinia nunc. Suspendisse nec urna non dui mattis
      consequat. Aliquam coznvallis vestibulum ligula. Nunc sit amet elementum elit, et tempus
      metus. Nullam et metus leo. Nunc vel laoreet mauris. Etiam bibendum tortor libero,
      et pellentesque ante consequat eu. Morbi at massa et felis ornare tincidunt et ut magna.
      Praesent vitae quam vel lectus suscipit sodales. Suspendisse sit amet justo lobortis.
      </p>
      <img v-if="index === 1" alt=""
           src="../assets/images/emerson.jpg">
      <img v-if="index === 2" alt=""
           src="../assets/images/no_trespassing.jpg" >
      <img v-if="index === 3" alt=""
           src="../assets/images/police_article.jpg" >
      <img v-if="index === 4" alt=""
           src="../assets/images/queer_turkey.png" >
      <img v-if="index === 5" alt=""
           src="../assets/images/three_friends.jpg" >
      <img v-if="index === 6" alt=""
           src="../assets/images/wilg.jpg" >

<!--      <magnifying-glass-->
<!--          v-if="showMagnifyingGlass"-->
<!--          :x="mouseX"-->
<!--          :y="mouseY"/>-->
    </div>

</template>

<script>
// import MagnifyingGlass from "@/components/MagnifyingGlass";

export default {
  name: "Paragraph",
  // components: {MagnifyingGlass},
  props: {
    index: Number,
    topLeft: Array,
    topRight: Array,
    bottomLeft: Array,
    bottomRight: Array,
  },
  data() {
    return {
      isActive: false,
      mouseX: '-500px',
      mouseY: '-500px',
      // showMagnifyingGlass: false,
      transform: {
        rotate: 0,
        skewX: 0,
        skewY: 0,
      }
    }
  },
  mounted() {
    this.getRotateAngle();
  },
  methods: {
    getRotateAngle() {
      // let dx = window.innerWidth * (this.bottomLeft[0] - this.topLeft[0])
      // let dy = window.innerHeight * (this.bottomLeft[1] - this.topLeft[1])
      // let rotateAngle = Math.atan(-dx/dy)
      // this.transform.rotate = rotateAngle + 'rad';

      // this.transform.rotate = -(6-this.index%6) * (-1)**Math.floor(this.index/6) + 'deg';
      // this.transform.skewX = (6-this.index%6)* (-1)**Math.floor(this.index/6) + 'deg';
      // if(this.index%6 === 0) {
      //   // this.transform.rotate = 0;
      //   this.transform.skewX = 0;
      // }
      // let vx = [window.innerWidth * (this.topRight[0] - this.topLeft[0]), window.innerHeight * (this.topRight[1] - this.topLeft[1])];
      // let vy = [window.innerWidth * (this.topLeft[0] - this.bottomLeft[0]), window.innerHeight * (this.topLeft[1] - this.bottomLeft[1])];
      // this.transform.skewX = Math.PI/2 - Math.atan2(vx[1]-vy[1], vx[0]-vy[0]) + 'rad';
      // console.log((Math.atan2(vx[1]-vy[1], vx[0]-vy[0])) * 180 / Math.PI)


      this.transform.skewX = Math.atan(window.innerWidth / window.innerHeight * (this.topRight[0] - this.bottomRight[0]) / (this.topLeft[1] - this.bottomLeft[1])) + 'rad';
    },
    emitClickedIndex(i) {
      this.$emit("showColumn", i);
    },
    emitMouseXY(e) {
      this.$emit("mouseXY", [e.clientX, e.clientY]);
    },
    showMagnifyingGlass() {
      this.$emit("showMagnifyingGlass", true)
    },
    hideMagnifyingGlass() {
      this.$emit("showMagnifyingGlass", false)
    }
  }
}
</script>

<style scoped>
  .paragraph > p {
    font-family: "Fraunces", serif;
    font-weight: 300;
    font-size: 1.2rem;
    letter-spacing: -0.05rem;
    margin: 5%;
  }
  .paragraph {
    position: absolute;
    float: left;
    hyphens: auto;
    -moz-hyphens: auto;
    text-align: justify;
    color: transparent;
    text-shadow: 0 0 7px black;
    cursor: none;
    z-index: 9;
    overflow: scroll;
  }
  .paragraph::-webkit-scrollbar {
    display: none;
  }

  .paragraph {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .paragraph > img {
    position: absolute;
    align-self: center;
    top: 20%;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    /*z-index: 9;*/
    filter: sepia(100%) hue-rotate(240deg) blur(2px);
    /*opacity: 90%;*/
  }

  .paragraph:hover {
    transition: 0.5s ease-in-out;
    color: #727272;
  }
  .paragraph:hover > img {
    filter: sepia(100%) hue-rotate(240deg);
  }

  .active {
    transition-duration: 1s;
    position: absolute;
    left: 50vw;
    transform: translateX(-50%);
    text-shadow: none;
  }

  svg {
    padding: 0;
    margin: 0;
  }

</style>
