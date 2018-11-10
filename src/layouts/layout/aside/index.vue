<template>
<div class="xp-aside">
    <xp-logo style="margin: 16px 20px;"></xp-logo>
    <xp-menu></xp-menu>
</div>
</template>

<script>
import xpMenu from '../menu';
import xpLogo from '../logo';

export default {
    name: 'x-aside',
    components: {
        xpMenu,
        xpLogo
    }
};
</script>

