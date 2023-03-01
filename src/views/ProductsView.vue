<template>
    <body>
        <header>
            <h2>Products</h2>
        </header>
        <div class="navigators">
            <div class="filter">
                <label class="filter-select" for="filter">Filter by:</label>
                <select class="filter-select" id="filter" v-model="filterBy">
                    <option value="all">All</option>
                    <option value="Marvel">Marvel</option>
                    <option value="DC">DC</option>
                </select>
            </div>

            <div class="sort">
                <label class="filter-label" for="sort">Sort by:</label>
                <select class="filter-select" id="sort" v-model="sortBy">
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </select>
            </div>
             <div class="search">
                 <label class="filter-label" for="search">Search:</label>
                 <input class="filter-input" id="search" v-model="searchQuery" type="text" placeholder="Search">
             </div>
        </div>

        <div class="container">
             <div class="row">
                <div class="product-item g-5" v-for="product in products" :key="product.id" style="width: 18rem;">
                    <img :src="product.imgURL" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">{{product.prodName}}</h5>
                      <div class="card-text">{{product.category}}</div>
                      <div class="card-text">{{product.prodDescription}}</div>
                      <div class="card-text">R{{product.price}}</div>
                      <a href="#" class="btn btn-primary">View Item</a>
                    </div>
                  </div>    
            </div>
        </div>
       
    
    </body>
</template>
<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';

export default {
    setup() {
        const store = useStore();
        store.dispatch("fetchProducts");
        let products = computed(() => store.state.products)
        return{
            products,
        },
        { 
            sortBy: 'name',
            filterBy: 'all',
            searchQuery: '',
            categories: ['Marvel', 'DC']
        }
    },
    computed: {
        sortedAndFilteredProducts() {
            let sortedProducts = this.sortProducts();
            let filteredProducts = this.filteredProducts(sortedProducts);
            let searchedProducts = this.searchProducts(filteredProducts);
            return searchedProducts;
        }
    },
    methods: {
        sortProducts() {
            let sortKey = this.sortBy;
            return this.products.sort((a, b) => {
                if (a[sortKey] < b[sortKey]) return -1;
                if (a[sortKey] > b[sortKey]) return 1;
                return 0;
            });
        },
        filteredProducts(products) {
            if (this.filterBy === 'all') {
                return products;
            } else {
                return products.filter(product => product.category === this.filterBy);
            }
        },
        searchProducts(products) {
            if (this.searchQuery === '') {
                return products;
            } else {
                return products.filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
            }
        }
    }
    
}
</script>

<style scoped>

body {
    padding-top: 150px;
}

header h2{
    text-align: center;
    font-size: 100px;
    font-family: 'Mynerve', cursive;
}

.navigators {
    display: flex;
    justify-content: space-evenly;
}

#filter{
    border-radius: 25px;
    border-color: white;
    background-color: black;
    color: white;
    font-family: 'Mynerve', cursive;
    height: 50px;
    width: 100px;
}

.row {
    margin: auto;
    display: flex;
    justify-content: space-between;

}

.product-item{
    text-align: center;
    font-family: 'Mynerve', cursive;
    font-weight: bolder;
    transition: all 0.3s ease-in-out;
}

.product-item:hover {
    transform: scale(1.1);

}

#sort {
    border-radius: 25px;
    border-color: white;
    background-color: black;
    color: white;
    font-family: 'Mynerve', cursive;
    height: 50px;
    width: 100px;
}

#searchbar {
    padding: 15px;
    border-radius: 10px;
}

input[type=text]:focus {
    width: 30%;
    -webkit-transition: width 0.15s ease-in-out;
    transition: width 0.15s ease-in-out;
}

input[type=text]:focus {
    width: 50%;
}
.navigators {
    align-items: center;
    justify-content: space-between;
    margin: auto;
}
    
</style>