<template>
<div id="acknowledgement" class="page-full" :style="{width: width + 'px'}">
<!--  <svg style="position: absolute; height: 100%; width: 100%;">-->
<!--    <text v-for="i in 100"-->
<!--          font-size="0.7rem"-->
<!--          font-weight="700"-->
<!--          color="gray"-->
<!--          :key="'about'+i"-->
<!--          x='97.5%'-->
<!--          :y="i+'%'">-->
<!--      ‖-->
<!--    </text>-->
<!--  </svg>-->
  <h1>ACKNOWLEDGMENTS</h1>
  <p class="head">
    This experiment of creating a queer archive would have been impossible to do alone. It is a collaboration with many brilliant individuals, whose questions, energy and expertise were instrumental in shaping the project. This work was made possible by the support from the MindHandHeart Innovation Fund Grant from MIT’s Office of the Chancellor. Wonki (Kii) Kang took on the role as web developer even when the project always felt like a moving target; this website would not exist without his dedication. Alice Song and Angie Door were instrumental in developing the design of the logo and walking us all through the development process. And last but not least, we want to thank the many researchers in the Lab for their eagerness to engage in conversations about queerness, their lived experiences, and for taking the time to research, to learn, and to push boundaries in their archival processes. To all, we are grateful that you came to this space, and honored to learn from and with each one of you.
<br><br>
    The Queer Space Lab, funded and created at MIT, acknowledges Indigenous Peoples as the traditional stewards of the land, and the enduring relationship that exists between them and their traditional territories. The land on which we sit is the traditional unceded territory of the Wampanoag Nation. We acknowledge the painful history of genocide and forced occupation of their territory, and we honor and respect the many diverse indigenous people connected to this land on which we gather from immemorial.
  </p>
</div>
</template>

<script>
export default {
  name: "Acknowledgement",
  props: {
    width: Number,
  }

}
</script>

<style scoped>
p {
  margin: 0 20%;
}
.head {
  margin-top: 9%;
  margin-bottom: 20%;
}


</style>
