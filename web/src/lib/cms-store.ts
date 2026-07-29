export function readStore<T>(filename: string, fallback: T): T {
  if (typeof window !== 'undefined') {
    return fallback;
  }
  try {
    // Dynamic require so bundlers do not try to package 'fs' for the client browser
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const path = require('path');

    const storeDir = path.join(process.cwd(), 'src', 'data', 'store');
    if (!fs.existsSync(storeDir)) {
      fs.mkdirSync(storeDir, { recursive: true });
    }
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
  if (typeof window !== 'undefined') {
    return false;
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const path = require('path');

    const storeDir = path.join(process.cwd(), 'src', 'data', 'store');
    if (!fs.existsSync(storeDir)) {
      fs.mkdirSync(storeDir, { recursive: true });
    }
    const filePath = path.join(storeDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error writing store file ${filename}:`, error);
    return false;
  }
}
