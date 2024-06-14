<template>
    <div class="card" :class="theme">
        <a class="card__link" v-if="cardUrl" :href="cardUrl" title=""></a>
        <div class="card__wrapper">
            <picture v-if="image" class="card__picture">
                <source v-if="image.srcset" :srcset="image.srcset" :type="image.type">
                <img :src="image.src" :alt="image.alt" :width="image.width" :height="image.height">
            </picture>
            <Badge v-if="badge" :label="badge.label" :theme="badge.theme"  />
            <Title :tagType="title.tagType" :text="title.text" :color="title.color" :size="title.size" />
            <p class="card__description" v-if="description" v-html="description"></p>
            <NewButton v-if="button" :label="button.label" :shape="button.shape" :backgroundcolor="button.backgroundcolor" :actionURL="button.actionURL" />

            <picture v-if="logo" class="card__logo">
                <source v-if="logo.srcset" :srcset="logo.srcset" :type="logo.type">
                <img :src="logo.src" :alt="logo.alt" :width="logo.width" :height="logo.height">
            </picture>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';

    import Badge, { type TTheme } from './Badge.vue';
    import Title, { type TSize, type TColor } from './Title.vue';
    import NewButton, { type TBackgroundColor, type TShape } from './NewButton.vue';

    export type TCardTheme = 'default' | 'style1' | 'style2' | 'style3' | 'style4';

    const props = defineProps<{
        theme: TCardTheme,
        cardUrl?: string,
        image?: {
            srcset?: string,
            type?: string,
            src: string,
            alt: string,
            width: string,
            height: string
        },
        logo?: {
            srcset?: string,
            type?: string,
            src: string,
            alt: string,
            width: string,
            height: string
        },
        badge?: {
            label: string,
            theme: TTheme
        },
        title: {
            tagType: string,
            text: string,
            color?: TColor,
            size?: TSize
        },
        button?: {
            label: string,
            backgroundcolor?: TBackgroundColor,
            shape?: TShape,
            actionURL?: string
        },
        description?: string
    }>();

    const theme = computed(() => ({
        [`card--${props.theme || 'default'}`]: true
    }));
</script>

<style lang="scss" scoped>
    .card {
        position: relative;
        display: flex;
        max-width: 432px;
        min-height: 220px;
        box-sizing: border-box;
        text-decoration: none;

        &__wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            min-height: 100%;
            padding: 16px;
            flex-grow: 1;
            transition: opacity 0.3s ease;
        }

        &__picture {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100%;

            img {
                display: block;
                width: auto;
                height: 100%;
                max-width: 100%;
                max-height: 100%;
                object-fit: cover;
                object-position: center right;
            }
        }

        &__link {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;

            &:hover {
                & + .card__wrapper {
                    opacity: 0.5;
                }
            }
        }

        &__logo {
            position: absolute;
            top: 10px;
            right: 20px;
            width: 81px;
            height: 26px;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        &__description {
            padding-right: 35px;
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: $cl-black;
        }

        &--default {
            .new-button {
                margin-top: auto;
            }
        }

        &--default & {
            &__link {
                height: calc(100% - 55px);
            }
        }

        &--style4 {
            max-width: 896px;
            border-radius: 4px;
            overflow: hidden;

            .title {
                width: 50%;
                margin-bottom: 10px;
            }

            .badge {
                order: 1;
                margin-top: auto;
                margin-bottom: 0;
            }
        }

        &--style4 & {
            &__picture {
                img {
                    object-position: center center;
                }
            }
        }

        &--style1 {
            max-width: none;

            .new-button {
                position: absolute;
                top: 16px;
                right: 16px;
            }

            .title {
                margin-bottom: 5px;
            }

            @media (min-width: $tablet) {
                max-width: 316px;
            }
        }

        &--style1 & {
            &__picture {
                position: static;
                z-index: 0;
                min-height: 316px;
                border-radius: 4px;
                overflow: hidden;
                margin-bottom: 16px;
            }

            &__wrapper {
                padding: 0;
            }

            &__link {
                top: auto;
                bottom: 0;
                height: calc(100% - 50px);
            }
        }

        &--style2 {
            max-width: none;

            .new-button {
                position: absolute;
                bottom: calc(100% - 300px);
                left: 16px;
            }

            .title {
                margin-bottom: 8px;
            }

            @media (min-width: $tablet) {
                max-width: 316px;
            }
        }

        &--style2 & {
            &__picture {
                position: static;
                z-index: 0;
                min-height: 316px;
                border-radius: 4px;
                overflow: hidden;
                margin-bottom: 17px;
            }

            &__wrapper {
                padding: 0;
            }
        }

        &--style3 {
            max-width: none;
            background-color: $cl-secondary;
            border-radius: 4px;

            .title {
                margin-bottom: 12px;
            }

            @media (min-width: $tablet) {
                max-width: 316px;
            }
        }

        &--style3 & {
            &__wrapper {
                padding: 45px 16px;
            }

            &__description {
                margin-bottom: 32px;
            }

            &__link {
                height: calc(100% - 85px);
            }
        }

    }
</style>