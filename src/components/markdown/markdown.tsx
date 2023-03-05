import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { ContentMenu } from "@builder.io/qwik-city";
import { normalizeMenu } from "~/utils/markdown";
import { Animated } from "../animated";
import { Heading } from "../fonts/fonts";
import { PostItem } from "../post/post";

type MDMetadata = {
  title: string;
  description: string;
  published: string;
  slug: string;
};

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

export const MarkdownItems = component$(({ menu }: { menu?: ContentMenu }) => {
  const { title, items } = normalizeMenu(menu);

  // parse out the first index for the featured item.
  const [featured, ...rest] = items;

  return (
    <div class="container">
      <Heading style="margin: 2rem 0">{title}</Heading>
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
});
