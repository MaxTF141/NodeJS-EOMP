<template>
    <body>
        <header>
            <h2>Products</h2>
        </header>
        <div class="navigators">
            <div class="row">

            <div class="filter col-4">
                <button id="filter" @click="sortCategory">Category</button>
            </div>

            <div class="sort col-4">
                <button id="sort" @click="sortPrice"><i class="bi bi-arrow-down"></i>Price<i class="bi bi-arrow-up"></i></button>
            </div>

             <div class="search col-4">
                 <input class="filter-input" id="search" v-model="searching" type="text" placeholder="Search">
             </div>
            </div>
        </div>

        <div class="container">
            <SpinnerC v-if="isLoading"/>
            <div v-else>
             <div class="row"  v-if="filtering.length">
                    <div class="product-item g-5" v-for="product in filtering" :key="product.id" style="width: 18rem;">
                        <img :src="product.imgURL" class="card-img-top" >
                        <div class="card-body">
                          <h5 class="card-title">{{product.prodName}}</h5>
                          <div class="card-text">{{product.category}}</div>
                          <!-- <div class="card-text">{{product.prodDescription}}</div> -->
                          <div class="card-text">R{{product.price}}</div>
                          <a href="../views/SingleProductView.vue" class="btn" >View Item</a>
                        </div>
                      </div>
                    </div> 
                      <div id="waldo" v-else>Can't find that one buddy</div>   
            </div>
        </div>
       
    
    </body>
</template>
<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import SpinnerC from '../components/SpinnerC.vue';


export default {
    components: {
        SpinnerC
    },
    data(){
        return {
            isLoading: true,
            searching: ''
        }
    },
    created(){
        setTimeout(()=> {
            this.isLoading = false;
        },2000);
    },
    setup() {
        const store = useStore();
        store.dispatch("fetchProducts");
        let products = computed(() => this.$store.state.products)
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
        products() {
            return this.$store.state.products;      
        },
        filtering() {
            if(this.searching.trim().length > 0){
                return this.products.filter((name)=> name.prodName.toLowerCase().includes(this.searching.trim()))
            }
            return this.products
        }
},
    methods: {
        sortPrice(){
            this.$store.commit("sortProductsPrice")
        },
}
}




</script>

<style scoped>

body {
    padding-top: 150px;
    background-image: url(https://i.postimg.cc/FKHsdmpR/39488-Gotham-City-Night-Gotham-City-HD-Wallpaper.png);
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    color: white; 
}

header h2{
    text-align: center;
    font-size: 100px;
    font-family: 'Mynerve', cursive;
    color: white;
}

img {
    height: 400px
}

#waldo {
    padding-top: 150px;
    text-align: center;
    font-size: 100px;
    font-family: 'Mynerve', cursive;
}

.navigators {
    display: flex;
    justify-content: space-evenly;
}

.btn {
    border-color: white;
    background-color: crimson;
    color: white;
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


#search {
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

@media screen and (max-width: 720px) {

    header {
        width: 100%;
    }

    .container {
        width: 100%;
        justify-content: center;
        overflow: hidden;
    }
    .filter {
        width: 100%;
        overflow: hidden;
    }

    .sort {
        width: 100%;
        overflow: hidden;
    }

    .search{
        width: 100%;
        overflow: hidden;
    }

}    


</style>