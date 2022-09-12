<template>
<!--  <div class="page-wrapper"-->
<!--       :style="{ left: left + '%',-->
<!--                   height: '100%',-->
<!--                   transform: isMouseOver? 'translateX(' + (5 + ww * width/400-100) + '%)': 'translateX(' + (ww * width/400-100) + '%)'}"-->
<!--  >-->
<!--  <div class="page-wrapper"-->
<!--       @mouseenter = "isMouseOver = !($route.params.project || $route.params.page)"-->
<!--       @mouseleave = "isMouseOver = false"-->
<!--       :style="{ left: left + 'px',-->
<!--                 zIndex: isMouseOver? 999 :index}"-->
<!--  >-->
  <div class="page-wrapper"
       @mouseenter = "isMouseOver = !($route.params.project || $route.params.page)"
       @mouseleave = "isMouseOver = false"
       :style="{ left: left + 'px',
                 zIndex: isMouseOver? 999 :index}"
  >
<!--    @click="emitClickedIndex(index)"-->
    <router-link tag="div" class="tag"
                 :to="'/project/' + index"
                 @click="emitClickedIndex(index)"
                 :style="{top: nameTagPos + '%', left: '100%'}">

      <p>{{ title_short }}</p>

    </router-link>

<!--    <div class="tag"-->
<!--                 @mousedown.prevent="moveActive=true"-->
<!--                 @mousemove="moveXY($event)"-->
<!--                 @mouseup="moveActive=false"-->
<!--                 @mouseleave="moveActive=false"-->
<!--                 :style="{top: nameTagPos + '%', left: '100%'}">-->
<!--      <p>{{ title_short }}</p>-->
<!--    </div>-->

    <router-link tag="div" class="page"
                 v-show="$route.params.project != index"
                 v-html="abstract"
                 :to="'/project/' + index"
                 :style="{ width: width + 'px', height: 'calc(100vh - 30px)'}"
    />

<!--    <div class="img-container" :style="{ width: width + 'px'}">-->
<!--      <img :src="'/images/' + img">-->
<!--    </div>-->
<!--        <svg style="position: absolute; height: 100%; width: 100%;">-->
<!--      <text v-for="i in Math.floor(wh/10)"-->
<!--            :font-size="(wh/Math.round(wh/10)*0.8) + 'px'"-->
<!--            font-family="IBM Plex Mono"-->
<!--            font-weight="800"-->
<!--            :key="'glyph'+index+i"-->
<!--      x='2.5%'-->
<!--      :y="100/Math.floor(wh/10)*i+'%'">-->
<!--&lt;!&ndash;            ✸&ndash;&gt;-->
<!--          ｜-->
<!--&lt;!&ndash;          ‖&ndash;&gt;-->
<!--      </text>-->
<!--    </svg>-->
  </div>

</template>

<script>
// import * as gsap from "gsap";
// import gsap from "gsap";
export default {
  name: "Page",
  props: {
    index: Number,
    title_short: String,
    // author: String,
    layout: Object,
    contents: Array,
    abstract: String,
    left: Number,
    width: Number,
    img: String,
    isActive: Boolean,
    // topLeft: Array,
    // topRight: Array,
    // bottomLeft: Array,
    // bottomRight: Array,
  },
  data() {
    return {
      title_stringified: '',
      // wh: 0,
      // ww: 0,
      // mouseX: '-500px',
      // mouseY: '-500px',
      nameTagPos: '',
      interval: false,
      isMouseOver: false,
      moveActive: false,
      x: 0,
      y: 0,
      // left_this: 0,
      // width_this: 200,
      // transform: {
      //   rotate: 0,
      //   skewX: 0,
      //   skewY: 0,
      // }
    }
  },
  mounted() {
    // this.title_stringified = this.title_short.toLowerCase().split(' ').join('_');
    // console.log(this.title_stringified);
    // this.left_this = this.left
    // this.width_this = this.width
    this.nameTagPos = (50 - (-1)**this.index*(1+Math.random())*15)
    // this.wh = window.innerHeight;
    // this.ww = window.innerWidth;
  },

  methods: {
    // getImage(path){
    //   return require('../assets/images/' + path);
    // },
    moveXY(e){
      if(this.moveActive) {
        e.preventDefault();
        this.x += e.movementX
        this.y += e.movementY
      }
    },

    emitClickedIndex(i) {
      this.$emit("clickedIndex", i);
    }

  },
  // computed: {
  //   left_animated: function() {
  //     return this.left_this.toFixed(0);
  //   },
  //   width_animated: function() {
  //     return this.width_this.toFixed(0);
  //   }
  // },
  watch: {
    // left: function(d) {
    //   gsap.to(this.$data,{ duration: 1000, left_this: d });
    // },
    // width: function(d) {
    //   gsap.to(this.$data,{ duration: 1000, width_this: d });
    // },

    // width: function () {
    //   let width_ = this.width
    //   this.tween(width_, this.width)
    // }
    // width: function(d) {
    //   this.width_this = d;
    // }
  }
}
</script>

<style scoped>
  :deep() p {
    font-family: "IBM Plex Mono", sans-serif;
    font-weight: 300;
    font-size: var(--font-small);
    letter-spacing: -1px;
    margin: 10px 30px;
    text-shadow: 0 0 15px black;
    text-justify: newspaper;
  }

  .page {
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;
    vertical-align: center;
    position: relative;
    background: white;
    box-shadow: var(--shadow);
    text-align: left;
    color: white;
    cursor: pointer;
    overflow-y: scroll;
    -ms-overflow-y: scroll;
    overflow-x: visible;
    -ms-overflow-x: visible;
  }
  .page::-webkit-scrollbar {
    display: none;
  }
  .page-wrapper {
    position: absolute;
    /*display: flex;*/
    flex-direction: column;
    /*z-index: 99;*/
    /*overflow-y: scroll;*/
    /*-ms-overflow-y: scroll;*/
    overflow-x: visible;
    -ms-overflow-x: visible;
  }
  :deep() img {
    position: relative;
    align-self: center;
    width: 100%;
    margin: 0 auto;
    /*max-width: calc(100% - 28px);*/
    filter: grayscale(100%) contrast(200%) brightness(95%);
    opacity: 0.75;
    box-shadow: var(--shadow);
  }
  .page-wrapper:hover{
    transform: translateX(5px);
  }
  .page-wrapper:hover :deep() .page > p {
    transition: 0.5s ease-in-out;
    color: black;
    text-shadow: 0 0 8px #444;
  }

  .page-wrapper:hover :deep() img {
    opacity: 1;
    filter: grayscale(0%) contrast(100%) brightness(100%);
  }

  .page-wrapper:hover :deep() .tag {
    box-shadow: var(--highlight);
  }

  .tag {
    transform: rotate(90deg) translateX(-50%);
    transform-origin: bottom left;
    width: max-content;
    width: -moz-max-content;
    min-width: 180px;
    background: #414141;
    color: white;
    position: absolute;
    box-shadow: var(--highlight);
    /*cursor: move;*/
  }
.tag > p {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 400;
  font-size: var(--font-small-med);
  text-shadow: 0 0 8px #c9c9c9;
  margin: 10px 20px;
}
  svg {
    padding: 0;
    margin: 0;
  }

</style>
