<template>
<div id="footer">
  <div class="flex-box">
  <div class="footer-text" id="footer-left">
    <p>
      Queer Space Lab<br>
      Department of Architecture<br>
      Massachusetts Institute of Technology
    </p>
  </div>
  <div class="footer-text" id="footer-right">
    <p>
      Designed and Developed by <u><a href="https://k--kang.com" target="_blank" rel=”noreferrer”>Kii Kang</a><br></u>
      Designed by <u>Angie Door</u> & <u>Alice Song</u>
    </p>
  </div>
  </div>

  <!--  <div class="img-container">-->
  <a href="https://architecture.mit.edu/" target="_blank" rel=”noreferrer”>
    <img src="../assets/logos/MIT_Arch.png" style="filter: invert(); height: 40px;">
  </a><br>
  <a href="https://mindhandheart.mit.edu/" target="_blank" rel=”noreferrer”>
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
    background: #282828;
    top: 100vh;
    width: 100vw;
    height: 250px;
    margin: 0 auto;
  }
  .flex-box {
    display: flex;
    justify-content: space-between;

  }
  .footer-text > p {
    font-family: "IBM Plex Mono", sans-serif;
    font-weight: 400;
    font-size: var(--font-small);
    margin: 20px 30px 10px 20px;
    color: #c9c9c9;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  #footer-right > p {
    text-align: right;
  }
  img {
    margin: 10px 20px;
    object-fit: contain;
    /*height: calc(100% - 50px);*/
    /*padding: 10px;*/
  }

</style>
