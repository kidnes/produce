<template>
<div class="header" :class="{'top-header': isTopmenu}">
    <el-row type="flex" justify="space-between">
        <div v-if="!isTopmenu" class="header-collapse" @click="onCollapse">
            <i class="iconfont icon-zhankai"
                :class="{'icon-zhankai': isCollapse, 'icon-Collapse': !isCollapse}">
            </i>
        </div>
        <div v-else style="display:flex">
            <xp-logo style="margin: 0 65px;"></xp-logo>
            <xp-menu is-topmenu="true"></xp-menu>
        </div>
        <div class="user-login">
            <span class="user-icon"></span>
            <span>{{loginName}}</span>
            <span class="sign-out" @click.stop="logout">
                <i class="fa fa-power-off" aria-hidden="true"></i>退出
            </span>
        </div>
    </el-row>
</div>
</template>

<script>
import '../../icons/iconfont/iconfont.css';

import xpMenu from '../menu';
import xpLogo from '../logo';

export default {
    name: 'x-header',
    props: ['isTopmenu'],
    data() {
        return {
            loginName: '',
            isCollapse: false
        };
    },
    components: {
        xpMenu,
        xpLogo
    },
    created() {
        this.getUserInfo();
    },
    methods: {
        getUserInfo() {
            this.$http.get('./user/userInfo').then(res => {
                this.loginName = res.data.loginName || '';
            }).catch(error => {
                this.$message.error(error.msg || '网络错误！');
            });
        },
        logout() {
            window.location.href = 'https://www.baidu.com';
        },
        onCollapse() {
            this.isCollapse = !this.isCollapse;
            this.$trigger('onCollapse', this.isCollapse);
        }
    }
};
</script>

<style lang="less">
.header {
    height: 60px;
    line-height: 60px;

    &-collapse {
        padding: 0 24px;
        transition: all .3s, padding 0s;
        cursor: pointer;

        &:hover {
            background: rgba(191, 203, 217, 0.1);
        }
    }

    .user-login {
        .user-icon {
            display: inline-block;
            width: 40px;
            height: 40px;
            margin-right: 3px;
            vertical-align: middle;
            background: url('../../icons/head-icon.png') no-repeat center;
            background-size: 100%;
        }
        .sign-out {
            cursor: pointer;
            i {
                margin: 0 5px 0 20px;
            }
        }
    }
}
.top-header {
    color: #fff;

    .el-menu--horizontal {
        .el-menu-item,
        .el-submenu,
        .el-submenu__title {
            height: 60px;
            line-height: 60px;
        }
    }
}

</style>
