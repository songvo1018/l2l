<template>
  <div id="app">
    <NavigationBar/>
    <keep-alive>
      <component :is="dynamicComponent"/>
    </keep-alive>
  </div>
</template>


<script>
  import NavigationBar from "@/components/NavigationBar";
  import MapView from "@/views/MapView";
  import AboutView from "@/views/AboutView";
  import {currentTab,} from "@/tabs";


  export default {

    components: {
      AboutView,
      NavigationBar,
      MapView,
      // AboutView,
    },
    computed: {
      dynamicComponent() {
        if (currentTab.value === "map") {
          return MapView
        }
        else {
          return AboutView
        }
      }
    }
  };
</script>


<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>