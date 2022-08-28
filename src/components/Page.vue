<template>
    <div class="page"
         @mouseenter = "isMouseOver = true"
         @mouseleave = "isMouseOver = false"
         :style="{ left: left_this + '%',
                   width: '400px',
                   height: '100%',
                   transform: isMouseOver? 'translateX(' + (5 + ww * width/400-100) + '%)': 'translateX(' + (ww * width/400-100) + '%)'}"
    >
      <div class="tag"
           @click="emitClickedIndex(index)"
           :style="'top:' + nameTagPos + '%'">
        <p style="font-size: 1.3rem">{{ title_short }}</p>
      </div>
      <svg style="position: absolute; height: 100%; width: 100%;">
        <text v-for="i in 100"
              font-size="0.7rem"
              font-weight="700"
              color="gray"
              :key="'glyph'+index+i"
        x='97.5%'
        :y="i+'%'">
<!--            ✸-->
            ｜
<!--          ‖-->

        </text>
      </svg>
      <div v-html="content" />
<!--    <p>-->
<!--      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante lectus, imperdiet eu mollis eget, euismod nec odio. Nulla at ornare sapien. Ut sed neque feugiat, suscipit justo ac, dictum sem. Sed ornare sodales rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed elementum nulla aliquam, ornare lectus vel, mattis tortor. Pellentesque a tempor turpis.-->
<!--    </p><img alt="" :src="getImage(img)">-->
<!--      <p>-->
<!--      Fusce ante dui, bibendum sit amet porta a, elementum id libero. Duis congue justo ac orci sodales porta. Pellentesque congue urna sit amet ante convallis iaculis. Suspendisse varius id mauris vestibulum accumsan. Maecenas egestas nisl id ipsum aliquet, ut cursus leo venenatis. Aenean eu dolor quis felis vulputate mattis vel et massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec feugiat pellentesque libero id sagittis. Vivamus porttitor iaculis risus, et fringilla magna pretium non.-->
<!--      In nunc metus, consequat eu felis in, convallis commodo dui. Pellentesque nulla felis, dictum quis porttitor nec, posuere vel justo. Integer elementum nunc ac odio aliquet consectetur. In quis vestibulum libero. Vestibulum eget arcu metus. Sed eu ipsum vitae mi convallis auctor. Nam eu finibus nisl. Sed at posuere velit. In hac habitasse platea dictumst. Morbi non pulvinar ante, vitae facilisis nisl. Suspendisse posuere diam vitae commodo semper. Nullam bibendum eros dictum, pellentesque ipsum vel, consequat turpis. Suspendisse iaculis tortor sed enim sagittis, a pretium nunc eleifend. Aenean id egestas purus, vel porta mauris. Cras imperdiet egestas commodo. Cras convallis orci nec nisi aliquam pulvinar.-->
<!--      Phasellus ultrices, ipsum a aliquet pretium, ipsum nisi tempor orci, quis porta dolor neque quis magna. Integer et rutrum sem. Nunc at arcu est. Integer fringilla condimentum ultrices. Morbi sit amet tempus nisi. Nulla varius quam sed vehicula fringilla. Fusce ut arcu a lectus condimentum lobortis non at risus.-->
<!--      Etiam vel placerat purus. Morbi nec justo ligula. Integer eget accumsan lacus. Vivamus et leo porttitor, sagittis justo rutrum, vestibulum orci. Integer condimentum purus vestibulum pharetra imperdiet. Nullam arcu metus, ultrices vel pulvinar non, accumsan in dui. Proin semper tincidunt porttitor. Donec volutpat varius erat, quis ultrices nunc ultrices vel. Aenean in lacinia ante, et elementum felis. Aliquam aliquet, nibh nec eleifend lobortis, mi risus pharetra libero, eu placerat tortor orci eget sem. Mauris vitae ullamcorper felis. Duis ut metus at mauris egestas tempus at nec massa. Phasellus quis tellus sollicitudin, pellentesque felis nec, fringilla sapien. Ut facilisis velit ac lorem dignissim, finibus finibus ipsum volutpat. Vestibulum sed diam sit amet ante malesuada fermentum suscipit quis nisi. Aliquam erat volutpat.-->
<!--      Integer id consectetur libero, et facilisis augue. In mollis lobortis metus quis commodo. Etiam viverra nibh nec nunc rutrum blandit. Suspendisse vitae sapien sit amet magna iaculis lacinia. Aenean pulvinar metus ut turpis iaculis posuere. Aliquam vel felis nunc. Morbi rhoncus dictum dignissim. Aliquam erat volutpat. Cras a iaculis lacus. Vestibulum condimentum elit et sagittis rhoncus. In consequat scelerisque tempus.-->
<!--      Maecenas dapibus lacinia vulputate. Sed diam felis, malesuada non enim vitae, imperdiet vestibulum purus. Proin quis tempor nulla, sit amet posuere massa. Phasellus auctor sollicitudin est vitae ornare. Nulla lorem est, lacinia at tempor sed, laoreet in eros. Sed id vehicula arcu, sed tincidunt purus. Suspendisse sollicitudin varius odio eu interdum. Nulla a lorem enim. Vestibulum nibh arcu, mattis non leo quis, volutpat facilisis magna. Donec eget mauris nulla.-->
<!--      Sed nec suscipit tellus. Pellentesque porta purus lectus, a congue velit sagittis eget. Maecenas hendrerit eros nec eros rhoncus, ac dapibus nisl molestie. Mauris at dictum augue. Fusce ut pulvinar urna. Cras dapibus convallis ex vel scelerisque. Aliquam id mi eget leo ultricies feugiat sit amet ac ipsum. Duis felis turpis, eleifend non enim et, pharetra vulputate elit. Duis blandit arcu sit amet posuere aliquam.-->
<!--      Aliquam semper, mi at volutpat suscipit, erat arcu rhoncus augue, sagittis rhoncus risus leo eget ante. Phasellus efficitur porta auctor. Vivamus ultricies, arcu et efficitur hendrerit, quam mauris volutpat eros, a rhoncus nisl libero nec neque. Fusce efficitur, ante nec euismod efficitur, augue mauris tempor dui, a cursus ipsum odio sed dolor. Pellentesque quis efficitur arcu. Aliquam sed enim sit amet eros posuere accumsan vulputate quis diam. Maecenas bibendum velit rhoncus metus gravida efficitur. Etiam ut libero accumsan, consequat risus sed, interdum turpis. Vivamus nec euismod neque. Mauris nec ornare massa. Suspendisse consectetur neque id tellus facilisis, sed vestibulum nisl feugiat.-->
<!--      Pellentesque vestibulum ipsum leo, id varius tellus vehicula vel. Pellentesque felis dui, blandit at diam vitae, suscipit lobortis mi. Phasellus malesuada erat accumsan imperdiet sodales. Integer vestibulum imperdiet ligula id mattis. Nam laoreet tincidunt ante, id placerat velit mattis id. Quisque bibendum nibh nisl, quis eleifend ante dignissim in. Cras metus ante, venenatis dignissim libero nec, pellentesque ornare erat. Nulla nec lacus leo. Aenean venenatis nibh vitae sapien finibus congue. Maecenas rhoncus tortor non velit lobortis, non viverra lectus mollis.-->
<!--      Phasellus id ligula ante. Nullam mi turpis, ornare dapibus aliquam sed, efficitur eu nisi. Vestibulum ac sodales lectus. Nam fringilla, augue a condimentum vehicula, ligula ex auctor ipsum, et faucibus dolor felis quis augue. Morbi efficitur maximus suscipit. Curabitur vehicula metus leo, ut venenatis tellus posuere ut. Pellentesque vitae luctus ante, eu suscipit leo. Sed sit amet ex a est volutpat molestie eu vel massa. Suspendisse ac nulla velit.-->
<!--      Aliquam ut odio mollis, finibus quam sed, pellentesque ipsum. Suspendisse pellentesque nulla eros, ac vestibulum urna ullamcorper in. Phasellus ut finibus massa, et sollicitudin magna. Cras finibus viverra urna a hendrerit. Donec consequat urna nunc, nec laoreet urna euismod bibendum. Proin volutpat lobortis dolor ac fermentum. Nunc nec mi urna. Suspendisse ultrices justo arcu, vitae euismod risus accumsan at. Fusce eu urna eget libero porta interdum eget at lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc suscipit eros sed mauris congue malesuada a a tortor. Vivamus ultricies mauris vitae enim cursus, luctus rutrum turpis ultrices. Aenean fermentum accumsan nisl et laoreet.-->
<!--      Sed tincidunt eros arcu, in molestie neque cursus quis. Maecenas pharetra bibendum ex id laoreet. Fusce congue tempus enim ac sagittis. Integer tempus aliquet tristique. Praesent dolor nulla, consectetur eget velit non, posuere consequat quam. Donec.-->
<!--    </p>-->
  </div>

</template>

<script>
export default {
  name: "Page",
  props: {
    index: Number,
    title_short: String,
    author: String,
    content: String,
    left: Number,
    width: Number,
    img: String,
    isActive: Boolean,
    // topLeft: Array,
    // topRight: Array,
    // bottomLeft: Array,
    // bottomRight: Array,
  },
  data() {
    return {
      wh: '',
      ww: '',
      mouseX: '-500px',
      mouseY: '-500px',
      nameTagPos: '',
      isMouseOver: false,
      left_this: 0,
      transform: {
        rotate: 0,
        skewX: 0,
        skewY: 0,
      }
    }
  },
  mounted() {
    this.left_this = this.left
    this.nameTagPos = (50 + (-1)**this.index*(1+Math.random())*15)
    this.wh = window.innerHeight;
    this.ww = window.innerWidth;
  },
  methods: {
    // getImage(path){
    //   return require('../assets/images/' + path);
    // },
    emitClickedIndex(i) {
      this.$emit("expandedPage", i);
    },
  }
}
</script>

<style scoped>
  :deep() p {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    font-size: var(--font-med);
    letter-spacing: -0.05rem;
    margin: 20px 30px;
  }

  .page {
    position: absolute;
    background: white;
    box-shadow: var(--shadow);
    float: left;
    text-align: justify;
    color: transparent;
    text-shadow: 0 0 15px black;
    cursor: pointer;
    z-index: 9;
    overflow-y: clip;
    -ms-overflow-y: clip;
    overflow-x: visible;
  }

  :deep() img {
    position: relative;
    align-self: center;
    max-width: calc(100% - 30px);
    filter: grayscale(100%) contrast(150%) brightness(120%);
    opacity: 0.8;
  }

  .page:hover {
    transition: 0.5s ease-in-out;
    color: black;
    text-shadow: 0 0 8px #444;
  }

  .page:hover :deep() img {
    filter: grayscale(0%) contrast(100%) brightness(100%);
  }

  .tag {
    transform: rotate(90deg) translateX(-50%);
    transform-origin: bottom left;
    left: 100%;
    width: max-content;
    width: -moz-max-content;
    background: #414141;
    color: white;
    position: fixed;
    text-shadow: 0 0 5px black;
  }

  svg {
    padding: 0;
    margin: 0;
  }

</style>
