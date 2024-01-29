import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import Navbar from './Navbar.vue'
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router'
const app = createApp(App);
app.use(router);
app.component('navbar', Navbar)
app.mount('#app');
require('spark-bootstrap');

require('./components/bootstrap');

var appVue = new Vue({
    mixins: [require('spark')]
});

Vue.config.devtools = false
Vue.config.debug = false
Vue.config.silent = true
