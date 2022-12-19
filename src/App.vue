<template>
  <div id="app" class="full-bleed">
    <router-view />
    <router-view name="pages"/>
    <router-view name="projects"/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  @import "./assets/style.css";

</style>
