import {calendarWeekData} from "./data.js"

export const store = {
    state: {
        calendarWeekData
    },
    getActiveDay(){
        return this.state.calendarWeekData.find(day => day.active === true)
    },
    setActiveDay(dayID){
        this.state.calendarWeekData.map(dayObj => {
            dayObj.id === dayID ? dayObj.active = true : dayObj.active = false
        })
    },
    storeEvent(eventTitle, eventColor){
        const activeDay = this.getActiveDay()
        activeDay.events.push({ titel: eventTitle, edit: false, collor: eventColor})

    },
    editEvent(dayId, eventTitle){
        this.resetEditOfAllEvents()
        const dayObj = this.state.calendarWeekData.find(day => day.id === dayId) 
        const eventObj = dayObj.events.find(event => event.titel === eventTitle)
        eventObj.edit = true
    },
    resetEditOfAllEvents(){
        this.state.calendarWeekData.map(dayObj => {
            dayObj.events.map(event => {
                event.edit = false
            })
        })
    },
    changeEvent(eventTitle, dayId, newTitle){
        const dayObj = this.state.calendarWeekData.find(day => day.id === dayId) 
        const eventObj = dayObj.events.find(event => event.titel === eventTitle)
        eventObj.titel = newTitle
        eventObj.edit = false
    },
    deleteEvent(dayId, eventTitle){
        const dayObj = this.state.calendarWeekData.find(day => day.id === dayId)
        const eventIndex = dayObj.events.findIndex(event => event.titel === eventTitle)
        dayObj.events.splice(eventIndex,1)
    },
    emptyCalendar () {
        this.state.calendarWeekData.map(dayObj => {
            dayObj.events = []
        })
    }
}