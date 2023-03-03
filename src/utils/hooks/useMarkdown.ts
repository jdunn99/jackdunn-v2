import { useResource$ } from "@builder.io/qwik";
import { extractMetadata } from "../markdown";
import type { MDMetadata } from "../markdown";

export function useMarkdown(path: string) {
  return useResource$<MDMetadata[] | undefined>(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return await extractMetadata(path);
  });
}
