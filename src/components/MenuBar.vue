<template>
  <div id="menubar" class="page" :style="{width: width+'px'}">
<!--    <router-link tag="div" to="/" id="logo-container"-->
<!--    :style="{left: isMobileDevice ? '50%': 0}">-->
      <router-link tag="div" to="/" id="logo-container">
      <stud v-for="(xy, i) in logoCoor"
            class="stud-logo"
            :key="'stud'+i"
            :x="xy[0]*19 -35"
            :y="xy[1]*19 -40" />
    </router-link>
    <div v-if="isMobileDevice" class="mobile">
      <p>Please visit the website on your desktop to view projects.</p>
    </div>
    <div class="white-space"
         v-else
         :style="{width: width+'px', height: width+'px'}">
      <div class="arrow-container">
        <stud v-for="i in 5"
              :key="'arrow-left-top'+i"
              :y="Object.keys($route.params).length === 0 ? Math.random()*width : width/2 -(i-1)*10"
              :x="Object.keys($route.params).length === 0 ? Math.random()*(width-80) + 40: width/2 - 15 + i*10"
        />
        <stud v-for="i in 5"
              :key="'arrow-left-bot'+i"
              :y="Object.keys($route.params).length === 0 ? Math.random()*width : width/2  +(i-1)*10"
              :x="Object.keys($route.params).length === 0 ?  Math.random()*(width-80) + 40: width/2 - 15 + i*10"
        />
        <stud v-for="i in 6"
              :key="'arrow-left-top'+i+5"
              :y="Object.keys($route.params).length === 0 ? Math.random()*width : width/2  -(i-1)*10"
              :x="Object.keys($route.params).length === 0 ? Math.random()*(width-80) + 40: width/2 - 45 + i*10"
        />
        <stud v-for="i in 6"
              :key="'arrow-left-bot'+i+5"
              :y="Object.keys($route.params).length === 0 ? Math.random()*width : width/2  +(i-1)*10"
              :x="Object.keys($route.params).length === 0 ?  Math.random()*(width-80) + 40: width/2 - 45 + i*10"
        />
        <router-link tag = "div" class="click-zone"
                     to="/"/>

      </div>
    </div>

    <div id="menu">
<!--      <star v-for="i in 5" :key="'bullet'+i" :x="16" :y="18*i-5"/>-->
<!--      <stud v-for="i in 5" :key="'bullet'+i" :x="14" :y="18.3*i-6"/>-->
      <router-link to="/">
        <h2>HOME</h2>
      </router-link>
      <router-link to="/team" exact>
        <h2>TEAM</h2>
      </router-link>
      <router-link to="/about" exact>
        <h2>ABOUT</h2>
      </router-link>
<!--      <router-link to="/future-visions">-->
<!--        <h2>FUTURE VISION</h2>-->
<!--      </router-link>-->
      <router-link to="/acknowledgments" exact>
        <h2>ACKNOWLEDGEMENTS</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
// import Stud from "@/components/Blocks/Stud";
// import Star from "@/components/Blocks/Star";
import Stud from "@/components/Blocks/Stud";
export default {
  name: "MenuBar",
  data() {
    return {
      logoCoor: [[4.8102,4.569], [7.0941,4.569], [8.7642,4.569], [9.9412,4.569], [10.5064,4.569], [11.0809,4.569],
        [12.5344,4.569], [13.0996,4.569], [13.674,4.569], [15.0998,4.569], [15.665,4.569], [16.2395,4.569],
        [4.0385, 5.0525], [5.7101, 5.0525], [16.493 ,5.0525], [7.0941,5.5596], [8.7642 ,5.5596], [9.9486 ,5.5596],
        [12.5298 ,5.5596], [15.1116 ,5.5596], [16.7908 ,5.5596], [4.0385,6.0212], [5.7101,6.0212], [10.2225,6.0212],
        [10.7878 ,6.0212], [11.3622,6.0212], [12.803,6.0212], [13.3683,6.0212], [13.9427,6.0212], [15.3791,6.0212],
        [15.9443,6.0212],  [16.5188,6.0212], [7.0941,6.5234], [8.7851,6.5234], [9.9412,6.5234], [12.5494,6.5234],
        [15.0998,6.5234], [16.2395,6.5234], [4.0385,6.9898 ],[5.7101,6.9898 ],[7.3616,6.9898 ],[8.4967,6.9898 ],[16.5188,6.9898],
        [4.8102 ,7.4872],[5.973,7.4872],[7.664,7.4872],[8.2292,7.4872],[9.9458,7.4872],[10.511,7.4872],
        [11.0855,7.4872],[12.5344,7.4872],[13.0996,7.4872],[13.674,7.4872],[15.1209,7.4872],[16.8093,7.4872],
        [6.2707,7.9805], [5.3678,9.2], [5.933,9.2], [7.3844,9.2], [7.9496,9.2], [8.5241,9.2], [11.144,9.2], [13.5958,9.2],
        [14.161,9.2], [14.7355,9.2], [15.8925,9.2], [16.4578,9.2], [17.0322,9.2], [3.9045,9.7593], [4.9741,9.7593],
        [6.245,9.7593], [8.8458,9.7593], [10.892,9.7593], [11.4665,9.7593], [13.3578,9.7593],
        [5.3984,10.2387], [7.4104,10.2387], [9.0993,10.2387], [10.6048,10.2387], [11.7445,10.2387], [15.9232,10.2387],
        [5.7101,10.7165], [7.7061,10.7165], [8.2713,10.7165], [8.8458,10.7165], [10.3268,10.7165], [12.0259,10.7165],
        [13.3729,10.7165], [16.2025,10.7165], [16.7769,10.7165], [17.3498,10.7165],
        [5.9776,11.1952], [7.4104,11.1952], [15.9232,11.1952], [4.9741,11.6884], [6.245,11.6884], [10.3268,11.6884],
        [10.892,11.6884], [11.4665,11.6884], [12.0191,11.6884], [13.3683,11.6884], [5.4077,12.1725], [5.973,12.1725],
        [7.4104,12.1725], [10.0424,12.1725], [12.3215,12.1725], [13.6361,12.1725], [14.2014,12.1725], [14.7758,12.1725],
        [15.9232,12.1725], [16.4884,12.1725], [17.0629,12.1725], [4.0763,13.4264], [7.2738 ,13.4264], [9.4376,13.4264],
        [10.0029,13.4264], [10.5773,13.4264], [6.954,13.9197], [7.5274,13.9197], [10.8448,13.9197],
        [4.0763,14.4031],[6.6866,14.4031],[7.826,14.4031],[9.4194,14.4031],[11.1333,14.4031], [6.4052,14.8866],
        [8.1247,14.8866],[9.7261,14.8866],[10.2914,14.8866],[10.8658,14.8866], [4.0763,15.3799], [9.4237,15.3799],
        [11.1363,15.3799], [14.0794,15.3799], [6.4036,15.8623], [6.9688 ,15.8623], [7.5433,15.8623], [8.1162,15.8623],
        [11.4144,15.8623], [4.0955,16.3533],[4.5898,16.3533],[5.0259,16.3533],[6.1222,16.3533],[8.3782,16.3533],[9.4237,16.3533],
        [9.989,16.3533],[10.5634,16.3533],[11.1363,16.3533]],
    }
  },
  props: {
    isMobileDevice: Boolean,
    width: Number,
  },
  components: {
    Stud
    // Star
  },
}
</script>

<style scoped>
  #menubar {
    position: absolute;
    background: white;
    box-shadow: var(--shadow);
    /*top: %;*/
    height: 100vh;
    padding: 0;
    margin: 0;
    z-index: 999;
  }

  h2 {
    margin-left: 40px;
    font-family: "IBM Plex Mono", sans-serif;
    font-size: 2rem;
    font-weight: 300;
    color: #ffffff;
    text-shadow: 0 1px 6px #222;
    font-stretch: extra-expanded;
  }
  h2:hover {
    transition: 0.4s ease-in-out;
    color: #333;
  }
  #menu {
    position: absolute;
    bottom: 5%;
  }
  a {
    color: #222;
    text-decoration: none;
    /*text-shadow: 0 0 7px rgba(0, 0, 0, 0.5);*/
  }
  #logo-container {
    margin: 30px;
    width: calc(100% - 30px);
    height: 260px;
    cursor: pointer;
  }
  .white-space{
    position: relative;
    display: flex;
  }
  .arrow-container{
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
  .click-zone{
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /*top: 5%;*/
    margin: 0 auto;
    padding: 0;
    height: 125px;
    width: 90px;
  }
  .mobile {
    position: absolute;
    top: 45vh;
    box-shadow: var(--shadow);
    /*transform: translate(0, 50%);*/
    border: var(--border-dashed);
    margin: 15px;

  }
  .mobile > p {
    font-family: HKGroteskReg, sans-serif;
    font-size: var(--font-big);
    text-align: center;
  }

</style>
