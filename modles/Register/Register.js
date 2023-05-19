const mongoose = require('mongoose')

const registerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        mobile: {
            type: Number,
            required: true,
            default: 0
        },
        address: {
            type: String,
            required: [true, "Please enter your address"],
        },
        email: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const register = mongoose.model('Register', registerSchema);

module.exports = Register;