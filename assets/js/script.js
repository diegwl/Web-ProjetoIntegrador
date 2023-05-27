window.onload = function() {
    document.querySelector(".menu_mobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == "flex") {
            document.querySelector(".menu nav ul").style.display = "none";
        } else {
            document.querySelector(".menu nav ul").style.display = "flex";
        }
    });

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
                        `<a onclick="AddCarrinho('${produto.produto}', document.getElementById('num').value, '${parseFloat(produto.preco.replace("U$ ", ""))}', ${pos})" href="#"><img src="../assets/imgs/cart-shopping-solid.svg" alt="Carrinho"></a>`+
                    `</div>`+
                `</article>`+
            `</section>`
            document.getElementById('produto-js').innerHTML = div
            }
        });
};


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


function AddCarrinho(produto, qtd, valor, posicao)
	{
        for(i=1; i<=99; i++) {
            var prod = localStorage.getItem("produto" + i + "");
            if(prod != null) {
                posicao = posicao + 1
            }
        }
        posicao = posicao + 1
        console.log(pos)
		localStorage.setItem("produto" + posicao, produto);
		localStorage.setItem("qtd" + posicao, qtd);
		valor = valor * qtd;
		localStorage.setItem("valor" + posicao, valor);
		alert("Produto adicionado ao carrinho!");
	}

    var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
    var i = 0;     // variável que irá percorrer as posições
    var valor = 0; // variável que irá receber o preço do produto convertido em Float.
    
    for(i=1; i<=99; i++) // verifica até 99 produtos registrados na localStorage
    {
        var prod = localStorage.getItem("produto" + i + ""); // verifica se há recheio nesta posição. 
        if(prod != null) 
        {	
            // exibe os dados da lista dentro da div itens
            document.getElementById("itens").innerHTML += localStorage.getItem("qtd" + i) + " x ";
            document.getElementById("itens").innerHTML += localStorage.getItem("produto" + i);
            document.getElementById("itens").innerHTML += " ";
            document.getElementById("itens").innerHTML += "R$: " + localStorage.getItem("valor" + i) + "<hr>";
            
            // calcula o total dos recheios
            valor = parseFloat(localStorage.getItem("valor" + i)); // valor convertido com o parseFloat()
            total = (total + valor); // arredonda para 2 casas decimais com o .toFixed(2)
        }
    } 
    // exibe o total dos recheios
    document.getElementById("total").innerHTML = total.toFixed(2);
