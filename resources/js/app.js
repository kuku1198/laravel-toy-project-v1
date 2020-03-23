import './bootstrap';
import Vue from 'vue';
import vuetify from '../js/plugins/vuetify';
import routes from '../js/routes/routes';
import App from '../js/views/App';

const app = new Vue({
    el: '#app',
    routes,
    vuetify,
    render: h => h(App)
});

export default app;
