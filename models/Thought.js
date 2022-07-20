

const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {type: ObjectId, default: new ObjectId},
        reactionBody: {type: String, required: true},
        username:{type: String, required: true},
        createdAt: 
            { type: Date, default: Date.now },
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,

        },
        createdAt: 
            { type: Date, default: Date.now },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
        [{
            type: Schema.Types.ObjectId,
            ref: 'reaction'

        }]


    },
    {
        
        reactionCount: {
          virtuals: true,
        },
        id: false,
      }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;