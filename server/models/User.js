const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bycrypt = require("bcryptjs");
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true },
);

UserSchema.statics.login = async function (email, password) {
  const isValidUser = await this.findOne({ email });
  if (!isValidUser) {
    throw new Error("user invalid");
  }
  const isValidPassword = await bycrypt.compare(password, isValidUser.password);
  if (isValidPassword) {
    return isValidUser;
  } else {
    throw new Error("Wrong Password");
  }
};
UserSchema.statics.register = async function (name, email, password) {
  const isExistUser = await this.findOne({ email });
  if (isExistUser) {
    throw new Error("user already exists");
  }
  const hashingPassword = await bycrypt.hash(password, 10);
  const user = await this.create({
    name,
    email,
    password: hashingPassword,
  });
  return user;
};

module.exports = mongoose.model("User", UserSchema);
