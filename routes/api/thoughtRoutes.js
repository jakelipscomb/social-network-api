const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// /api/users
router.route('/api/thoughts').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/api/thoughts/:thoughtId').get(getSingleThought)
.put(updateThought)
.delete(deleteThought)

router.route('/api/thoughts/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction)

module.exports = router;