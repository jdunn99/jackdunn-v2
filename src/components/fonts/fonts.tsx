import type { HTMLAttributes } from "@builder.io/qwik";
import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./fonts.scss?inline";

interface FontProps extends HTMLAttributes<HTMLDivElement> {}

export const HeadingLarge = component$(({ ...rest }: FontProps) => {
  useStylesScoped$(styles);
  return (
    <h1 style="font-size: 6rem;" {...rest}>
      <Slot />
    </h1>
  );
});

export const Heading = component$(({ ...rest }: FontProps) => {
  useStylesScoped$(styles);
  return (
    <h1 {...rest}>
      <Slot />
    </h1>
  );
});

export const HeadingSmall = component$(({ ...rest }: FontProps) => {
  useStylesScoped$(styles);
  return (
    <h1
      style="font-size: 2rem; color: var(--accent-color); text-transform: uppercase;"
      {...rest}
    >
      <Slot />
    </h1>
  );
});

export const TextSmall = component$(({ ...rest }: FontProps) => {
  useStylesScoped$(styles);

  return null;
});

export const TextBase = component$(({ ...rest }: FontProps) => {
  useStylesScoped$(styles);

  return (
    <p {...rest}>
      <Slot />
    </p>
  );
});

