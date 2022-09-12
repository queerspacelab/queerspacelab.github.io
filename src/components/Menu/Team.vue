<template>
  <div id="team" class="page-full" :style="{width: width + 'px'}">
<!--    <svg style="position: absolute; height: 100%; width: 100%;">-->
<!--      <text v-for="i in 100"-->
<!--            font-size="0.7rem"-->
<!--            font-weight="700"-->
<!--            color="gray"-->
<!--            :key="'about'+i"-->
<!--            x='97.5%'-->
<!--            :y="i+'%'">-->
<!--        ‖-->
<!--      </text>-->
<!--    </svg>-->

    <h1>TEAM</h1>
    <div class="members-container">
      <div v-for="(content,i) in contents" :key="'member'+i" class="member">
        <h2 @click="toggleBio(content.author)"> {{ content.author }} </h2>
        <div class="pronouns"> {{ content.pronouns }} </div>
        <transition name="swipe-down">
          <div v-if="content.author===showBio" class="bio">
            <p>{{ content.bio }}</p><br>
            <a target="_blank" :href="content.url">{{ content.urlType }}</a>

          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import team from "../../assets/json/team.json";

export default {
  name: "Team",
  props: {
    width: Number,
  },
  data() {
    return {
      contents: '',
      showBio: false,
    }
  },
  mounted() {
    this.contents = require("../../../public/json/team.json")
  },
  methods: {
    toggleBio(name) {
      if (this.showBio === name) this.showBio = false;
      else this.showBio = name
    }
  }

}
</script>

<style scoped>
h1 {
  margin-top: 30%;
}
.members-container {
  display: grid;
  height: 150px;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 9%;
}
.pronouns {
  margin-bottom: 1rem;
  margin-top: -1rem;
  color: #ffffff;
  text-shadow: 0 0 3px #222;
}
.member {
  padding: 0 15px;
}
.bio {
  overflow: hidden;
  width: 100%;
  margin-bottom: 15px;
  color: #666;
  /*padding-right: ;*/
}

.bio > a {
  color: #666;
}
h2 {
  cursor: pointer;
  /*color: #ffffff;*/
  /*text-shadow: 0 1px 6px #222;*/
  text-decoration: underline #999;
  /*text-decoration-color: #666;*/
}

h2:hover {
  transition: 0.3s ease-in-out;
  color: whitesmoke;
  text-shadow: 0 1px 6px #222;
}
p {
  margin: 0 auto;
}

</style>
