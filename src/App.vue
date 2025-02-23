<template>
  <RacePage />
</template>

<script>
import RacePage from './components/RacePage.vue'

export default {
  name: 'App',
  components: {
    RacePage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.flex {
  display: flex;
}

.row-center {
  justify-content: center;
}

.col-center {
  align-items: center;
}

.col-center-justify {
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
}

.col {
  display: flex;
  flex-direction: column;
}

.col-3 {
  width: 25%
}

.col-2 {
  width: 20%
}

.col-5 {
  width: 35%
}

.col-6 {
  width: 50%
}

.col-8 {
  width: 60%
}

.w-100 {
  width: 100%;
}
</style>
