const Photo = require("../models/Photo");

exports.createPhoto = (req, res, next) => {
  delete req.body._id;
  const photo = new Photo({
    ...req.body,
  });
  photo
    .save()
    .then(() => res.status(201).json({ message: "Photo enregistrer !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyPhoto = (req, res, next) => {
  Photo.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deletePhoto = (req, res, next) => {
  Photo.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOnePhoto = (req, res, next) => {
  Photo.findOne({ _id: req.params.id })
    .then((photo) => res.status(200).json(photo))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllPhoto = (req, res, next) => {
  Photo.find()
    .then((photos) => res.status(200).json(photos))
    .catch((error) => res.status(400).json({ error }));
};
