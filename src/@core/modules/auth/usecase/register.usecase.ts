import { ErrorsParser } from '@/@core/@shared/errors/error.parser';
import { UseCase } from '@/@core/@shared/usecase/usecase.interface';
import { z } from 'zod';

export type RegisterUsecaseInput = {
  email?: string;
  password?: string;
  passwordConfirmation?: string;
};
export type RegisterUsecaseOutput = {
  errors?: string[];
};
export class RegisterUsecase
  implements UseCase<RegisterUsecaseInput, RegisterUsecaseOutput>
{
  async execute(input: RegisterUsecaseInput): Promise<RegisterUsecaseOutput> {
    // validate the input
    const schema = z.object({
      email: z.string().email(),
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters long'),
      passwordConfirmation: z.string().refine(
        (data) => {
          return data === input.password;
        },
        {
          message: 'Passwords do not match',
          path: ['passwordConfirmation'],
        }
      ),
    });

    try {
      schema.parse(input);
    } catch (error: any) {
      return {
        errors: ErrorsParser.parseFromZodError(error),
      };
    }
    // try {
    //   // call the register api
    // } catch (error: any) {
    //   const parsedErrors = ErrorsParser.parseFromApiError(error.message);
    //   return {
    //     errors: parsedErrors,
    //   };
    // }
    return {};
  }
}
