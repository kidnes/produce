

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import axios from 'axios';

import './common/hub';
import 'one-design-element';
import './common/css/index.less';
import 'font-awesome/css/font-awesome.min.css';

// TODO: 布局设置，上线时删除
import 'xpage-layout-setting';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(ElementUI);

axios.interceptors.response.use(res => {
    let data = res.data;
    if (Number(data.code) === 0) {
        return data;
    }

    return Promise.reject(data);
}, res => Promise.reject(res));

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
});
