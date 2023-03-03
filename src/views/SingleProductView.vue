<template>
    <div>
        <div class="single-product" v-if="product">
            <h1>{{ product.prodName }}</h1>
            <h2>{{ product.price }}</h2>
            <p>{{ product.prodDescription }}</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        product() {
            console.log(this.$store.state.product);
            return this.$store.state.product || {};
        }
    },
    mounted() {
        const id = this.$route.params.id
        if(!this.product) {
            this.$store.dispatch('fetchProduct',id);
        }
    }
}
</script>

<style>
</style>