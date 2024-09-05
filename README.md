# PotiBarber
PotiBarber é um sistema de gerenciamento de barbearias, onde os usuários podem acessar barbearias fictícias cadastradas através de URLs exclusivas. Este projeto foi desenvolvido utilizando o framework Next.js, com autenticação integrada via NextAuth, incluindo suporte ao Google Provider. A interface de usuário é estilizada e construída com a biblioteca de componentes ShadcnUI.

## Tecnologias Utilizadas
  - Next.js: Framework React moderno para desenvolvimento de aplicações web.
  - NextAuth: Biblioteca de autenticação para Next.js, com suporte a vários providers (Google, GitHub, etc.).
  - ShadcnUI: Conjunto de componentes de interface altamente personalizáveis.

## Funcionalidades
Gerenciamento de Barbearias: Cada barbearia fictícia tem uma URL dedicada no sistema para acesso fácil.
Autenticação com Google: Os usuários podem se autenticar no sistema utilizando suas contas do Google.
Reserva de serviço: O usuário pode escolher o serviço desejado, o dia e o horário disponível.
Interface Intuitiva: Interface de usuário moderna e responsiva utilizando ShadcnUI.

## Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em sua máquina.

#### 1- Clone este repositório:
```
bash
git clone https://github.com/usuario/potibarber.git
```

#### 2- Instale as dependências do projeto:
```
bash
npm install
```

#### 3- Crie um arquivo .env.local na raiz do projeto com as variáveis de ambiente necessárias. Aqui está um exemplo:
```
.env
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=seu_google_client_id
GOOGLE_CLIENT_SECRET=seu_google_client_secret
```

#### 4- Execute o projeto localmente:
```
bash
npm run dev
```

#### 5- Acesse o sistema no navegador:
http://localhost:3000/barbershop/63150eeb-9139-4ad9-906b-f47391dee3d7

### Gerenciamento de Barbearias
#### Os usuários podem acessar as barbearias fictícias utilizando URLs exclusivas no formato:
http://localhost:3000/barbershop/<id-da-barbearia>
#### Exemplo:
http://localhost:3000/barbershop/63150eeb-9139-4ad9-906b-f47391dee3d7

### Autenticação
A autenticação é feita utilizando o NextAuth, e o sistema oferece a opção de login via Google.

## Comandos Úteis
`npm run build`: Faz o build da aplicação para produção.
`npm run start`: Inicia o servidor em modo de produção.
`npm run dev`: Inicia o servidor em modo de desenvolvimento.

## Contribuição
Faça um fork deste repositório.
Crie uma branch para suas alterações (git checkout -b minha-feature).
Faça commit das suas mudanças (git commit -am 'Adiciona nova funcionalidade').
Envie para a branch (git push origin minha-feature).
Abra um Pull Request.

## Licença
Este projeto está licenciado sob a licença MIT.
