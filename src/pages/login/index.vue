<template>
<div class="login">
    <login></login>
</div>
</template>

<script>

import login from './components/login/index.vue';

export default {
    components: {
        'login': login
    },
    data() {
        return {
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
        }
    }
};
</script>

<style lang="less">
.login {

}
</style>
