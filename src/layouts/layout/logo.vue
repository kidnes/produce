<template>
<div class="xp-logo">
    <a href="http://xpage.baidu-int.com/" class="xp-logo-link">
        <img src="../icons/logo.svg" alt="XPage" width="36" height="36" class="xp-logo-pic">
        <span class="xp-logo-text">XPage</span>
    </a>
</div>
</template>

<script>

export default {
    name: 'x-aside'
};
</script>
<style lang="less">
.xp-logo {
    &-link {
        display: flex;
        align-items: center;
    }
    &-text {
        margin-left: 18px;
        font-size: 28px;
        color: #fff;
    }

    &-pic {
        display: inline-block;

        span {
            padding-left: 10px;
            border-left: solid 1px #eee;
            font-size: 20px;
        }
    }
}

</style>
