import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HomePage } from "~/pages/home";

export default component$(() => {
  return <HomePage />;
});

export const head: DocumentHead = {
  title: "Jack Dunn",
  meta: [
    {
      name: "description",
      content: "Full stack developer from Selbyville, DE",
    },
  ],
};
