import { Response, Request, NextFunction } from "express";
import { AppError } from "./appError";
import { productionError, developmentError } from "./utils";

const globalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    developmentError(err, res);
  }

  if (process.env.NODE_ENV === "production") {
    productionError(err, res);
  }
};

export { globalErrorHandler };
