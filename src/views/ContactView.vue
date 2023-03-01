<template>
<section id="contact">
    <h2 class="display-3 text-center">Contact</h2>
    <p class="text-center">If you have any questions or want to contact us, feel free to use the form below</p>
    
    <div class="container-fluid pb-5">
         <div class="row d-flex flex-column flex-md-row">
             <div class="col-md-7 mx-auto">
                <div class="card mt-2 mx-auto p-4 bg-light">
                    <div class="card-body bg-light">
                        <div class="container-fluid">
                            <form action="https://formspree.io/f/xleknjel" method="post" id="contact-form" role="form">
                                <div class="controls">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="form_name">Firstname</label>
                                                <input id="form_name" type="text"  name="name" class="form-control"
                                                    placeholder="Please enter your firstname" required="required"
                                                    data-error="Firstname is required.">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="form_lastname">Lastname</label>
                                                    <input id="form_lastname" type="text" name="surname"
                                                        class="form-control" placeholder="Please enter your lastname"
                                                        required="required" data-error="Lastname is required.">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="form_email">Email</label>
                                                    <input id="form_email" type="email" name="email" class="form-control"
                                                        placeholder="Please enter your email" required="required"
                                                        data-error="Valid email is required.">
                                                </div>
                                            </div>
    
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group align-items-center">
                                                <label for="form_message">Message</label>
                                                <textarea id="form_message" name="message" class="form-control"
                                                placeholder="Write your message here." rows="4" required="required"
                                                data-error="Please, leave us a message."></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mt-4">
                                            <input type="submit" class="btn btn-primary btn-send pt-2 btn-block"
                                            value="Send Message">
                                        </div>
                                    </div>
                                </form>
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
    
}
</script>



<style scoped>

#contact {
    padding-top: 150px;
    font-family: 'Mynerve', cursive;
    background-image: url(https://i.postimg.cc/hj8RXrTp/dccomics-1677595354028-3448.jpg);
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;  
}

.container-fluid {
    opacity: 0.9;
}

h2 {
    color: white;
}

p {
    font-size: 30px;
    color: white;
}

label {
    font-weight: bolder;
}

#form_message {
    border-color: black;
    font-weight: bolder;
}


input {
    border-color: black;
    font-weight: bolder;
}

.btn {
    margin-left: 300px;
}
</style>