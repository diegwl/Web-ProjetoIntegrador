 // A função é carregada assim que a página é carregada.
window.onload = function() { 
    // Configuração do menu mobile, para que quando clicarmos no icone, ele mostre as opções.
    document.querySelector('head').innerHTML += "<link rel='icon' type='image/x-icon' href='../assets/imgs/xicara.png'>"

    document.querySelector(".menu_mobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == "flex") {
            document.querySelector(".menu nav ul").style.display = "none";
        } else {
            document.querySelector(".menu nav ul").style.display = "flex";
        }
    });

    // Na página específica de cada produto, ele analisa uma div que possui o nome do produto e carrega sua informações de um json
        var nome = document.getElementById("nomejs").innerHTML
        produtos.forEach(produto => {
            console.log(produto)
            console.log(produto.produto)
            console.log(nome)
            if (nome == produto.produto){
                div = `<section id="product_image">`+
                `<img src="${produto.img}" alt="">`+
                `</section>`+
                `<section id="product_text">`+
                `<div id="product_name">`+
                        `<h3>${produto.produto}</h3>`+
                `</div>`+
                `<article>`+
                    `<div id="product_price">`+
                        `<h3>${produto.preco}</h3>`+
                        `<div id="qtd">`+
                            `<p>Quantity</p>`+
                            `<input id="num" value="1" min="1" max="10 type="number">`+
                        `</div>`+
                    `</div>`+
                    `<div id="shop">`+
                        `<a data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="AddCarrinho('${produto.produto}', document.getElementById('num').value, '${parseFloat(produto.preco.replace("U$ ", ""))}', '${produto.img}', ${pos})" href="#"><img src="../assets/imgs/cart-shopping-solid.svg" alt="Carrinho"></a>`+
                    `</div>`+
                `</article>`+
            `</section>`
            document.getElementById('produto-js').innerHTML = div
            }
        });
};

// json com nome, preço e imagem de cada um dos produtos da loja 
let produtos = [
    {
        produto: "Vanilla Latte",
        preco: "U$ 5.00",
        img: "../assets/imgs/img_product.png"
    },
    {
        produto: "Espresso",
        preco: "U$ 3.00",
        img: "../assets/imgs/espresso.png"
    },
    {
        produto: "Cappucino",
        preco: "U$ 6.00",
        img: "../assets/imgs/cappucino.png"
    },
    {
        produto: "Hazelnut Latte",
        preco: "U$ 7.00",
        img: "../assets/imgs/hazelnut latte.png"
    },
    {
        produto: "Coffe Ice Cream",
        preco: "U$ 8.00",
        img: "../assets/imgs/coffe_ice_cream.png"
    },
    {
        produto: "Hot Milk",
        preco: "U$ 6.00",
        img: "../assets/imgs/hot_milk.png"
    },
    {
        produto: "Mocaccino",
        preco: "U$ 6.00",
        img: "../assets/imgs/Mocaccino.png"
    },
    {
        produto: "Coffe",
        preco: "U$ 4.00",
        img: "../assets/imgs/café.jpg"
    },
    {
        produto: "Yerba Mate Tea",
        preco: "U$ 5.00",
        img: "../assets/imgs/cha-mate.jpg"
    },
    {
        produto: "Iced Mate Tea",
        preco: "U$ 5.00",
        img: "../assets/imgs/ice-tea.webp"
    },
    {
        produto: "Black Tea",
        preco: "U$ 6.00",
        img: "../assets/imgs/Black-tea.webp"
    },
    {
        produto: "Fennel Tea",
        preco: "U$ 5.00",
        img: "../assets/imgs/fennel-tea-recipe.jpg"
    }
];

var pos = 1
var p
// função que adiciona o produto ao carrinho no local storage, na forma de um json, com id, imagem, produto, quantidade e valor. 
// Essa função é acionada ao clicar no icone de adicionar ao carrinho.
function AddCarrinho(produto, qtd, valor, img, posicao)
	{
        for(i=1; i<=99; i++) {
            var prod = localStorage.getItem(i);
            if(prod != null) {
                posicao = posicao + 1
            } else {break}
        }
    
        valor = valor * qtd;
		
        p = {
            "id" : posicao,
            "img" : img,
            "produto" : produto,
            "qtd" : qtd,
            "valor" : valor
        }
        var json_string = JSON.stringify(p)

        localStorage.setItem(posicao, json_string)
        posicao = posicao + 1
	}
