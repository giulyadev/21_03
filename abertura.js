function verificarSenha() {
    // define aqui a senha
    const senhaCorreta = "MjEwMQ=="; 
    
    // input ID do HTML
    const inputSenha = document.getElementById("senha");
    const valorDigitado = btoa(inputSenha.value);

    if (valorDigitado === senhaCorreta) {
        alert("Parabéns, Julinha! Acesso liberado.");
        // página principa
        window.location.href = "home.html"; 
    } else {
        alert("Senha incorreta! Tente novamente.");
        // limpa o campo para tentar de novo
        inputSenha.value = "";
    }
}