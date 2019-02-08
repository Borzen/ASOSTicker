import Vue from 'vue'
import axios from 'axios'
import { setInterval } from 'timers';

new Vue({
    el: '#app',
    data: {
        sportstories: []
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