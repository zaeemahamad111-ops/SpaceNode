import { NextResponse } from 'next/server';
import { readStore, writeStore } from '@/lib/cms-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  mapEmbedUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  linkedinUrl: string;
}

const defaultContact: ContactInfo = {
  address: "First Floor, Velleparambil building, Kaloor, Cochin-17, Kerala",
  phone: '+91 88481 62343',
  email: "info@spacenodearchitects.com",
  mapUrl: "https://maps.google.com/?q=10.000353,76.290550",
  mapEmbedUrl: "https://maps.google.com/maps?q=10.000353,76.290550&t=&z=15&ie=UTF8&iwloc=&output=embed",
  instagramUrl: "https://www.instagram.com/space_node_architects?igsh=bG4wZjlnM2ozNXZ5&utm_source=qr",
  facebookUrl: "https://www.facebook.com/share/1Do9VspSmd/?mibextid=wwXIfr",
  linkedinUrl: "https://linkedin.com"
};

export async function GET() {
  const contact = readStore<ContactInfo>('contact.json', defaultContact);
  return NextResponse.json(contact);
}

export async function POST(request: Request) {
  try {
    const updated: ContactInfo = await request.json();
    writeStore('contact.json', updated);
    return NextResponse.json({ success: true, contact: updated });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update contact info' }, { status: 500 });
  }
}
