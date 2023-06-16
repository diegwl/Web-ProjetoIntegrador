 // A função é carregada assim que a página é carregada.
window.onload = function(){
    var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
    var i = 0;     // variável que irá percorrer as posições
    var valor = 0; // variável que irá receber o preço do produto convertido em Float.
    var vazio = 0; // variável que vai armazenar o número de posições vazias
    var item = 1;
    
    for(i=1; i<=99; i++) // verifica até 99 produtos registrados na localStorage
    {
        var prod = localStorage.getItem(i); // verifica se há produto nesta posição. 
        var p = JSON.parse(prod)
        if(p != null) 
        {	
            // exibe os dados da lista dentro da div itens
            let section = "<section id='item" + item + "'> <img class='img_produto' src='" + p.img + "' alt=''>"+
                "<p>"+ p.qtd + " x "+
                p.produto+ "</p>" +
                " "+
                "<p>" + "U$: " + p.valor + "</p>" + "<button class='x' type='button'><i class='fa-solid fa-xmark fa-2xl'></i></button>" +"</section>";
			document.getElementById("itens").innerHTML += section;
            
            item += 1
            // calcula o total do valor dos produtos
            valor = parseFloat(p.valor); // valor convertido com o parseFloat()
            total = (total + valor); // arredonda para 2 casas decimais com o .toFixed(2)
        }
        else {
            vazio++
        }
        if (vazio >= 99) {
            let section = "<section> Carrinho Vazio </section>"
            document.getElementById("itens").innerHTML += section;
        }
    } 
    // exibe o total dos produtos
    document.getElementById("total").innerHTML = total.toFixed(2);

    // insere os botões de excluir 
    // Define que a função excluir vai rodar quando clicar no x
    var botoes_delete = document.querySelectorAll(".x");
    botoes_delete.forEach(bt_del => bt_del.addEventListener("click", excluir));

    // define que todas as páginas vão possuir um ícone dde uma xícara
    document.querySelector('head').innerHTML += "<link rel='icon' type='image/x-icon' href='../assets/imgs/xicara.png'>"

    // Configuração do menu mobile, para que quando clicarmos no icone, ele mostre as opções.
    document.querySelector(".menu_mobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == "flex") {
            document.querySelector(".menu nav ul").style.display = "none";
        } else {
            document.querySelector(".menu nav ul").style.display = "flex";
        }
    })
}

// função para excluir um item em específico, pelo i do item clicado
excluir = (item) => {
    var x = item.target.parentElement.parentElement;
	console.log(x)
	console.log(`${x.id.substr(4, x.id.length - 1)}` + 1)
    localStorage.removeItem(`${x.id.substr(4, x.id.length - 1)}` + 1);
    //location.reload()
}
