$(document).ready(function(){
    $("#signup").validate({
        rules:{
            fname:{
                required:true 
            }
            
        },
        messages:{
            fname:{
                required:"enter first name",
                minlength:"enter atleast 4 characters"
            }
        }
    })
})
