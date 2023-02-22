import { component$, Resource, useResource$, useTask$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";
import { statSync } from "fs";
import { readdir } from "fs/promises";
import type { MarkdownMetadata } from "~/utils/markdown";
import { parseMarkdownMetadata } from "~/utils/markdown";

export default component$(() => {
  const menu = useContent();

  const test = useResource$<MarkdownMetadata[] | undefined>(
    async ({ cleanup }) => {
      const controller = new AbortController();
      cleanup(() => controller.abort());

      const result = await readdir("./src/routes/projects");
      const paths = result.filter((file) =>
        statSync(`./src/routes/projects/${file}`).isDirectory()
      );

      return parseMarkdownMetadata(paths);
    }
  );

  return (
    <div>
      <Resource
        value={test}
        onResolved={(data) => {
          return (
            <div>
              {data?.map((item: MarkdownMetadata, index) => (
                <div key={index}>{item.title}</div>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
});
