<template>
  <article class="project page-full"
       :style="{left: left + 'px',
                width: width -50 + 'px',
                zIndex: index}"
  >
    <section class="head">
      <div class="arrow-down" @click="$el.scrollTop = $el.scrollHeight">
        <stud v-for="i in 4"
              :key="'arrow-down-right'+i"
              :x="50-(i-1)*10"
              :y="50-i*10"
        />
        <stud v-for="i in 4"
              :key="'arrow-down-left'+i"
              :x="50+(i-1)*10"
              :y="50-i*10"
        />
      </div>
<!--      <router-link :to="'/project/' + (index-1)"-->
<!--                   tag="div">-->
<!--        <h1> {{title}} </h1>-->
<!--      </router-link>-->

      <h1> {{title}} </h1>
      <h2 v-if="index === 3">Tj Bayowa, Mingjia Chen</h2>
      <h2 v-else style="margin: 25px 9% 25px;">
        <a target="_blank" :href="link"> {{ author }} </a>
      </h2>
    </section>

    <!--    queer life in lockdown shanghai-->
    <section class="body" v-if="index === 0">
      <queer-life-in-lockdown-shanghai
        :width="width" />
    </section>

    <!--    /s/ /z/-->
    <section class="body" v-if="index === 1">
      <img src="/images/s_z_0.jpg">
      <p class="caption">
        /s/ /z/ project poster. Image by Felix Li (2022).
      </p>
      <p>
        /s/ /z/ is a personal voice archive that wedges speech therapy practices, mimicry, and repetition. It serves as a contemplative view on how the voice is subject to queerness and the implications of that relationship. /s/ /z/ aims to tackle the question of “how does a voice get queered (both by a speaker and by a listener)”? It explores how it is viewed on both a linguistic and psychological level and the resulting processes of institutionalization by society and media. /s/ /z/ expands on ideas of queering being amplified by mimicry and repetition in relation to the voice, and broadly how the “lisp” is interrogated. /s/ /z/ investigates speech therapy techniques; particularly practices to make a stereotypical gay male voice sound more stereotypically straight. Ultimately, the project converges on the question of “how does the voice spatialize and contextualize a queer body”?
      </p><p>
      In this first addition to the /s/ /z/ archive, the artist recorded himself saying the 50 most common English words<sup>1</sup> in his voice and then in a “speech therapized” voice. The result is an audiovisual project that deploys the cut and two-channel sound to ask what it means to have a queer voice.
      </p>
    <div class="media-container" style='width: 89%; margin: 3% 6%;'>
      <video src="/images/s_z.mp4" width="100%" autoplay controls></video>
    </div>

    <div class="footer">
      <p>
        1 Oxford English Dictionary, “Dictionary," <a target="_blank" href="https://www.oed.com/browsedictionary?browseType=sortFrequency&page=1&pageSize=20&scope=ENTRY&sort=frequency&type=dictionarybrowse">link</a>.
      </p>
    </div>
    </section>
    <section class="body" v-if="index === 2">
      <the-skin-i-visibly-live-in />
    </section>
<!--    Minor Presence-->
    <section class="body" v-if="index === 3">
      <minor-presence />
    </section>

    <section class="body" v-if="index === 4">
<!--      <div class="header">-->
<!--        <hr>-->
<!--        <p style="font-size: var(&#45;&#45;font-big)">-->
<!--        asexual <sup>/āˈsekSH(o͞o)əl/</sup>-->
<!--        </p>-->
<!--        <p>noun: a person who experiences little or no sexual attraction towards other people.-->
<!--        (colloquially known as “ace”)-->
<!--        </p>-->
<!--        <hr>-->
<!--      </div>-->

      <p>
      Within each photo here and onward, a series of anonymized and named individuals experiences are taken from asexuality forums, including Yahoo! Group Haven for the Human Amoeba (HHA), Asexuality Visibility & Education Network (AVEN), and the Livejournal asexuality.
      </p>
      <img class='center' src="/images/(in)visibility_of_asexuality_0.jpg">
      <p class="caption">
      (In)visibility of Asexuality Umbrella. Full underside view.
      <br>Photograph by Caroline Chea (2022). Boston, MA, United States.
    </p><p>
      To create the collage of community comments, I mainly sifted through the first few months after the establishment of each online ace community. I quoted the delighted reactions of aces discovering the term “asexuality” and the associated communities. To highlight the primary emotions, I enlarged and bolded words and phrases. Then I printed the comments onto purple paper and spray-adhered them onto the umbrella.
    </p><img class='center' src="/images/(in)visibility_of_asexuality_1.jpg">
      <p class="caption">
      (In)visibility of Asexuality Umbrella. Close-up of the purple community section.
      <br>Photograph by Caroline Chea (2022). Boston, MA, United States.
    </p><p>
      When the umbrella is closed, the aceness is hidden from view. Another individual would either need to be sharp-eyed enough to see the paint and collage that barely shows through the slightly transparent polyester, or be in close proximity with the umbrella user.
    </p><img class='center' src="/images/(in)visibility_of_asexuality_2.jpg">
      <p class="caption">
      Photo 3: (In)visibility of Asexuality Umbrella. View of closed umbrella.
      <br>Photograph by Caroline Chea (2022). Boston, MA, United States.
    </p><p>
      Serendipitously, this photo shoot was taken in a sprinkling rain. The rain had lightened up just in time to take photos in the cloudy evening light, so I climbed up to the balcony and proudly opened my umbrella against the water droplets. I had donned an outfit and accessories in the color scheme of the ace flag too. Specifically, the black ring on the middle finger of my right hand is a symbol of asexuality to other aces, and the black mask obscure my facial features into partial anonymity to generally represent ace individuals.
    </p><img class='center' src="/images/(in)visibility_of_asexuality_3.jpg">
      <p class="caption">
      Photo 4: (In)visibility of Asexuality Umbrella. Artist using umbrella.
      <br>Photograph by Caroline Chea (2022). Boston, MA, United States.
    </p><img class='center' src="/images/(in)visibility_of_asexuality_4.jpg">
      <p class="caption">
      Photo 5: (In)visibility of Asexuality Umbrella. Artist using umbrella.
      <br>Photograph by Caroline Chea (2022). Boston, MA, United States.
    </p>
      <div class="footer" />
    </section>

    <section class="body" v-if="index === 5">
      <the-closet />
    </section>

    <div class="footer">
      <div class="arrow-up" @click="$el.scrollTop = 0">
        <stud v-for="i in 4"
              :key="'arrow-up-right'+i"
              :x="50-(i-1)*10"
              :y="i*10"
        />
        <stud v-for="i in 4"
              :key="'arrow-up-left'+i"
              :x="50+(i-1)*10"
              :y="i*10"
        />
    </div>
</div>
  </article>
</template>

<script>
import Stud from "@/components/Blocks/Stud";
import MinorPresence from "@/components/Projects/MinorPresence";
import TheSkinIVisiblyLiveIn from "@/components/Projects/TheSkinIVisiblyLiveIn";
import TheCloset from "@/components/Projects/TheCloset";
import QueerLifeInLockdownShanghai from "@/components/Projects/QueerLifeInLockdownShanghai";
export default {
  name: "Projects",
  components: {QueerLifeInLockdownShanghai, TheCloset, TheSkinIVisiblyLiveIn, MinorPresence, Stud},
  props: {
    title: String,
    author: String,
    link: String,
    left: Number,
    width: Number,
    index: Number,
  },
  mounted() {
    // let ps = this.$el.querySelectorAll("p")
    // for (let i=0; i < 30; i++){
    //   let p = ps[i]
    //   console.log(p.innerText.slice(0, 3))
    //   if (p.innerText === "TB:") {
    //     ps[i].style.color = 'pink';
    //   }
    // }
  },
  methods: {
    loadMedia(path) {
      return require(path)
    }
  }
}
</script>

<style scoped>
.page-full {
  padding-left: 50px;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.body {
  display: flex;
  flex-direction: column;
}
.arrow-down {
  cursor: pointer;
  position: relative;
  top: 90px;
  margin: 0 auto;
  height: 50px;
  width: 100px;
}
.arrow-up {
  cursor: pointer;
  position: relative;
  /*left: calc(50% - 50px);*/
  margin: 0 auto;
  align-self: center;
  bottom: 0;
  height: 50px;
  width: 100px;
}

p {
  text-indent: 60px;
  font-size: var(--font-med);
  margin: 0 9%;
  hyphens: none;
}
sup {
  text-decoration: underline;
}

.head {
  text-indent: 0;
  margin-top: 24px;
  margin-bottom: 6px;
}
h1 {
  text-align: center;
  margin-top: 150px;
  margin-bottom: 0;
  text-decoration: underline;
  text-decoration-color: #999;
}
h2 {
  text-align: center;
}
h2 > a {
  /*font-family: "IBM Plex Mono", sans-serif;*/
  /*color: white;*/
  /*text-shadow: 0 0 6px #757575;*/
  font-weight: 500;
  text-decoration: none;
  color: #666;

}
h2 > a:hover {
  text-decoration: underline greenyellow;
}
h3 {
  margin: 60px 9% 25px;
  font-size: var(--font-big);
  color: #666;
  text-decoration: underline;
}
hr {
  align-self: center;
  color: #666;
  width: 84%;
}

.footer {
  padding-bottom: 100px;
}

.footer > p {
  text-indent: 0;
  margin-bottom: 6px;
  font-size: var(--font-small-med);
}
.footnote {
  margin-top: 18px;
}

.footnote > p {
  text-indent: 0;
  margin-bottom: 6px;
  font-size: var(--font-small-med);
}

img {
  margin: 25px 9% 25px;
  width: 82%;
}

/*doris's image slider*/
.img-slider {
  margin: 25px 9% 25px;
}

.img-slider-inner > img {
  margin: 0;
  /*width: 100%;*/
  /*height: 100%;*/
  /*object-fit: contain;*/
}

.center {
  align-self: center;
  width: 600px;
  max-width:600px;
}

.caption {
  text-align: right;
  margin-right: 11%;
  letter-spacing: -0.05rem;
  font-size: var(--font-small);
  color: #666;
  margin-bottom: 18px;
  margin-top: -10px;
}
a {
  color: #666;
}
</style>
