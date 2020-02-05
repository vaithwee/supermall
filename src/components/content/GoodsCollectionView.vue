<template>
    <div class="goods-collection-view">
        <goods-collection-view-item v-for="goods in clist" :info="goods" :key="goods.show.img">

        </goods-collection-view-item>
    </div>
</template>

<script>
    import GoodsCollectionViewItem from "@/components/content/GoodsCollectionViewItem";
    export default {
        name: "GoodsCollectionView",
        props: {
            clist: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        components: {
            GoodsCollectionViewItem
        }
    }
</script>

<style scoped>
.goods-collection-view {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 2px;
}
</style>
