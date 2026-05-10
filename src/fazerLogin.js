const usuariosCadastrados = [
  {
    id: 1,
    nome: "Fran",
    email: "email@existente.com",
    senha: "senhaCerta123",
    expirado: false
  },
  {
    id: 2,
    nome: "Monica",
    email: "credencial@expirada.com",
    senha: "senhaCerta123",
    expirado: true
  },
  {
    id: 3,
    nome: "Brenda",
    email: "senha@errada.com",
    senha: "12345",
    expirado: false
  }
];

export function fazerLogin(emailEntrada, senhaEntrada) {
  // Procura usuário pelo email
  const usuario = usuariosCadastrados.find(u => u.email === emailEntrada);      // o email do usuário no vetor é igual ao email digitado?

  // Verifica se email existe
  if (!usuario) {                     // verifica se o .find encontrou alguém. Se usuario for undefined = não existe esse email em nenhum dos objetos no vetor
    return "Usuário não encontrado";
  }

  // Verifica se senha está correta
  if (usuario.senha !== senhaEntrada) {
    return "Senha incorreta para o usuário encontrado";
  }

  // Verifica se credenciais expiraram
  if (usuario.expirado) {
    return "Renove suas credenciais";
  }

  // Login válido
  return "Login realizado com sucesso!";
}


