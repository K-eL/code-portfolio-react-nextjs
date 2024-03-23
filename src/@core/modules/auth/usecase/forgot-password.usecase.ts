import { ErrorsParser } from '@/@core/@shared/errors/error.parser';
import { UseCase } from '@/@core/@shared/usecase/usecase.interface';
import { z } from 'zod';

export type ForgotPasswordUsecaseInput = {
  email?: string;
};
export type ForgotPasswordUsecaseOutput = {
  errors?: string[];
};
export class ForgotPasswordUsecase
  implements UseCase<ForgotPasswordUsecaseInput, ForgotPasswordUsecaseOutput>
{
  async execute(
    input: ForgotPasswordUsecaseInput
  ): Promise<ForgotPasswordUsecaseOutput> {
    const schema = z.object({
      email: z.string().email(),
    });

    try {
      schema.parse(input);
    } catch (error: any) {
      return {
        errors: ErrorsParser.parseFromZodError(error),
      };
    }
    // try {
    //   // call the forgot password api
    // } catch (error: any) {
    //   const parsedErrors = ErrorsParser.parseFromApiError(error.message);
    //   return {
    //     errors: parsedErrors,
    //   };
    // }
    return {};
  }
}
