let login
let loginCerto = ("kaik@email.com")
let senhaCerta = ("1234")
let senha

do {
    login = prompt("Insira seu email")

} while (login != loginCerto );

do {
    prompt("Insira sua senha") 
} while (senha != senhaCerta);

console.log("Acesso Concedido");
