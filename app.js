// app.js

// Create a new Vue app
const app = Vue.createApp({
    data(){
        return {
            endTime: new Date("2024-01-01T00:00:00Z").getTime(),
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    },
    methods: {
        calculateTime(){
            const timeNow = new Date().getTime();
            //this line calculates the current time as the number of milliseconds using the `new Date().getTime()`
            const timeLeft = this.endTime - timeNow;
            console.log(timeLeft)
            //this line calculates the remaining time unting the specific `endTime` above
            this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            //days = divided by the total number of miliseconds in a day(`1000`miliseconds per second, `60`seconds per minutes, `60`minutes per hours, `24`hours per day)
            this.hours = Math.floor((timeLeft / (1000 * 60 * 60) % 24));
            //hours = 
            this.minutes = Math.floor((timeLeft / (1000 * 60) % 60));
            this.seconds = Math.floor((timeLeft / 1000) % 60);
        },
    },
    mounted() {
        this.calculateTime();
        setInterval(() => { this.calculateTime() },1000);
    }
});

// Mount the app
app.mount('#app');

$(document).ready(function(){
    $('#header').hover(function(){
        $(this).toggleClass('bluelight')
    })
    $('.clock').hover(function(){
        $(this).toggleClass('bluelight')
    })
})
