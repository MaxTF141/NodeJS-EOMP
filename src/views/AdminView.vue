<template>
    <div class="admin-crud">
        <!-- <h2>Admin Page</h2> -->
      <div class="container">
        <h3>Products</h3>
        <SpinnerC v-if="isLoading" />
        <div v-else>
        <table class="table mx-5">
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product">
              <tr>
                <td>{{product.id}}</td>
                <td>{{product.prodName}}</td>
                <td>{{product.category}}</td>
                <td>{{product.price}}</td>
                <td>{{product.prodQuantity}}</td>
                <td><button id="delete">Delete</button></td>
                <td><button id="update" >Update</button></td>
              </tr>
            </tbody>
          </table>
          </div>
          <br>
        </div> 
    </div>
</template>
<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import SpinnerC from '../components/SpinnerC.vue'

export default {
  components: {
    SpinnerC
  },
  data(){
    return {
      isLoading: true
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
        // store.dispatch("fetchUsers");
//         let users = computed(() => store.state.users)
        let products = computed(() => store.state.products)
        return{
            products,
            // users
        }   
},
computed: {
        product() {
            return this.$store.state.products
        },
        // user() {
          // return this.$store.state.users
        // }
},
methods: {

}
}
</script>

<style scoped>

.admin-crud {
    padding-top: 150px;
    font-family: 'Mynerve', cursive;
    margin: auto;
    background-image: url(https://i.postimg.cc/fRVC6YCC/102391-DC-Comics-Batman-comic-art-comics-mask-gun-dark-red.jpg);
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    color: white;
}

table {
  border-color: white;
  color: white;
  font-size: large;
}

h2 {
    font-size: 80px;
    text-align: center;
}

h3 {
  font-size: 50px;
  text-align: center;
  text-decoration: underline;
}

#delete {
  background-color: crimson;
  border-color: white;
  color: white;
}

#update {
  background-color: black;
  border-color: white;
  color: white;
}

@media screen and (max-width: 720px) {
        .table{
          width: 100%;
          overflow: hidden;
        }
}
    
</style>