h1 align="center"><b>AUthenication - NodeJS, TypeScript</b></h1>

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://github.com/maxwellwachira/auth_nodejs_typescript.git)

# Description

This is Bearer Token authentication API built with NodeJS, express and Typescript.<br>
It has the following features
- User CRUD
- User Login
- Access and Refresh Token
- Authentication Middleware
- Password Recovery
- Sending emails via Nodemailer
- HTML template emails
- Postgres Sequelize


# Table of contents

- [Prerequisites](#Prerequisites)
- [Running Locally](#Setting-up-Local-Environment)
- [Acknowledgement](#Acknowledgement)
- [License](#License)

# Prerequisites

- [NodeJS Installed ](https://nodejs.org/en/download/)

- Yarn Package Manager installed. Yarn can be installed using the command below:

```bash
npm install --global yarn
```

- [PostgreSQL Installed](https://www.postgresql.org/download/)


# Setting-up-Local-Environment

## Without Docker

### Step 1

clone the repository and navigate to the project directory

```bash
git clone https://github.com/maxwellwachira/auth_nodejs_typescript.git
cd auth_nodejs_typescript/
```

### Step 2

Check package.json file and ensure scripts are notated as below:

```bash
"scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
},
```

### Step 3

Delete the node_modules folder and any 'lock' files such as yarn.lock or package-lock.json if present.

### Step 4

Run yarn install to install project dependencies

```bash
yarn install
```

### Step 5

final step

```bash
npm run dev
```

# Acknowledgement

Special thanks to Nodemailer team

## <b>License</b>

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](LICENSE)