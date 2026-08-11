import { NextResponse } from 'next/server';
import { readStore, writeStore } from '@/lib/cms-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  clientImage?: string;
}

export async function GET() {
  const testimonials = readStore<TestimonialItem[]>('testimonials.json', []);
  return NextResponse.json(testimonials);
}

export async function POST(request: Request) {
  try {
    const newItem: TestimonialItem = await request.json();
    const testimonials = readStore<TestimonialItem[]>('testimonials.json', []);

    if (!newItem.id) {
      newItem.id = Date.now().toString();
    }

    const updated = [newItem, ...testimonials];
    writeStore('testimonials.json', updated);

    return NextResponse.json({ success: true, testimonial: newItem });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to create testimonial' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedItem: TestimonialItem = await request.json();
    const testimonials = readStore<TestimonialItem[]>('testimonials.json', []);

    const index = testimonials.findIndex((t) => t.id === updatedItem.id);
    if (index === -1) {
      return NextResponse.json({ success: false, message: 'Testimonial not found' }, { status: 404 });
    }

    testimonials[index] = updatedItem;
    writeStore('testimonials.json', testimonials);

    return NextResponse.json({ success: true, testimonial: updatedItem });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update testimonial' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, message: 'Testimonial ID required' }, { status: 400 });
    }

    const testimonials = readStore<TestimonialItem[]>('testimonials.json', []);
    const filtered = testimonials.filter((t) => t.id !== id);

    writeStore('testimonials.json', filtered);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete testimonial' }, { status: 500 });
  }
}
