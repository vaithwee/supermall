<template>
    <div class="home-recommend">
        <div class="home-recommend-item" v-for="item in recommend">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
            recommend : {
                type: Array,
                default : [],
            }
        }
    }
</script>

<style scoped>
    .home-recommend {
        display: flex;
        text-align: center;
        padding: 10px 0 20px 0;
        font-size: 14px;
    }

    .home-recommend-item {
        flex: 1;
    }

    .home-recommend-item img {
        width: 70px;
        height: 70px;
        margin-bottom: 5px;
    }
</style>
