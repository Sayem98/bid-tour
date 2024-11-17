import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { catchAsync } from "../utils/catchAsync";
import { createUser, getUser } from "../module.user/services";
import { AppError } from "../module.error/appError";

const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    //create a new user
    const user = await createUser(req.body);
    console.log(process.env.JWT_SECRET!);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // count()
    //   .then((count) => {
    //     console.log(count);
    //   })
    //   .catch((err) => {});

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      token,
      data: {
        user: user,
      },
    });
  }
);

const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(
        new AppError({
          message: "Please provide email and password",
          statusCode: 400,
        })
      );
    }
    //check if email and password exist
    const user = await getUser(email, true);

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(
        new AppError({
          message: "Invalid email or password",
          statusCode: 401,
        })
      );
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({
      status: "success",
      message: "Login successful",
      token,
      data: {
        user: user,
      },
    });
  }
);

// count 1M
const count = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1M");
    }, 10000);
  });
};

export { signup, login };
