<template>
    <div>
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banner"></home-swiper>
        <home-recommend :recommend="recommend"></home-recommend>
    </div>
</template>

<script>
    import NavBar from "@/components/common/nav/NavBar";
    import {getHomeMultiData} from "@/network/home";
    import HomeSwiper from "@/views/home/child/HomeSwiper";
    import HomeRecommend from "@/views/home/child/HomeRecommend";

    export default {
        name: "Home",
        data() {
            return {
                result: null,
                banner: null,
                recommend: null,
            }
        },
        components: {
            NavBar,
            HomeSwiper,
            HomeRecommend
        },
        created() {
            getHomeMultiData().then(res => {
                console.log(res);
                this.result = res;
                this.banner = res.data.banner.list;
                this.recommend = res.data.recommend.list;
            })
        }
    }
</script>

<style scoped>
.home-nav {
    background-color: var(--color-tint);
    line-height: 44px;
    color: white;
}
</style>
