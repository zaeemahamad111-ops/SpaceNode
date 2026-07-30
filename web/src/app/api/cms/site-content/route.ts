import { NextResponse } from 'next/server';
import { readStore, writeStore } from '@/lib/cms-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const content = readStore('site-content.json', {});
  return NextResponse.json(content);
}

export async function POST(request: Request) {
  try {
    const updated = await request.json();
    writeStore('site-content.json', updated);
    return NextResponse.json({ success: true, content: updated });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update site content' }, { status: 500 });
  }
}
