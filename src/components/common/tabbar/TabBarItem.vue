<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :class="{active: isActive}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path : {
                type: String
            },
        },
        data() {
            return {
                // isActive: true,
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1;
            }
        },
        methods: {
            itemClick() {
                console.log("item click");
                console.log(this.path);
                this.$router.replace(this.path);
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        font-size: 14px;
        height: 49px;
    }
    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 2px;
    }
    .active {
        color: red;
    }
</style>
