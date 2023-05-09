$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#blt-cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').submit(function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src='${enderecoDaNovaImagem}'/>`).appendTo(novoItem);
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                    ver tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $('ul').append(novoItem);
        $(novoItem).fadeIn();
        $('#endereco-imagem').val('')
    });
});

