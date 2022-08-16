const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const catTable = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(catTable);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const catTable = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    res.status(200).json(catTable)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {
    const addData = await Category.create(req.body)
    res.status(200).json(addData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({"message": `Updated category ${req.params.id}.`})
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({"message": `Successfully deleted category ${req.params.id}`})
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
