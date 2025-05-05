const express = require("express");
const app = express();
const port = 3000;

const pessoas = [
    {
        nome: 'Lucas Ferreira',
        genero:'Masculino',
        idade:21,
    },
    {
        nome: 'Ana Beatriz Lima',
        gênero: 'Feminino',
        idade: 18,
    },
    {
        nome: 'Rafael Gomes',
        genero: 'Masculino',
        idade: 24,  
    },
    {   
        nome: 'Rafael Gomes',
        genero: 'Masculino',
        idade: 24,
    },
    {
        nome: 'Carlos Eduardo Matos',
        genero: 'Masculino',
        idade: 30, 
    },
    {
        nome: 'Mariana Alves',
        genero: 'Feminino',
        idade: 27, 
    },
    {
        nome: 'Thiago Martins',
        genero: 'Masculino',
        idade: 22, 
    },
    {
        nome: 'Lara Menezes',
        genero: 'Feminino',
        idade: 19,
    },
    {
        nome: 'Igor Vasconcelos',
        genero: 'Masculino',
        idade: 25, 
    },
    {
        nome: 'Sofia Pereira',
        genero: 'Feminino',
        idade: 23,
    },
    {
        nome: 'Gabriel Souza',
        genero: 'Masculino',
        idade: 28, 
    },
    {
        nome: 'Renata Cruz',
        genero: 'Feminino',
        idade: 29, 
    },
    {
        nome: 'Daniel Monteiro',
        genero: 'Masculino',
        idade: 26,
    },
    {
        nome: 'Camila Duarte',
        genero: 'Feminino',
        idade: 21,  
    },
    {
        nome: 'Felipe Braga',
        genero: 'Masculino',
        idade: 19,
    },
    {
        nome: 'Isabela Nunes',
        genero: 'Feminino',
        idade: 24,                  
    },
    {
        nome: 'Bruno Oliveira',
        genero: 'Masculino',
        idade: 31, 
    },
    {
        nome: 'Vitória Silva',
        genero: 'Feminino',
        idade: 22,
    },
    {
        nome: 'Henrique Ramos',
        genero: 'Masculino',
        idade: 20, 
    },
    {
        nome: 'Letícia Moreira',
        genero: 'Feminino',
        idade: 26, 
    },
];
app.get("/pessoas", (req, res) => {
    const { campo, valor } = req.query;
  
    if (!campo || !valor) {
      return res.json(pessoas);
    }
  
    const resultado = pessoas.filter(pessoa => 
      pessoa[campo]?.toString().toLowerCase() === valor.toString().toLowerCase()
    );
  
    res.json(resultado);
  });
  
  app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
  });


    
