import { NextResponse } from 'next/server';
import { readStore, writeStore } from '@/lib/cms-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  image: string;
  highlights: string[];
  desc: string[];
}

export async function GET() {
  const team = readStore<TeamMember[]>('team.json', []);
  return NextResponse.json(team);
}

export async function POST(request: Request) {
  try {
    const member: TeamMember = await request.json();
    const team = readStore<TeamMember[]>('team.json', []);

    if (!member.slug) {
      member.slug = member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    const updated = [...team, member];
    writeStore('team.json', updated);

    return NextResponse.json({ success: true, member });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to create team member' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedMember: TeamMember = await request.json();
    const team = readStore<TeamMember[]>('team.json', []);

    const index = team.findIndex((m) => m.slug === updatedMember.slug);
    if (index === -1) {
      return NextResponse.json({ success: false, message: 'Team member not found' }, { status: 404 });
    }

    team[index] = updatedMember;
    writeStore('team.json', team);

    return NextResponse.json({ success: true, member: updatedMember });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update team member' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ success: false, message: 'Slug required' }, { status: 400 });
    }

    const team = readStore<TeamMember[]>('team.json', []);
    const filtered = team.filter((m) => m.slug !== slug);

    writeStore('team.json', filtered);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete team member' }, { status: 500 });
  }
}
