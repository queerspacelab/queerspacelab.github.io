<template>
  <div id="menubar" class="page" :style="{width: width+'px'}">
    <div id="menu">
<!--      <star v-for="i in 5" :key="'bullet'+i" :x="16" :y="18*i-5"/>-->
      <stud v-for="i in 5" :key="'bullet'+i" :x="16" :y="18*i-6"/>
      <router-link to="/">
        <h2>Home</h2>
      </router-link>
      <router-link to="/team">
        <h2>Team</h2>
      </router-link>
      <router-link to="/about" exact>
        <h2>About</h2>
      </router-link>
      <router-link to="/future-visions">
        <h2>Future Vision</h2>
      </router-link>
      <router-link to="/acknowledgment">
        <h2>Acknowledgment</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import Stud from "@/components/Blocks/Stud";
// import Star from "@/components/Blocks/Star";
export default {
  name: "MenuBar",
  props: {
    width: Number,
  },
  components: {
    Stud,
    // Star
  },
}
</script>

<style scoped>
  #menubar {
    position: absolute;
    background: white;
    box-shadow: var(--shadow);
    /*top: %;*/
    height: 100vh;
    padding: 0;
    margin: 0;
    z-index: 999;
  }
  #menu {
    position: absolute;
    bottom: 10%;
  }
  a {
    font-weight: 700;
    color: black;
    text-decoration: none;
    /*text-shadow: 0 0 7px rgba(0, 0, 0, 0.5);*/
  }

</style>
