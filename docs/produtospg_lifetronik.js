document.addEventListener('DOMContentLoaded', function () {
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const produtos = document.querySelectorAll('.produto-card');

    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filtroBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const marca = btn.getAttribute('data-marca');
            produtos.forEach(produto => {
                const nome = produto.getAttribute('data-nome') || '';
                if (marca === 'todos') {
                    produto.style.display = '';
                } else if (
                    (marca === 'biosensors' && (
                        nome.startsWith('BioFreedom Ultra') ||
                        nome.startsWith('BioMatrix Alpha') ||
                        nome.startsWith('Powerline') ||
                        nome.startsWith('Rise NC')
                    )) ||
                    (marca === 'cardinal' && (
                        nome.startsWith('Compressão') ||
                        nome.startsWith('Cuidado avançado de feridas') ||
                        nome.startsWith('Tratamento tradicional de feridas') ||
                        nome.startsWith('Sistema de drenagem torácica') ||
                        nome.startsWith('Monoject') ||
                        nome.startsWith('Alimentação enteral')
                    )) ||
                    (marca === 'healthline' && (
                        nome.startsWith('Synergy')
                    ))
                ) {
                    produto.style.display = '';
                } else {
                    produto.style.display = 'none';
                }
            });
        });
    });
});
