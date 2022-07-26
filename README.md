# CSV-FILE-READING

![GitHub repo size](https://img.shields.io/github/repo-size/ReisSouza/csv-file-reading?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/ReisSouza/csv-file-reading?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/ReisSouza/csv-file-reading?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/ReisSouza/csv-file-reading?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/ReisSouza/csv-file-reading?style=for-the-badge)


> Functionality that reads a csv file and adds it to the databas, using node js and prisma

## Tools used <br/>
![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![postgress](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
### Adjustments improvements

The project is still in development and the next updates will focus on the following tasks:

- [ ] Check if it already exists in the database
- [ ] Method to get the entire listing

## 💻 Pré-requisitos

Before starting, make sure you've met the following requirements:
* You have installed the latest version of `Node JS`

## 🚀 Installing csv-file-reading

To install csv-file-reading, follow these steps:

Install dependencies :
```
yarn install 
```


## ☕ Using csv-file-reading

First remove the .exmple from the [.env.exmple](https://github.com/ReisSouza/csv-file-reading/blob/main/.env.exemple) file, then add values for the following environment variables, PORT, DATABASE_URL

Running server:
```
yarn dev
```

To use csv-file-reading, follow these steps:

To use send a post to the route http://localhost:PORT UTILIZED/list-books, passing a multipart, named file and a csv file.

obs: the code was structured based on the use example worksheet, for the test to be successful, use the example worksheet, otherwise it will be necessary to adjust the code PORTA UTILIZED

Modifications for use:
1. First I created your new migration structure, in the [csv-file-reading/prisma/schema.prisma](https://github.com/ReisSouza/csv-file-reading/blob/main/prisma/schema.prisma) file run the command below.
Creating the Migrate Prism:
```
yarn prisma
```
2. Set your type in the [csv-file-reading/src/types/list.ts](https://github.com/ReisSouza/csv-file-reading/blob/main/src/types/list.ts)

obs:From now on all changes will be made in the same file

3. In the csv-file-reading/src/routes.ts file, replace the line 31ate to 35, with the structure of your type
4. If your table didn't have a header that you want to remove, remove line 39, if necessary, skip the header, change const listWithoutHeader = list.slice(N, -1), where N will be the number of lines it will skip
5. On line 42 change the destructuring as if type
6. In line 43, if line 39 has been removed, change the listWithoutHeader to list variable and in the line below return the new list values to date

After making these changes, run the server, and process with a usage model

## 📫 Contributing to csv-file-reading
To contribute csv-file-reading, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<message_commit>'`
4. Push to original branch:!git remote add origin https://<USERNAME>:<Token>@github.com/<USERNAME>/reponame.git
5. Create the pull request.

!git remote add origin https://<USERNAME>:<Token>@github.com/<USERNAME>/https://github.com/ReisSouza/csv-file-reading.git

to create your personal access token -

in your GitHub account go to settings
go to developer settings
go to Personal Access Tokens
generate new token
make sure you save it as you only see it once

Alternatively, see the GitHub documentation at [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request ).

## 😄 Be one of the contributors<br>

## 📝 Licença

MIT

[⬆ Back to top](#project-name)<br>
