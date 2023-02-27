import type { HTMLAttributes } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  align?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  flex?: string;
  gap?: string;
}

export const Flex = component$(
  ({
    flex,
    align,
    gap,
    justify,
    wrap,
    direction,
    style,
    ...rest
  }: FlexProps) => {
    const flexStyles = `
      display: flex;
      list-style-type: none;
      justify-content: ${justify || "flex-start"};
      flex-direction: ${direction || "row"};
      flex: ${flex || "0"};
      align-items: ${align || "stretch"};
      gap: ${gap || "0"};
      flex-wrap: ${wrap || "nowrap"};
      ${style}
    `;

    return (
      <div {...rest} style={flexStyles}>
        <Slot />
      </div>
    );
  }
);
