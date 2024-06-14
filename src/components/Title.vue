<template>
    <Component :is="tagType" class="title" :class="classes">
        <span v-html="text"></span>
    </Component>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';

    export type TSize = 'medium' | 'large';
    export type TColor = 'black' | 'white';

    const props = defineProps<{
        tagType:  String,
        text: String,
        size?: TSize,
        color?: TColor
    }>();

    const classes = computed(() => ({
        [`title--${props.size || 'medium'}`]: true,
        [`title--${props.color || 'black'}`]: true,
    }));
</script>

<style lang="scss" scoped>
    .title {
        margin: 0;
        font-family: 'Montserrat';
        font-weight: 500;

        &--medium {
            font-size: 24px;
            line-height: 32px;
        }

        &--large {
            font-size: 28px;
            line-height: 36px;
        }

        &--white {
            color: $cl-white;
        }

        &--dark {
            color: $cl-black;
        }
    }
</style>

