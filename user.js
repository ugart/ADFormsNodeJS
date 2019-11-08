const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  congregacao: {
    type: String,
    required: [true, "O campo congregação é obrigatório"]
  },

  nome: {
    type: String,
    required: [true, "O campo nome é obrigatório"],
    validate: {
      validator: function() {
        const nome = this.nome.split(" ")
        return nome.length >= 2
      },
      message: "O nome deve ser completo"
    }
  },

  idade: {
    type: String,
    required: [true, "O campo idade é obrigatório"]
  },

  email: {
    type: String,
    required: [true, "O campo email é obrigatório"],
    unique: true,
    validate: {
      validator: function() {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.exec(this.email.toLowerCase())
      },
      message: "E-mail inválido"
    }
  },

  telefone: {
    type: String,
    required: [true, "O campo telefone é obrigatório"]
  },

  bes: {
    type: String, 
    enum: ['Sim', 'Não'],
    required: [true, "O campo de batismo com Espírito Santo é obrigatório"]
  },

  sexo: {
    type: String, 
    enum: ['Masculino', 'Feminino'],
    required: [true, "O campo sexo é obrigatório"]
  },

  estadoCivil: {
    type: String,
    enum: ['Solteiro(a)', 'Casado(a)', 'Viúvo(a)', 'Divorciado(a)'],
    required: [true, "O campo estado civil é obrigatório"]
  },

  escolaridade: {
    type: String,
    enum: ['Não alfabetizado', 'Fundamental', 'Médio', 'Superior', 'Teologia'],
    required: [true, "O campo escolaridade é obrigatório"]
  },

  graduacao: String,
  posGraduacao: String,
  profissao: String,
  dataBatismoAguas: String,

  dataNascimento: {
    type: String,
    required: [true, "O campo de data de nascimento é obrigatório"]
  },

  trabalharCrianca: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 1 precisa ser respondida'
  },
    required: [true, "A pergunta 1 é obrigatória"]
  },

  trabalharCircOracao: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 2 precisa ser respondida'
  },
    required: [true, "A pergunta 2 precisa ser respondida"]
  },
  
  trabalharSecretaria: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 3 precisa ser respondida'
  },
    required: [true, "A pergunta 3 precisa ser respondida"]
  },

  trabalharAssistSocial: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 4 precisa ser respondida'
  },
    required: [true, "A pergunta 4 precisa ser respondida"]
  },

  trabalharComunicacao: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 5 precisa ser respondida'
  },
    required: [true, "A pergunta 5 precisa ser respondida"]
  },

  trabalharCozinha: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 6 precisa ser respondida'
  },
    required: [true, "A pergunta 6 precisa ser respondida"]
  },

  trabalharCantar: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 7 precisa ser respondida'
  },
    required: [true, "A pergunta 7 precisa ser respondida"]
  },

  trabalharConstCivil: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 8 precisa ser respondida'
  },
    required: [true, "A pergunta 8 precisa ser respondida"]
  },

  trabalharTrabAdolescente: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 9 precisa ser respondida'
  },
    required: [true, "A pergunta 9 precisa ser respondida"]
  },

  trabalharEvanMissoes: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 10 precisa ser respondida'
  },
    required: [true, "A pergunta 10 precisa ser respondida"]
  },

  trabalharTesouraria: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 11 precisa ser respondida'
  },
    required: [true, "A pergunta 11 precisa ser respondida"]
  },

  trabalharEstBibLar: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 12 precisa ser respondida'
  },
    required: [true, "A pergunta 12 precisa ser respondida"]
  },

  trabalharDecoracao: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 13 precisa ser respondida'
  },
    required: [true, "A pergunta 13 precisa ser respondida"]
  },

  trabalharSeguranca: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 14 precisa ser respondida'
  },
    required: [true, "A pergunta 14 precisa ser respondida"]
  },

  trabalharSom: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 15 precisa ser respondida'
  },
    required: [true, "A pergunta 15 precisa ser respondida"]
  },

  trabalharTrabJovens: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 16 precisa ser respondida'
  },
    required: [true, "A pergunta 16 precisa ser respondida"]
  },

  trabalharVisita: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 17 precisa ser respondida'
  },
    required: [true, "A pergunta 17 precisa ser respondida"]
  },

  trabalharProfessorEBD: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 18 precisa ser respondida'
  },
    required: [true, "A pergunta 18 precisa ser respondida"]
  },

  trabalharRecepcao: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 19 precisa ser respondida'
  },
    required: [true, "A pergunta 19 precisa ser respondida"]
  },

  trabalharRegencia: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 20 precisa ser respondida'
  },
    required: [true, "A pergunta 20 precisa ser respondida"]
  },

  trabalharZeladoria: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 21 precisa ser respondida'
  },
    required: [true, "A pergunta 21 precisa ser respondida"]
  },

  trabalharInstrumento: {
    type: String,
    enum: {
      values: ['Gostaria muito', 'Faria, se necessário fosse', 'Não gostaria'],
      message: 'A pergunta 22 precisa ser respondida'
  },
    required: [true, "A pergunta 22 precisa ser respondida"]
  },

  tipoInstrumentoPreferencia: String,
  trabalharOutros: String
})

const User = new mongoose.model("User", userSchema)

module.exports = User