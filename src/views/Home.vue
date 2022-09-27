<template>
  <div id="app" class="full-bleed">
    <menu-bar @click="getLayoutDims"
              :width="isMobileDevice ? layout.viewWidth :layout.menuWidth"
              :isMobileDevice="isMobileDevice"/>
    <transition name="slide">
      <about v-if="$route.params.page === 'about'"
              :width="layout.fullPageWidth"/>
      <acknowledgement v-if="$route.params.page === 'acknowledgments'"
                       :width="layout.fullPageWidth"/>
      <future v-if="$route.params.page === 'future-visions'"
              :width="layout.fullPageWidth"/>
      <team v-if="$route.params.page === 'team'"
            :width="layout.fullPageWidth"/>
    </transition>
    <div v-if="!isMobileDevice" class="pages-container">
      <transition-group appear
                name="slide">
        <page v-for="(content,i) in contents"
               ref="pages"
               @clickedIndex="clickedIndexFunc($event)"
               :id="'page'+i"
               :key="'page'+i"
               :index="i"
               :title_short="content.title_short"
               :author="content.author"
               :abstract="content.abstract"
               :width="layout.pageWidth"
               :img="content.img"
               :left="layout.pageLeft[i]"
               :interval="layout.pageInterval"
        />
      </transition-group>
    </div>
<!--      <magnifying-glass-->
<!--          v-show="!$route.params.page"-->
<!--          @mouseXY="updateGlassXY($event)"-->
<!--          :abstract = "magnified"-->
<!--          :x_init = "glassXY[0]"-->
<!--          :y_init = "glassXY[1]"-->
<!--      />-->
<!--    </div>-->

<!--    <div id="star-wrapper">-->
<!--      <stud v-for="(xy,i) in randXY"-->
<!--            :key="'star'+i"-->
<!--            :x="xy[0]*layout.viewWidth"-->
<!--            :y="xy[1]*layout.viewHeight"-->
<!--            />-->
<!--    </div>-->
<!--    <transition name="zoom">-->
<!--      <column v-if="clickedIndex"-->
<!--              :index="clickedIndex" />-->
<!--    </transition>-->
<!--    <img :src="magnified">-->
    <transition name="fade">
    <projects v-if= "$route.params.project"
              :index = parseInt($route.params.project)
              :left = layout.pageLeft[parseInt($route.params.project)+1]+layout.pageWidth
              :width = layout.fullPageWidth+layout.pageInterval
              :author = contents[$route.params.project].author
              :title = contents[$route.params.project].title
              :link = contents[$route.params.project].link
    />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Page from "@/components/Page";
// import Stud from "@/components/Blocks/Stud";
// import Star from "@/components/Blocks/Star";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import About from "@/components/Menu/About";
import Acknowledgement from "@/components/Menu/Acknowledgement";
import Future from "@/components/Menu/Future";
import Team from "@/components/Menu/Team";
// import MagnifyingGlass from "@/components/MagnifyingGlass";
import Projects from "@/components/Projects";
// import Column from "@/components/Column";

// import json from "../../public/json/content.json"
// import domtoimage from 'dom-to-image';

export default {
  name: "Home",
  components: {
    Projects,
    Team,
    Future,
    Acknowledgement,
    About,
    MenuBar,
    // Stud,
    // Star,
    // Column,
    // MagnifyingGlass,
    Page,
    Footer,
  },
  created() {
    window.addEventListener('resize', this.getLayoutDims);
  },
  mounted() {
    // this.isMobileDevice = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    if (this.isMobileDevice) console.log('mobile device detected');

    this.importData();

    // window.addEventListener("keydown", (e) => {
    //   if (e.key === "Escape") {
    //     this.clickedIndex = false;
    //   }
    // });

    this.noOfProjects = Object.keys(this.contents).length;
    // console.log(this.noOfProjects, 'projects')

    // get layout dimensions
    this.getLayoutDims();

    // for (let i=0; i < 30; i++){
    //   this.randXY.push([Math.random(), Math.random()])
    // }

    // magnifying glass
    // this.glassXY = [this.layout.viewWidth * ((this.rightColumnWidth - this.layout.marginRight) / 100 * Math.random() + 1 - this.rightColumnWidth/100),
    //   this.layout.viewHeight * Math.random()];
    // this.getMagnifiedIndex()
  },
  data() {
    return {
      isMobileDevice: false,
      noOfProjects: '',
      contents: '',
      showProject: this.$route.params.project,
      // randXY: [],
      // glassXY: [0,0],
      // magnified: null,
      layout: {
        viewHeight: 0,
        viewWidth: '',
        marginRight: 80,
        menuWidth: 340,
        pageWidth: 400,
        fullPageWidth: 600,
        pageInterval: '',
        pageLeft: new Array(6),
      },
      rightColumnWidth: 80,
      clickedIndex: false,
      routeParam: '',
    }
  },
  watch: {
    '$route.params': {
      handler: function() {
        // console.log('param', param);
        this.getLayoutDims();
      },
      // deep: true,
      // immediate: true
    },
    // layout(){
    //   this.getMagnifiedIndex()
    // },
    // glassXY(){
    //   this.getMagnifiedIndex()
    // },
    // '$route.params.page': {
    //   handler: function(param) {
    //     if(param) this.getLayoutDims("page")
    //     else this.getLayoutDims("home")
    //   },
    //   // deep: true,
    //   // immediate: true
    // },
    // '$route.params.project': {
    //   handler: function(param) {
    //     if(param) this.getLayoutDims(param)
    //     else this.getLayoutDims("home")
    //   },
    //   deep: true,
    //   immediate: true
    // }
  },
  methods: {
    clickedIndexFunc(i) {
      this.clickedIndex = i;
    },
    importData() {
      this.contents = require("../../public/json/content.json");
      // if (!this.clickedIndex) this.contents = json
      // else this.contents = json.filter((d,i) => i === this.clickedIndex)
    },
    getLayoutDims() {
      this.routeParam = this.$route.params.page ? "page": this.$route.params.project? this.$route.params.project: "home"
      let param = this.routeParam;
      this.layout.viewHeight = window.innerHeight;
      this.layout.viewWidth = window.innerWidth;
      let leftWidth = this.layout.menuWidth;
      let rightWidth = this.layout.viewWidth - this.layout.menuWidth;
      this.layout.fullPageWidth = rightWidth * 0.7 > 1080 ? 1080 : rightWidth * 0.7 < 400 ? 400 : rightWidth * 0.7;
      if ( param === "home" ) {
        this.layout.pageInterval = (this.layout.viewWidth - leftWidth - this.layout.marginRight)/this.noOfProjects;
        for ( let i = 0; i < this.noOfProjects; i++ ) {
          this.layout.pageLeft[i] = this.layout.viewWidth - this.layout.marginRight - this.layout.pageWidth - this.layout.pageInterval*i;
        }
      }
      else if ( param === "page" ) {
        leftWidth += this.layout.fullPageWidth;
      }
      else {
        leftWidth += this.layout.fullPageWidth;
        this.layout.pageInterval = (this.layout.viewWidth - leftWidth - this.layout.marginRight)/this.noOfProjects;
        for ( let i = 0; i < this.noOfProjects; i++ ) {
          if (i > parseInt(param)) {
            this.layout.pageLeft[i] = this.layout.menuWidth + this.layout.pageInterval * (this.noOfProjects - i) - this.layout.pageWidth;
          } else {
            this.layout.pageLeft[i] = this.layout.viewWidth - this.layout.marginRight - this.layout.pageWidth - this.layout.pageInterval*i;
          }
        }
        return;
      }
      this.layout.pageInterval = (this.layout.viewWidth - leftWidth - this.layout.marginRight)/this.noOfProjects;
      for ( let i = 0; i < this.noOfProjects; i++ ) {
        this.layout.pageLeft[i] = this.layout.viewWidth - this.layout.marginRight - this.layout.pageWidth - this.layout.pageInterval*i;
      }
    },
    // getMagnifiedIndex(){
    //   for(let i = 0; i < this.noOfProjects; i++){
    //     if (this.layout.viewWidth * (100 - this.layout.marginRight - 5)/100 - this.layout.viewWidth*(100-this.layout.menuWidth/this.layout.viewWidth*100-this.layout.marginRight)/600 * i < this.glassXY[0]
    //         && this.glassXY[0] < this.layout.viewWidth * (100 - this.layout.marginRight - 5)/100 - this.layout.viewWidth*(100-this.layout.menuWidth/this.layout.viewWidth*100-this.layout.marginRight)/600 * (i-1)) {
    //       // console.log(i)
    //       // console.log(this.layout.viewWidth*(100-this.layout.menuWidth/this.layout.viewWidth*100-this.layout.marginRight)/6  * i)
    //       this.magnified = this.contents[i].abstract
    //     }
    //   }
    // },
    // updateGlassXY(xy) {
    //   this.glassXY = xy
    // },
  }


}
</script>

<style scoped>

#column-left >img{
  z-index: 999;
}
router-link {
  cursor: pointer;
}
</style>
