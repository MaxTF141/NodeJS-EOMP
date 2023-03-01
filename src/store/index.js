import { createStore } from 'vuex'
import axios from 'axios'

const DeadTales = 'https://deadmans-tales.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, values) {
      state.user = values
    },
      setProducts(state, values) {
        state.products = values
      },
      setProduct(state, values) {
        state.product = values
      },
      setSpinner(state, values) {
        state.showSpinner = values
      },
      setMessage(state, values) {
        state.message = values
      }
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${DeadTales}login`, payload);
      const {result, err} = await res.data;
      if (result) {
        context.commit('setUser', result);
      } else {
        context.commit('setMessage', err)
      }
    },
    async register(context, payload) {
      const res = await axios.post(`${DeadTales}register`, payload)
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      } else {
        context.commit('setMessage', err);
      }
    },
    async fetchUsers(context, payload) {
      const res = await axios.post(`${DeadTales}users`, payload);
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setUsers', msg);
      } else {
        context.commit('setUsers', err);
      }
    },
    async updateUser(context, payload) {
      const res = await axios.post(`${DeadTales}user`, payload);
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setUser', msg);
      } else {
        context.commit('setUser', err);
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${DeadTales}products`);
      console.log(await res.data)
      if(res.data !== undefined){
        context.commit('setProducts', res.data)
      } else {
        context.commit('setProducts', res.data)
      }
    }
  },
  modules: {
  }
})
