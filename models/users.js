const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },

    email: { 
        type: String, 
        required: true, 
        unique: true 
    },

    password: { 
        type: String, 
        required: true 
    }
}, { 
    timestamps: true  //  createdAt and updatedAt automatic
});


const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;

