// Simple markdown metadata parser.
import fs from "fs";
import readline from "readline";

export type MarkdownMetadata = {
  title?: string;
  published?: string;
  description?: string;
};

/**
 * Parses metadata in YAML format from a list of Markdown files
 * @param paths - List of file paths to read Markdown files from
 * @returns A Promise that resolves to an array of objects representing the parsed metadata for each file
 */
export const parseMarkdownMetadata = async (paths: string[]) => {
  if (!paths) return;
  return await Promise.all(
    paths.map((path) => {
      const stream = fs.createReadStream(
        `./src/routes/projects/${path}/index.mdx`,
        "utf8"
      );
      const lines = readline.createInterface({
        input: stream,
        crlfDelay: Infinity,
      });

      return parseYaml(lines);
    })
  );
};

/**
 * Parse metadata block from a stream of lines using '---' as a delimiter.
 * @param rl - The readline interface for the stream of lines.
 * @returns The parsed metadata object.
 */
const parseYaml = async (lines: readline.Interface) => {
  const metadata: MarkdownMetadata = {};
  let isReadingMetadata: boolean = false;

  for await (const line of lines) {
    // if the line is --- toggle reading metadata on/off
    if (line === "---") {
      if (isReadingMetadata) break;
      else isReadingMetadata = true;
    } else if (isReadingMetadata) {
      // we are reading metadata
      const [key, value] = line.split(":");
      if (typeof key === "undefined") throw new Error("Key not found");
      if (typeof value === "undefined") throw new Error("Value not found");

      metadata[key as keyof typeof metadata] = JSON.parse(value);
    }
  }

  return metadata;
};
