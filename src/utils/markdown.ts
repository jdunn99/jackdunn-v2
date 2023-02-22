// Simple markdown metadata parser.
import fs from "fs";

export type MarkdownMetadata = {
  title?: string;
  published?: string;
  description?: string;
};

export const parseMarkdownMetadata = async (paths: string[]) => {
  if (!paths) return;
  const contents = await Promise.all(
    paths.map((path) =>
      fs.promises.readFile(`./src/routes/projects/${path}/index.mdx`, "utf8")
    )
  );

  console.log(contents);
  // const contents = await Promise.all(
  //   paths.map((path) => fs.promises.readFile(path, "utf8"))
  // );
  //
  return contents.map((content) => {
    // Match the metadata block at the beginning of the file
    const metadataMatch = /^---\n([\s\S]*?)\n---\n/.exec(content);

    if (!metadataMatch) throw new Error(`Metadata block not found in `);

    const yaml = metadataMatch[1];

    const parsed = parseYaml(yaml);
    return parsed;
  });
};

const parseYaml = (yaml: string) => {
  const lines = yaml.trim().split("\n");

  console.log(lines);
  const result: MarkdownMetadata = {};

  for (const line of lines) {
    const [key, value] = line.split(":");
    result[key as keyof typeof result] = JSON.parse(value);
  }

  return result;
};
