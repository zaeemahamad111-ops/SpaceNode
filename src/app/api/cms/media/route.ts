import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(uploadsDir);
    const mediaFiles = files
      .filter((file) => !file.startsWith('.'))
      .map((filename) => {
        const stats = fs.statSync(path.join(uploadsDir, filename));
        return {
          filename,
          url: `/uploads/${filename}`,
          size: stats.size,
          createdAt: stats.birthtime,
        };
      })
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json(mediaFiles);
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to list media' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (!filename) {
      return NextResponse.json({ success: false, message: 'Filename required' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'public', 'uploads', path.basename(filename));
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete file' }, { status: 500 });
  }
}
