<template>
  <div class="alert text-center" :class="getEventColor">
    <div v-if="!event.edit">
      <div>{{ event.titel }}</div>
      <div>
        <i 
        @click="editEvent(day.id, event.titel)"
        style="cursor:pointer"
        class="fas fa-edit mr-2">
        </i>
        <i 
        @click="deleteEvent(day.id, event.titel)"
        class="far fa-trash-alt" 
        style="cursor:pointer"></i>
      </div>
    </div>

    <div v-if="event.edit">
        <input 
        class="form-control"
        :placeholder="event.titel"
        type="text"
        v-model="editText"
        >
        <hr>
        <i 
        @click="changeEvent(event.titel, day.id)"
        class="fa fa-check"
        
        ></i>
    </div>
  </div>
</template>

<script>
import {store} from "../store.js"

export default {
  name: "CalendarEvent",
  props: ["day", "event"],
  data() {
      return{
          editText: ""
      }
  },
  computed: {
    getEventColor() {
      return "alert-" + this.event.collor;
    },
  },
  methods: {
      editEvent(dayId, eventTitle){
          store.editEvent(dayId, eventTitle)
      },
      changeEvent(eventTitel, dayId){
          if (this.editText === "") return
          let newTxt = this.editText
          store.changeEvent(eventTitel, dayId, newTxt)
          this.editText = ""

      },
      deleteEvent(dayId, eventTitel){
          store.deleteEvent(dayId, eventTitel)
      }
  }
};
</script>

<style scoped></style>
