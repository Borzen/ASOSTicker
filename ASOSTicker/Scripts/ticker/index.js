import Vue from 'vue'
import axios from 'axios'
import { setInterval } from 'timers';

new Vue({
    el: '#app',
    data: {
        sportstories: [{
            currentstory: true,
            sport: "NHL",
            story: "Bob was bob"
        },
            {
                currentstory: false,
                sport: "NBA",
                story: "This one is a test"
            }]
    },
    mounted() {
        axios.get('/Ticker/GetSheetData').then(response => (this.sportsstories = response))
    },
    created: function () {
        setInterval(this.updateTicker, 5000);
    },
    methods: {
        updateTicker: function () {
            var removed = this.sportstories.pop();
            removed.currentstory = false;
            this.sportstories[0].currentstory = true;
            console.log(this.sportstories[0].currentstory + ' spot 0');
            console.log(removed.currentstory + ' removed');
            this.sportstories.unshift(removed);
        }
    }
});