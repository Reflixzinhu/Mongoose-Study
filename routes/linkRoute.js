const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

router.get('/all', linkController.allLinks);
router.get('/:title', linkController.redirect);
router.get('/add', (req, res) => {
  res.render('add', { err: false, body: {} });
});

router.post(
  '/new',
  express.urlencoded({ extended: true }),
  linkController.addLink
);

router.delete('/:id', linkController.deleteLink);
router.delete(
  '/',
  express.urlencoded({ extended: true }),
  linkController.deleteLink
);

module.exports = router;
