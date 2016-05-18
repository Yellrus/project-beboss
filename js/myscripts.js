// Функция срабатывает по событию .blur
    $('#phoneNumber').blur(function(){
        // Убираем все классы с поля «Ваш номер телефона»
        $('#phoneNumber').removeClass();
        // Берем значение поля «Ваш номер телефона»
        var phoneV = $('#phoneNumber').val();
        // Определяем длину значения поля
        var phoneLngth = phoneV.length;

        // Проверяем чтобы в поле были только цифры
        if( /[^0-9]/.test(phoneV) ) {
            $('#phoneNumber').addClass('notValid');
            $('#spnPhoneStatus').css('color', 'red');
            $(this).next().text('Укажите правильный телефон');
        } else if (phoneLngth <= 5) {
        // Проверяем чтобы длина номера телефона была не меньше 6 символов
            $('#phoneNumber').addClass('notValid');
            $('#spnPhoneStatus').css('color', 'red');
            $(this).next().text('Укажите правильный телефон');
        } 
    });



// тут у нас Мини-автоподбор слов

    $(function() {
        var availableTags = [
          "Проворный ткачик",
          "ПРОФИ-СПОРТ",
          "Проспект",
          "Просто Чудо",
          "Прокат Пони+",
        ];
        $( "#franchiseName" ).autocomplete({
          source: availableTags
        });
      });
