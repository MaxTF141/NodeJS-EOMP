<template>
    <body>    
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>
                <div class="row">
                    <div class="col-6">
                        <div class="form-outline mb-4">
                            <input type="text" id="form3Example1cg" required class="form-control form-control-lg" />
                            <label class="form-label" for="form3Example1cg">Firstname</label>
                          </div>
                        </div>
                        <div class="col-6">
                            <div class="form-outline mb-4">
                                <input type="text" id="form3Example3cg" required class="form-control form-control-lg" />
                                <label class="form-label" for="form3Example3cg">Surname</label>
                              </div>  
                        </div>
                </div>


                <div class="form-outline mb-4">
                    <input type="numbers" id="form3Example3cg" required class="form-control form-control-lg" />
                    <i class="bi bi-telephone"></i>
                    <label class="form-label" for="form3Example3cg">Cellphone no.</label>
                  </div>

                  <div class="col-md-6 mb-4">

                    <h6 class="mb-2 pb-1">Gender: </h6>
  
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                        value="option1" checked />
                      <label class="form-check-label" for="femaleGender">Female</label>
                    </div>
  
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                        value="option2" />
                      <label class="form-check-label" for="maleGender">Male</label>
                    </div>   
                  </div> 
                  
                  <div class="form-check form-check-inline">
                    <input type="text" required class="form-control form-control-lg" />
                    <i class="bi bi-person-video"> </i>
                    <label class="form-label" for="form3Example3cg">User Profile Picture</label>
                  </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" required class="form-control form-control-lg" />
                  <i class="bi bi-envelope"></i>
                  <label class="form-label" for="form3Example3cg">Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" required class="form-control form-control-lg" />
                  <i class="bi bi-unlock"></i>
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>
                <div class="form-control-wrapper">  
                  <label class="form-control bg-gradient" v-show="userMsg">{{userMsg}}</label>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>
            </form>
            </div>
        </div>
        </div>
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
    background-image: url(https://i.postimg.cc/NMRKys2w/94669.jpg);
    background-size: contain;
    image-rendering: -webkit-optimize-contrast;
    
}
.mask {
    padding-top: 150px;
    padding-bottom: 50px;
    font-family: 'Mynerve', cursive;
}

label {
    font-size: large;
}

input {
  border-color: black;
}


h2 {
    text-decoration: underline;
    font-size: 50px;
}
.btn {
    border-radius: 25px;
    border-color: black;
    font-family: 'Mynerve', cursive;
    color: white;
}

button {
    color: white;
}

.col-md {
    display: flex;
    justify-content: center;
}

    
</style>