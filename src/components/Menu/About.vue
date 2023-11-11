<template>
<div id="about" class="page-full" :style="{width: width + 'px'}">
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

  <h1>ABOUT</h1>
  <p class="head">
    The Queer Space Lab began in an effort to create a living archive of queer lives, selfhoods, experiences, and memories at MIT. Led by Aidan Flynn and Okki Berendschot, a team of undergraduate and graduate students participated in weekly seminar- and workshop-style discussions and exercises to uncover content and (re)consider ‘the archive’ as a receptacle of knowledge and celebration. By illuminating LGBTQIA+ voices within and beyond the MIT community,  the Lab questions the very format of an archive, reimagining its content and structure by highlighting the historical invisibility of queerness. Our primary goal is to uplift LGBTQIA+ voices. We approach this work through a series of informed principles, led by various questions… and perhaps without steadfast answers. Our principles function as provocations, leading us to create and to wonder:
  </p>
  <div class="body">
    <br>
    <ol>
      <li>Archives have embedded power structures.
        <ul><li>
          Who created these archives? Who maintains them? Who are they about? What was the purpose of preserving these particular perspectives? How does that shape our understanding of history and the present moment?
        </li></ul>
      </li>
      <li>Diversity should be uplifted in the process of memory making.
        <ul><li>
        What voices have been historically excluded? How might we disrupt and recreate archives to center queer voices? How are they represented? How can we bolster their representation towards celebratory ends?
        </li></ul>
      </li>
      <li>We center lived experiences and strive to create new forms of knowledge production.
        <ul><li>
        How can we respect and honor each person’s lived experiences as legitimate sources in the production of history? How might these lived experiences lead to new modes and methods of documenting?
        </li></ul>
      </li>
      <li>Archives are always in progress.
          <ul><li>
          Is there a complete definition of what an archive can or cannot be? As a process–a tool for examining the heretofore under-examined–how does ‘queering’ the archive create a new pathway or re-orientation in the pursuit of history?
          </li></ul>
      </li>
    </ol>
  </div>
  <p class="center">
    <br><br>
    <span>Research and Media Contact</span><br>
    Aidan Flynn<br>
    <i>Co-Founder</i>, Queer Space Lab @ MIT<br>
    <span><a href="mailto:aflynn@mit.edu">aflynn@mit.edu</a></span>
  </p>
  <div class="body"></div>
</div>
</template>

<script>
export default {
  name: "About",
  props: {
    width: Number,
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  font-size: var(--font-small-med);
  font-family: HKGroteskReg, sans-serif;
  line-height: 2rem;
}
.center > span {
  font-family: HKGrotesk, sans-serif;
}
.center > span > a{
  color: #666;
}
li {
  /*font-family: Georgia;*/
  text-align: center;
  font-size: var(--font-med);
  /*font-variant-caps: small-caps;*/
}
p {
  margin: 0 20%;
}
  ol > li::marker {
    content: counter(list-item) " ";
    color: #666;
    /*font-size: var(--font-small);*/
  }
  ol > li {
  }
  ul > li {
    /*font-family: Georgia;*/
    /*font-variant: small-caps;*/
    font-family: HKGroteskReg, sans-serif;
    font-style: italic;
    font-size: var(--font-small-med);
    text-decoration: none;
    color: #666;
    margin: 15px calc(70px + 9%) 30px calc(70px + 9%);
  }
  ul > li::marker {
    content: ">  ";
  }
  .head {
    margin-top: 9%;
  }
  .body {
    margin: 80px 0 20% 0;
  }
</style>
