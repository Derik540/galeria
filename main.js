$(document).ready(function () {
    console.log((document.querySelector('header button')))
    console.log($('header button'))

    $('header button').click(function () {
        alert('Expandir formulario')
    })
    $('submit').on('submit', function (e) {
        console.log('submit')
        e.preventDefault()
    })
})

