<template>
      <div class="container mt-5">
        <div class="row">
          <div class="col-6 offset-3">
            <div class="card">
              <div class="card-header text-center bg-vue">
                <h5>Neuer Termin für: <strong>{{ getNameOfActiveDay }}</strong></h5>
              </div>
              <div class="card-body">
                <div 
                v-show="error"
                class="alert alert-danger">
                  The input cant be empty
                </div>
                <input 
                v-model="eventTitle"
                type="text" 
                class="form-control" 
                placeholder="New Todo"
                @keyup.enter="storeEvent(eventTitle, eventColor)"
                >
                <div class="mt-3 text-center">
                  <!-- V-FOR für die farben  -->
                  <span v-for="(color, index) in ['primary','success','info', 'warning', 'danger']"
                        :key="index"
                        class="alert mr-2 square"
                        :class="[eventColor === color ? getBorderColor : '', 'alert-'+ color]"
                        style="cursor:pointer"
                        @click="changeEventColor(color)"
                  ></span>
                </div>
                <hr>
                <button 
                @click="storeEvent(eventTitle, eventColor)"
                class="btn btn-primary btn-block">Save</button>
                <DeleteAll />
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import {store} from "../store.js"
import DeleteAll from "./DeleteAll.vue"

export default {
    name: "CalendarEntry",
    data() {
        return {
            eventColor: "primary",
            eventTitle: "",
            error: false
        }
    },
    components: {
      DeleteAll,
    },
    computed: {
        getBorderColor(){
            return "border border-" + this.eventColor;
        },
        getNameOfActiveDay(){
          return store.getActiveDay().fullname
        }
    },
    methods: {
        changeEventColor: function(color){
            this.eventColor = color
        },
        storeEvent(eventTitle, eventColor){
          if (eventTitle === "") return this.error = true
          store.storeEvent(eventTitle, eventColor)
          this.eventTitle = ""
          this.eventColor = "primary"
          this.error = false
        }
    }
    
}
</script>

<style scoped>

</style>