import Vue from 'vue'
import axios from 'axios'
import { setInterval } from 'timers';

new Vue({
    el: '#app',
    data: {
        sportstories: []
    },
    mounted() {
        axios.get('/Ticker/GetSheetData').then(response => (this.sportstories = response.data))
    },
    created: function () {
        setInterval(this.updateTicker, 5000);
    },
    methods: {
        updateTicker: function () {
            var removed = this.sportstories.pop();
            this.sportstories.unshift(removed);
            for (var i in this.sportstories) {
                this.sportstories[i].currentstory = false;
            }
            this.sportstories[0].currentstory = true;
        }
    }
});