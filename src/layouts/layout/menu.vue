<template>
<div class="xp-menu">
    <el-menu
        ref="menu"
        class="xp-menu-wrap"
        :class="{'xp-menu-horizontal': isTopmenu}"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
        :default-active="$route.path"
        :collapse="isCollapse"
        :mode="isTopmenu?'horizontal':'vertical'"
        unique-opened
        router>
        <template v-for="(item, index) in menus">
            <el-menu-item
                v-if="!item.children || item.children.length === 0"
                :index="item.path||''+index"
                :route="item.path"
                :key="''+index">
                <i v-if="item.icon"  class="menu-icon" :class="item.icon"></i>
                <span v-if="item.name" slot="title">{{item.name}}</span>
            </el-menu-item>
            <el-submenu
                v-else
                :index="item.path||''+index"
                :key="index">
                <template slot="title">
                <i v-if="item.icon" class="menu-icon" :class="item.icon"></i>
                <span v-if="item.name" slot="title">{{item.name}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item
                        v-for="(subitem, subindex) in item.children"
                        :key="index + '-' + subindex"
                        :route="subitem.path"
                        :index="subitem.path || index + '-' + subindex">
                        <span>{{subitem.name}}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </template>
    </el-menu>
</div>
</template>

<script>
import menuConfig from '../menu-config';

export default {
    name: 'xp-menu',
    props: {
        isTopmenu: {
            default: false
        }
    },
    data() {
        return {
            menus: menuConfig,
            isCollapse: false
        };
    },
    events: {
        onCollapse(evt) {
            this.isCollapse = evt;
        }
    }
};
</script>
<style lang="less">

.xp-menu {
    &-wrap {
        border-right: 0;
        .menu-icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 5px;
            vertical-align: text-bottom;
        }
        .el-menu-item {
            &-group__title {
                padding: 0;
            }
        }
        &:not(.el-menu--collapse):not(.xp-menu-horizontal) {
            width: 190px;
            min-height: 400px;
        }
    }
    &-horizontal {
    }
    .el-menu {
        background: none;
    } 
}


</style>
