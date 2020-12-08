<template>
  <div>

    <CalendarWeek />
    <CalendarEntry />

  </div>
</template>

<script>
import CalendarWeek from "./components/CalendarWeek.vue"
import CalendarEntry from "./components/CalendarEntry"

export default {
  name: "App",
  components: {
    CalendarWeek,
    CalendarEntry,
  }
};
</script>

<style scoped>
.bg-vue{
  background-color:rgb(28, 28, 51);
  color: white
}
</style>
