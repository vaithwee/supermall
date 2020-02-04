<template>
    <div>
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <h2>home</h2>
    </div>
</template>

<script>
    import NavBar from "@/components/common/nav/NavBar";
    export default {
        name: "Home",
        components: {
            NavBar
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
