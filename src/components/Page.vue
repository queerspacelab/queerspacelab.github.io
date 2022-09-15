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
       @mouseenter = "isMouseOver = true"
       @mouseleave = "isMouseOver = false"
       :style="{ left: isMouseOver ? (left+30) + 'px' : left + 'px',
                 zIndex: isMouseOver ? 999 :index,
                 transform: isMouseOver ? 'translateX(8px)': 'translateX(0)'}"
  >
<!--    @click="emitClickedIndex(index)"-->
    <router-link tag="div" class="tag"
                 :to="'/project/' + index"
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
    >

<!--      <div class="strip-container" :style="{position: 'absolute', height: $el.scrollHeight, width: '100%'}">-->
<!--        <svg :style="{position: 'relative', height: '100%', width: '100%'}">-->
<!--          <text v-for="i in Math.floor($el.scrollWidth/10)"-->
<!--                :font-size="(wh/Math.round($el.scrollHeight/10)*0.8) + 'px'"-->
<!--                font-family="IBM Plex Mono"-->
<!--                font-weight="800"-->
<!--                :key="'glyph'+index+i"-->
<!--                x='97.5%'-->
<!--                :y="100/Math.floor($el.scrollHeight/10)*i+'%'">-->
<!--            &lt;!&ndash;            ✸&ndash;&gt;-->
<!--            &lt;!&ndash;          ｜&ndash;&gt;-->
<!--            ‖-->
<!--          </text>-->
<!--        </svg>-->
<!--      </div>-->

    </router-link>

<!--    <div class="img-container" :style="{ width: width + 'px'}">-->
<!--      <img :src="'/images/' + img">-->
<!--    </div>-->
  </div>
<!--  </div>-->
<!--  </div>-->

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
    // layout: Object,
    contents: Array,
    abstract: String,
    left: Number,
    width: Number,
    interval: Number,
    img: String,
    // isActive: Boolean,
    // topLeft: Array,
    // topRight: Array,
    // bottomLeft: Array,
    // bottomRight: Array,
  },
  computed: {
    left_this() {
      return this.left
    }
  },
  data() {
    return {
      title_stringified: '',
      // wh: 0,
      // ww: 0,
      // mouseX: '-500px',
      // mouseY: '-500px',
      nameTagPos: '',
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
    this.nameTagPos = (45 + (-1)**this.index*(1+Math.random())*15)
    // this.wh = window.innerHeight;
    // this.ww = window.innerWidth;
  },

  methods: {
    // getImage(path){
    //   return require('../assets/images/' + path);
    // },
    // moveXY(e){
    //   if(this.moveActive) {
    //     e.preventDefault();
    //     this.x += e.movementX
    //     this.y += e.movementY
    //   }
    // },
    emitClickedIndex(i) {
      this.$emit("clickedIndex", i);
    }
  },
}
</script>

<style scoped>
  :deep() p {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    font-size: var(--font-small);
    letter-spacing: -1px;
    margin: 10px 30px;
    text-shadow: 0 0 15px black;
    text-justify: newspaper;
    hyphens: auto;
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
    /*flex-direction: column;*/
    /*z-index: 99;*/
    /*overflow-y: scroll;*/
    /*-ms-overflow-y: scroll;*/
    overflow-x: visible;
    -ms-overflow-x: visible;
    transition: 0.5s left ease, 0.5s z-index;

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
    overflow-x: visible;
    -ms-overflow-x: visible;

  }
  /*.page-wrapper:hover{*/
  /*  transform: translateX(8px);*/
  /*}*/
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
  /*font-family: "IBM Plex Mono", monospace;*/
  font-weight: 400;
  font-size: var(--font-small-med);
  text-shadow: 0 0 8px #c9c9c9;
  margin: 10px 20px;
}
  svg {
    z-index: 999;
    padding: 0;
    margin: 0;
  }
  .strip-container {
    z-index: 999;
    padding: 0;
    margin: 0;
  }

</style>
