import { Schema, model, Document } from "mongoose";

interface IUserInput {
  name: {
    first: string;
    last: string;
  };
  email: string;
  password: string;
  phone: string;
  address: {
    city: string;
    street: string;
    zip: string;
  };
  photo?: string;
}

interface IUserDoc extends IUserInput, Document {
  role: string;
}

const UserSchema = new Schema<IUserDoc>({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    city: { type: String, required: true },
    street: { type: String, required: true },
    zip: { type: String, required: true },
  },
  photo: { type: String },
  role: { type: String, default: "user" },
});

const User = model<IUserDoc>("User", UserSchema);

export { User, IUserInput, IUserDoc };
