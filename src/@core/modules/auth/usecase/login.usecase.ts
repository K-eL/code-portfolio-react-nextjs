import { UseCase } from '@/@core/@shared/usecase/usecase.interface';
import { z } from 'zod';
import { ErrorsParser } from '@core/@shared/errors/error.parser';

export type LoginUsecaseInput = {
  email?: string;
  password?: string;
};
export type LoginUsecaseOutput = {
  errors?: string[];
};
export class LoginUsecase
  implements UseCase<LoginUsecaseInput, LoginUsecaseOutput>
{
  async execute(input: LoginUsecaseInput): Promise<LoginUsecaseOutput> {
    // validate the input
    const schema = z.object({
      email: z.string().email(),
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters long'),
    });
    try {
      schema.parse(input);
    } catch (error: any) {
      return {
        errors: ErrorsParser.parseFromZodError(error),
      };
    }
    // try {
    //   // call the login api
    // } catch (error: any) {
    //   const parsedErrors = ErrorsParser.parseFromApiError(error.message);
    //   return {
    //     errors: parsedErrors,
    //   };
    // }
    return {};
  }
}
