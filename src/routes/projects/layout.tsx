import { component$, Slot, useStyles$ } from "@builder.io/qwik";

export default component$(() => {
  useStyles$(`
    article {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

    }

    div {
      font-size: 1.8rem;
      color: var(--foreground-accent-color);
    }

    h1 {
      font-size: 3.6rem;
    }

    strong {
      color: var(--foreground-color);
    }

    h1, h2, h3 {
      color: var(--foreground-color);
      font-weight: bold;
    }
  `);


  return (
    <article>
      <Slot />
    </article>
  );
});
