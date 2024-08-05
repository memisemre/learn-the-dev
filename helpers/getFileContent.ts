import { promises as fs } from 'fs';
import path from 'path';

export async function getFileContent(slugArray: string[]): Promise<string | null> {
  const slugPath = slugArray.join('/');
  const filePath = path.join(process.cwd(), '_docs', `${slugPath}.mdx`);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return fileContents;
  } catch (error) {
    console.error(`Error reading file at ${filePath}:`, error);
    return null;
  }
}
