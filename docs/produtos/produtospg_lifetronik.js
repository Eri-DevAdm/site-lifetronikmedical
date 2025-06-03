function mostrarMaisProdutos(button) {
    const todos = document.querySelectorAll('.produto-card');
    const mostrando = button.getAttribute('data-mostrando') === 'sim';

    if (!mostrando) {
        todos.forEach(card => card.classList.remove('hidden'));
        button.textContent = 'Ver Menos';
        button.setAttribute('data-mostrando', 'sim');
    } else {
        todos.forEach((card, i) => {
            if (i > 11) {
                card.classList.add('hidden');
            } else {
                card.classList.remove('hidden');
            }
        });
        button.textContent = 'Ver Mais';
        button.setAttribute('data-mostrando', 'nao');
        window.scrollTo({ top: document.querySelector('.produtos-grid').offsetTop - 80, behavior: 'smooth' });
    }
}

// Mapeamento de produtos por marca
const produtosPorMarca = {
    "Health Line": [
        "Synergy CT PICC",
        "Synergy PICC Bantam 1.9Fr",
        "Synergy-XS CT PICC"
    ],
    "Biosensors": [
        "BioFreedom Ultra",
        "BioMatrix Alpha",
        "Powerline",
        "Rise NC"
    ],
    "Cardinal Health": [
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
    ]
};

// Função para filtrar produtos por marca
function filtrarPorMarca() {
    // Pega todas as checkboxes de marca
    const checkboxes = document.querySelectorAll('input[name="marca"]:checked');
    const marcasSelecionadas = Array.from(checkboxes).map(cb => cb.value);

    // Pega todos os cards de produto
    const cards = document.querySelectorAll('.produto-card');

    if (marcasSelecionadas.length === 0) {
        // Se nada selecionado, mostra todos
        cards.forEach(card => card.style.display = "");
        return;
    }

    // Monta um Set com todos os nomes de produtos das marcas selecionadas
    const produtosFiltrados = new Set();
    marcasSelecionadas.forEach(marca => {
        (produtosPorMarca[marca] || []).forEach(produto => produtosFiltrados.add(produto));
    });

    // Mostra/oculta cards conforme filtro
    cards.forEach(card => {
        const nome = card.getAttribute('data-nome');
        if (produtosFiltrados.has(nome)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// Adiciona evento aos checkboxes de marca
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[name="marca"]');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', filtrarPorMarca);
    });
});
