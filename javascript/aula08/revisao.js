let login = prompt("Insira seu e-mail:")
let senha = prompt("Insira sua senha:")
let loginCerto = "kaik@email.com"
let senhaCerta = "12345678"

// heavy is the crownalidar se login é o login certo e se a senha também é
if (login == loginCerto && senha == senhaCerta) {
    alert("Credencial validada.")

    alert(" Opção 1: Crédito \n Opção 2: Consignado \n Opção 3: Emprestimo \n Opção 4: Renegociar \n Opção 0: Falar com atendente")

    let opcao = Number(prompt("Escolha a opção:"))
    switch (opcao) {
        case 1:
            alert("Você selecionou Crédito. Redirecionando para o setor responsável.")
            break;

        case 2:
            alert("Você selecionou Consignado. Redirecionando para o setor responsável.")
            break;

        case 3:
            alert("Você selecionou Emprestimo. Redirecionando para o setor responsável.")
            break;

        case 4:
            alert("Você selecionou Renegociar. Redirecionando para o setor responsável.")
            break;

        case 0:
            alert("Aguarde enquanto localizo um atendente disponivel para te atender.")
            break;

        default:
            alert("")
            break;
    }
}
// Se o login e a senha que o usuário inseriu não forem iguais a que temos, ele não pode fazer login no aplicativo!
else {
    alert("Login ou senha incorreto!")
}