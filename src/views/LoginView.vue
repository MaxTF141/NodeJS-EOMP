<template>
<body>        
    <div class="login">
        <div class="container">
            <div class="header">
                <h1>LOGIN</h1>
            </div>
            <div class="main">
                <form action="">
                    <i class="bi bi-person-fill"></i>
                    <input type="text" placeholder="username" name=""><br>
                    <i class="bi bi-unlock-fill"></i>
                    <input type="password" placeholder="password"  name=""><br>
                    <button>login</button>
                </form>
            </div>
            <div class="footer">
                <a href="">Forgot Your Password?</a>
                <a href="/register">Don't Have An Account? Register</a>
            </div>
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
    background-image: url(https://i.postimg.cc/1X41k4K0/Deadpool-Black-Background-Katana-Marvel-Comics-HD-Wallpaper-1920x1200.jpg);
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;  
}


.container {
    margin: auto;
    width: 415px;
    box-shadow: 0 0 10px black;
    background-color: white;
    border-color: white;
    border-radius: 25px;
    margin-bottom: 50px;
    --bs-gutter-x: 0rem;
    margin-top: 125px;  
}

.header {
    height: 100px;
    background-color: crimson;
    border-radius: 25px 25px 50px 0; 
    text-align: center; 
}

.header h1 {
    color: black;
    line-height: 140px;
    text-align: center;
    font-size: 75px;
    letter-spacing: 2px;
    font-family: 'Mynerve', cursive;
}

.main {
    margin-top: 100px;
    text-align: center;
}

.main input {
    height: 48px;
    width: 285px;
    margin-bottom: 55px;
    margin-left: -35px;
    padding-left: 45px;
    border: none;
    border-radius: 25px;
    outline: none;
    font-size: 17px;
    color: white;
    letter-spacing: 1px;
    background-color: black;
    transition: .3s;
}

.main input:hover {
    width: 300px;
}

.main button {
    width: 125px;
    height: 45px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    color: white;
    border: none;
    outline: none;
    border-radius: 25px;
    background-color: black;
    transition: .2s;
}

.main button:hover{
    width: 135px;
}

i {
    position: relative;
    margin-left: 32px;
    color: white;
}


.footer {
    margin-top: 50px;
    height: 90px;
    background-color: crimson;
    border-radius: 50px 0px 25px 25px ;
}

.footer a{
    display: block;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    color: white;
}

footer a:hover {
    color: red;
    text-shadow: 0 0 2px black;

}
</style>