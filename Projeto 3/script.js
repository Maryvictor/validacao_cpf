function verificarCPF(cpf){
    const matchCpf = cpf.match(/(\d{3}[-.\s]?){3}\d{2}/g);
    return (matchCpf && matchCpf[0] === cpf);
}

resultado = prompt("Digite seu CPF");
alert(verificarCPF(resultado));

