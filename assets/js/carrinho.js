window.onload = function(){
    var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
    var i = 0;     // variável que irá percorrer as posições
    var valor = 0; // variável que irá receber o preço do produto convertido em Float.
    var vazio = 0;
    
    for(i=1; i<=99; i++) // verifica até 99 produtos registrados na localStorage
    {
        var prod = localStorage.getItem(i); // verifica se há recheio nesta posição. 
        var p = JSON.parse(prod)
        if(p != null) 
        {	
            // exibe os dados da lista dentro da div itens
            let section = "<section id='item'" + i + "> <img class='img_produto' src='" + p.img + "' alt=''>"+
                "<p>"+ p.qtd + " x "+
                p.produto+ "</p>" +
                " "+
                "<p>" + "U$: " + p.valor + "</p>" + "<button class='x' type='button'><i class='fa-solid fa-xmark fa-2xl'></i></button>" +"</section>";
			document.getElementById("itens").innerHTML += section;
            
            
            // calcula o total dos recheios
            valor = parseFloat(p.valor); // valor convertido com o parseFloat()
            total = (total + valor); // arredonda para 2 casas decimais com o .toFixed(2)
        }
        else {
            vazio++
        }
    } 
    // exibe o total dos recheios
    document.getElementById("total").innerHTML = total.toFixed(2);

    var botoes_delete = document.querySelectorAll(".x");
    botoes_delete.forEach(bt_del => bt_del.addEventListener("click", excluir));

    document.querySelector('head').innerHTML += "<link rel='icon' type='image/x-icon' href='../assets/imgs/xicara.png'>"

    document.querySelector(".menu_mobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == "flex") {
            document.querySelector(".menu nav ul").style.display = "none";
        } else {
            document.querySelector(".menu nav ul").style.display = "flex";
        }
    })
}

excluir = (item) => {
    var x = item.target.parentElement.parentElement;
    localStorage.removeItem(`${x.id.substr(4, x.id.length - 1)}` + 1);
    location.reload()
}