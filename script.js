$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const nomeTarefaNova = $("#novaTarefa").val();
        const novaTarefa = $('<li style="display: none;"></li>');

        $(`<p>${nomeTarefaNova}</p>`).appendTo(novaTarefa);
        $(`   
            <div class="options" style="display: none;">
                <button type="button" class="completebtn">Feito</button>
                <button type="button" class="dltbtn">Deletar</button>
            </div>
        `).appendTo(novaTarefa);

        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(300);
        $('#novaTarefa').val('');

        novaTarefa.click(function () {
            $(this).find('.options').fadeToggle(100);
        });


        novaTarefa.find('.completebtn').click(function () {
            $(this).closest('li').find('p').toggleClass('complete');
        });

        novaTarefa.find('.dltbtn').click(function () {
            $(this).closest('li').fadeOut(300, function () {
                $(this).remove();
            });
        });
    });
});