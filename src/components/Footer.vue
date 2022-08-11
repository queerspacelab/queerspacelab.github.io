<template>
<div id="footer">
  <div>
  <p>
    Queer Space Lab<br>
    Department of Architecture<br>
    Massachusetts Institute of Technology
  </p>
  </div>
<!--  <div class="img-container">-->
  <img src="../assets/logos/MIT_Arch.png" style="filter: invert(); height: 40px;"><br>
  <img src="../assets/logos/MHH.png" style="height: 66px;">
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
  .img-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  img {
    margin: 10px 15px;
    object-fit: contain;
    /*height: calc(100% - 50px);*/
    /*padding: 10px;*/
  }

</style>
