

// prevent form reset
$(document).ready(function () {
    $('#myForm').on('reset', function (e) {
        if (!confirm('Are you sure you want to reset the form?')) {
            e.preventDefault();
        }
    });

    $('#one').on('change', function () {
        $(this).css('border', '3px solid red');
    })

    $('#myForm').on('input', '#two', function () {
        $(this).css({
            'outline': 'none',
            'border': '3px solid red'
    });
    })
    $('#three').on('focusout', function () {
        $(this).css('border', '3px solid red');
    })


});
