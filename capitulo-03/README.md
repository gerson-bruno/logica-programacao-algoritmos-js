# 🚀 Construção de Algoritmos com Node.js

Este projeto contém exemplos básicos de lógica de programação utilizando JavaScript com Node.js no terminal.

---

# 📦 Instalando o Node.js

1. Acesse o site oficial do Node.js:

🌐 https://nodejs.org/

2. Baixe a versão recomendada (LTS).

3. Instale normalmente seguindo os passos do instalador.

4. Após instalar, abra o terminal e verifique se deu tudo certo:

```bash
node -v
```

Se aparecer algo como:

```bash
v22.0.0
```

significa que o Node.js foi instalado corretamente. ✅

---

# 📁 Criando um arquivo JavaScript

1. Abra o VS Code ou outro editor.

2. Crie um arquivo com extensão `.js`.

Exemplo:

```bash
app.js
```

3. Escreva seu código JavaScript:

```javascript
console.log('Olá, mundo!');
```

4. Salve o arquivo.

---

# ▶️ Executando o arquivo

1. Abra o terminal.

2. Entre na pasta onde o arquivo está salvo usando o comando `cd`.

Exemplo:

```bash
cd C:\Users\SeuUsuario\Documents\projeto
```

3. Execute o arquivo:

```bash
node app.js
```

4. Saída esperada:

```bash
Olá, mundo!
```

---

# 📚 Instalando o prompt-sync

Para ler dados digitados pelo usuário no terminal, vamos usar a biblioteca `prompt-sync`.

Antes, inicialize o projeto:

```bash
npm init -y
```

Depois instale o módulo:

```bash
npm install prompt-sync
```

Isso criará:

- `node_modules`
- `package.json`

---

# 🧠 Exemplo de código

```javascript
const prompt = require('prompt-sync')();

// Lê os números digitados pelo usuário
const num1 = Number(prompt('Digite o primeiro número: '));
const num2 = Number(prompt('Digite o segundo número: '));

// Calcula a soma
const soma = num1 + num2;

// Exibe o resultado
console.log(`A soma de ${num1} e ${num2} é: ${soma}`);
```

---

# 🖥️ Executando o programa

Após salvar o arquivo, execute:

```bash
node app.js
```

Exemplo de execução:

```bash
Digite o primeiro número: 10
Digite o segundo número: 20
A soma de 10 e 20 é: 30
```
---
