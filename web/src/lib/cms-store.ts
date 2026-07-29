import fs from 'fs';
import path from 'path';

const storeDir = path.join(process.cwd(), 'src', 'data', 'store');

function ensureDir() {
  if (!fs.existsSync(storeDir)) {
    fs.mkdirSync(storeDir, { recursive: true });
  }
}

export function readStore<T>(filename: string, fallback: T): T {
  try {
    ensureDir();
    const filePath = path.join(storeDir, filename);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(fallback, null, 2), 'utf-8');
      return fallback;
    }
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch (error) {
    console.error(`Error reading store file ${filename}:`, error);
    return fallback;
  }
}

export function writeStore<T>(filename: string, data: T): boolean {
  try {
    ensureDir();
    const filePath = path.join(storeDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error writing store file ${filename}:`, error);
    return false;
  }
}
