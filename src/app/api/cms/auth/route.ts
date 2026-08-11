import { NextResponse } from 'next/server';
import { readStore } from '@/lib/cms-store';

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();
    const settings = readStore<{ passcode: string }>('settings.json', { passcode: 'spacenode2026' });

    if (passcode === settings.passcode) {
      const response = NextResponse.json({ success: true, message: 'Authenticated successfully' });
      response.cookies.set('sn_admin_token', 'spacenode_authenticated_session', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });
      return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid passcode. Access denied.' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out' });
  response.cookies.delete('sn_admin_token');
  return response;
}
