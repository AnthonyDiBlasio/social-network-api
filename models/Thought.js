const { Schema, model } = require('mongoose');

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
        reactions: [{
            type: Schema.Types.ObjectId,
            ref: 'reaction'

        }]


    }
)

const Thought = model('thought', thoughtSchema);

module.exports = Thought;