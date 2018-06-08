<template>
  <div id="app" v-if="app.visible">
    <vs-topbar style="justify-content: flex-start;">
      <h3>Hayden Hoffman</h3>
    </vs-topbar>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // Initial color
      color: 'primary',
      active:false,
      app: { visible: false }
    }
  },
  created () {
    this.$vs.loading()
    setTimeout( ()=> {
      this.$vs.loading.close();
      this.app.visible = true;
    }, 1000);
  },
  updated () {
    console.log(this.active);
  }
}
</script>

<style>
  h3 {
    padding: 20px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
