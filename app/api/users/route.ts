import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

interface UserRequestBody {
  fullName: string;
  email: string;
  password: string;
}

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.log('err', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: UserRequestBody = await req.json();

    if (!body.fullName || !body.email || !body.password) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log('err', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
