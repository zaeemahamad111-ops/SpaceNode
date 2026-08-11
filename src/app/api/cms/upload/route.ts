import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ success: false, message: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const sanitizedOriginal = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, '-');
    const filename = `${Date.now()}-${sanitizedOriginal}`;

    // 1. Try uploading to Supabase Storage ('media' bucket)
    try {
      const { data, error } = await supabase.storage
        .from('media')
        .upload(filename, buffer, {
          contentType: file.type || 'image/jpeg',
          upsert: true,
        });

      if (!error && data) {
        const { data: publicUrlData } = supabase.storage
          .from('media')
          .getPublicUrl(data.path);

        if (publicUrlData?.publicUrl) {
          return NextResponse.json({
            success: true,
            url: publicUrlData.publicUrl,
            name: filename,
            provider: 'supabase',
          });
        }
      }
    } catch (supabaseErr) {
      console.warn('Supabase storage upload attempt skipped:', supabaseErr);
    }

    // 2. Try writing to local filesystem (works on local dev)
    try {
      const reqFs = require('fs');
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      if (!reqFs.existsSync(uploadsDir)) {
        reqFs.mkdirSync(uploadsDir, { recursive: true });
      }

      const filePath = path.join(uploadsDir, filename);
      reqFs.writeFileSync(filePath, buffer);

      return NextResponse.json({
        success: true,
        url: `/uploads/${filename}`,
        name: filename,
        provider: 'local',
      });
    } catch (fsErr) {
      console.warn('Local fs write failed (Serverless read-only environment):', fsErr);
    }

    // 3. Fallback to Data URL for Vercel serverless read-only environment
    const mimeType = file.type || 'image/jpeg';
    const base64 = buffer.toString('base64');
    const dataUrl = `data:${mimeType};base64,${base64}`;

    return NextResponse.json({
      success: true,
      url: dataUrl,
      name: filename,
      provider: 'base64',
    });
  } catch (error) {
    console.error('File upload error:', error);
    return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
  }
}
