import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home';

Vue.use(VueRouter);

const rotuer = new VueRouter({
    routes : [
        {
            path: '/',
            name: 'home',
            component : Home
        }
    ]
});

export default rotuer;
