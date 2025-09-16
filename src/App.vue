<script setup lang="ts"></script>

<template lang="pug">
  header
    .wrapper
      nav
        RouterLink(to="/") adsfa
        RouterLink(to="/custom-table") custom-table
  RouterView()
</template>

<style scoped lang="scss">
.wrapper {
}
</style>
