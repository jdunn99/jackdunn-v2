import { component$, Slot } from "@builder.io/qwik";
import { Layout } from "~/components/layout/layout";
export default component$(() => {
  return (
    <Layout>
      <article>
        <Slot />
      </article>
    </Layout>
  );
});
