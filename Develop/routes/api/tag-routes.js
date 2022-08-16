const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagTable = await Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(tagTable)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagTable = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    res.status(200).json(tagTable)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {
    const addData = await Tag.create(req.body)
    res.status(200).json(addData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({"message": `Updated tag ${req.params.id}.`})
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({"message": `Successfully deleted tag ${req.params.id}`})
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
