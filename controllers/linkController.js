const { listenerCount } = require('../models/Link');
const Link = require('../models/Link');

const redirect = async (req, res, next) => {
  let titleWithoutCapitalize = req.params.title;
  let title = capitalize(titleWithoutCapitalize);
  if (title.includes('-')) {
    title = title.replace(/-/g, ' ');
  }
  console.log(title);
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
    let docs = await Link.find();
    res.render('all', { links: docs });
  } catch (err) {
    res.send(err);
  }
};

const addLink = async (req, res) => {
  let link = new Link(req.body);

  try {
    let doc = await link.save();
    res.redirect('/links/all');
  } catch (err) {
    res.render('add', { err, body: req.body });
  }
};

const deleteLink = async (req, res) => {
  let id = req.params.id;
  if (!id) {
    id = req.body.id;
  }

  try {
    await Link.findByIdAndDelete(id);
    res.send(id);
  } catch (err) {
    res.status(404).send(err);
  }
};

const loadLink = async (req, res) => {
  let id = req.params.id;
  try {
    let doc = await Link.findById(id);
    res.render('edit', { err: false, body: doc });
  } catch (err) {
    res.status(404).send(err);
  }
};

const editLink = async (req, res) => {
  let link = {};
  link.title = req.body.title;
  link.description = req.body.description;
  link.url = req.body.url;

  let id = req.params.id;
  if (!id) {
    id = req.body.id;
  }

  try {
    let doc = await Link.findByIdAndUpdate(id, link);
    res.redirect('/links/all');
  } catch (err) {
    res.render('edit', { err, body: req.body });
  }
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  redirect,
  addLink,
  allLinks,
  deleteLink,
  loadLink,
  editLink,
};
