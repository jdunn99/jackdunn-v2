import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";

export default component$(() => {
  useStylesScoped$(`
    article {
      height: calc(100vh - 18rem);
    }
  `);

  return (
      <article>
        <Slot />
      </article>
  );
});
