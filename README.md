<p align="center">
 <img src="https://lh3.googleusercontent.com/drive-viewer/AITFw-wODOo4FL_047PVLNWhz4d8vQPhXv0jF1hpypPB11vCn3nsDbyzy7UhE9ySodY1tU37C35Qeme6VzNzpknPG5OJD-T5cQ=s2560" width="235" alt="Playbook Nouhau" />
</p>

 # API | Playbook Nouhau

 A [Nouhau](https://nouhau.pro/) é uma startup de transformação de culturas organizacionais por meio de metodologias inovadoras. Através de jogos empresariais, a empresa estimula o desenvolvimento de competências socioemocionais (soft skills) com estratégia.

 Para fornecer dados para o app [Playbook Nouhau](https://github.com/brennofacasi/playbook-nouhau-app), foi desenvolvida uma API simples, utilizando o [Nest](https://github.com/nestjs/nest) (framework TypeScript), [Prisma](https://www.prisma.io/) (ORM) e banco de dados **SQLite**.

## Primeiros passos 🚀

Antes de tudo, renomeie o arquivo ```env.example``` para ```.env```. Edite as variáveis caso necessário:

| Variável       | Tipo     | Descrição                   |
| :------------- | :------- | :-------------------------- |
| `API_PORT`     | `number` | Porta local da API.         |
| `DATABASE_URL` | `string` | Endereço do banco de dados. |


Instale as dependências do projeto e rode o servidor de desenvolvimento:

```bash
$ npm install
$ npm run dev
# ou
$ yarn install
$ yarn dev
```

### Banco de Dados 💿

O projeto já conta com um arquivo ```.db``` já populado com dados, localizando na pasta ```/prisma```. Caso haja algum erro, ou prefira outro gerenciador de banco de dados, rode as migrations (seeds inclusos!) utilizado o comando:

```bash
$ npm run prisma migrate dev
# ou
$ yarn prisma migrate dev
```
