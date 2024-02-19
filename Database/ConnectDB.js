const mongoose = require("mongoose");
async function connectdb() {
  mongoose
    .connect(
      "mongodb+srv://souleymane:zGmgRUUS5w4mONqC@cluster0.srpd4jb.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));
}

module.exports = connectdb;