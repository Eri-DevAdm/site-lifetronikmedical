document.addEventListener('DOMContentLoaded', function () {
    const filtro = document.getElementById('filtro-marca');
    const grid = document.querySelector('.produtos-grid');
    const produtos = Array.from(grid.children);

    // Mapeamento dos produtos por marca, na ordem do HTML
    const produtosPorMarca = {
        biosensors: [
            "BioFreedom Ultra",
            "BioMatrix Alpha",
            "Powerline",
            "Rise NC"
        ],
        cardinal: [
            "Compressão | Smart Compression™",
            "Compressão | Meias Antiembólicas T.E.D.™",
            "Cuidado avançado de feridas | Coberturas de Alginato de Cálcio Kendall™",
            "Cuidado avançado de feridas | Coberturas antimicrobianos AMD | Esponjas AMD Excilon™",
            "Cuidado avançado de feridas | Coberturas antimicrobianos AMD | Coberturas Telfa™ AMD",
            "Cuidado avançado de feridas | Coberturas antimicrobianos AMD | Rolos de Bandagem de Gaze Antimicrobiana Kerlix™ AMD",
            "Cuidado avançado de feridas | Coberturas de espuma antimicrobiana AMD | Espuma AMD em Disco Kendall™",
            "Cuidado avançado de feridas | Coberturas de espuma antimicrobiana AMD | Coberturas de Espuma Antimicrobiana AMD Kendall™",
            "Cuidado avançado de feridas | Coberturas de espuma antimicrobiana AMD | Coberturas de Borda de Espuma Antimicrobiana AMD Kendall™",
            "Cuidado avançado de feridas | Hidrogéis | Coberturas para Feridas de Hidrogel Amorfo Kendall™",
            "Cuidado avançado de feridas | Hidrogéis | Gaze Impregnada com Hidrogel Kendall™",
            "Cuidado avançado de feridas | Hidrogéis | Coberturas para Feridas de Hidrogel Kendall™",
            "Cuidado avançado de feridas | Hidrogéis | Protetores em hidrogel Kendall™ para auxílio da amamentação",
            "Cuidado avançado de feridas | Filme transparente Kendall™",
            "Alimentação enteral | Kangaroo™ ePump e equipos de alimentação enteral",
            "Alimentação enteral | Sondas de alimentação nasogástrica para adultos",
            "Alimentação enteral | Produtos de acesso enteral",
            "Alimentação enteral | Sondas de alimentação Kangaroo™ para pacientes pediátricos e neonatos",
            "Alimentação enteral | Sistema de conexão ENFit®",
            "Tratamento tradicional de feridas | Rolos de gaze antimicrobiana Kerlix™ AMD",
            "Tratamento tradicional de feridas | Coberturas não Aderentes Curity™",
            "Sistema de drenagem torácica Aqua-Seal™",
            "PICC Argyle™ | Cateter central de inserção periférica para neonatos",
            "Monoject™ Seringas orais/enterais e acessórios"
        ],
        healthline: [
            "Synergy CT PICC",
            "Synergy PICC Bantam 1.9Fr",
            "Synergy-XS CT PICC"
        ]
    };

    filtro.addEventListener('change', function () {
        const valor = filtro.value;
        produtos.forEach(produto => {
            const titulo = produto.querySelector('h3')?.textContent?.trim();
            if (
                valor === 'todos' ||
                (produtosPorMarca[valor] && produtosPorMarca[valor].some(nome => titulo && titulo.startsWith(nome)))
            ) {
                produto.style.display = '';
            } else {
                produto.style.display = 'none';
            }
        });
    });

    // Exibe todos ao carregar
    filtro.value = 'todos';
    produtos.forEach(produto => produto.style.display = '');
});
