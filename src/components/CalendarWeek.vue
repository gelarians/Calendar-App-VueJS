<template>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-12">
                <div class="card-group">
                    <CalendarDay 
                    v-for="day in state.calendarWeekData"
                    :key="day.id"
                    :day="day"
                    />
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import {store} from "../store.js"
import CalendarDay from "./CalendarDay"

export default {
    name: "CallendarWeek",
    data(){
        return {
            state: store.state

        }
    },
    components: {
        CalendarDay 
    },
}
</script>

<style scoped>

</style>