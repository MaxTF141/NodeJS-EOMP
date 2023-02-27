<template>
    <nav class="navbar navbar-expand-lg navbar-dark p-3" id="headerNav">
        <div class="container-fluid">
            <img src="https://i.postimg.cc/k5pmHKzs/pnghut-spider-man-venom-drawing-comics-sketch-amazing-spiderman-speed.png" height="80" />
          <!-- <a class="navbar-brand d-block d-lg-none" href="#">
            <img src="https://i.postimg.cc/k5pmHKzs/pnghut-spider-man-venom-drawing-comics-sketch-amazing-spiderman-speed.png" height="80" />
          </a> -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      
          <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                <!-- <li class="nav-item d-none d-lg-block">
                  <a class="nav-link mx-2" href="#">
                    <img src="https://i.postimg.cc/k5pmHKzs/pnghut-spider-man-venom-drawing-comics-sketch-amazing-spiderman-speed.png" height="80" />
                  </a>
                </li> -->
                <div class="d-flex">
                    <li class="nav-item nav-link mx-2">
                      <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item nav-link mx-2">
                      <router-link to="/products">Products</router-link>
                    </li>
                    <li class="nav-item nav-link mx-2">
                      <router-link to="/contact">Contact</router-link>
                    </li>
                </div>
                <div class="d-flex">
                    <li class="nav-item nav-link mx-2">
                      <router-link to="/login">Login</router-link>
                    </li>
                    <li class="nav-item nav-link mx-2">
                      <router-link to="/register">Register</router-link>
                    </li>
                    <li class="nav-item nav-link mx2">
                        <router-link to="/userprofile"><i class="bi bi-person-circle"></i></router-link>
                    </li>
                </div>
          </div>
        </div>
      </nav>
</template>
<script>
export default {
    
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Mynerve&display=swap');
.navbar {
    background-color: white;
    color: white;
    outline: black;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    font-family: 'Mynerve', cursive;
}
a {
    color: black;
    text-decoration: none;
    font-size: larger;
}

@media screen and (min-width:992px){
    .nav-item {
    line-height:80px;
    }
  }
</style>