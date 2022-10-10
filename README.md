# Animes Back-end

Back-end do projeto **Animes-FrontEnd**.

Este é um projeto de um site de animes.
Onde você pode visualizar um catálogo
com diverso animes, e avalia-los.

## Guia de inicialização do projeto 

**1.** Clone o projeto
```
git clone https://github.com/GustavoHenriqueSchmitz/Animes-BackEnd.git
```

**2.** No diretório raiz, execute para instalar as dependências (Apenas na primeira vez que for iniciar o projeto)
```
npm install
```

**3.** Navegue até o diretório /src e inicialize o prisma
```
cd src
npx prisma generate
```

**4.** Na pasta raiz execute o seguinte comando, para subir o servidor do banco de dados
```
sudo docker-compose up
```

**5.** Abra outro terminal e navegue até o diretório /src, e execute push no banco de dados
```
cd src
npx prisma db push
```

**6.** No diretório raiz, execute o projeto
```
npm run dev
```
