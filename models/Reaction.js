const { Schema, Types } = require('mongoose');

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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

module.exports = reactionSchema;
