$(document).ready(function(){

    $(".form-yellow").validate({

       rules:{

            phoneNumber:{
                required: true,
                number: true,
                minlength: 10,
            },

       },

       messages:{

            phoneNumber:{
                required: "Это поле обязательно для заполнения",
                number: "Укажите правильный номер",
                minlength: "Укажите правильный номер",
            },



       }

    });

});
