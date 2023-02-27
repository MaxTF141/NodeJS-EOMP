<template>
<body>        
    <div>
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
        </div>  
    </div>
</body>

</template>
<script>
export default {
    
}
</script>
<style scoped>

.container {
    margin: auto;
    margin-top: 35px;
    width: 415px;
    box-shadow: 0 0 10px black;
    background-color: white;
    border-radius: 25px;
}

.header {
    height: 200px;
    border-radius: 25px 25px 50px 0;  
}

.header h1 {
    color: black;
    line-height: 200px;
    text-align: center;
    font-size: 37px;
    letter-spacing: 2px;
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

.main input :hover {
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

.main button :hover{
    width: 135px;
}

i {
    position: relative;
    margin-left: 32px;
    color: white;
}
</style>