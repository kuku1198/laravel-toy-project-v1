import './bootstrap';
import Vue from 'vue';
import vuetify from '../js/plugins/vuetify';
import routes from './routes';
import App from '../js/views/App';

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    routes,
    vuetify,
    render: h => h(App)
});

export default app;
