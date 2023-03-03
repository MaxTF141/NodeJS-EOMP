<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-12 col-xl-4">
  
          <div class="card" style="border-radius: 15px;">
            <div class="card-body text-center">
              <div class="mt-3 mb-4">
                <img src=""
                  class="rounded-circle img-fluid" style="width: 100px;" />
              </div>
              <h4 class="mb-2">name + surname</h4>
              <p class="text-muted mb-4">gender <span class="mx-2"></span> </p>
              <div class="d-flex justify-content-between text-center mt-5 mb-2">
                <div>
                  <p class="text-muted mb-0">email.addy<span class="mx-2"></span></p>
                </div>
                <div class="px-3">
                  <p class="text-muted mb-0">cell.no <span class="mx-2"></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  // setup() {
  //       const store = useStore();
  //       store.dispatch("fetchUsers");
  //       let users = computed(() => this.$store.state.users)
  //       return{
  //           users,
  //       },
  //     }
  //   computed: {
  //     user() {
  //           return this.$store.state.users;      
  //       }
  //   },
}
</script>
<style scoped>

section {
  background-image: url(https://i.postimg.cc/MHwdYWTk/spiderman-into-the-spider-verse-miles-morales-16-4k.jpg);
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden; 
}



.card {
  border-color: black;
}
  
</style>