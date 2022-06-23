//o módulo express retorna uma função que instancia o espress
const express = require("express")


//A função express cria uma instancia de todo o framework em app
const app = express()


const porta = 3001
app.listen(porta, function(){
    console.log(`Servidor roddando na porta ${porta}`)
})
//dados q vem do front fica na funcao req, o q volta vai no resp.
app.get("/data", function(req, resp){

    resp.send(
        
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Meus livros favoritos </h1>
            </body>
        </html>
    `
      
    )


})

app.get("/hora", function(req, resp){
    let horaCerta = new Date()
    resp.send(
        
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Hora Certa ${horaCerta.get()} </h1>
            </body>
        </html>
    `
      
    )


})
app.get("/usuarios", function(req, resp){
    
    //const users = ['felisberto', 'Albertina', 'Annabella']
    const user = {
        nome: "Robson",
        cpf: "05064026900",
        telefone: "997370380",
    }
    resp.json({user})


})