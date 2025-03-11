# Aplicacão de Manipulacão de Contatos em Node.js

## Descricão
Esta é uma aplicacão simples em Node.js usando Express para manipulacao de contatos, permitindo adicionar, listar e remover contatos, armazenando os dados em um arquivo de texto (`list.txt`). A manipulacão dos contatos deve ser feita via um software como Insomnia ou Postman.

## Funcionalidades
- Adicionar contatos 
- Listar todos os contatos
- Remover contatos pelo nome 

## Requisitos
- Node.js instalado  
- Insomnia ou Postman para testar as requisicões  

## Instalacao
1. Clone este repositorio:
   ```sh
   https://github.com/warrley/contact-list
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd contact-list
   ```
3. Instale as dependencias:
   ```sh
   npm install
   ```

## Uso
### Iniciar o servidor
```sh
npm run dev
```
O servidor rodara em `http://localhost:3000`

### Endpoints
#### Adicionar um contato
**POST** `/contacts`
```json
{
  "nome": "Nome do Contato",
}
```

#### Listar contatos
**GET** `/contacts`

#### Remover um contato
**DELETE** `/contacts`
```json
{
  "nome": "Nome do Contato",
}
```

## Estrutura do Projeto
```
/
├── data/               # Pasta onde os contatos sao armazenados
│   ├── list.txt        # Arquivo de texto com os contatos
├── src/                # Codigo-fonte da aplicacao
│   ├── routes/         # Definicao das rotas
│   │   ├── index.ts
│   ├── service/        # Logica de manipulacao dos contatos
│   │   ├── contact.ts
│   ├── server.ts       # Arquivo principal da aplicacao
├── package.json        # Dependencias do projeto

```

## Autor
[Warley]("/")

