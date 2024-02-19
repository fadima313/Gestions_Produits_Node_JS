const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prix: { type: Number, required: true },
  description: { type: String },
  quantite: { type: Number, required: true },
  image: { type: String } // Vous pouvez également stocker l'URL de l'image ici
});

const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit;