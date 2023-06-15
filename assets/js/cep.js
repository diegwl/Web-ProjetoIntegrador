let cep = document.querySelector("#cep")
let localidade = document.querySelector("#localidade")
let uf = document.querySelector("#uf")
let bairro = document.querySelector("#bairro")
let rua = document.querySelector("#rua")

// função qu valida o cep digitado, através da viacep api e preenche os campos de endereço
function validaCep () {
    let validacao = cep.value
    fetch(`https://viacep.com.br/ws/${validacao}/json/`)
    .then(response => response.json())
    .then(data => {
        localidade.value = data.localidade
        uf.value = data.uf
        rua.value = data.logradouro
        bairro.value = data.bairro
    }
    )
}

// função que chama o formato do cep a cada letra digitada pelo usuário
const mascaraCep = (event) => {
    let input = event.target
    input.value = forma(input.value)
}

// função que compara o formato do cep digitado e insere o - automaticamente
const forma = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,"")
    value = value.replace(/(\d{5})(\d)/, "$1-$2")
    return value
}

// funcao que valida a compra dos produtos
function compra() {
    var compra = false
    // vê que produtos estão no carrinho e se ele está vazio
    for(i=1; i<=99; i++) 
    {
        var prod = localStorage.getItem(i); 
        var p = JSON.parse(prod)
        console.log(p)
        if(p != null) 
        {
            compra = true
        }
    }
    let validacao = cep.value

    // valida se o cep digitado é real ou se ele ainda não foi digitado
    if (compra == true){
        fetch(`https://viacep.com.br/ws/${validacao}/json/`)
        .then(()=> {Swal.fire({
        title:'You completed purchase!',
        text:'Thanks to buy with us.',
        icon:'success',
        confirmButtonText: 'OK',
        isConfirmed: false
        })
        localStorage.clear()
        })
        .catch((e) => {
        Swal.fire(
            'An error happened!',
            'The adress is wrong.',
            'error'
          )
        })
    }
    else {
        Swal.fire(
            'An error happened!',
            'You dont have products in the shopping cart',
            'error',
          )
    }
}
