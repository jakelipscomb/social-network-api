const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    buildSuccess: {
      type: Boolean,
      default: true,
    },
    thoughtText: {
      type: String,
      required: true,
      minLength: 15,
      maxLength: 500,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('getThoughts')
  .get(function () {
    return this.thoughts.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
