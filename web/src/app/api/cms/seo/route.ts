import { NextResponse } from 'next/server';
import { readStore, writeStore } from '@/lib/cms-store';

export async function GET() {
  const seo = readStore('seo.json', {});
  return NextResponse.json(seo);
}

export async function POST(request: Request) {
  try {
    const updated = await request.json();
    writeStore('seo.json', updated);
    return NextResponse.json({ success: true, seo: updated });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update SEO tags' }, { status: 500 });
  }
}
