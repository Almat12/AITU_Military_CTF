import { createRouter, createWebHashHistory } from "vue-router";
import Perscab from './Perscab.vue';
import Navbar from './Navbar.vue';
import App from './App.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/cab', component: Perscab, name:'/cab'},
        { path: '/nav', component: Navbar, name:'/nav'},

      ]
})