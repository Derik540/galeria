$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('blt-cancelar').click(function(){
        $('form').slideUp();
    })

    $('submit').on('submit', function (e) {
        e.preventDefault()
    })
})

