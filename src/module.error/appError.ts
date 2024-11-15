interface IAppErrorArgs {
  message: string;
  statusCode: number;
}
class AppError extends Error {
  public status: string;
  public statusCode: number;
  public isOperational: boolean;

  constructor({ message, statusCode }: IAppErrorArgs) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    // Error.captureStackTrace(this, this.constructor); // why?
  }
}

export { AppError, IAppErrorArgs };
