/**
 * @file menu 菜单
 *
 * @author zhangping15
 * @date 2018-07-06
 */

export default [{
    name: '首页',
    icon: 'menu-0',
    path: '/'
}, {
    name: '投放分析',
    icon: 'menu-1',
    children: [{
        name: '广告分析',
        path: '/ad'
    }, {
        name: '自定义分析',
        path: '/custom'
    }]
}, {
    name: '内容分析',
    icon: 'menu-2',
    children: [{
        name: '内容类型分析',
        path: '/type'
    }, {
        name: '内容来源分析',
        path: '/from'
    }, {
        name: '内容形式分析',
        path: '/format'
    }]
}, {
    name: '人群分析',
    icon: 'menu-1',
    path: '/crowd'
}, {
    name: 'nav1',
    path: '/page1'
}];
