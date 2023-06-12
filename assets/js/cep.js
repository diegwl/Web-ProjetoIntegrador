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
    let validacao = cep.value
    fetch(`https://viacep.com.br/ws/${validacao}/json/`)
    .then(()=> {alert("Compra Finalizada")})
    .catch((e) => {
        alert("Endereço Errado")
    })
}
