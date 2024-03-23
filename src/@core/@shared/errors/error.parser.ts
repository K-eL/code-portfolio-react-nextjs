export class ErrorsParser {
  // Parse the error string and return an array of error messages
  // The error string is in the format of:
  // {
  //   "email": [
  //     "email is required"
  //   ],
  //   "password": [
  //     "password is required",
  //     "password must be at least 6 characters"
  //   ]
  // }
  // The output should be an array of strings like:
  // [
  //   "Email is required",
  //   "Password is required",
  //   "Password must be at least 6 characters"
  // ]
  static parseFromApiError(error: string): string[] {
    const err = JSON.parse(error);
    const errorItems: string[] = [];
    for (let field in err) {
      if (err.hasOwnProperty(field)) {
        err[field].forEach((error: string) => {
          error = error.charAt(0).toUpperCase() + error.slice(1);
          errorItems.push(`${error}`);
        });
      }
    }
    return errorItems;
  }

  // Parse the error string and return an array of error messages
  // The error string is in the format of:
  // [
  //   {
  //     "path": [
  //       "email"
  //     ],
  //     "message": "email is required",
  //     "type": "required",
  //     "label": "email"
  //   },
  //   {
  //     "path": [
  //       "password"
  //     ],
  //     "message": "password is required",
  //     "type": "required",
  //     "label": "password"
  //   },
  //   {
  //     "path": [
  //       "password"
  //     ],
  //     "message": "password must be at least 6 characters",
  //     "type": "min",
  //     "label": "password"
  //   }
  // ]
  // The output should be an array of strings like:
  // [
  //   "Email is required",
  //   "Password is required",
  //   "Password must be at least 6 characters"
  // ]
  static parseFromZodError(error: any): string[] {
    const parsedErrors = JSON.parse(error);
    return parsedErrors.map((error: any) => error.message);
  }
}
