<template>
  <body>
    <header>
      <h1>Dead-Man's-Tales</h1>
    </header>
    <div class="row">
      <div class="col-6">
        <p>Welcome to Dead-Man's-Tales, the place to find all of the comic books that you need to read and see before you expire!</p><br>
        <p>We always deliver quality and affordable comics that'll leave you wanting more!!</p><br>
        <p>Checkout what we currently have available</p>
        <a href="/products"><button id="breathing-button">Products</button></a>
      </div>
    </div>
  </body>
   
</template>
<script>
export default {
  
}
</script>
<style scoped>

body {
  background-image: url(https://i.postimg.cc/dtKCNY6f/21x-4n4qwwz8m-Comics-Deadpool-Knife-Weapon-Marvel-Comics-Wade-Wilson-Gun.jpg);
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}



header h1 {
  color: white;
  text-align: center;
  font-size: 100px;
  font-family: 'Mynerve', cursive;
  padding-top: 150px;
  text-shadow: 20px 20px 0 black;
}

.col-6 {
  margin-right: 50px;
  text-align: center;
  color: white;
  font-size: x-large;
  font-family: 'Mynerve', cursive;
}

#breathing-button {
  width: 180px;
  padding: 12px;
  margin: 50px auto;
  border: 1px solid white;
  -webkit-animation: breathing 5s ease-out infinite normal;
  animation: breathing 5s ease-out infinite normal;
  font-family: 'Mynerve', cursive;
  font-size: 16px;
  background: black;
  color: white;
  -webkit-font-smoothing: antialiased;
  border-radius: 25px;
  text-align: center;    
  }


@-webkit-keyframes breathing {
0% {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}

25% {
  -webkit-transform: scale(1);
  transform: scale(1);
}

60% {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}

100% {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
}

@keyframes breathing {
0% {
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}

25% {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

60% {
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}

100% {
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}
}

  
</style>