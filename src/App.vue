<script setup lang="ts"></script>

<template lang="pug">
  header
    .wrapper
      nav
        RouterLink(to="/") adsfa
        RouterLink(to="/about") adsfa
  RouterView()
</template>

<style scoped lang="scss">
.wrapper {
}
</style>
