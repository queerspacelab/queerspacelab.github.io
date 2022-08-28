<template>
  <div id="team" class="page-full">
    <svg style="position: absolute; height: 100%; width: 100%;">
      <text v-for="i in 100"
            font-size="0.7rem"
            font-weight="700"
            color="gray"
            :key="'about'+i"
            x='97.5%'
            :y="i+'%'">
        ‖
      </text>
    </svg>

    <h1>TEAM</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante lectus, imperdiet eu mollis eget, euismod nec odio. Nulla at ornare sapien. Ut sed neque feugiat, suscipit justo ac, dictum sem. Sed ornare sodales rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed elementum nulla aliquam, ornare lectus vel, mattis tortor. Pellentesque a tempor turpis.
  </p>
  </div>
</template>

<script>
export default {
  name: "Team"
}
</script>

<style scoped>

</style>
