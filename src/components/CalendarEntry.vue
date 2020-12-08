<template>
      <div class="container mt-5">
        <div class="row">
          <div class="col-6 offset-3">
            <div class="card">
              <div class="card-header text-center bg-vue">
                <h5>Neuer Termin für: <strong>Tuesday</strong></h5>
              </div>
              <div class="card-body">
                <input type="text" class="form-control" placeholder="New Todo">
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
                <button class="btn btn-primary btn-block">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: "CalendarEntry",
    data() {
        return {
            eventColor: "primary"
        }
    },
    computed: {
        getBorderColor(){
            return "border border-" + this.eventColor;
        }
    },
    methods: {
        changeEventColor: function(color){
            this.eventColor = color
        }
    }
    
}
</script>

<style scoped>

</style>