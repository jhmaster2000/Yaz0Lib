import path from 'node:path';
import { decompressYaz0File, compressYaz0File } from '../dist/index.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const outDecompressedPath = decompressYaz0File(path.resolve(__dirname, 'compressed_origin.szs'));
compressYaz0File(outDecompressedPath);

console.log('Done!');
