import { fazerLogin } from "../src/fazerLogin.js";
import assert from 'node:assert';

describe.only('Testando login do usuário', function() {
    it('Realizar login com sucesso quando o email for encontrado e a senha estiver correta', function() {
        // Arrange (Dado que, Pré-condição)
        const email = 'email@existente.com';
        const senha = 'senhaCerta123';

        // Act (Quando, Ação)
        const resultadoLogin = fazerLogin(email, senha);

        // Assert (Então, Pós-condição)
        assert.equal(resultadoLogin, 'Login realizado com sucesso!');


    });

    it('Avisar usuario quando as credenciais expiraram', function() {
        // Arrange (Dado que, Pré-condição)
        const email = 'credencial@expirada.com';
        const senha = 'senhaCerta123';

        // Act (Quando, Ação)
        const resultadoLogin = fazerLogin(email, senha);

        // Assert (Então, Pós-condição)
        assert.equal(resultadoLogin, 'Renove suas credenciais');

    });

    it('Usuário não encontrado quando email for inexistente', function() {
        // Arrange (Dado que, Pré-condição)
        const email = 'email@inexistente.com';
        const senha = 'senhaQualquer123';

        // Act (Quando, Ação)
        const resultadoLogin = fazerLogin(email, senha);

        // Assert (Então, Pós-condição)
        assert.equal(resultadoLogin, 'Usuário não encontrado');
    });

    it('Senha incorreta para usuário encontrado', function() {
        // Arrange (Dado que, Pré-condição)
        const email = 'senha@errada.com';
        const senha = 'senhaQualquer123';

        // Act (Quando, Ação)
        const resultadoLogin = fazerLogin(email, senha);

        // Assert (Então, Pós-condição)
        assert.equal(resultadoLogin, 'Senha incorreta para o usuário encontrado');
    });
});