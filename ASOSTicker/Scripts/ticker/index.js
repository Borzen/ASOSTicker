import Vue from 'vue'
import axios from 'axios'
import { setInterval } from 'timers';
import BootstrapVue from 'bootstrap-vue';
import './index.css';

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
        setInterval(this.clickButton, 6000); 
    },
    methods: {
        updateTicker: function () {
            var removed = this.sportstories.pop();
            this.sportstories.unshift(removed);
            this.curSport = this.sportstories[0].sport;
            this.curStory = this.sportstories[0].story;
            if (removed.sport === this.sportstories[1].sport) {
            }
            else {
                this.changeSport = true;
            }
            this.changeStory = true;
        },
        updateBools: function () {
            this.changeSport = false;
            this.changeStory = false;
        },
        clickButton: function () {
            var button = document.getElementById('bani');
            button.click();
        }
    }
});