<template>
<div id="footer">
  <p>
    Queer Space Lab<br>
    Department of Architecture<br>
    Massachusetts Institute of Technology
  </p>
<!--  <div class="img-container">-->
  <a href="https://architecture.mit.edu/" target="_blank">
    <img src="../assets/logos/MIT_Arch.png" style="filter: invert(); height: 40px;">
  </a><br>
  <a href="https://mindhandheart.mit.edu/" target="_blank">
    <img src="../assets/logos/MHH.png" style="height: 66px;">
  </a>
<!--  </div>-->
</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  #footer {
    position: absolute;
    color: whitesmoke;
    /*display: flex;*/
    justify-content: space-between;
    background: #282828;
    top: 100vh;
    width: 100vw;
    height: 250px;
    margin: 0 auto;
  }
  #footer > p {
    font-family: "IBM Plex Mono", sans-serif;
    font-weight: 400;
    font-size: var(--font-small);
    margin: 20px 10px 10px 20px;
    color: #c9c9c9;
  }
  .img-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  img {
    margin: 10px 20px;
    object-fit: contain;
    /*height: calc(100% - 50px);*/
    /*padding: 10px;*/
  }

</style>
