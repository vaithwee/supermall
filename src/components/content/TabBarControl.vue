<template>
    <div class="tab-bar-control">
        <div @click="itemClick(index)" class="tab-bar-control-item" v-for="(title, index) in titles">
            <span :class="{active: currentIndex === index}">{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarControl",
        data() {
            return {
                currentIndex : 0
            }
        },
        props: {
            titles: {
                type: Array,
                default: []
            }
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
                this.$emit('valueChanged', index);
            }
        }
    }
</script>

<style scoped>
.tab-bar-control {
    display: flex;
    height: 32px;
}
    .tab-bar-control-item {
        flex: 1;
        text-align: center;
        font-size: 15px;
        height: 32px;
        line-height: 32px;
    }
.tab-bar-control-item span {
    width: 33%;
    height: 2px;
    padding: 5px 10px;

}
    .active {
        border-bottom: 2px solid var(--color-tint);
        color: var(--color-high-text);
    }
</style>
