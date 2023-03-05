import { component$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";
import { MarkdownItems } from "~/components/markdown/markdown";

export default component$(() => {
  const { menu } = useContent();

  return <MarkdownItems menu={menu} />;
});
