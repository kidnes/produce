import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/layouts/';

Vue.use(Router);

let pages = [{
    path: '/',
    name: 'factory-produce',
    component: () => import('@/pages/factory-produce/')
}, {
    path: '/page1',
    name: 'page1',
    component: () => import('@/pages/page1/')
}];

export default new Router({
    routes: [{
        path: '/',
        component: layout,
        children: pages
    }]
});

