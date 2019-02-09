import Vue from 'vue'
import axios from 'axios'
import { setInterval } from 'timers';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    data: {
        sportstories: [],
        curStory: "Test Test Test",
        curSport: "ABC",
        changeSport: false,
        changeStory: false

    },
    computed:
    {
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
            this.curSport = this.sportstories[0].sport;
            this.curStory = this.sportstories[0].story;
            if (this.curSport !== removed.sport) {
                this.changeSport = true;
            }
            this.chagneStory = true;
        }
    }
});