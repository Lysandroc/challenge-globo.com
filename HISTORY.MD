# Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)

### No boilerplate was used. It was necessary to configure the project manually.
## Installation

**Clone this repo:**

```bash
$ git clone git@github.com:SelecaoGlobocom/Lysandro_Braga.git
$ cd Lysandro_Braga
```

**Install docker to run a container (not required at dev env):**

Linux
```bash
$ sudo apt-get install docker docker-compose
```

macOs
```bash
$ brew install docker
```

**Install the dependencies:**

```bash
$ npm install
```

## Development Workflow


**Start a live-reload development server**
```bash
$ npm run dev
```
> This command listen your code and every changes will update the app. (Livereload)

**Deploy to a container**
```bash
$ docker build app
$ docker build build
```
or (if you prefer to be quick)
```bash
$ npm run docker
```
> This deploy the app to a container that runs nodejs and mongodb

## Decisões
> 

## License

MIT