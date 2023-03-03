// Simple markdown metadata parser.
import { statSync } from "fs";
import { readdir } from "fs/promises";

export type MDMetadata = {
  title: string;
  description: string;
  published: string;
}

export async function extractMetadata(path: string) {
  const dirs = (await readdir(`./src/routes/${path}`)).filter((file) =>
    statSync(`./src/routes/${path}/${file}`).isDirectory()
  );

  return await Promise.all(
    dirs.map(async (filePath) => {
      const { metadata } = await import(
        `../routes/${path}/${filePath}/index.mdx`
      );
      return metadata satisfies MDMetadata;
    })
  );
}
