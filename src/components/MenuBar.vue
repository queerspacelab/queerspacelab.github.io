<template>
  <div id="menubar" class="page">
    <div id="menu">
<!--      <stud :x="500" :y="500"/>-->
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
import Stud from "./Blocks/Stud";
export default {
  name: "MenuBar",
  components: Stud,
}
</script>

<style scoped>
  #menubar {
    position: absolute;
    background: white;
    box-shadow: var(--shadow);
    /*top: %;*/
    height: 100vh;
    width: 20vw;
    padding: 0;
    margin: 0;
    z-index: 999;
  }
  #menu {
    position: absolute;
    top: 70%;
  }
  a {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 700;
    color: black;
    text-decoration: none;
    /*text-shadow: 0 0 7px rgba(0, 0, 0, 0.5);*/
  }

</style>
