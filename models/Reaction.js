const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Boolean,
      default: false,
    },
    reactionBody: {
        type: String,
        required: true,
        minLength: 15,
        maxLength: 500,
    },
    username: {
      type: Boolean,
      default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

reactionSchema
  .virtual('getReactions')
  .get(function () {
    return this.reaction.length;
  });

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
