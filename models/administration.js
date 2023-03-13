const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  type: { type: String, required: true },
  image: { type: String, required: true },
  strength: { type: Number, required: true },
  defense: { type: Number, required: true },
  speed: { type: Number, required: true },
  character: { type: String, required: true },


});

const pointSchema = new mongoose.Schema({
  jugador: { type: mongoose.Schema.Types.ObjectId, ref: 'players' },
  puntos: { type: Number, default: 0 },
});

const Player = mongoose.model('players', playerSchema);
const Point = mongoose.model('Point', pointSchema);

module.exports = { Player, Point };
