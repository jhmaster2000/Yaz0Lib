import * as fs from 'node:fs';
import { compressYaz0, decompressYaz0 } from './main.js';

export * from './main.js';

/**
 * Read a file from a path and compress it with Yaz0.
 *
 * @param path The filepath
 * @param alignment=0 The alignment
 * @param level=0 The compression level
 * @returns {string} The output path. Filename: filename + '.compressed' + original file extension
 */
export function compressYaz0File(path: string, alignment = 0, level = 0): string {
    const data = fs.readFileSync(path);
    const compressed = compressYaz0(data, alignment, level);
    const output = path.replace(/\.[^/.]+$/, '') + '.compressed' + path.slice(path.lastIndexOf('.'));
    fs.writeFileSync(output, compressed);

    return output;
}

/**
 * Read a file from a path and decompress it with Yaz0.
 *
 * @param path The filepath
 * @returns {string} The output path. Filename: filename + '.decompressed' + original file extension
 */
export function decompressYaz0File(path: string): string {
    const data = fs.readFileSync(path);
    const decompressed = decompressYaz0(data);
    const output = path.replace(/\.[^/.]+$/, '') + '.decompressed' + path.slice(path.lastIndexOf('.'));
    fs.writeFileSync(output, decompressed);

    return output;
}
