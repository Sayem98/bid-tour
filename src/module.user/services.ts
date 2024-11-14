import { User } from "./models/User";
import type { IUserInput } from "./models/User";

export const createUser = async (data: IUserInput) => {
  //create a new user
  const user = new User(data);
  //save the user
  await user.save();
  return user;
};
