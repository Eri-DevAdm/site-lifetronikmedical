document.addEventListener('DOMContentLoaded', function () {
    const filtro = document.getElementById('filtro-marca');
    const secoes = document.querySelectorAll('.produtos-marca');

    filtro.addEventListener('change', function () {
        const valor = filtro.value;
        secoes.forEach(secao => {
            if (valor === 'todos' || secao.dataset.marca === valor) {
                secao.style.display = '';
            } else {
                secao.style.display = 'none';
            }
        });
    });
});