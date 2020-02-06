<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
        <div v-show="isShowBackToTop" class="back-to-top" @click="backToTopClick">
            <img src="~assets/img/common/top.png" alt="">
        </div>
    </div>
</template>

<script>
    import BetterScroll from 'better-scroll';
    export default {
        name: "Scroll",
        props : {
            isShowBackToTop: {
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            this.scroll = new BetterScroll(this.$refs.wrapper, {
                click: true,
            });

        },
        methods: {
            backToTopClick() {
                this.scroll.scrollTo(0, 0, 500);
            }
        }
    }
</script>

<style scoped>
.back-to-top {
    display: flex;
    position: absolute;
    bottom: 20px;
    right: 10px;
    z-index: 999;
}
    .back-to-top img {
        width: 50px;
    }
</style>
