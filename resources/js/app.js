import './bootstrap';
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import routes from './routes';
import App from '../js/views/App';

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    router: routes,
    vuetify,
    render: (h) => h(App),
});

export default app;
