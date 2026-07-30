import { NextResponse } from 'next/server';
import { readStore, writeStore } from '@/lib/cms-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export interface CareerRole {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  desc: string;
  active: boolean;
}

export async function GET() {
  const roles = readStore<CareerRole[]>('careers.json', []);
  return NextResponse.json(roles);
}

export async function POST(request: Request) {
  try {
    const newRole: CareerRole = await request.json();
    const roles = readStore<CareerRole[]>('careers.json', []);
    
    if (!newRole.id) {
      newRole.id = newRole.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
    
    roles.push(newRole);
    writeStore('careers.json', roles);
    return NextResponse.json({ success: true, role: newRole });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to create career role' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedRole: CareerRole = await request.json();
    const roles = readStore<CareerRole[]>('careers.json', []);
    
    const index = roles.findIndex((r) => r.id === updatedRole.id);
    if (index === -1) {
      return NextResponse.json({ success: false, message: 'Career role not found' }, { status: 404 });
    }
    
    roles[index] = updatedRole;
    writeStore('careers.json', roles);
    return NextResponse.json({ success: true, role: updatedRole });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update career role' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ success: false, message: 'Role ID required' }, { status: 400 });
    }
    
    let roles = readStore<CareerRole[]>('careers.json', []);
    roles = roles.filter((r) => r.id !== id);
    writeStore('careers.json', roles);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete career role' }, { status: 500 });
  }
}
