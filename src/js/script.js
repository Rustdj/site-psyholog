
// Отправка mail



$('form').submit(function() {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'smart.php',
        data: $(this).serialize()
    }).done(function() {
        $(this).find('input').val('');



        $('form').trigger('reset');
    });
    return false;
});