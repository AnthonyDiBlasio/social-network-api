const { Schema, model } = require('mongoose');

//defining the mapping of the fields for the schema model UserSchema

const userSchema = new Schema(
  {
    username: { type: String, 
      required: true, 
      unique: true, 
      trim: true },
    email: {
        type: String,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought'
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
    ],
  },
    {
      // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
      // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );

  userSchema
    .virtual('friendcount')

    .get(function() {
      return this.friends.length;
    });

  const User = model('user', userSchema);




module.exports = User;