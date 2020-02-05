<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banner"></home-swiper>
        <home-recommend :recommend="recommend"></home-recommend>
        <home-future></home-future>
        <tab-bar-control :titles="['流行', '新款', '精选']" class="home-tab-control" @valueChanged="tabControlValueChanged"></tab-bar-control>
        <goods-collection-view :clist="currentGoods"></goods-collection-view>
    </div>
</template>

<script>
    import NavBar from "@/components/common/nav/NavBar";
    import {getHomeMultiData, getHomeGoodsData} from "@/network/home";
    import HomeSwiper from "@/views/home/child/HomeSwiper";
    import HomeRecommend from "@/views/home/child/HomeRecommend";
    import HomeFuture from "@/views/home/child/HomeFuture";
    import TabBarControl from "@/components/content/TabBarControl";
    import GoodsCollectionView from "@/components/content/GoodsCollectionView";

    export default {
        name: "Home",
        data() {
            return {
                currentType: 'pop',
                result: null,
                banner: null,
                recommend: null,
                goods: {
                    pop: {
                        page: 0,
                        list: []
                    },
                    new: {
                        page: 0,
                        list: []
                    },
                    sell: {
                        page: 0,
                        list: []
                    },
                }
            }
        },
        computed: {
            currentGoods() {
               return  this.goods[this.currentType].list;
            }
        },
        components: {
            TabBarControl,
            NavBar,
            HomeSwiper,
            HomeRecommend,
            HomeFuture,
            GoodsCollectionView
        },
        created() {
            this.initData();
        },
        methods: {
            initData() {
                getHomeMultiData().then(res => {
                    console.log(res);
                    this.result = res;
                    this.banner = res.data.banner.list;
                    this.recommend = res.data.recommend.list;
                });
                this.getGoodsDataByType('pop');
                this.getGoodsDataByType('new');
                this.getGoodsDataByType('sell');
            },
            getGoodsDataByType(type) {
                const page = this.goods[type].page + 1;
                getHomeGoodsData(type, page).then(res => {
                    console.log(res);
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1;
                });
            },
            tabControlValueChanged(index){
                console.log(index);
                switch (index) {
                    case 0:
                        this.currentType = 'pop';
                        break;
                    case 1:
                        this.currentType = 'new';
                        break;
                    case 2:
                        this.currentType = 'sell';
                        break;

                }
            }
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        line-height: 44px;
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }

    #home {
        padding-top: 44px;
        padding-bottom: 44px;
    }

    .home-tab-control {
        position: sticky;
        top: 44px;
        background-color: #fff;
        z-index: 9;
    }
</style>
