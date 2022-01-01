const Link = require('../models/Link');

const redirect = async (req, res) => {
  let titleWithoutCapitalize = req.params.title;
  let title = capitalize(titleWithoutCapitalize);
  try {
    let doc = await Link.findOne({ title });
    console.log(doc);
    res.redirect(doc.url);
  } catch (err) {
    res.send(err);
  }
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { redirect };
