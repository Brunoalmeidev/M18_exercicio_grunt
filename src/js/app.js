let estoque = {
    "Granito Branco": 10,
    "Mármore Travertino": 5,
    "Quartzo Cinza": 12
};

function atualizarEstoque() {
    const lista = document.getElementById("listaEstoque");
    lista.innerHTML = "";
    for (let produto in estoque) {
        let li = document.createElement("li");
        li.textContent = `${produto}: ${estoque[produto]} unidades`;
        lista.appendChild(li);
    }
}

document.getElementById("btnVender").addEventListener("click", () => {
    const produto = document.getElementById("produtoVenda");
    const quantidade = document.getElementById("quantidadeVenda");

    const nome = produto.value.trim();
    const qtd = parseInt(quantidade.value);

    if (estoque[nome] !== undefined && qtd > 0 && estoque[nome] >= qtd) {
        estoque[nome] -= qtd;
        alert(`Venda realizada: ${qtd} unidade(s) de ${nome}`);
    } else {
        alert("Produto não encontrado ou quantidade inválida!");
    }

    atualizarEstoque();

    produto.value = "";
    quantidade.value = "";
});

document.getElementById("btnAdicionar").addEventListener("click", () => {
    const produto = document.getElementById("produtoNovo");
    const quantidade = document.getElementById("quantidadeNova");

    const nome = produto.value.trim();
    const qtd = parseInt(quantidade.value);

    if (nome && qtd > 0) {
        if (estoque[nome]) {
            estoque[nome] += qtd;
        } else {
            estoque[nome] = qtd;
        }
        alert(`Produto adicionado/atualizado: ${nome} (${qtd} unidades)`);
    } else {
        alert("Informe um nome de produto e uma quantidade válida!");
    }

    atualizarEstoque();

    produto.value = "";
    quantidade.value = "";
});

atualizarEstoque();
