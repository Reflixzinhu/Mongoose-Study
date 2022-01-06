const { listenerCount } = require('../models/Link');
const Link = require('../models/Link');

const redirect = async (req, res, next) => {
  let titleWithoutCapitalize = req.params.title;
  let title = capitalize(titleWithoutCapitalize);
  try {
    let doc = await Link.findOne({ title });
    if (doc) {
      res.redirect(doc.url);
    } else {
      next();
    }
  } catch (err) {
    res.send(err);
  }
};

const allLinks = async (req, res) => {
  try {
    let links = await Link.find();
    res.render('all', { links });
  } catch (err) {
    res.send(err);
  }
};

const addLink = async (req, res) => {
  let link = new Link(req.body);

  try {
    let doc = await link.save();
    res.send('Link Adicionado com Sucesso!');
  } catch (err) {
    res.render('add', { err, body: req.body });
  }
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { redirect, addLink, allLinks };
