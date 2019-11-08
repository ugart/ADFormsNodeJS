const express = require("express")
const app = express()
const mongoose = require("mongoose")
const User = require("./user")

mongoose
  .connect(process.env.mongoDBUri)
  // .connect('mongodb://localhost')//quando precisar testar localmente
  .then(() => console.log("Conectado ao Mongodb..."))
  .catch(error => console.error("Não foi possível se comunicar ao Mongodb..."))

app.use(express.json())

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`api funcionando na porta ${port}`))

app.post("/api/usuarios", async (req, res) => {

  const newUser = new User(req.body)

  const userResult = await newUser.save().catch(error => error)

  if (userResult.errors) {
      const atributoComErro = Object.keys(userResult.errors)[0]
      return res.status(400).send({ 
        message: userResult.errors[atributoComErro].message 
      })
  }

  if (userResult.message) {
    return res.status(400).send({
      message: userResult.message
    })
  } else {
    return res.status(200).send({
      message: "Usuário salvo com sucesso!"
    })
  }

})
