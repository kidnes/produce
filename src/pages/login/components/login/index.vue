<template>
<div class="xp-login">
    <div class="xp-login-container">
        <div id="login-container" class="xp-login-container-content"></div>
    </div>
    <div class="xp-login-left">
        <div class="xp-login-left-name">医疗熊掌号</div>
        <div class="xp-login-left-desc">打造优质医疗生态，满足用户医疗知识需求，不忘初心。</div>
    </div>
</div>
</template>

<script>
/**
 * @file UC统一登录框  API文档地址:http://wiki.baidu.com/display/UCbizsys/UniformLogin
 * @author zhangping15
 * @date 2018-06-04
 */
export default {
    name: 'login',
    data() {
        return {
            /**
             * 引入api入口文件
             * 线上js调用请使用 http(s)://cas.baidu.com/staticv2/dep/common-login/api.js
             * QA测试用js请使用 http(s)://cas.baidu.com/staticv2/dep/common-login/qa-api.js
             * RD测试用js请使用 http(s)://cas.baidu.com/staticv2/dep/common-login/rd-api.js
             */
            url: '//cas.baidu.com/staticv2/dep/common-login/qa-api.js',

            /**
             * 参数
             * container 必填 容器节点ID
             * appid 必填 产品线ID
             * staticPage 必填 跨域用静态页面，要求必须与当前接入网站域名,协议,端口一致,并且必须使用完整url路径,比如接入登录的页面为
             http://cas.baidu.com/?tpl=www2,那么StaticPage则为 http://cas.baidu.com/asset/noJump/v3Jump.html.
             *
             */
            config: {
                container: 'login-container',
                appid: 514,// 产品线ID
                staticPage: 'http://hto.baidu.com:8080/jump.html',// 跨域用静态页面
                fromu: 'http://hto.baidu.com:8080/index.html'// 登录成功跳转地址
            }
        };
    },
    mounted() {
        if (!window.ucCommonLogin) {
            let script = document.createElement('script');
            script.src = this.url;
            script.onload = () => {
                this.initUCLogin();
            };
            document.head.appendChild(script);
        }
        else {
            this.initUCLogin();
        }

    },
    methods: {
        /**
         * 初始化安全控件
         *
         * @inner
         */
        initUCLogin() {
            window.ucCommonLogin.init(this.config);
        }
    }
};
</script>
<style lang="less" src="./index.less">

</style>
