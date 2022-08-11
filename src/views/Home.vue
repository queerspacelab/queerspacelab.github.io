<template>
  <div id="home" class="full-bleed">
    <div id="column-left"
    :style="{width: 100-rightColumnWidth + '%', height: '100vh'}">
      <img src="../assets/logos/logo.png" style="width: 130%; top: 10%; position: relative; margin: 50px">
    </div>
    <paragraph v-for="i in 6"
               @showColumn="showColumnFunc($event)"
               @showMagnifyingGlass="showMagnifyingGlassFunc($event)"
               @mouseXY = "mouseXYFunc($event)"
               :key="i"
               :index="i"
               :top-left="[100-margin-i*rightColumnWidth/6, margin*2]"
               :top-right="[100-margin-(i-1)*rightColumnWidth/6, margin*2]"
               :bottom-left="[100-margin-i*(rightColumnWidth/6 - 1), 55-margin/4]"
               :bottom-right="[100-margin-(i-1)*(rightColumnWidth/6 - 1), 55-margin/4]"/>
    <paragraph v-for="i in [7,8,9,10,11,12]"
               @showColumn="showColumnFunc($event)"
               @showMagnifyingGlass="showMagnifyingGlassFunc($event)"
               @mouseXY = "mouseXYFunc($event)"
               :key="i"
               :index="i"
               :top-left="[100-margin-(i-6)*(rightColumnWidth/6 - 1), 55+margin/4]"
               :top-right="[100-margin-(i-7)*(rightColumnWidth/6 - 1), 55+margin/4]"
               :bottom-left="[100-margin-(i-6)*(rightColumnWidth/6 - 0.5), 100-margin*2]"
               :bottom-right="[100-margin-(i-7)*(rightColumnWidth/6 - 0.5), 100-margin*2]"/>
<!--    <magnifying-glass-->
<!--        v-if="showMagnifyingGlass"-->
<!--        :x="mouseX"-->
<!--        :y="mouseY" />-->
    <stud v-for="i in 7"
          :key="'row1-'+i"
          :x="100-margin-(i-1)*rightColumnWidth/6" :y="margin*2"/>
    <stud v-for="i in 7"
          :key="'row2-'+i"
          :x="100-margin-(i-1)*(rightColumnWidth/6 - 1)" :y="55+margin/4"/>
    <stud v-for="i in 7"
          :key="'row3-'+i"
          :x="100-margin-(i-1)*(rightColumnWidth/6 - 0.5)" :y="100-margin*2"/>

    <transition name="zoom">
      <column v-if="showColumn"
              :index="showColumn" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Paragraph from "@/components/Paragraph";
import Column from "@/components/Column";
import Stud from "@/components/Stud";
import Footer from "@/components/Footer";
// import MagnifyingGlass from "@/components/MagnifyingGlass";

// import * as gsap from "gsap";

export default {
  name: "Home",
  components: {
    Stud,
    Column,
    // MagnifyingGlass,
    Paragraph,
    Footer,
  },
  mounted() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.showColumn = false;
      }
    });
  },
  data() {
    return {
      mouseX: '-500px',
      mouseY: '-500px',
      showMagnifyingGlass: false,
      margin: 2,
      rightColumnWidth: 80,
      showColumn: false,
    }
  },
  methods: {
    showColumnFunc(bool) {
      this.showColumn = bool;
    },
    mouseXYFunc(xy) {
      this.mouseX = xy[0] + 'px';
      this.mouseY = xy[1] + 'px';
    },
    showMagnifyingGlassFunc(bool) {
      this.showMagnifyingGlass = bool;
    }
  }


}
</script>

<style scoped>
#column-left{
  z-index: 999;
}
</style>
