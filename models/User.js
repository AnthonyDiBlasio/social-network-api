const mongoose = require('mongoose');

//defining the mapping of the fields for the schema model UserSchema

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: {
        type: String,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

});
const User = mongoose.model('User', UserSchema);

const handleError = (err) => console.log(err);


User.find({}).exec((err, collection) => {
    if(collection.length === 0) {
    User.insertMany([],(insertErr) => {
        if (insertErr) {
          handleError(insertErr);
        }
      });
    }
});


module.exports = User;