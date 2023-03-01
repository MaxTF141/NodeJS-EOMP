<template>
    <div class="admin-crud">
        <h2>Admin Page</h2>

        <table class="table">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Gender</th>
                <th scope="col">Cell.no</th>
                <th scope="col">Email.Add</th>
                <th scope="col">User.Img</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>Timothy</td>
                <td>Jennike</td>
                <td>Male</td>
                <td>0739853441</td>
                <td>egerge</td>
                <td></td>
              </tr>
            </tbody>
          </table>  
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>

.admin-crud {
    padding-top: 150px;
    font-family: 'Mynerve', cursive;
}

h2 {
    font-size: 80px;
    text-align: center;
}
    
</style>