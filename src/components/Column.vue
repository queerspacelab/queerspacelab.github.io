<template>
  <div class="column">
    <h1 v-if="index === 1">
      Schooling the Body: <br>
      Single-Gender Educational Institutions as Queer Spaces
    </h1>
    <h1 v-if="index === 2">
      No Trespassing: Bodies, Access, Identities in the Archive
    </h1>
    <h1 v-if="index === 3">
      Bathrooms as Queer Utopias/Dystopias
    </h1>
    <h1 v-if="index === 4">
      Mapping Queer Spaces in Turkey
    </h1>
    <h1 v-if="index === 5">
      Queer Homemaking
    </h1>
    <h1 v-if="index === 6">
      WILG @ MIT: A Queer Exploration of Living Spaces and Histories
    </h1>
<!--    <h2>Firstname Lastname</h2>-->

    <!--    <p>-->
<!--      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a augue imperdiet, dapibus nisl-->
<!--      sit amet, pulvinar magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere-->
<!--      cubilia curae; Etiam laoreet aliquam neque, ut rhoncus urna viverra in. Vestibulum hendrerit-->
<!--      sagittis pretium. Pellentesque est sem, consectetur eget lacinia tincidunt, ultrices non urna.-->
<!--      Fusce imperdiet arcu in ipsum luctus lobortis. Praesent lorem urna, porttitor in dignissim sit-->
<!--      amet, venenatis eget massa. Fusce quis ex eget dui scelerisque vestibulum. Nulla pharetra massa-->
<!--      et augue scelerisque, sed dapibus massa euismod. Morbi placerat ultricies consectetur.-->
<!--      Morbi faucibus sem vitae felis ornare, eu condimentum libero ornare. Quisque vitae dolor egestas,-->
<!--      egestas ipsum non, viverra risus.-->
<!--    </p>-->
    <img v-if="index === 1" alt=""
         src="../../public/images/emerson.jpg">
    <img v-if="index === 2" alt=""
         src="../../public/images/no_trespassing.jpg" >
    <img v-if="index === 3" alt=""
         src="../../public/images/police_article.jpg" >
    <img v-if="index === 4" alt=""
         src="../../public/images/queer_turkey.png" >
    <img v-if="index === 5" alt=""
         src="../../public/images/three_friends.jpg" >
    <img v-if="index === 6" alt=""
         src="../../public/images/wilg.jpg" >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a augue imperdiet, dapibus nisl
      sit amet, pulvinar magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Etiam laoreet aliquam neque, ut rhoncus urna viverra in. Vestibulum hendrerit
      sagittis pretium. Pellentesque est sem, consectetur eget lacinia tincidunt, ultrices non urna.
      Fusce imperdiet arcu in ipsum luctus lobortis. Praesent lorem urna, porttitor in dignissim sit
      amet, venenatis eget massa. Fusce quis ex eget dui scelerisque vestibulum. Nulla pharetra massa
      et augue scelerisque, sed dapibus massa euismod. Morbi placerat ultricies consectetur.
      Morbi faucibus sem vitae felis ornare, eu condimentum libero ornare. Quisque vitae dolor egestas,
      egestas ipsum non, viverra risus. Donec sit amet mi id dolor ultrices molestie. Suspendisse
      lobortis nec ligula at faucibus. In viverra blandit urna et feugiat. Nunc ante lectus,
      fringilla a purus eget, sollicitudin lacinia nunc. Suspendisse nec urna non dui mattis
      consequat. Aliquam convallis vestibulum ligula. Nunc sit amet elementum elit, et tempus
      metus. Nullam et metus leo. Nunc vel laoreet mauris. Etiam bibendum tortor libero,
      et pellentesque ante consequat eu. Morbi at massa et felis ornare tincidunt et ut magna.
      Praesent vitae quam vel lectus suscipit sodales. Suspendisse sit amet justo lobortis.
    </p>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    index: Number,
  }
}
</script>

<style scoped>
.column {
  font-family: "IBM Plex Mono", serif;
  position: absolute;
  display: flex;
  flex-direction: column;
  /*background: #FF5800;*/
  background: rgba(245, 245, 245, 1);
  width: 600px;
  left: 50%;
  top: 10%;
  height: 80%;
  transform: translateX(-50%);
  z-index: 999;
  overflow: scroll;
  box-shadow: var(--shadow);
  border-left: var(--border-dashed);
  border-right: var(--border-dashed);
}

.column > p {
  font-family: "IBM Plex Mono", serif;
  margin: 30px;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: -0.05rem;
  color: #1c1c1c;
  text-shadow: 0 0 7px #4b4b4b;
}

.column > img {
  width: calc(100% - 60px);
  margin: 0 auto;
  /*opacity: 0.8;*/
}
</style>
