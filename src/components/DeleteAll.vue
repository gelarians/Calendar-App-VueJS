<template>
    <button 
    @click="emptyCalendar()"
    class="btn btn-danger btn-block">
        <i class="fas fa-eraser"> Delete all Events</i>
    </button>
</template>

<script>
import {store} from "../store.js"

export default {
    name: "DeleteAll",
    data() {
        return {

        }
    },
    methods: {
        emptyCalendar(){
            store.emptyCalendar()
        }
    }
}
</script>