/* MENU DE NAVEGACAO*/
const body = document.querySelector('body');
const header = document.createElement('header');
body.appendChild(header);

const nav = document.createElement('nav');
nav.classList.add('container');
header.appendChild(nav);

const logo = document.createElement('h1');
logo.classList.add('logo');
nav.appendChild(logo);
logo.innerText = 'Negreiros Store';


const navegacao = document.createElement('ul');
navegacao.classList.add('navegacao');
nav.appendChild(navegacao);

/*PARTE DE CIMA DO MENU*/

const itensMenu = ['Todos', 'Acessórios', 'Sneakers', 'Camisetas'];
for (let i = 0; i < itensMenu.length; i++) {
    const li = document.createElement('li');
    navegacao.appendChild(li);

    const a = document.createElement('a');
    a.classList.add('item');
    a.href = '';
    li.appendChild(a);
    a.innerText = itensMenu[i];
}
///////////////////////////////////// PRINCIPAL CONTEUDO
const menu_lateral = document.createElement('div');
menu_lateral.classList.add('menu_lateral');
body.appendChild(menu_lateral);

const main = document.createElement('main');
main.classList.add('conteudo-principal');
menu_lateral.appendChild(main);


///DADOS DOS CARDS

const data = [{
        id: 1,
        imagem: './img-2/plus.png',
        categoria: 'Sneakers',
        produto: 'Air-Max Plus Sunset OG',
        descricao: 'Com um novo sistema de amortecimento, o Tênis Nike Air Max Plus proporciona uma passada leve vibrante...',
        preco: 2250,
        carrinho: 'Adicionar ao carrinho'
    },
    {
        id: 2,
        imagem: './img-2/piet.png',
        categoria: 'Camisetas',
        produto: 'Pocket Tee Gray - Piet',
        descricao: 'Camiseta Piet Wild Life "Gray" Camiseta confeccionada em malha 100% algodão. Estampa frente e costas ...',
        preco: 250,
        carrinho: 'Adicionar ao carrinho'
    },
    {
        id: 3,
        imagem: './img-2/bag.png',
        categoria: 'Acessórios',
        produto: 'Bolsa Carteiro - Palace',
        descricao: 'Estampa frontal de logo, fechamento por zíper na parte superior, estampa frontal de logo, fechamento...',
        preco: 600,
        carrinho: 'Adicionar ao carrinho'
    },
    {
        id: 4,
        imagem: './img-2/offwhite.png',
        categoria: 'Camisetas',
        produto: 'Nike x Off-White',
        descricao: 'Virgil Abloh continua a explorar a área cinzenta entre moda e performance com a camiseta Nike...',
        preco: 850,
        carrinho: 'Adicionar ao carrinho'
    },
    {
        id: 5,
        imagem: './img-2/adidas.png',
        categoria: 'Sneakers',
        produto: 'Adidas Bad Bunny',
        descricao: 'Esse novo Tênis adidas Forum x Bad Bunny "Back to School" seguem os passos da lenda do basquete...',
        preco: 2190,
        carrinho: 'Adicionar ao carrinho'
    },
    {
        id: 6,
        imagem: './img-2/supreme.png',
        categoria: 'Acessórios',
        produto: 'Five Panel Supreme',
        descricao: 'Logo bordado Logo supreme no fecho Ripstop de algodão com logotipo impresso fotossensível...',
        preco: 450,
        carrinho: 'Adicionar ao carrinho'
    }
]

// LOOP PARA ENVIAR OS CARDS
function constroiCard(data) {
    for (let i = 0; i < data.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        main.appendChild(card);

        const figure = document.createElement('figure');
        figure.classList.add('imagem_principal');
        card.appendChild(figure);

        const img = document.createElement('img');
        img.src = data[i].imagem
        figure.appendChild(img);

        const categoria = document.createElement('p');
        categoria.classList.add('categoria');
        categoria.innerText = data[i].categoria
        card.appendChild(categoria);

        const produto = document.createElement('h2');
        produto.classList.add('produto');
        produto.innerText = data[i].produto
        card.appendChild(produto);

        const descricao = document.createElement('h3');
        descricao.classList.add('descricao');
        descricao.innerText = data[i].descricao
        card.appendChild(descricao);

        const preco = document.createElement('p');
        preco.classList.add('preco');
        preco.innerText = data[i].preco
        card.appendChild(preco);

        const adicionar_carrinho = document.createElement('button');
        adicionar_carrinho.classList.add('adicionar-ao-carrinho');
        adicionar_carrinho.innerText = data[i].carrinho;
        adicionar_carrinho.addEventListener('click', addProduct)
        adicionar_carrinho.value = data[i].produto
        card.appendChild(adicionar_carrinho);
    }
}
constroiCard(data)
// PARTE LATERAL DE ADICIONAR AO CARRINHO

const aside = document.createElement('aside');
menu_lateral.appendChild(aside);

const primeiro_campo = document.createElement('div');
primeiro_campo.classList.add('primeiro_campo');
aside.appendChild(primeiro_campo);

const pesquisa = document.createElement('input');
pesquisa.classList.add('pesquisa');
pesquisa.placeholder = 'Digite aqui sua pesquisa';
pesquisa.id = 'supreme';
pesquisa.name = 'supreme';
primeiro_campo.appendChild(pesquisa);

const btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = 'Pesquisar';
btn.value = 'Pesquisar';
primeiro_campo.appendChild(btn);

const adicionar_ao_carrinho = document.createElement('p');
adicionar_ao_carrinho.classList.add('carrinho');
adicionar_ao_carrinho.innerText = 'Adicionar ao Carrinho';
aside.appendChild(adicionar_ao_carrinho);

const carrinho_cheio = document.createElement('div');
carrinho_cheio.classList.add('carrinho_cheio');
aside.appendChild(carrinho_cheio);

// DADOS DO CARRINHO


const data_carrinho = []

//FUNÇÃO QUE CHAMA PRODUTOS PARA O CARRINHO

function constroiCarrinho(data_carrinho) {
    carrinho_cheio.innerHTML = ''

    for (let i = 0; i < data_carrinho.length; i++) {

        const apoio = document.createElement('div');
        apoio.classList.add('apoio');
        carrinho_cheio.appendChild(apoio)

        const imagem_carrinho = document.createElement('figure');
        imagem_carrinho.classList.add('imagem_carrinho');
        apoio.appendChild(imagem_carrinho);

        const img = document.createElement('img');
        img.src = data_carrinho[i].imagem
        imagem_carrinho.appendChild(img);
        img.classList.add('img_carrinho');

        const info = document.createElement('div');
        info.classList.add('info');
        apoio.appendChild(info);

        const produto_lista = document.createElement('h2');
        produto_lista.classList.add('produto_lista');
        produto_lista.innerText = data_carrinho[i].produto;
        info.appendChild(produto_lista);

        const preco_lista = document.createElement('p');
        preco_lista.classList.add('preco_lista');
        preco_lista.innerText = data_carrinho[i].preco;
        preco_lista.id = 'din'
        info.appendChild(preco_lista);

        const remover = document.createElement('p');
        remover.classList.add('remover');
        remover.innerText = 'Remover do Carrinho';
        remover.addEventListener('click', removeProduct)
        remover.id = i
        info.appendChild(remover);
    }
}

constroiCarrinho(data_carrinho)

//PARTE DE BAIXO DO CARRINHO

const total = document.createElement('div');
total.classList.add('total');
aside.appendChild(total);

const quant = document.createElement('div');
quant.classList.add('quant');
total.appendChild(quant);

const quantidade = document.createElement('p');
quantidade.innerText = 'Quantidade'
quant.appendChild(quantidade)

const num = document.createElement('p');
num.innerText = 0
num.id = 'quant'
quant.appendChild(num)

const valor = document.createElement('div');
valor.classList.add('valor');
total.appendChild(valor);

const tot = document.createElement('p');
tot.innerText = 'Total'
valor.appendChild(tot)


const valorTotal = document.createElement('p');
valorTotal.innerText = data_carrinho
valor.appendChild(valorTotal)


function addProduct(event) {
    const add = (event.target.value)
    const bancoDeDadosFiltrado = data.filter((item) => {
        return item.produto.includes(add)
    })
    data_carrinho.push(bancoDeDadosFiltrado[0])
    constroiCarrinho(data_carrinho)

    const number = document.querySelector('#quant')
    number.innerText++

    const somaTotal = somaValor()

    valorTotal.innerText = somaTotal

}

function removeProduct(event) {
    const target = event.target
    const index = target.id
    data_carrinho.splice(index, 1);
    constroiCarrinho(data_carrinho)

    const number = document.querySelector('#quant')
    number.innerText--

    const somaTotal = somaValor()

    valorTotal.innerText = somaTotal
}



function somaValor() {
    let soma = 0
    for (let i = 0; i < data_carrinho.length; i++) {
        soma += data_carrinho[i].preco
    }
    return soma
}
const somaTotal = somaValor()

valorTotal.innerText  = somaTotal
