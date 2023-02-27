import type { HTMLAttributes } from "@builder.io/qwik";
import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./fonts.scss?inline";

type Variant = "small" | "base" | "large";
interface FontProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

export const Heading = component$(
  ({ variant = "base", class: className, ...rest }: FontProps) => {
    useStylesScoped$(styles);
    return (
      <h1 class={`Heading-${variant} ${className}`} {...rest}>
        <Slot />
      </h1>
    );
  }
);

export const Text = component$(
  ({ variant = "base", class: className, ...rest }: FontProps) => {
    useStylesScoped$(styles);
    return (
      <p class={`Text-${variant} ${className}`} {...rest}>
        <Slot />
      </p>
    );
  }
);


