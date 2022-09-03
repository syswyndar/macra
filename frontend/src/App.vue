<template>
  <div id="app" class="bg-[#F0F2FA] flex flex-row">
    <div class="w-1/6 h-screen">
      <SideBar />
    </div>
    <div class="w-5/6">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: { SideBar, Navbar, Navbar },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
