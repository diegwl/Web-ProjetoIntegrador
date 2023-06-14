let cep = document.querySelector("#cep")
let localidade = document.querySelector("#localidade")
let uf = document.querySelector("#uf")
let bairro = document.querySelector("#bairro")
let rua = document.querySelector("#rua")

function validaCep () {
    let validacao = cep.value
    fetch(`https://viacep.com.br/ws/${validacao}/json/`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        localidade.value = data.localidade
        uf.value = data.uf
        rua.value = data.logradouro
        bairro.value = data.bairro
    }
    )
}

const mascaraCep = (event) => {
    let input = event.target
    input.value = forma(input.value)
}

const forma = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,"")
    value = value.replace(/(\d{5})(\d)/, "$1-$2")
    return value
}

function compra() {
    var compra = false
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
