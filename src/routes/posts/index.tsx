import { component$ } from "@builder.io/qwik";
import { MarkdownItems } from "~/components/markdown/markdown";

export default component$(() => {
  return <MarkdownItems heading="Posts" />;
});
