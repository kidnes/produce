<template>
<div class="header-aside-footer-responsive-layout"
    :class="{
        'fixed-header': fixedHeader,
        'fixed-siderbar': fixedSiderbar,
        'fixed-width': fixedWidth,
        'top-menu': isTopmenu,
        'collapse-aside': isCollapse
    }">
    <el-container>
        <el-aside width="190px" :class="{'light': navTheme === 'light'}" v-if="!isTopmenu">
            <x-aside></x-aside>
        </el-aside>
        <el-container>
            <el-header ref="jHeader" height="60px" :class="{'light': navTheme === 'light'}">
                <x-header :is-topmenu="isTopmenu"></x-header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer height="auto">
                <x-footer></x-footer>
            </el-footer>
        </el-container>
    </el-container>
</div>
</template>

<script>
import XAside from './layout/aside/';
import XHeader from './layout/header/';
import XFooter from './layout/footer/';

import setting from './layout-setting';

export default {
    components: {
        XHeader,
        XAside,
        XFooter
    },
    data() {
        return {
            fixedHeader: setting.fixedHeader,
            navTheme: setting.navTheme,
            primaryColor: setting.primaryColor,
            fixedSiderbar: setting.fixedSiderbar,
            fixedWidth: setting.fixedWidth,
            isTopmenu: setting.layout === 'topmenu',
            isCollapse: false
        };
    },
    events: {
        onCollapse(evt) {
            this.isCollapse = evt;
        }
    },
    created() {
        let me = this;
        global.layoutSetting = setting;

        Object.defineProperty(global, 'layoutSetting', {
            enumerable: true,
            configurable: true,
            get() {
                return setting;
            },
            set(newVal) {
                me.fixedHeader = newVal.fixedHeader;
                me.navTheme = newVal.navTheme;
                me.primaryColor = newVal.primaryColor;
                me.fixedSiderbar = newVal.fixedSiderbar;
                me.fixedWidth = newVal.fixedWidth;
                me.isTopmenu = newVal.layout === 'topmenu';
            }
        });
    }
};
</script>
<style lang="less">
.mix(@link) {
    background: url('./icons/menu-@{link}.png') no-repeat center;
    background-size: 100%;
}

.menu-0 {
    .mix(0)
}
.menu-1 {
    .mix(1)
}
.menu-2 {
    .mix(2)
}
</style>

<style lang="less" src="./index.less">
</style>


