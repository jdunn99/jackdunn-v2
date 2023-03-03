import { component$, Resource, useStylesScoped$ } from "@builder.io/qwik";
import { useMarkdown } from "~/utils/hooks/useMarkdown";
import type { MDMetadata } from "~/utils/markdown";
import { Animated } from "../animated";
import { Heading } from "../fonts/fonts";
import { PostItem } from "../post/post";

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

export const MarkdownItems = component$(({ heading }: { heading: string }) => {
  const metadata = useMarkdown(heading.toLowerCase());

  return (
    <Resource
      value={metadata}
      onResolved={(data) => {
        if (typeof data === "undefined") return <></>;

        // parse out the first index for the featured item.
        const [featured, ...rest] = data;

        return (
          <div class="container">
            <Heading style="margin: 2rem 0">{heading}</Heading>
            <Animated time="1s">
              <PostItem post={featured} featured />
            </Animated>
            <div class="post-grid">
              {rest.map((post, index) => (
                <Animated key={index} time={`${index * 0.25 + 0.1}s`}>
                  <PostItem post={post} />
                </Animated>
              ))}
            </div>
          </div>
        );
      }}
    />
  );
});
