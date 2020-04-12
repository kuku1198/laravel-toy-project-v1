import Vue from 'vue';
import VueRouter from 'vue-router';

import User from './components/users/User';
import Login from './components/users/Login';
import SingUp from './components/users/SingUp';

import TodoList from './components/TodoList';

Vue.use(VueRouter);

const routes = [
    {
        path: '/user/',
        component: User,
        children: [
            {
                path: 'login',
                component: Login,
            },
            {
                path: 'sing-up',
                component: SingUp,
            },
        ],
    },
    {
        path: '/',
        component: TodoList,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
