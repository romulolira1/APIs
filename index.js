const express = require("express") //chamando o módulo e guardando na constante
const axios = require("axios")

const app = express() // inicializando a constante

app.listen("3000")
// middleware
app.use(express.json())
//listen fica ouvindo o navegador


// app.route("/").get((req,res)=> res.send("Hello"))
// app.route("/sobre").get((req,res)=> res.send("Hello sobre"))
//route é umafunção do express que trabalha com rotas

// MÉTODO POST

// app.route("/").post( (req,res) => res.send(req.body))
// res, usado para responder
// req, vem com o conteúdo da requisição

// MÉTODO PUT
// let author = "Rômulo"

// app.route("/").get( (req,res) => res.send(author))

// app.route("/").put( (req,res) => {
//     author = req.body.author
//     res.send(author)
// })
// DELETE : Recebe geralmente algum ID ou algum identificador para apagar alguma coisa

// let author="Rômulo"
// app.route("/:identificador").delete( (req,res) => {
//     author = ""
//     res.send(req.params.identificador)
// })
// quando a gente passa uma varável pela URL (chamamos de params)

// app.route("/").post( (req, res) => {
//     const {nome, cidade} = req.body
//     res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
// })
// app.route("/").get( (req, res) => res.send("Olá"))
// app.route("/:nome").get( (req, res) => res.send(req.params.nome))

// app.route("/").get( (req, res) => res.send(req.query))

// app.route("/about/user").get( (req,res) => res.send( req.query))

app.route("/").get( (req, res) => {
    axios.get("https://api.github.com/users/romulolira1")
.then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})