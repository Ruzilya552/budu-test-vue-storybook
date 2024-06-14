<template>
    <a class="new-button" v-if="actionURL" :class="classes" :href="actionURL" title="">
        <img v-if="props.shape === 'square'" src="../assets/images/arrow.svg" alt="arrow" />
        <span v-else>{{ label }}</span>
    </a>
    <button v-else type="button" class="new-button" :class="classes">
        <img v-if="props.shape === 'square'" src="../assets/images/arrow.svg" alt="arrow" />
        <span v-else>{{ label }}</span>
    </button>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';

    export type TBackgroundColor = 'white' | 'peach' | 'blueberry' | 'secondary';
    export type TShape = 'square' | 'default';

    const props = defineProps<{
        label: String,
        backgroundcolor?: TBackgroundColor,
        shape?: TShape,
        actionURL?: string
    }>();

    const classes = computed(() => ({
        [`new-button--${props.backgroundcolor || 'white'}`]: true,
        [`new-button--${props.shape || 'default'}`]: true,
    }));
</script>

<style lang="scss" scoped>
    .new-button {
        position: relative;
        z-index: 2;
        display: inline-block;
        padding: 12px;
        background-color: $cl-white;
        border-radius: 4px;
        border: none;
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: $cl-black;
        cursor: pointer;
        transition: opacity 0.3s ease;
        text-decoration: none;

        &:hover {
            opacity: 0.5;
        }

        &--peach {
            background-color: $cl-peach-medium;
            color: $cl-white;
        }

        &--secondary {
            background-color: $cl-secondary;
        }

        &--blueberry {
            background-color: $cl-blueberry-darkness;
            color: $cl-white;
        }

        &--square {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            padding: 10px 11px;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
</style>

