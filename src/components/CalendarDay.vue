<template>
              <div class="card">
                <div 
                @click="setActiveDay(day.id)"
                style="cursor:pointer"
                class="card-header text-center bg-vue"
                :class="[day.active ? activeClass : defaultClass]"
                >
                  <strong>{{day.fullname}}</strong>
                </div>
                <div class="card-body">
                  <div>{{ day.id }}</div>
                  <CalendarEvent 
                  v-for="(event, index) in day.events"
                  :key="index"
                  :event="event"
                  :day="day"
                  />

                </div>
              </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent.vue"
import {store} from "../store.js"

export default {
    name: 'CalendarDay',
    props: ["day"],
    data() {
      return {
        activeClass: "bg-vue2",
        defaultClass: "bg-vue"
      }
    },
    components: {
        CalendarEvent,
    },
    methods: {
      setActiveDay(dayId){
        store.setActiveDay(dayId)
      }
    }
}
</script>

<style scoped>
.bg-vue{
  background-color:rgb(28, 28, 51);
  color: white
}
.bg-vue2{
  background-color:rgb(42, 186, 14);
  color: white
}

</style>