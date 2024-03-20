// the route is /api/auth/login
import { loginFormSchema } from '@core/modules/auth/LoginValidations';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('request', request)
  try {
    const { email, password } = loginFormSchema.parse(await request.json());
    return new NextResponse('It works');
  } catch (err: any) {
    // Return error message as response json
    return new NextResponse(err.message, { status: 400 });
  }
}