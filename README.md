# NetMAPPER

Web interface for the CLI tool `nmap`.

[Github repository](https://github.com/TheVSDev/netmapper)

## Table of contents

- [Overview](#overview)
  - [What is it](#what-is-it)
  - [Links](#links)
  - [How to setup](#how-to-setup)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### What is it

NetMapper is an online tool for the CLI tool `nmap`. 
You can choose which of these three options you want to use to scan the network:
   - `-sV`
   - `-sS`

You can also choose between options like:
   - Host Timeout
   - Max Rate
   - Max Retries

### Links

- Github repository: [https://github.com/TheVSDev/netmapper](https://github.com/TheVSDev/netmapper)

### How to setup

Create `.env.local` file with the following fields:
- `PORT=<port you want to use>`
- `DB_URI=<your URL to DB>`
- `SECURITY_JWT_SECRET= `
- `SECURITY_PASSWORD_SALT= `
- `SECURITY_PASSWORD_KEYLEN= `
- `SECURITY_PASSWORD_ITERATIONS= `

Use terminal commands:
- `npm i` : at the root of the project to install all dependencies
- `npm run dev` : start the server

## My process

### Built with

#### Languages
- HTML
- CSS
- JS

#### Frameworks
- ReactJS
- Next.js
- Node.js
- Tailwind CSS

#### DB
- MongoDB

### Continued development

In the future I plan to finish and do all features that I haven't done or finished so far.

## Author

- Website - [Veljko Spasic](https://veljko-spasic.rf.gd)
