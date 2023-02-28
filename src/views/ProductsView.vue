<template>
    <body>
        <header>
            <h2>Products</h2>
        </header>
        <div class="navigators">
            <button id="filter">Filter</button>
            <input id="searchbar" type="text" name="search" placeholder="Search...">
            <button id="sort">Sort</button>
        </div>
        <div class="products">

        </div>
    
    </body>
</template>
<script>
export default {
    
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
    justify-content: center;
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
}
    
</style>