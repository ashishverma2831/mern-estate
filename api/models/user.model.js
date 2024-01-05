const mongoose = require('mongoose');
const {Schema,model} = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {
          type: String,
          required: true,
          unique: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        }
      },
      { timestamps: true }
)

module.exports = model('User',userSchema);
// const User = model('User',userSchema);
// export default User;