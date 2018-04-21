<template>
  <div id="app">
    <Nav></Nav>
    <router-view class="main-body"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/nav'
import Footer from './components/footer'
export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,body,#app {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-body {
  min-height: calc(100% - 121px);
}
</style>
