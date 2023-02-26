import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";

interface ButtonProps {
  outlined?: boolean;
  href: string;
}

export const Button = component$(({ href, outlined }: ButtonProps) => {
  useStylesScoped$(`
    a {
      font-size: 1.8rem;
      border-radius: 1rem;
      background: var(--accent-color);
      color: var(--background-color);
      padding: 1rem 2rem;
      text-decoration: none;
      font-weight: 550;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .outlined {
      background: var(--background-color);
      border: 0.2rem solid var(--accent-color);
      color: var(--accent-color);
    }

    a:hover {
      background: var(--tertiary-color);
    }

    .outlined:hover {
      color: var(--tertiary-color);
      border: 0.2rem solid var(--tertiary-color);
      background: var(--background-color);
    }
  `);

  return (
    <a href={href} class={`${outlined ? "outlined" : ""}`}>
      <Slot />
    </a>
  );
});
