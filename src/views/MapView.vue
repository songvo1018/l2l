<template>
    <MapboxMap :users="users" />

  <div>
    <ul style="display:flex; flex-direction: row; justify-content: space-around">
      <li :class="category" v-for="category in categories" @click="changeCategory" :key="category">{{ category}}</li>
    </ul>
  </div>
</template>

<script>
    import MapboxMap from "@/components/MapboxMap";
    import usersData from "../assets/users.json";

    export default {
        name: "MapView",
        components: {
            MapboxMap,
        },
      data() {
          return {
            users: usersData,
            categories: ["Teacher", "Volunteer", "Doctor", "Lawyer", "All"]
          }
      },
      methods: {
        changeCategory(event) {
          let array = []
          if (event.target.className === "All") {
            this.users = usersData
            return
          }
          for (let i = 0; i < usersData.length; i++) {
            if (usersData[i].status !== event.target.className ) continue
            array.push(usersData[i])
          }
          this.users = array
        }
      }
    }
</script>

<style scoped>

</style>