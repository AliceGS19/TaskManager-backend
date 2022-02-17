# TaskManager-backend
Aplicação cria servidor para CRUD de tarefas conectando ao banco de dados MongoDB.

---

# Bibliotecas utilizadas:

- joi;
- dotenv;
- express;
- mongodb;
- nodemon;
- http-status-codes;

---

# Mais sobre o projeto:
  
Linguagen:
- JavaScript(node.js)

---

# Requerimentos para rodar o projeto localmente:

- Gerenciadores de pacotes(como npm ou yarn);

- Instalação do BD MongoDB;

---

# Baixando e rodando o projeto localmente (necessária a instalação do git na maquina local e configuração com sua conta no github):

- Navegue até a pasta onde deseja coloca alocar este repositório;

- Execute o comando git clone git@github.com:AliceGS19/TaskManager-backend.git;

- Navegue até o repositório com o comando cd TaskManager-backend;

- Execute o comando npm install (para gerenciador de pacotes npm) ou yarn add 
(para gerenciador de pacotes yarn) para instalar as dependências do projeto;

- Crie um arquivo .env na raiz do projeto, seguindo o modelo do arquivo .env.example, 
passando as configurações para o conexão com seu banco de dados.

DB_URL: String de conexão com seu MongoDB;
DB_NAME: Nome da sua escolha para o seu banco de dados.

- Execute o comando npm start para iniciar a aplicação normalmente ou o comando npm run dev para
iniciar a aplicação com o nodemon (reiniciar a aplicação sempre que uma nova mudança for salva no código)

---

# Funcionalidades da aplicação por rota por método http:

---

# Rota /tasks :
- métodos http:
- get;
- post.


# Método get: 
Não necessita de body ou headers

# Casos:

- Caso ocorra tudo certo retorna status 200 e uma lista com todas as tarefas cadastradas
no corpo da resposta.

- Caso não possua nenhuma tarefa cadastrada no banco, retorna status 404 e a mensagem "No 
registered tasks".


# Método post:
Não necessita de headers, necessita de um body no formato JSON, com os campos:
- name: string (não pode ser vazia);
- description: string (não pode ser vazia);
- status: string (não pode ser vazia);

# Casos:

- Caso algum dos campos não respeite esse formato, retorna status 400 e uma mensagem
gerada pelo joi de acordo com o erro no body.

- Caso passe em todas as autenticações citadas anteriormente, cria um novo usuário no banco
utilizando os campos passados no body, retorna status 201 e a mensagem "Task created successfully".

---

# Rota /tasks/:id :
- métodos http: 
- put; 
- delete.

# Método put:
Não necessita de headers, necessita de um body no formato JSON, com os campos:
- name: string (não obrigatório);
- description: string (não obrigatório);
- status: string (não obrigatório).

# Casos:

- Caso nenhum campo seja passado, retorna status 400 e a mensagem "Must have at least 1
property on body to update".

- Caso algum dos campos não respeite esse formato, retorna status 400 e uma mensagem
gerada pelo joi de acordo com o erro no body.


- Caso o id passado não esteja em um formato válido de ObjectId do MongoDB, retorna status
422 e a mensagem "Id is not a valid mongo ObjectId".


- Caso não possua uma tarefa com o id inserido cadastrada no banco, retorna status 404 e a 
mensagem "Task not found".

- Caso passe em todas as autenticações citadas anteriormente, atualiza as informações da tarefa
com o id correspondente no banco utilizando os campos passados no body, retorna apenas status 204.


# Método delete:

# Casos:

- Caso o id passado não esteja em um formato válido de ObjectId do MongoDB, retorna status
422 e a mensagem "Id is not a valid mongo ObjectId".

- Caso não possua uma tarefa com o id inserido cadastrada no banco, retorna status 404 e a 
mensagem "Task not found".

- Caso exista uma tarefa correspondente ao id passado no banco, remove a tarefa, retorna apenas
status 204.
