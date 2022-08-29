<template>
  <div id="app" class="full-bleed">
    <menu-bar :width="menuWidth"/>
    <transition name="slide">
      <about v-if="$route.params.page === 'about'" />
      <acknowledgement v-if="$route.params.page === 'acknowledgment'" />
      <future v-if="$route.params.page === 'future-visions'" />
      <team v-if="$route.params.page === 'team'" />
    </transition>
    <stud v-for="(xy, i) in logoCoor"
          class="stud-logo"
          :key="'stud'+i"
          :x="xy[0]*2000 /ww - 2.5"
          :y="xy[1]*2000 /wh - 2" />
    <paragraph v-for="(content, i) in contents"
               @expandedPage="expandedPageFunc($event)"
               :key="'page'+i"
               :index="i"
               :isActive="i === expandedPage"
               :title_short="content.title_short"
               :author="content.author"
               :content="content.content"
               :img="content.img"
               :left="$route.params.page ? 100-margin-4*(i+1) : 100-margin-(i+1)*(100-menuWidth/ww*100-margin)/6"
               :width="$route.params.page ? 4 : (100-menuWidth/ww*100-margin)/6"/>
    <magnifying-glass
      :x_init = "glassX"
      :y_init = "glassY"
      />

    <star v-for="(xy,i) in randXY"
          :key="'star'+i"
          :x="xy[0]"
          :y="xy[1]"
          />
<!--    <transition name="zoom">-->
<!--      <column v-if="expandedPage"-->
<!--              :index="expandedPage" />-->
<!--    </transition>-->
    <Footer />
  </div>
</template>

<script>
import Paragraph from "@/components/Page";
import Stud from "@/components/Blocks/Stud";
import Star from "@/components/Blocks/Star";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import About from "@/components/Menu/About";
import Acknowledgement from "@/components/Menu/Acknowledgement";
import Future from "@/components/Menu/Future";
import Team from "@/components/Menu/Team";
import MagnifyingGlass from "@/components/MagnifyingGlass";
// import Column from "@/components/Column";

import json from "../assets/json/content.json"

export default {
  name: "Home",
  components: {
    Team,
    Future,
    Acknowledgement,
    About,
    MenuBar,
    Stud,
    Star,
    // Column,
    MagnifyingGlass,
    Paragraph,
    Footer,
  },
  mounted() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.expandedPage = false;
      }
    });
    this.wh = window.innerHeight;
    this.ww = window.innerWidth;
    for (let i=0; i < 30; i++){
      this.randXY.push([Math.random()*100, Math.random()*100])
    }
    this.glassX = this.ww * ((this.rightColumnWidth - this.margin) / 100 * Math.random() + 1 - this.rightColumnWidth/100);
    this.glassY = this.wh * Math.random();
  },
  data() {
    return {
      contents: json,
      showPage: this.$route.params.page,
      randXY: [],
      glassX: 0,
      glassY: 0,
      wh: '',
      ww: '',
      showMagnifyingGlass: false,
      margin: 7,
      menuWidth: 360,
      rightColumnWidth: 80,
      expandedPage: false,
      logoCoor: [[4.8102,4.569], [7.0941,4.569], [8.7642,4.569], [9.9412,4.569], [10.5064,4.569], [11.0809,4.569],
        [12.5344,4.569], [13.0996,4.569], [13.674,4.569], [15.0998,4.569], [15.665,4.569], [16.2395,4.569],
        [4.0385, 5.0525], [5.7101, 5.0525], [16.493 ,5.0525], [7.0941,5.5596], [8.7642 ,5.5596], [9.9486 ,5.5596],
        [12.5298 ,5.5596], [15.1116 ,5.5596], [16.7908 ,5.5596], [4.0385,6.0212], [5.7101,6.0212], [10.2225,6.0212],
        [10.7878 ,6.0212], [11.3622,6.0212], [12.803,6.0212], [13.3683,6.0212], [13.9427,6.0212], [15.3791,6.0212],
        [15.9443,6.0212],  [16.5188,6.0212], [7.0941,6.5234], [8.7851,6.5234], [9.9412,6.5234], [12.5494,6.5234],
        [15.0998,6.5234], [16.2395,6.5234], [4.0385,6.9898 ],[5.7101,6.9898 ],[7.3616,6.9898 ],[8.4967,6.9898 ],[16.5188,6.9898],
        [4.8102 ,7.4872],[5.973,7.4872],[7.664,7.4872],[8.2292,7.4872],[9.9458,7.4872],[10.511,7.4872],
        [11.0855,7.4872],[12.5344,7.4872],[13.0996,7.4872],[13.674,7.4872],[15.1209,7.4872],[16.8093,7.4872],
        [6.2707,7.9805], [5.3678,9.2], [5.933,9.2], [7.3844,9.2], [7.9496,9.2], [8.5241,9.2], [11.144,9.2], [13.5958,9.2],
        [14.161,9.2], [14.7355,9.2], [15.8925,9.2], [16.4578,9.2], [17.0322,9.2], [3.9045,9.7593], [4.9741,9.7593],
        [6.245,9.7593], [8.8458,9.7593], [10.892,9.7593], [11.4665,9.7593], [13.3578,9.7593],
        [5.3984,10.2387], [7.4104,10.2387], [9.0993,10.2387], [10.6048,10.2387], [11.7445,10.2387], [15.9232,10.2387],
        [5.7101,10.7165], [7.7061,10.7165], [8.2713,10.7165], [8.8458,10.7165], [10.3268,10.7165], [12.0259,10.7165],
        [13.3729,10.7165], [16.2025,10.7165], [16.7769,10.7165], [17.3498,10.7165],
        [5.9776,11.1952], [7.4104,11.1952], [15.9232,11.1952], [4.9741,11.6884], [6.245,11.6884], [10.3268,11.6884],
        [10.892,11.6884], [11.4665,11.6884], [12.0191,11.6884], [13.3683,11.6884], [5.4077,12.1725], [5.973,12.1725],
        [7.4104,12.1725], [10.0424,12.1725], [12.3215,12.1725], [13.6361,12.1725], [14.2014,12.1725], [14.7758,12.1725],
        [15.9232,12.1725], [16.4884,12.1725], [17.0629,12.1725], [4.0763,13.4264], [7.2738 ,13.4264], [9.4376,13.4264],
        [10.0029,13.4264], [10.5773,13.4264], [6.954,13.9197], [7.5274,13.9197], [10.8448,13.9197],
        [4.0763,14.4031],[6.6866,14.4031],[7.826,14.4031],[9.4194,14.4031],[11.1333,14.4031], [6.4052,14.8866],
        [8.1247,14.8866],[9.7261,14.8866],[10.2914,14.8866],[10.8658,14.8866], [4.0763,15.3799], [9.4237,15.3799],
        [11.1363,15.3799], [14.0794,15.3799], [6.4036,15.8623], [6.9688 ,15.8623], [7.5433,15.8623], [8.1162,15.8623],
        [11.4144,15.8623], [4.0955,16.3533],[4.5898,16.3533],[5.0259,16.3533],[6.1222,16.3533],[8.3782,16.3533],[9.4237,16.3533],
        [9.989,16.3533],[10.5634,16.3533],[11.1363,16.3533]]
    }
  },
  methods: {
    expandedPageFunc(i) {
      this.expandedPage = i;
    },
    mouseXYFunc(xy) {
      this.mouseX = xy[0] + 'px';
      this.mouseY = xy[1] + 'px';
    },
    showMagnifyingGlassFunc(bool) {
      this.showMagnifyingGlass = bool;
    },
    slidePage() {

    }
  }


}
</script>

<style scoped>
#column-left >img{
  z-index: 999;
}
</style>
