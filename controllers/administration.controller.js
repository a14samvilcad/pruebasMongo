const { Player, Point } = require('../models/administration');

const administrationCtrl = {};

administrationCtrl.getPlayers = async (req, res) => {
  const players = await Player.find();
  res.json(players);
};

administrationCtrl.createPlayer = async (req, res) => {
  const player = new Player({
    nombre: req.body.nombre,
    correo: req.body.correo,
  });
  await player.save();
  res.json({
    status: 'Player creado',
  });
};

administrationCtrl.getPoints = async (req, res) => {
  const points = await Point.find().populate('jugador');
  res.json(points);
};

administrationCtrl.createPoint = async (req, res) => {
  const point = new Point({
    jugador: req.body.jugador,
    puntos: req.body.puntos,
  });
  await point.save();
  res.json({
    status: 'Puntos creados',
  });
};

module.exports = administrationCtrl;
