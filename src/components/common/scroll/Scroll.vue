<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
        <div v-show="isShowBackToTopButton" class="back-to-top" @click="backToTopClick">
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
                scroll: null,
                isScrollToShowBackTopPosition : false
            }
        },
        mounted() {
            this.scroll = new BetterScroll(this.$refs.wrapper, {
                click: true,
                probeType: 3,
                pullUpLoad: true,
            });

            this.scroll.on("scroll", (position) => {
                // console.log(position);
                this.isScrollToShowBackTopPosition = -position.y > 1000;
            });

            this.scroll.on('pullingUp', () => {
                console.log("pulling up");
               this.$emit('pullingUp');
            });

        },
        methods: {
            backToTopClick() {
                this.scroll.scrollTo(0, 0, 500);
            },
            finishPullingUp() {
                console.log("finish pull up");
                this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
            },
            refresh() {
                this.scroll && this.scroll.refresh();
            }
        },
        computed: {
            isShowBackToTopButton() {
                return this.isShowBackToTop && this.isScrollToShowBackTopPosition;
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
