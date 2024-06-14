<template>
    <div class="badge" :class="theme">
        <span>{{ label }}</span>
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';

    export type TTheme = 'dark' | 'light';

    const props = defineProps<{
        label: String,
        theme?: TTheme
    }>();

    const theme = computed(() => ({
        [`badge--${props.theme || 'light'}`]: true,
    }));
</script>

<style lang="scss" scoped>
    .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 3px 8px;
        margin-bottom: 17px;
        border-radius: 4px;
        border: 1px solid $cl-white;
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: $cl-white;

        &--dark {
            border-color: $cl-blueberry-darkness;
            color: $cl-blueberry-darkness;
        }
    }
</style>

