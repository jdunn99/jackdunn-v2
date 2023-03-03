import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { MDMetadata } from "~/utils/markdown";

interface MarkdownTitleProps {
  metadata: MDMetadata;
}

export const MarkdownTitle = component$(({ metadata }: MarkdownTitleProps) => {
  useStylesScoped$(`
    .markdown-title {
      width: 100%;
      margin: 4rem 0;
    }

    .markdown-title-heading {
     display: flex;
     align-items: center;
    }
    
    .markdown-title-heading h1 {
      flex: 1;
    }
  `);

  return (
    <div class="markdown-title">
      <div class="markdown-title-heading">
        <h1>{metadata.title}</h1>
        <div>{metadata.published}</div>
      </div>
      <div>{metadata.description}</div>
    </div>
  );
});
