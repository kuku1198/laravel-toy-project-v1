import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify';

import Routes from '../js/routes/routes.js';

import App from '../js/views/App';

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    rotuer: Routes,
    render: h => h(App)
});

export default app;
