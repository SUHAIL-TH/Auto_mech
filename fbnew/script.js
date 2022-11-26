$(document).ready(function(){
    $('#signuup').validate({
    rules:{
        ffname:{
            required:true,
            minlenght:4
        },
       
    }
    })
})